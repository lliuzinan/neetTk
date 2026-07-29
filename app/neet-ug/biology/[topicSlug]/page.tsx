import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuestionPath, getQuestionsByTopic, getTopic, getTopicPath, topics } from "@/lib/content";

interface Props {
  params: Promise<{ topicSlug: string }>;
}

export function generateStaticParams() {
  return topics.map((topic) => ({ topicSlug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) return {};

  return {
    title: `${topic.name} MCQs for NEET-UG Biology`,
    description: `Practice ${topic.name} NEET-UG Biology questions with NCERT-aligned explanations. ${topic.ncertRef}.`,
    alternates: { canonical: getTopicPath(topic) },
  };
}

export default async function TopicPage({ params }: Props) {
  const { topicSlug } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) notFound();

  const topicQuestions = getQuestionsByTopic(topic.slug);
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medqgo.com/" },
      { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: "https://medqgo.com/neet-ug/biology" },
      { "@type": "ListItem", position: 3, name: topic.name },
    ],
  };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <header className="pageHeader">
        <Link href="/neet-ug/biology" className="backLink">All Biology topics</Link>
        <p className="eyebrow">{topic.ncertRef}</p>
        <h1>{topic.name} MCQs for NEET-UG Biology</h1>
        <p>
          Revise this NCERT area with concise 4-option MCQs. Explanations are visible on each question page so students and search engines can read the learning value clearly.
        </p>
      </header>

      <section className="contentBand">
        <h2>What to revise before practicing</h2>
        <p>
          Focus on NCERT definitions, process order, examples, and common distractors. For NEET-UG, this topic should be practiced through direct concept checks and short reasoning questions rather than postgraduate clinical case framing.
        </p>
      </section>

      <div className="questionList">
        {topicQuestions.map((question, index) => (
          <Link href={getQuestionPath(question)} className="questionRow" key={question.id}>
            <span>Q{index + 1} • {question.ncertRef}</span>
            <p>{question.stem}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
