import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MedQGo privacy policy covering analytics, waitlist submissions, email, optional WhatsApp numbers, and data use.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how MedQGo collects and uses information when students browse NEET Biology practice pages or join the PDF early access list."
      sections={[
        {
          title: "Information We Collect",
          body: [
            "When you browse MedQGo, we may collect basic analytics information such as page views, device category, country or region, referring pages, and engagement events through Google Analytics 4.",
            "When you join the PDF or waitlist form, we collect the email address you submit, optional name, optional WhatsApp number, source page, referrer, and browser user agent. This is used to manage early access and understand which pages produce student interest.",
          ],
        },
        {
          title: "How We Use Information",
          body: [
            "Analytics data helps us improve NEET Biology pages, prioritize topics, fix technical issues, and understand whether students are finding useful practice material.",
            "Waitlist information is used to send or prepare access to the NEET Biology PDF sample, future chapter-wise MCQ resources, and related product updates. We do not sell your submitted contact information.",
          ],
        },
        {
          title: "Third-Party Services",
          body: [
            "MedQGo uses Google Analytics 4 for traffic measurement and Supabase for storing waitlist submissions. These services may process data according to their own privacy and security policies.",
            "You can use browser controls, ad blockers, or privacy settings to limit some analytics collection. If you want a waitlist record removed, contact us with the email address used in the form.",
          ],
        },
      ]}
    />
  );
}
