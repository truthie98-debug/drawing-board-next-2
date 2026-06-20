'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const supabase = createClient()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        setError(error.message)
      } else {
        setSuccess('Check your email to confirm your account, then sign in.')
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError(error.message)
      } else {
        router.push('/onboarding')
        router.refresh()
      }
    }
    setLoading(false)
  }

  return (
    <div className="max-w-[420px] mx-auto px-6 py-16">
      <p className="eyebrow">Welcome</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-2">
        {mode === 'signin' ? 'Sign in' : 'Create account'}
      </h1>
      <p className="text-muted mb-8 text-sm">
        {mode === 'signin'
          ? 'Continue your practice.'
          : 'Start your personal art academy.'}
      </p>

      {success ? (
        <div className="teacher-block">{success}</div>
      ) : (
        <form onSubmit={handleSubmit} className="card flex flex-col gap-5">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="8+ characters"
              required
              minLength={8}
            />
          </div>
          {error && (
            <p className="text-sm text-accent bg-accent/8 rounded-xl px-4 py-3">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-md self-start"
          >
            {loading ? 'Working…' : mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
        </form>
      )}

      <button
        onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError('') }}
        className="mt-5 text-sm text-muted hover:text-ink transition-colors bg-transparent border-0 cursor-pointer p-0"
      >
        {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
      </button>
    </div>
  )
}
