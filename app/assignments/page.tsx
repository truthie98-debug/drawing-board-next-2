import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { getWeekKey } from '@/lib/color-lab'
import { AssignmentsClient } from './AssignmentsClient'

export default async function AssignmentsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  const weekKey = getWeekKey()

  return (
    <AssignmentsClient
      userId={user.id}
      weekKey={weekKey}
    />
  )
}
