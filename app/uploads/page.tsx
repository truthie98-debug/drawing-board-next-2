import { createClient } from '@/lib/supabase-server'
import { UploadsClient } from './UploadsClient'

const DEMO_SUBMISSIONS = [
  { id: '1', user_id: 'demo', title: 'Figure Gesture Study', type: 'daily', created_at: new Date(Date.now() - 1 * 86400000).toISOString(), image_url: null, feedback: 'Strong line confidence. Watch the weight distribution on the left leg.' },
  { id: '2', user_id: 'demo', title: 'Still Life — Drapery', type: 'weekly', created_at: new Date(Date.now() - 4 * 86400000).toISOString(), image_url: null, feedback: 'Good observation of light. The shadow shapes could be more committed.' },
  { id: '3', user_id: 'demo', title: 'Portrait — Planes of the Head', type: 'daily', created_at: new Date(Date.now() - 7 * 86400000).toISOString(), image_url: null, feedback: 'Solid structure. Push the dark side darker for more form.' },
]

export default async function UploadsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return <UploadsClient userId="demo" initialSubmissions={DEMO_SUBMISSIONS} />
  }

  const { data: submissions } = await supabase
    .from('submissions')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(12)

  return <UploadsClient userId={user.id} initialSubmissions={submissions || []} />
}
