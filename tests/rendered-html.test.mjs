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
  assert.match(homeHtml, /href="\/about"/);
  assert.match(homeHtml, /WebSite/);
  assert.match(homeHtml, /Organization/);
  assert.match(homeHtml, /Course/);
  assert.match(homeHtml, /Get free PDF/);
  assert.match(homeHtml, /Privacy/);
  assert.doesNotMatch(homeHtml, /SEO content pipeline/);
  assert.doesNotMatch(homeHtml, /generated from the same publishing pipeline/);

  assert.match(biologyHtml, /97<!-- --> verified 4-option questions/);
  assert.match(biologyHtml, /Cell theory and cell organelles/);
  assert.match(biologyHtml, /Growing topics/);
  assert.doesNotMatch(homeHtml, />0<\/span><p>verified MCQs live/);
  assert.doesNotMatch(biologyHtml, /Start with <!-- -->0<!-- --> verified/);
});

test("renders HTML sitemap and question SEO metadata", async () => {
  const [sitemapHtml, questionHead, questionFull] = await Promise.all([
    readFile(new URL("../.next/server/app/site-map.html", import.meta.url), "utf8"),
    readFile(
      new URL("../.next/server/app/neet-ug/biology/cell-theory-and-cell-organelles/q/neetug-bio-520996.segments/_head.segment.rsc", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../.next/server/app/neet-ug/biology/cell-theory-and-cell-organelles/q/neetug-bio-520996.segments/_full.segment.rsc", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(sitemapHtml, /NEET Biology HTML sitemap/);
  assert.match(sitemapHtml, /Free NEET Biology MCQ PDF/);
  assert.match(sitemapHtml, /Chapter-wise NEET Biology MCQs/);
  assert.match(sitemapHtml, /About MedQGo/);
  assert.match(sitemapHtml, /All MCQ pages/);
  assert.match(sitemapHtml, /neetug-bio-520996/);
  assert.match(questionHead, /Protein synthesis occurs in the ribosomes: NEET Biology MCQ/);
  assert.match(questionHead, /og:url/);
  assert.match(questionFull, /Protein synthesis occurs in the ribosomes: NEET Biology MCQ/);
  assert.match(questionFull, /Last updated: /);
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
  const [topicHtml, noteHtml] = await Promise.all([
    readFile(
      new URL("../.next/server/app/neet-ug/biology/cell-theory-and-cell-organelles.html", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../.next/server/app/neet-ug/biology/notes/cell-theory-and-cell-organelles.html", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(topicHtml, /High-yield NCERT focus/);
  assert.match(topicHtml, /Common NEET traps/);
  assert.match(topicHtml, /Which cell organelles are most important for NEET Biology/);
  assert.match(topicHtml, /Get NEET Biology MCQs as a chapter-wise PDF/);
  assert.match(topicHtml, /FAQPage/);
  assert.match(noteHtml, /Core concepts to revise/);
  assert.match(noteHtml, /Example MCQs and explanations/);
  assert.match(noteHtml, /Article/);
});

test("renders trust and conversion SEO pages", async () => {
  const [aboutHtml, contactHtml, privacyHtml, termsHtml, pdfGuideHtml, chapterHtml, answersHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/about.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/contact.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/privacy.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/terms.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/free-mcq-pdf.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/chapter-wise-mcqs.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/mcqs-with-answers.html", import.meta.url), "utf8"),
  ]);

  assert.match(aboutHtml, /About MedQGo/);
  assert.match(contactHtml, /a9665670@163.com/);
  assert.match(privacyHtml, /Google Analytics 4/);
  assert.match(termsHtml, /Educational Use/);
  assert.match(pdfGuideHtml, /Free NEET Biology MCQ PDF/);
  assert.match(chapterHtml, /NEET Biology Chapter-wise MCQs/);
  assert.match(answersHtml, /NEET Biology MCQs with Answers/);
});
