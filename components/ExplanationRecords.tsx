"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { learningSteps } from "@/lib/inheritanceLearning";
import { recordBackupMaxBytes, emptyBook, emptyRecord, localCalendarDate, isCalendarDate, parseRecordBook, recordFields, recordKey, type RecordBook, type RecordField } from "@/lib/explanationRecords";

export function ExplanationRecords() {
  const [book, setBook] = useState<RecordBook>(emptyBook);
  const [topic, setTopic] = useState(learningSteps[0].id);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("Loading saved records…");
  const [warning, setWarning] = useState("");
  const [pending, setPending] = useState<RecordBook | null>(null);
  const [clear, setClear] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const requestedTopic = new URLSearchParams(window.location.search).get("recordTopic");
    // URL selection connects a guide directly to its corresponding record after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (learningSteps.some(step => step.id === requestedTopic)) setTopic(requestedTopic!);
    // Restore browser-only state after hydration so server-rendered prompts remain available.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    try { const raw = localStorage.getItem(recordKey); if (raw) setBook(parseRecordBook(raw)); setStatus(raw ? "Saved records restored from this browser." : "Ready for your first explanation."); }
    catch { setWarning("Saved records could not be read. Existing browser data has not been changed. Export anything you write before leaving; editing will try to replace the saved copy."); setStatus("Working in this tab."); }
    setReady(true);
  }, []);
  function save(next: RecordBook) {
    setBook(next);
    try { localStorage.setItem(recordKey, JSON.stringify(next)); setWarning(""); setStatus("Saved in this browser."); window.dispatchEvent(new Event("medqgo-records-changed")); }
    catch { setWarning("Browser storage is unavailable or full. Your changes are only in this tab. Download a backup before leaving."); setStatus("Not saved to this browser."); }
  }
  const current = book.records[topic] ?? emptyRecord();
  const step = learningSteps.find(s => s.id === topic)!;
  function edit(field: RecordField, text: string) { save({ version: 1, records: { ...book.records, [topic]: { ...current, [field]: text } } }); }
  function download() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(book, null, 2)], { type: "application/json" }));
    const a = document.createElement("a"); a.href = url; a.download = "medqgo-explanation-records.json"; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Backup download requested. Keep the file to restore your records on another browser.");
  }
  return <section id="explanation-record" className="learningSection explanationRecord" aria-labelledby="record-heading">
    <p className="eyebrow">YOUR EXPLANATION / KEEP AND REVISIT</p>
    <h2 id="record-heading">Turn your reading into a record you can return to</h2>
    <p>Choose a guide, write your reasoning, then return later to explain it again. These notes are yours; they are not graded or checked for scientific accuracy.</p>
    <p className="recordPrivacy">Autosaved only in this browser, with no account or cloud sync. Clearing browser data removes your records. Download a backup to keep a copy or move to another device. Avoid personal information.</p>
    <p className="recordControls"><a href="/downloads/medqgo-explanation-record.pdf" download>Download the blank record sheet (PDF, 2 pages)</a> — print and write by hand. To print your saved text, use the print button below.</p>
    <noscript><p>Saving and restoring need JavaScript. You can still use the prompts below on paper or print this page as a blank worksheet.</p></noscript>
    <div className="recordControls"><label htmlFor="record-topic">Choose your guide</label><select id="record-topic" value={topic} disabled={!ready} onChange={e => { setTopic(e.target.value); setClear(false); }}>{learningSteps.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}</select><Link href={`/neet-ug/biology/${step.slug}`}>Read this guide →</Link></div>
    <div className="recordControls reviewPlanner">
      <h3>Plan your next review</h3>
      <p>Choose a date using your device’s calendar. Due topics appear on this site when you return; no email or browser notifications are sent.</p>
      <label htmlFor="record-review-date">Next review date</label>
      <input id="record-review-date" type="date" value={current.reviewDate || ""} disabled={!ready} onChange={e => {
        const value = e.target.value;
        if (value && !isCalendarDate(value)) return;
        const record = { ...current }; if (value) record.reviewDate = value; else delete record.reviewDate;
        save({ version: 1, records: { ...book.records, [topic]: record } });
      }} />
      {current.lastReviewed && <p>Last marked reviewed: {current.lastReviewed}</p>}
      <button type="button" disabled={!ready} onClick={() => {
        const record = { ...current, lastReviewed: localCalendarDate() }; delete record.reviewDate;
        save({ version: 1, records: { ...book.records, [topic]: record } });
        setStatus("Review marked for today. The previous due date was cleared; choose a new date when ready. This is your own record, not an accuracy check.");
      }}>Mark reviewed today</button>
      <p>Marking reviewed clears the due date and keeps your notes. It does not establish mastery.</p>
    </div>
    <h3 className="recordPrintTitle">{step.title}</h3>
    <div className="recordFields">{recordFields.map(f => <div key={f.id}><label htmlFor={`record-${f.id}`}>{f.label}</label><p id={`hint-${f.id}`}>{f.hint}</p><textarea id={`record-${f.id}`} aria-describedby={`hint-${f.id}`} maxLength={8000} rows={4} value={current[f.id]} disabled={!ready} onChange={e => edit(f.id, e.target.value)} /><div className="recordPrintValue">{current[f.id] || "\u00a0\n\u00a0\n\u00a0"}</div></div>)}</div>
    <div className="recordControls">
      <p role="status" aria-live="polite">{status}</p>{warning && <p role="alert">{warning}</p>}
      <div className="recordActions"><button type="button" disabled={!ready} onClick={download}>Download backup</button><button type="button" disabled={!ready} onClick={() => fileInput.current?.click()}>Restore backup</button><button type="button" disabled={!ready} onClick={() => window.print()}>Print this explanation</button><button type="button" disabled={!ready} onClick={() => setClear(true)}>Clear this explanation</button></div>
      <input ref={fileInput} type="file" accept=".json,application/json" hidden onChange={async e => { const file = e.target.files?.[0]; e.target.value = ""; if (!file) return; setPending(null); try { if (file.size > recordBackupMaxBytes) throw new Error("This backup is too large."); setPending(parseRecordBook(await file.text())); setStatus("Backup checked. Confirm below to replace your records."); } catch { setStatus("Could not restore this file. Use a valid MedQGo JSON backup up to 2 MB. Your current records are unchanged."); } }} />
      {pending && <div className="recordConfirmation"><p>Replace all five topics with this backup? Topics absent from the backup will be empty. Download your current records first if you need them.</p><button type="button" onClick={() => { save(pending); setPending(null); }}>Replace all records</button> <button type="button" onClick={() => { setPending(null); setStatus("Restore cancelled. Records unchanged."); }}>Cancel restore</button></div>}
      {clear && <div className="recordConfirmation"><p>Clear only “{step.title}”? Other topics will be kept.</p><button type="button" onClick={() => { const records = { ...book.records }; delete records[topic]; save({ version: 1, records }); setClear(false); }}>Confirm clear</button> <button type="button" onClick={() => setClear(false)}>Cancel clear</button></div>}
      <p>The JSON backup contains all five topics. Printing includes only the selected explanation. You can also copy text directly from any field.</p>
    </div>
  </section>;
}
