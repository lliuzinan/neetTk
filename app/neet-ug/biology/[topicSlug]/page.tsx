import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, findTopic, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";
import { LAST_UPDATED_DISPLAY, topicMetadata } from "@/lib/seo";
import { getTopicSeoContent } from "@/lib/topicSeo";

interface Props { params: Promise<{ topicSlug: string }>; }

function isPublishedNote(slug: string) {
  return AUTHORED_NOTE_SLUGS.includes(slug as (typeof AUTHORED_NOTE_SLUGS)[number]);
}

export async function generateStaticParams() {
  const [notes, topics] = await Promise.all([getSeoNotes(), getTopics()]);
  return topics.filter((topic) => notes.some((note) => note.topicSlug === topic.slug && isPublishedNote(note.slug))).map((topic) => ({ topicSlug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const [topic, notes] = await Promise.all([findTopic(topicSlug), getSeoNotes()]);
  if (!topic || !notes.some((note) => note.topicSlug === topic.slug && isPublishedNote(note.slug))) return {};
  return topicMetadata(topic);
}

export default async function TopicPage({ params }: Props) {
  const { topicSlug } = await params;
  const [topic, notes] = await Promise.all([findTopic(topicSlug), getSeoNotes()]);
  const note = topic && notes.find((item) => item.topicSlug === topic.slug && isPublishedNote(item.slug));
  if (!topic || !note) notFound();

  const seoContent = getTopicSeoContent(topic.slug);
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: absoluteUrl("/neet-ug/biology") }, { "@type": "ListItem", position: 3, name: topic.name, item: absoluteUrl(`/neet-ug/biology/${topic.slug}`) }] };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }, { href: `/neet-ug/biology/${topic.slug}`, label: topic.name }]} />
        <Link href="/neet-ug/biology" className="backLink">All Biology topics</Link>
        <p className="eyebrow">{topic.ncertRef}</p>
        <h1>{topic.name} revision guide</h1>
        <p>A compact independent study guide for reviewing central NCERT ideas, separating similar terms, and building a recall routine.</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>
      <section className="contentBand"><h2>Concept focus</h2><ul className="seoList">{seoContent.focus.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="contentBand splitContent"><div><h2>Common confusions</h2><ul className="seoList">{seoContent.traps.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Revision routine</h2><p>Read the relevant NCERT section, make a one-page relationship map from memory, then use the detailed note below to correct only the gaps you found.</p></div></section>
      <section className="contentBand"><h2>Detailed revision note</h2><p>This note expands the topic with explanations and a short recall routine.</p><Link href={`/neet-ug/biology/notes/${note.slug}`} className="primaryButton">Read the {topic.name} note</Link></section>
      <PdfCta source="topic_page" topicSlug={topic.slug} />
    </main>
  );
}
