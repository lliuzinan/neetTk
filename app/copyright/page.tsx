import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Copyright and Content Requests",
  description: "Copyright, attribution, correction, and content-removal requests for MedQGo learning resources.",
  alternates: { canonical: "/copyright" },
};

export default function CopyrightPage() {
  return (
    <InfoPage
      eyebrow="Copyright"
      title="Copyright and Content Requests"
      intro="MedQGo respects intellectual-property rights and reviews substantiated correction, attribution, and removal requests."
      sections={[
        {
          title: "MedQGo Content",
          body: [
            "Unless otherwise stated, MedQGo's original explanations, topic organization, revision guidance, website design, and PDF sample are provided for personal educational use. Do not reproduce a substantial part of MedQGo's original content or present it as your own without permission.",
          ],
        },
        {
          title: "Exam Names and Previous-Year Material",
          body: [
            "NEET-UG, NTA, and NCERT names and related material may be the property of their respective rights holders. MedQGo is an independent education resource and is not endorsed by, affiliated with, or sponsored by those organizations.",
            "Previous-year-question pages are maintained as labelled revision resources with added explanatory content. They are not official question-paper publications or a substitute for material issued by the examination authority.",
          ],
        },
        {
          title: "Request a Review or Removal",
          body: [
            "For a copyright, attribution, or removal request, contact MedQGo with your name, organization where applicable, the exact URL, a description of the material, your relationship to the rights, and a way to contact you. We will review credible requests and may correct, credit, restrict, or remove content as appropriate.",
            "Use the Contact page for requests and include the subject line 'Copyright request' so it can be routed correctly.",
          ],
        },
      ]}
    />
  );
}
