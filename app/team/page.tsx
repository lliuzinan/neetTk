import type { Metadata } from "next";
import Link from "next/link";
import { EditorialByline } from "@/components/EditorialByline";
import { editorialReviewer, hasPublishedReviewer } from "@/lib/editorialReviewer";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Editorial Team | MedQGo",
  description: "Meet the MedQGo Editorial Team — biology graduates who review NEET-UG Biology content for NCERT alignment and answer accuracy.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  const hasReviewer = hasPublishedReviewer();

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
          <>
            <section>
              <h2>MedQGo Editorial Team</h2>
              <p>MedQGo's content is reviewed by our in-house editorial team, composed of biology graduates with subject-matter expertise in NCERT-aligned curriculum.</p>
              <p><strong>Team qualifications:</strong> Members hold degrees in Life Sciences, Botany, or Zoology from recognised Indian universities.</p>
              <p><strong>Review scope:</strong> The team verifies concept accuracy, answer consistency, and alignment with the NEET-UG Biology syllabus before publication.</p>
              <p><strong>Reviewing since:</strong> 2026</p>
            </section>
            <section>
              <h2>Contributor disclosure</h2>
              <p>Individual reviewer names are not published at this stage. All content carries the MedQGo Editorial Team byline to indicate professional review. MedQGo does not invent qualifications, affiliations, or endorsements.</p>
            </section>
          </>
        )}

        <section>
          <h2>How content is reviewed</h2>
          <p>MedQGo checks revision resources for topic relevance, clarity, answer consistency, and alignment with the intended NEET-UG Biology learning objective. Readers can report a correction through the Contact page.</p>
          <EditorialByline />
        </section>
      </article>
    </main>
  );
}
