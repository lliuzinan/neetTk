import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How MedQGo creates, reviews, corrects, and labels NEET-UG Biology learning material.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      eyebrow="Editorial policy"
      title="Editorial Policy"
      intro="This policy explains how MedQGo prepares NEET-UG Biology learning material and how students can report a correction."
      sections={[
        {
          title: "Independent MedQGo Revision Content",
          body: [
            "MedQGo publishes independently prepared revision notes, topic guides, and planned printable learning resources. We do not present public material as official NCERT, NTA, or NEET content.",
            "A guide is not published when its wording, topic fit, supporting explanation, or source treatment fails our review. We revise or remove material when a credible correction identifies an error or rights concern.",
          ],
        },
        {
          title: "Quality Checks",
          body: [
            "MedQGo uses structured editorial checks for selected revision resources. These checks include topic mapping, clarity review, deterministic validation for formatting and metadata, and correction review when readers report an issue.",
            "Corrections are prioritised when readers report an issue. We revise or remove material when a credible correction identifies an error.",
          ],
        },
        {
          title: "Corrections and Updates",
          body: [
            "To report a possible error, use the Contact page and include the page URL, the proposed correction, and supporting NCERT or official-reference details. We review actionable reports and update the affected page when appropriate.",
            "Dates displayed on pages show the latest editorial update. They do not imply endorsement by an examination authority.",
            "MedQGo is an independent study resource and is not affiliated with NCERT, NTA, or any examination authority.",
          ],
        },
      ]}
    />
  );
}
