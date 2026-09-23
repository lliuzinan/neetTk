import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import nextConfig from "../next.config.ts";

function jsonLdItems(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].flatMap((match) => {
    const parsed = JSON.parse(match[1]);
    const items = Array.isArray(parsed) ? parsed : [parsed];
    return items.flatMap((item) => item["@graph"] || item);
  });
}

test("publishes the conservation and microbes guides with original assets and complete learning resources", async () => {
  const sitemap = await readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8");
  const fixtures = [
    { slug: "biodiversity-and-conservation", image: "biodiversity-conservation-in-situ-ex-situ-v1.webp", source: "lebo113.pdf", examples: ["16^0.25 = 2", "13.1.2"], related: ["organisms-and-populations", "ecosystem-energy-flow-and-ecological-pyramids", "evolution-and-natural-selection"] },
    { slug: "microbes-in-human-welfare", image: "microbes-sewage-oxygen-route-v1.webp", source: "lebo108.pdf", examples: ["(180 - 36) / 180 x 100 = 80%", "8.3"], related: ["five-kingdom-classification", "plant-respiration", "biotechnology-applications"] },
  ];
  for (const item of fixtures) {
    const html = await readFile(new URL(`../.next/server/app/neet-ug/biology/${item.slug}.html`, import.meta.url), "utf8");
    const article = jsonLdItems(html).find((entry) => entry["@type"] === "Article");
    assert.equal(article.datePublished, "2026-09-23");
    assert.equal(article.dateModified, article.datePublished);
    assert.equal(article.author.name, "DongFeng");
    assert.ok(html.includes(`src="/images/biology/${item.image}"`));
    assert.ok((await readFile(new URL(`../public/images/biology/${item.image}`, import.meta.url))).length > 1000);
    assert.ok(html.includes(item.source));
    for (const example of item.examples) assert.ok(html.includes(example), `${item.slug}: ${example}`);
    for (const related of item.related) {
      assert.ok(html.includes(`href="/neet-ug/biology/${related}"`));
      await readFile(new URL(`../.next/server/app/neet-ug/biology/${related}.html`, import.meta.url));
    }
    assert.match(html, /<table/);
    assert.match(html, /Editorial note and disclaimer/);
    assert.ok(sitemap.includes(`/neet-ug/biology/${item.slug}</loc>`));
  }
});

test("keeps consent defaults ahead of advertising and does not preload GA", async () => {
  const html = await readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8");
  const scripts = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].map((match) => match[0]);
  const defaults = scripts.findIndex((script) => script.includes('id="consent-defaults"'));
  const ads = scripts.findIndex((script) => script.includes('src="https://pagead2.googlesyndication.com'));
  assert.ok(defaults >= 0 && ads > defaults);
  assert.ok(!scripts.some((script) => /src="https:\/\/www.googletagmanager.com\/gtag/.test(script)));
});

test("keeps article first publication and modification dates consistent across HTML and sitemap", async () => {
  const sitemap = await readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8");
  for (const [slug, published] of [
    ["human-reproduction", "2026-09-17"], ["reproductive-health", "2026-09-17"],
    ["molecular-basis-of-inheritance", "2026-09-17"], ["evolution-and-natural-selection", "2026-09-18"],
    ["organisms-and-populations", "2026-09-18"], ["pedigree-analysis-and-inheritance-patterns", "2026-09-16"],
    ["molecular-tools-and-dna-analysis", "2026-09-16"], ["biotechnology-applications", "2026-09-16"],
  ]) {
    const html = await readFile(new URL(`../.next/server/app/neet-ug/biology/${slug}.html`, import.meta.url), "utf8");
    const ld = jsonLdItems(html);
    const article = ld.find((item) => item["@type"] === "Article");
    assert.equal(article.datePublished, published, slug);
    const modified = ["pedigree-analysis-and-inheritance-patterns", "molecular-tools-and-dna-analysis"].includes(slug) ? "2026-09-20" : "2026-09-18";
    assert.equal(article.dateModified, modified, slug);
    const entry = sitemap.split("<url>").find((item) => item.includes(`/biology/${slug}</loc>`));
    assert.ok(entry?.includes(`${modified}T00:00:00.000Z`), slug);
  }
});

test("keeps site JSON-LD in one page-level graph without duplicate Organization or WebSite entities", async () => {
  const [homeHtml, topicHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/ecosystem-energy-flow-and-ecological-pyramids.html", import.meta.url), "utf8"),
  ]);
  for (const [label, html] of [["home", homeHtml], ["article", topicHtml]]) {
    const ld = jsonLdItems(html);
    assert.equal(ld.filter((item) => item["@type"] === "Organization").length, 1, label);
    assert.equal(ld.filter((item) => item["@type"] === "WebSite").length, 1, label);
    assert.equal([...html.matchAll(/<script type="application\/ld\+json">/g)].length, 1, label);
  }
  assert.ok(jsonLdItems(topicHtml).some((item) => item["@type"] === "Article"));
});

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
  assert.match(homeHtml, /medqgo-biology-study-journey-v1\.webp/);
  assert.match(homeHtml, /A study journey connecting a eukaryotic cell, DNA, human physiology, and an ecosystem/);
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
  assert.match(topicHtml, /Published: .*September 5, 2026/);
  assert.match(topicHtml, /Last updated: .*September 20, 2026/);
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
  assert.match(privacyHtml, /AdSense script while its site review is pending/);
  assert.match(privacyHtml, /even when no advertisement is visible/);
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
  assert.match(digestionHtml, /kebo1ps\.pdf/);
  assert.match(digestionHtml, /digestion-absorption-route-v1\.png/);
  assert.match(circulationHtml, /Start with the two loops of double circulation/);
  assert.match(circulationHtml, /kebo115\.pdf/);
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
  assert.match(floweringPlantsHtml, /lebo101\.pdf/);
  assert.match(mendelianHtml, /Inheritance questions begin with alleles entering gametes/);
  assert.match(mendelianHtml, /mendelian-segregation-v1\.png/);
  assert.match(mendelianHtml, /lebo104\.pdf/);
  assert.match(recombinantHtml, /Recombinant DNA is a controlled sequence, not a single tool/);
  assert.match(recombinantHtml, /recombinant-dna-workflow-v1\.png/);
  assert.match(recombinantHtml, /lebo109\.pdf/);
  for (const html of [floweringPlantsHtml, mendelianHtml, recombinantHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /September 14, 2026/);
  }
});

