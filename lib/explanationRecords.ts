// Covers all five topics at the existing field limits, including UTF-8 and JSON escapes.
export const recordBackupMaxBytes = 2_000_000;
export const recordKey = "medqgo-explanation-records-v1";
export const recordFields = [
  { id: "claim", label: "My conclusion", hint: "State what you think follows from the information." },
  { id: "evidence", label: "Evidence and source", hint: "Note the observations or source section you used." },
  { id: "assumptions", label: "Assumptions", hint: "What conditions does your explanation depend on?" },
  { id: "working", label: "Reasoning or calculation", hint: "Write the steps that connect your evidence to your conclusion." },
  { id: "limits", label: "Limits and uncertainties", hint: "What cannot be concluded? What still needs checking?" },
  { id: "revision", label: "What I changed", hint: "Record a mistake or a change in your explanation, and why." },
  { id: "next", label: "Next review", hint: "Choose what to explain again and when to revisit it." },
] as const;
export type RecordField = typeof recordFields[number]["id"];
export type ExplanationRecord = Record<RecordField, string> & { reviewDate?: string; lastReviewed?: string };
export type RecordBook = { version: 1; records: Record<string, ExplanationRecord> };
export const recordTopics = ["segregation", "testcross", "dominance", "probability", "linkage"];
export const emptyRecord = (): ExplanationRecord => Object.fromEntries(recordFields.map(f => [f.id, ""])) as ExplanationRecord;
export const emptyBook = (): RecordBook => ({ version: 1, records: {} });
export function parseRecordBook(raw: string): RecordBook {
  if (raw.length > recordBackupMaxBytes || new TextEncoder().encode(raw).byteLength > recordBackupMaxBytes) throw new Error("This backup is too large.");
  const value = JSON.parse(raw);
  if (!value || value.version !== 1 || !value.records || typeof value.records !== "object" || Array.isArray(value.records)) throw new Error("Choose a MedQGo explanation-record backup (version 1).");
  const records: Record<string, ExplanationRecord> = {};
  for (const [topic, item] of Object.entries(value.records)) {
    if (!recordTopics.includes(topic) || !item || typeof item !== "object" || Array.isArray(item)) throw new Error("The backup contains an unsupported topic or record.");
    const record = emptyRecord();
    for (const field of recordFields) {
      const text = (item as Record<string, unknown>)[field.id];
      if (typeof text !== "string" || text.length > 8000) throw new Error("The backup contains missing or oversized fields.");
      record[field.id] = text;
    }
    for (const key of ["reviewDate", "lastReviewed"] as const) {
      const date = (item as Record<string, unknown>)[key];
      if (date !== undefined) {
        if (typeof date !== "string" || !isCalendarDate(date)) throw new Error("The backup contains an invalid review date.");
        record[key] = date;
      }
    }
    records[topic] = record;
  }
  return { version: 1, records };
}

export function isCalendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T12:00:00Z");
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
export function localCalendarDate(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
export function reviewStatus(record: ExplanationRecord, today: string): string {
  if (!record.reviewDate) return "No review date set";
  return record.reviewDate < today ? "Overdue" : record.reviewDate === today ? "Due today" : "Scheduled";
}
