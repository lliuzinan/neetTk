# Conservation and microbes: writing and verification note

Prepared on 2026-09-22 with the updated `medqgo-revision-writing` skill.
Status: integrated and tested locally; this task has not pushed or deployed changes.
The assigned publication dates must be updated if first deployment occurs on a later date.

## Learning briefs and differences

### Biodiversity and conservation

- Route: `/neet-ug/biology/biodiversity-and-conservation`.
- Outcome: match a conservation action to its biological coverage and remaining risks.
- NCERT anchor: Class 12 Chapter 13, Reprint 2026-27; sections 13.1.2, 13.1.4 and 13.2.2. The official PDF was read, including the conservation section on printed pages 224-225.
- Closest guides checked: organisms and populations; ecosystem energy flow; evolution and natural selection.
- Difference: conservation decisions rather than population growth, trophic accounting or allele-frequency change. The three-column table compares coverage and unresolved risk, not the neighbouring guides' measurement or mechanism tables.
- Original applications: crop varieties versus species count; proportional species-area calculation with an explicitly invented exponent; hypothetical loss of a pollination interaction.
- Recall output: a three-sentence decision naming the diversity level, threat and limitation of the proposed protection.
- Body including headings: approximately 1,382 English words, excluding the comparison table, editorial aside and shared page sections. This is descriptive, not an approval target.

### Microbes in human welfare

- Route: `/neet-ug/biology/microbes-in-human-welfare`.
- Outcome: distinguish the liquid/sludge pathways and microbial conditions, then classify useful microbial actions.
- NCERT anchor: Class 12 Chapter 8, Reprint 2026-27; sections 8.1-8.6. Official PDF downloaded and text checked locally.
- Closest guides checked: five-kingdom classification; plant respiration; biotechnology applications.
- Difference: process conditions and output interpretation rather than kingdom assignment, respiratory stages or gene-transfer applications. Its table tracks material through treatment compartments.
- Original applications: 180 to 36 mg/L BOD calculation; opposing consequences of oxygen changes in two compartments; nutritional versus pathogen-control roles near roots.
- Recall output: draw liquid and sludge routes including a return loop, then sort four microbial roles with a correction for each.
- Body including headings: approximately 1,388 English words, excluding other page sections.
- Scope boundary: no treatment advice, microbial culture recipe, gas-plant operating instructions or water-safety certification. The modern Archaea classification is distinguished from older NCERT terminology.

## Sources and factual checks

- https://ncert.nic.in/textbook/pdf/lebo113.pdf
- https://www.ncert.nic.in/textbook/pdf/lebo108.pdf
- https://openstax.org/books/biology-2e/pages/47-3-threats-to-biodiversity
- https://openstax.org/books/biology-2e/pages/47-4-preserving-biodiversity
- https://openstax.org/books/microbiology/pages/8-4-fermentation
- https://openstax.org/books/microbiology/pages/4-6-archaea

Sources were used for factual checking, not copied text, exercises, figures or tables. Historical census totals and outdated protected-area counts were not presented as current facts. Some NCERT requests timed out; direct PDF downloads succeeded after retrying the official host.

## Original illustration provenance

Generated with the built-in image generation tool; inspected for labels and biological relationships, then converted to 1600 x 1000 WebP with white containment padding.

- `public/images/biology/biodiversity-conservation-in-situ-ex-situ-v1.webp`: 323,820 bytes. Natural habitat versus managed seed collection; no false process arrow between them.
- `public/images/biology/microbes-sewage-oxygen-route-v1.webp`: 74,296 bytes. Aeration followed by settling; the sludge branch leads to an oxygen-free digester. Caption and prose explicitly describe the omitted return loop and effluent processing.

### Generation prompt: conservation

Create an original scientific teaching illustration for an English NEET Biology article, 1600x1000 landscape. White background, clean editorial vector-like raster style, restrained teal, blue and ochre. Title exactly 'Two places to conserve biodiversity'. Two side-by-side clearly separated scenes: left a diverse living woodland with small flowering plants, a bird and a pollinating insect together IN THEIR NATURAL HABITAT; right a seed bank with labelled-free seed storage tubes and a small seedling maintained outside its natural habitat. Exactly two short panel labels: 'In situ: natural habitat' and 'Ex situ: managed collection'. No additional text, no logos, no arrows between panels (not a process). Scientific intent: habitat protection retains ecological interactions; a managed seed collection safeguards selected material but does not reproduce a whole ecosystem. Original composition, do not imitate textbook diagrams. Large readable typography and generous whitespace; no decorative cards.

### Generation prompt: microbes

Original scientific teaching illustration, landscape 1600x1000, English NEET Biology, white background with restrained blue and teal water and ochre sludge. Title 'Air first, no air later'. Exactly five additional short labels: 'Primary effluent', 'Aeration', 'Settling', 'Anaerobic digester', 'Biogas'. Show a clear left-to-right wastewater route: primary effluent arrow into an open aeration tank with visible air bubbles; rightward liquid-flow arrow into a settling tank with brown settled sludge at the bottom. A separate downward arrow from bottom sludge leads to a sealed anaerobic digester below and to the right, NO oxygen bubbles inside digester; a pipe from its top leads to a small gas storage dome marked Biogas. No return-loop (deliberate simplified scope), no arrow carrying all water into digester, no final drinking water icon or drinking safety claim. Keep route sparse, labels large, clear arrowheads. Original schematic not copied from textbook, no logos, no photos, no extra labels, no decorative frame.

## Originality and integration checks

- Compared eight-word sequences in article sections, comparison tables and editorial asides against all authored guides: no exact matches for either new guide, including against each other. This is a limited exact-phrase check, not a guarantee of semantic originality or approval.
- Compared heading sequences, comparison axes, recall tasks and editorial blocks with the six closest guides listed above.
- Each article has three contextual links to existing authored guides. Added one incoming link from ecosystem and one from biotechnology applications; existing article bodies were not rewritten.
- Registered both guides in the authored allowlist, local topic/note data, dates, source lists, illustrations and sitemap generation.
- `npm test`: production build and all 19 rendered-HTML tests passed. Initial sandbox build could not bind a subprocess port; the authorised retry succeeded.
- Browser checks at 360, 390 and 1440 pixels: both pages returned 200, original images loaded, and no page or text overflow was detected. External analytics/ad requests were blocked in this local layout test; it is not a live CMP or advertising audit.
- Reviewed desktop and mobile screenshots of illustrations and tables. Existing mobile table stacking remains functional.
- Changed-file ESLint check passed. Full-site lint still reports two existing `react/no-unescaped-entities` errors in `app/site-map/page.tsx:18` and `app/team/page.tsx:32`; neither file was changed in this task.

No AdSense outcome is promised. No remote Qwen review, Git push, deployment or IndexNow submission is represented as completed here.
