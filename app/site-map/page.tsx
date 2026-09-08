import type { Metadata } from "next";
import Link from "next/link";
import { getNotePath, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";

export const metadata: Metadata = {
  title: "MedQGo HTML Sitemap",
  description: "Browse MedQGo NEET-UG Biology revision guides, original revision notes, and site information pages.",
  alternates: { canonical: "/site-map" },
};

export default async function SiteMapPage() {
  const [allNotes, allTopics] = await Promise.all([getSeoNotes(), getTopics()]);
  const notes = allNotes.filter((note) => AUTHORED_NOTE_SLUGS.includes(note.slug as (typeof AUTHORED_NOTE_SLUGS)[number]));
  const topics = allTopics.filter((topic) => notes.some((note) => note.topicSlug === topic.slug));
  return (
    <main className="page">
      <header className="pageHeader"><Link href="/" className="backLink">Home</Link><p className="eyebrow">MedQGo sitemap</p><h1>NEET Biology revision sitemap</h1><p>Browse MedQGo's independently prepared revision guides and site information pages.</p></header>
      <section className="contentBand"><h2>Core pages</h2><div className="miniLinks"><Link href="/">MedQGo NEET Biology revision notes</Link><Link href="/neet-ug/biology">NEET Biology revision library</Link><Link href="/neet-biology-pdf">Revision workbook early access</Link><Link href="/about">About MedQGo</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/team">Editorial Team</Link><Link href="/editorial-policy">Editorial Policy</Link><Link href="/copyright">Copyright</Link></div></section>
      <section className="contentBand"><h2>Revision guides</h2><div className="miniLinks">{topics.map((topic) => <Link href={`/neet-ug/biology/${topic.slug}`} key={topic.id}>{topic.name} revision guide</Link>)}</div></section>
      <section className="contentBand"><h2>Revision notes</h2><div className="miniLinks">{notes.map((note) => <Link href={getNotePath(note)} key={note.id}>{note.title}</Link>)}</div></section>
    </main>
  );
}
