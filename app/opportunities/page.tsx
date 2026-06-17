import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { OpportunitiesClient } from './OpportunitiesClient'

const OPPORTUNITIES = [
  { title: 'Bay Area Open Call Tracker', date: 'Monthly', desc: 'Juried shows, local galleries, and exhibition calls near 94534 and the broader Bay Area.' },
  { title: 'Gallery Submission Prep', date: 'Due Friday', desc: 'Update artist statement, 10-image portfolio, title list, sizes, and a short proposal.' },
  { title: 'Northern California Grants', date: 'Quarterly', desc: 'Grants, residencies, public art calls, and artist development programs.' },
  { title: 'Portfolio Coach Check-In', date: 'June 30', desc: 'Choose strongest finished works and flag pieces that need polish before submission.' },
  { title: 'Series Development', date: 'July 15', desc: 'Plan a cohesive body of work: theme, visual rules, titles, and installation notes.' },
  { title: 'Artist Statement Review', date: 'Monthly', desc: 'Refine language so the work feels clear, personal, and professional.' },
]

export default async function OpportunitiesPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  const { data: saved } = await supabase
    .from('saved_opportunities')
    .select('title')
    .eq('user_id', user.id)

  const savedTitles = new Set(saved?.map(s => s.title) || [])

  return <OpportunitiesClient opportunities={OPPORTUNITIES} savedTitles={[...savedTitles]} userId={user.id} />
}
