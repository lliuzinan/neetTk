export const genotypes = ["AA", "Aa", "aa"] as const;
export type Genotype = typeof genotypes[number];
export type Allele = "A" | "a";
export function isGenotype(value: unknown): value is Genotype { return genotypes.includes(value as Genotype); }
export function gametes(parent: Genotype): { allele: Allele; probability: number }[] {
  if (!isGenotype(parent)) throw new Error("Choose AA, Aa or aa.");
  return parent === "Aa" ? [{ allele: "A", probability: .5 }, { allele: "a", probability: .5 }] : [{ allele: parent[0] as Allele, probability: 1 }];
}
export function cross(parent1: Genotype, parent2: Genotype) {
  const first = gametes(parent1), second = gametes(parent2);
  const totals: Record<Genotype, number> = { AA: 0, Aa: 0, aa: 0 };
  const cells = first.flatMap((g1, row) => second.map((g2, col) => {
    const genotype: Genotype = g1.allele === g2.allele ? (g1.allele + g2.allele) as Genotype : "Aa";
    const probability = g1.probability * g2.probability;
    totals[genotype] += probability;
    return { row, col, first: g1, second: g2, genotype, probability };
  }));
  return { first, second, cells, totals, dominant: totals.AA + totals.Aa, recessive: totals.aa };
}
export function percent(p: number) { return `${p * 100}%`; }
export const modelAssumptions = "One autosomal locus with two alleles; equal allele segregation; random fertilisation; no mutation or differential survival. For phenotype totals only: complete dominance of A, complete penetrance and no modifying environmental effects.";
export function crossSummary(p1: Genotype, p2: Genotype) {
  const result = cross(p1, p2);
  return `${p1} × ${p2}: ${genotypes.map(g => `${g} ${percent(result.totals[g])}`).join(", ")}. Under complete dominance: A-expressing phenotype ${percent(result.dominant)}, recessive phenotype ${percent(result.recessive)}.\n${result.cells.map(c => `${c.first.allele} (${percent(c.first.probability)}) × ${c.second.allele} (${percent(c.second.probability)}) → ${c.genotype}: ${percent(c.probability)}`).join("\n")}\nAssumptions: ${modelAssumptions}\nThese are probabilities per offspring, not guaranteed counts. This model does not infer unknown parental genotypes or real family risks.`;
}
export function appendCross(existing: string, summary: string) {
  const next = existing ? `${existing}\n\n--- Cross exploration ---\n${summary}` : summary;
  if (next.length > 8000) throw new Error("This record is full. Download the cross or shorten your existing reasoning before appending.");
  return next;
}
