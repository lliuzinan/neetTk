import type { Metadata } from "next";
import type { Topic } from "@/lib/content";
import { absoluteUrl, getTopicPath, getNote } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";

export const LAST_UPDATED_ISO = "2026-09-11";
export const LAST_UPDATED_DISPLAY = "September 11, 2026";
export const DEFAULT_OG_IMAGE = absoluteUrl("/og?title=NEET-UG%20Biology%20Revision&subtitle=Independent%20study%20notes%20for%20Indian%20students");

const topicDateMap: Record<string, { published: string; modified: string }> = {
"enzymes-and-enzyme-action": {"published":"2026-09-23","modified":"2026-09-23"},
"plant-growth-and-development": {"published":"2026-09-23","modified":"2026-09-23"},
"locomotion-and-movement": {"published":"2026-09-23","modified":"2026-09-23"},
  "biodiversity-and-conservation": { published: "2026-09-23", modified: "2026-09-23" },
  "microbes-in-human-welfare": { published: "2026-09-23", modified: "2026-09-23" },
  "carbohydrates-proteins-lipids-nucleic-acids": { published: "2026-07-18", modified: "2026-08-03" },
  "dna-rna-replication-transcription-translation": { published: "2026-09-08", modified: "2026-09-20" },
  "mutation-and-gene-expression": { published: "2026-09-08", modified: "2026-09-20" },
  "cell-theory-and-cell-organelles": { published: "2026-09-08", modified: "2026-09-20" },
  "mitosis-and-meiosis": { published: "2026-09-13", modified: "2026-09-13" },
  "sexual-reproduction-in-flowering-plants": { published: "2026-09-14", modified: "2026-09-20" },
  "mendelian-inheritance": { published: "2026-09-14", modified: "2026-09-20" },
  "recombinant-dna-technology": { published: "2026-09-14", modified: "2026-09-20" },
  "chromosomal-basis-of-inheritance": { published: "2026-09-15", modified: "2026-09-20" },
  "endocrine-system-and-hormones": { published: "2026-09-06", modified: "2026-09-10" },
  "basic-genetic-diseases-as-inheritance-examples": { published: "2026-07-30", modified: "2026-08-15" },
  "immunity-pathogens-vaccines": { published: "2026-09-05", modified: "2026-09-20" },
  "neuron-nerve-impulse-synapse": { published: "2026-09-06", modified: "2026-09-20" },
  "human-respiration": { published: "2026-09-05", modified: "2026-09-20" },
  "excretion-and-kidney-function": { published: "2026-09-05", modified: "2026-09-20" },
  "human-reproductive-system-and-gametogenesis": { published: "2026-08-09", modified: "2026-08-25" },
  "plant-respiration": { published: "2026-09-11", modified: "2026-09-11" },
  "photosynthesis-in-higher-plants": { published: "2026-09-11", modified: "2026-09-11" },
  "digestion-and-absorption": { published: "2026-09-11", modified: "2026-09-20" },
  "blood-and-circulation": { published: "2026-09-11", modified: "2026-09-20" },
  "animal-tissues": { published: "2026-08-13", modified: "2026-08-29" },
  // Authored revision guides first shipped in 4e31247, 9845779 and e90f71a.
  "molecular-tools-and-dna-analysis": { published: "2026-09-16", modified: "2026-09-20" },
  "pedigree-analysis-and-inheritance-patterns": { published: "2026-09-16", modified: "2026-09-20" },
  "biotechnology-applications": { published: "2026-09-16", modified: "2026-09-18" },
  "human-reproduction": { published: "2026-09-17", modified: "2026-09-18" },
  "reproductive-health": { published: "2026-09-17", modified: "2026-09-18" },
  "molecular-basis-of-inheritance": { published: "2026-09-17", modified: "2026-09-18" },
  "evolution-and-natural-selection": { published: "2026-09-18", modified: "2026-09-18" },
  "organisms-and-populations": { published: "2026-09-18", modified: "2026-09-18" },
  "ecosystem-energy-flow-and-ecological-pyramids": { published: "2026-09-20", modified: "2026-09-20" },
  "morphology-of-flowering-plants": { published: "2026-09-21", modified: "2026-09-21" },
  "anatomy-of-flowering-plants": { published: "2026-09-21", modified: "2026-09-21" },
  "five-kingdom-classification": { published: "2026-09-22", modified: "2026-09-22" },
  "plant-kingdom": { published: "2026-09-22", modified: "2026-09-22" },
};

export function ogImage(title: string, subtitle = "Independent NEET Biology revision resource") {
  return absoluteUrl(`/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}`);
}

export function displayDate(isoDate: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${isoDate}T00:00:00.000Z`));
}

export function topicDates(slug: string) {
  if (AUTHORED_NOTE_SLUGS.some((authored) => authored === slug) && !topicDateMap[slug]) {
    throw new Error(`Missing publication record for authored guide: ${slug}`);
  }
  const dates = topicDateMap[slug] || { published: LAST_UPDATED_ISO, modified: LAST_UPDATED_ISO };
  return {
    publishedIso: dates.published,
    modifiedIso: dates.modified,
    publishedDisplay: displayDate(dates.published),
    modifiedDisplay: displayDate(dates.modified),
  };
}

export function topicDescription(topic: Topic) {
  const note = getNote(topic.slug);
  if (note && AUTHORED_NOTE_SLUGS.some((slug) => slug === topic.slug)) return note.description;
  return `Review ${topic.name} for NEET-UG Biology with an independent revision guide, NCERT-aligned concept focus, common confusions, and a recall routine.`;
}

export function topicMetadata(topic: Topic): Metadata {
  const title = topic.slug === "digestion-and-absorption" ? "Digestion and Absorption: Supplementary Physiology Notes" : `${topic.name} Revision Guide for NEET-UG Biology`;
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
