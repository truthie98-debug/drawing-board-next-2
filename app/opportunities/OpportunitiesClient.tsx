'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

type Opp = { title: string; date: string; desc: string; url?: string; location?: string }

export function OpportunitiesClient({
  opportunities: initialOpportunities,
  savedTitles,
  userId,
}: {
  opportunities: Opp[]
  savedTitles: string[]
  userId: string
}) {
  const supabase = createClient()
  const [saved, setSaved] = useState(new Set(savedTitles))
  const [opportunities, setOpportunities] = useState<Opp[]>(initialOpportunities)

  const [location, setLocation] = useState('')
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const query = location.trim()
    if (!query) return

    setSearching(true)
    setSearchError('')
    setHasSearched(true)

    try {
      const res = await fetch('/api/opportunities/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: query }),
      })

      if (!res.ok) throw new Error('Search failed')

      const data = await res.json()
      setOpportunities(data.opportunities ?? [])
    } catch {
      setSearchError('Search failed. Please try again.')
    } finally {
      setSearching(false)
    }
  }

  function handleReset() {
    setLocation('')
    setHasSearched(false)
    setSearchError('')
    setOpportunities(initialOpportunities)
  }

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
        Open calls, exhibitions, grants, and residencies — search by your city or zip code.
      </p>

      <form onSubmit={handleSearch} className="flex gap-3 mb-10 max-w-lg">
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="City or zip code — e.g. 94534 or Oakland, CA"
          className="input flex-1"
          disabled={searching}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={searching || !location.trim()}
        >
          {searching ? 'Searching…' : 'Search'}
        </button>
        {hasSearched && (
          <button type="button" onClick={handleReset} className="btn btn-ghost">
            Reset
          </button>
        )}
      </form>

      {searchError && (
        <p className="text-sm text-red-500 mb-6">{searchError}</p>
      )}

      {hasSearched && !searching && (
        <p className="text-sm text-muted mb-4">
          {opportunities.length > 0
            ? `${opportunities.length} open call${opportunities.length !== 1 ? 's' : ''} near ${location}`
            : `No open calls found near ${location}. Try a nearby city or broaden your search.`}
        </p>
      )}

      <div className="grid grid-cols-3 gap-4">
        {opportunities.map(opp => (
          <article key={opp.title} className="card flex flex-col gap-2.5">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase">{opp.date}</p>
            {opp.location && (
              <p className="text-xs text-muted -mt-1">{opp.location}</p>
            )}
            <h3 className="font-serif text-xl font-normal">{opp.title}</h3>
            <p className="text-sm text-muted flex-1">{opp.desc}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {opp.url && (
                
                  href={opp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-ghost"
                >
                  View call →
                </a>
              )}
              <button
                onClick={() => toggleSave(opp)}
                className={`btn btn-sm self-start ${saved.has(opp.title) ? 'text-gold bg-gold/10 border-0' : 'btn-ghost'}`}
              >
                {saved.has(opp.title) ? 'Saved ✓' : 'Save'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
