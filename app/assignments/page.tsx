import { createClient } from '@/lib/supabase-server'
import { getFocusForMonth, getTodayMode } from '@/lib/curriculum'
import { AssignmentsClient } from './AssignmentsClient'

export default async function AssignmentsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const focus = getFocusForMonth(3)
    const mode = getTodayMode()
    return <AssignmentsClient focus={focus} initialMode={mode} userId="demo" />
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('current_month, artist_name')
    .eq('id', user.id)
    .single()

  const focus = getFocusForMonth(profile?.current_month || 1)
  const mode = getTodayMode()
  return <AssignmentsClient focus={focus} initialMode={mode} userId={user.id} />
}
