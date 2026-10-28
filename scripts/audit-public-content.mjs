// Read-only editorial inventory. No quality score or automatic deletion decisions.
// Usage: node scripts/audit-public-content.mjs /absolute/path/to/playwright [output.json]
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(process.argv[2] || "playwright");
const output = resolve(process.argv[3] || "work/public-content-audit.json");
const origin = "https://medqgo.com";
const browser = await chromium.launch({ headless: true, channel: "chrome" });
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
// Technical QA must not create advertising requests or analytics engagement.
await context.route("**/*", async route => {
  const host = new URL(route.request().url()).hostname;
  if (/(^|\.)(googlesyndication\.com|doubleclick\.net|google-analytics\.com|googletagmanager\.com|googleadservices\.com|cloudflareinsights\.com)$/.test(host)) {
    return route.abort();
  }
  return route.continue();
});
const results = [];
try {
  const index = await context.newPage();
  const sitemapResponse = await index.goto(`${origin}/sitemap.xml`, { waitUntil: "domcontentloaded", timeout: 30000 });
  if (sitemapResponse?.status() !== 200) throw new Error(`Sitemap HTTP ${sitemapResponse?.status()}`);
  const urls = await index.locator("loc").allTextContents();
  if (!urls.length || urls.some(url => new URL(url).origin !== origin)) throw new Error("Unexpected sitemap contents");
  await index.close();
  const queue = [...new Set(urls)];
  await Promise.all(Array.from({ length: 3 }, async () => {
    const page = await context.newPage();
    while (queue.length) {
      const url = queue.shift();
      try {
        const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 25000 });
        const record = await page.evaluate(() => {
          const main = document.querySelector("main") || document.body;
          const article = main.querySelector("article") || main;
          const text = article.innerText || "";
          return {
            title: document.title,
            h1: [...main.querySelectorAll("h1")].map(el => el.textContent.trim()),
            headings: [...article.querySelectorAll("h2,h3")].map(el => el.textContent.trim()),
            words: text.split(/\s+/).filter(Boolean).length,
            // Triage evidence only: short content is not automatically low quality.
            canonical: document.querySelector('link[rel="canonical"]')?.href || null,
            robots: document.querySelector('meta[name="robots"]')?.content || null,
            sourceLinks: [...article.querySelectorAll('a[href^="http"]')].map(el => ({ label: el.textContent.trim(), url: el.href })),
            internalLinks: [...new Set([...main.querySelectorAll("a[href]")].map(el => el.href).filter(href => href.startsWith(location.origin)))],
            teacherRoleClaim: document.body.innerText.includes("University Biology Instructor"),
            exclusiveImmunityTask: text.includes("Place each NCERT term in one column"),
            hasGenericNcbiReference: [...article.querySelectorAll("a[href]")].some(el => /^https:\/\/www\.ncbi\.nlm\.nih\.gov\/books\/?$/.test(el.href)),
            hasPdfDownloadLink: [...main.querySelectorAll("a[href]")].some(el => /\.pdf(?:[?#]|$)/i.test(el.href) && new URL(el.href).origin === location.origin),
            width: window.innerWidth,
            documentWidth: document.documentElement.scrollWidth,
          };
        });
        results.push({ url, status: response?.status(), finalUrl: page.url(), ...record, editorialDecision: "pending-human-editorial-triage", humanReview: "not-established-by-this-audit" });
      } catch (error) {
        results.push({ url, error: error.message });
      }
    }
    await page.close();
  }));
  results.sort((a, b) => a.url.localeCompare(b.url));
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, JSON.stringify({ checkedAt: new Date().toISOString(), source: `${origin}/sitemap.xml`, method: "Chrome read-only DOM inventory; advertising and measurement requests blocked; no forms submitted", limits: "No scientific certification, plagiarism verdict, licensing clearance, human review or private AdSense diagnosis. Width is a DOM snapshot, not complete responsive verification.", results }, null, 2) + "\n");
  console.log(JSON.stringify({ output, sitemapUrls: urls.length, scanned: results.length, http200: results.filter(r => r.status === 200).length, errors: results.filter(r => r.error).length, teacherRoleClaims: results.filter(r => r.teacherRoleClaim).length, genericNcbi: results.filter(r => r.hasGenericNcbiReference).map(r => r.url), exclusiveImmunityTask: results.filter(r => r.exclusiveImmunityTask).map(r => r.url), widthFlags: results.filter(r => r.documentWidth > r.width).map(r => r.url) }, null, 2));
} finally {
  await browser.close();
}
