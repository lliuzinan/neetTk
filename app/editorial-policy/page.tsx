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
          title: "Original MedQGo Practice Content",
          body: [
            "MedQGo's topic-wise MCQs, notes, practice mode, and PDF sample are created as independent learning resources. Before publication, questions are filtered for Biology relevance, mapped to an NCERT topic, rewritten in English for NEET-UG practice, checked for answer consistency, and reviewed for clarity.",
            "A question is not published when its wording, options, answer, topic mapping, or explanation fails the applicable checks. We revise or remove material when a credible correction identifies an error.",
          ],
        },
        {
          title: "Corrections and Updates",
          body: [
            "To report a possible error, use the Contact page and include the page URL, question number where relevant, the proposed correction, and supporting NCERT or official-reference details. We review actionable reports and update the affected page when appropriate.",
            "Dates displayed on pages show the latest editorial update. They do not imply endorsement by an examination authority.",
          ],
        },
      ]}
    />
  );
}
