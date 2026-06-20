'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { FUNDAMENTALS, getDailyExercise, getRandomExercise, type Exercise } from '@/lib/exercises'
import { THOUGHT_PROMPTS } from '@/lib/curriculum'
import type { ColorExercise } from '@/lib/color-lab'

type ColorLabCompletion = {
  id: string
  image_url: string | null
  notes: string | null
  completed_at: string
} | null

export function AssignmentsClient({
  userId,
  initialFundamentalIndex,
  initialExercise,
  colorLabExercise,
  weekKey,
  initialColorLabCompletion,
}: {
  userId: string
  initialFundamentalIndex: number
  initialExercise: Exercise | null
  colorLabExercise: ColorExercise
  weekKey: string
  initialColorLabCompletion: ColorLabCompletion
}) {
  const supabase = createClient()
  const [fundamentalIndex, setFundamentalIndex] = useState(initialFundamentalIndex)
  const [exercise, setExercise] = useState(initialExercise)
  const [completed, setCompleted] = useState(false)
  const [promptIdx, setPromptIdx] = useState(0)
  const [reflection, setReflection] = useState('')
  const [reflectionSaved, setReflectionSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  // Color Lab state
  const [colorLabCompletion, setColorLabCompletion] = useState(initialColorLabCompletion)
  const [colorLabFile, setColorLabFile] = useState<File | null>(null)
  const [colorLabPreview, setColorLabPreview] = useState('')
  const [colorLabNotes, setColorLabNotes] = useState('')
  const [colorLabSaving, setColorLabSaving] = useState(false)

  const fundamental = FUNDAMENTALS[fundamentalIndex]

  function selectFundamental(index: number) {
    setFundamentalIndex(index)
    setExercise(getDailyExercise(FUNDAMENTALS[index].id))
    setCompleted(false)
  }

  function shuffleExercise() {
    setExercise(getRandomExercise(fundamental.id, exercise?.id))
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

  function handleColorLabFile(file: File | null) {
    if (!file) return
    setColorLabFile(file)
    const reader = new FileReader()
    reader.onload = () => setColorLabPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  async function saveColorLabCompletion() {
    setColorLabSaving(true)
    let imageUrl: string | null = null

    if (colorLabFile) {
      const ext = colorLabFile.name.split('.').pop()
      const path = `${userId}/color-lab-${weekKey}-${Date.now()}.${ext}`
      const { error: uploadError } = await supabase.storage.from('artwork').upload(path, colorLabFile)
      if (!uploadError) {
        const { data } = supabase.storage.from('artwork').getPublicUrl(path)
        imageUrl = data.publicUrl
      }
    }

    const { data } = await supabase
      .from('color_lab_completions')
      .upsert(
        {
          user_id: userId,
          exercise_id: colorLabExercise.id,
          week_key: weekKey,
          image_url: imageUrl,
          notes: colorLabNotes.trim() || null,
          completed_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,week_key' }
      )
      .select()
      .single()

    if (data) setColorLabCompletion(data)
    setColorLabSaving(false)
  }

  return (
    <div className="max-w-[800px] mx-auto px-6 py-10 pb-16">
      <p className="eyebrow">Today's Mission</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-2">Daily Study</h1>
      <p className="text-muted mb-6">One focused exercise. 30 minutes or less. Start right now.</p>

      {/* Fundamental picker — simple pills, no overload */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {FUNDAMENTALS.map((f, i) => (
          <button
            key={f.id}
            onClick={() => selectFundamental(i)}
            className={`btn btn-sm ${i === fundamentalIndex ? 'btn-primary' : 'btn-ghost'}`}
          >
            {f.name}
          </button>
        ))}
      </div>

      {/* The exercise card — Goal / How / Review, nothing more */}
      {exercise && (
        <div className="card mb-6">
          <div className={`inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide mb-4 ${completed ? 'opacity-50' : ''}`}>
            {completed ? '✓ Completed · ' : ''}{fundamental.name}
          </div>

          <h2 className="font-serif text-3xl font-normal tracking-tight mb-5">{exercise.title}</h2>

          <div className="mb-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1.5">Goal</p>
            <p className="text-base leading-snug">{exercise.goal}</p>
          </div>

          <div className="mb-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-2">How</p>
            <ol className="flex flex-col gap-2">
              {exercise.how.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-cream border border-line grid place-items-center text-xs font-semibold text-secondary">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-cream border border-line rounded-xl px-4 py-3 mb-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1">Review</p>
            <p className="text-sm font-serif italic text-secondary">{exercise.review}</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {!completed ? (
              <button onClick={markComplete} className="btn btn-primary btn-md">
                Mark complete
              </button>
            ) : (
              <span className="btn btn-md bg-gold/10 text-[#9a7510]">Done for today ✓</span>
            )}
            <button onClick={shuffleExercise} className="btn btn-ghost btn-md">
              Try a different one
            </button>
          </div>
        </div>
      )}

      {/* ───────────── Weekly Color Lab ───────────── */}
      <div className="card mb-6 border-secondary/30">
        <div className={`inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide mb-4 ${colorLabCompletion ? 'opacity-60' : ''}`}>
          {colorLabCompletion ? '✓ Completed this week · ' : ''}Weekly Color Lab
        </div>

        <h2 className="font-serif text-3xl font-normal tracking-tight mb-1">{colorLabExercise.title}</h2>
        <p className="text-xs text-muted mb-5">{colorLabExercise.category} · active all week</p>

        <div className="mb-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1.5">Goal</p>
          <p className="text-base leading-snug">{colorLabExercise.goal}</p>
        </div>

        <div className="mb-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-2">How</p>
          <ol className="flex flex-col gap-2">
            {colorLabExercise.how.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="shrink-0 w-5 h-5 rounded-full bg-cream border border-line grid place-items-center text-xs font-semibold text-secondary">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-cream border border-line rounded-xl px-4 py-3 mb-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1">Review</p>
          <p className="text-sm font-serif italic text-secondary">{colorLabExercise.review}</p>
        </div>

        {colorLabCompletion ? (
          <div className="flex gap-4 items-start">
            {colorLabCompletion.image_url && (
              <img
                src={colorLabCompletion.image_url}
                alt="Color Lab submission"
                className="w-24 h-24 rounded-xl object-cover border border-line"
              />
            )}
            <div>
              <p className="text-sm font-semibold text-[#9a7510] mb-1">Saved for this week ✓</p>
              {colorLabCompletion.notes && (
                <p className="text-sm text-muted">{colorLabCompletion.notes}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <label className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-line rounded-xl py-6 text-center cursor-pointer hover:border-secondary transition-colors bg-cream">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => handleColorLabFile(e.target.files?.[0] || null)}
              />
              {colorLabPreview ? (
                <img src={colorLabPreview} alt="Preview" className="max-h-36 rounded-xl object-cover" />
              ) : (
                <>
                  <span className="text-2xl text-line mb-1">↑</span>
                  <span className="text-xs text-muted">Upload your Color Lab piece (optional)</span>
                </>
              )}
            </label>
            <textarea
              value={colorLabNotes}
              onChange={e => setColorLabNotes(e.target.value)}
              placeholder="Any notes on this challenge? (optional)"
              className="w-full border border-line rounded-xl bg-cream px-3.5 py-2.5 text-sm text-ink outline-none resize-y min-h-[60px] focus:border-accent transition-colors"
            />
            <button
              onClick={saveColorLabCompletion}
              disabled={colorLabSaving}
              className="btn btn-primary btn-sm self-start"
            >
              {colorLabSaving ? 'Saving…' : 'Mark Color Lab complete'}
            </button>
          </div>
        )}
      </div>

      {/* Daily Reflection — kept simple */}
      <div className="card">
        <p className="eyebrow">Daily Artist Reflection</p>
        <p className="font-serif text-xl font-normal italic text-secondary leading-snug mb-4 mt-1">
          "{THOUGHT_PROMPTS[promptIdx]}"
        </p>
        <textarea
          value={reflection}
          onChange={e => setReflection(e.target.value)}
          placeholder="A few honest sentences. No editing."
          className="w-full border border-line rounded-xl bg-cream px-4 py-3 text-sm text-ink outline-none resize-y min-h-[90px] focus:border-accent transition-colors mb-4"
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
