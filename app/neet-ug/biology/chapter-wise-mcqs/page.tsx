import type { Metadata } from "next";
import { ConversionPage } from "@/components/ConversionPage";
import { getQuestions, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NEET Biology Chapter-wise MCQs",
  description: "Practice NEET Biology chapter-wise MCQs with answers, NCERT-aligned explanations, and topic pages for focused revision.",
  alternates: { canonical: "/neet-ug/biology/chapter-wise-mcqs" },
};

export default async function ChapterWiseMcqsPage() {
  const [topics, questions] = await Promise.all([getTopics(), getQuestions()]);
  return (
    <ConversionPage
      eyebrow="Chapter-wise practice"
      title="NEET Biology Chapter-wise MCQs"
      intro="Practice NEET-UG Biology by topic so each session strengthens one NCERT area before moving to the next chapter."
      source="seo_chapter_wise_mcqs"
      bullets={[
        "Chapter-wise practice helps you identify weak Biology areas faster than random question sets.",
        "Each topic page links to MCQs, answer explanations, revision notes, and PDF early access.",
        "Start with stronger topic pages, then use growing topics after more verified questions are added.",
      ]}
      topics={topics.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS)}
      questions={questions}
    />
  );
}
