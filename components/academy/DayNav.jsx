'use client'

export default function DayNav({ currentDay, totalDays, unlockedUpTo, onPrev, onNext }) {
  const canGoPrev = currentDay > 1
  const canGoNext = currentDay < unlockedUpTo

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`btn btn-md ${
          canGoPrev ? 'btn-ghost' : 'opacity-30 cursor-not-allowed btn-ghost'
        }`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      <div className="text-center">
        <p className="font-serif text-lg font-normal text-ink">Day {currentDay}</p>
        <p className="text-xs text-muted">of {totalDays}</p>
      </div>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`btn btn-md ${
          canGoNext ? 'btn-ghost' : 'opacity-30 cursor-not-allowed btn-ghost'
        }`}
      >
        Next
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
