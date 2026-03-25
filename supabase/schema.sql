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

-- ============================================
-- 4. SAMPLE DATA (Optional)
-- ============================================

-- Uncomment below to insert sample data for testing

/*
insert into public.questions (proctor_id, subject, level, questions_text, advice, tags) values
('DR_SHARMA', 'MAD1', 1, 'What is an Activity in Android? Explain the Activity lifecycle with a diagram.', 'Focus on the lifecycle methods - onCreate, onStart, onResume, etc.', ARRAY['Activity', 'Lifecycle']),
('DR_SHARMA', 'MAD1', 1, 'Explain the difference between implicit and explicit intents in Android.', 'Give real-world examples for both types.', ARRAY['Intent', 'Activity']),
('DR_SHARMA', 'MAD1', 2, 'What is Room Database? How does it relate to SQLite?', 'Explain the three main components: Entity, DAO, Database.', ARRAY['Room', 'Database', 'SQLite', 'ORM']),
('DR_PATEL', 'MAD1', 1, 'What is a Fragment? How is it different from an Activity?', 'Mention Fragment lifecycle and how it relates to Activity lifecycle.', ARRAY['Fragment', 'Activity', 'Lifecycle']),
('DR_PATEL', 'MAD1', 2, 'Explain RecyclerView and its advantages over ListView.', 'Cover ViewHolder pattern and adapter implementation.', ARRAY['RecyclerView', 'ListView', 'Adapter', 'ViewHolder']),
('DR_PATEL', 'MAD2', 1, 'What is Jetpack Compose? How does it differ from XML layouts?', 'Compare declarative vs imperative UI approaches.', ARRAY['Jetpack Compose', 'XML Layout']),
('DR_KUMAR', 'MAD2', 1, 'Explain the MVVM architecture pattern in Android development.', 'Draw a diagram showing Model, View, and ViewModel relationships.', ARRAY['MVVM', 'ViewModel', 'Architecture']),
('DR_KUMAR', 'MAD2', 2, 'What is Retrofit? How do you make API calls using Retrofit?', 'Show the interface definition and the Retrofit builder setup.', ARRAY['Retrofit', 'REST API', 'API Integration']),
('DR_KUMAR', 'MAD2', 2, 'Explain dependency injection. What is Hilt and how does it simplify DI in Android?', 'Cover @Inject, @Module, @InstallIn annotations.', ARRAY['Dependency Injection', 'Hilt']),
('DR_GUPTA', 'MAD1', 1, 'What are the HTTP methods? Explain GET, POST, PUT, DELETE with examples.', 'Relate each method to CRUD operations.', ARRAY['HTTP methods', 'REST API', 'GET', 'POST', 'PUT', 'DELETE']),
('DR_GUPTA', 'MAD1', 2, 'How do you handle runtime permissions in Android?', 'Explain the flow: check → request → handle result.', ARRAY['Permission', 'Runtime Permission']),
('DR_GUPTA', 'MAD2', 1, 'What is Flutter? Explain the widget tree concept.', 'Distinguish between StatefulWidget and StatelessWidget.', ARRAY['Flutter', 'Widget', 'StatefulWidget', 'StatelessWidget']),
('DR_SINGH', 'MAD2', 1, 'Explain state management in Flutter. Compare Provider and Bloc.', 'Mention when to use each approach.', ARRAY['State Management', 'Provider', 'Bloc', 'Flutter']),
('DR_SINGH', 'MAD2', 2, 'What is Firebase? Explain Firebase Cloud Messaging (FCM) for push notifications.', NULL, ARRAY['Firebase', 'FCM', 'Push Notification']),
('DR_SINGH', 'MAD1', 1, 'What is the difference between MVC and MVP patterns?', 'Draw diagrams for both patterns.', ARRAY['MVC', 'MVP', 'Architecture']);
*/
