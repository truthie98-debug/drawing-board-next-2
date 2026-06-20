import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { createClient } from '@/lib/supabase-server'

export const metadata: Metadata = {
  title: 'The Drawing Board — Your Personal Art Academy',
  description: 'Deliberate practice. Honest critique. Finished work.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <Nav user={user} />
        <main>{children}</main>
        <footer className="border-t border-line px-10 py-8 flex justify-between items-center text-muted text-sm">
          <span className="font-serif text-base text-ink">The Drawing Board</span>
          <span>Your personal art academy</span>
        </footer>
      </body>
    </html>
  )
}
