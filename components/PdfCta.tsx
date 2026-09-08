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
        <p className="eyebrow">Revision workbook</p>
        <h2>Get early access to the NEET Biology revision workbook.</h2>
        <p>
          Join the list for independently prepared revision checklists and printable study resources.
        </p>
      </div>
      <TrackedLink
        href={`/neet-biology-pdf?${params.toString()}`}
        className="ctaButton"
        eventName="pdf_cta_click"
        eventParams={{ source, offer: "neet_biology_pdf", topic_slug: topicSlug || "" }}
      >
        Join early access
      </TrackedLink>
    </section>
  );
}
