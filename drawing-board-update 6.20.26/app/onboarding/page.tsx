'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const fd = new FormData(e.currentTarget)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/auth'); return }

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        artist_name: fd.get('artistName'),
        medium: fd.get('medium'),
        skill_level: fd.get('level'),
        daily_time: fd.get('time'),
        years_practicing: fd.get('years'),
        favorite_artists: fd.get('favorites'),
        strengths: fd.get('strengths'),
        weaknesses: fd.get('weaknesses'),
        short_goals: fd.get('shortGoals'),
        professional_goals: fd.get('professional'),
        updated_at: new Date().toISOString(),
      })

    if (error) { setError(error.message); setLoading(false); return }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="max-w-[720px] mx-auto px-6 py-14">
      <p className="eyebrow">First-time Assessment</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">
        Build your<br />personal curriculum
      </h1>
      <p className="text-muted mb-8">
        The teacher uses these answers to shape your 12-month plan. Be direct — vague answers produce vague plans.
      </p>

      <form onSubmit={handleSubmit} className="card flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="field"><label>Artist Name</label><input name="artistName" placeholder="Your full name" required /></div>
          <div className="field"><label>Primary Medium</label><input name="medium" placeholder="e.g. Digital Illustration, Charcoal" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="field">
            <label>Skill Level</label>
            <select name="level">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="field">
            <label>Daily Time Available</label>
            <select name="time">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>60 minutes</option>
              <option>90 minutes</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="field">
            <label>Years Practicing</label>
            <select name="years">
              <option>Less than 1 year</option>
              <option>1–3 years</option>
              <option>3–7 years</option>
              <option>7+ years</option>
            </select>
          </div>
          <div className="field">
            <label>Favorite Artists</label>
            <input name="favorites" placeholder="e.g. Klimt, Glenn Vilppu" />
          </div>
        </div>
        <div className="field">
          <label>Current Strengths</label>
          <textarea name="strengths" placeholder="What already works in your art? Be specific." />
        </div>
        <div className="field">
          <label>Current Weaknesses</label>
          <textarea name="weaknesses" placeholder="Where does your work fall apart? Honesty helps the teacher." />
        </div>
        <div className="field">
          <label>Short-Term Goals</label>
          <textarea name="shortGoals" placeholder="What do you want to accomplish in the next 6 months?" style={{ minHeight: 64 }} />
        </div>
        <div className="field">
          <label>Professional Goals</label>
          <textarea name="professional" placeholder="Gallery? Illustration? Personal practice?" style={{ minHeight: 64 }} />
        </div>

        {error && <p className="text-sm text-accent bg-accent/8 rounded-xl px-4 py-3">{error}</p>}

        <button type="submit" disabled={loading} className="btn btn-primary btn-md self-start">
          {loading ? 'Generating curriculum…' : 'Generate my curriculum →'}
        </button>
      </form>
    </div>
  )
}
