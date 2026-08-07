import type { Metadata } from "next";
import Link from "next/link";
import { getNotePath, getQuestionPath, getQuestions, getSeoNotes, getTopicPath, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NEET Biology HTML Sitemap",
  description: "Browse all MedQGo NEET-UG Biology topic pages, MCQ pages, and NCERT revision notes from one HTML sitemap.",
  alternates: { canonical: "/site-map" },
};

export default async function SiteMapPage() {
  const [topics, questions, notes] = await Promise.all([
    getTopics(),
    getQuestions(),
    getSeoNotes(),
  ]);
  const indexableTopics = topics.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS);

  return (
    <main className="page">
      <header className="pageHeader">
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">MedQGo sitemap</p>
        <h1>NEET Biology HTML sitemap</h1>
        <p>
          Browse the live NEET-UG Biology question bank by strong topic pages, revision notes, and individual MCQs.
        </p>
      </header>

      <section className="contentBand">
        <h2>Core pages</h2>
        <div className="miniLinks">
          <Link href="/">Free NEET Biology MCQs with Answers</Link>
          <Link href="/neet-ug/biology">NEET Biology chapter-wise MCQs</Link>
          <Link href="/neet-ug/biology/pyq/neet-2025">NEET 2025 Biology Question Paper with Solutions</Link>
          <Link href="/neet-ug/biology/pyq/neet-2024">NEET 2024 Biology Question Paper with Solutions</Link>
          <Link href="/neet-ug/biology/pyq/neet-2023">NEET 2023 Biology Question Paper with Solutions</Link>
          <Link href="/neet-ug/biology/pyq/neet-2022">NEET 2022 Biology Question Paper with Solutions</Link>
          <Link href="/neet-ug/biology/pyq/neet-2020">NEET 2020 Biology Question Paper with Solutions</Link>
          <Link href="/neet-biology-pdf">Free NEET Biology MCQ PDF</Link>
          <Link href="/neet-ug/biology/free-mcq-pdf">Free NEET Biology MCQ PDF guide</Link>
          <Link href="/neet-ug/biology/chapter-wise-mcqs">Chapter-wise NEET Biology MCQs</Link>
          <Link href="/neet-ug/biology/mcqs-with-answers">NEET Biology MCQs with answers</Link>
          <Link href="/neet-ug/biology/ncert-class-11-mcqs">NCERT Class 11 Biology MCQs</Link>
          <Link href="/neet-ug/biology/ncert-class-12-mcqs">NCERT Class 12 Biology MCQs</Link>
          <Link href="/about">About MedQGo</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </section>

      <section className="contentBand">
        <h2>Strong topic pages</h2>
        <div className="miniLinks">
          {indexableTopics.map((topic) => (
            <Link href={getTopicPath(topic)} key={topic.id}>
              {topic.name} ({topic.questionCount} MCQs)
            </Link>
          ))}
        </div>
      </section>

      <section className="contentBand">
        <h2>Revision notes</h2>
        <div className="miniLinks">
          {notes.map((note) => (
            <Link href={getNotePath(note)} key={note.id}>{note.title}</Link>
          ))}
        </div>
      </section>

      <section className="contentBand">
        <h2>All MCQ pages</h2>
        <div className="miniLinks sitemapQuestions">
          {questions.map((question) => (
            <Link href={getQuestionPath(question)} key={question.id}>
              {question.stem}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
