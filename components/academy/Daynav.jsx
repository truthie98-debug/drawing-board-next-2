'use client'

export default function DayNav({ currentDay, totalDays, unlockedUpTo, onPrev, onNext }) {
  const canGoPrev = currentDay > 1
  const canGoNext = currentDay < unlockedUpTo

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
          canGoPrev
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-100 text-gray-300 cursor-not-allowed'
        }`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      <div className="text-center">
        <p className="text-sm font-black text-gray-900">Day {currentDay}</p>
        <p className="text-xs text-gray-400">of {totalDays}</p>
      </div>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
          canGoNext
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-100 text-gray-300 cursor-not-allowed'
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
