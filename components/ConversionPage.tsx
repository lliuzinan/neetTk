import Link from "next/link";
import { PdfCta } from "@/components/PdfCta";
import { getQuestionPath, getTopicPath, type Question, type Topic } from "@/lib/content";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  source: string;
  bullets: string[];
  topics: Topic[];
  questions: Question[];
};

export function ConversionPage({ eyebrow, title, intro, source, bullets, topics, questions }: Props) {
  return (
    <main className="page">
      <header className="pageHeader">
        <Link href="/neet-ug/biology" className="backLink">NEET Biology topics</Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
      </header>

      <PdfCta source={source} />

      <section className="contentBand">
        <h2>Why this helps NEET Biology revision</h2>
        <ul className="seoList">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="contentBand">
        <h2>Chapter-wise practice topics</h2>
        <div className="miniLinks">
          {topics.map((topic) => (
            <Link href={getTopicPath(topic)} key={topic.id}>
              {topic.name} ({topic.questionCount} MCQs)
            </Link>
          ))}
        </div>
      </section>

      <section className="contentBand">
        <h2>Sample MCQs with answers</h2>
        <div className="questionList">
          {questions.slice(0, 8).map((question) => (
            <Link href={getQuestionPath(question)} className="questionRow" key={question.id}>
              <span>{question.topic}</span>
              <p>{question.stem}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
