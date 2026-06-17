import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'

const SECTIONS = [
  { num: '01', href: '/dashboard', title: 'Dashboard', desc: 'Calendar, streaks, focus, and teacher feedback' },
  { num: '02', href: '/academy', title: 'Academy', desc: 'Ten courses, structured lessons, and progress tracking' },
  { num: '03', href: '/assignments', title: 'Assignments', desc: 'Daily studies, weekly work, and artist reflections' },
  { num: '04', href: '/uploads', title: 'Uploads', desc: 'Submit daily studies, weekly assignments, and finished work' },
  { num: '05', href: '/opportunities', title: 'Opportunities', desc: 'Open calls, exhibitions, grants, and residencies' },
  { num: '06', href: '/profile', title: 'Profile', desc: 'Curriculum progress, monthly review, and settings' },
]

export default async function Home() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="max-w-[1100px] mx-auto px-8">
      {/* Hero */}
      <div className="text-center py-20">
        <div className="w-12 h-px bg-accent mx-auto mb-4" />
        <p className="eyebrow">Your Personal Art Academy</p>
        <h1 className="font-serif text-[clamp(52px,8vw,96px)] font-normal tracking-[-0.04em] leading-[0.92] mt-3 mb-5">
          The Drawing<br />Board
        </h1>
        <p className="text-lg text-muted max-w-md mx-auto mb-8 font-light">
          Deliberate practice. Honest critique. Finished work.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          {user ? (
            <>
              <Link href="/dashboard" className="btn btn-primary btn-lg">Enter Studio</Link>
              <Link href="/assignments" className="btn btn-ghost btn-lg">Today's Work</Link>
            </>
          ) : (
            <>
              <Link href="/auth" className="btn btn-primary btn-lg">Begin Assessment</Link>
              <Link href="/academy" className="btn btn-ghost btn-lg">View Curriculum</Link>
            </>
          )}
        </div>
      </div>

      {/* Today card */}
      <div className="card flex items-center justify-between gap-8 max-w-[860px] mx-auto mb-7 px-10 py-8">
        <div>
          <p className="eyebrow">Today's Work</p>
          <h2 className="font-serif text-4xl font-normal tracking-tight mb-1.5">Figure Gesture</h2>
          <p className="text-muted text-sm">30 minutes · One clear focus · One useful result</p>
        </div>
        <div className="w-20 h-20 rounded-full border-[6px] border-gold grid place-items-center font-semibold text-xl font-serif shrink-0">
          72%
        </div>
      </div>

      {/* Section grid */}
      <div className="grid grid-cols-3 gap-4 pb-16">
        {SECTIONS.map(s => (
          <Link
            key={s.href}
            href={s.href}
            className="block no-underline text-ink bg-card border border-line rounded-xl p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="font-serif text-5xl font-normal text-line leading-none mb-3">{s.num}</div>
            <h3 className="font-serif text-[22px] font-normal mb-1.5">{s.title}</h3>
            <p className="text-sm text-muted">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
