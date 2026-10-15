"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { learningSteps, learningQuestions, parseProgress, progressKey, type LearningProgress } from "@/lib/inheritanceLearning";

export function InheritanceLearning() {
 const [progress,setProgress]=useState<LearningProgress>({answers:{},read:[]});
 const [ready,setReady]=useState(false);
 const [storageError,setStorageError]=useState(false);
 const [selected,setSelected]=useState<Record<string,number | undefined>>({});
 const [reviewOnly,setReviewOnly]=useState(false);
 const [confirmReset,setConfirmReset]=useState(false);
 useEffect(()=>{try {setProgress(parseProgress(localStorage.getItem(progressKey)));} catch {setStorageError(true);} setReady(true);},[]);
 function save(next:LearningProgress){setProgress(next);try{localStorage.setItem(progressKey,JSON.stringify(next));setStorageError(false);}catch{setStorageError(true);}}
 const answered=learningQuestions.filter(q=>progress.answers[q.id]!==undefined);
 const missed=answered.filter(q=>progress.answers[q.id]!==q.answer);
 const correct=answered.length-missed.length;
 const visible=reviewOnly?missed:learningQuestions;
 return <div className="learningWorkspace">
  <noscript><p>Interactive checks need JavaScript. The chapter route, explanations and answer key remain available below.</p></noscript>
  <section className="learningProgress" aria-label="Your progress">
   <div><span className="eyebrow">ON THIS DEVICE</span><h2>Your revision, one concept at a time</h2><p aria-live="polite">{ready?`${answered.length} of 10 checks answered · ${correct} latest answers correct · ${missed.length} to revisit`:"Loading saved progress…"}</p><progress max={10} value={answered.length} aria-label="Checks answered" /></div>
   <div><p>Progress stays in this browser. No account or cross-device sync. Clearing browser data removes it. A correct retry does not establish long-term mastery.</p>{storageError&&<p role="status">Browser storage is unavailable. You can continue, but changes may not survive a reload.</p>}
   <button type="button" disabled={!ready} onClick={()=>setConfirmReset(true)}>Clear my progress</button>
   {confirmReset&&<div><p>Remove this module’s answers and reading marks from this browser?</p><button type="button" onClick={()=>{save({answers:{},read:[]});setSelected({});setReviewOnly(false);setConfirmReset(false);}}>Yes, clear this module</button> <button type="button" onClick={()=>setConfirmReset(false)}>Cancel</button></div>}</div>
  </section>
  <section id="route" className="learningSection"><div className="learningSectionHeading"><div><p className="eyebrow">01 / UNDERSTAND</p><h2>Follow the learning route</h2></div><p>Read in order, or use a missed check to find your next guide.</p></div>
  <ol className="learningRoute">{learningSteps.map((s,i)=><li key={s.id}><span className="learningNumber">0{i+1}</span><div><h3><Link href={`/neet-ug/biology/${s.slug}`}>{s.title} →</Link></h3><p>{s.outcome}</p><label><input type="checkbox" checked={progress.read.includes(s.id)} disabled={!ready} onChange={e=>save({...progress,read:e.target.checked?[...progress.read,s.id]:progress.read.filter(id=>id!==s.id)})}/> I have read this guide</label></div></li>)}</ol></section>
  <section id="checks" className="learningSection"><div className="learningSectionHeading"><div><p className="eyebrow">02 / CHECK YOUR REASONING</p><h2>Ten original concept checks</h2></div><button type="button" aria-pressed={reviewOnly} disabled={!ready} onClick={()=>setReviewOnly(!reviewOnly)}>{reviewOnly?"Show all checks":`Revisit missed checks (${missed.length})`}</button></div>
  <p>Choose one answer, then check the reasoning. These are learning exercises, not past NEET questions or an exam-score prediction.</p>
  {reviewOnly&&visible.length===0&&<p role="status">No missed checks are saved. Use “Show all checks” to start or continue the set.</p>}
  <div className="learningQuestions">{visible.map(q=>{const step=learningSteps.find(s=>s.id===q.step)!;const a=progress.answers[q.id];const checked=a!==undefined;const choice=selected[q.id]??a;return <article key={q.id} id={q.id} className="learningQuestion"><p className="eyebrow">CHECK {learningQuestions.indexOf(q)+1} / {step.title}</p><fieldset><legend>{q.prompt}</legend>{q.options.map((option,i)=><label className="learningOption" key={option}><input type="radio" name={q.id} value={i} checked={choice===i} disabled={checked||!ready} onChange={()=>setSelected({...selected,[q.id]:i})}/><span>{option}</span></label>)}</fieldset>
   {!checked?<button className="learningCheck" type="button" disabled={!ready||choice===undefined} onClick={()=>save({...progress,answers:{...progress.answers,[q.id]:choice}})}>Check answer</button>:<div className="learningFeedback" role="status"><strong>{a===q.answer?"Correct — explain why":"Revisit this concept"}</strong><p>{q.feedback[a]}</p><p><b>Reasoning:</b> {q.reasoning}</p><p><b>Answer:</b> {q.options[q.answer]}</p><Link href={`/neet-ug/biology/${step.slug}`}>Review: {step.title} →</Link><details><summary>Why the other options do not fit</summary><ul>{q.options.map((o,i)=>i!==q.answer?<li key={o}><b>{o}:</b> {q.feedback[i]}</li>:null)}</ul></details><p><a href={q.source}>NCERT Chapter 4</a> · <a href={`/contact?exercise=${q.id}`}>Report an issue ({q.id})</a></p><button type="button" onClick={()=>{const answers={...progress.answers};delete answers[q.id];save({...progress,answers});setSelected({...selected,[q.id]:undefined});setReviewOnly(false);}}>Try again</button></div>}
  </article>})}</div></section>
 </div>;
}
