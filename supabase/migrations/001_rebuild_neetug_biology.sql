-- Fresh NEET-UG Biology schema.
-- The old NEET-PG/FMGE medicine schema is intentionally not reused.

DROP TABLE IF EXISTS seo_pages CASCADE;
DROP TABLE IF EXISTS quiz_session_questions CASCADE;
DROP TABLE IF EXISTS quiz_sessions CASCADE;
DROP TABLE IF EXISTS wrong_questions CASCADE;
DROP TABLE IF EXISTS bookmarks CASCADE;
DROP TABLE IF EXISTS attempts CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS ingestion_runs CASCADE;

CREATE TABLE topics (
  id TEXT PRIMARY KEY,
  exam TEXT NOT NULL DEFAULT 'NEET-UG',
  subject TEXT NOT NULL DEFAULT 'Biology',
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  unit TEXT,
  ncert_ref TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  seo_title TEXT NOT NULL DEFAULT '',
  seo_description TEXT NOT NULL DEFAULT '',
  question_count INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE questions (
  id TEXT PRIMARY KEY,
  source_id BIGINT NOT NULL UNIQUE,
  exam TEXT NOT NULL DEFAULT 'NEET-UG',
  subject TEXT NOT NULL DEFAULT 'Biology',
  topic_id TEXT NOT NULL REFERENCES topics(id) ON DELETE RESTRICT,
  topic_slug TEXT NOT NULL,
  ncert_ref TEXT NOT NULL,
  stem TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_option CHAR(1) NOT NULL CHECK (correct_option IN ('A','B','C','D')),
  explanation TEXT NOT NULL,
  difficulty SMALLINT NOT NULL DEFAULT 2 CHECK (difficulty BETWEEN 1 AND 5),
  quality_score INTEGER NOT NULL DEFAULT 0,
  qwenmax_review_score INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'approved' CHECK (status IN ('draft','approved','hidden','needs_review')),
  is_free BOOLEAN NOT NULL DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_questions_status ON questions(status);
CREATE INDEX idx_questions_topic_slug ON questions(topic_slug);
CREATE INDEX idx_questions_exam_subject ON questions(exam, subject);

CREATE TABLE seo_pages (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('topic_note','guide','daily_mcq')),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  body TEXT NOT NULL DEFAULT '',
  target_keyword TEXT NOT NULL DEFAULT '',
  topic_slug TEXT REFERENCES topics(slug) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft','published','hidden')),
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  mode TEXT NOT NULL DEFAULT 'practice' CHECK (mode IN ('practice','test','timed')),
  exam TEXT NOT NULL DEFAULT 'NEET-UG',
  subject TEXT NOT NULL DEFAULT 'Biology',
  topic_slug TEXT,
  question_count INTEGER NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  submitted_at TIMESTAMPTZ,
  score INTEGER,
  correct_count INTEGER NOT NULL DEFAULT 0,
  incorrect_count INTEGER NOT NULL DEFAULT 0,
  skipped_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE quiz_session_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES quiz_sessions(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  selected_option CHAR(1) CHECK (selected_option IN ('A','B','C','D')),
  is_correct BOOLEAN,
  answered_at TIMESTAMPTZ
);

CREATE TABLE attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_option CHAR(1) NOT NULL CHECK (selected_option IN ('A','B','C','D')),
  is_correct BOOLEAN NOT NULL,
  time_spent_seconds INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, question_id)
);

CREATE TABLE wrong_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  wrong_count INTEGER NOT NULL DEFAULT 1,
  last_wrong_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resolved_at TIMESTAMPTZ,
  UNIQUE(user_id, question_id)
);

CREATE TABLE ingestion_runs (
  id TEXT PRIMARY KEY,
  source_file TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','imported','failed')),
  imported_questions INTEGER NOT NULL DEFAULT 0,
  notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
