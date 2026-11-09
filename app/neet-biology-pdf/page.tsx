import { PrintWorkbook } from "@/components/PrintWorkbook";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absoluteUrl } from "@/lib/content";
import { ogImage } from "@/lib/seo";

const image = ogImage("Free Biology study resources", "Explanation record and printable recall sheet");
export const metadata: Metadata = {
  title: "Free Biology Explanation Record and Recall Sheet",
  description: "Download a free two-page explanation record, use the editable HTML version, or print a Biology recall-sheet sample. No registration required.",
  alternates: { canonical: "/neet-biology-pdf" },
  openGraph: { title: "Free Biology explanation record and recall sheet", description: "Download a blank explanation record and use a printable recall sheet.", url: absoluteUrl("/neet-biology-pdf"), siteName: "MedQGo", type: "website", images: [{ url: image, width: 1200, height: 630, alt: "Free Biology study resources" }] },
  twitter: { card: "summary_large_image", title: "Free Biology explanation record and recall sheet", description: "Download a blank explanation record and use a printable recall sheet.", images: [image] },
};

export default function NeetBiologyPdfPage() {
  return <main className="page pdfLanding">
    <header className="pageHeader"><Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-biology-pdf", label: "Free study resources" }]} /><Link href="/" className="backLink">Home</Link><p className="eyebrow">Available study resources</p><h1>Free Biology explanation record and recall sheet</h1><p>Download the blank two-page record, write in the editable version, or print the recall sheet below. These resources are available now without registration and are not official NCERT, NTA, or NEET material.</p><EditorialByline lastUpdated="November 9, 2026" /></header>
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
    <section className="splitContent"><div className="contentBand"><h2>Use what is here now</h2><ul className="seoList"><li>Print the blank PDF and write one explanation with its evidence, assumptions and limits.</li><li>Use the HTML record to save notes in this browser and download your own JSON backup.</li><li>Work through the recall sheet on this page after reading the relevant NCERT section; print the page if you prefer paper.</li><li>Return to the linked guide to check a missing step or correct your explanation.</li></ul></div><div className="contentBand"><h2>Updates on future resources</h2><p>The record and recall sheet above are already free. If you want updates when additional printable resources are ready, you can join the optional list.</p><WaitlistForm /></div></section>
  </main>;
}
