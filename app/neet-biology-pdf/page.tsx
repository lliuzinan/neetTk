import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { WaitlistForm } from "@/components/WaitlistForm";
import { absoluteUrl } from "@/lib/content";
import { ogImage } from "@/lib/seo";

const image = ogImage("Free NEET Biology MCQ PDF", "Chapter-wise sample with answers");

export const metadata: Metadata = {
  title: "Free NEET Biology MCQ PDF",
  description: "Get a free NEET Biology MCQ PDF sample with original questions, answers, NCERT-aligned explanations, and a revision sheet.",
  alternates: { canonical: "/neet-biology-pdf" },
  openGraph: {
    title: "Free NEET Biology MCQ PDF",
    description: "Get a free NEET Biology MCQ sample with answers, explanations, and a revision sheet.",
    url: absoluteUrl("/neet-biology-pdf"),
    siteName: "MedQGo",
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: "Free NEET Biology MCQ PDF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free NEET Biology MCQ PDF",
    description: "Get a free NEET Biology MCQ PDF sample.",
    images: [image],
  },
};

export default function NeetBiologyPdfPage() {
  return (
    <main className="page pdfLanding">
      <header className="pageHeader">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/neet-biology-pdf", label: "Free PDF" },
        ]} />
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">Free PDF sample</p>
        <h1>Free NEET Biology MCQ PDF</h1>
        <p>
          Get a chapter-wise sample of original NEET Biology MCQs with answers, NCERT-aligned explanations, and a one-page revision sheet.
        </p>
        <EditorialByline />
      </header>

      <section className="splitContent">
        <div className="contentBand">
          <h2>What you will get</h2>
          <ul className="seoList">
            <li>30 original, reviewed NEET-UG Biology MCQs.</li>
            <li>Answers and NCERT-aligned explanations for quick revision.</li>
            <li>A compact error-review sheet to use after practice.</li>
            <li>Web practice mode keeps your score and mistakes on this device.</li>
          </ul>
        </div>
        <div className="contentBand">
          <h2>Get the free sample</h2>
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
