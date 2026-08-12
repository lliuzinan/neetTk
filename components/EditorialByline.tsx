import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

export function EditorialByline({ lastUpdated = LAST_UPDATED_DISPLAY }: { lastUpdated?: string }) {
  return (
    <p className="editorialByline">
      Reviewed by MedQGo Editorial Team | Last updated: {lastUpdated}
    </p>
  );
}
