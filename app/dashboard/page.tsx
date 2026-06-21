import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { DashboardClient } from './DashboardClient'
import { getTodayFundamentalIndex, FUNDAMENTALS } from '@/lib/exercises'
import { getOrGenerateTeacherReview } from '@/lib/teacher-review'

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

  const { data: submissions } = await supabase
    .from('submissions')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(60)

  const teacherReview = await getOrGenerateTeacherReview(supabase, user.id, profile, submissions || [])

  const todayIndex = getTodayFundamentalIndex()
  const todayFundamental = FUNDAMENTALS[todayIndex]
  const today = new Date().toISOString().split('T')[0]

  return (
    <DashboardClient
      profile={profile}
      todayFundamental={todayFundamental}
      submissions={submissions || []}
      teacherReview={teacherReview}
      today={today}
    />
  )
}
