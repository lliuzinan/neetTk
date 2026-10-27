import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";
import { topicDates } from "@/lib/seo";
import { librarySection, librarySections } from "@/lib/librarySections";

export const metadata: Metadata = {
  title: "NEET Biology Study Centre | MedQGo",
  description: "Study inheritance, investigate biological evidence and find source-linked NEET Biology revision notes. Explore chapter routes and a free printable recall sheet.",
  alternates: { canonical: "/" },
};
const base = "/neet-ug/biology";
const inheritance = `${base}/learn/inheritance`;
const cases = [
  { slug: "testcross-and-unknown-genotypes#case-title", label: "Genotype inference", title: "What can one recessive offspring establish?", description: "Open a constructed offspring record in stages. Separate what was observed from what the model predicts.", format: "Staged teaching record" },
  { slug: "linkage-and-recombination-frequency", label: "Data interpretation", title: "Does a smaller percentage mean stronger linkage?", description: "Compare recovered offspring classes and check the denominator before interpreting a recombination record.", format: "Worked data comparison" },
  { slug: "pedigree-analysis-and-inheritance-patterns", label: "Conditional probability", title: "Whose probability are you calculating?", description: "Distinguish an unaffected sibling from a future child in a fictional family. State the assumptions for each result.", format: "Worked family example" },
];

