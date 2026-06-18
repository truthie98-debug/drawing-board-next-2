'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { THOUGHT_PROMPTS, type MonthFocus } from '@/lib/curriculum'

type DailyContent = {
  objective: string
  why: string
  instructions: string[]
  mistakes: string[]
  success: string
  reflection: string
  encouragement: string
}

function Skeleton() {
  return (
    <div className="space-y-3">
      <div className="h-4 bg-line rounded animate-pulse w-3/4" />
      <div className="h-4 bg-line rounded animate-pulse w-full" />
      <div className="h-4 bg-line rounded animate-pulse w-2/3" />
    </div>
  )
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
  const [daily, setDaily] = useState<DailyContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'capstone'>('daily')

  const dailyExercise = focus.daily[mode]
  const modeLabel = mode === 'combined'
    ? `${focus.primary} + ${focus.secondary}`
    : mode === 'primary' ? focus.primary : focus.secondary

  const loadDaily = useCallback(async () => {
    setLoading(true)
    setDaily(null)
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
      if (!res.ok) return
      const data = await res.json()
      if (data.error) return
      setDaily(data)
    } catch {
      // fail silently
    } finally {
      setLoading(false)
    }
  }, [focus, dailyExercise])

  useEffect(() => { loadDaily() }, [loadDaily])

  function randomizeAssignment() {
    const modes: Array<'primary' | 'secondary' | 'combined'> = ['primary', 'secondary', 'combined']
    setMode(modes.filter(m => m !== mode)[Math.floor(Math.random() * 2)])
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

  const artist = focus.artist
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Study</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">
        Month {focus.month} · {focus.primary} + {focus.secondary}
      </h1>
      <p className="text-muted max-w-lg mb-8">{focus.note}</p>

      <div className="card mb-5">
        <p className="eyebrow mb-4">Artist of the Week</p>
        <div className="flex items-start justify-between gap-6 mb-5">
          <div>
            <h2 className="font-serif text-3xl font-normal mb-1">{artist.name}</h2>
            <p className="text-sm text-accent font-semibold tracking-wide mb-2">{artist.discipline}</p>
            <p className="text-sm text-muted mb-2">{artist.known_for}</p>
            <p className="text-sm text-muted italic">{artist.why_selected}</p>
          </div>
          
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(artist.youtube_search)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm shrink-0"
          >
            Watch on YouTube →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {artist.lessons.map((lesson, i) => (
            <div key={i} className="bg-cream border border-line rounded-xl p-4">
              <p className="font-serif text-2xl font-normal text-line mb-2">{String(i + 1).padStart(2, '0')}</p>
              <p className="text-sm">{lesson}</p>
            </div>
          ))}
        </div>
        <div className="teacher-block border-l-[3px] border-accent">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">This Week's Study Challenge</p>
          <p className="text-sm leading-relaxed">{artist.study_challenge}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-5 border-b border-line">
        {(['daily', 'weekly', 'capstone'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
              activeTab === tab ? 'border-accent text-accent' : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            {tab === 'daily' ? 'Daily Study' : tab === 'weekly' ? 'Weekly Assignment' : 'Monthly Capstone'}
          </button>
        ))}
      </div>

      {activeTab === 'daily' && (
        <>
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
            {loading ? <Skeleton /> : daily ? (
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Objective</p>
                  <p className="text-sm leading-relaxed">{daily.objective}</p>
                </div>
                <div className="teacher-block">
                  <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Why this exercise exists</p>
                  <p className="text-sm leading-relaxed">{daily.why}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Instructions</p>
                  <div className="space-y-2">
                    {daily.instructions.map((step, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="font-serif text-xl font-normal text-line shrink-0 w-6">{i + 1}</span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="teacher-block border-l-[3px] border-gold/60">
                  <p className="text-xs font-semibold text-[#9a7510] tracking-widest uppercase mb-2">Mistakes to avoid</p>
                  <ul className="space-y-1">
                    {daily.mistakes.map((m, i) => <li key={i} className="text-sm">— {m}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">What success looks like</p>
                  <p className="text-sm leading-relaxed">{daily.success}</p>
                </div>
              </div>
            ) : null}
            <div className="flex gap-2 flex-wrap">
              {!completed ? (
                <button onClick={markComplete} className="btn btn-primary btn-sm">Mark complete</button>
              ) : (
                <span className="btn btn-sm bg-gold/10 text-[#9a7510]">Done for today ✓</span>
              )}
            </div>
            {completed && daily && (
              <p className="text-sm text-muted mt-4 italic">{daily.encouragement}</p>
            )}
          </div>
          <div className="card mb-5">
            <p className="eyebrow mb-2">After Your Study</p>
            {daily && (
              <p className="font-serif text-xl font-normal italic text-secondary leading-snug mb-4">
                "{daily.reflection}"
              </p>
            )}
            <p className="font-serif text-lg font-normal italic text-muted leading-snug mb-4">
              "{THOUGHT_PROMPTS[promptIdx]}"
            </p>
            <textarea
              value={reflection}
              onChange={e => setReflection(e.target.value)}
              placeholder="10 minutes of honest writing. No editing."
              className="w-full border border-line rounded-xl bg-cream px-4 py-3 text-sm text-ink outline-none resize-y min-h-[100px] focus:border-accent transition-colors mb-4"
            />
            <div className="flex gap-2">
              <button onClick={saveReflection} disabled={saving || !reflection.trim()} className="btn btn-primary btn-sm">
                {reflectionSaved ? 'Saved ✓' : saving ? 'Saving…' : 'Save reflection'}
              </button>
              <button onClick={() => setPromptIdx((promptIdx + 1) % THOUGHT_PROMPTS.length)} className="btn btn-ghost btn-sm">
                New prompt
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === 'weekly' && (
        <div className="card mb-5">
          <p className="eyebrow mb-2">Weekly Assignment</p>
          <p className="font-serif text-2xl font-normal leading-snug mb-4">{focus.weekly}</p>
          <div className="progress-bar mb-1.5">
            <div className="progress-fill" style={{ width: '62%' }} />
          </div>
          <p className="text-xs text-muted">62% complete this week</p>
        </div>
      )}

      {activeTab === 'capstone' && (
        <div className="card mb-5">
          <p className="eyebrow mb-2">Monthly Capstone</p>
          <p className="font-serif text-2xl font-normal leading-snug mb-4">
            {focus.primary} + {focus.secondary}
          </p>
          <p className="text-sm text-muted leading-relaxed">
            This month's capstone combines both fundamentals into one finished piece.
            Your work should demonstrate clear {focus.primary.toLowerCase()} and intentional {focus.secondary.toLowerCase()}.
            Upload your final piece plus at least two process studies showing your development.
          </p>
        </div>
      )}
    </div>
  )
}
