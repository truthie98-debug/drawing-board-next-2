'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { THOUGHT_PROMPTS, type MonthFocus } from '@/lib/curriculum'

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

  const modeLabel =
    mode === 'combined'
      ? `${focus.primary} + ${focus.secondary}`
      : mode === 'primary'
      ? focus.primary
      : focus.secondary

  function randomizeAssignment() {
    const modes: Array<'primary' | 'secondary' | 'combined'> = ['primary', 'secondary', 'combined']
    setMode(modes[Math.floor(Math.random() * modes.length)])
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
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">Daily Work</h1>
      <p className="text-muted max-w-lg mb-6">Two fundamentals. Daily rotation. Never more than two at once.</p>

      {/* Month focus banner */}
      <div className="card mb-5 flex items-center justify-between gap-5 py-5 px-7">
        <div>
          <p className="eyebrow">Monthly Focus Rule</p>
          <p className="font-medium mt-1">Month {focus.month} · {focus.primary} + {focus.secondary}</p>
          <p className="text-xs text-muted mt-1">{focus.note}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <span className="pill">{focus.primary}</span>
          <span className="pill pill-neutral">{focus.secondary}</span>
        </div>
      </div>

      {/* Daily + Weekly */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="card">
          <div
            className={`inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide mb-3 ${completed ? 'opacity-50' : ''}`}
          >
            {completed ? '✓ Completed · ' : ''}{modeLabel}
          </div>
          <p className="font-serif text-xl font-normal leading-snug mb-5">
            {focus.daily[mode]}
          </p>
          <div className="flex gap-2 flex-wrap">
            {!completed ? (
              <button onClick={markComplete} className="btn btn-primary btn-sm">
                Mark complete
              </button>
            ) : (
              <span className="btn btn-sm bg-gold/10 text-[#9a7510]">Done for today ✓</span>
            )}
            <button onClick={randomizeAssignment} className="btn btn-ghost btn-sm">
              Generate another
            </button>
          </div>
        </div>

        <div className="card">
          <p className="eyebrow">Weekly Studio</p>
          <p className="text-sm font-semibold text-secondary tracking-wide mb-1.5">
            {focus.primary} + {focus.secondary}
          </p>
          <p className="text-base leading-relaxed mb-5">{focus.weekly}</p>
          <div className="progress-bar mb-1.5">
            <div className="progress-fill" style={{ width: '62%' }} />
          </div>
          <p className="text-xs text-muted">62% complete this week</p>
        </div>
      </div>

      {/* Daily Reflection */}
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
