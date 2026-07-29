import type { MetadataRoute } from "next";
import { absoluteUrl, getNotePath, getQuestionPath, getTopicPath, questions, seoNotes, topics } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/neet-ug/biology"), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    ...topics.map((topic) => ({
      url: absoluteUrl(getTopicPath(topic)),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...questions.map((question) => ({
      url: absoluteUrl(getQuestionPath(question)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...seoNotes.map((note) => ({
      url: absoluteUrl(getNotePath(note)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
