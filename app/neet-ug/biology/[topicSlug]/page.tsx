import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { editorialReviewer, hasNamedAuthor } from "@/lib/editorialReviewer";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, findTopic, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS, getNoteComparisonTable, getNoteContent, getNoteEditorialBlock, getNoteReferences } from "@/lib/noteContent";
import { ogImage, topicDates, topicMetadata } from "@/lib/seo";
import { getTopicSeoContent } from "@/lib/topicSeo";

interface Props { params: Promise<{ topicSlug: string }>; }

const articleIllustrations: Record<string, { src: string; alt: string; caption: string }> = {
  "endocrine-system-and-hormones": {
    src: "/images/biology/endocrine-blood-glucose-feedback-v1.png",
    alt: "Negative-feedback regulation of blood glucose through insulin and glucagon",
    caption: "Insulin and glucagon act in opposing directions to help maintain blood glucose within a useful range.",
  },
};

const articleStudyNotes: Record<string, { heading: string; intro: string; points: string[] }> = {
  "endocrine-system-and-hormones": {
    heading: "Feedback direction: use the arrow test",
    intro: "A hormone name can look familiar while the direction is wrong. Before accepting an option, say the full sequence aloud and check which change comes next.",
    points: [
      "High blood glucose -> insulin release -> uptake and storage of glucose -> blood glucose falls toward its usual range.",
      "Low blood glucose -> glucagon release -> liver mobilises stored glucose -> blood glucose rises toward its usual range.",
      "ADH and oxytocin are synthesised in the hypothalamus and stored and released from the posterior pituitary. A shared release site does not mean a shared function.",
      "Peptide hormones such as insulin act through cell-surface receptors, whereas steroid hormones can enter target cells and act through intracellular receptors.",
    ],
  },
};

