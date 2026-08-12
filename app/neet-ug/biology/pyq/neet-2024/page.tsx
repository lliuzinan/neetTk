import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { getPyqRevisionFaq, PyqRevisionGuide } from "@/components/PyqRevisionGuide";
import { absoluteUrl, getPyqQuestions } from "@/lib/content";
import { DEFAULT_OG_IMAGE, PYQ_LAST_UPDATED_DISPLAY, PYQ_LAST_UPDATED_ISO } from "@/lib/seo";

const pagePath = "/neet-ug/biology/pyq/neet-2024";

export const metadata: Metadata = {
  title: "NEET 2024 Biology Question Paper with Solutions",
  description:
    "Practice NEET 2024 Biology PYQs with answers and NCERT-aligned explanations. Code T1 English Biology questions from the official paper, reviewed for OCR quality.",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "NEET 2024 Biology Question Paper with Solutions",
    description:
      "Practice NEET 2024 Biology previous year questions with answers and NCERT-aligned explanations.",
    url: absoluteUrl(pagePath),
    siteName: "MedQGo",
    type: "article",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "NEET 2024 Biology PYQ with solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET 2024 Biology Question Paper with Solutions",
    description: "Practice NEET 2024 Biology PYQs with answers and NCERT-aligned explanations.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default async function Neet2024BiologyPyqPage() {
  const questions = await getPyqQuestions(2024);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "NEET 2024 Biology Question Paper with Solutions",
      url: absoluteUrl(pagePath),
      inLanguage: "en-IN",
      dateModified: PYQ_LAST_UPDATED_ISO,
      about: {
        "@type": "Course",
        name: "NEET-UG Biology",
        educationalLevel: "Higher secondary",
      },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: questions.length,
        itemListElement: questions.slice(0, 50).map((question, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `NEET 2024 Biology Question ${question.questionNumber}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: getPyqRevisionFaq(2024).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/neet-ug/biology", label: "NEET Biology" },
          { href: pagePath, label: "NEET 2024 PYQ" },
        ]} />
        <Link href="/neet-ug/biology" className="backLink">NEET Biology</Link>
        <p className="eyebrow">NEET 2024 PYQ</p>
        <h1>NEET 2024 Biology Question Paper with Solutions</h1>
        <p>
          Practice {questions.length} reviewed Biology questions from the NEET 2024 Code T1 English paper with official answers and NCERT-aligned explanations.
        </p>
        <p className="updatedStamp">Last updated: {PYQ_LAST_UPDATED_DISPLAY}</p>
        <EditorialByline lastUpdated={PYQ_LAST_UPDATED_DISPLAY} />
      </header>

      <PdfCta source="neet_2024_pyq" />

      <PyqRevisionGuide year={2024} />

      <div className="pyqList">
        {questions.map((question) => {
          const answerText = question.options[question.correctOption];
          return (
            <article className="mcqCard pyqItem" key={question.id}>
              <p className="eyebrow">Question {question.questionNumber} · {question.topic}</p>
              <h2>{question.stem}</h2>
              <div className="options">
                {(["A", "B", "C", "D"] as const).map((key) => (
                  <div className={key === question.correctOption ? "option correct" : "option"} key={key}>
                    <strong>{key}</strong>
                    <span>{question.options[key]}</span>
                  </div>
                ))}
              </div>
              <div className="answerBox">
                <h3>Answer: {question.correctOption}. {answerText}</h3>
                <p>{question.explanation}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
