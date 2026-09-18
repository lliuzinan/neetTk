import type { MetadataRoute } from "next";
import { absoluteUrl, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";
import { LAST_UPDATED_ISO, topicDates } from "@/lib/seo";

const trustPages = ["/about", "/contact", "/privacy", "/terms", "/team", "/authors/dongfeng", "/editorial-policy", "/copyright", "/site-map"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date(`${LAST_UPDATED_ISO}T00:00:00.000Z`);
  const [allNotes, allTopics] = await Promise.all([getSeoNotes(), getTopics()]);
  const notes = allNotes.filter((note) => AUTHORED_NOTE_SLUGS.includes(note.slug as (typeof AUTHORED_NOTE_SLUGS)[number]));
  const topicSlugs = new Set(notes.map((note) => note.topicSlug));
  const topics = allTopics.filter((topic) => topicSlugs.has(topic.slug));
  const libraryModified = new Date(`${topics.map((topic) => topicDates(topic.slug).modifiedIso).sort().at(-1) || LAST_UPDATED_ISO}T00:00:00.000Z`);
  return [
    { url: absoluteUrl("/"), lastModified: libraryModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/neet-ug/biology"), lastModified: libraryModified, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl("/neet-biology-pdf"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...topics.map((topic) => ({ url: absoluteUrl(`/neet-ug/biology/${topic.slug}`), lastModified: new Date(`${topicDates(topic.slug).modifiedIso}T00:00:00.000Z`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...trustPages.map((path) => ({ url: absoluteUrl(path), lastModified: path === "/privacy" ? new Date("2026-09-18T00:00:00Z") : lastModified, changeFrequency: "monthly" as const, priority: 0.4 })),
  ];
}
