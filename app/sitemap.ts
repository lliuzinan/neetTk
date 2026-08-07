import type { MetadataRoute } from "next";
import { absoluteUrl, getNotePath, getPyq2024Path, getPyq2025Path, getQuestionPath, getQuestions, getSeoNotes, getTopicPath, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [topicList, questionList, noteList] = await Promise.all([
    getTopics(),
    getQuestions(),
    getSeoNotes(),
  ]);
  const indexableTopicSlugs = new Set(
    topicList.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS).map((topic) => topic.slug),
  );

  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/neet-ug/biology"), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl("/neet-biology-pdf"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/neet-ug/biology/free-mcq-pdf"), lastModified: now, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/chapter-wise-mcqs"), lastModified: now, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/mcqs-with-answers"), lastModified: now, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/ncert-class-11-mcqs"), lastModified: now, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/ncert-class-12-mcqs"), lastModified: now, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl(getPyq2025Path()), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(getPyq2024Path()), lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "monthly", priority: 0.45 },
    { url: absoluteUrl("/terms"), lastModified: now, changeFrequency: "monthly", priority: 0.45 },
    { url: absoluteUrl("/site-map"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...topicList.filter((topic) => indexableTopicSlugs.has(topic.slug)).map((topic) => ({
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
    ...noteList.filter((note) => indexableTopicSlugs.has(note.topicSlug)).map((note) => ({
      url: absoluteUrl(getNotePath(note)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
