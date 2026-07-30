import { NextResponse } from "next/server";

function clean(value: unknown, maxLength: number) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Waitlist is not configured yet." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = clean(body.email, 180).toLowerCase();
  if (!validEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const row = {
    email,
    name: clean(body.name, 120) || null,
    whatsapp: clean(body.whatsapp, 40) || null,
    offer: "neet_biology_pdf",
    source: clean(body.source, 80) || "pdf_landing",
    topic_slug: clean(body.topicSlug, 160) || null,
    question_id: clean(body.questionId, 160) || null,
    page_path: clean(body.pagePath, 260) || null,
    referrer: clean(request.headers.get("referer"), 500) || null,
    user_agent: clean(request.headers.get("user-agent"), 500) || null,
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist_leads`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Waitlist table is not ready yet. Please try again later." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
