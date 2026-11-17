# Inheritance source and claim spot-check — 17 November 2026

Internal audit note. This is a limited source/logic spot-check, not approval of the five guides, not an expert review, and not a release authorization.

## What was verified

- The official NCERT contents page for *Biology, Textbook for Class XII*, reprint 2025–26, places Unit VII (Genetics and Evolution) on printed pages 51–126 and Chapter 4, “Principles of Inheritance and Variation,” at page 53. [Official NCERT contents PDF](https://ncert.nic.in/textbook/pdf/lebo1ps.pdf).
- The official current chapter target in the project is [NCERT lebo104.pdf](https://ncert.nic.in/textbook/pdf/lebo104.pdf). Direct retrieval timed out both through the web reader and local HTTPS; the PDF was not inspected. Therefore its exact current subsection labels, page numbers, figures and claim-by-claim support remain unverified. Third-party copies and search-index snippets were not treated as primary evidence.
- The project’s [2026 NEET syllabus mapping](../sources/inheritance-learning-outcomes.md) already identifies the scope boundary: the five-guide route is only an inheritance foundation, not the whole genetics syllabus or a 2027 coverage claim.
- For a supplementary mechanism check only, OpenStax Biology 2e §12.3 states the assumptions and probability treatment for independent assortment and describes linkage/recombination as a qualification to independent assortment. [OpenStax §12.3](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance). This source was used to check concepts, not to copy language, figures, exercises or source-specific page structure. It does not replace the NCERT syllabus source.

## Limited claim checks against the current local copy

| Guide | Checked claim or calculation | Desk-check result | Still needs a human reviewer |
|---|---|---|---|
| `mendelian-inheritance` | Aa × Aa gamete contributions yield 1:2:1 genotype expectations; 3:1 phenotype expectation follows only after complete dominance is specified. | Internally consistent with the stated equal-segregation, random-fertilisation, scoring and survival assumptions. | Verify biological wording, current NCERT subsection/figure, and whether each assumption is presented at the right level. This guide has a prior Owner review recorded for its November 12 version; that scope does not extend to the other four guides or later edits. |
| `testcross-and-unknown-genotypes` | In Aa × aa, one correctly scored recessive offspring requires an `a` contribution from the unknown dominant-phenotype parent; under Aa, six independent dominant outcomes have probability 1/64. | The deduction and conditional probability are coherent under the guide’s explicit parentage, segregation, scoring and survival assumptions. The probability is not the posterior probability that the parent is AA. | Verify assumptions, the staged constructed record and relevant NCERT placement; check all diagrams/interactions in the rendered page. No current biology-review record was found for this guide. |
| `incomplete-dominance-and-codominance` | The text distinguishes an intermediate heterozygote phenotype from simultaneous distinguishable expression, and avoids asserting equal product amounts. | The distinction is appropriately scoped to the observed phenotype; no equality or “blended allele” claim appears in the checked comparison block. | Verify examples, terminology, source mapping and figure labels against the actual current NCERT chapter. No current biology-review record was found for this guide. |
| `dihybrid-crosses-and-probability` | The local comparison table reports AaBb × AaBb as 9:3:3:1, AaBb × Aabb as 3:3:1:1, and AaBb × aabb as 1:1:1:1, with independent assortment and complete dominance stated. | Recalculation by multiplying single-locus probabilities matches the table under its assumptions. | Verify locus-independence/survival assumptions, explanatory examples and current NCERT section/figure. Do not generalise the ratios to linked loci. No current biology-review record was found for this guide. |
| `linkage-and-recombination-frequency` | With recombination fraction r = 0.16 and equal reciprocal classes, the model assigns 0.42 to each parental class and 0.08 to each recombinant class; phase changes the class labels. | The arithmetic sums to 1 and follows the defined two-locus model. The numerical example does not itself establish an empirical recombination rate. | Verify phase labels, count denominator, recovery assumptions, map-distance boundary and current NCERT figure/section. No current biology-review record was found for this guide. |

The checks above were performed against local text and elementary derivations. They must not be described as an independent scientific review. The linked guide bodies were not changed or published in this audit.

## Exact remaining work

1. Retrieve and visually inspect the official NCERT chapter PDF, confirm its reprint line, exact section headings, printed pages and relevant figures; log the retrieval date and source evidence.
2. Compare each of the five guides against that verified source map, recording the exact claim and supporting section/figure rather than citing only the chapter directory.
3. Prepare bounded corrections or confirm no correction is needed; show source, derivation, before/after excerpt and nearest-guide comparison to the responsible human reviewer.
4. Record actual review scope per guide in `content-disposition.csv`. Do not infer review from this desk-check, automated tests, or the earlier Mendelian-only confirmation.

## Release state

No site code or public guide text changed. No build, test, commit, push or deployment was performed. This audit note is local documentation only. The W1 source gate remains open.
