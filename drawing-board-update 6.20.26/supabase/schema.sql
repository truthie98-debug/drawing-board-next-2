-- ============================================================
-- THE DRAWING BOARD — Supabase Schema
-- Run this entire file in your Supabase SQL Editor
-- Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── PROFILES ────────────────────────────────────────────────
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  artist_name text,
  medium text,
  skill_level text check (skill_level in ('Beginner', 'Intermediate', 'Advanced')),
  daily_time text,
  years_practicing text,
  favorite_artists text,
  strengths text,
  weaknesses text,
  short_goals text,
  professional_goals text,
  current_month int default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─── SUBMISSIONS ─────────────────────────────────────────────
create table public.submissions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  type text check (type in ('daily_study', 'weekly_assignment', 'finished_project')) not null,
  image_url text,
  notes text,
  fundamental_primary text,
  fundamental_secondary text,
  month int,
  teacher_feedback text,
  created_at timestamptz default now()
);

alter table public.submissions enable row level security;

create policy "Users can manage own submissions"
  on public.submissions for all
  using (auth.uid() = user_id);

-- ─── REFLECTIONS ─────────────────────────────────────────────
create table public.reflections (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  prompt text not null,
  response text not null,
  created_at timestamptz default now()
);

alter table public.reflections enable row level security;

create policy "Users can manage own reflections"
  on public.reflections for all
  using (auth.uid() = user_id);

-- ─── STREAKS ─────────────────────────────────────────────────
create table public.streaks (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  date date not null,
  completed_active boolean default false,
  completed_reflection boolean default false,
  completed_weekly boolean default false,
  unique(user_id, date)
);

alter table public.streaks enable row level security;

create policy "Users can manage own streaks"
  on public.streaks for all
  using (auth.uid() = user_id);

-- ─── OPPORTUNITIES ───────────────────────────────────────────
create table public.saved_opportunities (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  deadline text,
  description text,
  url text,
  saved_at timestamptz default now()
);

alter table public.saved_opportunities enable row level security;

create policy "Users can manage own saved opportunities"
  on public.saved_opportunities for all
  using (auth.uid() = user_id);

-- ─── STORAGE BUCKET ──────────────────────────────────────────
-- Run this separately in SQL Editor:
insert into storage.buckets (id, name, public)
values ('artwork', 'artwork', true);

create policy "Authenticated users can upload artwork"
  on storage.objects for insert
  with check (bucket_id = 'artwork' and auth.role() = 'authenticated');

create policy "Anyone can view artwork"
  on storage.objects for select
  using (bucket_id = 'artwork');

create policy "Users can delete own artwork"
  on storage.objects for delete
  using (bucket_id = 'artwork' and auth.uid()::text = (storage.foldername(name))[1]);
