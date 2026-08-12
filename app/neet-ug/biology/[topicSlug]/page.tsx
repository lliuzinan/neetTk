import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, findQuestionsByTopic, findTopic, getQuestionPath, getTopics } from "@/lib/content";
import { LAST_UPDATED_DISPLAY, LAST_UPDATED_ISO, topicMetadata } from "@/lib/seo";
import { getTopicSeoContent } from "@/lib/topicSeo";

interface Props {
  params: Promise<{ topicSlug: string }>;
}

export async function generateStaticParams() {
  const topicList = await getTopics();
  return topicList.map((topic) => ({ topicSlug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const topic = await findTopic(topicSlug);
  if (!topic) return {};

  return topicMetadata(topic);
}

export default async function TopicPage({ params }: Props) {
  const { topicSlug } = await params;
  const topic = await findTopic(topicSlug);
  if (!topic) notFound();

  const topicQuestions = await findQuestionsByTopic(topic.slug);
  const seoContent = getTopicSeoContent(topic.slug);
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: absoluteUrl("/neet-ug/biology") },
      { "@type": "ListItem", position: 3, name: topic.name, item: absoluteUrl(`/neet-ug/biology/${topic.slug}`) },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
      "@type": "FAQPage",
      datePublished: LAST_UPDATED_ISO,
      dateModified: LAST_UPDATED_ISO,
    mainEntity: seoContent.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbLd, faqLd]) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/neet-ug/biology", label: "NEET Biology" },
          { href: `/neet-ug/biology/${topic.slug}`, label: topic.name },
        ]} />
        <Link href="/neet-ug/biology" className="backLink">All Biology topics</Link>
        <p className="eyebrow">{topic.ncertRef}</p>
        <h1>{topic.name} MCQs for NEET-UG Biology</h1>
        <p>
          Revise this NCERT area with concise 4-option MCQs. Explanations are visible on each question page so students and search engines can read the learning value clearly.
        </p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>

      <section className="contentBand">
        <h2>High-yield NCERT focus</h2>
        <ul className="seoList">
          {seoContent.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="contentBand splitContent">
        <div>
          <h2>Common NEET traps</h2>
          <ul className="seoList">
            {seoContent.traps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Practice plan</h2>
          <p>{seoContent.practicePlan}</p>
        </div>
      </section>

      <section className="contentBand faqBlock">
        <h2>{topic.name} FAQs</h2>
        {seoContent.faqs.map((faq) => (
          <div className="faqItem" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      {topicQuestions.length >= 5 && (
        <section className="contentBand practicePromo">
          <p className="eyebrow">Interactive practice</p>
          <h2>Try this chapter without seeing the answer first</h2>
          <p>Answer each question, check the explanation, and keep your session score and mistakes on this device.</p>
          <Link href={`/neet-ug/biology/practice/${topic.slug}`} className="primaryButton">Practice {topic.name}</Link>
        </section>
      )}

      <PdfCta source="topic_page" topicSlug={topic.slug} />

      <div className="questionList">
        {topicQuestions.map((question, index) => (
          <Link href={getQuestionPath(question)} className="questionRow" key={question.id}>
            <span>Q{index + 1} • {question.ncertRef}</span>
            <p>{question.stem}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
