'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import ExerciseCard from './ExerciseCard'

export default function TodayAssignment({ curriculum, dayNumber, userId, onDayComplete }) {
  const [progress, setProgress] = useState(null)
  const [uploads, setUploads] = useState({})
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  const dayData = curriculum.days.find(d => d.day === dayNumber)

  useEffect(() => {
    async function loadProgress() {
      if (!userId || !dayData) return

      const [{ data: prog }, { data: ups }] = await Promise.all([
        supabase
          .from('academy_progress')
          .select('*')
          .eq('user_id', userId)
          .eq('curriculum_id', curriculum.id)
          .eq('day_number', dayNumber)
          .single(),
        supabase
          .from('academy_uploads')
          .select('*')
          .eq('user_id', userId)
          .eq('curriculum_id', curriculum.id)
          .eq('day_number', dayNumber)
      ])

      setProgress(prog)

      const uploadMap = {}
      ups?.forEach(u => { uploadMap[u.exercise_id] = u.file_url })
      setUploads(uploadMap)
      setLoading(false)
    }

    loadProgress()
  }, [userId, dayNumber, curriculum.id])

  // Poll for completion to trigger parent callback
  useEffect(() => {
    if (!userId) return

    const channel = supabase
      .channel('progress-watch')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'academy_progress',
        filter: `user_id=eq.${userId}`
      }, (payload) => {
        const updated = payload.new
        if (
          updated.curriculum_id === curriculum.id &&
          updated.day_number === dayNumber &&
          updated.is_complete
        ) {
          setProgress(updated)
          onDayComplete?.()
        } else {
          setProgress(updated)
        }
      })
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [userId, dayNumber, curriculum.id])

  if (!dayData) return null
  if (loading) return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-100 rounded w-1/2" />
      <div className="h-64 bg-gray-100 rounded" />
    </div>
  )

  const bothComplete = progress?.ex1_complete && progress?.ex2_complete

  return (
    <div className="space-y-6">
      {/* Day Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-1">
            Week {dayData.week} — {dayData.weekTheme}
          </p>
          <h2 className="text-2xl font-black text-gray-900">
            Day {dayNumber} — {dayData.topic}
          </h2>
        </div>

        {bothComplete && (
          <div className="flex items-center gap-2 bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Day Complete
          </div>
        )}
      </div>

      {/* Exercise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dayData.exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            dayNumber={dayNumber}
            curriculumId={curriculum.id}
            userId={userId}
            initialComplete={
              exercise.id === 'ex1'
                ? progress?.ex1_complete ?? false
                : progress?.ex2_complete ?? false
            }
            initialUploadUrl={uploads[exercise.id] ?? null}
          />
        ))}
      </div>

      {/* Completion Message */}
      {bothComplete && (
        <div className="bg-yellow-400/10 border-2 border-yellow-400 rounded-xl p-6 text-center">
          <p className="text-2xl mb-1">🎉</p>
          <p className="font-black text-gray-900 text-lg">Day {dayNumber} complete.</p>
          <p className="text-gray-500 text-sm mt-1">
            {dayNumber < curriculum.totalDays
              ? `Day ${dayNumber + 1} is now unlocked.`
              : 'You've completed the full curriculum!'}
          </p>
        </div>
      )}
    </div>
  )
}
