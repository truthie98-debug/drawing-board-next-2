'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/academy', label: 'Academy' },
  { href: '/assignments', label: 'Assignments' },
  { href: '/uploads', label: 'Uploads' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/profile', label: 'Profile' },
]

export function Nav({ user }: { user: User | null }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b border-line flex items-center justify-between px-10 h-16 gap-5">
      <Link href="/" className="flex items-center gap-2.5 no-underline text-ink">
        <div className="w-9 h-9 border border-ink rounded-full grid place-items-center font-serif text-sm font-semibold">
          DB
        </div>
        <span className="font-serif text-lg font-medium tracking-tight">The Drawing Board</span>
      </Link>

      {user && (
        <nav className="flex gap-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3.5 py-2 rounded-full transition-colors no-underline ${
                pathname.startsWith(link.href)
                  ? 'text-accent bg-accent/8'
                  : 'text-muted hover:text-ink hover:bg-ink/6'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="flex items-center gap-2">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-ghost btn-sm"
          >
            Sign out
          </button>
        ) : (
          <Link href="/auth" className="btn btn-ghost btn-sm">
            Sign in
          </Link>
        )}
      </div>
    </header>
  )
}
