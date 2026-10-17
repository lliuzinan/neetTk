"use client";
import { useState } from "react";

export function TestcrossCase() {
 const [stage,setStage]=useState(0);
 const [prediction,setPrediction]=useState("");
 return <aside className="testcrossCase" aria-labelledby="case-title">
  <p className="eyebrow">ORIGINAL WORKED INVESTIGATION / PLANT U</p>
  <h3 id="case-title">When does the evidence actually change?</h3>
  <p>This is a fixed, invented teaching record, not experimental data or a random simulation. Plant U has a dominant phenotype. Its verified tester is aa. Assume one autosomal locus, complete dominance, correct parentage and scoring, and no genotype-dependent loss before scoring.</p>
  <label htmlFor="case-prediction">Before opening the record, write what would rule out AA:</label>
  <textarea id="case-prediction" rows={2} value={prediction} onChange={e=>setPrediction(e.target.value)} placeholder="Name an observation and explain the allele it requires." />
  <p className="casePrivacy">Your note stays on this page only. It is not submitted or automatically graded, and resets when you leave or reload.</p>
  <div aria-live="polite" aria-atomic="true">
   {stage===0?<p><strong>Record sealed.</strong> Two parental hypotheses are open: AA and Aa. The tester fixes one allele in every offspring.</p>:<>
    <div className="caseObservations"><span>Dominant: <b>{stage===1?4:7}</b></span><span>Recessive: <b>{stage===1?0:1}</b></span><span>Total scored: <b>{stage===1?4:8}</b></span></div>
    <div className="caseDots" aria-hidden="true">{Array.from({length:stage===1?4:8},(_,i)=><span key={i} className={i===7?"caseRecessive":"caseDominant"}>{i===7?"R":"D"}</span>)}</div>
    {stage===1?<><h4>First four: keep both hypotheses open</h4><p>All four are dominant. AA predicts this, but Aa can also produce it: (1/2)⁴ = 1/16. That number describes this observation assuming Aa; it is not a probability assigned to Plant U’s genotype.</p><p>Before opening the next batch, state whether a fifth dominant offspring and a recessive offspring would have the same evidential effect.</p></>:<><h4>Next four: three dominant, one recessive</h4><p>The cumulative record is 7:1. The recessive offspring needs an a from Plant U, so AA is excluded within the model. Plant U’s dominant phenotype already requires A; together these observations identify Aa.</p><p>Seven dominant offspring do not overrule the one recessive offspring. The evidence is an allele requirement, not a majority vote. A 1:1 expectation does not require eight offspring to divide exactly 4:4.</p></>}
   </>}
  </div>
  <div className="caseActions">{stage<2&&<button type="button" onClick={()=>setStage(stage+1)}>{stage===0?"Open the first four observations":"Reveal the next four observations"}</button>}{stage>0&&<button type="button" onClick={()=>setStage(0)}>Close the record</button>}</div>
  <details><summary>Read the full record and reasoning without revealing batches</summary><p>Batch one: 4 dominant, 0 recessive. Batch two: 3 dominant, 1 recessive. Combined: 7 dominant, 1 recessive. First batch: AA and Aa both remain possible. Combined record: Aa is required under the stated assumptions because an aa offspring receives a from each parent. These counts are constructed for teaching and are not typical expected counts.</p></details>
  <noscript><p>The reveal controls require JavaScript. Open the full record above for the complete case.</p></noscript>
 </aside>;
}
