-- Initial migration: create a tiny app_meta table used for connection checks

CREATE TABLE IF NOT EXISTS app_meta (
  key text PRIMARY KEY,
  value jsonb,
  created_at timestamptz DEFAULT now()
);
