# Three physiology notes: 2026-09-23

## Scope and publication
Three original English revision guides added locally. No git commit, push, production deployment or IndexNow submission performed. Existing uncommitted September 22 articles and CMP assets preserved. Local publication metadata is September 23; if released on another day, reconcile first-publication dates before deployment.

## Articles
- Enzymes and enzyme action: /neet-ug/biology/enzymes-and-enzyme-action; body word count 1178 (excluding table/aside).
- Plant growth and development: /neet-ug/biology/plant-growth-and-development; body word count 1159 (excluding table/aside).
- Locomotion and movement: /neet-ug/biology/locomotion-and-movement; body word count 1133 (excluding table/aside).

## Evidence
NCERT official host timed out in this environment. The actual NCERT 2025-26 reprint PDFs were read via https://www.ncertbooks.net/textbook/pdf/kebo109.pdf, kebo113.pdf and kebo117.pdf. This is not a claim that a 2026-27 edition or latest exam syllabus was verified. No textbook question, prose passage or figure was reproduced. References point to official NCERT and direct OpenStax sections; textbook headings and reprint are explicit.

- NCERT Biomolecules, 2025-26 reprint: sections 9.8.2-9.8.6: https://ncert.nic.in/textbook/pdf/kebo109.pdf
- OpenStax Biology 2e: 6.5 Enzymes: https://openstax.org/books/biology-2e/pages/6-5-enzymes
- NCERT Plant Growth and Development, 2025-26 reprint: sections 13.1-13.4: https://ncert.nic.in/textbook/pdf/kebo113.pdf
- OpenStax Biology 2e: 30.6 Plant sensory systems and responses: https://openstax.org/books/biology-2e/pages/30-6-plant-sensory-systems-and-responses
- NCERT Locomotion and Movement, 2025-26 reprint: sections 17.2 and 17.4: https://ncert.nic.in/textbook/pdf/kebo117.pdf
- OpenStax Anatomy and Physiology 2e: 10.3 Muscle fiber contraction and relaxation: https://openstax.org/books/anatomy-and-physiology-2e/pages/10-3-muscle-fiber-contraction-and-relaxation

## Editorial differences and checks
- Enzymes: experimental-rate reasoning, 0.4 versus 0.3 micromoles/second; saturation distinct from zero activity; missing cofactor distinct from inhibition.
- Plants: 2 square centimetres/day for both leaves but 100% versus 20% interval gain; logarithmic relative rate explicitly distinguished as a separate measure. Hormone effects qualified by context.
- Movement: 20% sarcomere shortening is not 20% myosin shortening; ATP binding detaches the bridge; activation need not produce whole-muscle shortening.
- Closest guides compared: cell organelles, molecular tools, digestion; plant anatomy, photosynthesis, plant reproduction; neurons, circulation, endocrine control. New guides use different premises, tables and recall tasks, though all share site presentation.
- Normalised consecutive eight-word scan of new body/table/aside text against all other authored guides: no matches. This is a narrow check, not proof of semantic originality or external plagiarism clearance.
- Each guide has three reasoned links to existing notes, a comparison table, worked example, explicit wrong inference, NCERT section anchor and original teaching figure.
- No invented teaching anecdotes, credentials, testimonials or claim of Qwen/human expert review. Educational scope, no treatment instructions.

## Image provenance
Generated with built-in image generation, visually inspected and converted to 1600 x 1000 WebP. No external artwork used. Enzyme figure is a conceptual splitting example, not a universal mechanism. Root image is schematic. Sarcomere initial image had inadequate relaxed overlap; corrected before inclusion. Diagram lengths are schematic, not quantitative measurements.

- public/images/biology/enzyme-catalytic-cycle-v1.webp
- public/images/biology/root-growth-zones-v1.webp
- public/images/biology/sarcomere-sliding-filaments-v1.webp

### Enzyme prompt
Original English scientific teaching illustration for NEET Biology, landscape 1600x1000 white background, crisp teal enzyme and amber substrate, clean textbook-like but ORIGINAL composition, large labels readable on mobile. Title: 'A catalyst can be used again'. Three equally sized stages LEFT TO RIGHT with simple arrows between: stage one a large teal globular enzyme with a single shallow active-site cleft and ONE amber joined two-part substrate positioned above it; stage two the same enzyme shape binding that joined substrate in its cleft; stage three the SAME intact enzyme, active site empty, with TWO smaller amber separated products floating away. Enzyme must keep the same shape and size across the stages, no enzyme pieces departing. Only three stage labels: 'Binding', 'Conversion', 'Release'. Optional small labels 'Enzyme', 'Substrate', 'Products' at most once each. Do not imply real atomic shape or universal cleavage: depict a conceptual single-substrate splitting example. No copied textbook figures, no chemical structure, no extra explanatory prose, no logos, no decorative containers.

### Root prompt
Original scientific teaching diagram for English NEET Biology notes, white background landscape 1600x1000. A single vertical root tip drawn in longitudinal schematic view, root cap at the very BOTTOM, above it zone of cell division of small cells, above that zone of elongation with long cells, uppermost zone of differentiation with root hairs extending sideways. Anatomically clear simple colored cells, not a copied textbook figure. Four fine leader lines unambiguously pointing to the four correct zones with large readable labels: 'Differentiation', 'Elongation', 'Cell division', 'Root cap'. Title 'Growth is not uniform along a root'. No other text, no vascular detail, no arrows suggesting a root cap at the top. Root occupies middle of canvas with generous margin for labels. Teal outlines, pale green and amber zones, no decorative icons.

### Muscle prompt
Create an ORIGINAL scientifically accurate sarcomere teaching diagram, landscape 1600x1000 white, clean flat scientific illustration. Title 'Shorter sarcomere, unchanged filaments'. Two aligned horizontal panels labelled 'Relaxed' (top) and 'Shortened' (bottom). Each panel shows left and right vertical dark Z discs; horizontal thin blue actin filaments anchored to both Z discs extending inward; central thicker orange myosin filament. The orange thick filament must be EXACTLY THE SAME LENGTH in both panels. Each thin blue filament must be EXACTLY THE SAME LENGTH in both panels. Bottom Z discs are closer together than top, causing MORE thin/thick overlap, not shrinking filaments. Clearly draw separate parallel rows of blue and orange rods so overlaps remain visible. Bottom overlap increases but actin does not cross the centre. No complicated heads or bands. Three small legend labels only: 'Thin filament', 'Thick filament', 'Z disc'. One bottom label 'Greater overlap'. Use reference geometry: top Z positions x=250 and1350, thin rods300px long, thick rod500px central x550..1050; bottom Z positions x=400 and1200, same thin rods300px, SAME thick central x550..1050. Scientific schematic, original not textbook tracing, no extra words or arrows.

### Muscle correction
Extended the blue thin filaments inward by the same amount in both panels to show partial overlap in the relaxed state, greater overlap during shortening, and unchanged filament lengths.

## Validation
- Production build and 20 rendered-HTML tests passed.
- Changed-file ESLint: zero errors; three existing img-element optimisation warnings in the shared article template remain.
- Chrome previews at widths 360, 390 and 1440: all nine page checks passed, images loaded, no document or text overflow. Third-party requests were blocked for local UI testing and the OG request was routed to the local endpoint; this does not validate live ads/CMP behaviour.
- git diff --check passed. Local preview: http://127.0.0.1:3108.
- No AdSense approval guarantee; content additions alone do not resolve account-level or consent-deployment issues.
