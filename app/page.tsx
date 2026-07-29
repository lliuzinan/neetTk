import type { Metadata } from "next";
import Link from "next/link";
import { getNotePath, getQuestionPath, getQuestions, getSeoNotes, getTopicPath, getTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "NEET-UG Biology Question Bank",
  description: "Practice NCERT-aligned NEET-UG Biology MCQs with answer explanations, topic pages, and revision notes.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [questionList, topicList, noteList] = await Promise.all([
    getQuestions(),
    getTopics(),
    getSeoNotes(),
  ]);
  const firstQuestions = questionList.slice(0, 6);

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <Link href="/" className="brand">MedQGo</Link>
          <div className="navLinks">
            <Link href="/neet-ug/biology">Topics</Link>
            <Link href="/neet-ug/biology/notes/cell-theory-and-cell-organelles">Notes</Link>
          </div>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">NEET-UG Biology • NCERT aligned</p>
            <h1>Build your Biology score with focused MCQs and explanations.</h1>
            <p className="lede">
              A clean question bank rebuilt for NEET-UG Biology from verified 4-option MCQs. Topic pages, single-question SEO pages, and revision notes are generated from the same publishing pipeline.
            </p>
            <div className="actions">
              <Link href="/neet-ug/biology" className="primaryButton">Start Biology Practice</Link>
              {firstQuestions[0] && <Link href={getQuestionPath(firstQuestions[0])} className="secondaryButton">Try a sample MCQ</Link>}
            </div>
          </div>
          <div className="heroPanel" aria-label="Question bank status">
            <div className="metricRow">
              <span>{questionList.length}</span>
              <p>verified MCQs live</p>
            </div>
            <div className="metricRow">
              <span>{topicList.length}</span>
              <p>NCERT topic clusters</p>
            </div>
            <div className="metricRow">
              <span>{noteList.length}</span>
              <p>SEO revision notes seeded</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Question bank</p>
          <h2>Biology topics ready for indexing and practice</h2>
        </div>
        <div className="topicGrid">
          {topicList.map((topic) => (
            <Link href={getTopicPath(topic)} className="topicCard" key={topic.id}>
              <span>{topic.questionCount} MCQs</span>
              <h3>{topic.name}</h3>
              <p>{topic.ncertRef}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">SEO content pipeline</p>
          <h2>Every batch can publish topics, MCQs, notes, sitemap updates, and analytics events.</h2>
          <p className="muted">
            The new build treats content as structured data first. New question batches flow into topic pages and single-question pages without touching old NEET-PG medicine logic.
          </p>
        </div>
        <div className="listPanel">
          {noteList.slice(0, 5).map((note) => (
            <Link href={getNotePath(note)} key={note.id}>
              {note.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Sample MCQs</p>
          <h2>Indexable question pages with visible explanations</h2>
        </div>
        <div className="questionList">
          {firstQuestions.map((question) => (
            <Link href={getQuestionPath(question)} className="questionRow" key={question.id}>
              <span>{question.topic}</span>
              <p>{question.stem}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
