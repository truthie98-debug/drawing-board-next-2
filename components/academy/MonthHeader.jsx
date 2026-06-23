'use client'

export default function MonthHeader({ curriculum, currentDay, completedDays, streak }) {
  const percentage = Math.round((completedDays / curriculum.totalDays) * 100)

  return (
    <div className="bg-black rounded-2xl p-6 text-white">
      <div className="mb-4">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">
          Active Curriculum
        </p>
        <h1 className="text-2xl font-black leading-tight">{curriculum.title}</h1>
        <p className="text-gray-400 text-sm mt-1">{curriculum.subtitle}</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-yellow-400 text-xl font-black">{completedDays}</p>
          <p className="text-gray-400 text-xs mt-0.5">Days Done</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-yellow-400 text-xl font-black">{streak}</p>
          <p className="text-gray-400 text-xs mt-0.5">Day Streak</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-yellow-400 text-xl font-black">{percentage}%</p>
          <p className="text-gray-400 text-xs mt-0.5">Complete</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Progress</span>
          <span>Day {currentDay} of {curriculum.totalDays}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2.5">
          <div
            className="bg-yellow-400 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
