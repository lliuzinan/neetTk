import Link from "next/link";
import type { ReactNode } from "react";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

type Section = {
  title: string;
  body: ReactNode[];
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  lastUpdated?: string;
};

export function InfoPage({ eyebrow, title, intro, sections, lastUpdated = LAST_UPDATED_DISPLAY }: Props) {
  return (
    <main className="page articlePage">
      <header className="pageHeader">
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <p className="updatedStamp">Last updated: {lastUpdated}</p>
      </header>
      <article className="articleBody">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph, index) => (
              <p key={`${section.title}-${index}`}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
