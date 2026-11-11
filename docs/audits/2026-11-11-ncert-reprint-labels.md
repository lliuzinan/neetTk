# NCERT reprint-year claims: bounded correction

Prepared November 11, 2026. This pass corrects unsupported *version labels* on existing guide pages. It does not certify every section number, biological assertion, figure or current NEET syllabus mapping.

## Evidence and decision

- The [official NCERT Class XI Biology prelims](https://www.ncert.nic.in/textbook/pdf/kebo1ps.pdf) and [official Class XII Biology prelims](https://ncert.nic.in/textbook/pdf/lebo1ps.pdf) available to this review identify **Reprint 2025-26**. The Class XII PDF was also retrieved directly from the official host; the Class XI prelims were read through the official indexed PDF. The official chapter PDFs needed for section-level checks were not consistently fetchable from the workspace.
- Thirty occurrences in `lib/noteContent.ts` named a **2026-27 Biology reprint** across 22 existing guide routes. This review found no directly inspected official 2026-27 Biology prelims that would support that assertion. Search absence is not proof that a later printing does not exist. The safe public statement is the textbook/chapter and link without an unverified reprint year.
- Removed only that year claim from reference labels and source-anchor sentences. The Digestion and Absorption note now says the chapter is absent from the **verified 2025-26 Class XI contents**, which the official prelims show. No guide mechanism, exercise, numerical result, illustration or publication date changed. We did not replace every 2026-27 label with 2025-26: a book-level contents check cannot establish that each linked chapter PDF is the same printing.
- Existing 2025-26 labels elsewhere were not changed by this scoped pass. Section numbers and source-to-claim alignment still need separate checking and actual subject review before substantive teaching changes.

## Affected existing guide routes

`biodiversity-and-conservation`, `blood-and-circulation`, `c3-c4-pathways-and-photorespiration`, `carbohydrates-proteins-lipids-nucleic-acids`, `cardiac-cycle-and-valve-pressure`, `chromosomal-basis-of-inheritance`, `digestion-and-absorption`, `ecosystem-energy-flow-and-ecological-pyramids`, `five-plant-families-floral-identification`, `frog-organ-systems-and-structural-map`, `gel-electrophoresis-and-dna-band-reading`, `genetic-code-and-reading-frames`, `lac-operon-and-induction`, `living-world-taxonomy-and-hierarchy`, `mendelian-inheritance`, `microbes-in-human-welfare`, `primary-productivity-and-biomass`, `protein-structure-and-peptide-bonds`, `recombinant-dna-technology`, `sexual-reproduction-in-flowering-plants`, `special-modes-of-reproduction-in-flowering-plants`, `structural-organisation-in-animals`.

## Release gate

Run build/tests, check at least one Class XI and one Class XII affected route plus the Digestion and Absorption note locally and at phone width, then push and verify Vercel success and production text. Update this report and the roadmap with local versus live evidence. A real biology reviewer is still needed for section-level claims and the separate teaching drafts.

## Local verification

`npm test` completed a production build and 37 passing tests. Local production routes for `frog-organ-systems-and-structural-map`, `gel-electrophoresis-and-dna-band-reading`, and `digestion-and-absorption` returned HTTP 200. The first two no longer rendered “2026-27”; the third rendered the checked 2025-26 Class XI contents wording. Chrome viewport checks at 320, 390 and 1440px showed no horizontal document overflow on these three routes. CSV parsing confirmed 77 historical URL rows and all 18 expected columns after updating the affected source-version cells. These are local checks, not deployment or scientific approval.
