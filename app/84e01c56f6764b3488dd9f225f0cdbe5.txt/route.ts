const INDEXNOW_KEY = "84e01c56f6764b3488dd9f225f0cdbe5";

export function GET() {
  return new Response(INDEXNOW_KEY, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400",
    },
  });
}
