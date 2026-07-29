import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const topics = sqliteTable("topics", {
  id: text("id").primaryKey(),
  exam: text("exam").notNull().default("NEET-UG"),
  subject: text("subject").notNull().default("Biology"),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  unit: text("unit"),
  ncertRef: text("ncert_ref").notNull(),
  description: text("description").notNull().default(""),
  seoTitle: text("seo_title").notNull().default(""),
  seoDescription: text("seo_description").notNull().default(""),
  questionCount: integer("question_count").notNull().default(0),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => ({
  slugIdx: uniqueIndex("topics_slug_idx").on(table.slug),
}));

export const questions = sqliteTable("questions", {
  id: text("id").primaryKey(),
  sourceId: integer("source_id").notNull(),
  exam: text("exam").notNull().default("NEET-UG"),
  subject: text("subject").notNull().default("Biology"),
  topicId: text("topic_id").notNull(),
  topicSlug: text("topic_slug").notNull(),
  ncertRef: text("ncert_ref").notNull(),
  stem: text("stem").notNull(),
  optionA: text("option_a").notNull(),
  optionB: text("option_b").notNull(),
  optionC: text("option_c").notNull(),
  optionD: text("option_d").notNull(),
  correctOption: text("correct_option", { enum: ["A", "B", "C", "D"] }).notNull(),
  explanation: text("explanation").notNull(),
  difficulty: integer("difficulty").notNull().default(2),
  qualityScore: integer("quality_score").notNull().default(0),
  qwenmaxReviewScore: integer("qwenmax_review_score").notNull().default(0),
  status: text("status", { enum: ["draft", "approved", "hidden", "needs_review"] }).notNull().default("approved"),
  isFree: integer("is_free", { mode: "boolean" }).notNull().default(true),
  publishedAt: text("published_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => ({
  sourceIdx: uniqueIndex("questions_source_id_idx").on(table.sourceId),
}));

export const seoPages = sqliteTable("seo_pages", {
  id: text("id").primaryKey(),
  type: text("type", { enum: ["topic_note", "guide", "daily_mcq"] }).notNull(),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  body: text("body").notNull().default(""),
  targetKeyword: text("target_keyword").notNull().default(""),
  topicSlug: text("topic_slug"),
  status: text("status", { enum: ["draft", "published", "hidden"] }).notNull().default("published"),
  publishedAt: text("published_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => ({
  slugIdx: uniqueIndex("seo_pages_slug_idx").on(table.slug),
}));

export const ingestionRuns = sqliteTable("ingestion_runs", {
  id: text("id").primaryKey(),
  sourceFile: text("source_file").notNull(),
  status: text("status", { enum: ["pending", "imported", "failed"] }).notNull().default("pending"),
  importedQuestions: integer("imported_questions").notNull().default(0),
  notes: text("notes").notNull().default(""),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
