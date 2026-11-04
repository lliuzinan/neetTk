import { PrintWorkbook } from "@/components/PrintWorkbook";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absoluteUrl } from "@/lib/content";
import { ogImage } from "@/lib/seo";

const image = ogImage("NEET Biology Revision Workbook", "Independent revision checklists and study resources");
export const metadata: Metadata = {
  title: "Free Biology Explanation Record PDF | MedQGo",
  description: "Download a free two-page explanation record, use the editable HTML version, or print a Biology recall-sheet sample. No registration required.",
  alternates: { canonical: "/neet-biology-pdf" },
  openGraph: { title: "NEET Biology Revision Workbook", description: "Independent revision checklists and study resources.", url: absoluteUrl("/neet-biology-pdf"), siteName: "MedQGo", type: "website", images: [{ url: image, width: 1200, height: 630, alt: "NEET Biology revision workbook" }] },
  twitter: { card: "summary_large_image", title: "NEET Biology Revision Workbook", description: "Independent revision checklists and study resources.", images: [image] },
};

export default function NeetBiologyPdfPage() {
  return <main className="page pdfLanding">
    <header className="pageHeader"><Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-biology-pdf", label: "Revision workbook" }]} /><Link href="/" className="backLink">Home</Link><p className="eyebrow">Revision workbook</p><h1>NEET Biology revision workbook</h1><p>Download the free explanation record or use the recall-sheet sample below. Core resources need no registration. No material is presented as official NCERT, NTA, or NEET content.</p><EditorialByline /></header>
    <section className="contentBand" aria-labelledby="record-download-title">
      <p className="eyebrow">Available now / Free download</p><h2 id="record-download-title">Keep a record of your own explanation</h2>
      <p>A two-page blank worksheet for your conclusion, evidence, assumptions, reasoning, uncertainties, corrections and next review. Print it and write by hand; it does not contain answers or a scored assessment.</p>
      <p><a className="primaryButton" href="/downloads/medqgo-explanation-record.pdf" download>Download blank record (PDF, 2 pages)</a></p>
      <p><Link href="/neet-ug/biology/learn/inheritance#explanation-record">Use the same prompts in editable HTML →</Link> Save in this browser, back up your notes, or print your completed explanation.</p>
    </section>
    <section className="workbookSample" aria-labelledby="free-sample-title">
      <div className="workbookSampleIntro"><p className="eyebrow">Free sample</p><h2 id="free-sample-title">A 12-minute gene-expression recall sheet</h2><p>Use this after reading the relevant NCERT section. It is designed to reveal whether you can connect a sequence, its working copy, and the final product without relying on a memorised list.</p></div>
      <PrintWorkbook />
      <div className="sampleSteps">
        <section><span>1</span><h3>Draw the information route</h3><p>On blank paper, write three boxes: DNA, RNA, and protein. Add arrows in the direction information is used. Say what is made at each arrow before checking your notes.</p></section>
        <section><span>2</span><h3>Separate the two jobs</h3><p>Write one sentence for transcription and one for translation. Your test is simple: each sentence must name both the starting material and the product.</p></section>
        <section><span>3</span><h3>Use the comparison check</h3><table><thead><tr><th scope="col">Process</th><th scope="col">Template</th><th scope="col">Immediate product</th></tr></thead><tbody><tr><td>Transcription</td><td>DNA</td><td>RNA</td></tr><tr><td>Translation</td><td>mRNA</td><td>Polypeptide</td></tr></tbody></table></section>
        <section><span>4</span><h3>Close with one explanation</h3><p>Explain aloud why changing a DNA sequence can affect a protein, while keeping in mind that not every change has the same outcome. Then compare your wording with the full revision guide.</p><Link href="/neet-ug/biology/dna-rna-replication-transcription-translation" className="textLink">Read the DNA, RNA and protein guide</Link></section>
      </div>
      <p className="sampleNote">This is an original MedQGo revision exercise. It is not an extract from NCERT, NTA, or a coaching resource.</p>
    </section>
    <section className="splitContent"><div className="contentBand"><h2>What the workbook will add</h2><ul className="seoList"><li>Topic-based concept maps for Biology revision.</li><li>Common-confusion checklists to use alongside NCERT.</li><li>Short recall routines for a focused revision session.</li><li>Clear source and update information for every published resource.</li></ul></div><div className="contentBand"><h2>Join early access</h2><p>Use the free sample first. Early access is for readers who would like updates when more printable resources are ready.</p><WaitlistForm /></div></section>
  </main>;
}
