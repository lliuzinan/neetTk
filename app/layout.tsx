import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { absoluteUrl, siteConfig } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "NEET-UG Biology Question Bank | MedQGo",
    template: "%s | MedQGo",
  },
  description: siteConfig.description,
  keywords: [
    "NEET-UG Biology",
    "NEET Biology MCQ",
    "NCERT Biology questions",
    "NEET UG question bank",
    "Biology practice test India",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en-IN": absoluteUrl("/"),
    },
  },
  openGraph: {
    title: "NEET-UG Biology Question Bank",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET-UG Biology Question Bank",
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
