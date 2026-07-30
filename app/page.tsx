import type { Metadata } from "next";
import Link from "next/link";
import { PdfCta } from "@/components/PdfCta";
import { TrackedLink } from "@/components/TrackedLink";
import { getNotePath, getQuestionPath, getQuestions, getSeoNotes, getTopicPath, getTopics } from "@/lib/content";
import { INDEXABLE_TOPIC_MIN_QUESTIONS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free NEET Biology MCQs with Answers",
  description: "Practice free NEET-UG Biology MCQs with answers, NCERT-aligned explanations, topic-wise pages, and revision notes for Indian students.",
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
            <Link href="/neet-biology-pdf">Free PDF</Link>
            <Link href="/neet-ug/biology/notes/cell-theory-and-cell-organelles">Notes</Link>
            <Link href="/site-map">Sitemap</Link>
          </div>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">NEET-UG Biology • NCERT aligned</p>
            <h1>Build your Biology score with focused MCQs and explanations.</h1>
            <p className="lede">
              Free chapter-wise NEET Biology MCQs for Indian students, aligned with NCERT Class 11 and 12. Practice four-option questions with visible answers and concise explanations.
            </p>
            <div className="actions">
              <Link href="/neet-ug/biology" className="primaryButton">Start Biology Practice</Link>
              {firstQuestions[0] && <Link href={getQuestionPath(firstQuestions[0])} className="secondaryButton">Try a sample MCQ</Link>}
              <TrackedLink
                href="/neet-biology-pdf?source=home_hero"
                className="secondaryButton"
                eventName="pdf_cta_click"
                eventParams={{ source: "home_hero", offer: "neet_biology_pdf" }}
              >
                Get free PDF
              </TrackedLink>
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
              <p>NCERT revision notes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <PdfCta source="home_midpage" />
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Question bank</p>
          <h2>Chapter-wise NEET Biology MCQs with answers</h2>
        </div>
        <div className="topicGrid">
          {topicList.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS).map((topic) => (
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
          <p className="eyebrow">NCERT revision</p>
          <h2>Revise high-yield Biology concepts before solving topic-wise MCQs.</h2>
          <p className="muted">
            Use these short notes to review definitions, examples, and common distractors from NCERT before practicing questions for NEET-UG Biology.
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
