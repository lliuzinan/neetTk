import { readFileSync } from "node:fs";

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
  const response = await fetch(sitemapUrl);
  if (!response.ok) throw new Error(`Failed to fetch sitemap: ${response.status} ${await response.text()}`);
  return urlsFromSitemapXml(await response.text()).slice(0, limit);
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

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const body = await response.text();

  console.log(JSON.stringify({
    endpoint: ENDPOINT,
    host: payload.host,
    keyLocation: payload.keyLocation,
    submitted: urls.length,
    status: response.status,
    ok: response.ok,
    body: body.slice(0, 500),
  }, null, 2));

  if (!response.ok) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
