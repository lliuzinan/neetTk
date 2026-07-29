import type { Metadata } from "next";
import Link from "next/link";
import { getQuestions, getTopicPath, getTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "NEET-UG Biology Topics",
  description: "Browse NCERT-aligned NEET-UG Biology MCQ topics with free explanations and practice pages.",
  alternates: { canonical: "/neet-ug/biology" },
};

export default async function BiologyTopicsPage() {
  const [questionList, topicList] = await Promise.all([getQuestions(), getTopics()]);

  return (
    <main className="page">
      <header className="pageHeader">
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">NEET-UG Biology</p>
        <h1>NCERT topic-wise Biology MCQs</h1>
        <p>
          Start with {questionList.length} verified 4-option questions across {topicList.length} topic clusters. Each topic page is built for practice and Google indexing.
        </p>
      </header>

      <div className="topicGrid">
        {topicList.map((topic) => (
          <Link href={getTopicPath(topic)} className="topicCard" key={topic.id}>
            <span>{topic.questionCount} MCQs</span>
            <h2>{topic.name}</h2>
            <p>{topic.ncertRef}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
