import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { FUNDAMENTALS } from '@/lib/exercises'

export default async function AcademyPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Adaptive Art School</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">The 5 Fundamentals</h1>
      <p className="text-muted max-w-lg mb-8">
        Everything in your practice comes back to these five. No more than what matters, no less than what you need.
      </p>

      <div className="grid grid-cols-2 gap-5">
        {FUNDAMENTALS.map((f, i) => (
          <article key={f.id} className="card flex flex-col justify-between min-h-[180px]">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted mb-1.5">
                Fundamental {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-serif text-2xl font-normal mb-2">{f.name}</h3>
              <p className="text-sm text-muted mb-4">{f.tagline}</p>
            </div>
            <p className="text-xs text-muted">{f.exercises.length} exercises in the library</p>
          </article>
        ))}
      </div>
    </div>
  )
}
