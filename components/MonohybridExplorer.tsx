"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/components/AnalyticsBeacon";
import { cross, genotypes, percent, crossSummary, appendCross, type Genotype } from "@/lib/monohybrid";
import { recordKey, parseRecordBook, emptyBook, emptyRecord } from "@/lib/explanationRecords";
import { getRecessiveCross } from "@/lib/pedigree";
import styles from "./MonohybridExplorer.module.css";
export function MonohybridExplorer({ example }: { example?: ReturnType<typeof getRecessiveCross> }) {
  const started = useRef(false);
  function measure(action: "result" | "route" | "save" | "download_request" | "record_open") {
    // Send only action names, never genotypes, notes or free text. No pre-consent replay.
    if (!started.current) started.current = trackEvent("monohybrid_start");
    trackEvent(`monohybrid_${action}`);
  }
  const [p1, setP1] = useState<Genotype>(example?.parents[0] ?? "Aa");
  const [p2, setP2] = useState<Genotype>(example?.parents[1] ?? "Aa");
  const [showExample, setShowExample] = useState(Boolean(example));
  const [selected, setSelected] = useState(0), [status, setStatus] = useState("");
  const [saved, setSaved] = useState("");
  const result = cross(p1, p2), cell = result.cells[selected] ?? result.cells[0];
  const signature = `${p1}-${p2}`;
  function change(a: Genotype, b: Genotype) {
    if (a !== p1 || b !== p2) setShowExample(false);
    measure("result");
    setP1(a); setP2(b); setSelected(0); setStatus("");
  }
  function save() {
    try {
      const raw = localStorage.getItem(recordKey), book = raw ? parseRecordBook(raw) : emptyBook();
      const current = book.records.segregation ?? emptyRecord();
      book.records.segregation = { ...current, working: appendCross(current.working, crossSummary(p1, p2)) };
      localStorage.setItem(recordKey, JSON.stringify(book));
      window.dispatchEvent(new Event("medqgo-records-changed"));
      measure("save");
      setSaved(signature); setStatus("Appended to your segregation reasoning in this browser. Your other fields and topics were preserved.");
    } catch (error) { setStatus(error instanceof Error ? `${error.message} Existing saved data was not replaced. You can download this cross instead.` : "Could not save. Download this cross instead."); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([crossSummary(p1,p2)], {type:"text/plain;charset=utf-8"}));
    const a = document.createElement("a"); a.href=url; a.download=`medqgo-cross-${p1}-${p2}.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    measure("download_request");
    setStatus("Download requested. The file includes the reasoning and model limits.");
  }
  return <div className={styles.explorer}>
    {showExample && example && <section className={styles.panel} aria-label="Fictional pedigree starting point">
      <h2>{example.pair} under the autosomal recessive model</h2>
      <p>{example.child} is aa under this hypothesis, so both unaffected parents must carry a. The cross shows expected offspring probabilities for the assumed Aa × Aa pair.</p>
      <Link href="/neet-ug/biology/tools/pedigree-analysis">Return to the competing pedigree hypotheses →</Link>
    </section>}
    <noscript><p className={styles.noScript}>JavaScript is needed to change the parents and save a record. The Aa × Aa example and its explanation remain readable.</p></noscript>
    <section className={styles.setup} aria-labelledby="parents-title">
      <div className={styles.sectionLabel}>01 <span>Set the model</span></div>
      <div className={styles.setupHeading}><div><h2 id="parents-title">Choose known parent genotypes</h2><p>A and a are alleles at one autosomal locus. The model treats fertilisation as random.</p></div><span className={styles.modelTag}>Autosomal · 1 locus</span></div>
      <div className={styles.controls}>
        <label><span>Parent 1</span><select value={p1} onChange={e=>change(e.target.value as Genotype,p2)}>{genotypes.map(g=><option key={g}>{g}</option>)}</select></label>
        <span className={styles.crossMark} aria-hidden="true">×</span>
        <label><span>Parent 2</span><select value={p2} onChange={e=>change(p1,e.target.value as Genotype)}>{genotypes.map(g=><option key={g}>{g}</option>)}</select></label>
      </div>
      <div className={styles.presets}><span>Start with</span><button onClick={()=>change("Aa","Aa")}>Aa × Aa</button><button onClick={()=>change("Aa","aa")}>Aa × aa</button><button onClick={()=>change("AA","aa")}>AA × aa</button></div>
      <div className={styles.gametes}>{[result.first,result.second].map((gs,i)=><div className={styles.gameteCard} key={i}><div className={styles.cardHeading}><span>Parent {i+1}</span><b>{i===0?p1:p2}</b></div><div>{gs.map(g=><span className={styles.chip} key={g.allele}>{g.allele}<small>{percent(g.probability)}</small></span>)}</div><p>{gs.length===2?"Alleles separate evenly in this model.":"This parent contributes one allele type at this locus."}</p></div>)}</div>
    </section>
    <div className={styles.workspace}>
      <section className={`${styles.panel} ${styles.matrixPanel}`} aria-labelledby="square-title">
        <div className={styles.sectionLabel}>02 <span>Combine gametes</span></div><div className={styles.panelHeading}><div><h2 id="square-title">Select a route through the cross</h2><p>Rows are Parent 1. Columns are Parent 2. Each cell is one possible zygote.</p></div><span className={styles.matrixKey}><i /> Selected route</span></div>
        <table className={styles.square}><caption>{p1} × {p2} probability matrix</caption><thead><tr><th scope="col">P1 ↓ / P2 →</th>{result.second.map(g=><th scope="col" key={g.allele}>{g.allele}<small>{percent(g.probability)}</small></th>)}</tr></thead><tbody>{result.first.map((g,row)=><tr key={g.allele}><th scope="row">{g.allele}<small>{percent(g.probability)}</small></th>{result.second.map((other,col)=>{const idx=row*result.second.length+col,c=result.cells[idx];return <td key={other.allele}><button aria-pressed={selected===idx} aria-label={`${g.allele} from parent 1 and ${other.allele} from parent 2: ${c.genotype}, ${percent(c.probability)}`} onClick={()=>{ setSelected(idx); measure("route"); }}><strong>{c.genotype}</strong><small>{percent(c.probability)}</small></button></td>;})}</tr>)}</tbody></table>
        <div className={styles.matrixNote}>Identical gamete types are grouped. A homozygous parent creates one row or column.</div>
      </section>
      <aside className={styles.inspector} aria-live="polite">
        <div className={styles.sectionLabel}>03 <span>Inspect one route</span></div><h2>Why this cell?</h2><div className={styles.routeValue}><span>{cell.first.allele} × {cell.second.allele}</span><strong>{cell.genotype}</strong></div><p>{cell.first.allele} from Parent 1 ({percent(cell.first.probability)}) combines with {cell.second.allele} from Parent 2 ({percent(cell.second.probability)}).</p><div className={styles.equation}>{cell.first.probability} <span>×</span> {cell.second.probability} <span>=</span> <b>{percent(cell.probability)}</b></div><p className={styles.inspectorHint}>This route contributes {percent(cell.probability)} to the total probability for {cell.genotype}.</p>
        <div className={styles.inspectorDivider} /><h3>Next check</h3><p>Change one parent and identify which routes disappear. Explain what changed before reading the totals.</p>
      </aside>
    </div>
    <section className={styles.panel} aria-labelledby="totals-title"><div className={styles.sectionLabel}>04 <span>Read the result</span></div><div className={styles.panelHeading}><div><h2 id="totals-title">Genotype first, phenotype second</h2><p>Summed routes give the expected probability for one offspring.</p></div><span className={styles.modelTag}>Complete dominance</span></div><div className={styles.results}>{genotypes.map(g=><div key={g}><span>{g}</span><strong>{percent(result.totals[g])}</strong><small>{result.cells.filter(c=>c.genotype===g).map(c=>percent(c.probability)).join(" + ") || "No route"}{result.cells.filter(c=>c.genotype===g).length>1?` = ${percent(result.totals[g])}`:""}</small></div>)}</div><div className={styles.phenotype}><div><span>A-expressing phenotype</span><strong>{percent(result.dominant)}</strong><small>AA + Aa</small></div><div><span>Recessive phenotype</span><strong>{percent(result.recessive)}</strong><small>aa</small></div></div><p className={styles.limit}>These are probabilities per offspring, not guaranteed counts. Four offspring do not have to match the ratio exactly.</p><p><Link href="/neet-ug/biology/tools/dominance-patterns">Compare complete dominance, incomplete dominance and codominance →</Link></p></section>
    <section className={`${styles.panel} ${styles.recordPanel}`}><div><div className={styles.sectionLabel}>05 <span>Keep your reasoning</span></div><h2>Save the calculation with your explanation</h2><p>Append this cross to your segregation record, or download a text copy with the assumptions.</p></div><div className={styles.recordActions}><button className="primaryButton" disabled={saved===signature} onClick={save}>{saved===signature?"Added to my record":"Append to my record"}</button><button onClick={download}>Download calculation</button><Link onClick={()=>measure("record_open")} href="/neet-ug/biology/learn/inheritance?recordTopic=segregation#explanation-record">Open my explanation →</Link><p role="status">{status}</p></div></section>
  </div>;
}
