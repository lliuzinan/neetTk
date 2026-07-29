export function getDb() {
  throw new Error(
    "D1 is not configured for this project. The production qbank reads from Supabase through lib/content.ts.",
  );
}
