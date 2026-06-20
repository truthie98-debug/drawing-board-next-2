import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { getTodayFundamentalIndex, getDailyExercise, FUNDAMENTALS } from '@/lib/exercises'
import { getWeekKey, getWeeklyColorLabExercise } from '@/lib/color-lab'
import { AssignmentsClient } from './AssignmentsClient'

export default async function AssignmentsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  const todayIndex = getTodayFundamentalIndex()
  const todayFundamental = FUNDAMENTALS[todayIndex]
  const exercise = getDailyExercise(todayFundamental.id)

  const weekKey = getWeekKey()
  const colorLabExercise = getWeeklyColorLabExercise(weekKey)

  const { data: colorLabCompletion } = await supabase
    .from('color_lab_completions')
    .select('*')
    .eq('user_id', user.id)
    .eq('week_key', weekKey)
    .maybeSingle()

  return (
    <AssignmentsClient
      userId={user.id}
      initialFundamentalIndex={todayIndex}
      initialExercise={exercise}
      colorLabExercise={colorLabExercise}
      weekKey={weekKey}
      initialColorLabCompletion={colorLabCompletion}
    />
  )
}
