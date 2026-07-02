'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import ExerciseCard from './ExerciseCard'

export default function TodayAssignment({ curriculum, dayNumber, userId, onDayComplete, onProgressUpdate }) {
  const [progress, setProgress] = useState(null)
  const [uploads, setUploads] = useState({})
  const [loading, setLoading] = useState(true)
  const supabase = createClient()
  const dayData = curriculum.days.find(d => d.day === dayNumber)

  useEffect(() => {
    async function loadProgress() {
      if (!userId || !dayData) return
      setLoading(true)
      const [{ data: prog }, { data: ups }] = await Promise.all([
        supabase
          .from('academy_progress')
          .select('*')
          .eq('user_id', userId)
          .eq('curriculum_id', curriculum.id)
          .eq('day_number', dayNumber)
          .maybeSingle(),
        supabase
          .from('academy_uploads')
          .select('*')
          .eq('user_id', userId)
          .eq('curriculum_id', curriculum.id)
          .eq('day_number', dayNumber)
      ])
      setProgress(prog ?? null)
      const uploadMap = {}
      ups?.forEach(u => { uploadMap[u.exercise_id] = u.file_url })
      setUploads(uploadMap)
      setLoading(false)
    }
    loadProgress()
  }, [userId, dayNumber, curriculum.id])

  function handleExerciseComplete(updated) {
    setProgress(prev => ({ ...prev, ...updated }))
    onProgressUpdate?.(dayNumber, updated)
  }

  function handleUploadComplete(exerciseId, url) {
    setUploads(prev => ({ ...prev, [exerciseId]: url }))
  }

  if (!dayData) return null
  if (loading) return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-line rounded w-1/2" />
      <div className="h-64 bg-line rounded" />
    </div>
  )

  const hasEx2 = dayData.exercises.some(e => e.id === 'ex2')
  const hasUploadForDay = Object.keys(uploads).length > 0

  const dayComplete = dayData.exercises.every(exercise =>
    exercise.id === 'ex1'
      ? progress?.ex1_complete
      : progress?.ex2_complete
  )

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Week {dayData.week} — {dayData.weekTheme}</p>
          <h2 className="font-serif text-4xl font-normal tracking-tight leading-none">
            Day {dayNumber} — {dayData.topic}
          </h2>
        </div>
        {dayComplete && (
          <div className="pill mt-1 flex-shrink-0">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Day Complete
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dayData.exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            dayNumber={dayNumber}
            curriculumId={curriculum.id}
            userId={userId}
            hasEx2={hasEx2}
            hasUploadForDay={hasUploadForDay}
            onUploadComplete={handleUploadComplete}
            initialComplete={
              exercise.id === 'ex1'
                ? progress?.ex1_complete ?? false
                : progress?.ex2_complete ?? false
            }
            initialUploadUrl={uploads[exercise.id] ?? null}
            onComplete={handleExerciseComplete}
          />
        ))}
      </div>

      {dayComplete && (
        <div className="card border-accent bg-accent/5 text-center space-y-4">
          <div>
            <p className="font-serif text-2xl font-normal mb-1">Day {dayNumber} complete.</p>
            <p className="text-muted text-sm">
              {dayNumber < curriculum.totalDays
                ? `Ready for Day ${dayNumber + 1}?`
                : "You've completed the full curriculum."}
            </p>
          </div>
          {dayNumber < curriculum.totalDays ? (
            <button onClick={onDayComplete} className="btn btn-primary btn-md">
              Next Day →
            </button>
          ) : (
            <button onClick={onDayComplete} className="btn btn-primary btn-md">
              Complete Curriculum
            </button>
          )}
        </div>
      )}
    </div>
  )
}
