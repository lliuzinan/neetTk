import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absoluteUrl } from "@/lib/content";
import { ogImage } from "@/lib/seo";

const image = ogImage("NEET Biology Revision Workbook", "Independent revision checklists and study resources");
export const metadata: Metadata = {
  title: "NEET Biology Revision Workbook Early Access",
  description: "Join early access for MedQGo's independently prepared NEET Biology revision workbook and printable study resources.",
  alternates: { canonical: "/neet-biology-pdf" },
  openGraph: { title: "NEET Biology Revision Workbook", description: "Independent revision checklists and study resources.", url: absoluteUrl("/neet-biology-pdf"), siteName: "MedQGo", type: "website", images: [{ url: image, width: 1200, height: 630, alt: "NEET Biology revision workbook" }] },
  twitter: { card: "summary_large_image", title: "NEET Biology Revision Workbook", description: "Independent revision checklists and study resources.", images: [image] },
};

export default function NeetBiologyPdfPage() {
  return <main className="page pdfLanding">
    <header className="pageHeader"><Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-biology-pdf", label: "Revision workbook" }]} /><Link href="/" className="backLink">Home</Link><p className="eyebrow">Revision workbook early access</p><h1>NEET Biology revision workbook</h1><p>Join early access for independently prepared printable revision checklists and topic-based study resources. No material is presented as official NCERT, NTA, or NEET content.</p><EditorialByline /></header>
    <section className="splitContent"><div className="contentBand"><h2>Planned resource focus</h2><ul className="seoList"><li>Topic-based concept maps for Biology revision.</li><li>Common-confusion checklists to use alongside NCERT.</li><li>Short recall routines for before a mock test.</li><li>Clear source and update information for every published resource.</li></ul></div><div className="contentBand"><h2>Join early access</h2><WaitlistForm /></div></section>
  </main>;
}
