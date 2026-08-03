import { createSign } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const API_BASE = "https://searchconsole.googleapis.com/webmasters/v3/sites";

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

function daysAgo(days) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().slice(0, 10);
}

function base64url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function loadServiceAccount() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (raw) {
    const value = raw.trim();
    if (value.startsWith("{")) return JSON.parse(value);
    return JSON.parse(readFileSync(value, "utf8"));
  }

  const path = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GSC_SERVICE_ACCOUNT_FILE;
  if (path) return JSON.parse(readFileSync(path, "utf8"));

  throw new Error(
    "Missing GSC service account credentials. Set GSC_SERVICE_ACCOUNT_JSON, GOOGLE_SERVICE_ACCOUNT_JSON, GOOGLE_APPLICATION_CREDENTIALS, or GSC_SERVICE_ACCOUNT_FILE.",
  );
}

async function accessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: serviceAccount.client_email,
    scope: GSC_SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;
  const signature = createSign("RSA-SHA256").update(unsigned).sign(serviceAccount.private_key);
  const jwt = `${unsigned}.${base64url(signature)}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!response.ok) throw new Error(`Google token request failed: ${response.status} ${await response.text()}`);
  const data = await response.json();
  return data.access_token;
}

async function searchAnalytics({ token, siteUrl, startDate, endDate, dimensions, rowLimit }) {
  const response = await fetch(`${API_BASE}/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions,
      rowLimit,
      startRow: 0,
      searchType: "web",
    }),
  });
  if (!response.ok) throw new Error(`GSC query failed: ${response.status} ${await response.text()}`);
  const data = await response.json();
  return data.rows || [];
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function classify(row, { minImpressions, lowCtr }) {
  const [query = "", page = ""] = row.keys || [];
  const impressions = row.impressions || 0;
  const clicks = row.clicks || 0;
  const ctr = row.ctr || 0;
  const position = row.position || 0;
  const actions = [];

  if (impressions >= minImpressions && clicks === 0) {
    actions.push("Rewrite title/meta to match the query; add the query phrase in H1/H2 or intro if relevant.");
  }
  if (impressions >= minImpressions && ctr > 0 && ctr < lowCtr) {
    actions.push("CTR is low; make title more specific, add answer/PDF intent, and improve meta description.");
  }
  if (position >= 8 && position <= 30) {
    actions.push("Near-ranking page; strengthen internal links, add examples, and expand the matching section.");
  }
  if (/pdf|download|free/i.test(query) && !/pdf/i.test(page)) {
    actions.push("PDF intent query; add or strengthen link to /neet-biology-pdf from this page.");
  }
  if (/neet|ncert|biology/i.test(query) && actions.length === 0) {
    actions.push("Relevant impression; monitor and keep page indexed.");
  }

  return {
    query,
    page,
    clicks,
    impressions,
    ctr: Number((ctr * 100).toFixed(2)),
    position: Number(position.toFixed(1)),
    priority: actions.length && impressions >= minImpressions ? "high" : actions.length ? "medium" : "monitor",
    actions,
  };
}

function writeOutputs(rows, outBase) {
  mkdirSync(outBase.split("/").slice(0, -1).join("/") || ".", { recursive: true });
  writeFileSync(`${outBase}.json`, `${JSON.stringify(rows, null, 2)}\n`);
  const header = ["priority", "query", "page", "clicks", "impressions", "ctr_percent", "position", "actions"];
  const lines = [header.join(",")];
  for (const row of rows) {
    lines.push([
      row.priority,
      row.query,
      row.page,
      row.clicks,
      row.impressions,
      row.ctr,
      row.position,
      row.actions.join(" | "),
    ].map(csvEscape).join(","));
  }
  writeFileSync(`${outBase}.csv`, `${lines.join("\n")}\n`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const siteUrl = args.site || process.env.GSC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://medqgo.com/";
  const endDate = args.end || process.env.GSC_END_DATE || daysAgo(2);
  const startDate = args.start || process.env.GSC_START_DATE || daysAgo(9);
  const rowLimit = Number(args.limit || process.env.GSC_ROW_LIMIT || 250);
  const minImpressions = Number(args["min-impressions"] || process.env.GSC_MIN_IMPRESSIONS || 5);
  const lowCtr = Number(args["low-ctr"] || process.env.GSC_LOW_CTR || 0.02);
  const outBase = args.out || "data/gsc/opportunities";

  const serviceAccount = loadServiceAccount();
  const token = await accessToken(serviceAccount);
  const rows = await searchAnalytics({
    token,
    siteUrl,
    startDate,
    endDate,
    dimensions: ["query", "page"],
    rowLimit,
  });
  const opportunities = rows
    .map((row) => classify(row, { minImpressions, lowCtr }))
    .filter((row) => row.actions.length)
    .sort((a, b) => b.impressions - a.impressions || a.position - b.position);

  writeOutputs(opportunities, outBase);
  console.log(JSON.stringify({
    siteUrl,
    startDate,
    endDate,
    inputRows: rows.length,
    opportunities: opportunities.length,
    outputs: [`${outBase}.json`, `${outBase}.csv`],
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
