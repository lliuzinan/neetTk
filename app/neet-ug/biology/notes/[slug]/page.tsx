import { notFound, permanentRedirect } from "next/navigation";
import { findNote } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS } from "@/lib/noteContent";

interface Props { params: Promise<{ slug: string }>; }

function isPublishedNote(slug: string) {
  return AUTHORED_NOTE_SLUGS.includes(slug as (typeof AUTHORED_NOTE_SLUGS)[number]);
}

export async function generateStaticParams() {
  return [];
}

export default async function LegacyNotePage({ params }: Props) {
  const { slug } = await params;
  if (!isPublishedNote(slug)) notFound();
  const note = await findNote(slug);
  if (!note) notFound();
  permanentRedirect(`/neet-ug/biology/${note.topicSlug}`);
}
