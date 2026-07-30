import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, findNote, findQuestionsByTopic, findTopic, getSeoNotes } from "@/lib/content";
import { LAST_UPDATED_DISPLAY, LAST_UPDATED_ISO, noteMetadata } from "@/lib/seo";
import { getTopicSeoContent } from "@/lib/topicSeo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const noteList = await getSeoNotes();
  return noteList.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = await findNote(slug);
  if (!note) return {};

  const topic = await findTopic(note.topicSlug);
  return noteMetadata(note, topic);
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = await findNote(slug);
  if (!note) notFound();

  const topic = await findTopic(note.topicSlug);
  if (!topic) notFound();

  const topicQuestions = (await findQuestionsByTopic(topic.slug)).slice(0, 6);
  const seoContent = getTopicSeoContent(topic.slug);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    about: topic.name,
    author: { "@type": "Organization", name: "MedQGo Editorial Team" },
    publisher: { "@type": "Organization", name: "MedQGo", url: absoluteUrl("/") },
  };

  return (
    <main className="page articlePage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/neet-ug/biology", label: "NEET Biology" },
          { href: `/neet-ug/biology/${topic.slug}`, label: topic.name },
          { href: `/neet-ug/biology/notes/${note.slug}`, label: "Notes" },
        ]} />
        <Link href="/neet-ug/biology" className="backLink">Biology topics</Link>
        <p className="eyebrow">{note.targetKeyword}</p>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>

      <article className="articleBody">
        <h2>NEET-UG importance</h2>
        <p>
          {topic.name} is a useful scoring area because questions often test direct NCERT wording, process sequence, and the ability to separate close distractors. Keep the revision tight and practice with explanations after each attempt.
        </p>
        <h2>How to practice this topic</h2>
        <p>
          Read the NCERT section first, mark definitions and examples, then solve MCQs in short sets. After each wrong answer, rewrite the reason in one line so the concept becomes recallable before a mock test.
        </p>
        <h2>Core concepts to revise</h2>
        <ul className="seoList">
          {seoContent.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Common NEET traps</h2>
        <ul className="seoList">
          {seoContent.traps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Example MCQs and explanations</h2>
        <div className="exampleList">
          {topicQuestions.slice(0, 5).map((question) => (
            <section className="exampleItem" key={question.id}>
              <h3>{question.stem}</h3>
              <p><strong>Answer:</strong> {question.correctOption}. {question.options[question.correctOption]}</p>
              <p>{question.explanation}</p>
              <Link href={`/neet-ug/biology/${question.topicSlug}/q/${question.id}`}>Practice this MCQ</Link>
            </section>
          ))}
        </div>
        <PdfCta source="note_page" topicSlug={topic.slug} />
        <h2>Practice questions</h2>
        <div className="miniLinks">
          {topicQuestions.map((question) => (
            <Link href={`/neet-ug/biology/${question.topicSlug}/q/${question.id}`} key={question.id}>
              {question.stem}
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
