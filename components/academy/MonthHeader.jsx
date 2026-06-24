'use client'

export default function MonthHeader({ curriculum, currentDay, completedDays, streak }) {
  const percentage = Math.round((completedDays / curriculum.totalDays) * 100)

  return (
    <div className="card">
      <p className="eyebrow">Active Curriculum</p>
      <h1 className="font-serif text-4xl font-normal tracking-tight leading-none mb-1">
        {curriculum.title}
      </h1>
      <p className="text-muted text-sm mb-6">{curriculum.subtitle}</p>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-cream border border-line rounded-xl p-3 text-center">
          <p className="text-accent text-xl font-semibold">{completedDays}</p>
          <p className="text-muted text-xs mt-0.5">Days Done</p>
        </div>
        <div className="bg-cream border border-line rounded-xl p-3 text-center">
          <p className="text-accent text-xl font-semibold">{streak}</p>
          <p className="text-muted text-xs mt-0.5">Day Streak</p>
        </div>
        <div className="bg-cream border border-line rounded-xl p-3 text-center">
          <p className="text-accent text-xl font-semibold">{percentage}%</p>
          <p className="text-muted text-xs mt-0.5">Complete</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-muted mb-2">
          <span>Progress</span>
          <span>Day {currentDay} of {curriculum.totalDays}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
