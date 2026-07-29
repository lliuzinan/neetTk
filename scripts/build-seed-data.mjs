import { readFileSync, writeFileSync } from "node:fs";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"') {
      if (quoted && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const csv = readFileSync("data/neetug_ready_answer_verified_4options.csv", "utf8").replace(/^\uFEFF/, "");
const rows = parseCsv(csv.trim());
const header = rows.shift();

const questions = rows.map((row, index) => {
  const item = Object.fromEntries(header.map((key, columnIndex) => [key, row[columnIndex] || ""]));
  const topicSlug = slugify(item.matched_topic);

  return {
    id: `neetug-bio-${item.source_problem_id}`,
    sourceId: Number(item.source_problem_id),
    exam: "NEET-UG",
    subject: "Biology",
    topic: item.matched_topic,
    topicSlug,
    ncertRef: item.ncert_ref,
    stem: item.question_en,
    options: {
      A: item.option_a,
      B: item.option_b,
      C: item.option_c,
      D: item.option_d,
    },
    correctOption: item.answer,
    explanation: item.explanation_en,
    qwenmaxReviewScore: Number(item.qwenmax_review_score),
    qualityScore: Number(item.quality_score),
    status: "approved",
    isFree: true,
    sortOrder: index + 1,
  };
});

const topicMap = new Map();
for (const question of questions) {
  if (!topicMap.has(question.topicSlug)) {
    topicMap.set(question.topicSlug, {
      id: question.topicSlug,
      exam: "NEET-UG",
      subject: "Biology",
      name: question.topic,
      slug: question.topicSlug,
      ncertRef: question.ncertRef,
      questionCount: 0,
      sortOrder: topicMap.size + 1,
    });
  }

  const topic = topicMap.get(question.topicSlug);
  topic.questionCount += 1;
  if (!topic.ncertRef.includes(question.ncertRef)) {
    topic.ncertRef += `; ${question.ncertRef}`;
  }
}

const topics = [...topicMap.values()];
const notes = topics.slice(0, 8).map((topic, index) => ({
  id: `note-${topic.slug}`,
  slug: topic.slug,
  title: `${topic.name}: NEET-UG Biology NCERT Revision Notes`,
  description: `Revise ${topic.name} for NEET-UG Biology with NCERT-aligned concepts, MCQ practice, and answer explanations.`,
  topicSlug: topic.slug,
  targetKeyword: `${topic.name} NEET UG Biology questions`,
  sortOrder: index + 1,
}));

writeFileSync("data/questions.json", `${JSON.stringify(questions, null, 2)}\n`);
writeFileSync("data/topics.json", `${JSON.stringify(topics, null, 2)}\n`);
writeFileSync("data/seo-notes.json", `${JSON.stringify(notes, null, 2)}\n`);

console.log(JSON.stringify({ questions: questions.length, topics: topics.length, notes: notes.length }, null, 2));
