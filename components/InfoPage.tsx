import Link from "next/link";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

type Section = {
  title: string;
  body: string[];
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
};

export function InfoPage({ eyebrow, title, intro, sections }: Props) {
  return (
    <main className="page articlePage">
      <header className="pageHeader">
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
      </header>
      <article className="articleBody">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
