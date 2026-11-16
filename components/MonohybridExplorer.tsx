"use client";
import { useState } from "react";
import Link from "next/link";
import { cross, genotypes, percent, crossSummary, appendCross, type Genotype } from "@/lib/monohybrid";
import { recordKey, parseRecordBook, emptyBook, emptyRecord } from "@/lib/explanationRecords";
import styles from "./MonohybridExplorer.module.css";
export function MonohybridExplorer() {
  const [p1, setP1] = useState<Genotype>("Aa"), [p2, setP2] = useState<Genotype>("Aa");
  const [selected, setSelected] = useState(0), [status, setStatus] = useState("");
  const [saved, setSaved] = useState("");
  const result = cross(p1, p2), cell = result.cells[selected] ?? result.cells[0];
  const signature = `${p1}-${p2}`;
  function change(a: Genotype, b: Genotype) { setP1(a); setP2(b); setSelected(0); setStatus(""); }
  function save() {
    try {
      const raw = localStorage.getItem(recordKey), book = raw ? parseRecordBook(raw) : emptyBook();
      const current = book.records.segregation ?? emptyRecord();
      book.records.segregation = { ...current, working: appendCross(current.working, crossSummary(p1, p2)) };
      localStorage.setItem(recordKey, JSON.stringify(book));
      window.dispatchEvent(new Event("medqgo-records-changed"));
      setSaved(signature); setStatus("Appended to your segregation reasoning in this browser. Your other fields and topics were preserved.");
    } catch (error) { setStatus(error instanceof Error ? `${error.message} Existing saved data was not replaced. You can download this cross instead.` : "Could not save. Download this cross instead."); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([crossSummary(p1,p2)], {type:"text/plain;charset=utf-8"}));
    const a = document.createElement("a"); a.href=url; a.download=`medqgo-cross-${p1}-${p2}.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    setStatus("Download requested. The file includes the reasoning and model limits.");
  }
  return <div className={styles.explorer}>
    <noscript><p>JavaScript is needed to change the parents and save a record. The Aa × Aa example and its explanation below remain readable.</p></noscript>
    <section className={styles.panel} aria-labelledby="parents-title"><p className="eyebrow">01 / CHOOSE KNOWN GENOTYPES</p><h2 id="parents-title">What does each parent contribute?</h2><p>A and a are two alleles at the same autosomal locus. Aa and aA describe the same genotype; this tool writes it as Aa.</p><div className={styles.controls}>
      <label>Parent 1<select value={p1} onChange={e=>change(e.target.value as Genotype,p2)}>{genotypes.map(g=><option key={g}>{g}</option>)}</select></label>
      <span aria-hidden="true">×</span><label>Parent 2<select value={p2} onChange={e=>change(p1,e.target.value as Genotype)}>{genotypes.map(g=><option key={g}>{g}</option>)}</select></label>
    </div><div className={styles.presets}><button onClick={()=>change("Aa","Aa")}>Two heterozygotes</button><button onClick={()=>change("Aa","aa")}>Heterozygote × recessive</button><button onClick={()=>change("AA","aa")}>Opposite homozygotes</button></div>
    <div className={styles.gametes}>{[result.first,result.second].map((gs,i)=><div key={i}><h3>Parent {i+1}: {i===0?p1:p2}</h3>{gs.map(g=><span className={styles.chip} key={g.allele}>{g.allele} · {percent(g.probability)}</span>)}<p>{gs.length===2?"The two alleles separate: half of the gametes carry A and half carry a in this model.":"Every gamete carries the same allele at this locus. Each gamete still carries only one allele here."}</p></div>)}</div></section>
    <section className={styles.panel} aria-labelledby="square-title"><p className="eyebrow">02 / COMBINE GAMETES</p><h2 id="square-title">Follow one route through the cross</h2><p>Select a cell to see its calculation. Identical gamete types are grouped, so a homozygous parent needs only one row or column.</p>
    <table className={styles.square}><caption>{p1} × {p2}: parent 1 rows, parent 2 columns</caption><thead><tr><th scope="col">P1 ↓ / P2 →</th>{result.second.map(g=><th scope="col" key={g.allele}>{g.allele}<small>{percent(g.probability)}</small></th>)}</tr></thead><tbody>{result.first.map((g,row)=><tr key={g.allele}><th scope="row">{g.allele}<small>{percent(g.probability)}</small></th>{result.second.map((other,col)=>{const idx=row*result.second.length+col,c=result.cells[idx];return <td key={other.allele}><button aria-pressed={selected===idx} aria-label={`${g.allele} from parent 1 and ${other.allele} from parent 2: ${c.genotype}, ${percent(c.probability)}`} onClick={()=>setSelected(idx)}><strong>{c.genotype}</strong><small>{percent(c.probability)}</small></button></td>;})}</tr>)}</tbody></table>
    <div className={styles.reason} aria-live="polite"><h3>Why this cell is {percent(cell.probability)}</h3><p>{cell.first.allele} from parent 1 ({percent(cell.first.probability)}) and {cell.second.allele} from parent 2 ({percent(cell.second.probability)}) make <b>{cell.genotype}</b>.</p><p>{cell.first.probability} × {cell.second.probability} = {cell.probability}. Multiply because the gametes unite randomly under the stated model.</p></div></section>
    <section className={styles.panel} aria-labelledby="totals-title"><p className="eyebrow">03 / ADD ROUTES, THEN INTERPRET</p><h2 id="totals-title">Genotype first. Phenotype second.</h2><div className={styles.results}>{genotypes.map(g=><div key={g}><h3>{g}</h3><strong>{percent(result.totals[g])}</strong><p>{result.cells.filter(c=>c.genotype===g).map(c=>percent(c.probability)).join(" + ") || "No route in this cross"}{result.cells.filter(c=>c.genotype===g).length>1?` = ${percent(result.totals[g])}`:""}</p></div>)}</div>
    <p>With complete dominance of A: <b>A-expressing phenotype {percent(result.dominant)}</b> (AA + Aa); <b>recessive phenotype {percent(result.recessive)}</b> (aa). Dominance changes how these genotypes are expressed, not which allele a parent passes on.</p><p>These are probabilities for each offspring. Four offspring do not have to include exactly one AA, two Aa and one aa. Earlier outcomes do not impose a quota on later offspring under this model.</p></section>
    <section className={styles.panel}><h2>Keep the reasoning, not just the answer</h2><p>Explain which parental allele created each route. Then change one parent: which routes disappear, and why?</p><div className={styles.presets}><button className="primaryButton" disabled={saved===signature} onClick={save}>{saved===signature?"Added to my record":"Append to my explanation record"}</button><button onClick={download}>Download this cross (.txt)</button></div><p role="status">{status}</p><p><Link href="/neet-ug/biology/learn/inheritance?recordTopic=segregation#explanation-record">Open my segregation explanation →</Link></p><p>Appending preserves existing notes. Records stay in this browser; they do not sync between devices.</p></section>
  </div>;
}
