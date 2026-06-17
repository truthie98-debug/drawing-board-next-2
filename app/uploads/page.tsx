import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { UploadsClient } from './UploadsClient'

export default async function UploadsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  const { data: submissions } = await supabase
    .from('submissions')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(12)

  return <UploadsClient userId={user.id} initialSubmissions={submissions || []} />
}
