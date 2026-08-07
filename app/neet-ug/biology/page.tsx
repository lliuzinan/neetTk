import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, getQuestionPath, getQuestions, getTopicPath, getTopics } from "@/lib/content";
import { DEFAULT_OG_IMAGE, INDEXABLE_TOPIC_MIN_QUESTIONS, LAST_UPDATED_ISO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NEET Biology Chapter-wise MCQs",
  description: "Browse chapter-wise NEET-UG Biology MCQs with answers, NCERT-aligned explanations, and free topic practice pages.",
  alternates: { canonical: "/neet-ug/biology" },
  openGraph: {
    title: "NEET Biology Chapter-wise MCQs",
    description: "Browse chapter-wise NEET-UG Biology MCQs with answers, NCERT-aligned explanations, and free topic practice pages.",
    url: absoluteUrl("/neet-ug/biology"),
    siteName: "MedQGo",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "NEET Biology Chapter-wise MCQs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET Biology Chapter-wise MCQs",
    description: "Browse chapter-wise NEET-UG Biology MCQs with answers and NCERT-aligned explanations.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default async function BiologyTopicsPage() {
  const [questionList, topicList] = await Promise.all([getQuestions(), getTopics()]);
  const primaryTopics = topicList.filter((topic) => topic.questionCount >= INDEXABLE_TOPIC_MIN_QUESTIONS);
  const growingTopics = topicList.filter((topic) => topic.questionCount < INDEXABLE_TOPIC_MIN_QUESTIONS);
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NEET Biology Chapter-wise MCQs",
    url: absoluteUrl("/neet-ug/biology"),
    inLanguage: "en-IN",
    dateModified: LAST_UPDATED_ISO,
    about: {
      "@type": "Course",
      name: "NEET-UG Biology",
      educationalLevel: "Higher secondary",
      provider: { "@type": "Organization", name: "MedQGo", url: absoluteUrl("/") },
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: primaryTopics.length,
      itemListElement: primaryTopics.map((topic, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${topic.name} MCQs`,
        url: absoluteUrl(getTopicPath(topic)),
      })),
    },
  };
  const questionListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NEET Biology MCQs with Answers",
    numberOfItems: questionList.length,
    itemListElement: questionList.slice(0, 50).map((question, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: question.stem,
      url: absoluteUrl(getQuestionPath(question)),
    })),
  };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([itemListLd, questionListLd]) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/neet-ug/biology", label: "NEET Biology" },
        ]} />
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">NEET-UG Biology</p>
        <h1>NCERT topic-wise Biology MCQs</h1>
        <p>
          Start with {questionList.length} verified 4-option questions across NCERT-aligned Biology topics. Stronger chapters are listed first for practice and indexing.
        </p>
        <EditorialByline />
      </header>

      <section className="contentBand pyqPromo">
        <p className="eyebrow">Previous year questions</p>
        <h2>NEET Biology PYQs with solutions</h2>
        <p>
          Practice reviewed Biology questions from the NEET 2025, 2024, 2023, and 2022 English papers with official answers and NCERT-aligned explanations.
        </p>
        <Link href="/neet-ug/biology/pyq/neet-2025" className="primaryButton">Practice NEET 2025 PYQs</Link>
        <Link href="/neet-ug/biology/pyq/neet-2024" className="primaryButton">Practice NEET 2024 PYQs</Link>
        <Link href="/neet-ug/biology/pyq/neet-2023" className="primaryButton">Practice NEET 2023 PYQs</Link>
        <Link href="/neet-ug/biology/pyq/neet-2022" className="primaryButton">Practice NEET 2022 PYQs</Link>
      </section>

      <PdfCta source="biology_index" />

      <div className="topicGrid">
        {primaryTopics.map((topic) => (
          <Link href={getTopicPath(topic)} className="topicCard" key={topic.id}>
            <span>{topic.questionCount} MCQs</span>
            <h2>{topic.name}</h2>
            <p>{topic.ncertRef}</p>
          </Link>
        ))}
      </div>
      {growingTopics.length > 0 && (
        <section className="contentBand topicQueue">
          <h2>Growing topics</h2>
          <p>These chapters are live for users but kept out of the main SEO push until they have more verified MCQs.</p>
          <div className="miniLinks">
            {growingTopics.map((topic) => (
              <Link href={getTopicPath(topic)} key={topic.id}>
                {topic.name} ({topic.questionCount} MCQs)
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
