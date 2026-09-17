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
  assert.match(homeHtml, /NEET Biology revision notes/);
  assert.match(homeHtml, /in-depth revision notes/);
  assert.match(homeHtml, /View free workbook sample/);
  assert.match(homeHtml, /Build one connected topic at a time/);
  assert.match(homeHtml, /Inheritance and variation/);
  assert.match(homeHtml, /Start reading/);
  assert.match(homeHtml, /Photosynthesis in higher plants/);
  assert.match(homeHtml, /Digestion and absorption/);
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
  assert.match(sitemapXml, /mitosis-and-meiosis/);
  assert.match(sitemapXml, /sexual-reproduction-in-flowering-plants/);
  assert.match(sitemapXml, /mendelian-inheritance/);
  assert.match(sitemapXml, /recombinant-dna-technology/);
  assert.match(sitemapXml, /chromosomal-basis-of-inheritance/);
  assert.doesNotMatch(sitemapXml, /carbohydrates-proteins-lipids-nucleic-acids/);
});

test("renders the revision workbook with a free sample and optional early access", async () => {
  const pdfHtml = await readFile(new URL("../.next/server/app/neet-biology-pdf.html", import.meta.url), "utf8");
  assert.match(pdfHtml, /NEET Biology revision workbook/);
  assert.match(pdfHtml, /A 12-minute gene-expression recall sheet/);
  assert.match(pdfHtml, /Transcription/);
  assert.match(pdfHtml, /Translation/);
  assert.match(pdfHtml, /This is an original MedQGo revision exercise/);
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
  assert.match(privacyHtml, /currently awaiting its Google AdSense site review/);
  assert.match(privacyHtml, /Google&#x27;s My Ad Center/);
  assert.match(privacyHtml, /How Google uses information from sites or apps that use its services/);
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
  assert.match(photosynthesisHtml, /data-label="Process"/);
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

test("publishes the cell cycle, mitosis and meiosis revision guide", async () => {
  const html = await readFile(new URL("../.next/server/app/neet-ug/biology/mitosis-and-meiosis.html", import.meta.url), "utf8");
  assert.match(html, /Cell cycle: copy the genome, then share it accurately/);
  assert.match(html, /Meiosis I: the reduction happens when homologues part/);
  assert.match(html, /cell-division-separation-v1\.png/);
  assert.match(html, /kebo110\.pdf/);
  assert.match(html, /Mitosis and meiosis: identify what separates/);
  assert.match(html, /Written by:.*DongFeng/);
});

test("publishes three distinct NCERT Biology revision guides with original teaching visuals", async () => {
  const [floweringPlantsHtml, mendelianHtml, recombinantHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/sexual-reproduction-in-flowering-plants.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/mendelian-inheritance.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/recombinant-dna-technology.html", import.meta.url), "utf8"),
  ]);
  assert.match(floweringPlantsHtml, /Double fertilisation has two fusion events and two products/);
  assert.match(floweringPlantsHtml, /flowering-plant-double-fertilisation-v1\.png/);
  assert.match(floweringPlantsHtml, /lebo102\.pdf/);
  assert.match(mendelianHtml, /Inheritance questions begin with alleles entering gametes/);
  assert.match(mendelianHtml, /mendelian-segregation-v1\.png/);
  assert.match(mendelianHtml, /lebo105\.pdf/);
  assert.match(recombinantHtml, /Recombinant DNA is a controlled sequence, not a single tool/);
  assert.match(recombinantHtml, /recombinant-dna-workflow-v1\.png/);
  assert.match(recombinantHtml, /lebo111\.pdf/);
  for (const html of [floweringPlantsHtml, mendelianHtml, recombinantHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /September 14, 2026/);
  }
});

test("publishes the chromosomal basis of inheritance guide with its original linkage visual", async () => {
  const html = await readFile(new URL("../.next/server/app/neet-ug/biology/chromosomal-basis-of-inheritance.html", import.meta.url), "utf8");
  assert.match(html, /Chromosomes give inheritance its physical route/);
  assert.match(html, /chromosomal-linkage-crossing-over-v1\.png/);
  assert.match(html, /lebo105\.pdf/);
  assert.match(html, /The chromosome-first check/);
  assert.match(html, /Written by:.*DongFeng/);
});

test("publishes three connected inheritance and biotechnology guides with original teaching visuals", async () => {
  const [pedigreeHtml, molecularToolsHtml, applicationsHtml, sitemapXml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/pedigree-analysis-and-inheritance-patterns.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/molecular-tools-and-dna-analysis.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/biotechnology-applications.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8"),
  ]);
  assert.match(pedigreeHtml, /Read a pedigree as evidence across generations/);
  assert.match(pedigreeHtml, /pedigree-inheritance-clues-v1\.png/);
  assert.match(pedigreeHtml, /lebo104\.pdf/);
  assert.match(molecularToolsHtml, /Molecular analysis asks a sequence of different questions/);
  assert.match(molecularToolsHtml, /molecular-tools-dna-analysis-v1\.png/);
  assert.match(molecularToolsHtml, /lebo109\.pdf/);
  assert.match(applicationsHtml, /Applications begin after the biotechnology workflow/);
  assert.match(applicationsHtml, /biotechnology-applications-map-v1\.png/);
  assert.match(applicationsHtml, /lebo110\.pdf/);
  for (const html of [pedigreeHtml, molecularToolsHtml, applicationsHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /Published by:.*MedQGo/);
    assert.match(html, /Common confusions to check/);
    assert.match(html, /Related revision guides/);
  }
  assert.match(sitemapXml, /pedigree-analysis-and-inheritance-patterns/);
  assert.match(sitemapXml, /molecular-tools-and-dna-analysis/);
  assert.match(sitemapXml, /biotechnology-applications/);
});

test("publishes the connected reproduction and molecular-inheritance revision guides", async () => {
  const [humanReproductionHtml, reproductiveHealthHtml, molecularInheritanceHtml, sitemapXml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/human-reproduction.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/reproductive-health.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/molecular-basis-of-inheritance.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8"),
  ]);
  assert.match(humanReproductionHtml, /Follow the reproductive cells, then locate each event/);
  assert.match(humanReproductionHtml, /human-reproduction-sequence-v1\.png/);
  assert.match(humanReproductionHtml, /lebo102\.pdf/);
  assert.match(reproductiveHealthHtml, /Reproductive health is an education and wellbeing concept/);
  assert.match(reproductiveHealthHtml, /reproductive-health-foundations-v1\.png/);
  assert.match(reproductiveHealthHtml, /lebo103\.pdf/);
  assert.match(molecularInheritanceHtml, /Inheritance needs DNA to be stored, copied and used/);
  assert.match(molecularInheritanceHtml, /molecular-inheritance-information-routes-v1\.png/);
  assert.match(molecularInheritanceHtml, /lebo105\.pdf/);
  for (const html of [humanReproductionHtml, reproductiveHealthHtml, molecularInheritanceHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /Published by:.*MedQGo/);
    assert.match(html, /Common confusions to check/);
    assert.match(html, /Related revision guides/);
  }
  assert.match(sitemapXml, /human-reproduction/);
  assert.match(sitemapXml, /reproductive-health/);
  assert.match(sitemapXml, /molecular-basis-of-inheritance/);
});
