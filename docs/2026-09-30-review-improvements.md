# September 30 review improvements

## Editorial scope

Replaced the generic checkpoint in twelve older guides with original, topic-specific reasoning. Retained existing illustrations, reference lists, comparison tables and first-publication dates. Each revised guide names the relevant NCERT chapter or section in its exercise; modification dates are September 30.

| Guide | Learning check and distinction |
| --- | --- |
| Plant respiration | RQ = 14/20; interpretation versus substrate identification |
| Photosynthesis | Carbon conservation and net output versus RuBP regeneration |
| Blood and circulation | Pulmonary route and one-ventricle cardiac output |
| Human respiration | Same minute ventilation, different simplified alveolar ventilation |
| Excretion | Filtered minus reabsorbed plus secreted amount |
| Mitosis and meiosis | Chromosomes versus DNA molecules for a hypothetical 2n = 6 cell |
| DNA/RNA | Antiparallel transcription followed by a short codon check |
| Mutation | Synonymous and stop substitutions versus frameshift |
| Cell organelles | Secretory cargo routing versus cytosolic protein synthesis |
| Endocrine | Stimulatory forward arrows versus inhibitory feedback |
| Immunity | Passive antibody supply versus active memory formation |
| Neuron | Presynaptic release, chemical transmission and receptor response |

Added a separate selection-versus-screening example to recombinant DNA technology to distinguish its practical evidence question from the broader biotechnology process guide. All values and short sequences are invented teaching models, not reproduced exam questions. No personal health decisions or experimental protocols are supplied.

The twelve legacy guides now each have two or three explicit related-guide links with a learning reason rather than sort-order neighbours. The common metadata and disclaimer remain shared; the learning exercises have distinct outputs.

## References and checks

- Existing direct NCERT chapter links remain the syllabus anchors.
- Supplementary factual checks: OpenStax Biology 2e, cellular respiration and meiosis; all prose and example construction are independent.
- Cloudflare documents `<!--email_off-->` blocks for excluding an individual email from obfuscation: https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/
- No changes to publisher ID, ad delivery, consent defaults or analytics consent behaviour.
- European advertising CMP still needs a real EEA-region verification; this change does not certify it.

## Presentation

- Phone homepage places two live study links before the hero image; the image is reduced in height.
- Analytics notice text is shorter and retains separate allow, reject and advertising choices.
- Contact email is a normal mailto link inside Cloudflare's documented exclusion block. Check production HTML after deployment, as local rendering cannot test CDN rewriting.

## Verification

- Local Chrome checks at 320, 390, 520, 760 and 1440 px: no horizontal overflow on home or sampled revised article; phone reading links remain above the consent panel.
- Visual screenshots reviewed for phone homepage and article layout.
- Production build and rendered-HTML tests cover original dates, updated dates, removed generic checkpoints and the email exclusion marker.
