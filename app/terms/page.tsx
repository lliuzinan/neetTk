import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "MedQGo terms of use for NEET Biology revision pages and early access learning resources.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These Terms of Use apply to MedQGo NEET Biology revision pages and early access learning-resource forms."
      sections={[
        {
          title: "Educational Use",
          body: [
            "MedQGo provides independent educational revision material for NEET-UG Biology preparation. The content is intended for revision and concept checking. It is not official NCERT, NTA, or NEET material.",
            "Students should use MedQGo alongside NCERT textbooks, school learning, coaching material, and official exam guidance. We do not guarantee exam results or admission outcomes.",
          ],
        },
        {
          title: "Content Accuracy",
          body: [
            "We try to keep revision content and topic mapping accurate. However, educational content may contain errors or need updates. If you find an issue, contact us with the page URL and a clear explanation.",
            "MedQGo may update, remove, or revise pages at any time as the revision library develops.",
          ],
        },
        {
          title: "Acceptable Use",
          body: [
            "You may use MedQGo for personal study. Do not scrape the site at scale, republish the revision library as your own, interfere with site operation, or misuse the waitlist form.",
            "Submitting the waitlist form requires your agreement to the stated early-access email processing, these Terms of Use, and the Privacy Policy. You may ask us to remove a waitlist record using the contact details on the Contact page.",
          ],
        },
      ]}
    />
  );
}
