This directory contains SQL migration files for the project.

For Phase 2 we include a minimal placeholder migration that creates an `app_meta` table used by the health check.

To run migrations against your Supabase project, use the Supabase CLI or any Postgres client connected to your Supabase database.

Example (using psql):

  psql "postgresql://<user>:<pass>@<host>:<port>/<db>" -f sql/migrations/0001_init.sql

Note: Be careful with credentials. Do not commit secrets to the repository.
