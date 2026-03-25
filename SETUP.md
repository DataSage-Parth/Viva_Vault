# Setup & Deployment Guide

## 1. Setup Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new project.
2. Go to SQL Editor in your Supabase dashboard.
3. Copy the contents of `supabase/schema.sql` and run it. This will:
   - Create `questions` and `submissions` tables
   - Set up Row Level Security (RLS) policies
   - Add necessary indexes

## 2. Environment Variables

1. Copy `.env.local.example` to a new file named `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
2. Get your project URL and anonymous API key from the Supabase dashboard (Project Settings > API).
3. Update `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## 3. Local Development

Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 4. Admin Setup

1. The admin panel at `/admin` requires authentication.
2. Go to Supabase Dashboard > Authentication > Users.
3. Create a new user (e.g., `admin@test.com`) and password.
4. Log in at `http://localhost:3000/admin/login` using these credentials.

## 5. Deployment (Vercel)

1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and create a new project.
3. Import your GitHub repository.
4. In the Environment Variables section, add:
   - `NEXT_PUBLIC_SUPABASE_URL`: (your URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (your key)
5. Click **Deploy**. Vercel will build and deploy Next.js automatically.
