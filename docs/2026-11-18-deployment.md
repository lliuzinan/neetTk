# November 18 linkage clarification release

Scope: one revised explanation paragraph on the existing `linkage-and-recombination-frequency` page. Owner replied “好了” after being asked to verify the proposed map-distance clarification; this is recorded as self-reported review of that sentence only, without credentials or full-guide review claims.

- Local validation: `npm test` completed successfully; production build passed and all 47 tests passed. The existing linkage test now checks the approximate 16 cM statement and the mapping-model/multiple-crossover caveat.
- Responsive validation: Playwright Chrome screenshots were visually inspected at 390×844 and 1440×900, locally and in production. The revised paragraph is legible and the page showed no horizontal overflow.
- Source checks: OpenStax Biology 2e §§12.3 and 13.1 and the NCBI Bookshelf mapping chapter were consulted for supplementary mechanism/mapping context. The official NCERT Chapter 4 PDF remained inaccessible; exact NCERT section and figure mapping remain unverified.
- Commit `59baaed` (`Clarify two-point linkage map distance`) was pushed from `feature/genetics-tools-review` to `origin/main`.
- Vercel reported success for `59baaed`: https://vercel.com/teamqgocom/neet-tk/9mhNck8RvLCZ4TM7FiGRPDr7xeZh .
- Production page [Linkage and recombination frequency](https://medqgo.com/neet-ug/biology/linkage-and-recombination-frequency) returned HTTP 200. The revised paragraph appeared in the rendered HTML, `dateModified` and visible last-updated date were November 18, 2026, and the OpenStax reference link was present.

This release does not certify the entire guide, the other inheritance guides, site-wide science review, user retention, AdSense eligibility, or AdSense approval. No advertising exposure or account setting was changed.
