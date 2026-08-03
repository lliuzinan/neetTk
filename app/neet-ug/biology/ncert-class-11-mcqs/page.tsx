import type { Metadata } from "next";
import { ClassMcqPage } from "@/components/ClassMcqPage";
import { absoluteUrl, getQuestions, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS, ogImage } from "@/lib/seo";

const image = ogImage("NCERT Class 11 Biology MCQs for NEET", "Chapter-wise practice with answers");

export const metadata: Metadata = {
  title: "NCERT Class 11 Biology MCQs for NEET",
  description: "Practice NCERT Class 11 Biology MCQs for NEET-UG with answers, explanations, and chapter-wise topic pages.",
  alternates: { canonical: "/neet-ug/biology/ncert-class-11-mcqs" },
  openGraph: {
    title: "NCERT Class 11 Biology MCQs for NEET",
    description: "Practice Class 11 Biology MCQs for NEET-UG with answers and NCERT-aligned explanations.",
    url: absoluteUrl("/neet-ug/biology/ncert-class-11-mcqs"),
    siteName: "MedQGo",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "NCERT Class 11 Biology MCQs for NEET" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NCERT Class 11 Biology MCQs for NEET",
    description: "Practice Class 11 Biology MCQs for NEET-UG with answers.",
    images: [image],
  },
};

export default async function NcertClass11McqsPage() {
  const [topics, questions] = await Promise.all([getTopics(), getQuestions()]);
  const class11Topics = topics.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS && topic.ncertRef.includes("Class 11"));
  const class11TopicSlugs = new Set(class11Topics.map((topic) => topic.slug));

  return (
    <ClassMcqPage
      className="Class 11"
      intro="Revise Class 11 NCERT Biology concepts with NEET-style MCQs, visible answers, and concise explanations for chapter-wise practice."
      source="seo_ncert_class_11_mcqs"
      bullets={[
        "Start with cell biology, biomolecules, physiology, and plant respiration because these chapters often create concept-based NEET distractors.",
        "Use topic pages for focused practice before moving into mixed MCQs.",
        "Check explanations after every question to connect the answer back to NCERT language.",
      ]}
      topics={class11Topics}
      questions={questions.filter((question) => class11TopicSlugs.has(question.topicSlug))}
    />
  );
}
