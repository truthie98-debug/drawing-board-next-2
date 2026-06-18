'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { THOUGHT_PROMPTS, type MonthFocus } from '@/lib/curriculum'

type InstructorContent = {
  why: string
  technique: string
  common_mistake: string
  artist_spotlight: { name: string; why: string }
  resource: { title: string; why: string }
  monthly_project: string
  encouragement: string
}

export function AssignmentsClient({
  focus,
  initialMode,
  userId,
}: {
  focus: MonthFocus
  initialMode: 'primary' | 'secondary' | 'combined'
  userId: string
}) {
  const supabase = createClient()
  const [mode, setMode] = useState(initialMode)
  const [completed, setCompleted] = useState(false)
  const [promptIdx, setPromptIdx] = useState(0)
  const [reflection, setReflection] = useState('')
  const [reflectionSaved, setReflectionSaved] = useState(false)
  const [saving, setSaving] = useState(false)
  const [content, setContent] = useState<InstructorContent | null>(null)
  const [loading, setLoading] = useState(true)

  const modeLabel =
    mode === 'combined'
      ? `${focus.primary} + ${focus.secondary}`
      : mode === 'primary'
      ? focus.primary
      : focus.secondary

  const dailyExercise = focus.daily[mode]

  const loadInstructor = useCallback(async () => {
    setLoading(true)
    setContent(null)
    try {
      const res = await fetch('/api/assignments/instructor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          primary: focus.primary,
          secondary: focus.secondary,
          month: focus.month,
          dailyExercise,
        }),
      })
      const data = await res.json()
      setContent(data)
    } catch {
      setContent(null)
    } finally {
      setLoading(false)
    }
  }, [focus, dailyExercise])

  useEffect(() => {
    loadInstructor()
  }, [loadInstructor])

  function randomizeAssignment() {
    const modes: Array<'primary' | 'secondary' | 'combined'> = ['primary', 'secondary', 'combined']
    const next = modes.filter(m => m !== mode)
    setMode(next[Math.floor(Math.random() * next.length)])
    setCompleted(false)
  }

  async function markComplete() {
    const today = new Date().toISOString().split('T')[0]
    await supabase.from('streaks').upsert(
      { user_id: userId, date: today, completed_active: true },
      { onConflict: 'user_id,date' }
    )
    setCompleted(true)
  }

  async function saveReflection() {
    if (!reflection.trim()) return
    setSaving(true)
    await supabase.from('reflections').insert({
      user_id: userId,
      prompt: THOUGHT_PROMPTS[promptIdx],
      response: reflection,
    })
    setSaving(false)
    setReflection('')
    setReflectionSaved(true)
    setTimeout(() => setReflectionSaved(false), 2500)
  }

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Practice Room</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">Study</h1>
      <p className="text-muted max-w-lg mb-6">
        Month {focus.month} · {focus.primary} + {focus.secondary}. Two fundamentals, daily rotation, structured growth.
      </p>

      {/* Month focus banner */}
      <div className="card mb-5 flex items-center justify-between gap-5 py-5 px-7">
        <div>
          <p className="eyebrow">This Month's Focus</p>
          <p className="font-medium mt-1">{focus.primary} + {focus.secondary}</p>
          <p className="text-xs text-muted mt-1">{focus.note}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <span className="pill">{focus.primary}</span>
          <span className="pill pill-neutral">{focus.secondary}</span>
        </div>
      </div>

      {/* Today's Exercise */}
      <div className="card mb-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="eyebrow">Today's Exercise</p>
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide mt-2">
              {modeLabel}
            </span>
          </div>
          <button onClick={randomizeAssignment} className="btn btn-ghost btn-sm shrink-0">
            Different exercise
          </button>
        </div>

        <p className="font-serif text-2xl font-normal leading-snug mb-6">{dailyExercise}</p>

        {/* Instructor explanation */}
        {loading ? (
          <div className="space-y-3 mb-6">
            <div className="h-4 bg-line rounded animate-pulse w-3/4" />
            <div className="h-4 bg-line rounded animate-pulse w-full" />
            <div className="h-4 bg-line rounded animate-pulse w-2/3" />
          </div>
        ) : content ? (
          <div className="space-y-5 mb-6">
            <div className="teacher-block">
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Why this matters</p>
              <p className="text-sm leading-relaxed">{content.why}</p>
            </div>

            <div className="teacher-block">
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">How to approach it</p>
              <p className="text-sm leading-relaxed">{content.technique}</p>
            </div>

            <div className="teacher-block border-l-[3px] border-gold/60">
              <p className="text-xs font-semibold text-[#9a7510] tracking-widest uppercase mb-2">Common mistake</p>
              <p className="text-sm leading-relaxed">{content.common_mistake}</p>
            </div>
          </div>
        ) : null}

        <div className="flex gap-2 flex-wrap">
          {!completed ? (
            <button onClick={markComplete} className="btn btn-primary btn-sm">
              Mark complete
            </button>
          ) : (
            <span className="btn btn-sm bg-gold/10 text-[#9a7510]">Done for today ✓</span>
          )}
        </div>

        {completed && content && (
          <p className="text-sm text-muted mt-4 italic">{content.encouragement}</p>
        )}
      </div>

      {/* Weekly + Monthly */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="card">
          <p className="eyebrow mb-2">Weekly Assignment</p>
          <p className="text-sm font-semibold text-accent tracking-wide mb-2">
            {focus.primary} + {focus.secondary}
          </p>
          <p className="text-base leading-relaxed mb-4">{focus.weekly}</p>
          <div className="progress-bar mb-1.5">
            <div className="progress-fill" style={{ width: '62%' }} />
          </div>
          <p className="text-xs text-muted">62% complete this week</p>
        </div>

        <div className="card">
          <p className="eyebrow mb-2">Monthly Project</p>
          {loading ? (
            <div className="space-y-2">
              <div className="h-4 bg-line rounded animate-pulse w-full" />
              <div className="h-4 bg-line rounded animate-pulse w-4/5" />
            </div>
          ) : content ? (
            <p className="text-sm leading-relaxed text-muted">{content.monthly_project}</p>
          ) : null}
        </div>
      </div>

      {/* Artist Spotlight + Resource */}
      {content && !loading && (
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="card">
            <p className="eyebrow mb-2">Artist Spotlight</p>
            <h3 className="font-serif text-2xl font-normal mb-2">{content.artist_spotlight.name}</h3>
            <p className="text-sm text-muted leading-relaxed">{content.artist_spotlight.why}</p>
          </div>

          <div className="card">
            <p className="eyebrow mb-2">Resource of the Week</p>
            <h3 className="font-serif text-xl font-normal mb-2">{content.resource.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{content.resource.why}</p>
          </div>
        </div>
      )}

      {/* Reflection */}
      <div className="card">
        <p className="eyebrow">Daily Artist Reflection</p>
        <p className="font-serif text-2xl font-normal italic text-secondary leading-snug mb-4 mt-1">
          "{THOUGHT_PROMPTS[promptIdx]}"
        </p>
        <textarea
          value={reflection}
          onChange={e => setReflection(e.target.value)}
          placeholder="10 minutes of honest writing. No editing."
          className="w-full border border-line rounded-xl bg-cream px-4 py-3 text-sm text-ink outline-none resize-y min-h-[100px] focus:border-accent transition-colors mb-4"
        />
        <div className="flex gap-2">
          <button
            onClick={saveReflection}
            disabled={saving || !reflection.trim()}
            className="btn btn-primary btn-sm"
          >
            {reflectionSaved ? 'Saved ✓' : saving ? 'Saving…' : 'Save reflection'}
          </button>
          <button
            onClick={() => setPromptIdx((promptIdx + 1) % THOUGHT_PROMPTS.length)}
            className="btn btn-ghost btn-sm"
          >
            New prompt
          </button>
        </div>
      </div>
    </div>
  )
}
