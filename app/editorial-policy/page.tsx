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
          title: "Our Review Process",
          body: [
            "Every question and note on MedQGo goes through a structured review process before publication:",
            "1. Topic Mapping — Each item is mapped to a specific NCERT chapter and learning objective.",
            "2. Concept Verification — The editorial team checks that the question tests the intended concept and that all options are plausible.",
            "3. Answer Consistency — The correct answer is verified against NCERT text and standard reference sources.",
            "4. Language Review — Questions are rewritten for clarity, and explanations are checked for accuracy and readability.",
            "5. Final Quality Check — A deterministic validation pass ensures no formatting errors, broken links, or metadata issues.",
          ],
        },
        {
          title: "Who Reviews Our Content",
          body: [
            "MedQGo's content is reviewed by our in-house editorial team, composed of biology graduates with subject-matter expertise in NCERT-aligned curriculum. The team holds degrees in Life Sciences, Botany, or Zoology from recognised Indian universities.",
            "All published content carries the MedQGo Editorial Team byline. Individual reviewer names are not published at this stage, but the team maintains a record of which pages were reviewed and when.",
          ],
        },
        {
          title: "Corrections and Updates",
          body: [
            "To report a possible error, use the Contact page and include the page URL, question number where relevant, the proposed correction, and supporting NCERT or official-reference details. We review actionable reports and update the affected page when appropriate.",
            "Dates displayed on pages show the latest editorial update. They do not imply endorsement by an examination authority.",
            "MedQGo is an independent study resource and is not affiliated with NCERT, NTA, or any examination authority.",
          ],
        },
      ]}
    />
  );
}
