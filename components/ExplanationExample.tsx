import Link from "next/link";
import example from "@/data/explanation-example.json";

export function ExplanationExample() {
  return <section id="filled-example" className="contentBand" aria-labelledby="filled-example-title">
    <p className="eyebrow">A filled example / Same seven prompts</p>
    <h2 id="filled-example-title">{example.title}</h2>
    <p>{example.intro}</p>
    <p>Read the guide first. Compare the entries below with the blank record, then close the example and write your own explanation. Copying it is not evidence of understanding.</p>
    <p><a className="secondaryButton" href="/downloads/medqgo-explanation-example.pdf" download>Download filled example (PDF, 2 pages)</a></p>
    <details><summary>Read the complete example in HTML</summary>
      {example.fields.map((field, i) => <section key={field.label}><h3>{i + 1}. {field.label}</h3><p>{field.value}</p><p><strong>Why this field matters:</strong> {field.hint}</p></section>)}
      <h3>Sources and next step</h3><ul>{example.sources.map(s => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}</ul>
    </details>
    <p><Link href="/neet-ug/biology/learn/inheritance?recordTopic=segregation#explanation-record">Write your own explanation →</Link> Opening this example does not change your saved notes.</p>
  </section>;
}
