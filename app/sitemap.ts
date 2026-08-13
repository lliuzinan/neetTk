import type { MetadataRoute } from "next";
import { absoluteUrl, getNotePath, getPyq2019Path, getPyq2020Path, getPyq2021Path, getPyq2022Path, getPyq2023Path, getPyq2024Path, getPyq2025Path, getQuestionPath, getQuestions, getSeoNotes, getTopicPath, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS, LAST_UPDATED_ISO, PYQ_LAST_UPDATED_ISO } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const biologyLastModified = new Date(`${LAST_UPDATED_ISO}T00:00:00.000Z`);
  const pyqLastModified = new Date(`${PYQ_LAST_UPDATED_ISO}T00:00:00.000Z`);
  const [topicList, questionList, noteList] = await Promise.all([
    getTopics(),
    getQuestions(),
    getSeoNotes(),
  ]);
  const indexableTopicSlugs = new Set(
    topicList.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS).map((topic) => topic.slug),
  );

  return [
    { url: absoluteUrl("/"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/neet-ug/biology"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl("/neet-biology-pdf"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/neet-ug/biology/free-mcq-pdf"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/chapter-wise-mcqs"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/mcqs-with-answers"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/ncert-class-11-mcqs"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl("/neet-ug/biology/ncert-class-12-mcqs"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl(getPyq2025Path()), lastModified: pyqLastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(getPyq2024Path()), lastModified: pyqLastModified, changeFrequency: "weekly", priority: 0.88 },
    { url: absoluteUrl(getPyq2023Path()), lastModified: pyqLastModified, changeFrequency: "weekly", priority: 0.86 },
    { url: absoluteUrl(getPyq2022Path()), lastModified: pyqLastModified, changeFrequency: "weekly", priority: 0.84 },
    { url: absoluteUrl(getPyq2021Path()), lastModified: pyqLastModified, changeFrequency: "weekly", priority: 0.83 },
    { url: absoluteUrl(getPyq2020Path()), lastModified: pyqLastModified, changeFrequency: "weekly", priority: 0.82 },
    { url: absoluteUrl(getPyq2019Path()), lastModified: pyqLastModified, changeFrequency: "weekly", priority: 0.81 },
    { url: absoluteUrl("/about"), lastModified: biologyLastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/contact"), lastModified: biologyLastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/privacy"), lastModified: biologyLastModified, changeFrequency: "monthly", priority: 0.45 },
    { url: absoluteUrl("/terms"), lastModified: biologyLastModified, changeFrequency: "monthly", priority: 0.45 },
    { url: absoluteUrl("/site-map"), lastModified: biologyLastModified, changeFrequency: "weekly", priority: 0.6 },
    ...topicList.filter((topic) => indexableTopicSlugs.has(topic.slug)).map((topic) => ({
      url: absoluteUrl(getTopicPath(topic)),
      lastModified: biologyLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...questionList.map((question) => ({
      url: absoluteUrl(getQuestionPath(question)),
      lastModified: biologyLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...noteList.filter((note) => indexableTopicSlugs.has(note.topicSlug)).map((note) => ({
      url: absoluteUrl(getNotePath(note)),
      lastModified: biologyLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
