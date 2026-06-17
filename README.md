# The Drawing Board — Setup Guide

Your personal art academy. Built with Next.js 14, Supabase, and the Anthropic API.

---

## What you need before starting

1. A computer with [Node.js](https://nodejs.org) installed (version 18 or higher)
2. A free [Supabase](https://supabase.com) account
3. An [Anthropic API key](https://console.anthropic.com) (optional — only needed for AI critique)

---

## Step 1 — Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New project** and give it a name (e.g. "drawing-board")
3. Choose a region close to you and set a database password — save it somewhere
4. Wait about 2 minutes for the project to finish setting up

**Set up the database:**

5. In your Supabase project, click **SQL Editor** in the left sidebar
6. Click **New query**
7. Open the file `supabase/schema.sql` from this folder
8. Copy the entire contents and paste it into the SQL Editor
9. Click **Run** — you should see "Success. No rows returned"

**Get your API keys:**

10. In Supabase, go to **Settings → API**
11. Copy the **Project URL** — it looks like `https://abcdefgh.supabase.co`
12. Copy the **anon public** key — it's a long string starting with `eyJ`

---

## Step 2 — Get your Anthropic API key (optional)

This powers the AI artwork critique feature. If you skip this, critique will use a built-in fallback response.

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account and verify your email
3. Go to **API Keys** and click **Create Key**
4. Copy the key — it starts with `sk-ant-`
5. Add a small amount of credit (a few dollars is plenty — each critique costs fractions of a cent)

---

## Step 3 — Configure the app

1. In this project folder, find the file `.env.local.example`
2. Make a copy of it and name the copy `.env.local`
3. Open `.env.local` and fill in your values:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
ANTHROPIC_API_KEY=sk-ant-api03-...
```

---

## Step 4 — Run the app

Open Terminal (Mac) or Command Prompt (Windows), navigate to this folder, and run:

```bash
npm install
npm run dev
```

Then open your browser and go to: **http://localhost:3000**

---

## Step 5 — Configure Supabase Auth (so email signup works)

1. In Supabase, go to **Authentication → URL Configuration**
2. Set **Site URL** to `http://localhost:3000`
3. Add `http://localhost:3000/auth/callback` to **Redirect URLs**

When you deploy later, add your live domain here too.

---

## Deploying to the web (when you're ready)

The easiest option is [Vercel](https://vercel.com):

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add your three environment variables in Vercel's project settings
4. Deploy — Vercel handles everything automatically

Then update your Supabase Auth URL Configuration with your live Vercel domain.

---

## Project structure

```
app/
  page.tsx              — Home page
  auth/page.tsx         — Sign in / Sign up
  onboarding/page.tsx   — First-time assessment
  dashboard/            — Studio dashboard
  academy/              — Course catalog
  assignments/          — Daily work + reflections
  uploads/              — Submit work + AI critique
  opportunities/        — Open calls + grants
  profile/              — Monthly review + settings
  api/critique/         — AI critique endpoint

lib/
  curriculum.ts         — All curriculum data and logic
  supabase-browser.ts   — Supabase client (browser)
  supabase-server.ts    — Supabase client (server)

supabase/
  schema.sql            — Run this in Supabase SQL Editor
```

---

## Troubleshooting

**"Invalid API key" error** — Double-check your `.env.local` values match exactly what's in Supabase settings. No extra spaces.

**Database errors on signup** — Make sure you ran the full `schema.sql` file in Supabase. Try running it again — it's safe to run twice.

**Images not uploading** — The storage bucket is created by the SQL file. Check Supabase → Storage and confirm an "artwork" bucket exists with public access.

**AI critique not working** — Check your Anthropic API key and make sure you've added credit to your account at console.anthropic.com.
