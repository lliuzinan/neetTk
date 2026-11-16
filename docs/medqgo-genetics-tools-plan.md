# MedQGo genetics tools plan

Updated November 16, 2026. This is a product and review plan, not an AdSense approval promise.

Monohybrid explorer redesign is pending design handoff. See the [redesign brief](medqgo-monohybrid-redesign-brief.md) for design deliverables and implementation acceptance criteria.

## User problem

A learner can read the inheritance guides but needs a visible way to connect a parental genotype to gametes, offspring combinations, probabilities, and the limits of the conclusion. A second need is learning how to reason from a fictional pedigree without turning incomplete information into a diagnosis or a real-family risk estimate.

## Work table

| Priority | Work package | Deliverable | Acceptance evidence | Release gate | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Monohybrid cross explorer | Known `AA`, `Aa`, or `aa` parents; gamete probabilities; clickable cross grid; genotype and complete-dominance phenotype totals; assumptions and limits; text export; append to the existing segregation record | All nine parental combinations conserve probability; `Aa × Aa`, `Aa × aa`, and `AA × aa` examples; keyboard controls; no-JS explanation remains readable; mobile layout has no horizontal overflow | Actual content review of calculations, wording, and interaction | Professional workspace redesign implemented locally November 16. Review pending |
| 2 | Learning-centre integration | A prominent route from the inheritance centre to the explorer and a return link to the saved segregation explanation | Internal link check, rendered page test, record preservation check | Same review as package 1 | Implemented locally November 16. Review pending |
| 3 | Fictional pedigree analyser | Add a small, authored family diagram; mark sex and trait status; compare autosomal dominant, autosomal recessive, and X-linked hypotheses; show compatible, contradicted, and underdetermined evidence | Test cases include an information-insufficient result; every inference names the observation and assumption; no disease diagnosis or personal family advice | Separate content review and source check before integration | Planned |
| 4 | Cross-to-pedigree handoff | Select a compatible parent pair from the fictional family and pass only explicitly supported genotype possibilities into the monohybrid model | Handoff preserves uncertainty and shows alternative hypotheses rather than one forced answer | Package 3 review complete | Planned |
| 5 | Feedback and release | Invite a small, authorized group of target learners to attempt one task; record completion and confusion points without inventing results | Feedback log identifies actual participants and changes, or explicitly records that feedback is unavailable | Owner decides release and deployment | Planned |

## Scope boundaries

The first tool models one autosomal locus, two alleles, equal segregation, random fertilisation, complete dominance only for phenotype aggregation, and no mutation or differential survival. It does not model linkage, two-locus crosses, incomplete dominance, codominance, sex linkage, penetrance, environmental effects, diagnosis, or personal reproductive risk.

The pedigree analyser will use a fictional teaching family. It will teach compatibility of hypotheses, not identify a condition in a real person. “Insufficient information” is a valid output. The tool must show the distinction between a known genotype, a possible genotype, and an inferred phenotype.

## Sources and review record

The initial model is cross-checked against NCERT Class 12 Biology, Chapter 4 as the curriculum reference and OpenStax Biology 2e sections [12.2](https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits) and [12.3](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance). OpenStax is a factual cross-check only; no source figures, question text, answer options, or tables are reproduced. The implementation is an original MedQGo interface and calculation module.

The November 16 draft is local and marked noindex. It must not be described as live until the actual reviewer checks the calculations, model assumptions, accessible interaction, and the wording that separates educational probabilities from family risk. The existing Mendelian-guide review does not automatically cover this new tool.