test("publishes the chromosomal basis of inheritance guide with its original linkage visual", async () => {
  const html = await readFile(new URL("../.next/server/app/neet-ug/biology/chromosomal-basis-of-inheritance.html", import.meta.url), "utf8");
  assert.match(html, /Chromosomes give inheritance its physical route/);
  assert.match(html, /chromosomal-linkage-crossing-over-v1\.png/);
  assert.match(html, /lebo104\.pdf/);
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
  assert.match(reproductiveHealthHtml, /Start with the biological event a method changes/);
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

test("publishes evolution and population ecology guides with original comparison visuals", async () => {
  const [evolutionHtml, populationsHtml, sitemapXml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/evolution-and-natural-selection.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/organisms-and-populations.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8"),
  ]);
  assert.match(evolutionHtml, /Evolution is a population change across generations/);
  assert.match(evolutionHtml, /evolution-natural-selection-route-v1\.png/);
  assert.match(evolutionHtml, /lebo106\.pdf/);
  assert.match(populationsHtml, /Begin with an organism in its environment/);
  assert.match(populationsHtml, /organisms-populations-growth-v1\.png/);
  assert.match(populationsHtml, /lebo111\.pdf/);
  for (const html of [evolutionHtml, populationsHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /Published by:.*MedQGo/);
    assert.match(html, /Common confusions to check/);
    assert.match(html, /Related revision guides/);
  }
  assert.match(sitemapXml, /evolution-and-natural-selection/);
  assert.match(sitemapXml, /organisms-and-populations/);
});

test("publishes the ecosystem energy guide with a source-grounded visual and ecology study route", async () => {
  const [html, sitemapXml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/ecosystem-energy-flow-and-ecological-pyramids.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8"),
  ]);
  assert.match(html, /An ecosystem has two linked accounting systems/);
  assert.match(html, /ecosystem-energy-and-pyramids-v1\.png/);
  assert.match(html, /lebo112\.pdf/);
  assert.match(html, /The unit-and-arrow check/);
  assert.match(html, /Organisms and populations/);
  assert.match(html, /Photosynthesis in higher plants/);
  assert.match(html, /Published:\s*(?:<!-- -->)?September 20, 2026/);
  assert.match(sitemapXml, /ecosystem-energy-flow-and-ecological-pyramids/);
  assert.match(sitemapXml, /2026-09-20T00:00:00\.000Z/);
});

