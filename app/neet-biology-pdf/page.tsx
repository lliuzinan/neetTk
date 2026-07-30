import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Free NEET Biology MCQ PDF",
  description: "Join early access for a free NEET Biology MCQ PDF sample with answers and NCERT-aligned explanations.",
  alternates: { canonical: "/neet-biology-pdf" },
  openGraph: {
    title: "Free NEET Biology MCQ PDF",
    description: "Get early access to a free NEET Biology MCQ PDF sample with answers and explanations.",
    url: "/neet-biology-pdf",
    siteName: "MedQGo",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Free NEET Biology MCQ PDF",
    description: "Join early access for a free NEET Biology MCQ PDF sample.",
  },
};

export default function NeetBiologyPdfPage() {
  return (
    <main className="page pdfLanding">
      <header className="pageHeader">
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">Free PDF sample</p>
        <h1>Free NEET Biology MCQ PDF</h1>
        <p>
          Join early access for a chapter-wise NEET Biology MCQ PDF sample with answers and NCERT-aligned explanations.
        </p>
      </header>

      <section className="splitContent">
        <div className="contentBand">
          <h2>What you will get</h2>
          <ul className="seoList">
            <li>Free sample of NEET-UG Biology MCQs with answers.</li>
            <li>NCERT-aligned explanations for quick revision.</li>
            <li>Early access when the larger chapter-wise PDF pack is ready.</li>
          </ul>
        </div>
        <div className="contentBand">
          <h2>Join early access</h2>
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
