import type { Metadata } from "next";
import Link from "next/link";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, getSeoNotes, getTopics } from "@/lib/content";
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
  const mobileQuickStartSlugs = ["photosynthesis-in-higher-plants", "digestion-and-absorption"];
  const mobileQuickStartTopics = mobileQuickStartSlugs
    .map((slug) => topics.find((topic) => topic.slug === slug))
    .filter((topic): topic is (typeof topics)[number] => Boolean(topic));
  const learningClusters = [
    {
      title: "Inheritance and variation",
      description: "Start with Mendel's patterns, then connect them to chromosome behaviour before moving into pedigree questions.",
      slugs: ["mendelian-inheritance", "chromosomal-basis-of-inheritance", "pedigree-analysis-and-inheritance-patterns"],
    },
    {
      title: "Biotechnology",
      description: "Trace a gene-transfer workflow, identify the tools at each step, then explain the purpose of a biotechnology application.",
      slugs: ["recombinant-dna-technology", "molecular-tools-and-dna-analysis", "biotechnology-applications"],
    },
    {
      title: "Reproduction",
      description: "Compare reproductive events in plants and humans, then use the human sequence to understand reproductive-health terminology.",
      slugs: ["sexual-reproduction-in-flowering-plants", "human-reproduction", "reproductive-health"],
    },
    {
      title: "Ecology",
      description: "Begin with organisms in their habitats, then trace how energy and nutrients connect populations across an ecosystem.",
      slugs: ["organisms-and-populations", "ecosystem-energy-flow-and-ecological-pyramids"],
    },
  ];
  const clusteredSlugs = new Set(learningClusters.flatMap((cluster) => cluster.slugs));
  const otherTopics = topics.filter((topic) => !clusteredSlugs.has(topic.slug));
  const homeJsonLd = [
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
            <h1>NEET Biology revision notes</h1>
            <p className="lede">Read NCERT-aligned concept maps, close comparisons, original teaching diagrams, and short recall routines for high-yield Biology topics.</p>
            <div className="actions">
              <Link href="/neet-ug/biology" className="primaryButton">Browse revision topics</Link>
              <Link href="/neet-biology-pdf" className="secondaryButton">View free workbook sample</Link>
            </div>
            <div className="mobileQuickStart" aria-label="Start reading a revision guide">
              <p>Start reading</p>
              <div>
                {mobileQuickStartTopics.map((topic) => (
                  <Link href={`/neet-ug/biology/${topic.slug}`} key={topic.id}>{topic.name}</Link>
                ))}
              </div>
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
        <div className="sectionHeader"><p className="eyebrow">Study sequences</p><h2>Build one connected topic at a time</h2><p>These sequences make it easier to carry an idea from its starting point to a harder related chapter.</p></div>
        <div className="clusterGrid">
          {learningClusters.map((cluster) => {
            const clusterTopics = cluster.slugs.map((slug) => topics.find((topic) => topic.slug === slug)).filter((topic): topic is (typeof topics)[number] => Boolean(topic));
            return <section className="clusterPanel" key={cluster.title}><h3>{cluster.title}</h3><p>{cluster.description}</p><div>{clusterTopics.map((topic) => <Link href={`/neet-ug/biology/${topic.slug}`} key={topic.id}>{topic.name}</Link>)}</div></section>;
          })}
        </div>
      </section>
      <section className="section">
        <div className="sectionHeader"><p className="eyebrow">Revision library</p><h2>Explore other Biology guides</h2></div>
        <div className="topicGrid">
          {otherTopics.map((topic) => <Link href={`/neet-ug/biology/${topic.slug}`} className="topicCard" key={topic.id}><span>{topic.ncertRef}</span><h3>{topic.name}</h3><p>Read a complete guide with a concept path, close comparisons, and a focused recall task.</p></Link>)}
        </div>
      </section>
      <section className="section split">
        <div><p className="eyebrow">Study with intent</p><h2>Read the NCERT section, then test your recall.</h2><p className="muted">Each guide is an independent learning aid, not official exam material. Check definitions and diagrams against your current NCERT textbook, then use the guide to explain the process without looking back.</p></div>
        <div className="listPanel"><strong>New to the library?</strong><Link href="/neet-ug/biology/cell-theory-and-cell-organelles">Begin with cell organelles and protein routing</Link><Link href="/neet-ug/biology/mitosis-and-meiosis">Then connect chromosomes with cell division</Link><Link href="/neet-biology-pdf">Try the free workbook recall-sheet sample</Link></div>
      </section>
      <section className="section"><PdfCta source="home_midpage" /></section>
    </main>
  );
}
