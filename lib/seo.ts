import type { Metadata } from "next";
import type { Question, SeoNote, Topic } from "@/lib/content";
import { absoluteUrl, getNotePath, getQuestionPath, getTopicPath } from "@/lib/content";

export const INDEXABLE_TOPIC_MIN_QUESTIONS = 5;
export const LAST_UPDATED_ISO = "2026-07-30";
export const LAST_UPDATED_DISPLAY = "July 30, 2026";
export const DEFAULT_OG_IMAGE = absoluteUrl("/og?title=NEET-UG%20Biology%20Revision&subtitle=Independent%20study%20notes%20for%20Indian%20students");

const topicDateMap: Record<string, { published: string; modified: string }> = {
  "carbohydrates-proteins-lipids-nucleic-acids": { published: "2026-07-18", modified: "2026-08-03" },
  "dna-rna-replication-transcription-translation": { published: "2026-07-20", modified: "2026-08-05" },
  "mutation-and-gene-expression": { published: "2026-07-22", modified: "2026-08-07" },
  "cell-theory-and-cell-organelles": { published: "2026-07-24", modified: "2026-08-09" },
  "mitosis-and-meiosis": { published: "2026-07-26", modified: "2026-08-11" },
  "endocrine-system-and-hormones": { published: "2026-07-28", modified: "2026-08-13" },
  "basic-genetic-diseases-as-inheritance-examples": { published: "2026-07-30", modified: "2026-08-15" },
  "immunity-pathogens-vaccines": { published: "2026-08-01", modified: "2026-08-17" },
  "neuron-nerve-impulse-synapse": { published: "2026-08-03", modified: "2026-08-19" },
  "human-respiration": { published: "2026-08-05", modified: "2026-08-21" },
  "excretion-and-kidney-function": { published: "2026-08-07", modified: "2026-08-23" },
  "human-reproductive-system-and-gametogenesis": { published: "2026-08-09", modified: "2026-08-25" },
  "plant-respiration": { published: "2026-08-11", modified: "2026-08-27" },
  "animal-tissues": { published: "2026-08-13", modified: "2026-08-29" },
  "recombinant-dna-technology": { published: "2026-08-15", modified: "2026-08-31" },
  "molecular-tools-and-dna-analysis": { published: "2026-08-17", modified: "2026-09-02" },
  "pedigree-analysis-and-inheritance-patterns": { published: "2026-08-19", modified: "2026-09-04" },
};

export function ogImage(title: string, subtitle = "Independent NEET Biology revision resource") {
  return absoluteUrl(`/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}`);
}

export function displayDate(isoDate: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${isoDate}T00:00:00.000Z`));
}

export function topicDates(slug: string) {
  const dates = topicDateMap[slug] || { published: LAST_UPDATED_ISO, modified: LAST_UPDATED_ISO };
  return {
    publishedIso: dates.published,
    modifiedIso: dates.modified,
    publishedDisplay: displayDate(dates.published),
    modifiedDisplay: displayDate(dates.modified),
  };
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
    `Review ${topic.name} for NEET-UG Biology with an independent revision guide, NCERT-aligned concept focus, common confusions, and a recall routine.`,
    155,
  );
}

export function topicMetadata(topic: Topic): Metadata {
  const title = `${topic.name} Revision Guide for NEET-UG Biology`;
  const description = topicDescription(topic);
  const url = absoluteUrl(getTopicPath(topic));
  const image = ogImage(title, "Concept focus and a compact recall routine");
  const dates = topicDates(topic.slug);

  return {
    title,
    description,
    alternates: { canonical: getTopicPath(topic) },
    openGraph: {
      title,
      description,
      url,
      siteName: "MedQGo",
      type: "article",
      publishedTime: dates.publishedIso,
      modifiedTime: dates.modifiedIso,
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
