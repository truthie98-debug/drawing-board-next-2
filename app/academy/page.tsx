'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { CURRICULUMS, getCurriculumById, getDayData } from '@/lib/curriculum'
import CurriculumCard from '@/components/academy/CurriculumCard'
import MonthHeader from '@/components/academy/MonthHeader'
import TodayAssignment from '@/components/academy/TodayAssignment'
import DayNav from '@/components/academy/DayNav'
import DayGrid from '@/components/academy/DayGrid'

export default function AcademyPage() {
  const [user, setUser] = useState(null)
  const [enrollment, setEnrollment] = useState(null)
  const [allProgress, setAllProgress] = useState([])
  const [allUploads, setAllUploads] = useState({})
  const [viewingDay, setViewingDay] = useState(null)
  const [loading, setLoading] = useState(true)
  const [starting, setStarting] = useState(false)
  const [showComplete, setShowComplete] = useState(false)
  const supabase = createClient()

  // ── Load user + enrollment ─────────────────────────────────
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

  async function loadProgress(userId, curriculumId) {
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

    // Build upload map: { dayNumber: { ex1: url, ex2: url } }
    const uploadMap = {}
    ups?.forEach(u => {
      if (!uploadMap[u.day_number]) uploadMap[u.day_number] = {}
      uploadMap[u.day_number][u.exercise_id] = u.file_url
    })
    setAllUploads(uploadMap)
  }

  // ── Start a curriculum ─────────────────────────────────────
  async function handleStart(curriculumId) {
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

  // ── Day complete callback ──────────────────────────────────
  async function handleDayComplete() {
    if (!enrollment || !user) return

    const curriculum = getCurriculumById(enrollment.curriculum_id)
    const completedDaysList = allProgress
      .filter(p => p.is_complete)
      .map(p => p.day_number)

    // Reload progress
    await loadProgress(user.id, enrollment.curriculum_id)

    const nextDay = enrollment.current_day + 1

    if (nextDay > curriculum.totalDays) {
      // Mark curriculum complete
      await supabase
        .from('academy_enrollments')
        .update({ completed_at: new Date().toISOString() })
        .eq('id', enrollment.id)
      setShowComplete(true)
      return
    }

    // Advance current_day
    const { data: updated } = await supabase
      .from('academy_enrollments')
      .update({ current_day: nextDay })
      .eq('id', enrollment.id)
      .select()
      .single()

    if (updated) setEnrollment(updated)
  }

  // ── Derived state ──────────────────────────────────────────
  const curriculum = enrollment ? getCurriculumById(enrollment.curriculum_id) : null
  const completedDayNumbers = allProgress.filter(p => p.is_complete).map(p => p.day_number)
  const completedCount = completedDayNumbers.length
  const unlockedUpTo = enrollment?.current_day ?? 1

  // Streak calculation
  function calcStreak() {
    if (completedDayNumbers.length === 0) return 0
    const sorted = [...completedDayNumbers].sort((a, b) => b - a)
    let streak = 0
    let expected = sorted[0]
    for (const day of sorted) {
      if (day === expected) { streak++; expected-- }
      else break
    }
    return streak
  }

  // ── Loading ────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // ── Completion Screen ──────────────────────────────────────
  if (showComplete && curriculum) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-sm border-2 border-yellow-400 text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">
            {curriculum.title} Complete
          </h1>
          <p className="text-gray-500 mb-6">
            You completed all {curriculum.totalDays} days. That's a real commitment.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-yellow-500 text-xl font-black">{completedCount}</p>
              <p className="text-gray-400 text-xs">Days Done</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-yellow-500 text-xl font-black">{calcStreak()}</p>
              <p className="text-gray-400 text-xs">Best Streak</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-yellow-500 text-xl font-black">100%</p>
              <p className="text-gray-400 text-xs">Complete</p>
            </div>
          </div>

          <button
            onClick={() => {
              setEnrollment(null)
              setShowComplete(false)
              setAllProgress([])
              setAllUploads({})
            }}
            className="w-full py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
          >
            Start Next Curriculum
          </button>
        </div>
      </div>
    )
  }

  // ── Landing Page — no active curriculum ────────────────────
  if (!enrollment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-10">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">
              The Drawing Board
            </p>
            <h1 className="text-4xl font-black text-gray-900 leading-tight mb-3">
              Academy
            </h1>
            <p className="text-gray-500 max-w-xl">
              A structured 6-month art curriculum. One curriculum at a time.
              15–30 minutes a day. No guesswork — just show up and draw.
            </p>
          </div>

          {/* Curriculum Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRICULUMS.map((c, index) => {
              // For now all available — you can add locking logic later
              const status = 'available'
              return (
                <CurriculumCard
                  key={c.id}
                  curriculum={c}
                  status={status}
                  onStart={handleStart}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // ── Active Curriculum ──────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {/* Month Header */}
        <MonthHeader
          curriculum={curriculum}
          currentDay={viewingDay}
          completedDays={completedCount}
          streak={calcStreak()}
        />

        {/* Day Nav */}
        <DayNav
          currentDay={viewingDay}
          totalDays={curriculum.totalDays}
          unlockedUpTo={unlockedUpTo}
          onPrev={() => setViewingDay(d => Math.max(1, d - 1))}
          onNext={() => setViewingDay(d => Math.min(unlockedUpTo, d + 1))}
        />

        {/* Today's Assignment */}
        <TodayAssignment
          curriculum={curriculum}
          dayNumber={viewingDay}
          userId={user?.id}
          onDayComplete={handleDayComplete}
        />

        {/* Day Grid */}
        <DayGrid
          curriculum={curriculum}
          currentDay={viewingDay}
          completedDays={completedDayNumbers}
          unlockedUpTo={unlockedUpTo}
          uploads={allUploads}
          onSelectDay={setViewingDay}
        />

        {/* Exit / Switch Curriculum */}
        <div className="text-center pt-2 pb-8">
          <button
            onClick={async () => {
              if (!confirm('This will end your current curriculum. Are you sure?')) return
              await supabase
                .from('academy_enrollments')
                .update({ completed_at: new Date().toISOString() })
                .eq('id', enrollment.id)
              setEnrollment(null)
              
