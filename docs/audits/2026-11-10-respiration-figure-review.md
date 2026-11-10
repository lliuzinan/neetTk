# Human respiration figure: subject-review packet

Prepared November 10, 2026 for the public `human-respiration` guide. **Draft only.** No teaching page or production illustration was changed, and this inspection is not a human biology review.

## Learner problem and observed issue

The guide teaches four distinct steps: ventilation, alveolar exchange, blood transport and tissue exchange. The published image `public/images/biology/human-respiration-gas-route-v1.png` uses the same route. Its blood-transport panel places both “O₂ bound to haemoglobin” and “CO₂ as bicarbonate (HCO₃⁻)” *inside one red blood cell*. That layout can teach a wrong location for the main bicarbonate transport pool. The guide's prose says only that the largest share of CO₂ is transported as bicarbonate; it does not explain that bicarbonate formed in an erythrocyte largely moves into plasma in exchange for chloride. The page's generic caption does not resolve the visual ambiguity.

The alveolar and tissue arrow directions in the existing image appear consistent with the prose. This packet therefore proposes a focused figure replacement and explanatory caption, not a new guide or an expanded physiology chapter.

## Source and rights check

- [Official NCERT Class XI Biology prelims](https://www.ncert.nic.in/textbook/pdf/kebo1ps.pdf) identify a 2025–26 reprint and Chapter 14, “Breathing and Exchange of Gases,” beginning at page 183. The chapter PDF at `https://ncert.nic.in/textbook/pdf/kebo114.pdf` timed out in the reader, so exact NCERT section wording and diagram details remain unverified.
- [OpenStax Biology 2e, 39.4, Transport of Gases in Human Bodily Fluids](https://openstax.org/books/biology-2e/pages/39-4-transport-of-gases-in-human-bodily-fluids) distinguishes oxygen carried mostly on haemoglobin, carbon dioxide carried mostly through the bicarbonate buffer system, bicarbonate formation in an erythrocyte, and subsequent bicarbonate movement into plasma by chloride exchange. This supports the specific location concern. It is supplementary factual evidence, not a source of reusable art or wording; its current page identifies a noncommercial share-alike licence and a separate restriction on ingestion into generative AI offerings. No source image or prose was copied into the draft.
- The [PubMed abstract of a primary physiology study](https://pubmed.ncbi.nlm.nih.gov/6130537/) independently states that bicarbonate generated in erythrocytes is exchanged with extracellular chloride, enabling transport in the water phases of both red cells and plasma. This supports the location distinction without importing the study's figure or prose.
- The new vector draft is an original manual diagram built for this page. Originality of the existing raster asset was not independently established in this check; do not infer permission from its presence in the repository.

## Proposed replacement, not yet published

- Landscape vector source: `docs/drafts/human-respiration-gas-route-v2.svg`; rendered 1600×900 preview: `docs/drafts/human-respiration-gas-route-v2-preview.png`. The same diagram has a vertical mobile variant, `docs/drafts/human-respiration-gas-route-v2-mobile.svg`, with its own rendered preview. The landscape image squeezed all labels too small at 390px, so the vertical layout would be selected for mobile if the concept is approved. A 390px browser check found no horizontal overflow. Six short labels follow the illustration brief: four stages, oxygen on haemoglobin in a red blood cell, bicarbonate in surrounding plasma. Blue and amber arrows retain the two opposite gas routes. Neither diagram depicts the biochemical conversion or chloride shift; the caption must state that omitted mechanism rather than implying that bicarbonate originates in plasma.
- Proposed alt: “Four-stage respiration diagram: oxygen moves from alveolus to blood to tissue, carbon dioxide moves from tissue to blood to alveolus; oxygen is shown on haemoglobin inside a red blood cell and bicarbonate in plasma.”
- Proposed caption: “An original simplified gas route. Blue arrows trace oxygen into blood and tissues; amber arrows trace carbon dioxide toward alveolar air. Oxygen travels mainly on haemoglobin in red blood cells. Much carbon dioxide becomes bicarbonate in red blood cells and is then carried in plasma. The chloride exchange and minor transport forms are omitted.”

## Required subject review

An actual responsible biology reviewer should inspect the **old image, full current guide, draft diagram, proposed alt/caption and source set** together. Specifically check each arrow and the distinction between *where bicarbonate forms* and *where much of it travels*, the fit to current NCERT/NEET scope, the four-stage sequence, and whether any label implies an exclusive transport route. Record reviewer's name or role, reviewed version, date, scope, findings and requested changes in the disposition row. If accepted, integrate with a new versioned asset filename, run build/link/mobile checks, publish and inspect the live figure. Until then, the published page remains unchanged and the issue is open.
