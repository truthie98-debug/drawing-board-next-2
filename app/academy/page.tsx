'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { CURRICULUMS, getCurriculumById } from '@/lib/Curriculum'
import CurriculumCard from '@/components/academy/CurriculumCard'
import MonthHeader from '@/components/academy/MonthHeader'
import TodayAssignment from '@/components/academy/TodayAssignment'
import DayNav from '@/components/academy/DayNav'
import DayGrid from '@/components/academy/DayGrid'

export default function AcademyPage() {
  const [user, setUser] = useState<any>(null)
  const [enrollment, setEnrollment] = useState<any>(null)
  const [allProgress, setAllProgress] = useState<any[]>([])
  const [allUploads, setAllUploads] = useState<any>({})
  const [viewingDay, setViewingDay] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [starting, setStarting] = useState(false)
  const [showComplete, setShowComplete] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setLoading(false); return }
      setUser(user)

      const { data: enroll } = await supabase
        .from('academy_enrollments')
        .select('*')
        .eq('user_id', user.id)
        .is('completed_at', null)
        .order('started_at', { ascending: false })
        .limit(1)
        .single()

      if (enroll) {
        setEnrollment(enroll)
        setViewingDay(enroll.current_day)
        await loadProgress(user.id, enroll.curriculum_id)
      }

      setLoading(false)
    }
    load()
  }, [])

  async function loadProgress(userId: string, curriculumId: number) {
    const [{ data: prog }, { data: ups }] = await Promise.all([
      supabase
        .from('academy_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('curriculum_id', curriculumId),
      supabase
        .from('academy_uploads')
        .select('*')
        .eq('user_id', userId)
        .eq('curriculum_id', curriculumId)
    ])

    setAllProgress(prog ?? [])

    const uploadMap: any = {}
    ups?.forEach((u: any) => {
      if (!uploadMap[u.day_number]) uploadMap[u.day_number] = {}
      uploadMap[u.day_number][u.exercise_id] = u.file_url
    })
    setAllUploads(uploadMap)
  }

  async function handleStart(curriculumId: number) {
    if (!user || starting) return
    setStarting(true)

    const { data, error } = await supabase
      .from('academy_enrollments')
      .insert({
        user_id: user.id,
        curriculum_id: curriculumId,
        current_day: 1,
      })
      .select()
      .single()

    if (!error && data) {
      setEnrollment(data)
      setViewingDay(1)
      setAllProgress([])
      setAllUploads({})
    }

    setStarting(false)
  }

  async function handleDayComplete() {
    if (!enrollment || !user) return

    const curriculum: any = getCurriculumById(enrollment.curriculum_id)
    const nextDay = enrollment.current_day + 1

    if (nextDay > curriculum.totalDays) {
      await supabase
        .from('academy_enrollments')
        .update({ completed_at: new Date().toISOString() })
        .eq('id', enrollment.id)
      await loadProgress(user.id, enrollment.curriculum_id)
      setShowComplete(true)
      return
    }

    const { data: updated } = await supabase
      .from('academy_enrollments')
      .update({ current_day: nextDay })
      .eq('id', enrollment.id)
      .select()
      .single()

    if (updated) {
      setEnrollment(updated)
      setViewingDay(nextDay)
    }

    await loadProgress(user.id, enrollment.curriculum_id)
  }

  function handleProgressUpdate(dayNumber: number, updated: any) {
    setAllProgress(prev => {
      const idx = prev.findIndex((p: any) => p.day_number === dayNumber)
      if (idx === -1) {
        return [...prev, { day_number: dayNumber, curriculum_id: enrollment.curriculum_id, user_id: user.id, ...updated }]
      }
      const copy = [...prev]
      copy[idx] = { ...copy[idx], ...updated }
      return copy
    })
  }

  const curriculum: any = enrollment
    ? getCurriculumById(enrollment.curriculum_id)
    : null

  const completedDayNumbers = allProgress
    .filter((p: any) => p.is_complete)
    .map((p: any) => p.day_number)

  const completedCount = completedDayNumbers.length

  const highestCompleted = completedDayNumbers.length > 0
    ? Math.max(...completedDayNumbers)
    : 0
  const unlockedUpTo = Math.max(enrollment?.current_day ?? 1, highestCompleted + 1)

  function calcStreak() {
    if (completedDayNumbers.length === 0) return 0
    const sorted = [...completedDayNumbers].sort((a: number, b: number) => b - a)
    let streak = 0
    let expected = sorted[0]
    for (const day of sorted) {
      if (day === expected) { streak++; expected-- }
      else break
    }
    return streak
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (showComplete && curriculum) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card max-w-md w-full text-center">
          <p className="eyebrow">Curriculum Complete</p>
          <h1 className="font-serif text-4xl font-normal tracking-tight mb-2">
            {curriculum.title}
          </h1>
          <p className="text-muted mb-8">
            You completed all {curriculum.totalDays} days. That is a real commitment.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-cream border border-line rounded-xl p-3">
              <p className="text-accent text-xl font-semibold">{completedCount}</p>
              <p className="text-muted text-xs">Days Done</p>
            </div>
            <div className="bg-cream border border-line rounded-xl p-3">
              <p className="text-accent text-xl font-semibold">{calcStreak()}</p>
              <p className="text-muted text-xs">Best Streak</p>
            </div>
            <div className="bg-cream border border-line rounded-xl p-3">
              <p className="text-accent text-xl font-semibold">100%</p>
              <p className="text-muted text-xs">Complete</p>
            </div>
          </div>
          <button
            onClick={() => {
              setEnrollment(null)
              setShowComplete(false)
              setAllProgress([])
              setAllUploads({})
            }}
            className="btn btn-primary btn-md w-full"
          >
            Start Next Curriculum
          </button>
        </div>
      </div>
    )
  }

  if (!enrollment) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="eyebrow">The Drawing Board</p>
        <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-3">
          Academy
        </h1>
        <p className="text-muted max-w-xl mb-10">
          A structured 6-month art curriculum. One curriculum at a time.
          15 to 30 minutes a day. No guesswork — just show up and draw.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUMS.map((c: any) => (
            <CurriculumCard
              key={c.id}
              curriculum={c}
              status="available"
              onStart={handleStart}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 space-y-6">

      <MonthHeader
        curriculum={curriculum}
        currentDay={viewingDay}
        completedDays={completedCount}
        streak={calcStreak()}
      />

      <DayNav
        currentDay={viewingDay}
        totalDays={curriculum.totalDays}
        unlockedUpTo={unlockedUpTo}
        onPrev={() => setViewingDay((d: number) => Math.max(1, d - 1))}
        onNext={() => setViewingDay((d: number) => Math.min(unlockedUpTo, d + 1))}
      />

      <TodayAssignment
        curriculum={curriculum}
        dayNumber={viewingDay}
        userId={user?.id}
        onDayComplete={handleDayComplete}
        onProgressUpdate={handleProgressUpdate}
      />

      <DayGrid
        curriculum={curriculum}
        currentDay={viewingDay}
        completedDays={completedDayNumbers}
        unlockedUpTo={unlockedUpTo}
        uploads={allUploads}
        onSelectDay={setViewingDay}
      />

      <div className="text-center pt-2 pb-8">
        <button
          onClick={async () => {
            if (!confirm('This will end your current curriculum. Are you sure?')) return
            await supabase
              .from('academy_enrollments')
              .update({ completed_at: new Date().toISOString() })
              .eq('id', enrollment.id)
            setEnrollment(null)
            setAllProgress([])
            setAllUploads({})
            setViewingDay(null)
          }}
          className="text-xs text-muted hover:text-accent underline"
        >
          Exit curriculum
        </button>
      </div>

    </div>
  )
}
