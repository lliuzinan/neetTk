import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import nextConfig from "../next.config.ts";

test("keeps legacy GSC routes pointed at a live revision hub", async () => {
  const redirects = await nextConfig.redirects();
  assert.equal(redirects.find((redirect) => redirect.source === "/mock-test")?.destination, "/neet-ug/biology");
  assert.equal(redirects.find((redirect) => redirect.source === "/daily-mcq")?.destination, "/neet-ug/biology");
});

test("renders the independent revision home and topic library", async () => {
  const [homeHtml, biologyHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology.html", import.meta.url), "utf8"),
  ]);
  assert.match(homeHtml, /Build a clearer NEET Biology revision routine/);
  assert.match(homeHtml, /in-depth revision notes/);
  assert.match(homeHtml, /Join workbook early access/);
  assert.doesNotMatch(homeHtml, /verified MCQs live/);
  assert.doesNotMatch(homeHtml, /Protein synthesis occurs in the/);
  assert.match(biologyHtml, /NEET Biology revision library/);
  assert.match(biologyHtml, /How to use this library/);
  assert.match(biologyHtml, /Human respiration/);
});

test("publishes only revision URLs in the sitemap", async () => {
  const [sitemapHtml, sitemapXml] = await Promise.all([
    readFile(new URL("../.next/server/app/site-map.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8"),
  ]);
  assert.match(sitemapHtml, /NEET Biology revision sitemap/);
  assert.match(sitemapHtml, /Revision workbook early access/);
  assert.match(sitemapHtml, /Human respiration/);
  assert.doesNotMatch(sitemapHtml, /All MCQ pages/);
  assert.doesNotMatch(sitemapXml, /\/q\//);
  assert.doesNotMatch(sitemapXml, /\/practice/);
  assert.match(sitemapXml, /human-respiration/);
  assert.doesNotMatch(sitemapXml, /carbohydrates-proteins-lipids-nucleic-acids/);
  assert.doesNotMatch(sitemapXml, /recombinant-dna-technology/);
});

test("renders the revision workbook early-access page without a question download", async () => {
  const pdfHtml = await readFile(new URL("../.next/server/app/neet-biology-pdf.html", import.meta.url), "utf8");
  assert.match(pdfHtml, /NEET Biology revision workbook/);
  assert.match(pdfHtml, /Join early access/);
  assert.match(pdfHtml, /WhatsApp number/);
  assert.doesNotMatch(pdfHtml, /30 original, reviewed/);
  assert.doesNotMatch(pdfHtml, /Download free PDF sample/);
});

test("renders in-depth topic guides and the trust pages", async () => {
  const [topicHtml, endocrineHtml, aboutHtml, privacyHtml, termsHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/human-respiration.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/endocrine-system-and-hormones.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/about.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/privacy.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/terms.html", import.meta.url), "utf8"),
  ]);
  assert.match(topicHtml, /Human respiration: the high-yield sequence/);
  assert.match(topicHtml, /How to use this guide/);
  assert.match(topicHtml, /Published: .*August 5, 2026/);
  assert.match(topicHtml, /Last updated: .*August 21, 2026/);
  assert.match(topicHtml, /Related revision guides/);
  assert.match(topicHtml, /Exam-style checkpoints/);
  assert.match(topicHtml, /Article/);
  assert.doesNotMatch(topicHtml, /Quick MCQ practice/);
  assert.match(endocrineHtml, /endocrine-blood-glucose-feedback-v1\.png/);
  assert.match(endocrineHtml, /Negative-feedback regulation of blood glucose through insulin and glucagon/);
  assert.doesNotMatch(endocrineHtml, /MCQ practice, and answer explanations/);
  assert.match(aboutHtml, /independently prepared NEET-UG Biology revision notes/);
  assert.match(privacyHtml, /Google Analytics 4/);
  assert.match(termsHtml, /Educational Use/);
});
