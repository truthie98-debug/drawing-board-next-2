'use client'

import { useState } from 'react'
import type { Fundamental } from '@/lib/exercises'

type Submission = {
  id: string
  type: string
  image_url: string | null
  notes: string | null
  created_at: string
}
type Streak = { date: string; completed_active: boolean }
type ColorLabCompletion = {
  id: string
  image_url: string | null
  notes: string | null
  completed_at: string
}
type Reflection = {
  id: string
  prompt: string
  response: string
  created_at: string
}

type DayItem = {
  type: 'upload' | 'daily' | 'colorlab' | 'reflection'
  label: string
  imageUrl?: string | null
  text?: string | null
}

function toLocalDateStr(input: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) return input
  const d = new Date(input)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const TYPE_NAMES: Record<string, string> = {
  daily: 'Daily Exercise',
  upload: 'Upload',
  colorlab: 'Color Lab',
  reflection: 'Reflection',
}

export function DashboardClient({
  profile,
  todayFundamental,
  submissions,
  streaks,
  colorLabCompletions,
  reflections,
  teacherReview,
}: {
  profile: Record<string, string | number>
  todayFundamental: Fundamental
  submissions: Submission[]
  streaks: Streak[]
  colorLabCompletions: ColorLabCompletion[]
  reflections: Reflection[]
  teacherReview: string
}) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [asking, setAsking] = useState(false)

  async function askTeacher() {
    if (!question.trim() || asking) return
    setAsking(true)
    setAnswer('')
    try {
      const res = await fetch('/api/teacher-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, submissions }),
      })
      const data = await res.json()
      setAnswer(data.answer || data.error || 'Something went wrong.')
    } catch {
      setAnswer('Something went wrong — try again.')
    }
    setAsking(false)
  }

  const dayMap = new Map<string, DayItem[]>()
  function addItem(dateKey: string, item: DayItem) {
    if (!dayMap.has(dateKey)) dayMap.set(dateKey, [])
    dayMap.get(dateKey)!.push(item)
  }

  submissions.forEach(s => {
    addItem(toLocalDateStr(s.created_at), {
      type: 'upload',
      label: `${TYPE_NAMES.upload} — ${s.type.replace('_', ' ')}`,
      imageUrl: s.image_url,
      text: s.notes,
    })
  })
  streaks.forEach(s => {
    addItem(s.date, {
      type: 'daily',
      label: TYPE_NAMES.daily,
    })
  })
  colorLabCompletions.forEach(c => {
    addItem(toLocalDateStr(c.completed_at), {
      type: 'colorlab',
      label: TYPE_NAMES.colorlab,
      imageUrl: c.image_url,
      text: c.notes,
    })
  })
  reflections.forEach(r => {
    addItem(toLocalDateStr(r.created_at), {
      type: 'reflection',
      label: TYPE_NAMES.reflection,
      text: r.response,
    })
  })

  const now = new Date()
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const todayNum = now.getDate()

  const selectedItems = selectedDay ? dayMap.get(selectedDay) || [] : []

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Studio Dashboard</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-8">
        Welcome back, {profile.artist_name}
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="card">
          <div className="flex items-start justify-between mb-4">
            <p className="eyebrow">Today's Fundamental</p>
            <span className="pill text-[11px]">1 of 5</span>
          </div>
          <h2 className="font-serif text-2xl font-normal tracking-tight mb-2">
            {todayFundamental.name}
          </h2>
          <p className="text-muted text-xs mb-4">{todayFundamental.tagline}</p>
          <a href="/assignments" className="btn btn-primary btn-sm">Start today's mission</a>
        </div>

        <div className="card">
          <p className="eyebrow mb-2">Teacher</p>
          <div className="teacher-block">{teacherReview}</div>

          <div className="mt-4 pt-4 border-t border-line">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-2">Ask about your work</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && askTeacher()}
                placeholder="What should I focus on next?"
                className="flex-1 border border-line rounded-xl bg-cream px-3 py-2 text-sm text-ink outline-none focus:border-accent transition-colors"
              />
              <button onClick={askTeacher} disabled={asking || !question.trim()} className="btn btn-primary btn-sm">
                {asking ? '...' : 'Ask'}
              </button>
            </div>
            {answer && <p className="text-sm text-muted mt-3 leading-relaxed">{answer}</p>}
          </div>

          <div className="flex gap-2 mt-3">
            <a href="/uploads" className="btn btn-ghost btn-sm">Submit work</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-serif text-xl font-normal">
            {now.toLocaleString('default', { month: 'long' })} {now.getFullYear()}
          </h3>
          <div className="flex gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FFF8E0] border border-gold/40 inline-block" />
              Completed (click to view)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm border border-accent border-[1.5px] inline-block" />
              Today
            </span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1
            const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
            const items = dayMap.get(dateStr)
            const done = !!items && items.length > 0
            const isToday = day === todayNum
            return (
              <button
                key={day}
                onClick={() => done && setSelectedDay(dateStr)}
                disabled={!done}
                className={`aspect-square rounded-xl p-1.5 text-xs border text-left ${
                  isToday ? 'border-accent border-[1.5px]' : done ? 'border-gold/40 bg-[#FFF8E0] cursor-pointer hover:border-gold transition-colors' : 'border-line bg-cream cursor-default'
                }`}
              >
                <strong className="block text-xs font-semibold">{day}</strong>
                <span className="text-[10px] text-muted">{isToday ? 'Today' : done ? '✓' : ''}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Day detail popup */}
      {selectedDay && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDay(null)}
        >
          <div
            className="bg-card max-w-md w-full rounded-2xl p-6 max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl font-normal">
                {new Date(selectedDay + 'T00:00:00').toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
              </h3>
              <button onClick={() => setSelectedDay(null)} className="text-muted text-xl leading-none">×</button>
            </div>
            <div className="flex flex-col gap-3">
              {selectedItems.map((item, i) => (
                <div key={i} className="border border-line rounded-xl p-3">
                  <p className="text-xs font-semibold text-secondary tracking-wide uppercase mb-2">{item.label}</p>
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.label} className="w-full rounded-lg object-cover max-h-48 mb-2" />
                  )}
                  {item.text && <p className="text-sm text-muted">{item.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
