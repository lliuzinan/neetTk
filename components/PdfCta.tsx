import { TrackedLink } from "@/components/TrackedLink";

type Props = {
  source: string;
  topicSlug?: string;
  questionId?: string;
};

export function PdfCta({ source, topicSlug, questionId }: Props) {
  const params = new URLSearchParams({ source });
  if (topicSlug) params.set("topic", topicSlug);
  if (questionId) params.set("question", questionId);

  return (
    <section className="pdfCta">
      <div>
        <p className="eyebrow">Free PDF sample</p>
        <h2>Get NEET Biology MCQs as a chapter-wise PDF.</h2>
        <p>
          Join early access for a free MCQ sample with answers and NCERT-aligned explanations.
        </p>
      </div>
      <TrackedLink
        href={`/neet-biology-pdf?${params.toString()}`}
        className="ctaButton"
        eventName="pdf_cta_click"
        eventParams={{ source, offer: "neet_biology_pdf", topic_slug: topicSlug || "", question_id: questionId || "" }}
      >
        Get free PDF
      </TrackedLink>
    </section>
  );
}
