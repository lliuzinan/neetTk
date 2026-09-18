# Consent and revision-guide update: 2026-09-18

## Consent ownership

- MedQGo manages optional GA4 consent. The GA library is loaded only after a positive analytics choice. Unknown, rejected, expired or unreadable stored choices leave it unloaded.
- Google CMP continues to manage advertising consent. Analytics acceptance updates only analytics_storage; it does not grant advertising consent.
- Owner action: in AdSense > Privacy & messaging > European regulations > Settings, keep consent mode for advertising enabled and turn consent mode for analytics off. Save the settings and keep the European message published. This avoids two independent writers of analytics consent.
- The footer Privacy settings control reopens analytics choices and offers Google's showRevocationMessage control when that API is available. It reports when the advertising control is unavailable for the visit.
- Withdrawal disables the GA property, blocks site events, and clears accessible first-party GA cookies. Stored choices expire after 180 days. Revocation is not retrospective erasure of data already collected by Google.
- Google requests in the local browser tests are intercepted. These tests prove the site loader and state transitions; they do not certify a live Google CMP configuration or EEA geolocation behaviour.

## Publication-date provenance

Dates describe the independent revision guides, not the predecessor question-bank pages. First publication dates are reconstructed from the first main-branch content commits below, rather than invented from topic order. Exact production deployment timestamps were not independently retrieved.

| Guide(s) | First guide commit | Date |
| --- | --- | --- |
| Human respiration | 6d6e7da | 2026-09-05 |
| Excretion | b1f8571 | 2026-09-05 |
| Immunity | f7e9d5b | 2026-09-05 |
| Endocrine system | 01f78c5 | 2026-09-06 |
| Neural impulse | 1212ee1 | 2026-09-06 |
| DNA/RNA, cell organelles, mutation | a575015 | 2026-09-08 |
| Photosynthesis, plant respiration, digestion, circulation | e98f019 | 2026-09-11 |
| Mitosis and meiosis | decd076 | 2026-09-13 |
| Flowering plants, Mendelian inheritance, recombinant DNA | 740d538 | 2026-09-14 |
| Chromosomal basis | a5efce0 | 2026-09-15 |
| Pedigree, molecular tools, biotechnology applications | 4e31247 | 2026-09-16 |
| Human reproduction, reproductive health, molecular basis | 9845779 | 2026-09-17 |
| Evolution, organisms and populations | e90f71a | 2026-09-18 |

Article HTML, Open Graph, JSON-LD and sitemap use topicDates. Authored guides without a date record now fail rather than silently taking the global default. Unchanged guides retain their existing modification dates. The guides receiving contextual study links and substantive revisions in this release have modification date 2026-09-18.

## Five-guide learning briefs and differentiation

- Human reproduction: connect location, meiotic cell stage and hormonal signals. Adds an original gamete count and separates ovulation, cleavage, implantation and lactation. Unlike the flowering-plant guide, this does not use double fertilisation as its organising mechanism.
- Reproductive health: identify the event affected, material transferred and destination. Replaces broad boundary statements with comparisons of contraception, infection prevention and assisted-reproduction terminology. Unlike Human reproduction, its central distinction is intervention purpose, not the normal developmental route.
- Molecular basis: explain why evidence supports DNA inheritance and semiconservative copying. Adds experimental predictions and a base-composition calculation; the existing DNA/RNA guide remains the detailed expression pathway.
- Evolution: distinguish allele frequency from population size and a frequency change from proof of selection. Adds two explicitly hypothetical calculations with assumptions; it is not another Mendelian family-cross guide.
- Organisms and populations: account for population change and interpret model rates. Adds a census calculation, a logistic-rate comparison and species-interaction reasoning; it does not infer allele frequencies from population size.

Existing original topic illustrations are retained. No question-bank or textbook assessment text was introduced. Curated related links explain the prerequisite or next learning step and are filtered to published guides. The three home-page study sequences now link to all their published components.

## Sources and verification boundary

Accessible NCERT molecular-basis and population chapters, OpenStax Biology 2e sections 14.3, 19.1, 43.3, 43.4 and 45.3, and WHO's STI fact sheet were consulted. Direct downloads of the NCERT human-reproduction and reproductive-health PDFs timed out; the evolution PDF exceeded the web reader size limit. Retained NCERT URLs remain the chapter anchors, but those failures are not recorded as successful full-PDF verification.

The new census, genotype, base-composition and logistic examples are original instructional calculations. No real observations or reported student experiences are claimed.

## Checks

- Production build and rendered-HTML regression suite include consent-script ordering and date consistency checks.
- Local Chrome checks cover unknown, rejected, granted, revoked, reloaded, expired and corrupt consent; third-party calls are mocked to avoid polluting analytics.
- Five revised article pages are checked at 390px and 1280px for overflow, loaded illustrations and two to four contextual related links.
- Owner-side CMP settings and live regional consent behaviour still require verification after deployment.
