# Three genetics learning guides, 2026-09-28

## Learning briefs and originality boundaries

- Linkage and recombination: reconstruct parental phase from a stated testcross and calculate the fraction of recombinant offspring. Closest guides: chromosomal basis (physical meiosis overview), Mendelian inheritance (single/two-locus ratios), pedigree (family evidence). This article uses a numerical evidence audit, not another meiosis overview. Distinctions: genotype versus phase, offspring versus gamete, recombination fraction versus crossover count. Original visual: four testcross outcome bars, 42%, 42%, 8%, 8%. Table compares the same gamete under two different phases. Recall task reverses the phase and checks total probability.
- Sex determination systems: infer heterogamety from gamete types across XX/XY, XX/XO and ZZ/ZW, then contrast honeybee ploidy. Closest guides: human reproduction (gametogenesis), pedigree (trait transmission), animal kingdom (classification). This article teaches model identification from chromosome contributions, not reproductive anatomy or diagnosis. Distinctions: heterogametic versus heterozygous; chromosome absence versus a named O chromosome; ploidy versus sex chromosomes. Visual contrasts the parent producing two gamete classes in XY and ZW models. Recall task builds an unfamiliar labelled system without assuming male heterogamety.
- Genetic code and reading frames: audit an invented RNA sequence from direction through grouping to termination, then compare one-base and three-base insertions. Closest guides: DNA/RNA processes (information flow), mutation (broad sequence changes), protein structure (folding and bonds). This guide is a decoding workshop. Table separates codon/anticodon/template/coding strand conventions. Visual uses the same original RNA sequence before and after a one-base insertion. Recall task distinguishes a substitution from regrouping.

## Source dossier

- NCERT Class 12 Principles of Inheritance and Variation: https://ncert.nic.in/textbook/pdf/lebo104.pdf . Official retrieval failed in this environment. The NCERT chapter was checked through https://knowledgegallery.in/wp-content/uploads/2023/04/NCERT-Books/Class-12/Class-12-Biology-English/Chapter-4-Principles-of-Inheritance-and-Variation.pdf (marked Rationalised 2023-24). Linkage is section 4.3.3; sex determination is 4.6 in that body, despite an inconsistent contents outline. Public references therefore name the subsection rather than asserting a current section number or reprint. Checked XY/XO/ZW descriptions and honeybee 32/16 chromosome counts. No textbook figure or prose is reproduced.
- NCERT Class 12 Molecular Basis of Inheritance, Reprint 2026-27, sections 5.6, 5.6.1, 5.6.2 and 5.7: https://ncert.nic.in/textbook/pdf/lebo105.pdf . Read official PDF via web.
- OpenStax Biology 2e sections 13.1, 12.2 and 15.1 consulted for factual cross-checks only. No prose, figures, exercises or table layouts reused.

All numerical examples and sequence exercises are independently constructed. No clinical counselling, disease-risk calculation, fabricated classroom experience, copied exam questions or added author credentials. Publication date is provisional until release.

## Verification

- All three guides have distinct titles, introductions, heading sequences, comparison axes and recall exercises. Normalised eight-word phrase comparison against all 44 authored guides returned no matches after revising one repeated chromosome-description sentence.
- Approximately 1,050-1,100 body words per guide, excluding tables, editorial blocks and navigation. Depth is determined by the worked reasoning rather than a length threshold.
- New guides each link to three relevant existing notes. All eight distinct live target URLs returned HTTP 200 without redirects. Added one contextual incoming link from chromosomal basis, pedigree and molecular basis respectively.
- `npm test`: production build, TypeScript and all 21 existing tests pass; 69 prerendered pages. Existing multiple-lockfile warning remains.
- Browser QA checks three articles at 360, 390 and 1440 pixels: response, document/text overflow, illustration load, table, single Article entity and 2026-09-28 publication date. Layout checks block third-party scripts and map production-origin image URLs to the equivalent local endpoint; they do not validate CMP/AdSense behaviour.
- Local preview: http://127.0.0.1:3111 . No git commit, push or production deployment in this writing task. If release occurs on a later day, adjust the three publication dates before publishing.

## Original image provenance

Built-in image generation, no supplied third-party artwork. Exported with Sharp to WebP; scientific corrections made with the image tool before export. The finished workspace paths are `public/images/biology/linkage-and-recombination-frequency-v1.webp` (39,342 bytes), `sex-determination-systems-v1.webp` (80,724 bytes), and `genetic-code-and-reading-frames-v1.webp` (63,968 bytes). The last image has explicit 1600 x 640 layout dimensions; other diagrams are 1586 x 992.

Source PNG directory: `/Users/liuzinan/.codex/generated_images/019fac07-7258-7380-9a12-97e12d5d4462/`.

- Linkage final: `exec-17cd8f36-01a9-4b3d-8998-c4bf6ce31453.png`. First version rejected because numeric bar-length instructions became printed counts inconsistent with the exercise. Final correction removed numeric axis and end labels, retaining AB/ab 42% and Ab/aB 8% with parental/recombinant brackets.
- Sex determination: `exec-0efd5785-9ef9-43d0-99c9-924f30f1cc57.png`. Checked XY panel X egg and X/Y sperm against ZW panel Z/W eggs and Z sperm. Gamete drawings are symbols, not comparative scale/anatomy.
- Reading frame final: `exec-a2a64cc1-79d9-4088-98b0-626aced528df.png`. First version rejected because insertion arrow pointed at G. Corrected to first C of CGC. Verified original `AUGGCUUACGGAUAA` and edited `AUGCGCUUACGGAUAA` character by character. The final lone A is correctly marked incomplete.

### Image prompt specifications

1. Original scientific educational infographic for an English NEET Biology revision article about testcross recombination frequency. White background, restrained teal blue amber, crisp large typography, landscape. Title: Count combinations, not crossovers. Four horizontal bars, parental AB and ab at 42% each, recombinant Ab and aB at 8% each, common baseline. Final edit: remove all numeric x-axis ticks, bottom horizontal line and the four bar-end numbers; preserve the six percentage/category labels, title and brackets.
2. Original scientific teaching diagram, white backdrop, editorial blue teal amber. Title: Which parent provides two gamete classes? Separate XX/XY and ZZ/ZW panels. First has an X egg and X/Y sperm; second Z/W eggs and Z sperm. Labels Egg: X; Sperm: X or Y; Egg: Z or W; Sperm: Z. No offspring arrows or extra anatomical claims.
3. Original reading-frame infographic. Title: One extra base moves the boundaries. Upper RNA `5' AUG | GCU | UAC | GGA | UAA 3'`; lower `5' AUG | CGC | UUA | CGG | AUA | A 3'`. Highlight stop UAA, incomplete final A, and inserted first C after AUG. Final edit moves insertion arrow specifically to that C while preserving every nucleotide.
