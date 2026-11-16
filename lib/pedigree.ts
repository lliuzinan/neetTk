export type Pattern = "autosomal-dominant" | "autosomal-recessive" | "x-linked-recessive";
export type Verdict = "compatible" | "contradicted" | "underdetermined";

export const patterns: { id: Pattern; label: string; short: string }[] = [
  { id: "autosomal-dominant", label: "Autosomal dominant", short: "AD" },
  { id: "autosomal-recessive", label: "Autosomal recessive", short: "AR" },
  { id: "x-linked-recessive", label: "X-linked recessive", short: "XLR" },
];

export const pedigreeFacts = [
  "I-1 and I-2 are unaffected parents with an affected son, II-1.",
  "II-2 is an unaffected daughter of I-1 and I-2.",
  "II-2 and an unaffected partner have an affected son, III-1.",
];

export function evaluate(pattern: Pattern): { verdict: Verdict; evidence: string; next: string } {
  if (pattern === "autosomal-dominant") return { verdict: "contradicted", evidence: "An affected child is shown with two unaffected parents. Under the simplified fully penetrant model, that observation conflicts with a dominant allele being sufficient to express the trait.", next: "Check whether penetrance, a new mutation, or the recorded phenotype would need a different model." };
  if (pattern === "autosomal-recessive") return { verdict: "compatible", evidence: "Two unaffected carrier parents can have an affected son. An unaffected daughter can carry the allele, and her affected son is possible with an unaffected carrier partner.", next: "The family does not prove either unaffected parent is a carrier without additional genotype evidence." };
  return { verdict: "compatible", evidence: "An unaffected mother can carry an X-linked recessive allele and have an affected son. The displayed affected individuals are male, which remains compatible with this simplified pattern.", next: "The family does not distinguish this pattern from autosomal recessive inheritance." };
}

export function verdictLabel(verdict: Verdict) { return verdict === "compatible" ? "Compatible with the observations" : verdict === "contradicted" ? "Contradicted by the observations" : "Underdetermined"; }
