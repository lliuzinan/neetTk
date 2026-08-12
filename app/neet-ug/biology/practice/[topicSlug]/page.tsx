import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PracticePlayer } from "@/components/PracticePlayer";
import { findQuestionsByTopic, findTopic, getTopics } from "@/lib/content";

interface Props {
  params: Promise<{ topicSlug: string }>;
}

export async function generateStaticParams() {
  const topics = await getTopics();
  return topics.filter((topic) => topic.questionCount >= 5).map((topic) => ({ topicSlug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const topic = await findTopic(topicSlug);
  if (!topic) return {};
  return {
    title: `${topic.name} Practice Mode`,
    description: `Practice ${topic.name} NEET Biology MCQs with answer submission, score tracking, and NCERT-aligned explanations.`,
    alternates: { canonical: `/neet-ug/biology/practice/${topic.slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function TopicPracticePage({ params }: Props) {
  const { topicSlug } = await params;
  const [topic, questions] = await Promise.all([findTopic(topicSlug), findQuestionsByTopic(topicSlug)]);
  if (!topic || questions.length < 5) notFound();

  return (
    <main className="page practicePage">
      <header className="pageHeader compact">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }, { href: "/neet-ug/biology/practice", label: "Practice mode" }, { href: `/neet-ug/biology/practice/${topic.slug}`, label: topic.name }]} />
        <Link href="/neet-ug/biology/practice" className="backLink">All practice topics</Link>
        <p className="eyebrow">{topic.ncertRef}</p>
        <h1>{topic.name} practice</h1>
      </header>
      <PracticePlayer
        topicName={topic.name}
        topicSlug={topic.slug}
        questions={questions.map((question) => ({ id: question.id, stem: question.stem, options: question.options, correctOption: question.correctOption, explanation: question.explanation, ncertRef: question.ncertRef }))}
      />
    </main>
  );
}
