import reviewerData from "@/data/editorial-reviewer.json";

export type EditorialReviewer = {
  authorName: string;
  name: string;
  role: string;
  credentials: string;
  institution: string;
  graduationYear: string;
  bio: string;
  reviewScope: string;
  reviewedSince: string;
  publicProfileUrl: string;
};

export const editorialReviewer = reviewerData as EditorialReviewer;

export function hasNamedAuthor(reviewer: EditorialReviewer = editorialReviewer) {
  return Boolean(reviewer.authorName?.trim());
}

export function hasPublishedReviewer(reviewer: EditorialReviewer = editorialReviewer) {
  return Boolean(
    reviewer.name.trim()
      && reviewer.role.trim()
      && reviewer.credentials.trim()
      && reviewer.reviewScope.trim(),
  );
}
