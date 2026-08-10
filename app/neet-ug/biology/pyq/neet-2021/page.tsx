import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, getPyqQuestions } from "@/lib/content";
import { DEFAULT_OG_IMAGE, LAST_UPDATED_DISPLAY, LAST_UPDATED_ISO } from "@/lib/seo";

const pagePath = "/neet-ug/biology/pyq/neet-2021";

export const metadata: Metadata = {
  title: "NEET 2021 Biology Question Paper with Solutions",
  description:
    "Practice NEET 2021 Biology PYQs with answers and NCERT-aligned explanations. Code M1 Biology questions checked against the official final answer key.",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "NEET 2021 Biology Question Paper with Solutions",
    description:
      "Practice NEET 2021 Biology previous year questions with answers and NCERT-aligned explanations.",
    url: absoluteUrl(pagePath),
    siteName: "MedQGo",
    type: "article",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "NEET 2021 Biology PYQ with solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET 2021 Biology Question Paper with Solutions",
    description: "Practice NEET 2021 Biology PYQs with answers and NCERT-aligned explanations.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default async function Neet2021BiologyPyqPage() {
  const questions = await getPyqQuestions(2021);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "NEET 2021 Biology Question Paper with Solutions",
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
          name: `NEET 2021 Biology Question ${question.questionNumber}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are these NEET 2021 Biology answers checked with the official key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This page uses the NEET 2021 Code M1 Biology question paper and checks answers against the official final answer key before publication.",
          },
        },
        {
          "@type": "Question",
          name: "How should I use NEET 2021 Biology PYQs for revision?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solve the question first, check the answer, then connect the explanation to the NCERT concept. Pay special attention to ecology, genetics, human physiology, and biotechnology questions.",
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
          { href: pagePath, label: "NEET 2021 PYQ" },
        ]} />
        <Link href="/neet-ug/biology" className="backLink">NEET Biology</Link>
        <p className="eyebrow">NEET 2021 PYQ</p>
        <h1>NEET 2021 Biology Question Paper with Solutions</h1>
        <p>
          Practice {questions.length} reviewed Biology questions from the NEET 2021 Code M1 paper with official answers and NCERT-aligned explanations.
        </p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>

      <PdfCta source="neet_2021_pyq" />

      <section className="contentBand">
        <h2>How to use this PYQ set</h2>
        <p>
          Use this older NEET paper to spot NCERT lines that still repeat in modern Biology papers. Write down the concept behind each mistake instead of memorising only the option letter.
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
