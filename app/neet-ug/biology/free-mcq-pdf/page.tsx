import type { Metadata } from "next";
import { ConversionPage } from "@/components/ConversionPage";
import { getQuestions, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free NEET Biology MCQ PDF",
  description: "Get early access to a free NEET Biology MCQ PDF sample and practice chapter-wise NCERT-aligned questions with answers.",
  alternates: { canonical: "/neet-ug/biology/free-mcq-pdf" },
};

export default async function FreeMcqPdfPage() {
  const [topics, questions] = await Promise.all([getTopics(), getQuestions()]);
  return (
    <ConversionPage
      eyebrow="Free PDF"
      title="Free NEET Biology MCQ PDF"
      intro="Use MedQGo to practice NCERT-aligned NEET Biology MCQs online and join early access for a free chapter-wise PDF sample."
      source="seo_free_mcq_pdf"
      bullets={[
        "The PDF offer is designed for quick offline revision before mock tests.",
        "Online pages include visible answers and explanations so you can check mistakes immediately.",
        "The question bank is organized by NEET-UG Biology topics instead of random mixed practice.",
      ]}
      topics={topics.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS)}
      questions={questions}
    />
  );
}
