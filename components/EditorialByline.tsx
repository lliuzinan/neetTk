import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

export function EditorialByline({ lastUpdated = LAST_UPDATED_DISPLAY }: { lastUpdated?: string }) {
  return <p className="editorialByline">Published by MedQGo | Last updated: {lastUpdated}</p>;
}