test("publishes connected flowering-plant morphology and anatomy guides", async () => {
  const [morphologyHtml, anatomyHtml, homeHtml, sitemapXml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/morphology-of-flowering-plants.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/anatomy-of-flowering-plants.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8"),
  ]);

  assert.match(morphologyHtml, /Read a flowering plant as a map of organs and landmarks/);
  assert.match(morphologyHtml, /morphology-of-flowering-plants-organ-map-v1\.webp/);
  assert.match(morphologyHtml, /Modified organs: use visible evidence before naming the function/);
  assert.match(morphologyHtml, /kebo105\.pdf/);
  assert.match(anatomyHtml, /Build every plant section from three tissue systems/);
  assert.match(anatomyHtml, /anatomy-of-flowering-plants-stem-sections-v1\.webp/);
  assert.match(anatomyHtml, /Four transverse sections: the clues that identify them/);
  assert.match(anatomyHtml, /kebo106\.pdf/);

  for (const html of [morphologyHtml, anatomyHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /Published by:.*MedQGo/);
    assert.match(html, /Common confusions to check/);
    assert.match(html, /Related revision guides/);
    assert.match(html, /Published:\s*(?:<!-- -->)?September 21, 2026/);
  }

  assert.match(homeHtml, /Plant structure and function/);
  assert.match(sitemapXml, /morphology-of-flowering-plants/);
  assert.match(sitemapXml, /anatomy-of-flowering-plants/);
  assert.match(sitemapXml, /2026-09-21T00:00:00\.000Z/);
});

test("publishes biological classification and plant kingdom as a connected diversity cluster", async () => {
  const [classificationHtml, plantKingdomHtml, homeHtml, sitemapXml] = await Promise.all([
    readFile(new URL("../.next/server/app/neet-ug/biology/five-kingdom-classification.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/neet-ug/biology/plant-kingdom.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8"),
    readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8"),
  ]);

  assert.match(classificationHtml, /Classification works as a grid of biological evidence/);
  assert.match(classificationHtml, /five-kingdom-classification-decision-map-v1\.webp/);
  assert.match(classificationHtml, /Five kingdoms: use the combination, not one familiar feature/);
  assert.match(classificationHtml, /kebo102\.pdf/);
  assert.match(plantKingdomHtml, /Read the plant kingdom through four structural transitions/);
  assert.match(plantKingdomHtml, /plant-kingdom-trait-staircase-v1\.webp/);
  assert.match(plantKingdomHtml, /Plant groups: the feature that changes the classification/);
  assert.match(plantKingdomHtml, /kebo103\.pdf/);

  for (const html of [classificationHtml, plantKingdomHtml]) {
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /Published by:.*MedQGo/);
    assert.match(html, /Common confusions to check/);
    assert.match(html, /Related revision guides/);
    assert.match(html, /Published:\s*(?:<!-- -->)?September 22, 2026/);
  }

  assert.match(homeHtml, /Diversity and plant groups/);
  assert.match(sitemapXml, /five-kingdom-classification/);
  assert.match(sitemapXml, /plant-kingdom/);
  assert.match(sitemapXml, /2026-09-22T00:00:00\.000Z/);
});
test("publishes three distinct physiology guides with illustrations and learning routes", async () => {
  const cases = [{"slug":"enzymes-and-enzyme-action","image":"enzyme-catalytic-cycle-v1.webp","pdf":"kebo109.pdf","links":["molecular-tools-and-dna-analysis","plant-respiration","digestion-and-absorption"]},{"slug":"plant-growth-and-development","image":"root-growth-zones-v1.webp","pdf":"kebo113.pdf","links":["anatomy-of-flowering-plants","photosynthesis-in-higher-plants","sexual-reproduction-in-flowering-plants"]},{"slug":"locomotion-and-movement","image":"sarcomere-sliding-filaments-v1.webp","pdf":"kebo117.pdf","links":["neuron-nerve-impulse-synapse","blood-and-circulation","cell-theory-and-cell-organelles"]}];
  const sitemap = await readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8");
  for (const item of cases) {
    const html = await readFile(new URL("../.next/server/app/neet-ug/biology/" + item.slug + ".html", import.meta.url), "utf8");
    for (const token of [item.image, item.pdf, "NCERT anchor", "Related revision guides", ...item.links]) assert.ok(html.includes(token), item.slug + ": " + token);
    assert.match(html, /Written by:.*DongFeng/);
    assert.match(html, /September 23, 2026/);
    assert.ok(html.includes('datePublished'));
    assert.ok(html.includes('2026-09-23'));
    assert.ok(sitemap.includes(item.slug));
    assert.ok((await readFile(new URL("../public/images/biology/" + item.image, import.meta.url))).length > 1000);
  }
});
