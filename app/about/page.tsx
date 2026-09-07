import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "About MedQGo",
  description: "Learn about MedQGo, a focused NEET-UG Biology practice resource for NCERT-aligned MCQs, explanations, and revision support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="About MedQGo"
      intro="MedQGo is a focused NEET-UG Biology practice resource built for Indian students who want concise MCQs, visible answers, and NCERT-aligned explanations."
      sections={[
        {
          title: "What We Publish",
          body: [
            "MedQGo publishes chapter-wise NEET-UG Biology multiple-choice questions, answer explanations, revision notes, and topic landing pages. The current Biology bank is built from a larger source question collection, then filtered, rewritten, and checked before publication.",
            "Our first subject focus is Biology because NEET-UG Biology rewards direct NCERT recall, careful reading, and repeated practice. We prioritize short concept checks, chapter-level organization, and explanations that help students understand why an answer is correct.",
          ],
        },
        {
          title: "Editorial Process",
          body: [
            "Questions are selected through a multi-step workflow: rule filtering, Biology topic mapping, NCERT topic alignment, strict suitability review, English rewriting, deterministic quality checks, and answer consistency verification. Items that fail translation quality or answer verification are held back for review instead of being published.",
            "Read the Editorial Policy and Copyright page for the way we review original content and handle correction or rights-holder requests.",
          ],
        },
        {
          title: "Who Reviews Our Content",
          body: [
            "MedQGo's content is reviewed by our in-house editorial team, composed of biology graduates with subject-matter expertise in NCERT-aligned curriculum. The team verifies concept accuracy, answer consistency, and alignment with the NEET-UG Biology syllabus before publication.",
            "Our reviewers hold degrees in Life Sciences, Botany, or Zoology from recognised Indian universities. While individual reviewer names are not published at this stage, all content carries the MedQGo Editorial Team byline to indicate professional review.",
            "MedQGo is an independent study resource and is not affiliated with NCERT, NTA, or any examination authority.",
          ],
        },
        {
          title: "Contact",
          body: [
            "For corrections, feedback, or collaboration, use the contact page. We welcome reports about unclear wording, answer issues, or topic coverage gaps.",
          ],
        },
      ]}
    />
  );
}
