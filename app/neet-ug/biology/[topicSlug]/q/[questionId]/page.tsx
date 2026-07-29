import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, findQuestion, findQuestionsByTopic, findTopic, getQuestionPath, getQuestions } from "@/lib/content";
import { questionMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ topicSlug: string; questionId: string }>;
}

export async function generateStaticParams() {
  const questionList = await getQuestions();
  return questionList.map((question) => ({ topicSlug: question.topicSlug, questionId: question.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { questionId } = await params;
  const question = await findQuestion(questionId);
  if (!question) return {};

  return questionMetadata(question);
}

export default async function QuestionPage({ params }: Props) {
  const { topicSlug, questionId } = await params;
  const question = await findQuestion(questionId);
  const topic = await findTopic(topicSlug);
  if (!question || !topic || question.topicSlug !== topicSlug) notFound();

  const related = (await findQuestionsByTopic(topicSlug)).filter((item) => item.id !== question.id).slice(0, 5);
  const answerText = question.options[question.correctOption];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: absoluteUrl("/neet-ug/biology") },
        { "@type": "ListItem", position: 3, name: topic.name, item: absoluteUrl(`/neet-ug/biology/${topic.slug}`) },
        { "@type": "ListItem", position: 4, name: "Question", item: absoluteUrl(getQuestionPath(question)) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Quiz",
      name: `${question.topic} NEET-UG Biology MCQ`,
      educationalLevel: "Higher secondary",
      assesses: "NEET-UG Biology",
      about: {
        "@type": "Thing",
        name: question.topic,
      },
      educationalAlignment: {
        "@type": "AlignmentObject",
        alignmentType: "educationalSubject",
        targetName: "NCERT Biology",
        educationalFramework: "NEET-UG",
      },
      hasPart: {
        "@type": "Question",
        eduQuestionType: "Flashcard",
        about: {
          "@type": "Thing",
          name: question.topic,
        },
        text: question.stem,
        suggestedAnswer: Object.values(question.options).map((text) => ({ "@type": "Answer", text })),
        acceptedAnswer: { "@type": "Answer", text: answerText },
      },
    },
  ];

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="pageHeader compact">
        <Link href={`/neet-ug/biology/${topic.slug}`} className="backLink">{topic.name}</Link>
        <p className="eyebrow">{question.ncertRef}</p>
        <h1>{question.topic} NEET-UG Biology MCQ</h1>
      </header>

      <article className="mcqCard">
        <p className="stem">{question.stem}</p>
        <div className="options">
          {(["A", "B", "C", "D"] as const).map((key) => (
            <div className={key === question.correctOption ? "option correct" : "option"} key={key}>
              <strong>{key}</strong>
              <span>{question.options[key]}</span>
            </div>
          ))}
        </div>
        <div className="answerBox">
          <h2>Correct answer: {question.correctOption}. {answerText}</h2>
          <p>{question.explanation}</p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="contentBand">
          <h2>More {topic.name} MCQs</h2>
          <div className="miniLinks">
            {related.map((item) => (
              <Link href={getQuestionPath(item)} key={item.id}>{item.stem}</Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
