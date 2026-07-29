import type { MetadataRoute } from "next";
import { absoluteUrl, getNotePath, getQuestionPath, getQuestions, getSeoNotes, getTopicPath, getTopics } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [topicList, questionList, noteList] = await Promise.all([
    getTopics(),
    getQuestions(),
    getSeoNotes(),
  ]);

  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/neet-ug/biology"), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    ...topicList.map((topic) => ({
      url: absoluteUrl(getTopicPath(topic)),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...questionList.map((question) => ({
      url: absoluteUrl(getQuestionPath(question)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...noteList.map((note) => ({
      url: absoluteUrl(getNotePath(note)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
