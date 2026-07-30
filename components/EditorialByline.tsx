import { LAST_UPDATED_DISPLAY } from "@/lib/seo";

export function EditorialByline() {
  return (
    <p className="editorialByline">
      Reviewed by MedQGo Editorial Team | Last updated: {LAST_UPDATED_DISPLAY}
    </p>
  );
}
