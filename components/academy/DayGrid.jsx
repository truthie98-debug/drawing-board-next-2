'use client'

import { useState } from 'react'

export default function DayGrid({ curriculum, currentDay, completedDays, unlockedUpTo, uploads, onSelectDay }) {
  const [modalDay, setModalDay] = useState(null)

  const dayUploads = uploads?.[modalDay] ?? {}
  const hasUploads = Object.values(dayUploads).some(Boolean)

  function getDayState(day) {
    if (completedDays.includes(day)) return 'complete'
    if (day === currentDay) return 'current'
    if (day <= unlockedUpTo) return 'unlocked'
    return 'locked'
  }

  function handleDayClick(day) {
    const state = getDayState(day)
    if (state === 'locked') return
    if (state === 'complete' && uploads?.[day]) {
      setModalDay(day)
      return
    }
    onSelectDay(day)
  }

  const dayData = curriculum.days.find(d => d.day === modalDay)

  return (
    <>
      <div className="card">
        <p className="eyebrow mb-3">30-Day Progress</p>
        <div className="grid grid-cols-6 gap-2">
          {curriculum.days.map(({ day, topic }) => {
            const state = getDayState(day)
            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                disabled={state === 'locked'}
                title={state !== 'locked' ? `Day ${day} — ${topic}` : `Day ${day} — locked`}
                className={`
                  aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-semibold
                  transition-all duration-200 relative
                  ${state === 'complete'
                    ? 'bg-accent text-white hover:opacity-90'
                    : state === 'current'
                    ? 'bg-cream border-2 border-accent text-ink'
                    : state === 'unlocked'
                    ? 'bg-cream border border-line text-ink hover:border-accent'
                    : 'bg-cream text-muted cursor-not-allowed opacity-40'
                  }
                `}
              >
                <span>{day}</span>
                {state === 'complete' && uploads?.[day] && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                )}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-4 mt-4 flex-wrap">
          {[
            { color: 'bg-accent', label: 'Complete' },
            { color: 'bg-cream border-2 border-accent', label: 'Today' },
            { color: 'bg-cream border border-line', label: 'Unlocked' },
            { color: 'bg-cream opacity-40', label: 'Locked' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded ${color}`} />
              <span className="text-xs text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {modalDay && (
        <div
          className="fixed inset-0 bg-ink/40 z-50 flex items-center justify-center p-4"
          onClick={() => setModalDay(null)}
        >
          <div
            className="card max-w-md w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="eyebrow">Day {modalDay}</p>
                <h3 className="font-serif text-2xl font-normal tracking-tight">
                  {dayData?.topic}
                </h3>
              </div>
              <button
                onClick={() => setModalDay(null)}
                className="text-muted hover:text-ink transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {hasUploads ? (
              <div className="space-y-4">
                {dayData?.exercises.map(ex => {
                  const url = dayUploads[ex.id]
                  if (!url) return null
                  return (
                    <div key={ex.id}>
                      <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">
                        {ex.title}
                      </p>
                      <img
                        src={url}
                        alt={ex.title}
                        className="w-full rounded-xl object-cover max-h-56 border border-line"
                      />
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-muted text-sm text-center py-6">
                No uploads for this day.
              </p>
            )}

            <button
              onClick={() => { onSelectDay(modalDay); setModalDay(null) }}
              className="btn btn-primary btn-md w-full mt-4"
            >
              Go to Day {modalDay}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
