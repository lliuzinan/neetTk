import type { Metadata } from "next";
import type { Question, SeoNote, Topic } from "@/lib/content";
import { absoluteUrl, getNotePath, getQuestionPath, getTopicPath } from "@/lib/content";

export const INDEXABLE_TOPIC_MIN_QUESTIONS = 5;
export const LAST_UPDATED_ISO = "2026-07-30";
export const LAST_UPDATED_DISPLAY = "July 30, 2026";
export const DEFAULT_OG_IMAGE = absoluteUrl("/og?title=NEET-UG%20Biology%20MCQs&subtitle=NCERT-aligned%20practice%20with%20answers");

export function ogImage(title: string, subtitle = "NCERT-aligned NEET Biology practice") {
  return absoluteUrl(`/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}`);
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(value: string, maxLength: number) {
  const clean = stripHtml(value);
  if (clean.length <= maxLength) return clean;
  const shortened = clean.slice(0, maxLength - 1);
  const trimmed = shortened.slice(0, shortened.lastIndexOf(" ") || shortened.length).trim();
  const complete = trimmed.replace(/\b(and|an|a|the|with|for|on|in|of|to)$/i, "").trim();
  return `${complete}.`;
}

export function questionTitle(question: Question) {
  const answerText = question.options[question.correctOption];
  const stem = stripHtml(question.stem);
  const incompletePattern = /\b(in the|of the|to|by|is|are|was|were|for|at|from|with)$/i;
  if (stem.length <= 58 && incompletePattern.test(stem)) {
    return `${stem} ${answerText}: NEET Biology MCQ`;
  }
  if (stem.length <= 72) return `${stem.replace(/\?*$/, "?")} NEET Biology MCQ`;
  return `${question.topic} NEET Biology MCQ`;
}

export function questionDescription(question: Question, answerText: string) {
  return truncate(
    `Practice this NEET Biology MCQ on ${question.topic}. Answer: ${answerText}. Includes four options and an NCERT-aligned NEET-UG explanation.`,
    155,
  );
}

export function topicDescription(topic: Topic) {
  return truncate(
    `Practice ${topic.name} NEET-UG Biology MCQs with answers and NCERT-aligned explanations for Class 11 and 12 chapter-wise revision.`,
    155,
  );
}

export function topicMetadata(topic: Topic): Metadata {
  const title = `${topic.name} MCQs for NEET-UG Biology`;
  const description = topicDescription(topic);
  const url = absoluteUrl(getTopicPath(topic));
  const image = ogImage(title, `${topic.questionCount} MCQs with NCERT explanations`);

  return {
    title,
    description,
    alternates: { canonical: getTopicPath(topic) },
    robots: topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "MedQGo",
      type: "article",
      publishedTime: LAST_UPDATED_ISO,
      modifiedTime: LAST_UPDATED_ISO,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function questionMetadata(question: Question): Metadata {
  const answerText = question.options[question.correctOption];
  const title = questionTitle(question);
  const description = questionDescription(question, answerText);
  const url = absoluteUrl(getQuestionPath(question));
  const image = ogImage(title, question.topic);

  return {
    title,
    description,
    alternates: { canonical: getQuestionPath(question) },
    openGraph: {
      title,
      description,
      url,
      siteName: "MedQGo",
      type: "article",
      publishedTime: LAST_UPDATED_ISO,
      modifiedTime: LAST_UPDATED_ISO,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function noteMetadata(note: SeoNote, topic?: Topic): Metadata {
  const title = note.title;
  const description = truncate(note.description, 155);
  const url = absoluteUrl(getNotePath(note));
  const image = ogImage(title, topic?.name || "NEET Biology revision notes");

  return {
    title,
    description,
    alternates: { canonical: getNotePath(note) },
    robots: !topic || topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "MedQGo",
      type: "article",
      publishedTime: LAST_UPDATED_ISO,
      modifiedTime: LAST_UPDATED_ISO,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
