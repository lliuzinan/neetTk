import type { Metadata } from "next";
import { ConversionPage } from "@/components/ConversionPage";
import { getQuestions, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NEET Biology MCQs with Answers",
  description: "Practice NEET Biology MCQs with answers and concise explanations for NCERT-aligned Class 11 and 12 revision.",
  alternates: { canonical: "/neet-ug/biology/mcqs-with-answers" },
};

export default async function McqsWithAnswersPage() {
  const [topics, questions] = await Promise.all([getTopics(), getQuestions()]);
  return (
    <ConversionPage
      eyebrow="Answers included"
      title="NEET Biology MCQs with Answers"
      intro="Solve NEET Biology MCQs with the correct answer and explanation visible on every question page."
      source="seo_mcqs_with_answers"
      bullets={[
        "Visible answers help you check mistakes immediately after solving.",
        "Explanations focus on the NCERT-level concept behind the correct option.",
        "Related MCQ links and topic navigation keep revision sessions connected.",
      ]}
      topics={topics.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS)}
      questions={questions}
    />
  );
}
