'use client'

import type { Fundamental } from '@/lib/exercises'

export function DashboardClient({
  profile,
  todayFundamental,
  completedDates,
  teacherReview,
  today,
}: {
  profile: Record<string, string | number>
  todayFundamental: Fundamental
  completedDates: string[]
  teacherReview: string
  today: string
}) {
  const doneSet = new Set(completedDates)

  const now = new Date()
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const todayNum = now.getDate()

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
              Completed
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
