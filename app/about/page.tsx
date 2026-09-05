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
            "Previous-year-question revision pages are labelled separately from MedQGo's original practice content. They include their exam-year context and independent NCERT-aligned explanations. Read the Editorial Policy and Copyright page for the way we label, review, and handle requests about this material.",
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
