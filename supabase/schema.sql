-- VivaVault Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- 1. QUESTIONS TABLE (approved data)
-- ============================================
create table if not exists public.questions (
  id uuid primary key default uuid_generate_v4(),
  proctor_id text not null,
  subject text not null check (subject in ('MAD1', 'MAD2')),
  level int not null check (level in (1, 2)),
  questions_text text not null,
  advice text,
  viva_datetime timestamp with time zone,
  tags text[],
  created_at timestamp with time zone default now()
);

-- Indexes for fast queries
create index if not exists idx_questions_proctor_id on public.questions (proctor_id);
create index if not exists idx_questions_subject on public.questions (subject);
create index if not exists idx_questions_level on public.questions (level);
create index if not exists idx_questions_subject_level on public.questions (subject, level);

-- ============================================
-- 2. SUBMISSIONS TABLE (pending approval)
-- ============================================
create table if not exists public.submissions (
  id uuid primary key default uuid_generate_v4(),
  proctor_id text not null,
  subject text not null check (subject in ('MAD1', 'MAD2')),
  level int not null check (level in (1, 2)),
  questions_text text not null,
  advice text,
  viva_datetime timestamp with time zone,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamp with time zone default now()
);

create index if not exists idx_submissions_status on public.submissions (status);

-- ============================================
-- 3. ROW LEVEL SECURITY
-- ============================================

-- Enable RLS
alter table public.questions enable row level security;
alter table public.submissions enable row level security;

-- QUESTIONS: Anyone can read
create policy "Public can read questions"
  on public.questions for select
  using (true);

-- QUESTIONS: Only authenticated users can insert (admin)
create policy "Authenticated users can insert questions"
  on public.questions for insert
  to authenticated
  with check (true);

-- QUESTIONS: Only authenticated users can update
create policy "Authenticated users can update questions"
  on public.questions for update
  to authenticated
  using (true);

-- QUESTIONS: Only authenticated users can delete
create policy "Authenticated users can delete questions"
  on public.questions for delete
  to authenticated
  using (true);

-- SUBMISSIONS: Anyone can insert (anonymous submissions)
create policy "Anyone can insert submissions"
  on public.submissions for insert
  to anon, authenticated
  with check (true);

-- SUBMISSIONS: Anyone can read their own (or admin reads all)
create policy "Anyone can read submissions"
  on public.submissions for select
  using (true);

-- SUBMISSIONS: Only authenticated users can update
create policy "Authenticated users can update submissions"
  on public.submissions for update
  to authenticated
  using (true);

-- SUBMISSIONS: Only authenticated users can delete
create policy "Authenticated users can delete submissions"
  on public.submissions for delete
  to authenticated
  using (true);
