import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";
import { DEFAULT_OG_IMAGE, LAST_UPDATED_ISO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NEET Biology Revision Library",
  description: "Independent NEET-UG Biology revision notes organised by topic, with concept focus, common confusions, and short study routines.",
  alternates: { canonical: "/neet-ug/biology" },
  openGraph: { title: "NEET Biology Revision Library", description: "Focused NEET Biology revision notes for Indian students.", url: absoluteUrl("/neet-ug/biology"), siteName: "MedQGo", type: "website", images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "MedQGo NEET Biology revision library" }] },
};

export default async function BiologyTopicsPage() {
  const [allTopics, allNotes] = await Promise.all([getTopics(), getSeoNotes()]);
  const notes = allNotes.filter((note) => AUTHORED_NOTE_SLUGS.includes(note.slug as (typeof AUTHORED_NOTE_SLUGS)[number]));
  const topics = allTopics.filter((topic) => notes.some((note) => note.topicSlug === topic.slug));
  const itemListLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: "NEET Biology Revision Library", url: absoluteUrl("/neet-ug/biology"), inLanguage: "en-IN", dateModified: LAST_UPDATED_ISO, mainEntity: { "@type": "ItemList", numberOfItems: topics.length, itemListElement: topics.map((topic, index) => ({ "@type": "ListItem", position: index + 1, name: `${topic.name} revision guide`, url: absoluteUrl(`/neet-ug/biology/${topic.slug}`) })) } };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }]} />
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">NEET-UG Biology</p>
        <h1>NEET Biology revision library</h1>
        <p>Use these independent topic guides to organise NCERT revision around definitions, processes, comparisons, and common sources of confusion.</p>
        <EditorialByline />
      </header>
      <section className="contentBand"><h2>How to use this library</h2><p>Read the corresponding NCERT chapter first. Then use a MedQGo guide to test whether you can explain the central process, separate similar terms, and recall key examples without looking back at the textbook.</p></section>
      <div className="topicGrid">{topics.map((topic) => <Link href={`/neet-ug/biology/${topic.slug}`} className="topicCard" key={topic.id}><span>{topic.ncertRef}</span><h2>{topic.name}</h2><p>Study focus, likely confusions, and an original revision routine.</p></Link>)}</div>
      <PdfCta source="biology_index" />
    </main>
  );
}
