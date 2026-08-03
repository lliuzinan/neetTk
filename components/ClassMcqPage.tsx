import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { PdfCta } from "@/components/PdfCta";
import { getQuestionPath, getTopicPath, type Question, type Topic } from "@/lib/content";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

type Props = {
  className: "Class 11" | "Class 12";
  intro: string;
  source: string;
  bullets: string[];
  topics: Topic[];
  questions: Question[];
};

export function ClassMcqPage({ className, intro, source, bullets, topics, questions }: Props) {
  return (
    <main className="page">
      <header className="pageHeader">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/neet-ug/biology", label: "NEET Biology" },
          { href: "#", label: `NCERT ${className}` },
        ]} />
        <Link href="/neet-ug/biology" className="backLink">NEET Biology topics</Link>
        <p className="eyebrow">NCERT {className} Biology</p>
        <h1>NCERT {className} Biology MCQs for NEET</h1>
        <p>{intro}</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
        <EditorialByline />
      </header>

      <PdfCta source={source} />

      <section className="contentBand">
        <h2>How to use these MCQs for NEET revision</h2>
        <ul className="seoList">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="contentBand">
        <h2>NCERT {className} topic practice</h2>
        <div className="miniLinks">
          {topics.map((topic) => (
            <Link href={getTopicPath(topic)} key={topic.id}>
              {topic.name} ({topic.questionCount} MCQs)
            </Link>
          ))}
        </div>
      </section>

      <section className="contentBand">
        <h2>Sample NCERT {className} MCQs with answers</h2>
        <div className="questionList">
          {questions.slice(0, 10).map((question) => (
            <Link href={getQuestionPath(question)} className="questionRow" key={question.id}>
              <span>{question.topic} • {question.ncertRef}</span>
              <p>{question.stem}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
