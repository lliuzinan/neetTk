import type { MetadataRoute } from "next";
import { absoluteUrl, getNotePath, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";
import { LAST_UPDATED_ISO } from "@/lib/seo";

const trustPages = ["/about", "/contact", "/privacy", "/terms", "/team", "/editorial-policy", "/copyright", "/site-map"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date(`${LAST_UPDATED_ISO}T00:00:00.000Z`);
  const [allNotes, allTopics] = await Promise.all([getSeoNotes(), getTopics()]);
  const notes = allNotes.filter((note) => AUTHORED_NOTE_SLUGS.includes(note.slug as (typeof AUTHORED_NOTE_SLUGS)[number]));
  const topicSlugs = new Set(notes.map((note) => note.topicSlug));
  const topics = allTopics.filter((topic) => topicSlugs.has(topic.slug));
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/neet-ug/biology"), lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl("/neet-biology-pdf"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...topics.map((topic) => ({ url: absoluteUrl(`/neet-ug/biology/${topic.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...notes.map((note) => ({ url: absoluteUrl(getNotePath(note)), lastModified, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...trustPages.map((path) => ({ url: absoluteUrl(path), lastModified, changeFrequency: "monthly" as const, priority: 0.4 })),
  ];
}
