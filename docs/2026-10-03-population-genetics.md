# Population genetics writing brief

- Date: October 3, 2026.
- Existing inactive slug reused: `population-genetics`. Corrected its NCERT reference from Chapter 4 to Class 12 Chapter 6, Evolution; no question-bank content restored.
- Outcome: distinguish directly counted allele frequencies from predicted genotype proportions and identify missing assumptions.
- Closest articles inspected: evolution and natural selection, Mendelian inheritance, organisms and populations. The evolution overview already gives elementary allele counting and equilibrium formula examples. This guide adds a measured-versus-expected comparison with identical allele totals, an explicit identifiability boundary for phenotype-only data, and a denominator audit.
- Three distinctions: individuals/copies, observed/predicted, dominance/frequency. Recall output: choose the correct starting operation from three different evidence types.
- Independently constructed examples: observed 40/20/40 versus predicted 25/50/25 in 100; 4% recessive phenotype in an idealised population of 2,000. Arithmetic checked by both individual totals and allele totals. These are not copied exam questions or measured populations.

## Sources and access

- NCERT official chapter anchor: https://ncert.nic.in/textbook/pdf/lebo106.pdf . Browser fetch encountered its document-size limit; no unverified edition/page/section number is claimed.
- https://openstax.org/books/biology-2e/pages/19-1-population-evolution : accessed directly for the two-allele model and accounting definitions. No assessment, image or prose copied.
- https://www.nature.com/scitable/knowledge/library/the-hardy-weinberg-principle-13235724/ : indexed excerpt checked for nonrandom mating versus allele-frequency change; direct retrieval hit Nature's identity redirect. Statistical and causal caveats are deliberately retained rather than treating every sample departure as proof of evolutionary change.

## Asset and integration

- Built-in image generation used; final asset `public/images/biology/population-genetics-v1.webp`, 1600x1000, about 28 KB.
- Prompt: original white-background paired bar comparison, teal observed 40/20/40 and amber expected 25/50/25, with exact AA/Aa/aa labels. Visual inspection confirmed categories and numbers. Caption specifies schematic bars and uses labels for exact counts.
- Topic-specific comparison table and editorial denominator check; three contextual links to existing authored notes and an incoming link from the evolution overview.
- Eight-word phrase audit found one shared generic assumption phrase; rewritten before final verification.
- Local article date October 3, 2026. No production deployment requested.

## Verification

- Final body: 1,166 words; exact eight-word phrase scan across all other authored bodies returned no matches after the correction.
- `npm test`: successful production build (76 static pages), 24/24 existing tests passed.
- Article HTTP 200; sitemap and Article date verified. At 320, 375 and 1440px, no document overflow; figure, generated OG image and comparison table loaded. Related article requests all returned 200. Mobile figure and desktop screenshots inspected.
- Browser verification maps the site's absolute OG URL to the local OG endpoint and blocks external ad/analytics calls; it is a local rendering check, not a live CMP audit.
- Preview: http://127.0.0.1:3115/neet-ug/biology/population-genetics .
