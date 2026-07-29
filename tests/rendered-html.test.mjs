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

  assert.match(homeHtml, />55</);
  assert.match(homeHtml, /verified MCQs live/);
  assert.match(homeHtml, /Protein synthesis occurs in the/);
  assert.match(homeHtml, /neetug-bio-520996/);
  assert.match(homeHtml, /Free chapter-wise NEET Biology MCQs for Indian students/);
  assert.match(homeHtml, /href="\/site-map"/);
  assert.doesNotMatch(homeHtml, /SEO content pipeline/);
  assert.doesNotMatch(homeHtml, /generated from the same publishing pipeline/);

  assert.match(biologyHtml, /55<!-- --> verified 4-option questions/);
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
  assert.match(sitemapHtml, /All MCQ pages/);
  assert.match(sitemapHtml, /neetug-bio-520996/);
  assert.match(questionHead, /Protein synthesis occurs in the ribosomes: NEET Biology MCQ/);
  assert.match(questionHead, /og:url/);
});
