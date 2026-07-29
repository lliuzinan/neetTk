-- Allow the public site to read published qbank content through the Supabase anon key.
-- User activity tables remain private.

GRANT USAGE ON SCHEMA public TO anon, authenticated;

GRANT SELECT ON topics TO anon, authenticated;
GRANT SELECT ON questions TO anon, authenticated;
GRANT SELECT ON seo_pages TO anon, authenticated;

ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_pages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read topics" ON topics;
CREATE POLICY "Public read topics"
ON topics
FOR SELECT
TO anon, authenticated
USING (exam = 'NEET-UG' AND subject = 'Biology');

DROP POLICY IF EXISTS "Public read approved free questions" ON questions;
CREATE POLICY "Public read approved free questions"
ON questions
FOR SELECT
TO anon, authenticated
USING (
  exam = 'NEET-UG'
  AND subject = 'Biology'
  AND status = 'approved'
  AND is_free = true
);

DROP POLICY IF EXISTS "Public read published seo pages" ON seo_pages;
CREATE POLICY "Public read published seo pages"
ON seo_pages
FOR SELECT
TO anon, authenticated
USING (status = 'published');
