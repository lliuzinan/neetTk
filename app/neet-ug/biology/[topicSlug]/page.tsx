import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, findQuestionsByTopic, findTopic, getQuestionPath, getTopics } from "@/lib/content";
import { topicMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ topicSlug: string }>;
}

export async function generateStaticParams() {
  const topicList = await getTopics();
  return topicList.map((topic) => ({ topicSlug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const topic = await findTopic(topicSlug);
  if (!topic) return {};

  return topicMetadata(topic);
}

export default async function TopicPage({ params }: Props) {
  const { topicSlug } = await params;
  const topic = await findTopic(topicSlug);
  if (!topic) notFound();

  const topicQuestions = await findQuestionsByTopic(topic.slug);
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: absoluteUrl("/neet-ug/biology") },
      { "@type": "ListItem", position: 3, name: topic.name, item: absoluteUrl(`/neet-ug/biology/${topic.slug}`) },
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
