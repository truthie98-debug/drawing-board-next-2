import { createClient } from '@/lib/supabase-server'
import { DashboardClient } from './DashboardClient'
import { getFocusForMonth } from '@/lib/curriculum'

const DEMO_PROFILE = {
  id: 'demo',
  artist_name: 'Demo Artist',
  current_month: 3,
  avatar_url: null,
  bio: 'Exploring figure drawing and expressive mark-making.',
}

const DEMO_STREAKS = Array.from({ length: 18 }, (_, i) => {
  const d = new Date()
  d.setDate(d.getDate() - i)
  return { date: d.toISOString().split('T')[0], user_id: 'demo' }
})

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const focus = getFocusForMonth(DEMO_PROFILE.current_month)
    const today = new Date().toISOString().split('T')[0]
    return (
      <DashboardClient
        profile={DEMO_PROFILE}
        focus={focus}
        streaks={DEMO_STREAKS}
        activeStreak={18}
        today={today}
      />
    )
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile?.artist_name) {
    const focus = getFocusForMonth(1)
    const today = new Date().toISOString().split('T')[0]
    return (
      <DashboardClient
        profile={{ ...DEMO_PROFILE, id: user.id }}
        focus={focus}
        streaks={[]}
        activeStreak={0}
        today={today}
      />
    )
  }

  const { data: streaks } = await supabase
    .from('streaks')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: false })
    .limit(31)

  const focus = getFocusForMonth(profile.current_month || 1)
  const today = new Date().toISOString().split('T')[0]

  let activeStreakCount = 0
  const sortedDates = (streaks || []).map(s => s.date).sort().reverse()
  for (let i = 0; i < sortedDates.length; i++) {
    const expected = new Date()
    expected.setDate(expected.getDate() - i)
    if (sortedDates[i] === expected.toISOString().split('T')[0]) {
      activeStreakCount++
    } else break
  }

  return (
    <DashboardClient
      profile={profile}
      focus={focus}
      streaks={streaks || []}
      activeStreak={activeStreakCount}
      today={today}
    />
  )
}
