"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cross, genotypes, percent, type Genotype } from "@/lib/monohybrid";

type Pattern = "complete" | "incomplete" | "codominance";

const patterns: { id: Pattern; label: string; short: string }[] = [
  { id: "complete", label: "Complete dominance", short: "Complete" },
  { id: "incomplete", label: "Incomplete dominance", short: "Incomplete" },
  { id: "codominance", label: "Codominance", short: "Codominance" },
];

function phenotypeFor(genotype: Genotype, pattern: Pattern): string {
  if (pattern === "complete") return genotype === "aa" ? "a-expressing" : "A-expressing";
  if (pattern === "incomplete") {
    return genotype === "AA" ? "A homozygote phenotype" : genotype === "Aa" ? "Intermediate heterozygote phenotype" : "a homozygote phenotype";
  }
  return genotype === "AA" ? "A-only phenotype" : genotype === "Aa" ? "Both allele products expressed" : "a-only phenotype";
}

export function DominancePatternExplorer() {
  const [parent1, setParent1] = useState<Genotype>("Aa");
  const [parent2, setParent2] = useState<Genotype>("Aa");
  const [pattern, setPattern] = useState<Pattern>("complete");
  const result = useMemo(() => cross(parent1, parent2), [parent1, parent2]);
  const phenotypeTotals = useMemo(() => {
    const totals = new Map<string, number>();
    genotypes.forEach((genotype) => {
      const label = phenotypeFor(genotype, pattern);
      totals.set(label, (totals.get(label) ?? 0) + result.totals[genotype]);
    });
    return [...totals.entries()];
  }, [pattern, result]);

  return (
    <section className="dominanceExplorer" aria-labelledby="dominance-explorer-title">
      <p className="eyebrow">SAME CROSS / DIFFERENT PHENOTYPE MODEL</p>
      <h2 id="dominance-explorer-title">Separate genotype probability from phenotype labels</h2>
      <p>Choose the parents, then change only the phenotype model. The gametes, cross cells and genotype probabilities stay fixed while the visible phenotype groups are recalculated.</p>

      <div className="dominanceParents">
        <label>Parent 1
          <select value={parent1} onChange={(event) => setParent1(event.target.value as Genotype)}>
            {genotypes.map((genotype) => <option key={genotype} value={genotype}>{genotype}</option>)}
          </select>
        </label>
        <span aria-hidden="true">×</span>
        <label>Parent 2
          <select value={parent2} onChange={(event) => setParent2(event.target.value as Genotype)}>
            {genotypes.map((genotype) => <option key={genotype} value={genotype}>{genotype}</option>)}
          </select>
        </label>
      </div>

      <fieldset className="dominanceModes">
        <legend>Phenotype relationship</legend>
        {patterns.map((option) => (
          <label key={option.id} className={pattern === option.id ? "selected" : ""}>
            <input type="radio" name="dominance-pattern" value={option.id} checked={pattern === option.id}
              onChange={() => setPattern(option.id)} />
            <span>{option.label}</span>
          </label>
        ))}
      </fieldset>

      <div className="dominanceResults">
        <section aria-labelledby="genotype-results-title">
          <h3 id="genotype-results-title">Genotype distribution · unchanged by the switch</h3>
          <div className="dominanceGenotypes">
            {genotypes.map((genotype) => (
              <div key={genotype}><b>{genotype}</b><strong>{percent(result.totals[genotype])}</strong></div>
            ))}
          </div>
          <p>Each value is the sum of the gamete routes that produce that genotype. These values do not depend on how alleles affect the phenotype.</p>
        </section>
        <section aria-live="polite" aria-labelledby="phenotype-results-title">
          <h3 id="phenotype-results-title">Phenotype groups · recalculated</h3>
          <ul className="dominancePhenotypes">
            {phenotypeTotals.map(([label, probability]) => (
              <li key={label}><span>{label}</span><strong>{percent(probability)}</strong></li>
            ))}
          </ul>
          <p>These are model categories for this example, not universal names for real traits.</p>
        </section>
      </div>

      <details className="dominanceMatrix">
        <summary>Inspect the same gamete routes</summary>
        <p>Rows are Parent 1 gametes and columns are Parent 2 gametes. Switch the phenotype model above: every cell and route probability remains the same.</p>
        <div className="dominanceTableWrap">
          <table>
            <caption>{parent1} × {parent2} · gamete combinations</caption>
            <thead><tr><th scope="col">P1 ↓ / P2 →</th>{result.second.map((gamete) => <th scope="col" key={gamete.allele}>{gamete.allele} ({percent(gamete.probability)})</th>)}</tr></thead>
            <tbody>{result.first.map((gamete) => <tr key={gamete.allele}>
              <th scope="row">{gamete.allele} ({percent(gamete.probability)})</th>
              {result.second.map((other) => {
                const cell = result.cells.find((candidate) => candidate.first.allele === gamete.allele && candidate.second.allele === other.allele)!;
                return <td key={other.allele}><b>{cell.genotype}</b><span>{percent(cell.probability)}</span></td>;
              })}
            </tr>)}</tbody>
          </table>
        </div>
      </details>

      <p className="dominanceLimits"><strong>Model boundary:</strong> one autosomal locus, equal segregation, random fertilisation, no mutation or differential survival, and complete penetrance. Incomplete dominance means the heterozygote has an intermediate phenotype; codominance means both allele products are expressed. These models describe allele-to-phenotype relationships, not changes to segregation.</p>
      <p><Link href="/neet-ug/biology/tools/monohybrid-cross">Open the full monohybrid explorer</Link> to select and inspect each route in more detail.</p>
    </section>
  );
}
