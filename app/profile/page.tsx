import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { getFocusForMonth } from '@/lib/curriculum'

const DEMO_PROFILE = {
  id: 'demo',
  artist_name: 'Demo Artist',
  current_month: 3,
  skill_level: 'Intermediate',
  medium: 'Graphite & Charcoal',
  daily_time: '45 minutes',
  strengths: 'Gesture, line quality, observation',
  weaknesses: 'Values, cast shadow edges',
  short_goals: 'Complete a finished figure drawing',
  professional_goals: 'Build a portfolio for gallery submission',
  favorite_artists: 'Sargent, Fechin, Zorn',
}

export default async function ProfilePage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let profile = DEMO_PROFILE
  let submissionCount = 12
  let streakCount = 18

  if (user) {
    const { data: dbProfile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (dbProfile?.artist_name) {
      profile = dbProfile

      const { count: sc } = await supabase
        .from('submissions')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)

      const { count: stc } = await supabase
        .from('streaks')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('completed_active', true)

      submissionCount = sc || 0
      streakCount = stc || 0
    }
  }

  const focus = getFocusForMonth(profile.current_month || 1)
  const initials = (profile.artist_name || 'A')
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const reviewNote = `Your ${focus.primary.toLowerCase()} work has developed real confidence. ${
    profile.weaknesses
      ? `${profile.weaknesses.split(',')[0].trim()} still needs deliberate attention.`
      : 'Keep the same submission rhythm.'
  } Next month: advance difficulty on your strongest fundamental and introduce the next pairing.`

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Profile & Review</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-8">{profile.artist_name}</h1>

      <div className="grid grid-cols-[1fr_2fr] gap-6">
        <div className="flex flex-col gap-4">
          <div className="card-sm card text-center">
            <div className="w-24 h-24 rounded-full bg-accent/10 grid place-items-center font-serif text-4xl font-normal text-accent mx-auto mb-3">
              {initials}
            </div>
            <p className="font-serif text-2xl font-normal">{profile.artist_name}</p>
            <p className="text-sm text-muted mt-1">{profile.skill_level} · {profile.medium}</p>
          </div>

          <div className="card-sm card">
            <p className="eyebrow mb-3">Curriculum</p>
            {[
              { label: 'Month', value: `${profile.current_month || 1} of 12` },
              { label: 'Assignments done', value: String(submissionCount) },
              { label: 'Active study days', value: String(streakCount) },
              { label: 'Daily time', value: profile.daily_time || '30 minutes' },
            ].map(row => (
              <div key={row.label} className="flex justify-between py-2.5 border-b border-line last:border-0 text-sm">
                <span className="text-muted">{row.label}</span>
                <span className="font-semibold">{row.value}</span>
              </div>
            ))}
          </div>

          <Link href="/onboarding" className="btn btn-ghost btn-sm w-full text-center">
            Update assessment
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <div className="card">
            <p className="eyebrow mb-4">Monthly Review</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent grid place-items-center font-serif text-2xl font-normal">
                B+
              </div>
              <div>
                <p className="font-semibold">{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                <p className="text-xs text-muted">Consistent work with clear improvement in {focus.primary.toLowerCase()}</p>
              </div>
            </div>
            <div className="teacher-block">{reviewNote}</div>
          </div>

          <div className="card">
            <p className="eyebrow mb-4">Profile Details</p>
            {[
              { label: 'Strengths', value: profile.strengths },
              { label: 'Working on', value: profile.weaknesses },
              { label: 'Short-term goals', value: profile.short_goals },
              { label: 'Professional goals', value: profile.professional_goals },
              { label: 'Favorite artists', value: profile.favorite_artists },
            ]
              .filter(row => row.value)
              .map(row => (
                <div key={row.label} className="flex justify-between gap-4 py-3 border-b border-line last:border-0 text-sm">
                  <span className="text-muted shrink-0">{row.label}</span>
                  <span className="font-medium text-right">{row.value}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
