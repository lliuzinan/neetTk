import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Publishing and Review",
  description: "Who publishes MedQGo and how to report a content concern.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return <InfoPage eyebrow="Publishing and review" title="Publishing and Review"
    intro="MedQGo is the publisher of this independent Biology revision library."
    lastUpdated="October 29, 2026"
    sections={[
      { title: "Publishing responsibility", body: ["MedQGo publishes and maintains this site. Individual author or reviewer details are included only where their identity, role and participation can be established."] },
      { title: "Review and corrections", body: ["We do not claim that every existing guide has received independent human review. If you find an error or unclear explanation, use the Contact page and include the page URL and a supporting reference."] },
    ]} />;
}
