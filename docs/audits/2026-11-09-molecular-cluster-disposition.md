# Molecular biology and biotechnology: focused page dispositions

Prepared November 9, 2026 from the checked-in article prose, tables, illustrations, study links, and the current disposition list. This is a source-code editorial assessment, not an independent subject-matter review or a claim that the pages have been merged. No teaching copy, canonical URL, sitemap entry, or redirect was changed by this assessment.

## Reader tasks and decisions

| Page | Distinct learner output found in the current page | Nearest page and decision | Required next change |
| --- | --- | --- | --- |
| `molecular-tools-and-dna-analysis` | Choose between cut, copy, separate and sequence-detection questions; build a tool-to-output map. | **DEEPEN** the navigation hub. It overlaps PCR and gel definitions but neither specialist's worked inference. | Reduce repeated mechanism prose and lead readers to the PCR counting and gel evidence guides at the point each question arises. Check the sequence-detection claim and diagram against sources with a real reviewer. |
| `pcr-amplification-and-copy-number` | State the counted object, calculate ideal and assumed-efficiency amplification, reject sequence identity from a band. | **KEEP** beside the tools hub. Its 5 → 320 molecule and 100 → 324 expected-count examples have distinct quantitative work. | Check the model assumptions and labelled illustration; avoid adding another generic cut/copy/separate introduction. |
| `gel-electrophoresis-and-dna-band-reading` | Use a ladder to infer approximate length, distinguish resolved positions from fragment types, and limit identity claims. | **KEEP** beside the tools hub. Its invented 2400/1200/600 bp lanes and co-migration example are distinct from PCR amplification. | Check band positions, polarity, units and figure; retain the observation-versus-identity boundary. |
| `dna-rna-replication-transcription-translation` | Reconstruct the information-flow arrows and compare their template, product and location. | **DEEPEN** as the expression route. Its replication section overlaps the molecular-basis guide, but the latter adds evidence and packaging. | Shorten duplicate replication framing after human review; make the RNA-to-protein explanation and cross-guide handoff the main task. Do not merge into the molecular-basis page without showing where the distinct translation task goes. |
| `molecular-basis-of-inheritance` | Explain DNA storage/packaging, evidence for hereditary material, semiconservative replication, band predictions and base composition. | **KEEP** as the evidence-and-replication guide. Its Avery/Meselson-Stahl and 18/32 percent examples are absent from the expression-route page. | Check edition, source statements, figure and calculations in actual subject review. |
| `mutation-and-gene-expression` | Trace the possible consequence of DNA changes and distinguish sequence change from regulation. | **DEEPEN**, separate from the expression-route page because the learner's causal question differs. | Resolve the ambiguous “heritable alteration” wording and frameshift scope in the existing review packet before publishing an edit; retain the change-versus-use comparison. |
| `recombinant-dna-technology` | Recall the cut → join → host → select route using five boxes. | **MERGE CANDIDATE** into `biotechnology-principles-and-processes`, already recorded November 9. Both pages ask for essentially the same workflow and stage/tool substitutions. | See the integration and migration checklist below. No redirect yet. |
| `biotechnology-principles-and-processes` | Explain process dependencies, vector control points, selection versus screening, production and recovery. | **DEEPEN** as the destination. | Preserve only a distinct recall action from the short page if it improves the six-box dependency map; avoid concatenating both tables and routines. |

## Other high-priority teaching pages in the same pass

| Page | Present learner task | Decision and bounded next step |
| --- | --- | --- |
| `human-respiration` | Trace ventilation → alveolar exchange → transport → tissue exchange with gas-direction arrows. | **DEEPEN**: retain the route, but verify the gas-gradient, transport and regulation claims and add a checked inference only if it improves the route. Do not append a generic exercise. |
| `immunity-pathogens-vaccines` | Distinguish overlapping innate barriers and acquired active/passive immunity. | **KEEP**: the formerly misleading exclusive-category task was corrected and the current recall asks why a barrier can belong to two categories. Full figure/source and human review still open. |
| `neuron-nerve-impulse-synapse` | Reconstruct signal flow through neuron, chemical synapse and reflex arc. | **KEEP**: the five-element pathway instruction was corrected and verified live; verify ion/synapse claims and illustration before certifying the guide. |

These decisions compare learning tasks, not article length. KEEP means distinct value, not factual certification. DEEPEN is a scoped editorial direction, not a published change. Remaining historical rows are not silently declared acceptable by this batch.

## Recombinant-DNA merge mapping and old-link inventory

The four short-page sections largely map onto the longer page as follows:

1. Cutting, ligase and vector roles → the hub's “Start by naming the jobs” and “A vector is a carrier” sections.
2. Host entry, selection and screening → “Host entry, selection and expression are separate checkpoints”.
3. Cloning, expression and recovery → the same checkpoint section plus “Bioreactors and downstream processing”.
4. Five-box recall → the hub's existing six-box dependency map. A reviewer should decide whether the one-verb labeling adds a real self-check; simply copying it would duplicate the task.

The short-page tool/action/checkpoint table repeats the destination's component/job/check table. Its donor DNA → vector → host illustration is less detailed than the destination's isolate/cut/ligate/host concept route, but the original figure must be visually checked before removal. Both pages cite the same NCERT Chapter 9 and OpenStax Biotechnology URLs; neither citation alone verifies the current edition or every statement.

Before this batch's navigation patch, the old slug was referenced in `lib/studyLinks.ts` from the gel, molecular-tools, biotechnology-applications and hub routes, as well as the hub's own onward-reading text. The navigation patch now takes the latter three routes to the stronger hub or specialist guides; the gel route and body text still refer to the old page. The old page also has a topic record, topic SEO, article illustration, exercise, table, editorial block, dates and metadata. Internal text search cannot establish external inbound links or search performance. Check available Search Console data before redirecting. Preserve a permanent route to the stronger page, update all remaining internal links and the sitemap/canonical, and verify both old and new URLs after an accepted merge. Do not send the old URL to the homepage.

## Review and publication gate

- Confirm the current NCERT Class 12 Chapter 9 edition and relevant sections, source wording for vector features and selection/screening, and every label/caption in the retained figure. Use source links, not copied figures or text.
- Have the actual responsible biology reviewer record name, reviewed version, date, scope, corrections and accepted wording in the disposition rows. Publisher attribution and model checks are not human subject review.
- Prepare a focused patch after that decision: remove duplicate table/routine from the destination, update related links, implement the old route redirect, then test build, links, sitemap/canonical, old/new HTTP behavior and 320/390/1440px layouts.
- Until then both public pages remain live. No claim of a completed merge or improved AdSense status follows from this audit.

The mutation-guide wording correction is prepared separately in `docs/drafts/2026-11-09-mutation-scope-correction.md`; it is not in public code.
