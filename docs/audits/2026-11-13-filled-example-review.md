# Filled explanation record: review packet

Prepared November 13, 2026. W4 draft, not integrated or published.

## Why this deliverable

The blank PDF and seven-field tool already work. A learner still has no filled example explaining the distinction between conclusion, evidence, assumptions, working, limits, correction and next review. This two-page sample provides exactly that missing instruction, using the November 12 Mendelian model instead of adding another guide or a question bank.

P1 mutation and respiration corrections already have review drafts; no new review confirmation for them was found. They remain open. Yesterday's Mendelian confirmation covers its guide only, not this new workbook adaptation.

## Files

- `docs/drafts/2026-11-13-explanation-example/content.md`
- `docs/drafts/2026-11-13-explanation-example/index.html`
- `output/pdf/medqgo-explanation-example-draft.pdf`
- Reproducible generator: `scripts/generate-explanation-example-draft.py`. It writes only draft/output paths, never public downloads.

## Source and derivation

Parent: published Mendelian guide at commit b646ec8, confirmed by Owner November 12. Supporting conceptual reference: OpenStax Biology 2e 12.2, opened in the parent-guide work; not newly represented as a current NCERT verification. No copied question, dataset, figure or source prose. The four pairings and constructed counts follow the parent guide. All seven entries were rewritten around the task of keeping a personal explanation.

Checks: probabilities (1/4,1/2,1/4) sum to 1; expected counts for 40 are (10,20,10); invented counts (12,17,11) sum to 40; dominant grouping gives 29 and 11 observed versus 30 and 10 expected. The draft makes no statistical significance claim and does not describe a real learner or real experiment.

Originality comparison: the guide teaches the cross; the blank workbook supplies prompts; this sample demonstrates what each prompt should contain and why. It is an accompanying example, not a new indexable guide or competing landing page. No new scientific diagram is needed for this record-format example; pairing reasoning remains explicit text.

## Verification

PDF contains exactly two pages. Both rendered with Poppler and visually inspected: readable text, separated fields, page footers and sources, no clipped content. All seven field values and explanatory notes extracted intact. HTML and PDF use the same field data. Browser checks at 320/390/768/1440 show exactly seven fields and no horizontal overflow; full mobile screenshot visually inspected. Core content is static and needs no JavaScript. Parent guide and tool HTTP checks through Python were blocked with 403; this is recorded as a verification limitation, not evidence the public pages are missing. Public links were verified during yesterday's release; fresh browser link checks remain for integration.

No application code changed and no application build or deployment performed. Earlier build results are not described as tests of this new draft. Draft files and generator only.

## Actual review requested

Review this version's seven entries and two-page PDF: (1) genotype versus phenotype assumptions; (2) expected/observed count distinction; (3) correction and limits wording; (4) whether field explanations enable independent writing. Provide actual review confirmation and any corrections; reviewer identity/credentials remain unspecified unless provided. No review status is inferred from yesterday's guide release.

After acceptance: remove draft markers, integrate beside existing blank resources and tool without replacing personal records, verify fresh links/build/mobile, deploy and check public PDF and equivalent HTML. Until then, W4 remains incomplete.
