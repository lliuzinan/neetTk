import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TestcrossLikelihoodComparator } from "@/components/TestcrossLikelihoodComparator";
import { learningPath } from "@/lib/inheritanceLearning";

export const metadata: Metadata = {
  title: "Test-Cross Evidence Comparator | MedQGo",
  description: "Compare the probability of the same test-cross observation under AA and Aa, with assumptions and interpretation limits made explicit.",
  robots: { index: false, follow: false },
};

export default function TestcrossEvidencePage() {
  return (
    <main className="page learningPage">
      <Breadcrumbs items={[
        { href: "/", label: "Home" },
        { href: learningPath, label: "Inheritance learning path" },
        { href: "/neet-ug/biology/tools", label: "Genetics study tools" },
        { href: "/neet-ug/biology/tools/testcross-evidence", label: "Test-cross evidence comparator" },
      ]} />
      <header className="learningHero">
        <p className="eyebrow">GENETICS STUDY TOOL</p>
        <h1>When does a test-cross observation distinguish AA from Aa?</h1>
        <p>Use one fixed tester and one observed count to compare two candidate explanations. The probabilities describe the record assuming each candidate; they do not by themselves tell you the probability that a candidate is true.</p>
      </header>
      <TestcrossLikelihoodComparator />
      <section className="learningSection" aria-labelledby="testcross-sources">
        <h2 id="testcross-sources">Model and source notes</h2>
        <p>This is an original teaching calculator built from Mendelian segregation and the binomial probability model. It is not experimental data, and it does not estimate a real family’s genotype or risk. The assumptions shown above are required for this comparison.</p>
        <ul>
          <li><a href="https://ncert.nic.in/textbook/pdf/lebo104.pdf">NCERT Class 12 Biology, Principles of Inheritance and Variation</a> — curriculum reference for the test-cross and segregation context.</li>
          <li><a href="https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance">OpenStax Biology 2e, Laws of Inheritance</a> — factual cross-check for segregation and probability-based inheritance models.</li>
        </ul>
        <p>Sources inform the underlying concepts; no source questions, figures or tables are reproduced. This new teaching interaction is a local draft awaiting actual review of the calculation, assumptions and interpretation.</p>
      </section>
      <nav className="learningRoute" aria-label="Continue learning">
        <h2>Continue the investigation</h2>
        <ol>
          <li><Link href="/neet-ug/biology/testcross-and-unknown-genotypes">Read the worked Plant U investigation</Link> to see why a recessive offspring changes the inference.</li>
          <li><Link href="/neet-ug/biology/tools/monohybrid-cross">Open the monohybrid explorer</Link> to trace the gametes and offspring combinations directly.</li>
          <li><Link href={`${learningPath}#explanation-record`}>Record your explanation</Link> using observation, deduction and limitation.</li>
        </ol>
      </nav>
    </main>
  );
}
