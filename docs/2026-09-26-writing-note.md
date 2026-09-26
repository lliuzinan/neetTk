# September 26: three revision guides

Status: local editorial work; not deployed. Earlier September 24 changes are preserved.

## Learning briefs and originality boundaries

- Living world: explain how a name, a taxon and a rank differ. Relationships: identification/naming/classification; nested categories; genus/specific epithet; shared lower group implies shared higher groups. Confusions: epithet alone identifies a species; same family implies same genus; rank measures evolutionary progress. Original assets: nested grouping illustration, an inference-permission table and an invented specimen-register exercise. Closest guides inspected: five-kingdom classification (cell/nutrition sorting), plant kingdom (traits/life cycles), biodiversity (conservation decisions). This guide teaches naming and logical containment, not their biological evidence grids.
- Proteins: infer what molecular evidence establishes about sequence, fold and subunits. Relationships: amino acid/residue; chain length/peptide bonds; local/whole-chain folding; unfolding/hydrolysis. Confusions: two chains need an extra peptide bond to associate; secondary means second chain; denaturation necessarily cuts the backbone. Assets: one-chain versus two-chain illustration, observation/evidence table, original bond-counting exercise. Closest: enzymes (rates), DNA/RNA (information transfer), organelles (trafficking). No repeated catalytic cycle or central-dogma diagram.
- Decomposition: distinguish loss of litter mass from demonstrated nutrient release. Relationships: physical fragmentation/enzymatic change; transport/transformation; humification/mineralisation; moisture/oxygen; measurement/inference. Confusions: all subprocesses follow one fixed sequence; lost mass equals mineral nutrients; more water always accelerates breakdown. Assets: contrasting leaf fragmentation and mineral release illustration, process-measurement table, invented litter-bag calculation and controlled comparison. Closest: energy flow (GPP and pyramids), microbes (sewage BOD), populations (demography). No NPP worked example or nutrient-cycle redraw.

## Sources and limits

- NCERT Class 11, The Living World, sections 1.1-1.2, official PDF marked Reprint 2026-27: https://ncert.nic.in/textbook/pdf/kebo101.pdf
- NCERT Class 11, Biomolecules, sections 9.4 and 9.7, official PDF marked Reprint 2026-27: https://ncert.nic.in/textbook/pdf/kebo109.pdf
- NCERT Class 12, Ecosystem, section 12.3, Reprint 2025-26 read from https://www.ncertbooks.net/textbook/pdf/lebo112.pdf . Official source https://ncert.nic.in/textbook/pdf/lebo112.pdf failed in the research environment; no claim of verifying the current reprint for this chapter.
- OpenStax Biology 2e, 20.1 Organizing Life on Earth; 3.4 Proteins; 46.3 Biogeochemical Cycles, for cross-checks only. No copied prose or diagrams.

No clinical recommendations, exam questions, reported classroom anecdotes or new author credentials. Examples are explicitly hypothetical. Excluded taxonomic-aid catalogue, detailed protein chemistry and ecosystem modelling beyond the stated learning task.

## Visual briefs

All three: original English scientific teaching image, near-white background, teal/blue/amber, large readable labels, no textbook tracing, 1600x1000 target. Title plus no more than six labels.

1. Nested taxonomy: one family encloses two genera; one genus encloses two separate species, the other one species. Exactly six labels: Family, Genus A, Genus B, Species A1, Species A2, Species B1. Containment, not evolutionary arrows.
2. Protein: a folded single continuous teal chain alongside two separately folded teal and amber chains associating noncovalently. No peptide bridge between chains. Labels: One chain, Folded chain, Two subunits, Same backbone. Schematic, not a molecular structure model.
3. Decomposition: two independent side-by-side comparisons, intact leaf to smaller pieces (fragmentation); organic material to scattered inorganic nutrient symbols (mineralisation). Four labels: Fragmentation, Smaller pieces, Mineralisation, Inorganic nutrients. Not a mandatory sequential pathway.

## Verification

- Original body lengths including headings: taxonomy 1,175 words; protein 1,148; decomposition 1,161. Tables, editorial blocks and related routes add further learning material; no minimum-length approval claim.
- Eight-word normalised phrase scan across all 41 authored guides: no matches for each new article against another guide. Semantic comparison reviewed separately against the three closest guides listed above.
- Original WebP illustrations: taxonomy 79,728 bytes; protein 76,842; decomposition 118,424. Dimensions 1586 x 992. Specific alt text and captions are integrated in the article renderer.
- Image provenance: built-in image generation, no third-party reference artwork. Source PNGs in `/Users/liuzinan/.codex/generated_images/019fac07-7258-7380-9a12-97e12d5d4462/`: `exec-f0225939-4fe8-4617-897c-4f462622b20c.png` (taxonomy), `exec-4f54c7d8-22dc-4c26-a427-e855af9e80b8.png` (protein final), `exec-fbbccdc2-82d2-4f99-a6df-9c024816d64e.png` (decomposition). WebP export uses Sharp quality 84, no upscaling.
- Protein first draft `exec-6b9b34d7-80ce-483c-80cc-8fd829b2a192.png` rejected because coloured backbones appeared joined. Correction explicitly requested a white gap between all strands and a pale enclosure to denote the assembly. Final sketch inspected; it is illustrative rather than a molecular model.
- Final visual text: taxonomy title `Groups within groups` with six grouping labels; protein title `One backbone or two?` with three labels; decomposition title `Size change is not chemical change` with four labels. The briefs above record the factual constraints and layouts used in generation.
- `npm test`: production build, TypeScript and all 21 existing tests passed. Targeted ESLint: no errors, three existing `no-img-element` warnings in the shared article renderer.
- Playwright/Chrome: all three routes return 200 at widths 360, 390 and 1440; exactly one loaded teaching illustration per route, comparison table present, no document or tested text overflow. Screenshots inspected for mobile figures and desktop layout. Third-party requests were blocked for this layout test; this is not an AdSense/CMP verification.
- All nine related live article targets returned HTTP 200 without following redirects. New routes are reachable through the existing authored-library navigation and sitemap generation.
- Local production preview: http://127.0.0.1:3110 . Not committed or deployed. If publication takes place after September 26, set the three publication dates to the actual release day before deploying.
