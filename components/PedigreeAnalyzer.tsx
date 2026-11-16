"use client";
import { useState } from "react";
import Link from "next/link";
import { evaluate, patterns, pedigreeFacts, recessiveCrosses, type Pattern } from "@/lib/pedigree";
import styles from "./PedigreeAnalyzer.module.css";

export function PedigreeAnalyzer() {
  const [selected, setSelected] = useState<Pattern>("autosomal-recessive");
  const result = evaluate(selected);
  return <div className={styles.analyzer}>
    <section className={styles.familyPanel} aria-labelledby="family-title">
      <div className={styles.panelLabel}>01 <span>Read the fictional family</span></div>
      <h2 id="family-title">Start with observations</h2>
      <p>Each mark is a stated observation. Do not add a genotype until the evidence supports one.</p>
      <div className={styles.familyDiagram} aria-hidden="true">
        <div className={styles.parentA}>□<b>I-1</b></div>
        <div className={styles.parentB}>○<b>I-2</b></div>
        <div className={styles.sonA}>■<b>II-1</b></div>
        <div className={styles.daughter}>○<b>II-2</b></div>
        <div className={styles.partner}>□<b>II-3</b></div>
        <div className={styles.sonB}>■<b>III-1</b></div>
        <i className={styles.coupleA} /><i className={styles.dropA} />
        <i className={styles.siblings} /><i className={styles.dropSonA} /><i className={styles.dropDaughter} />
        <i className={styles.coupleB} /><i className={styles.dropB} />
      </div>
      <p className={styles.legend}>Square = male · Circle = female · Filled = trait present</p>
      <ul className={styles.facts}>{pedigreeFacts.map(fact=><li key={fact}>{fact}</li>)}</ul>
    </section>
    <section className={styles.hypothesisPanel} aria-labelledby="hypothesis-title">
      <div className={styles.panelLabel}>02 <span>Compare hypotheses</span></div>
      <h2 id="hypothesis-title">Which patterns fit?</h2>
      <p>Select one model to inspect its assumptions and the observation it must explain.</p>
      <div className={styles.patterns}>{patterns.map(pattern=><button key={pattern.id} className={selected===pattern.id?styles.selected:undefined} aria-pressed={selected===pattern.id} onClick={()=>setSelected(pattern.id)}><span>{pattern.short}</span>{pattern.label}<small>{selected===pattern.id?"Inspecting":"Inspect"} →</small></button>)}</div>
      <article className={`${styles.verdict} ${result.verdict==="contradicted"?styles.contradicted:styles.compatible}`} aria-live="polite"><div className={styles.verdictHeading}><span>{result.verdict === "compatible" ? "✓" : "!"}</span><strong>{patterns.find(p=>p.id===selected)?.label}</strong><b>{result.verdict === "compatible" ? "Compatible" : "Contradicted"}</b></div><p>{result.evidence}</p><div className={styles.next}><small>Next question</small><p>{result.next}</p></div></article>
      {selected === "autosomal-recessive" && (
        <div className={styles.crossLinks}>
          <h3>Trace a cross under this hypothesis</h3>
          {Object.entries(recessiveCrosses).map(([id, example]) => (
            <Link key={id} href={`/neet-ug/biology/tools/monohybrid-cross?pedigree=${id}`}>
              {example.pair} · {example.parents.join(" × ")} →
            </Link>
          ))}
        </div>
      )}
    </section>
    <section className={styles.boundary}><div><div className={styles.panelLabel}>03 <span>Keep the conclusion precise</span></div><h2>Compatibility is not proof</h2><p><strong>Overall conclusion: underdetermined.</strong> Both autosomal recessive and X-linked recessive models fit this small fictional family. More observations are needed to distinguish them. A family diagram cannot diagnose a condition or calculate personal reproductive risk.</p></div><Link className="primaryButton" href="/neet-ug/biology/tools/monohybrid-cross">Trace a known cross →</Link></section>
  </div>;
}
