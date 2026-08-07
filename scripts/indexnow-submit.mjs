import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const DEFAULT_KEY = "84e01c56f6764b3488dd9f225f0cdbe5";
const DEFAULT_SITE = "https://medqgo.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) args[key] = true;
    else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function normalizeSite(site) {
  return String(site || DEFAULT_SITE).replace(/\/$/, "");
}

function urlsFromSitemapXml(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim()).filter(Boolean);
}

async function readUrls({ site, sitemap, file, url, limit }) {
  if (url) return [url];
  if (file) {
    return readFileSync(file, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .slice(0, limit);
  }

  const sitemapUrl = sitemap || `${site}/sitemap.xml`;
  return urlsFromSitemapXml(await fetchText(sitemapUrl)).slice(0, limit);
}

async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status} ${await response.text()}`);
    return await response.text();
  } catch (error) {
    if (!String(error.message || "").includes("fetch failed")) throw error;
  }
  return execFileSync("curl", ["-sSL", "--fail-with-body", "--max-time", "60", url], {
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
  });
}

async function postJson(url, payload) {
  const body = JSON.stringify(payload);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body,
    });
    return { status: response.status, ok: response.ok, body: await response.text() };
  } catch (error) {
    if (!String(error.message || "").includes("fetch failed")) throw error;
  }
  const output = execFileSync("curl", [
    "-sS",
    "--max-time",
    "60",
    "-X",
    "POST",
    "-H",
    "content-type: application/json; charset=utf-8",
    "--data-binary",
    "@-",
    url,
  ], {
    input: body,
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
  });
  return { status: 200, ok: true, body: output };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const site = normalizeSite(args.site || process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE);
  const key = args.key || process.env.INDEXNOW_KEY || DEFAULT_KEY;
  const limit = Number(args.limit || 1000);
  const urls = await readUrls({
    site,
    sitemap: args.sitemap,
    file: args.file,
    url: args.url,
    limit,
  });

  if (!urls.length) throw new Error("No URLs to submit.");

  const payload = {
    host: new URL(site).host,
    key,
    keyLocation: `${site}/${key}.txt`,
    urlList: urls,
  };

  const response = await postJson(ENDPOINT, payload);

  console.log(JSON.stringify({
    endpoint: ENDPOINT,
    host: payload.host,
    keyLocation: payload.keyLocation,
    submitted: urls.length,
    status: response.status,
    ok: response.ok,
    body: response.body.slice(0, 500),
  }, null, 2));

  if (!response.ok) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
