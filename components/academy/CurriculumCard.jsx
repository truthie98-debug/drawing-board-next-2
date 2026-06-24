'use client'

export default function CurriculumCard({ curriculum, status, onStart }) {
  const statusConfig = {
    available: {
      badge: null,
      buttonLabel: 'Start Curriculum',
      buttonStyle: 'btn btn-primary btn-md w-full',
      cardStyle: 'card hover:border-accent transition-colors',
      disabled: false,
    },
    active: {
      badge: 'In Progress',
      badgeStyle: 'pill',
      buttonLabel: 'Continue',
      buttonStyle: 'btn btn-primary btn-md w-full',
      cardStyle: 'card border-accent',
      disabled: false,
    },
    complete: {
      badge: 'Complete',
      badgeStyle: 'pill bg-green-100 text-green-700',
      buttonLabel: 'Review',
      buttonStyle: 'btn btn-ghost btn-md w-full',
      cardStyle: 'card',
      disabled: false,
    },
    locked: {
      badge: 'Locked',
      badgeStyle: 'pill pill-neutral',
      buttonLabel: 'Complete previous curriculum first',
      buttonStyle: 'btn btn-ghost btn-md w-full opacity-50 cursor-not-allowed',
      cardStyle: 'card opacity-60',
      disabled: true,
    },
  }

  const config = statusConfig[status] ?? statusConfig.available

  return (
    <div className={config.cardStyle}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-xs font-semibold text-muted uppercase tracking-widest">
          {curriculum.totalDays} Days
        </span>
        {config.badge && (
          <span className={config.badgeStyle}>
            {config.badge}
          </span>
        )}
      </div>

      <h2 className="font-serif text-2xl font-normal tracking-tight mb-1">
        {curriculum.title}
      </h2>
      <p className="text-sm text-muted mb-4">{curriculum.subtitle}</p>
      <p className="text-sm text-ink leading-relaxed mb-5">{curriculum.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {curriculum.skills.map(skill => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>

      <div className="border-t border-line pt-4 mb-6">
        <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Weeks</p>
        <div className="space-y-1.5">
          {curriculum.weeks.map(w => (
            <div key={w.week} className="flex items-center gap-2 text-sm">
              <span className="w-5 h-5 rounded-full bg-accent text-white text-xs flex items-center justify-center font-semibold flex-shrink-0">
                {w.week}
              </span>
              <span className="text-ink">{w.theme}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => !config.disabled && onStart(curriculum.id)}
        disabled={config.disabled}
        className={config.buttonStyle}
      >
        {config.buttonLabel}
      </button>
    </div>
  )
}
