import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GoogleAdSense } from "@/components/GoogleAdSense";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { absoluteUrl, siteConfig } from "@/lib/content";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "NEET Biology Revision Notes | MedQGo",
    template: "%s | MedQGo",
  },
  description: siteConfig.description,
  keywords: [
    "NEET-UG Biology",
    "NEET Biology revision",
    "NCERT Biology revision notes",
    "NEET UG Biology study guide",
    "Biology study resources India",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en-IN": absoluteUrl("/"),
    },
  },
  openGraph: {
    title: "NEET Biology Revision Notes",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "MedQGo NEET Biology revision notes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET Biology Revision Notes",
    description: siteConfig.description,
    images: [DEFAULT_OG_IMAGE],
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
      <head>
        <GoogleAdSense />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
