import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, getPyqQuestions } from "@/lib/content";
import { DEFAULT_OG_IMAGE, LAST_UPDATED_DISPLAY, LAST_UPDATED_ISO } from "@/lib/seo";

const pagePath = "/neet-ug/biology/pyq/neet-2022";

export const metadata: Metadata = {
  title: "NEET 2022 Biology Question Paper with Solutions",
  description:
    "Practice NEET 2022 Biology PYQs with answers and NCERT-aligned explanations. Code Q6 English Biology questions checked against the official final answer key.",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "NEET 2022 Biology Question Paper with Solutions",
    description:
      "Practice NEET 2022 Biology previous year questions with answers and NCERT-aligned explanations.",
    url: absoluteUrl(pagePath),
    siteName: "MedQGo",
    type: "article",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "NEET 2022 Biology PYQ with solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET 2022 Biology Question Paper with Solutions",
    description: "Practice NEET 2022 Biology PYQs with answers and NCERT-aligned explanations.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default async function Neet2022BiologyPyqPage() {
  const questions = await getPyqQuestions(2022);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "NEET 2022 Biology Question Paper with Solutions",
      url: absoluteUrl(pagePath),
      inLanguage: "en-IN",
      datePublished: LAST_UPDATED_ISO,
      dateModified: LAST_UPDATED_ISO,
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
          name: `NEET 2022 Biology Question ${question.questionNumber}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are these NEET 2022 Biology answers based on the official key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This page uses the NEET 2022 Code Q6 English question paper as source material and checks answers against the official NTA final answer key.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I solve NEET 2022 Biology PYQs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NEET 2022 Biology PYQs help students identify recurring NCERT concepts across genetics, ecology, plant physiology, biotechnology, and human physiology.",
          },
        },
      ],
    },
  ];

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/neet-ug/biology", label: "NEET Biology" },
          { href: pagePath, label: "NEET 2022 PYQ" },
        ]} />
        <Link href="/neet-ug/biology" className="backLink">NEET Biology</Link>
        <p className="eyebrow">NEET 2022 PYQ</p>
        <h1>NEET 2022 Biology Question Paper with Solutions</h1>
        <p>
          Practice {questions.length} reviewed Biology questions from the NEET 2022 Code Q6 English paper with official answers and NCERT-aligned explanations.
        </p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>

      <PdfCta source="neet_2022_pyq" />

      <section className="contentBand">
        <h2>How to use this PYQ set</h2>
        <p>
          Attempt the questions before reading the explanation. Mark the NCERT concept behind each answer, especially statements-based questions, matching questions, and factual NCERT lines that appear repeatedly in Biology.
        </p>
      </section>

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
