import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, findQuestionsByTopic, findTopic, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS, getNoteContent, getNoteReferences } from "@/lib/noteContent";
import { LAST_UPDATED_DISPLAY, LAST_UPDATED_ISO, ogImage, topicMetadata } from "@/lib/seo";
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
  const sections = getNoteContent(note.slug);
  if (!sections) notFound();
  const [practiceQuestions, references] = await Promise.all([
    findQuestionsByTopic(topic.slug),
    Promise.resolve(getNoteReferences(note.slug)),
  ]);
  const sampleQuestions = practiceQuestions.slice(0, 3);
  const heroImage = ogImage(`${topic.name} revision guide`, "NCERT-aligned NEET Biology notes");
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: absoluteUrl("/neet-ug/biology") }, { "@type": "ListItem", position: 3, name: topic.name, item: absoluteUrl(`/neet-ug/biology/${topic.slug}`) }] };
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: `${topic.name} revision guide`, description: note.description, datePublished: LAST_UPDATED_ISO, dateModified: LAST_UPDATED_ISO, image: heroImage, about: topic.name, author: { "@type": "Organization", name: "MedQGo Editorial Team" }, publisher: { "@type": "Organization", name: "MedQGo", url: absoluteUrl("/") } };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbLd, articleLd]) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }, { href: `/neet-ug/biology/${topic.slug}`, label: topic.name }]} />
        <Link href="/neet-ug/biology" className="backLink">All Biology topics</Link>
        <p className="eyebrow">{topic.ncertRef}</p>
        <h1>{topic.name} revision guide</h1>
        <p>{note.description}</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>
      <figure className="articleHeroImage">
        <img src={heroImage} alt={`${topic.name} NEET Biology revision visual`} />
        <figcaption>Independent revision visual for {topic.name}, prepared for NEET-UG Biology study.</figcaption>
      </figure>
      <section className="contentBand"><h2>Concept focus</h2><ul className="seoList">{seoContent.focus.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <article className="articleBody">
        {sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul className="seoList">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        <section><h2>Common confusions to check</h2><ul className="seoList">{seoContent.traps.map((item) => <li key={item}>{item}</li>)}</ul></section>
        {sampleQuestions.length > 0 && (
          <section>
            <h2>Quick MCQ practice</h2>
            <div className="inlineMcqList">
              {sampleQuestions.map((question) => (
                <article className="inlineMcq" key={question.id}>
                  <h3>{question.stem}</h3>
                  <ol type="A">
                    {Object.values(question.options).map((option) => <li key={option}>{option}</li>)}
                  </ol>
                  <p><strong>Answer:</strong> {question.correctOption}. {question.explanation}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        <section>
          <h2>References</h2>
          <ul className="seoList referenceList">
            {references.map((reference) => (
              <li key={reference.href}>
                <a href={reference.href} rel="noopener noreferrer" target="_blank">{reference.label}</a>
              </li>
            ))}
          </ul>
        </section>
        <section><h2>How to use this guide</h2><p>Read the relevant NCERT chapter first. Then redraw the relationships or process described here from memory, compare your version with the textbook, and correct only the gaps. This is an independent revision aid, not official NCERT, NTA, or NEET material.</p></section>
      </article>
      <PdfCta source="topic_page" topicSlug={topic.slug} />
    </main>
  );
}
