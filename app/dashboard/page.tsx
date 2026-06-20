import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { DashboardClient } from './DashboardClient'
import { getTodayFundamentalIndex, FUNDAMENTALS } from '@/lib/exercises'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile?.artist_name) redirect('/onboarding')

  const { data: streaks } = await supabase
    .from('streaks')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: false })
    .limit(31)

  const todayIndex = getTodayFundamentalIndex()
  const todayFundamental = FUNDAMENTALS[todayIndex]

  // Calculate streak count
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
      todayFundamental={todayFundamental}
      streaks={streaks || []}
      activeStreak={activeStreakCount}
      today={today}
    />
  )
}
