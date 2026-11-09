# Mutation guide: bounded correction for subject review

Prepared November 9, 2026. Target: `lib/noteContent.ts`, `mutation-and-gene-expression`, “What a mutation changes” and “From DNA change to protein consequence”. This is unpublished teaching copy. The current page remains unchanged until an actual responsible biology reviewer accepts the scope and wording.

## Proposed replacements

Replace the opening sentence “A mutation is a heritable alteration in genetic material” with:

> A mutation is a change in genetic material that can persist when a cell lineage divides. In a sexually reproducing organism, a mutation in a body cell is not automatically passed to offspring; transmission to offspring requires the change to enter the reproductive lineage.

Replace the bullet about an insertion or deletion with:

> Within a protein-coding sequence, an insertion or deletion that changes the number of bases by a value not divisible by three can shift the downstream codon reading frame.

Replace “A frameshift is especially important as a concept because inserting or deleting bases can change how later codons are grouped” with:

> In a protein-coding sequence, adding or removing bases in a number not divisible by three shifts the grouping of downstream codons. A three-base insertion or deletion changes the sequence but does not shift that downstream grouping by itself.

The adjacent statements about substitutions, gene regulation and possible phenotype effects can remain if the reviewer finds them accurate. Do not add a disease example or a new exercise solely to extend the page. The guide's learning task remains change in genetic information versus change in use of that information, distinct from the general DNA → RNA → protein route.

## Evidence and checks

- [OpenStax Biology 2e, 14.6 DNA Repair](https://openstax.org/books/biology-2e/pages/14-6-dna-repair) distinguishes somatic and germ-cell mutations and explains reading-frame changes from insertions/deletions. [OpenStax Biology 2e, 15.1 The Genetic Code](https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code) supports the triplet-code relationship. These are factual checks, not wording or image reuse.
- Existing guide cites NCERT; exact current NCERT edition/section was not verified for this draft. Reviewer should confirm syllabus fit and whether “reproductive lineage” is the clearest level for NEET students before approval.
- Review the adjacent table, illustration and exercise for the same missing coding-sequence context. Record reviewer, version, date, scope and corrections in `docs/audits/content-disposition.csv`; then integrate only accepted wording, build/test, check mobile, publish and verify the public URL.
