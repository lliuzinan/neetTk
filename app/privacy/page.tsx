import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MedQGo privacy policy covering analytics, revision-workbook waitlist emails, and data use.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how MedQGo collects and uses information when students browse NEET Biology revision pages or join the revision-workbook early access list."
      sections={[
        {
          title: "Information We Collect",
          body: [
            "When you browse MedQGo, we may collect basic analytics information such as page views, device category, country or region, referring pages, and engagement events through Google Analytics 4.",
            "When you join the revision-workbook early-access form, we collect the email address you submit, the source page, referrer, and browser user agent. This is used to manage early access and understand which pages produce student interest.",
          ],
        },
        {
          title: "How We Use Information",
          body: [
            "Analytics data helps us improve NEET Biology revision pages, prioritize topics, fix technical issues, and understand whether students are finding useful study material.",
            "Waitlist information is used to send or prepare access to the NEET Biology revision workbook. We do not sell your submitted contact information or request a phone number through this form.",
          ],
        },
        {
          title: "Third-Party Services",
          body: [
            "MedQGo uses Google Analytics 4 for traffic measurement, Google AdSense for advertising where enabled, and Supabase for storing waitlist submissions. These services may process data according to their own privacy and security policies.",
            "If you want a waitlist record removed, contact us with the email address used in the form. You can also use browser controls or privacy settings to limit some analytics collection where those controls are available.",
          ],
        },
        {
          title: "Advertising",
          body: [
            "If Google ads are served on MedQGo, Google and its partners may use cookies or similar technologies to deliver and measure ads, subject to applicable consent requirements.",
            "You can manage ad personalisation through Google Ads Settings. Where consent is required for advertising cookies or personalised ads, MedQGo will use an appropriate consent solution before serving those ads.",
          ],
        },
        {
          title: "Cookie Consent",
          body: [
            "Where consent is required for advertising or analytics cookies, MedQGo uses the consent message and controls supplied through its advertising provider. Your choices are presented before the applicable consent-dependent processing takes place.",
            "You can also use browser controls or privacy settings to manage cookies and local storage on your device.",
          ],
        },
      ]}
    />
  );
}