const articleSupplementalFigures: Record<string, { afterHeading: string; src: string; alt: string; caption: string }> = {
  "endocrine-system-and-hormones": {
    afterHeading: "The hypothalamus and pituitary: read the control hierarchy",
    src: "/images/biology/endocrine-hypothalamus-pituitary-thyroid-axis-v1.png",
    alt: "Simplified hypothalamus-pituitary-thyroid axis with negative feedback from thyroid hormones",
    caption: "A simplified control-axis overview: the hypothalamus and anterior pituitary influence thyroid activity, while thyroid hormones provide negative feedback.",
  },
};

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
  const [topic, notes, allTopics] = await Promise.all([findTopic(topicSlug), getSeoNotes(), getTopics()]);
  const note = topic && notes.find((item) => item.topicSlug === topic.slug && isPublishedNote(item.slug));
  if (!topic || !note) notFound();

  const seoContent = getTopicSeoContent(topic.slug);
  const dates = topicDates(topic.slug);
  const sections = getNoteContent(note.slug, topic.name, topic.ncertRef, seoContent.focus, seoContent.traps);
  if (!sections) notFound();
  const references = getNoteReferences(note.slug);
  const heroImage = ogImage(`${topic.name} revision guide`, "NCERT-aligned NEET Biology notes");
  const comparisonTable = getNoteComparisonTable(note.slug, topic.name);
  const editorialBlock = getNoteEditorialBlock(note.slug, topic.name);
  const articleIllustration = articleIllustrations[note.slug];
  const articleStudyNote = articleStudyNotes[note.slug];
  const articleSupplementalFigure = articleSupplementalFigures[note.slug];
  const noteTopicSlugs = new Set(notes.filter((item) => isPublishedNote(item.slug)).map((item) => item.topicSlug));
  const relatedTopics = allTopics
    .filter((item) => item.slug !== topic.slug && noteTopicSlugs.has(item.slug))
    .map((item) => ({ topic: item, distance: Math.abs(item.sortOrder - topic.sortOrder), sameClass: item.ncertRef.slice(0, 24) === topic.ncertRef.slice(0, 24) }))
    .sort((a, b) => Number(b.sameClass) - Number(a.sameClass) || a.distance - b.distance)
    .slice(0, 4)
    .map((item) => item.topic);
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: absoluteUrl("/neet-ug/biology") }, { "@type": "ListItem", position: 3, name: topic.name, item: absoluteUrl(`/neet-ug/biology/${topic.slug}`) }] };
  const articleAuthor = hasNamedAuthor()
    ? { "@type": "Person", name: editorialReviewer.authorName, url: absoluteUrl("/authors/dongfeng"), ...(editorialReviewer.authorRole ? { jobTitle: editorialReviewer.authorRole } : {}) }
    : { "@type": "Organization", name: "MedQGo Editorial Team" };
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: `${topic.name} revision guide`, description: note.description, datePublished: dates.publishedIso, dateModified: dates.modifiedIso, image: heroImage, about: topic.name, author: articleAuthor, publisher: { "@type": "Organization", name: "MedQGo", url: absoluteUrl("/") } };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbLd, articleLd]) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }, { href: `/neet-ug/biology/${topic.slug}`, label: topic.name }]} />
        <Link href="/neet-ug/biology" className="backLink">All Biology topics</Link>
        <p className="eyebrow">{topic.ncertRef}</p>
        <h1>{topic.name} revision guide</h1>
        <p>{note.description}</p>
        <p className="updatedStamp">Published: {dates.publishedDisplay} | Last updated: {dates.modifiedDisplay}</p>
        <EditorialByline lastUpdated={dates.modifiedDisplay} />
      </header>
      <figure className="articleHeroImage">
        <img src={heroImage} alt={`${topic.name} NEET Biology revision visual`} />
        <figcaption>Independent revision visual for {topic.name}, prepared for NEET-UG Biology study.</figcaption>
      </figure>
      <section className="contentBand"><h2>Concept focus</h2><ul className="seoList">{seoContent.focus.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <article className="articleBody">
        {sections.slice(0, 2).map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul className="seoList">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        {articleIllustration && (
          <figure className="articleIllustration">
            <img src={articleIllustration.src} alt={articleIllustration.alt} width={1600} height={1000} />
            <figcaption>{articleIllustration.caption}</figcaption>
          </figure>
        )}
        {articleStudyNote && (
          <section className="articleStudyNote">
            <h2>{articleStudyNote.heading}</h2>
            <p>{articleStudyNote.intro}</p>
            <ul className="seoList">{articleStudyNote.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </section>
        )}
        <section className="editorialAside">
          <h2>{editorialBlock.heading}</h2>
          {editorialBlock.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {editorialBlock.bullets && <ul className="seoList">{editorialBlock.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>
        <section>
          <h2>{comparisonTable.heading}</h2>
          <p>{comparisonTable.intro}</p>
          <div className="comparisonTableWrap">
            <table className="comparisonTable">
              <thead>
                <tr>{comparisonTable.columns.map((column) => <th key={column}>{column}</th>)}</tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row) => (
                  <tr key={row.join("|")}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {sections.slice(2).map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul className="seoList">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            {articleSupplementalFigure?.afterHeading === section.heading && (
              <figure className="articleIllustration">
                <img src={articleSupplementalFigure.src} alt={articleSupplementalFigure.alt} width={1600} height={1000} />
                <figcaption>{articleSupplementalFigure.caption}</figcaption>
              </figure>
            )}
          </section>
        ))}
        <section><h2>Common confusions to check</h2><ul className="seoList">{seoContent.traps.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section>
          <h2>Exam-style checkpoints</h2>
          <p>Before leaving this page, check whether you can explain {topic.name} without opening your textbook. A good checkpoint is to define the main term, give one NCERT-linked example, and state one nearby idea that students commonly confuse with it.</p>
          <p>For a second pass, mix this guide with a neighbouring Biology topic instead of revising it alone. NEET-UG Biology often tests whether students can keep similar processes, structures, molecules, or examples separate under time pressure.</p>
        </section>
        <section className="articleMetaBox">
          <h2>Editorial note and disclaimer</h2>
          <p><strong>Written by:</strong> <Link href="/authors/dongfeng">DongFeng</Link>. <strong>Editorial review:</strong> MedQGo. <strong>Last updated:</strong> {dates.modifiedDisplay}.</p>
          <p><strong>Disclaimer:</strong> This guide is a revision aid for NEET-UG aspirants and does not constitute medical advice. For clinical or health-related queries, consult a qualified medical professional.</p>
        </section>
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
        {relatedTopics.length > 0 && (
          <section>
            <h2>Related revision guides</h2>
            <div className="relatedGuideGrid">
              {relatedTopics.map((related) => (
                <Link href={`/neet-ug/biology/${related.slug}`} className="relatedGuide" key={related.id}>
                  <strong>{related.name}</strong>
                  <span>{related.ncertRef}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
        <section><h2>How to use this guide</h2><p>Read the relevant NCERT chapter first. Then redraw the relationships or process described here from memory, compare your version with the textbook, and correct only the gaps. This is an independent revision aid, not official NCERT, NTA, or NEET material.</p></section>
      </article>
      <PdfCta source="topic_page" topicSlug={topic.slug} />
    </main>
  );
}
