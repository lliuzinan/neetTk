"use client";
import { useSyncExternalStore } from "react";
import { learningSteps, learningPath } from "@/lib/inheritanceLearning";
import { parseRecordBook, recordKey, recordFields, localCalendarDate, reviewStatus } from "@/lib/explanationRecords";

function subscribe(update: () => void) {
  window.addEventListener("storage", update);
  window.addEventListener("medqgo-records-changed", update);
  return () => { window.removeEventListener("storage", update); window.removeEventListener("medqgo-records-changed", update); };
}
function subscribeDay(update: () => void) {
  const timer = window.setInterval(update, 60000);
  window.addEventListener("focus", update);
  return () => { window.clearInterval(timer); window.removeEventListener("focus", update); };
}
function snapshot() { try { return localStorage.getItem(recordKey) || ""; } catch { return "unavailable"; } }
export function ContinueLearning() {
  const today = useSyncExternalStore(subscribeDay, localCalendarDate, () => "");
  const raw = useSyncExternalStore(subscribe, snapshot, () => "");
  let records = {} as ReturnType<typeof parseRecordBook>["records"];
  let unavailable = false;
  try { if (raw) records = parseRecordBook(raw).records; } catch { unavailable = true; }
  const saved = learningSteps.filter(step => records[step.id] && (recordFields.some(f => records[step.id][f.id].trim()) || records[step.id].reviewDate || records[step.id].lastReviewed));
  saved.sort((a,b) => (records[a.id].reviewDate || "9999-99-99").localeCompare(records[b.id].reviewDate || "9999-99-99"));
  const due = saved.filter(step => records[step.id].reviewDate && records[step.id].reviewDate! <= today);
  return <section className="continueLearning" aria-labelledby="continue-title">
    <p className="eyebrow">YOUR LEARNING / THIS BROWSER</p>
    <h2 id="continue-title">{saved.length ? "Continue with your saved explanations" : "Start with one explanation"}</h2>
    {unavailable ? <p role="status">Your saved records could not be read. They have not been changed. Open the record tool to restore a backup.</p> : saved.length ? <p>You have notes for {saved.length} of the five topics. Choose a record to revisit your reasoning. Saved notes are not a measure of mastery.</p> : <p>Begin with alleles and gametes, then write what you understood. Your saved topics will appear here when you return in this browser.</p>}
    {!!due.length && <p className="reviewDue" role="status">{due.length} topic{due.length === 1 ? " is" : "s are"} due for review. Dated topics appear first, earliest date first.</p>}
    {saved.length ? <ul className="continueCards">{saved.map(step => {const record = records[step.id]; return <li key={step.id}>
      <h3>{step.title}</h3>
      <p><strong>{reviewStatus(record, today)}</strong>{record.reviewDate && <> · <time dateTime={record.reviewDate}>{record.reviewDate}</time></>}</p>
      {record.lastReviewed && <p>Last marked reviewed: {record.lastReviewed}</p>}
      <p><strong>Your explanation:</strong> {(record.claim.trim() || record.working.trim() || "Notes saved — open to continue.").slice(0,160)}{(record.claim.trim() || record.working.trim()).length > 160 ? "…" : ""}</p>
      {record.next.trim() && <p><strong>Your next review:</strong> {record.next.slice(0,160)}{record.next.length > 160 ? "…" : ""}</p>}
      <a href={`${learningPath}?recordTopic=${step.id}#explanation-record`}>Open this record →</a>
      <a href={`/neet-ug/biology/${step.slug}`}>Revisit the guide →</a>
    </li>;})}</ul> : <p><a className="secondaryButton" href={unavailable ? `${learningPath}#explanation-record` : "/neet-ug/biology/mendelian-inheritance"}>{unavailable ? "Open record tool" : "Begin with alleles and gametes →"}</a></p>}
    <p className="continuePrivacy">No account or cloud sync. Clearing browser data removes your notes. <a href={`${learningPath}#explanation-record`}>Open the record tool to back up or restore notes.</a></p>
  </section>;
}
