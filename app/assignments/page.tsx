import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { getFocusForMonth, getTodayMode } from '@/lib/curriculum'
import { AssignmentsClient } from './AssignmentsClient'

export default async function AssignmentsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  const { data: profile } = await supabase
    .from('profiles')
    .select('current_month, artist_name')
    .eq('id', user.id)
    .single()

  const focus = getFocusForMonth(profile?.current_month || 1)
  const mode = getTodayMode()

  return <AssignmentsClient focus={focus} initialMode={mode} userId={user.id} />
}
