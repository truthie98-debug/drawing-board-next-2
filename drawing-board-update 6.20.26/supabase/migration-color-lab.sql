-- ============================================================
-- THE DRAWING BOARD — Weekly Color Lab Migration
-- Run this AFTER your original schema.sql
-- Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

create table public.color_lab_completions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  exercise_id text not null,
  week_key text not null,
  image_url text,
  notes text,
  completed_at timestamptz default now(),
  unique(user_id, week_key)
);

alter table public.color_lab_completions enable row level security;

create policy "Users can manage own color lab completions"
  on public.color_lab_completions for all
  using (auth.uid() = user_id);
