import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How MedQGo creates, reviews, corrects, and labels NEET-UG Biology learning material.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      eyebrow="Editorial policy"
      title="Editorial Policy"
      intro="This policy explains how MedQGo prepares NEET-UG Biology learning material and how students can report a correction."
      sections={[
        {
          title: "Who Creates the Guides",
          body: [
            "Published Biology guides identify their named author and link to the author profile. MedQGo currently lists DongFeng, a University Biology Instructor, as the author of its public Biology revision guides. We do not invent qualifications, institutional affiliations, endorsements, or testimonials.",
            "MedQGo publishes independently prepared revision notes, topic guides, and planned printable learning resources. We do not present public material as official NCERT, NTA, or NEET content.",
          ],
        },
        {
          title: "How a Guide Is Prepared",
          body: [
            "A guide starts from a defined NEET-UG Biology topic, then explains the central concept, nearby distinctions that students commonly mix up, and a short recall routine. The author checks the guide against the cited NCERT chapter or another clearly identified reference before publication.",
            "We use digital publishing tools for formatting, metadata, and routine checks. A tool does not supply an examination-authority endorsement, replace source checking, or turn a draft into official study material. The named author remains accountable for the final published explanation.",
          ],
        },
        {
          title: "Corrections and Updates",
          body: [
            "To report a possible error, use the Contact page and include the page URL, the proposed correction, and supporting NCERT or official-reference details. We acknowledge actionable reports, check the cited point, and update or remove the affected material when appropriate.",
            "Dates displayed on pages show the latest editorial update. They do not imply endorsement by an examination authority.",
            "MedQGo is an independent study resource and is not affiliated with NCERT, NTA, or any examination authority.",
          ],
        },
      ]}
    />
  );
}
