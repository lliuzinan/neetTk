import Link from "next/link";
const cases = [
  { title: "An unknown parent", question: "What evidence would change your genotype conclusion?", href: "testcross-and-unknown-genotypes#case-title", task: "Open the offspring record in stages. Write down your first conclusion before revealing the next observation.", output: "A claim about the parent, the observation supporting it, and one limit of the sample.", prerequisite: "mendelian-inheritance", label: "Alleles, gametes and phenotype" },
  { title: "A recombination record", question: "Can the way a sample was collected change your interpretation?", href: "linkage-and-recombination-frequency#linkage-audit-caption", task: "Compare the two records and inspect which offspring classes were recovered before interpreting their percentages.", output: "A comparison that identifies the denominator and explains whether the records support the same inference.", prerequisite: "dihybrid-crosses-and-probability", label: "Two-locus probability and assumptions" },
  { title: "A fictional family", question: "Which family member is the probability about?", href: "pedigree-analysis-and-inheritance-patterns", task: "Work through the family example. Keep the question about an unaffected sibling separate from the question about a future child.", output: "Two separately labelled probability statements, each with its own information and assumptions.", prerequisite: "testcross-and-unknown-genotypes", label: "Inferring genotype from evidence" },
];
export function InheritanceCaseLibrary() { return <section className="learningSection" id="case-library">
  <p className="eyebrow">APPLY / THREE WORKED INVESTIGATIONS</p>
  <h2>Choose the reasoning problem you need to solve</h2>
  <p>Use these alongside the reading route. Each investigation has a different job: infer a hidden genotype, audit a record, or define a conditional probability. Finish with an explanation in your own words before checking the worked reasoning.</p>
  <div className="inheritanceCaseGrid">{cases.map(item => <article key={item.href}>
    <h3>{item.title}</h3><p><strong>{item.question}</strong></p><p>{item.task}</p>
    <p><strong>Your finished work:</strong> {item.output}</p>
    <p><Link href={`/neet-ug/biology/${item.href}`}>Open the investigation →</Link></p>
    <p className="muted">Need the foundation? <Link href={`/neet-ug/biology/${item.prerequisite}`}>{item.label}</Link></p>
  </article>)}</div>
  <details className="learningAnswerKey"><summary>A reusable record for your explanation</summary>
    <ol><li>Question: identify the parent, offspring group or family member you are reasoning about.</li><li>Evidence: record what was actually observed, separately from what you assumed.</li><li>Model: name the inheritance rule and sampling conditions you used.</li><li>Reasoning: show the cross, count or calculation that connects evidence to your claim.</li><li>Limit: name one conclusion the available information does not establish.</li></ol>
    <p>Compare this record with the worked guide. If the result differs, first check whether you answered the same question using the same assumptions. Revisit only the foundation linked to that step.</p>
  </details>
</section>; }
