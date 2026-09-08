import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, findNote, findTopic, getSeoNotes } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS, getNoteContent } from "@/lib/noteContent";
import { LAST_UPDATED_DISPLAY, LAST_UPDATED_ISO, noteMetadata } from "@/lib/seo";

interface Props { params: Promise<{ slug: string }>; }
function isPublishedNote(slug: string) { return AUTHORED_NOTE_SLUGS.includes(slug as (typeof AUTHORED_NOTE_SLUGS)[number]); }

export async function generateStaticParams() {
  const notes = await getSeoNotes();
  return notes.filter((note) => isPublishedNote(note.slug)).map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isPublishedNote(slug)) return {};
  const note = await findNote(slug);
  if (!note) return {};
  return noteMetadata(note, await findTopic(note.topicSlug));
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  if (!isPublishedNote(slug)) notFound();
  const note = await findNote(slug);
  if (!note) notFound();
  const topic = await findTopic(note.topicSlug);
  const sections = getNoteContent(note.slug);
  if (!topic || !sections) notFound();

  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: note.title, description: note.description, datePublished: LAST_UPDATED_ISO, dateModified: LAST_UPDATED_ISO, about: topic.name, author: { "@type": "Organization", name: "MedQGo" }, publisher: { "@type": "Organization", name: "MedQGo", url: absoluteUrl("/") } };
  return (
    <main className="page articlePage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }, { href: `/neet-ug/biology/${topic.slug}`, label: topic.name }, { href: `/neet-ug/biology/notes/${note.slug}`, label: "Revision note" }]} />
        <Link href={`/neet-ug/biology/${topic.slug}`} className="backLink">{topic.name} guide</Link>
        <p className="eyebrow">{note.targetKeyword}</p>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>
      <article className="articleBody">
        {sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul className="seoList">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        <section><h2>Use this note responsibly</h2><p>This is an independent revision resource. Confirm current syllabus wording, diagrams, and examples against your NCERT textbook and official examination guidance.</p></section>
        <PdfCta source="note_page" topicSlug={topic.slug} />
      </article>
    </main>
  );
}
