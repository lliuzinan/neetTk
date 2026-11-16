import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { learningPath } from "@/lib/inheritanceLearning";
import styles from "./GeneticsTools.module.css";

export const metadata: Metadata = {
  title: "Genetics Study Tools | MedQGo",
  description: "Explore a cross, compare inheritance patterns in a fictional pedigree, and save your own explanation.",
  robots: { index: false, follow: false },
};

const tools = [
  {
    title: "Monohybrid Cross Explorer",
    question: "I know both parent genotypes.",
    detail: "Trace gametes through a Punnett square and see how individual routes add up to offspring probabilities.",
    action: "Explore a cross",
    href: "/neet-ug/biology/tools/monohybrid-cross",
  },
  {
    title: "Pedigree Pattern Analyzer",
    question: "I have observations from a fictional family.",
    detail: "Compare three inheritance models and identify which explanations the observations can rule out.",
    action: "Compare inheritance patterns",
    href: "/neet-ug/biology/tools/pedigree-analysis",
  },
  {
    title: "Test-Cross Evidence Comparator",
    question: "No recessive offspring appeared. What does that evidence mean?",
    detail: "Compare the probability of the same observed count under AA and Aa, with sample size and model limits visible.",
    action: "Compare evidence",
    href: "/neet-ug/biology/tools/testcross-evidence",
  },
  {
    title: "Dominance Pattern Explorer",
    question: "Why can one genotype distribution produce different phenotype ratios?",
    detail: "Keep parent genotypes and cross probabilities fixed while comparing complete dominance, incomplete dominance and codominance.",
    action: "Compare phenotype models",
    href: "/neet-ug/biology/tools/dominance-patterns",
  },
  {
    title: "Explanation Record",
    question: "I want to write or revisit my reasoning.",
    detail: "Record your conclusion, evidence and assumptions. Restore your work in this browser or download a backup.",
    action: "Open the explanation record",
    href: `${learningPath}#explanation-record`,
  },
];

export default function GeneticsToolsPage() {
  return (
    <main className={`page learningPage ${styles.directory}`}>
      <Breadcrumbs items={[
        { href: "/", label: "Home" },
        { href: learningPath, label: "Inheritance learning path" },
        { href: "/neet-ug/biology/tools", label: "Genetics study tools" },
      ]} />
      <header className={styles.header}>
        <h1>Genetics study tools</h1>
        <p>Choose a starting point, work through the evidence, and keep a record of what you can explain.</p>
      </header>
      <ul className={styles.list} aria-label="Tools by study task">
        {tools.map((tool) => (
          <li className={styles.row} key={tool.href}>
            <p className={styles.question}>{tool.question}</p>
            <div>
              <h2>{tool.title}</h2>
              <p>{tool.detail}</p>
            </div>
            <Link className="secondaryButton" href={tool.href}>{tool.action} <span aria-hidden="true">→</span></Link>
          </li>
        ))}
      </ul>
      <p className={styles.return}><Link href={learningPath}>Return to the inheritance learning path</Link></p>
    </main>
  );
}
