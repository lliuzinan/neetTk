import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "About MedQGo",
  description: "Learn about MedQGo, an independent NEET-UG Biology revision resource for Indian students.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="About MedQGo"
      intro="MedQGo is an independent NEET-UG Biology revision resource for Indian students who want clear concept maps, common-confusion checks, and concise study routines."
      sections={[
        {
          title: "What We Publish",
          body: [
            "MedQGo publishes independently prepared NEET-UG Biology revision notes, topic guides, and early-access learning resources. The public library focuses on concepts, comparisons, and study routines rather than reproducing exam or textbook material.",
            "Our first subject focus is Biology because NEET-UG Biology rewards direct NCERT recall and careful reading. We organise each guide around a small set of concepts that a student can verify against the current NCERT textbook.",
          ],
        },
        {
          title: "Editorial Process",
          body: [
            "Each public guide is checked for clarity, topic fit, and unsupported claims before publication. We revise or remove a guide when a credible correction identifies an error or a source concern.",
            "Read the Editorial Policy and Copyright page for the way we prepare revision content and handle correction or rights-holder requests.",
          ],
        },
        {
          title: "Contact",
          body: [
            "For corrections, feedback, or collaboration, use the contact page. We welcome reports about unclear wording, answer issues, or topic coverage gaps.",
          ],
        },
      ]}
    />
  );
}
