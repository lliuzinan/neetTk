import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote, getNotePath, getQuestionsByTopic, getTopic, seoNotes } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return seoNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.description,
    alternates: { canonical: getNotePath(note) },
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const topic = getTopic(note.topicSlug);
  if (!topic) notFound();

  const topicQuestions = getQuestionsByTopic(topic.slug).slice(0, 6);

  return (
    <main className="page articlePage">
      <header className="pageHeader">
        <Link href="/neet-ug/biology" className="backLink">Biology topics</Link>
        <p className="eyebrow">{note.targetKeyword}</p>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
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
