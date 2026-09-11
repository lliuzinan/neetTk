import topicsData from "@/data/topics.json";
import notesData from "@/data/seo-notes.json";

export interface Topic {
  id: string;
  exam: "NEET-UG";
  subject: "Biology";
  name: string;
  slug: string;
  ncertRef: string;
  sortOrder: number;
}

export interface SeoNote {
  id: string;
  slug: string;
  title: string;
  description: string;
  topicSlug: string;
  targetKeyword: string;
  sortOrder: number;
}

export const topics = topicsData as Topic[];
export const seoNotes = notesData as SeoNote[];

export const siteConfig = {
  name: "MedQGo NEET-UG Biology",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://medqgo.com",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  exam: "NEET-UG",
  subject: "Biology",
  description:
    "Independent NEET-UG Biology revision notes, topic guides, and early access learning resources for Indian students.",
};

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getNote(slug: string) {
  return seoNotes.find((note) => note.slug === slug);
}

export function absoluteUrl(path = "/") {
  return `${siteConfig.baseUrl}${path}`;
}

export function getTopicPath(topic: Pick<Topic, "slug">) {
  return `/neet-ug/biology/${topic.slug}`;
}

type TopicRow = {
  id: string;
  exam: "NEET-UG";
  subject: "Biology";
  name: string;
  slug: string;
  ncert_ref: string;
  sort_order: number;
};

type SeoPageRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  topic_slug: string;
  target_keyword: string;
};

function supabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
}

async function readSupabase<T>(path: string): Promise<T[] | null> {
  const { url, key } = supabaseConfig();
  if (!url || !key) return null;

  try {
    const response = await fetch(`${url}${path}`, {
      headers: {
        apikey: key,
        authorization: `Bearer ${key}`,
      },
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    return (await response.json()) as T[];
  } catch {
    return null;
  }
}

function mapTopic(row: TopicRow): Topic {
  return {
    id: row.id,
    exam: row.exam,
    subject: row.subject,
    name: row.name,
    slug: row.slug,
    ncertRef: row.ncert_ref,
    sortOrder: row.sort_order,
  };
}

function mapSeoPage(row: SeoPageRow): SeoNote {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    topicSlug: row.topic_slug,
    targetKeyword: row.target_keyword,
    sortOrder: 0,
  };
}

function revisionDescription(topicName: string) {
  return `Review ${topicName} for NEET-UG Biology with independently prepared NCERT-aligned concepts, common confusions, and a focused recall routine.`;
}

export async function getTopics() {
  const rows = await readSupabase<TopicRow>(
    "/rest/v1/topics?select=*&order=sort_order.asc&limit=1000",
  );
  if (!rows?.length) return topics;

  return rows.map(mapTopic);
}

export async function getSeoNotes() {
  const rows = await readSupabase<SeoPageRow>(
    "/rest/v1/seo_pages?select=*&status=eq.published&order=published_at.asc&limit=1000",
  );
  if (!rows?.length) return seoNotes.map((note) => ({ ...note, description: revisionDescription(note.title.split(":")[0]) }));

  const remoteNotes = rows.map(mapSeoPage);
  const remoteById = new Map(remoteNotes.map((note) => [note.id, note]));
  const merged = seoNotes.map((note) => remoteById.get(note.id) || note);
  const localIds = new Set(seoNotes.map((note) => note.id));

  return [...merged, ...remoteNotes.filter((note) => !localIds.has(note.id))]
    .map((note) => ({ ...note, description: revisionDescription(note.title.split(":")[0]) }));
}

export async function findTopic(slug: string) {
  const topicList = await getTopics();
  return topicList.find((topic) => topic.slug === slug);
}


export async function findNote(slug: string) {
  const noteList = await getSeoNotes();
  return noteList.find((note) => note.slug === slug);
}
