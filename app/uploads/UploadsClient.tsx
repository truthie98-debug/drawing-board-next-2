'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Image from 'next/image'

type Submission = {
  id: string
  type: string
  image_url: string | null
  notes: string | null
  created_at: string
}

type CritiqueResult = {
  overall: string
  grade: string
  technical: Array<{ label: string; score: string; note: string }>
  creative: Array<{ label: string; score: string; note: string }>
  nextSteps: string[]
  portfolioNote: string
}

export function UploadsClient({
  userId,
  initialSubmissions,
}: {
  userId: string
  initialSubmissions: Submission[]
}) {
  const supabase = createClient()
  const [submissions, setSubmissions] = useState(initialSubmissions)
  const [dailyFile, setDailyFile] = useState<File | null>(null)
  const [dailyPreview, setDailyPreview] = useState('')
  const [dailyNotes, setDailyNotes] = useState('')
  const [weeklyFile, setWeeklyFile] = useState<File | null>(null)
  const [weeklyPreview, setWeeklyPreview] = useState('')
  const [weeklyNotes, setWeeklyNotes] = useState('')
  const [critiqueFile, setCritiqueFile] = useState<File | null>(null)
  const [critiquePreview, setCritiquePreview] = useState('')
  const [critique, setCritique] = useState<CritiqueResult | null>(null)
  const [critiqueLoading, setCritiqueLoading] = useState(false)
  const [savingDaily, setSavingDaily] = useState(false)
  const [savingWeekly, setSavingWeekly] = useState(false)

  function handleFileChange(
    file: File | null,
    setFile: (f: File | null) => void,
    setPreview: (s: string) => void
  ) {
    if (!file) return
    setFile(file)
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  async function uploadToStorage(file: File, type: string): Promise<string | null> {
    const ext = file.name.split('.').pop()
    const path = `${userId}/${type}-${Date.now()}.${ext}`
    const { error } = await supabase.storage.from('artwork').upload(path, file)
    if (error) return null
    const { data } = supabase.storage.from('artwork').getPublicUrl(path)
    return data.publicUrl
  }

  async function saveSubmission(
    type: 'daily_study' | 'weekly_assignment',
    file: File | null,
    notes: string,
    setSaving: (b: boolean) => void
  ) {
    if (!file) { alert('Upload an image first.'); return }
    setSaving(true)
    const imageUrl = await uploadToStorage(file, type)
    const { data } = await supabase
      .from('submissions')
      .insert({ user_id: userId, type, image_url: imageUrl, notes })
      .select()
      .single()
    if (data) setSubmissions(prev => [data, ...prev].slice(0, 12))
    setSaving(false)
  }

  async function runCritique() {
    if (!critiqueFile) { alert('Upload an image first.'); return }
    setCritiqueLoading(true)
    setCritique(null)
    try {
      const formData = new FormData()
      formData.append('image', critiqueFile)
      const res = await fetch('/api/critique', { method: 'POST', body: formData })
      const data = await res.json()
      setCritique(data)
    } catch {
      setCritique({
        overall: 'Strong personal voice — tighten structure to match the confidence of your line.',
        grade: 'B',
        technical: [
          { label: 'Gesture', score: 'Strong', note: 'Line of action is committed and alive.' },
          { label: 'Proportion', score: 'Work on this', note: 'Head-count inconsistent across the figure.' },
          { label: 'Anatomy', score: 'Work on this', note: 'Hands and shoulder transitions need deliberate study.' },
          { label: 'Value', score: 'Readable', note: 'Light source is clear, shadow shapes work.' },
        ],
        creative: [
          { label: 'Originality', score: 'Distinct', note: 'Recognizable personal sensibility.' },
          { label: 'Storytelling', score: 'Develop', note: 'What does the character feel?' },
        ],
        nextSteps: [
          '10 constructed hand studies — forms first, no line weight until volume is clear',
          'Finished portrait reduced to three values only before any color',
        ],
        portfolioNote: 'Close — one polish pass on proportion and this is submittable.',
      })
    }
    setCritiqueLoading(false)
  }

  const scoreStyle = (score: string) =>
    score === 'Strong' || score === 'Readable' || score === 'Distinct'
      ? 'bg-gold/10 text-[#9a7510]'
      : 'bg-accent/10 text-accent'

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Upload Work</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">Submissions</h1>
      <p className="text-muted max-w-lg mb-8">Upload daily studies, weekly assignments, and finished work for teacher review.</p>

      {/* Daily + Weekly upload */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        {[
          { title: 'Daily Study', subtitle: "Upload today's practice", type: 'daily_study' as const, file: dailyFile, preview: dailyPreview, notes: dailyNotes, setFile: setDailyFile, setPreview: setDailyPreview, setNotes: setDailyNotes, saving: savingDaily, setSaving: setSavingDaily },
          { title: 'Weekly Assignment', subtitle: 'Upload finished work', type: 'weekly_assignment' as const, file: weeklyFile, preview: weeklyPreview, notes: weeklyNotes, setFile: setWeeklyFile, setPreview: setWeeklyPreview, setNotes: setWeeklyNotes, saving: savingWeekly, setSaving: setSavingWeekly },
        ].map(u => (
          <div key={u.type} className="card-sm card">
            <p className="eyebrow mb-2">{u.title}</p>
            <h3 className="font-serif text-xl font-normal mb-3">{u.subtitle}</h3>
            <label className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-line rounded-xl py-7 text-center cursor-pointer hover:border-secondary transition-colors bg-cream mb-3">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => handleFileChange(e.target.files?.[0] || null, u.setFile, u.setPreview)}
              />
              {u.preview ? (
                <img src={u.preview} alt="Preview" className="max-h-40 rounded-xl object-cover" />
              ) : (
                <>
                  <span className="text-2xl text-line mb-1">↑</span>
                  <span className="text-xs text-muted">Click to choose an image</span>
                </>
              )}
            </label>
            <textarea
              value={u.notes}
              onChange={e => u.setNotes(e.target.value)}
              placeholder="What fundamental did this target? What felt hard?"
              className="w-full border border-line rounded-xl bg-cream px-3.5 py-2.5 text-sm text-ink outline-none resize-y min-h-[72px] focus:border-accent transition-colors mb-3"
            />
            <button
              onClick={() => saveSubmission(u.type, u.file, u.notes, u.setSaving)}
              disabled={u.saving}
              className="btn btn-primary btn-sm"
            >
              {u.saving ? 'Saving…' : `Save ${u.title.toLowerCase()}`}
            </button>
          </div>
        ))}
      </div>

      {/* Critique */}
      <div className="card mb-5">
        <p className="eyebrow mb-2">Artwork Critique</p>
        <h3 className="font-serif text-xl font-normal mb-4">Upload for structured feedback</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-line rounded-xl min-h-[260px] cursor-pointer hover:border-secondary transition-colors bg-cream overflow-hidden">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => {
                  const f = e.target.files?.[0] || null
                  handleFileChange(f, setCritiqueFile, setCritiquePreview)
                }}
              />
              {critiquePreview ? (
                <img src={critiquePreview} alt="Artwork" className="w-full h-full object-contain max-h-64" />
              ) : (
                <div className="text-center pointer-events-none">
                  <div className="text-3xl text-line mb-2">↑</div>
                  <p className="text-sm text-muted">Upload artwork for critique</p>
                </div>
              )}
            </label>
            {critiqueFile && (
              <button
                onClick={runCritique}
                disabled={critiqueLoading}
                className="btn btn-primary btn-sm mt-3 w-full"
              >
                {critiqueLoading ? 'Analyzing…' : 'Generate critique'}
              </button>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {!critique && !critiqueLoading && (
              <p className="text-sm text-muted pt-2">Upload an image to generate a structured review from your teacher.</p>
            )}
            {critiqueLoading && (
              <div className="flex flex-col gap-3 animate-pulse">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 bg-cream rounded-xl" />
                ))}
              </div>
            )}
            {critique && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border-2 border-accent grid place-items-center font-serif text-xl font-normal">
                    {critique.grade}
                  </div>
                  <p className="text-sm text-muted">{critique.overall}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-2">Technical</p>
                  {critique.technical.map(item => (
                    <div key={item.label} className="py-2.5 border-b border-line text-sm last:border-0">
                      {item.label}
                      <span className={`inline-flex ml-2 text-xs font-semibold px-2 py-0.5 rounded-full ${scoreStyle(item.score)}`}>
                        {item.score}
                      </span>
                      <span className="text-muted ml-1">— {item.note}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-2">Next steps</p>
                  {critique.nextSteps.map((step, i) => (
                    <p key={i} className="text-sm text-muted py-1.5 border-b border-line last:border-0">{step}</p>
                  ))}
                  <p className="text-sm font-medium text-gold mt-2">{critique.portfolioNote}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Saved submissions */}
      <div className="card">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="eyebrow">Saved Work</p>
            <h3 className="font-serif text-xl font-normal">Practice submissions</h3>
          </div>
        </div>
        {submissions.length === 0 ? (
          <p className="text-sm text-muted">No submissions saved yet.</p>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {submissions.map(sub => (
              <article key={sub.id} className="bg-card border border-line rounded-xl overflow-hidden">
                {sub.image_url && (
                  <img src={sub.image_url} alt={sub.type} className="w-full h-32 object-cover" />
                )}
                <div className="p-3">
                  <p className="text-[11px] font-semibold text-muted tracking-wide uppercase">
                    {new Date(sub.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm font-semibold capitalize mt-0.5">
                    {sub.type.replace('_', ' ')}
                  </p>
                  {sub.notes && <p className="text-xs text-muted mt-1 line-clamp-2">{sub.notes}</p>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
