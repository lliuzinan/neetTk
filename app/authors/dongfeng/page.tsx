import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { editorialReviewer } from "@/lib/editorialReviewer";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DongFeng | Biology Revision Guide Author",
  description: "Author profile for DongFeng, the named author of MedQGo's independently prepared NEET-UG Biology revision guides.",
  alternates: { canonical: "/authors/dongfeng" },
};

export default function DongFengAuthorPage() {
  const authorLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: editorialReviewer.authorName,
      jobTitle: editorialReviewer.authorRole,
      url: "https://medqgo.com/authors/dongfeng",
      worksFor: { "@type": "Organization", name: "MedQGo" },
    },
  };

  return (
    <main className="page articlePage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorLd) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/team", label: "Editorial Team" }, { href: "/authors/dongfeng", label: "DongFeng" }]} />
        <Link href="/team" className="backLink">Editorial Team</Link>
        <p className="eyebrow">Author profile</p>
        <h1>{editorialReviewer.authorName}</h1>
        <p>{editorialReviewer.authorRole}</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
      </header>
      <article className="articleBody">
        <section>
          <h2>Role at MedQGo</h2>
          <p>DongFeng is the named author of MedQGo&apos;s independently prepared NEET-UG Biology revision guides. Her work focuses on helping students separate related concepts, identify common points of confusion, and build short recall routines alongside the current NCERT textbook.</p>
        </section>
        <section>
          <h2>Publishing approach</h2>
          <p>Each public guide names its source chapter, publication date, and latest editorial update. The guides are educational revision aids, not official NCERT, NTA, or NEET material, and they do not replace classroom teaching or professional medical advice.</p>
        </section>
        <section>
          <h2>Corrections and transparency</h2>
          <p>MedQGo publishes only role information that the contributor has agreed to make public. It does not invent degrees, institutional affiliations, endorsements, or student testimonials. Readers can report a factual concern through the <Link href="/contact">Contact page</Link>; the editorial process is described in the <Link href="/editorial-policy">Editorial Policy</Link>.</p>
        </section>
        <section>
          <h2>Guides by DongFeng</h2>
          <p>Browse the <Link href="/neet-ug/biology">NEET Biology revision library</Link> for the current set of published guides.</p>
        </section>
      </article>
    </main>
  );
}
