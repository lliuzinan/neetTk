import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DominancePatternExplorer } from "@/components/DominancePatternExplorer";
import { learningPath } from "@/lib/inheritanceLearning";

export const metadata: Metadata = {
  title: "Dominance Pattern Explorer | MedQGo",
  description: "Keep a monohybrid cross fixed while comparing complete dominance, incomplete dominance and codominance phenotype groups.",
  robots: { index: false, follow: false },
};

export default function DominancePatternsPage() {
  return (
    <main className="page learningPage">
      <Breadcrumbs items={[
        { href: "/", label: "Home" },
        { href: learningPath, label: "Inheritance learning path" },
        { href: "/neet-ug/biology/tools", label: "Genetics study tools" },
        { href: "/neet-ug/biology/tools/dominance-patterns", label: "Dominance pattern explorer" },
      ]} />
      <header className="learningHero">
        <p className="eyebrow">GENETICS STUDY TOOL</p>
        <h1>One cross, three phenotype relationships</h1>
        <p>Compare what changes when the same offspring genotypes are interpreted under complete dominance, incomplete dominance or codominance.</p>
      </header>
      <DominancePatternExplorer />
      <section className="learningSection" aria-labelledby="dominance-sources">
        <h2 id="dominance-sources">Model and source notes</h2>
        <p>The interface uses an original monohybrid example. Its gamete and genotype probabilities come from the selected parent genotypes; the phenotype categories illustrate three allele-expression models.</p>
        <ul>
          <li><a href="https://ncert.nic.in/textbook/pdf/lebo104.pdf">NCERT Class 12 Biology, Principles of Inheritance and Variation</a> — curriculum reference.</li>
          <li><a href="https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits">OpenStax Biology 2e, Characteristics and Traits</a> — factual cross-check for complete dominance, incomplete dominance and codominance.</li>
        </ul>
        <p>No source questions, figures or tables are reproduced. The Owner confirmed manual review of this dominance-pattern comparison on November 16, 2026; no independent teacher review or reviewer credentials are claimed.</p>
      </section>
      <nav className="learningRoute" aria-label="Continue learning">
        <h2>Continue learning</h2>
        <ol>
          <li><Link href="/neet-ug/biology/tools/monohybrid-cross">Trace the gametes and cross routes</Link> using the full monohybrid explorer.</li>
          <li><Link href="/neet-ug/biology/learn/inheritance">Return to the inheritance learning path</Link> to review segregation and phenotype reasoning.</li>
        </ol>
      </nav>
    </main>
  );
}
