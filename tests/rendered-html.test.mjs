import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import nextConfig from "../next.config.ts";

test("keeps legacy GSC routes pointed at a live revision hub", async () => {
  const redirects = await nextConfig.redirects();
  assert.equal(redirects.find((redirect) => redirect.source === "/mock-test")?.destination, "/neet-ug/biology");
  assert.equal(redirects.find((redirect) => redirect.source === "/daily-mcq")?.destination, "/neet-ug/biology");
  assert.equal(redirects.find((redirect) => redirect.source === "/neet-ug/biology/:topicSlug/q/:questionId")?.destination, "/neet-ug/biology/:topicSlug");
  assert.equal(redirects.find((redirect) => redirect.source === "/neet-ug/biology/practice/:topicSlug")?.destination, "/neet-ug/biology/:topicSlug");
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
  assert.match(sitemapXml, /photosynthesis-in-higher-plants/);
  assert.match(sitemapXml, /plant-respiration/);
  assert.match(sitemapXml, /digestion-and-absorption/);
  assert.match(sitemapXml, /blood-and-circulation/);
  assert.doesNotMatch(sitemapXml, /carbohydrates-proteins-lipids-nucleic-acids/);
  assert.doesNotMatch(sitemapXml, /recombinant-dna-technology/);
});

test("renders the revision workbook early-access page without a question download", async () => {
  const pdfHtml = await readFile(new URL("../.next/server/app/neet-biology-pdf.html", import.meta.url), "utf8");
  assert.match(pdfHtml, /NEET Biology revision workbook/);
  assert.match(pdfHtml, /Join early access/);
  assert.match(pdfHtml, /I agree to the processing of my email for revision-workbook early access/);
  assert.match(pdfHtml, /Privacy Policy/);
  assert.doesNotMatch(pdfHtml, /WhatsApp number/);
  assert.doesNotMatch(pdfHtml, /30 original, reviewed/);
  assert.doesNotMatch(pdfHtml, /Download free PDF sample/);
});

test("renders in-depth topic guides and the trust pages", async () => {
  const [topicHtml, endocrineHtml, respirationHtml, excretionHtml, immunityHtml, neuronHtml, dnaHtml, cellHtml, mutationHtml, aboutHtml, privacyHtml, termsHtml, authorHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/human-respiration.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/endocrine-system-and-hormones.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/human-respiration.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/excretion-and-kidney-function.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/immunity-pathogens-vaccines.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/neuron-nerve-impulse-synapse.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/dna-rna-replication-transcription-translation.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/cell-theory-and-cell-organelles.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/mutation-and-gene-expression.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/about.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/privacy.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/terms.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/authors/dongfeng.html", import.meta.url), "utf8"),
  ]);
  assert.match(topicHtml, /Human respiration: the high-yield sequence/);
  assert.match(topicHtml, /How to use this guide/);
  assert.match(topicHtml, /Published: .*August 5, 2026/);
  assert.match(topicHtml, /Last updated: .*September 11, 2026/);
  assert.match(topicHtml, /Related revision guides/);
  assert.match(topicHtml, /Exam-style checkpoints/);
  assert.match(topicHtml, /Article/);
  assert.doesNotMatch(topicHtml, /Quick MCQ practice/);
  assert.match(endocrineHtml, /endocrine-blood-glucose-feedback-v1\.png/);
  assert.match(endocrineHtml, /endocrine-hypothalamus-pituitary-thyroid-axis-v1\.png/);
  assert.match(endocrineHtml, /Negative-feedback regulation of blood glucose through insulin and glucagon/);
  assert.match(endocrineHtml, /Feedback direction: use the arrow test/);
  assert.match(endocrineHtml, /Endocrine quick-reference table: source, action and mix-up/);
  assert.match(endocrineHtml, /Pancreatic beta cells/);
  assert.match(endocrineHtml, /OpenStax Anatomy and Physiology: Hormones and feedback loops/);
  assert.match(endocrineHtml, /Three self-checks before you close the chapter/);
  assert.match(endocrineHtml, /Endocrine glands are ductless/);
  assert.match(endocrineHtml, /National Institute of General Medical Sciences: What is a hormone/);
  assert.match(endocrineHtml, /kebo119\.pdf/);
  assert.match(endocrineHtml, /Written by:.*DongFeng/);
  assert.match(endocrineHtml, /authors\/dongfeng/);
  assert.match(endocrineHtml, /University Biology Instructor/);
  assert.match(endocrineHtml, /2026-09-10/);
  assert.doesNotMatch(endocrineHtml, /MCQ practice, and answer explanations/);
  assert.match(respirationHtml, /human-respiration-gas-route-v1\.png/);
  assert.match(excretionHtml, /excretion-nephron-arrows-v1\.png/);
  assert.match(immunityHtml, /immunity-barrier-memory-v1\.png/);
  assert.match(neuronHtml, /neuron-signal-direction-v1\.png/);
  assert.match(dnaHtml, /dna-rna-information-flow-v1\.png/);
  assert.match(cellHtml, /cell-organelles-protein-route-v1\.png/);
  assert.match(mutationHtml, /mutation-expression-change-use-v2\.png/);
  assert.match(aboutHtml, /independently prepared NEET-UG Biology revision notes/);
  assert.match(privacyHtml, /Google Analytics 4/);
  assert.match(termsHtml, /Educational Use/);
  assert.match(authorHtml, /Role at MedQGo/);
  assert.match(authorHtml, /does not invent degrees, institutional affiliations, endorsements, or student testimonials/);
});

test("publishes four complete NCERT-aligned revision guides", async () => {
  const [photosynthesisHtml, plantRespirationHtml, digestionHtml, circulationHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/photosynthesis-in-higher-plants.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/plant-respiration.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/digestion-and-absorption.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/blood-and-circulation.html", import.meta.url), "utf8"),
  ]);
  assert.match(photosynthesisHtml, /Photosystems: keep the numbering and sequence apart/);
  assert.match(photosynthesisHtml, /kebo111\.pdf/);
  assert.match(photosynthesisHtml, /photosynthesis-chloroplast-route-v1\.png/);
  assert.match(plantRespirationHtml, /Glycolysis is the shared starting route/);
  assert.match(plantRespirationHtml, /kebo112\.pdf/);
  assert.match(plantRespirationHtml, /plant-respiration-route-v1\.png/);
  assert.match(digestionHtml, /The small intestine is built for absorption/);
  assert.match(digestionHtml, /kebo116\.pdf/);
  assert.match(digestionHtml, /digestion-absorption-route-v1\.png/);
  assert.match(circulationHtml, /Start with the two loops of double circulation/);
  assert.match(circulationHtml, /kebo118\.pdf/);
  assert.match(circulationHtml, /blood-double-circulation-v1\.png/);
  for (const html of [photosynthesisHtml, plantRespirationHtml, digestionHtml, circulationHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /Common confusions to check/);
    assert.match(html, /A 15-minute recall routine/);
  }
});
