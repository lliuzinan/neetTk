import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How MedQGo presents its learning resources and handles corrections.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return <InfoPage eyebrow="Editorial policy" title="Editorial Policy"
    intro="MedQGo publishes independent NEET-UG Biology revision material."
    lastUpdated="October 29, 2026"
    sections={[
      { title: "Publisher and sources", body: ["MedQGo is the publisher of the guides. The resources are independent and are not official NCERT, NTA or NEET material. References are provided so readers can examine the underlying concepts.", "Digital tools, including AI, may assist with research, drafting and publishing. Their use does not constitute an independent human review or an endorsement by an examination authority."] },
      { title: "Review and corrections", body: ["We do not claim that every existing guide has received independent human review. New or substantially revised teaching material is prepared for factual checking and human review before publication.", "To report a possible error, use the Contact page and include the page URL, the proposed correction and a supporting reference. MedQGo can update or remove material when a problem is confirmed."] },
    ]} />;
}
