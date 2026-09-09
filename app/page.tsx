import type { Metadata } from "next";
import Link from "next/link";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, getSeoNotes, getTopics, siteConfig } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";
import { LAST_UPDATED_ISO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NEET Biology Revision Notes",
  description: "Independent NEET-UG Biology revision notes with NCERT-aligned concept maps, common confusions, and focused study routines.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [topicList, noteList] = await Promise.all([getTopics(), getSeoNotes()]);
  const notes = noteList.filter((note) => AUTHORED_NOTE_SLUGS.includes(note.slug as (typeof AUTHORED_NOTE_SLUGS)[number]));
  const topics = topicList.filter((topic) => notes.some((note) => note.topicSlug === topic.slug));
  const homeJsonLd = [
    { "@context": "https://schema.org", "@type": "Organization", name: "MedQGo", url: absoluteUrl("/"), description: siteConfig.description },
    { "@context": "https://schema.org", "@type": "WebSite", name: "MedQGo", url: absoluteUrl("/"), inLanguage: "en-IN" },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }], dateModified: LAST_UPDATED_ISO },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <section className="hero">
        <nav className="nav">
          <Link href="/" className="brand">MedQGo</Link>
          <div className="navLinks">
            <Link href="/neet-ug/biology">Revision library</Link>
            <Link href="/neet-biology-pdf">Revision workbook</Link>
            <Link href="/about">About</Link>
            <Link href="/site-map">Sitemap</Link>
          </div>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">NEET-UG Biology | Independent study resource</p>
            <h1>Build a clearer NEET Biology revision routine.</h1>
            <p className="lede">MedQGo publishes focused Biology revision notes for Indian students. Use the concept maps, common-confusion checks, and short revision routines alongside your NCERT textbook and school learning.</p>
            <div className="actions">
              <Link href="/neet-ug/biology" className="primaryButton">Browse revision topics</Link>
              <Link href="/neet-biology-pdf" className="secondaryButton">Join workbook early access</Link>
            </div>
          </div>
          <div className="heroPanel" aria-label="Revision library status">
            <div className="metricRow"><span>{notes.length}</span><p>in-depth revision notes</p></div>
            <div className="metricRow"><span>{topics.length}</span><p>focused Biology topics</p></div>
            <div className="metricRow"><span>1</span><p>clear study goal: better recall</p></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="sectionHeader"><p className="eyebrow">Revision library</p><h2>Start with a focused Biology topic</h2></div>
        <div className="topicGrid">
          {topics.map((topic) => <Link href={`/neet-ug/biology/${topic.slug}`} className="topicCard" key={topic.id}><span>{topic.ncertRef}</span><h3>{topic.name}</h3><p>Concept focus, common confusions, and a short revision routine.</p></Link>)}
        </div>
      </section>
      <section className="section split">
        <div><p className="eyebrow">Study with intent</p><h2>Read the NCERT section, then use a compact recall routine.</h2><p className="muted">Each note is written as a learning aid, not as official exam material. Check definitions and diagrams against your current NCERT textbook.</p></div>
        <div className="listPanel">{notes.map((note) => <Link href={`/neet-ug/biology/${note.topicSlug}`} key={note.id}>{note.title}</Link>)}</div>
      </section>
      <section className="section"><PdfCta source="home_midpage" /></section>
    </main>
  );
}
