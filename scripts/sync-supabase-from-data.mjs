import { readFileSync } from "node:fs";

const topics = JSON.parse(readFileSync("data/topics.json", "utf8"));
const questions = JSON.parse(readFileSync("data/questions.json", "utf8"));
const notes = JSON.parse(readFileSync("data/seo-notes.json", "utf8"));

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !serviceKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY.");
}

const restUrl = `${supabaseUrl.replace(/\/$/, "")}/rest/v1`;

async function request(path, init) {
  const response = await fetch(`${restUrl}${path}`, {
    ...init,
    headers: {
      apikey: serviceKey,
      authorization: `Bearer ${serviceKey}`,
      "content-type": "application/json",
      ...(init.headers || {}),
    },
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${init.method || "GET"} ${path} failed: ${response.status} ${body}`);
  }
}

function topicRow(topic) {
  return {
    id: topic.id,
    exam: topic.exam,
    subject: topic.subject,
    name: topic.name,
    slug: topic.slug,
    ncert_ref: topic.ncertRef,
    seo_title: `${topic.name} MCQs for NEET-UG Biology`,
    seo_description: `Practice ${topic.name} NEET-UG Biology questions with NCERT explanations.`,
    question_count: topic.questionCount,
    sort_order: topic.sortOrder,
    updated_at: new Date().toISOString(),
  };
}

function questionRow(question) {
  return {
    id: question.id,
    source_id: question.sourceId,
    exam: question.exam,
    subject: question.subject,
    topic_id: question.topicSlug,
    topic_slug: question.topicSlug,
    ncert_ref: question.ncertRef,
    stem: question.stem,
    option_a: question.options.A,
    option_b: question.options.B,
    option_c: question.options.C,
    option_d: question.options.D,
    correct_option: question.correctOption,
    explanation: question.explanation,
    difficulty: 2,
    quality_score: question.qualityScore,
    qwenmax_review_score: question.qwenmaxReviewScore,
    status: question.status,
    is_free: question.isFree,
    updated_at: new Date().toISOString(),
  };
}

function seoPageRow(note) {
  return {
    id: note.id,
    type: "topic_note",
    slug: note.slug,
    title: note.title,
    description: note.description,
    target_keyword: note.targetKeyword,
    topic_slug: note.topicSlug,
    status: "published",
    updated_at: new Date().toISOString(),
  };
}

async function upsert(table, rows, onConflict) {
  if (!rows.length) return;
  await request(`/${table}?on_conflict=${onConflict}`, {
    method: "POST",
    headers: { prefer: "resolution=merge-duplicates" },
    body: JSON.stringify(rows),
  });
}

async function deleteMissing(table, ids, scope) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(scope)) params.set(key, `eq.${value}`);
  if (ids.length) params.set("id", `not.in.(${ids.join(",")})`);
  await request(`/${table}?${params.toString()}`, {
    method: "DELETE",
  });
}

const topicRows = topics.map(topicRow);
const questionRows = questions.map(questionRow);
const seoPageRows = notes.map(seoPageRow);

await upsert("topics", topicRows, "id");
await upsert("questions", questionRows, "source_id");
await upsert("seo_pages", seoPageRows, "id");

await deleteMissing("questions", questionRows.map((row) => row.id), { exam: "NEET-UG", subject: "Biology" });
await deleteMissing("topics", topicRows.map((row) => row.id), { exam: "NEET-UG", subject: "Biology" });
await deleteMissing("seo_pages", seoPageRows.map((row) => row.id), { type: "topic_note" });

console.log(JSON.stringify({
  topics: topicRows.length,
  questions: questionRows.length,
  seoPages: seoPageRows.length,
}, null, 2));
