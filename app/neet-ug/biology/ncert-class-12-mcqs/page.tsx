import type { Metadata } from "next";
import { ClassMcqPage } from "@/components/ClassMcqPage";
import { absoluteUrl, getQuestions, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS, ogImage } from "@/lib/seo";

const image = ogImage("NCERT Class 12 Biology MCQs for NEET", "Genetics, biotechnology, and human welfare practice");

export const metadata: Metadata = {
  title: "NCERT Class 12 Biology MCQs for NEET",
  description: "Practice NCERT Class 12 Biology MCQs for NEET-UG with answers, explanations, genetics, biotechnology, and human welfare topics.",
  alternates: { canonical: "/neet-ug/biology/ncert-class-12-mcqs" },
  openGraph: {
    title: "NCERT Class 12 Biology MCQs for NEET",
    description: "Practice Class 12 Biology MCQs for NEET-UG with answers and NCERT-aligned explanations.",
    url: absoluteUrl("/neet-ug/biology/ncert-class-12-mcqs"),
    siteName: "MedQGo",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "NCERT Class 12 Biology MCQs for NEET" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NCERT Class 12 Biology MCQs for NEET",
    description: "Practice Class 12 Biology MCQs for NEET-UG with answers.",
    images: [image],
  },
};

export default async function NcertClass12McqsPage() {
  const [topics, questions] = await Promise.all([getTopics(), getQuestions()]);
  const class12Topics = topics.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS && topic.ncertRef.includes("Class 12"));
  const class12TopicSlugs = new Set(class12Topics.map((topic) => topic.slug));

  return (
    <ClassMcqPage
      className="Class 12"
      intro="Practice Class 12 NCERT Biology questions for NEET-UG, including molecular genetics, inheritance, biotechnology, reproduction, and human welfare."
      source="seo_ncert_class_12_mcqs"
      bullets={[
        "Use genetics and biotechnology MCQs to revise definitions, mechanisms, and common option traps.",
        "Move from chapter pages to individual explanations when a concept feels weak.",
        "Join the PDF early access list if you want a printable chapter-wise practice set.",
      ]}
      topics={class12Topics}
      questions={questions.filter((question) => class12TopicSlugs.has(question.topicSlug))}
    />
  );
}
