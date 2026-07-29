import type { Metadata } from "next";
import Link from "next/link";
import { getQuestions, getTopicPath, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NEET Biology Chapter-wise MCQs",
  description: "Browse chapter-wise NEET-UG Biology MCQs with answers, NCERT-aligned explanations, and free topic practice pages.",
  alternates: { canonical: "/neet-ug/biology" },
};

export default async function BiologyTopicsPage() {
  const [questionList, topicList] = await Promise.all([getQuestions(), getTopics()]);
  const primaryTopics = topicList.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS);
  const growingTopics = topicList.filter((topic) => topic.questionCount < INDEXABLE_TOPIC_MIN_QUESTIONS);

  return (
    <main className="page">
      <header className="pageHeader">
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">NEET-UG Biology</p>
        <h1>NCERT topic-wise Biology MCQs</h1>
        <p>
          Start with {questionList.length} verified 4-option questions across NCERT-aligned Biology topics. Stronger chapters are listed first for practice and indexing.
        </p>
      </header>

      <div className="topicGrid">
        {primaryTopics.map((topic) => (
          <Link href={getTopicPath(topic)} className="topicCard" key={topic.id}>
            <span>{topic.questionCount} MCQs</span>
            <h2>{topic.name}</h2>
            <p>{topic.ncertRef}</p>
          </Link>
        ))}
      </div>
      {growingTopics.length > 0 && (
        <section className="contentBand topicQueue">
          <h2>Growing topics</h2>
          <p>These chapters are live for users but kept out of the main SEO push until they have more verified MCQs.</p>
          <div className="miniLinks">
            {growingTopics.map((topic) => (
              <Link href={getTopicPath(topic)} key={topic.id}>
                {topic.name} ({topic.questionCount} MCQs)
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
