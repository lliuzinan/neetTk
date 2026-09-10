import { LAST_UPDATED_DISPLAY } from "@/lib/seo";
import { editorialReviewer, hasNamedAuthor } from "@/lib/editorialReviewer";

export function EditorialByline({ lastUpdated = LAST_UPDATED_DISPLAY }: { lastUpdated?: string }) {
  const author = hasNamedAuthor() ? `Written by ${editorialReviewer.authorName} | ` : "";

  return (
    <p className="editorialByline">
      {author}Reviewed by MedQGo Editorial Team | Last updated: {lastUpdated}
    </p>
  );
}
