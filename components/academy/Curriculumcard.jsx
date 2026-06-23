'use client'

export default function CurriculumCard({ curriculum, status, onStart }) {
  const statusConfig = {
    available: {
      badge: null,
      buttonLabel: 'Start Curriculum',
      buttonStyle: 'bg-yellow-400 text-black hover:bg-yellow-300',
      cardStyle: 'border-gray-200 hover:border-yellow-400',
      disabled: false,
    },
    active: {
      badge: 'In Progress',
      badgeStyle: 'bg-yellow-400 text-black',
      buttonLabel: 'Continue',
      buttonStyle: 'bg-black text-white hover:bg-gray-800',
      cardStyle: 'border-yellow-400',
      disabled: false,
    },
    complete: {
      badge: 'Complete',
      badgeStyle: 'bg-green-100 text-green-700',
      buttonLabel: 'Review',
      buttonStyle: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      cardStyle: 'border-gray-200',
      disabled: false,
    },
    locked: {
      badge: 'Locked',
      badgeStyle: 'bg-gray-100 text-gray-400',
      buttonLabel: 'Complete previous curriculum first',
      buttonStyle: 'bg-gray-100 text-gray-300 cursor-not-allowed',
      cardStyle: 'border-gray-100 opacity-60',
      disabled: true,
    },
  }

  const config = statusConfig[status] ?? statusConfig.available

  return (
    <div className={`border-2 rounded-2xl p-6 transition-all duration-200 bg-white ${config.cardStyle}`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {curriculum.totalDays} Days
        </span>
        {config.badge && (
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${config.badgeStyle}`}>
            {config.badge}
          </span>
        )}
      </div>

      <h2 className="text-xl font-black text-gray-900 leading-tight mb-1">
        {curriculum.title}
      </h2>
      <p className="text-sm text-gray-500 mb-4">{curriculum.subtitle}</p>
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">{curriculum.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {curriculum.skills.map(skill => (
          <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
            {skill}
          </span>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 mb-6">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Weeks</p>
        <div className="space-y-1.5">
          {curriculum.weeks.map(w => (
            <div key={w.week} className="flex items-center gap-2 text-sm">
              <span className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                {w.week}
              </span>
              <span className="text-gray-600">{w.theme}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => !config.disabled && onStart(curriculum.id)}
        disabled={config.disabled}
        className={`w-full py-3 rounded-full text-sm font-bold transition-all duration-200 ${config.buttonStyle}`}
      >
        {config.buttonLabel}
      </button>
    </div>
  )
}
