function getPublisherId() {
  const value = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || "ca-pub-7031362773027237";
  return value && /^ca-pub-\d+$/.test(value) ? value : null;
}

export function GET() {
  const publisherId = getPublisherId();

  if (!publisherId) {
    return new Response("Not found", { status: 404 });
  }

  const pubId = publisherId.replace("ca-", "");
  return new Response(`google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
