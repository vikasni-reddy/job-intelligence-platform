# Job Intelligence Platform

Phase 2 scaffold: Next.js + TypeScript + Tailwind + Supabase client integration (minimal).

Quickstart

1. Install dependencies

   npm install

2. Create a local .env file (copy .env.example and fill values):

   cp .env.example .env
   # then edit .env with your Supabase project values

3. Run the dev server

   npm run dev

4. Run the Supabase connection check (optional)

   node scripts/check-supabase-connection.js

What this phase includes

- Next.js App Router scaffold in `app/`
- Server-side and client-side Supabase helpers in `lib/`
- A health API route that queries `app_meta` (if present) to validate connections
- A `sql/migrations/` folder with an initial placeholder migration
- Linting and TypeScript checks configured

Environment variables

- NEXT_PUBLIC_SUPABASE_URL (required for client-side features later)
- NEXT_PUBLIC_SUPABASE_ANON_KEY (optional for Phase 2)
- SUPABASE_URL (optional, same as NEXT_PUBLIC_SUPABASE_URL)
- SUPABASE_SERVICE_KEY (required for server-side connection tests)

Notes

- This phase purposefully avoids adding Prisma, Puppeteer/Playwright, AI, email providers, or queueing systems.
- The discovery pipeline core will be added as a library in later phases; this scaffold keeps the architecture decoupled so the scheduler can be swapped later.
