import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Contact MedQGo",
  description: "Contact MedQGo for NEET Biology question corrections, feedback, partnerships, and content review requests.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Contact MedQGo"
      intro="Use this page to reach MedQGo about NEET Biology content, corrections, partnerships, or student resource requests."
      sections={[
        {
          title: "Email",
          body: [
            "For support, corrections, and general questions, email: a9665670@163.com.",
            "When reporting a question issue, include the page URL, the question text, and the reason you think the answer or explanation needs review. This helps us check the item quickly.",
          ],
        },
        {
          title: "Content Corrections",
          body: [
            "MedQGo is actively improving its NEET-UG Biology content. If you find a confusing translation, a possible answer mismatch, or a topic that feels outside NCERT scope, please send the specific page URL for review.",
            "We may update, hide, or re-check questions after receiving credible feedback. Accuracy and usefulness matter more than keeping every page live.",
          ],
        },
        {
          title: "Partnerships",
          body: [
            "For education partnerships, teacher review, PDF distribution, or India-focused NEET preparation collaborations, contact us by email with a short description of the proposal.",
          ],
        },
      ]}
    />
  );
}
