import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "MedQGo terms of use for NEET Biology practice questions, explanations, revision pages, and early access PDF resources.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These Terms of Use apply to MedQGo NEET Biology practice pages, question explanations, revision notes, and PDF early access forms."
      sections={[
        {
          title: "Educational Use",
          body: [
            "MedQGo provides educational practice material for NEET-UG Biology preparation. The content is intended for revision, self-practice, and concept checking. It is not official NCERT, NTA, or NEET material.",
            "Students should use MedQGo alongside NCERT textbooks, school learning, coaching material, and official exam guidance. We do not guarantee exam results or admission outcomes.",
          ],
        },
        {
          title: "Content Accuracy",
          body: [
            "We try to keep questions, answers, explanations, and topic mapping accurate. However, educational content may contain errors or need updates. If you find an issue, contact us with the page URL and a clear explanation.",
            "MedQGo may update, remove, or revise pages at any time as the question bank improves.",
          ],
        },
        {
          title: "Acceptable Use",
          body: [
            "You may use MedQGo for personal study. Do not scrape the site at scale, republish the question bank as your own, interfere with site operation, or misuse the waitlist form.",
            "By using the site or submitting a waitlist form, you agree to these terms and the Privacy Policy.",
          ],
        },
      ]}
    />
  );
}