export default async function Home() {
  const [allTopics, allNotes] = await Promise.all([getTopics(), getSeoNotes()]);
  const notes = allNotes.filter(note => (AUTHORED_NOTE_SLUGS as readonly string[]).includes(note.slug));
  const topics = allTopics.filter(topic => notes.some(note => note.topicSlug === topic.slug));
  const recent = [...topics].sort((a, b) => topicDates(b.slug).modifiedIso.localeCompare(topicDates(a.slug).modifiedIso)).slice(0, 4);
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: "MedQGo", url: absoluteUrl("/"), logo: absoluteUrl("/favicon.svg") },
    { "@type": "WebSite", "@id": absoluteUrl("/#website"), name: "MedQGo", url: absoluteUrl("/"), description: metadata.description, publisher: { "@id": absoluteUrl("/#organization") } },
  ] };
  return <main className="studyHome">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
    <nav className="studyNav studyWidth" aria-label="Main navigation">
      <Link href="/" className="studyBrand" prefetch={false}>MedQGo<span>Biology</span></Link>
      <div><Link href={inheritance} prefetch={false}>Study centre</Link><Link href="#investigations">Investigations</Link><Link href={base} prefetch={false}>All guides</Link><Link href="/neet-biology-pdf" prefetch={false}>Print a worksheet</Link></div>
    </nav>
    <header className="studyIntro studyWidth">
      <p className="studyEyebrow">NEET-UG / Independent learning</p>
      <h1>NEET Biology study centre</h1>
      <p>Follow a chapter. Work through the evidence. Explain the result.</p>
      <div className="studyEntryLinks">
        <Link href={inheritance} prefetch={false}><strong>Start with inheritance <span aria-hidden="true">→</span></strong><span>Alleles, crosses and the conclusions they support</span></Link>
        <Link href="#subjects"><strong>Find a Biology topic <span aria-hidden="true">→</span></strong><span>{topics.length} published guides across {librarySections.length} knowledge areas</span></Link>
        <Link href="/neet-biology-pdf#free-sample-title" prefetch={false}><strong>Print the free recall sheet <span aria-hidden="true">→</span></strong><span>DNA, RNA and protein: a 12-minute exercise</span></Link>
      </div>
    </header>
    <section className="studyRouteBand" aria-labelledby="route-heading">
      <div className="studyWidth studyRoute"><div>
        <p className="studyEyebrow">Chapter route / Genetics</p><h2 id="route-heading">Inheritance: from alleles to evidence</h2>
        <p>Begin with segregation, then ask what an offspring record tells you about the parent.</p>
        <ol>
          <li><Link href={`${base}/mendelian-inheritance`} prefetch={false}>Alleles and gametes</Link><span>Separate appearance from genotype.</span></li>
          <li><Link href={`${base}/testcross-and-unknown-genotypes`} prefetch={false}>An unknown parent</Link><span>Use a recessive tester to examine the evidence.</span></li>
          <li><Link href={`${base}/linkage-and-recombination-frequency`} prefetch={false}>Linked combinations</Link><span>Question the sampling and the recovered classes.</span></li>
        </ol>
        <Link className="studyPrimary" href={inheritance} prefetch={false}>Explore the inheritance study centre <span aria-hidden="true">→</span></Link>
      </div><figure>
        <Link href={`${base}/testcross-and-unknown-genotypes`} prefetch={false} aria-label="Read the testcross explanation"><Image src="/images/biology/testcross-and-unknown-genotypes-v1.webp" alt="An Aa parent contributes A or a; an aa tester contributes a, producing Aa or aa offspring in the stated single-locus model." width={1600} height={1000} sizes="(max-width: 760px) 92vw, 460px" /></Link>
        <figcaption>The tester fixes one contribution. What can the other parent supply?</figcaption>
      </figure></div>
    </section>
    <section className="studyWidth studySection" id="investigations" aria-labelledby="cases-heading">
      <div className="studySectionHead"><div><p className="studyEyebrow">Evidence and reasoning</p><h2 id="cases-heading">Three problems to think through</h2></div><Link href={`${inheritance}#case-library`}>All worked investigations <span aria-hidden="true">→</span></Link></div>
      <p className="studyScope">Original teaching cases, not official examination questions or reports of real experiments.</p>
      <div className="studyCases">{cases.map(item => <article key={item.slug}><p className="studyCaseLabel">{item.label}</p><h3><Link href={`${base}/${item.slug}`} prefetch={false}>{item.title}</Link></h3><p>{item.description}</p><span>{item.format}</span><Link className="studyTextLink" href={`${base}/${item.slug}`} prefetch={false}>Work through the case <span aria-hidden="true">→</span></Link></article>)}</div>
    </section>
    <section className="studyDirectoryBand" id="subjects" aria-labelledby="subjects-heading"><div className="studyWidth studySection">
      <div className="studySectionHead"><div><p className="studyEyebrow">NEET Biology revision notes</p><h2 id="subjects-heading">Build one connected topic at a time</h2></div><Link href={base} prefetch={false}>Search all guides <span aria-hidden="true">→</span></Link></div>
      <div className="studySubjects">{librarySections.map(section => <Link href={`${base}#${section.id}`} key={section.id} prefetch={false}><div><h3>{section.title}</h3><p>{section.subtitle}</p></div><span>{topics.filter(topic => librarySection(topic.ncertRef) === section.id).length} guides <span aria-hidden="true">→</span></span></Link>)}</div>
    </div></section>
    <section className="studyWidth studySection" aria-labelledby="recent-heading">
      <div className="studySectionHead"><div><p className="studyEyebrow">From the library</p><h2 id="recent-heading">Recently revised guides</h2></div><Link href="/editorial-policy">Sources and corrections <span aria-hidden="true">→</span></Link></div>
      <div className="studyRecent">{recent.map(topic => <article key={topic.slug}><time dateTime={topicDates(topic.slug).modifiedIso}>{topicDates(topic.slug).modifiedDisplay}</time><h3><Link href={`${base}/${topic.slug}`} prefetch={false}>{topic.name}</Link></h3><p>{notes.find(note => note.topicSlug === topic.slug)?.description}</p></article>)}</div>
    </section>
    <section className="studyWorkbookBand"><div className="studyWidth studyWorkbook"><div><p className="studyEyebrow">Free printable sample</p><h2>DNA → RNA → protein</h2><p>Draw the information route, distinguish transcription from translation, then check the comparison table.</p><Link className="studyPrimary" href="/neet-biology-pdf#free-sample-title" prefetch={false}>Open the recall sheet <span aria-hidden="true">→</span></Link></div><div className="studyStandards"><h3>Reference-led, independently prepared</h3><p>Use the cited textbook chapters alongside each guide. Teaching examples are labelled separately from source material.</p><p>These resources are not official NCERT or NTA assessment material.</p><Link href="/contact">Report a factual issue <span aria-hidden="true">→</span></Link></div></div></section>
  </main>;
}
