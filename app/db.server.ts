import Database from "better-sqlite3";
import path from "node:path";

const dbPath = process.env.DATABASE_PATH ?? path.join(process.cwd(), "data.db");

export const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL,
    referer TEXT,
    user_agent TEXT,
    visited_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);
  CREATE INDEX IF NOT EXISTS idx_page_views_visited_at ON page_views(visited_at);

  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    name TEXT NOT NULL,
    age TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    situation TEXT,
    consent_no_diagnosis INTEGER NOT NULL,
    consent_records INTEGER NOT NULL,
    user_agent TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at);
`);

const insertPageView = db.prepare(
  "INSERT INTO page_views (path, referer, user_agent) VALUES (?, ?, ?)"
);

export function recordPageView(path: string, referer: string | null, userAgent: string | null) {
  insertPageView.run(path, referer, userAgent);
}

const insertApplication = db.prepare(`
  INSERT INTO applications (name, age, email, phone, situation, consent_no_diagnosis, consent_records, user_agent)
  VALUES (@name, @age, @email, @phone, @situation, @consent_no_diagnosis, @consent_records, @user_agent)
`);

export type ApplicationInput = {
  name: string;
  age: string | null;
  email: string;
  phone: string | null;
  situation: string | null;
  consent_no_diagnosis: number;
  consent_records: number;
  user_agent: string | null;
};

export function recordApplication(input: ApplicationInput) {
  const result = insertApplication.run(input);
  return Number(result.lastInsertRowid);
}
