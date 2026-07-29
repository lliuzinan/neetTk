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
