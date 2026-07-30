CREATE TABLE IF NOT EXISTS waitlist_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  whatsapp TEXT,
  offer TEXT NOT NULL DEFAULT 'neet_biology_pdf',
  source TEXT NOT NULL DEFAULT 'pdf_landing',
  topic_slug TEXT,
  question_id TEXT,
  page_path TEXT,
  referrer TEXT,
  user_agent TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','converted','invalid')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_waitlist_leads_created_at ON waitlist_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_leads_offer ON waitlist_leads(offer);
CREATE INDEX IF NOT EXISTS idx_waitlist_leads_email ON waitlist_leads(email);

GRANT INSERT ON waitlist_leads TO anon, authenticated;

ALTER TABLE waitlist_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public insert waitlist leads" ON waitlist_leads;
CREATE POLICY "Public insert waitlist leads"
ON waitlist_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  offer = 'neet_biology_pdf'
  AND email IS NOT NULL
  AND length(email) <= 180
);
