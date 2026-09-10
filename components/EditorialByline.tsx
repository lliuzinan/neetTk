import Link from "next/link";
import { LAST_UPDATED_DISPLAY } from "@/lib/seo";
import { editorialReviewer, hasNamedAuthor } from "@/lib/editorialReviewer";

export function EditorialByline({ lastUpdated = LAST_UPDATED_DISPLAY }: { lastUpdated?: string }) {
  const hasAuthor = hasNamedAuthor();

  return (
    <p className="editorialByline">
      {hasAuthor && (
        <>
          Written by <Link href="/authors/dongfeng">{editorialReviewer.authorName}{editorialReviewer.authorRole ? `, ${editorialReviewer.authorRole}` : ""}</Link> | {" "}
        </>
      )}
      Editorial review: MedQGo | Last updated: {lastUpdated}
    </p>
  );
}
