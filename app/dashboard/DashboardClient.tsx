'use client'

import { useState } from 'react'
import { TEACHER_FEEDBACK, type MonthFocus } from '@/lib/curriculum'

type Streak = { date: string; completed_active: boolean }

export function DashboardClient({
  profile,
  focus,
  streaks,
  activeStreak,
  today,
}: {
  profile: Record<string, string | number>
  focus: MonthFocus
  streaks: Streak[]
  activeStreak: number
  today: string
}) {
  const [feedback, setFeedback] = useState(
    profile.weaknesses
      ? `Your curriculum is prioritizing ${String(profile.weaknesses).split(',')[0].trim().toLowerCase()} while protecting your strengths in ${String(profile.strengths || '').split(',')[0]?.trim().toLowerCase() || 'personal expression'}.`
      : TEACHER_FEEDBACK[0]
  )

  const doneSet = new Set(streaks.filter(s => s.completed_active).map(s => s.date))
  const monthProgress = Math.round(((new Date().getDate()) / 30) * 100)

  const now = new Date()
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const todayNum = now.getDate()

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Studio Dashboard</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-8">
        Welcome back, {profile.artist_name}
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="card">
          <div className="flex items-start justify-between mb-4">
            <p className="eyebrow">This Month</p>
            <span className="pill text-[11px]">Max 2 fundamentals</span>
          </div>
          <h2 className="font-serif text-2xl font-normal tracking-tight mb-2">
            Month {focus.month} · {focus.primary} + {focus.secondary}
          </h2>
          <p className="text-muted text-xs mb-4">{focus.note}</p>
          <div className="flex gap-2 mb-4">
            <span className="pill">{focus.primary}</span>
            <span className="pill pill-neutral">{focus.secondary}</span>
          </div>
          <div className="progress-bar mb-1.5">
            <div className="progress-fill" style={{ width: `${monthProgress}%` }} />
          </div>
          <p className="text-xs text-muted">Month {monthProgress}% complete</p>
        </div>

        <div className="card">
          <p className="eyebrow mb-3">Streaks</p>
          {[
            { label: 'Active Work', value: `${activeStreak} days` },
            { label: 'Daily Reflections', value: '5 days' },
            { label: 'Weekly Assignments', value: '3 weeks' },
          ].map(row => (
            <div key={row.label} className="flex justify-between items-center py-3 border-b border-line last:border-0">
              <span className="text-sm">{row.label}</span>
              <strong className="font-serif text-xl font-normal">{row.value}</strong>
            </div>
          ))}
        </div>

        <div className="card">
          <p className="eyebrow mb-2">Teacher</p>
          <div className="teacher-block">{feedback}</div>
          <div className="flex gap-2 mt-3">
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setFeedback(TEACHER_FEEDBACK[Math.floor(Math.random() * TEACHER_FEEDBACK.length)])}
            >
              New feedback
            </button>
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
              Study done
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
            const done = doneSet.has(dateStr)
            const isToday = day === todayNum
            return (
              <div
                key={day}
                className={`aspect-square rounded-xl p-1.5 text-xs border ${
                  isToday ? 'border-accent border-[1.5px]' : done ? 'border-gold/40 bg-[#FFF8E0]' : 'border-line bg-cream'
                }`}
              >
                <strong className="block text-xs font-semibold">{day}</strong>
                <span className="text-[10px] text-muted">{isToday ? 'Today' : done ? '✓' : ''}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
