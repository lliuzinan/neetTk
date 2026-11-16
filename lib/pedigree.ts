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

export const recessiveCrosses = {
  "generation-one": { pair: "I-1 × I-2", child: "II-1", parents: ["Aa", "Aa"] },
  "generation-two": { pair: "II-2 × II-3", child: "III-1", parents: ["Aa", "Aa"] },
} as const;

export function getRecessiveCross(caseId: unknown) {
  if (caseId === "generation-one" || caseId === "generation-two") return recessiveCrosses[caseId];
}

export function evaluate(pattern: Pattern): { verdict: Verdict; evidence: string; next: string } {
  if (pattern === "autosomal-dominant") return { verdict: "contradicted", evidence: "An affected child is shown with two unaffected parents. Under the simplified fully penetrant model, that observation conflicts with a dominant allele being sufficient to express the trait.", next: "Check whether penetrance, a new mutation, or the recorded phenotype would need a different model." };
  if (pattern === "autosomal-recessive") return {
    verdict: "compatible",
    evidence: "If this model applies, each affected son is aa and received an a allele from each parent. The parents in both couples are unaffected, so each must be Aa under the model.",
    next: "These genotypes follow only under the autosomal recessive hypothesis. Compare the X-linked recessive explanation before choosing a model.",
  };
  return {
    verdict: "compatible",
    evidence: "Under the X-linked recessive model, II-1 receives his X chromosome from I-2, and III-1 receives his X from II-2. Both unaffected mothers must carry a trait allele in this model. The fathers contribute a Y chromosome to those sons.",
    next: "The two affected sons fit both recessive models. An autosomal Punnett square does not represent this X-linked transmission route.",
  };
}

export function verdictLabel(verdict: Verdict) { return verdict === "compatible" ? "Compatible with the observations" : verdict === "contradicted" ? "Contradicted by the observations" : "Underdetermined"; }
