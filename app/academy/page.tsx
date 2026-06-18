import { createClient } from '@/lib/supabase-server'
import { COURSES } from '@/lib/curriculum'

export default async function AcademyPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-11 pb-16">
      <p className="eyebrow">Adaptive Art School</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">Courses</h1>
      <p className="text-muted max-w-lg mb-8">
        Ten structured courses. Each one builds on the last. Your 12-month curriculum draws from these to match your current weaknesses.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {COURSES.map((course, i) => (
          <article key={course.id} className="card flex flex-col justify-between min-h-[210px] hover:-translate-y-px hover:border-accent/30 transition-all">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted mb-1.5">
                Course {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-serif text-xl font-normal mb-2">{course.title}</h3>
              <p className="text-xs text-muted mb-3">{course.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {course.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="progress-bar mb-1.5">
                <div className="progress-fill" style={{ width: `${30 + (i * 7) % 55}%` }} />
              </div>
              <p className="text-xs text-muted">Lessons · Assignments · Feedback</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
