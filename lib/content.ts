import questionsData from "@/data/questions.json";
import topicsData from "@/data/topics.json";
import notesData from "@/data/seo-notes.json";

export type OptionKey = "A" | "B" | "C" | "D";

export interface Question {
  id: string;
  sourceId: number;
  exam: "NEET-UG";
  subject: "Biology";
  topic: string;
  topicSlug: string;
  ncertRef: string;
  stem: string;
  options: Record<OptionKey, string>;
  correctOption: OptionKey;
  explanation: string;
  qwenmaxReviewScore: number;
  qualityScore: number;
  status: "approved";
  isFree: boolean;
  sortOrder: number;
}

export interface Topic {
  id: string;
  exam: "NEET-UG";
  subject: "Biology";
  name: string;
  slug: string;
  ncertRef: string;
  questionCount: number;
  sortOrder: number;
}

export interface SeoNote {
  id: string;
  slug: string;
  title: string;
  description: string;
  topicSlug: string;
  targetKeyword: string;
  sortOrder: number;
}

export const questions = questionsData as Question[];
export const topics = topicsData as Topic[];
export const seoNotes = notesData as SeoNote[];

export const siteConfig = {
  name: "MedQGo NEET-UG Biology",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://medqgo.com",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  exam: "NEET-UG",
  subject: "Biology",
  description:
    "NCERT-aligned NEET-UG Biology question bank with free MCQs, answer explanations, topic pages, and revision notes.",
};

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getQuestionsByTopic(slug: string) {
  return questions.filter((question) => question.topicSlug === slug);
}

export function getQuestion(questionId: string) {
  return questions.find((question) => question.id === questionId);
}

export function getNote(slug: string) {
  return seoNotes.find((note) => note.slug === slug);
}

export function absoluteUrl(path = "/") {
  return `${siteConfig.baseUrl}${path}`;
}

export function getTopicPath(topic: Pick<Topic, "slug">) {
  return `/neet-ug/biology/${topic.slug}`;
}

export function getQuestionPath(question: Pick<Question, "topicSlug" | "id">) {
  return `/neet-ug/biology/${question.topicSlug}/q/${question.id}`;
}

export function getNotePath(note: Pick<SeoNote, "slug">) {
  return `/neet-ug/biology/notes/${note.slug}`;
}

type TopicRow = {
  id: string;
  exam: "NEET-UG";
  subject: "Biology";
  name: string;
  slug: string;
  ncert_ref: string;
  question_count: number;
  sort_order: number;
};

type QuestionRow = {
  id: string;
  source_id: number;
  exam: "NEET-UG";
  subject: "Biology";
  topic_slug: string;
  ncert_ref: string;
  stem: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_option: OptionKey;
  explanation: string;
  qwenmax_review_score: number;
  quality_score: number;
  status: "approved";
  is_free: boolean;
};

type SeoPageRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  topic_slug: string;
  target_keyword: string;
};

function supabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
}

async function readSupabase<T>(path: string): Promise<T[] | null> {
  const { url, key } = supabaseConfig();
  if (!url || !key) return null;

  try {
    const response = await fetch(`${url}${path}`, {
      headers: {
        apikey: key,
        authorization: `Bearer ${key}`,
      },
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    return (await response.json()) as T[];
  } catch {
    return null;
  }
}

function prettifySlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function mapTopic(row: TopicRow): Topic {
  return {
    id: row.id,
    exam: row.exam,
    subject: row.subject,
    name: row.name,
    slug: row.slug,
    ncertRef: row.ncert_ref,
    questionCount: row.question_count,
    sortOrder: row.sort_order,
  };
}

function mapQuestion(row: QuestionRow, topicNames: Map<string, string>): Question {
  return {
    id: row.id,
    sourceId: row.source_id,
    exam: row.exam,
    subject: row.subject,
    topic: topicNames.get(row.topic_slug) || prettifySlug(row.topic_slug),
    topicSlug: row.topic_slug,
    ncertRef: row.ncert_ref,
    stem: row.stem,
    options: {
      A: row.option_a,
      B: row.option_b,
      C: row.option_c,
      D: row.option_d,
    },
    correctOption: row.correct_option,
    explanation: row.explanation,
    qwenmaxReviewScore: row.qwenmax_review_score,
    qualityScore: row.quality_score,
    status: row.status,
    isFree: row.is_free,
    sortOrder: row.source_id,
  };
}

function mapSeoPage(row: SeoPageRow): SeoNote {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    topicSlug: row.topic_slug,
    targetKeyword: row.target_keyword,
    sortOrder: 0,
  };
}

export async function getTopics() {
  const rows = await readSupabase<TopicRow>(
    "/rest/v1/topics?select=*&order=sort_order.asc",
  );
  if (!rows?.length) return topics;

  return rows.map(mapTopic);
}

export async function getQuestions() {
  const [topicList, rows] = await Promise.all([
    getTopics(),
    readSupabase<QuestionRow>(
      "/rest/v1/questions?select=*&status=eq.approved&order=published_at.asc",
    ),
  ]);
  if (!rows?.length) return questions;

  const topicNames = new Map(topicList.map((topic) => [topic.slug, topic.name]));
  return rows.map((row) => mapQuestion(row, topicNames));
}

export async function getSeoNotes() {
  const rows = await readSupabase<SeoPageRow>(
    "/rest/v1/seo_pages?select=*&status=eq.published&order=published_at.asc",
  );
  if (!rows?.length) return seoNotes;

  return rows.map(mapSeoPage);
}

export async function findTopic(slug: string) {
  const topicList = await getTopics();
  return topicList.find((topic) => topic.slug === slug);
}

export async function findQuestionsByTopic(slug: string) {
  const questionList = await getQuestions();
  return questionList.filter((question) => question.topicSlug === slug);
}

export async function findQuestion(questionId: string) {
  const questionList = await getQuestions();
  return questionList.find((question) => question.id === questionId);
}

export async function findNote(slug: string) {
  const noteList = await getSeoNotes();
  return noteList.find((note) => note.slug === slug);
}
