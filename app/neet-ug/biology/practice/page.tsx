import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getTopicPath, getTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "NEET Biology Practice Mode",
  description: "Answer NEET Biology MCQs in an interactive practice mode with instant explanations, session score, and local progress saving.",
  alternates: { canonical: "/neet-ug/biology/practice" },
  robots: { index: false, follow: true },
};

export default async function PracticeHubPage() {
  const topics = await getTopics();
  const availableTopics = topics.filter((topic) => topic.questionCount >= 5);

  return (
    <main className="page">
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }, { href: "/neet-ug/biology/practice", label: "Practice mode" }]} />
        <Link href="/neet-ug/biology" className="backLink">NEET Biology</Link>
        <p className="eyebrow">Interactive practice</p>
        <h1>NEET Biology Practice Mode</h1>
        <p>Choose a chapter, answer one question at a time, then review your score and the NCERT concept behind every mistake. Your session progress stays on this device.</p>
      </header>
      <section className="topicGrid">
        {availableTopics.map((topic) => (
          <Link href={`/neet-ug/biology/practice/${topic.slug}`} className="topicCard" key={topic.id}>
            <span>{topic.questionCount} questions</span>
            <h2>{topic.name}</h2>
            <p>{topic.ncertRef}</p>
          </Link>
        ))}
      </section>
      <section className="contentBand">
        <h2>Need chapter notes first?</h2>
        <p>Use the topic pages for NCERT focus and visible explanations, then return here for distraction-free answer practice.</p>
        <Link href={getTopicPath(availableTopics[0])} className="primaryButton">Browse Biology topics</Link>
      </section>
    </main>
  );
}
