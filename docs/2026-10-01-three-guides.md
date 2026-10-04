# Three focused revision guides - 2026-10-01

## Learning briefs and originality

- `lac-operon-and-induction`: predict regulatory response from two binding relationships. NCERT Class 12 Chapter 5, section 5.8.1; additional verification from OpenStax Biology 2e 16.2. Distinguish DNA site/protein, transport/hydrolysis and permitted/maximal transcription. Invented inducer-insensitive repressor example. Closest guides reviewed: mutation and gene expression; DNA/RNA information flow; molecular basis of inheritance. Unlike these broader guides, this article follows a regulatory perturbation and a component-interaction table. Recall requires naming five causal verbs.
- `seed-development-and-ploidy`: trace tissue ancestry before calculating chromosome sets. NCERT Class 12 Chapter 1, Double Fertilisation and Post-fertilisation: Structures and Events; OpenStax Biology 2e 32.2. The NCERT chapter PDF fetch failed locally and exceeded the web reader size limit via www; no edition-specific page number is asserted. The secondary institutional source supports the core seed-development relationships. Closest guides reviewed: flowering-plant sexual reproduction; plant kingdom; morphology. Focus is maternal tissues versus fusion products, not pollen transport. Invented 2n=18 audit, ancestry table, retained-versus-consumed reserves and four-box recall.
- `primary-productivity-and-biomass`: audit units and biological boundaries in a producer budget. NCERT Class 12 Chapter 12, section 12.2, 2026-27 reprint; OpenStax Biology 2e 46.2. Closest guides reviewed: ecosystem energy flow and pyramids; decomposition; plant respiration. Existing overview already includes simple NPP subtraction, so this article instead teaches time conversion, stock-change accounting and area normalisation. Independent examples: 30-day 1200/540/660 energy account, 240+90-35-25 biomass ledger and two-plot comparison. No reused ten-percent numerical exercise.

## Sources

- https://ncert.nic.in/textbook/pdf/lebo105.pdf
- https://ncert.nic.in/textbook/pdf/lebo101.pdf
- https://ncert.nic.in/textbook/pdf/lebo112.pdf
- https://openstax.org/books/biology-2e/pages/16-2-prokaryotic-gene-regulation
- https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization
- https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems

## Illustration provenance

Generated with built-in image generation, not copied textbook visuals; compressed to 1600x1000 WebP. Prompts specify a white background, large English labels, original conceptual relationships and no institutional claims.

1. `public/images/biology/lac-operon-and-induction-v1.webp`: two repressor binding states, operator occupied versus inducer-bound repressor away from operator. Labels distinguish low transcription from permitted transcription. No maximum-expression claim.
2. `public/images/biology/seed-development-and-ploidy-v1.webp`: three separate ancestry routes for embryo, endosperm and coat. Initial generation depicted separate nuclei in products; corrected to one fused schematic nuclear compartment with parental-set markers. Caption explicitly limits the illustration to set ancestry, not real chromosome counts or mature anatomy.
3. `public/images/biology/primary-productivity-and-biomass-v1.webp`: GPP 1200 branches into respiration 540 and NPP 660, all kJ per square metre over 30 days. No consumer-transfer branch.

## Content checks

- Main prose approximately 1073, 1042 and 1125 words respectively, excluding tables and shared page metadata. Length is descriptive, not an approval criterion.
- Eight-word phrase comparison against existing article bodies found no exact matches for any of the three drafts.
- Each guide includes three contextual links to existing authored guides. Incoming links added from mutation/gene-expression, flowering-plant reproduction and ecosystem overviews respectively.
- No copied questions, invented testimonials or review claims. Original examples explicitly state their assumptions.
- Publication metadata set to October 1, 2026; production deployment is not part of this writing request.

## Verification

- `npm test`: production build successful, 75 static pages, all 24 existing tests pass.
- Browser checks on all three routes at 320px, 375px and 1440px: HTTP 200, no document horizontal overflow, original illustrations loaded, comparison tables present, October 1 article metadata and sitemap entries present.
- All related internal route requests returned 200. Desktop and mobile screenshots inspected.
- Local QA blocks external analytics/advertising and maps the production-origin OG image URL to the same local OG endpoint; it does not test production CMP behaviour.
- `git diff --check` passes. Preview server: http://127.0.0.1:3114.
