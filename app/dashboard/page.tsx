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

  const { data: streaks } = await supabase
    .from('streaks')
    .select('date, completed_active')
    .eq('user_id', user.id)
    .eq('completed_active', true)
    .limit(60)

  const { data: colorLabCompletions } = await supabase
    .from('color_lab_completions')
    .select('completed_at')
    .eq('user_id', user.id)
    .limit(20)

  const { data: reflections } = await supabase
    .from('reflections')
    .select('created_at')
    .eq('user_id', user.id)
    .limit(60)

  // Pass raw timestamps — date math happens in the browser so it matches the visitor's actual local time
  const completedRaw = {
    submissions: (submissions || []).map(s => s.created_at as string),
    streaks: (streaks || []).map(s => s.date as string),
    colorLab: (colorLabCompletions || []).map(c => c.completed_at as string),
    reflections: (reflections || []).map(r => r.created_at as string),
  }

  const teacherReview = await getOrGenerateTeacherReview(supabase, user.id, profile, submissions || [])

  const todayIndex = getTodayFundamentalIndex()
  const todayFundamental = FUNDAMENTALS[todayIndex]

  return (
    <DashboardClient
      profile={profile}
      todayFundamental={todayFundamental}
      completedRaw={completedRaw}
      teacherReview={teacherReview}
    />
  )
}
