import { readFileSync, writeFileSync } from "node:fs";

const topics = JSON.parse(readFileSync("data/topics.json", "utf8"));
const questions = JSON.parse(readFileSync("data/questions.json", "utf8"));
const notes = JSON.parse(readFileSync("data/seo-notes.json", "utf8"));

function sql(value) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "true" : "false";
  return `'${String(value).replace(/'/g, "''")}'`;
}

const statements = [];
statements.push("-- Seed NEET-UG Biology topics, questions, and SEO pages.");

for (const topic of topics) {
  statements.push(`INSERT INTO topics (id, exam, subject, name, slug, ncert_ref, seo_title, seo_description, question_count, sort_order)
VALUES (${sql(topic.id)}, 'NEET-UG', 'Biology', ${sql(topic.name)}, ${sql(topic.slug)}, ${sql(topic.ncertRef)}, ${sql(`${topic.name} MCQs for NEET-UG Biology`)}, ${sql(`Practice ${topic.name} NEET-UG Biology questions with NCERT explanations.`)}, ${sql(topic.questionCount)}, ${sql(topic.sortOrder)})
ON CONFLICT (id) DO UPDATE SET question_count = EXCLUDED.question_count, updated_at = now();`);
}

for (const question of questions) {
  statements.push(`INSERT INTO questions (id, source_id, exam, subject, topic_id, topic_slug, ncert_ref, stem, option_a, option_b, option_c, option_d, correct_option, explanation, quality_score, qwenmax_review_score, status, is_free)
VALUES (${sql(question.id)}, ${sql(question.sourceId)}, 'NEET-UG', 'Biology', ${sql(question.topicSlug)}, ${sql(question.topicSlug)}, ${sql(question.ncertRef)}, ${sql(question.stem)}, ${sql(question.options.A)}, ${sql(question.options.B)}, ${sql(question.options.C)}, ${sql(question.options.D)}, ${sql(question.correctOption)}, ${sql(question.explanation)}, ${sql(question.qualityScore)}, ${sql(question.qwenmaxReviewScore)}, 'approved', true)
ON CONFLICT (source_id) DO UPDATE SET stem = EXCLUDED.stem, explanation = EXCLUDED.explanation, updated_at = now();`);
}

for (const note of notes) {
  statements.push(`INSERT INTO seo_pages (id, type, slug, title, description, target_keyword, topic_slug, status)
VALUES (${sql(note.id)}, 'topic_note', ${sql(note.slug)}, ${sql(note.title)}, ${sql(note.description)}, ${sql(note.targetKeyword)}, ${sql(note.topicSlug)}, 'published')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, updated_at = now();`);
}

writeFileSync("supabase/migrations/002_seed_neetug_biology.sql", `${statements.join("\n\n")}\n`);
console.log(`Wrote ${statements.length - 1} seed statements.`);
