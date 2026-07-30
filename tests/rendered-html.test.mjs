import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders seeded qbank content on public index pages", async () => {
  const [homeHtml, biologyHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8"),
    readFile(
      new URL("../.next/server/app/neet-ug/biology.html", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(homeHtml, />97</);
  assert.match(homeHtml, /verified MCQs live/);
  assert.match(homeHtml, /Protein synthesis occurs in the/);
  assert.match(homeHtml, /neetug-bio-520996/);
  assert.match(homeHtml, /Free chapter-wise NEET Biology MCQs for Indian students/);
  assert.match(homeHtml, /href="\/site-map"/);
  assert.match(homeHtml, /href="\/neet-biology-pdf/);
  assert.match(homeHtml, /Get free PDF/);
  assert.doesNotMatch(homeHtml, /SEO content pipeline/);
  assert.doesNotMatch(homeHtml, /generated from the same publishing pipeline/);

  assert.match(biologyHtml, /97<!-- --> verified 4-option questions/);
  assert.match(biologyHtml, /Cell theory and cell organelles/);
  assert.match(biologyHtml, /Growing topics/);
  assert.doesNotMatch(homeHtml, />0<\/span><p>verified MCQs live/);
  assert.doesNotMatch(biologyHtml, /Start with <!-- -->0<!-- --> verified/);
});

test("renders HTML sitemap and question SEO metadata", async () => {
  const [sitemapHtml, questionHead] = await Promise.all([
    readFile(new URL("../.next/server/app/site-map.html", import.meta.url), "utf8"),
    readFile(
      new URL("../.next/server/app/neet-ug/biology/cell-theory-and-cell-organelles/q/neetug-bio-520996.segments/_head.segment.rsc", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(sitemapHtml, /NEET Biology HTML sitemap/);
  assert.match(sitemapHtml, /Free NEET Biology MCQ PDF/);
  assert.match(sitemapHtml, /All MCQ pages/);
  assert.match(sitemapHtml, /neetug-bio-520996/);
  assert.match(questionHead, /Protein synthesis occurs in the ribosomes: NEET Biology MCQ/);
  assert.match(questionHead, /og:url/);
});

test("renders PDF waitlist landing page", async () => {
  const pdfHtml = await readFile(
    new URL("../.next/server/app/neet-biology-pdf.html", import.meta.url),
    "utf8",
  );

  assert.match(pdfHtml, /Free NEET Biology MCQ PDF/);
  assert.match(pdfHtml, /Join early access/);
  assert.match(pdfHtml, /WhatsApp number/);
  assert.doesNotMatch(pdfHtml, /Telegram/);
});

test("renders topic-specific SEO content", async () => {
  const topicHtml = await readFile(
    new URL("../.next/server/app/neet-ug/biology/cell-theory-and-cell-organelles.html", import.meta.url),
    "utf8",
  );

  assert.match(topicHtml, /High-yield NCERT focus/);
  assert.match(topicHtml, /Common NEET traps/);
  assert.match(topicHtml, /Which cell organelles are most important for NEET Biology/);
  assert.match(topicHtml, /Get NEET Biology MCQs as a chapter-wise PDF/);
  assert.match(topicHtml, /FAQPage/);
});
