import type { Metadata } from "next";
import Link from "next/link";
import { EditorialByline } from "@/components/EditorialByline";
import { editorialReviewer, hasNamedAuthor, hasPublishedReviewer } from "@/lib/editorialReviewer";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Editorial Team",
  description: "Learn how MedQGo identifies and publishes editorial contributors for NEET-UG Biology learning resources.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  const hasReviewer = hasPublishedReviewer();
  const hasAuthor = hasNamedAuthor();

  return (
    <main className="page articlePage">
      <header className="pageHeader">
        <Link href="/" className="backLink">Home</Link>
        <p className="eyebrow">Editorial transparency</p>
        <h1>Editorial Team</h1>
        <p>MedQGo publishes contributor details only when the person has agreed to public attribution and the stated role can be supported by records.</p>
        <p className="updatedStamp">Last updated: {LAST_UPDATED_DISPLAY}</p>
      </header>

      <article className="articleBody">
        {hasAuthor && (
          <section>
            <h2>{editorialReviewer.authorName}</h2>
            <p><strong>{editorialReviewer.authorRole || "Named author"}</strong></p>
            <p>{editorialReviewer.authorName} is the named author of MedQGo's independently prepared NEET-UG Biology revision guides.</p>
          </section>
        )}
        {hasReviewer ? (
          <section>
            <h2>{editorialReviewer.name}</h2>
            <p><strong>{editorialReviewer.role}</strong></p>
            <p>{editorialReviewer.credentials}{editorialReviewer.institution ? `, ${editorialReviewer.institution}` : ""}{editorialReviewer.graduationYear ? ` (${editorialReviewer.graduationYear})` : ""}</p>
            {editorialReviewer.bio && <p>{editorialReviewer.bio}</p>}
            <p><strong>Review scope:</strong> {editorialReviewer.reviewScope}</p>
            {editorialReviewer.reviewedSince && <p><strong>Reviewing since:</strong> {editorialReviewer.reviewedSince}</p>}
            {editorialReviewer.publicProfileUrl && (
              <p><a href={editorialReviewer.publicProfileUrl} rel="me noopener noreferrer">Public professional profile</a></p>
            )}
          </section>
        ) : (
          <section>
            <h2>Contributor disclosure</h2>
            <p>Individual reviewer details are not published until MedQGo has a real contributor, their consent to publish the profile, and records supporting the stated role. MedQGo does not invent qualifications, affiliations, or endorsements.</p>
          </section>
        )}

        <section>
          <h2>How content is reviewed</h2>
          <p>MedQGo checks revision resources for topic relevance, clarity, source treatment, and alignment with the intended NEET-UG Biology learning objective. Readers can report a correction through the Contact page.</p>
          <EditorialByline />
        </section>
      </article>
    </main>
  );
}
