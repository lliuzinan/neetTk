import { TrackedLink } from "@/components/TrackedLink";

type Props = {
  source: string;
  topicSlug?: string;
};

export function PdfCta({ source, topicSlug }: Props) {
  const params = new URLSearchParams({ source });
  if (topicSlug) params.set("topic", topicSlug);

  return (
    <section className="pdfCta">
      <div>
        <p className="eyebrow">Available now</p>
        <h2>Keep a record of your explanation.</h2>
        <p>
          Download the free blank record or use its editable version in your browser. No sign-up is needed.
        </p>
      </div>
      <TrackedLink
        href={`/neet-biology-pdf?${params.toString()}`}
        className="ctaButton"
        eventName="pdf_cta_click"
        eventParams={{ source, offer: "explanation_record", topic_slug: topicSlug || "" }}
      >
        Use free resources
      </TrackedLink>
    </section>
  );
}
