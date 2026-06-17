'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

type Opp = { title: string; date: string; desc: string }

export function OpportunitiesClient({
  opportunities,
  savedTitles,
  userId,
}: {
  opportunities: Opp[]
  savedTitles: string[]
  userId: string
}) {
  const supabase = createClient()
  const [saved, setSaved] = useState(new Set(savedTitles))

  async function toggleSave(opp: Opp) {
    if (saved.has(opp.title)) {
      await supabase
        .from('saved_opportunities')
        .delete()
        .eq('user_id', userId)
        .eq('title', opp.title)
      setSaved(prev => { const s = new Set(prev); s.delete(opp.title); return s })
    } else {
      await supabase
        .from('saved_opportunities')
        .insert({ user_id: userId, title: opp.title, deadline: opp.date, description: opp.desc })
      setSaved(prev => new Set([...prev, opp.title]))
    }
  }

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Professional Development</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">Opportunities</h1>
      <p className="text-muted max-w-lg mb-8">
        Open calls, exhibitions, grants, and residencies — Bay Area and Northern California.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {opportunities.map(opp => (
          <article key={opp.title} className="card flex flex-col gap-2.5">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase">{opp.date}</p>
            <h3 className="font-serif text-xl font-normal">{opp.title}</h3>
            <p className="text-sm text-muted flex-1">{opp.desc}</p>
            <button
              onClick={() => toggleSave(opp)}
              className={`btn btn-sm self-start ${saved.has(opp.title) ? 'text-gold bg-gold/10 border-0' : 'btn-ghost'}`}
            >
              {saved.has(opp.title) ? 'Saved ✓' : 'Save opportunity'}
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
