# Linkage and recombination guide — bounded review packet

Prepared 18 November 2026 for actual human review. This packet is not the review itself and does not authorize publication of a revision.

## Page and reader task

- Page: [Linkage and recombination frequency](https://medqgo.com/neet-ug/biology/linkage-and-recombination-frequency)
- Reader task: use the stated chromosome phase to classify parental and recombinant offspring; calculate the recombinant share of all scored outcomes; explain why a biased recovery process changes that observed share.
- Nearest guide: `dihybrid-crosses-and-probability`, which addresses when independent-locus probabilities may be combined. The linkage page adds phase-based classification and denominator/recovery auditing, so the tasks are complementary rather than interchangeable.
- Current disposition: KEEP, with exact-source and human content review still open. See `docs/audits/content-disposition.csv` for the prior route checks.

## Sources and scope

- [NCERT Class XII contents, 2025–26 reprint](https://ncert.nic.in/textbook/pdf/lebo1ps.pdf) verifies the current chapter location. The linked [official Chapter 4 PDF](https://ncert.nic.in/textbook/pdf/lebo104.pdf) could not be retrieved in this task; its exact subsection/figure mapping is not verified here.
- [Official NEET (UG) 2026 syllabus](https://nta.ac.in/Download/Notice/Notice_20260108180635.pdf), Biology Unit 7, includes linkage and crossing over. This is topic-level syllabus scope, not a claim about the 2027 syllabus.
- [OpenStax Biology 2e §12.3](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance) is a supplementary mechanism check: independent assortment is conditional, linkage changes gamete combinations, and recombination can produce non-parental combinations. No text, figure, or exercise has been copied from it.
- [NCBI Bookshelf, “Mapping Genomes”](https://www.ncbi.nlm.nih.gov/books/NBK21116/) describes recombination frequency as a relative mapping measure and notes limitations from multiple crossovers and region-dependent recombination. This supports the boundary check below; it does not replace NCERT scope.

## Recalculation of the constructed records

The article explicitly labels its sample as invented, not an experiment. Under the stated phase `AB/ab × ab/ab`, a double-recessive tester contributes `ab`, allowing each offspring class to identify the heterozygote's gamete:

| Heterozygote gamete | Offspring class | Count | Classification |
|---|---|---:|---|
| `AB` | `AaBb` | 210 | Parental |
| `ab` | `aabb` | 210 | Parental |
| `Ab` | `Aabb` | 40 | Recombinant |
| `aB` | `aaBb` | 40 | Recombinant |

Recombinants = `40 + 40 = 80`; all scored offspring = `210 + 210 + 40 + 40 = 500`; observed recombinant fraction = `80/500 = 0.16`. Parental fraction = `420/500 = 0.84`; the two fractions sum to one. Dividing by the parental total gives `80/420 ≈ 0.1905`, which is not the recombinant fraction of all scored offspring.

For the stated artificial selective filter, half of each recombinant class remains while all parental records remain: `20 + 20 = 40` recombinant records among `210 + 210 + 20 + 20 = 460`, hence `40/460 ≈ 0.08696` or 8.70%. If every class is retained at the same rate, the fraction remains unchanged. The general formula in the page, `r·sR / ((1−r)·sP + r·sR)`, follows by retaining the recombinant and parental portions separately and dividing retained recombinants by the retained total. With `r=0.16`, `sR=0.5`, `sP=1`, it gives `0.08/(0.84+0.08) ≈ 0.087`.

## Review points and bounded clarification

The local article already limits its interpretation: it says 1% recombination is only approximately one map unit for relatively short intervals, and that 16% supports an approximate two-point distance only under mapping assumptions. Owner replied “好了” after being asked to verify this candidate's accuracy and fit. For this narrow sentence only, that was treated as confirmation to make the approximation boundary explicit; no expert credential or broader page approval is implied.

> For this simplified classroom exercise, the 16% recombinant fraction may be read as about 16 cM using the 1% ≈ 1 cM approximation. It is not an exact distance: the relationship depends on the mapping model, and two-point offspring scoring can miss multiple crossovers between the markers. The result gives neither a physical DNA length nor an exact crossover count.

This clarification was integrated into `lib/noteContent.ts` and remains limited to the 16% example. It avoids calling that example a “short interval”; it states the school-level approximation and the model-dependent caveat. The following outstanding checks are not covered by the Owner's narrow confirmation: whether this detail is useful at the target level, whether it repeats the existing multiple-crossover explanation, and exact NCERT figure/section support.

Please also inspect the rendered phase diagram/table and confirm that (a) parental labels are always relative to the written homologues; (b) both reciprocal recombinant classes enter the numerator; (c) the denominator is the complete scored sample; (d) the two-chromatid crossover example is not read as every product of a meiosis becoming recombinant; and (e) survival/scoring and selective-record examples remain clearly hypothetical.

## Originality and review scope

The invented count set, phase swap, selective spreadsheet-retention example, and recovery equation are the guide's distinct teaching device. This packet summarizes the page's logic and does not reproduce a third-party question or textbook figure. Review should assess scientific accuracy, target-level usefulness, exact NCERT subsection/figure support when the official PDF is available, and whether the extra recovery-bias material clarifies rather than distracts from the core syllabus task.

Owner review scope: a short map-distance clarification proposed in this packet; Owner confirmed it was checked (“好了”). No credentials, independent scientific certification, or full-guide review is inferred. Commit `59baaed` was pushed to `origin/main`; Vercel succeeded and production returned HTTP 200 with the revised sentence and November 18 update date. `npm test` passed (build + 47 tests). Local and live screenshots at 390px and 1440px were visually checked without horizontal overflow. Full deployment evidence is in `docs/2026-11-18-deployment.md`. Exact NCERT section/figure verification and review of the rest of the guide remain open.
