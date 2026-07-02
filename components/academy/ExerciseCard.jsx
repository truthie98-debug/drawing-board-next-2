'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/lib/supabase-browser'

export default function ExerciseCard({ exercise, dayNumber, curriculumId, userId, initialComplete = false, initialUploadUrl = null, onComplete, hasEx2 = false, hasUploadForDay = false, onUploadComplete }) {
  const [complete, setComplete] = useState(initialComplete)
  const [uploadUrl, setUploadUrl] = useState(initialUploadUrl)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [showUploadWarning, setShowUploadWarning] = useState(false)
  const fileRef = useRef()
  const supabase = createClient()

  async function handleCheck() {
    const newVal = !complete
    const canCheck = newVal ? (hasUploadForDay || !!uploadUrl) : true

    if (!canCheck) {
      setShowUploadWarning(true)
      return
    }
    setShowUploadWarning(false)

    setComplete(newVal)
    setSaving(true)

    const { data: existing } = await supabase
      .from('academy_progress')
      .select('id, ex1_complete, ex2_complete')
      .eq('user_id', userId)
      .eq('curriculum_id', curriculumId)
      .eq('day_number', dayNumber)
      .single()

    const ex1 = exercise.id === 'ex1' ? newVal : (existing?.ex1_complete ?? false)
    const ex2 = exercise.id === 'ex2' ? newVal : (existing?.ex2_complete ?? false)
    const isComplete = hasEx2 ? (ex1 && ex2) : ex1

    await supabase.from('academy_progress').upsert({
      user_id: userId,
      curriculum_id: curriculumId,
      day_number: dayNumber,
      ex1_complete: ex1,
      ex2_complete: ex2,
      is_complete: isComplete,
      completed_at: isComplete ? new Date().toISOString() : null,
    }, { onConflict: 'user_id,curriculum_id,day_number' })

    setSaving(false)
    onComplete?.({ ex1_complete: ex1, ex2_complete: ex2, is_complete: isComplete })
  }

  async function handleUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)

    const ext = file.name.split('.').pop()
    const path = `academy/${userId}/${curriculumId}/day${dayNumber}/${exercise.id}.${ext}`

    const { error } = await supabase.storage
      .from('academy-uploads')
      .upload(path, file, { upsert: true })

    if (!error) {
      const { data: { publicUrl } } = supabase.storage
        .from('academy-uploads')
        .getPublicUrl(path)

      setUploadUrl(publicUrl)
      setShowUploadWarning(false)

      await supabase.from('academy_uploads').upsert({
        user_id: userId,
        curriculum_id: curriculumId,
        day_number: dayNumber,
        exercise_id: exercise.id,
        file_url: publicUrl,
      }, { onConflict: 'user_id,curriculum_id,day_number,exercise_id' })

      onUploadComplete?.(exercise.id, publicUrl)
    }

    setUploading(false)
  }

  return (
    <div className={`card-sm transition-all duration-300 ${
      complete ? 'border-accent bg-accent/5' : ''
    }`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <p className="eyebrow">
            {exercise.id === 'ex1' ? 'Exercise 1' : 'Exercise 2'}
          </p>
          <h3 className="font-serif text-xl font-normal tracking-tight">
            {exercise.title}
          </h3>
          <span className="text-xs text-muted">{exercise.duration}</span>
        </div>

        <button
          onClick={handleCheck}
          disabled={saving}
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            complete
              ? 'bg-accent border-accent'
              : 'border-line hover:border-accent'
          }`}
        >
          {complete && (
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>

      {showUploadWarning && (
        <div className="mb-4 px-3 py-2 rounded-lg bg-accent/10 border border-accent/30 text-xs text-accent">
          Upload a photo of your work for this day before marking it complete.
        </div>
      )}

      <ul className="space-y-1.5 mb-5">
        {exercise.instructions.map((line, i) => (
          <li key={i} className="flex gap-2 text-sm text-ink leading-relaxed">
            <span className="text-accent mt-0.5 flex-shrink-0">—</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-line pt-4">
        {uploadUrl ? (
          <div className="space-y-2">
            <img
              src={uploadUrl}
              alt="Uploaded work"
              className="w-full h-32 object-cover rounded-xl border border-line"
            />
            <button
              onClick={() => fileRef.current?.click()}
              className="text-xs text-muted hover:text-accent underline"
            >
              Replace upload
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-line rounded-xl py-4 text-center cursor-pointer hover:border-accent transition-colors bg-cream">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
            {uploading ? (
              <span className="text-xs text-muted">Uploading...</span>
            ) : (
              <>
                <span className="text-xl text-line mb-1">↑</span>
                <span className="text-xs text-muted">Upload your work</span>
              </>
            )}
          </label>
        )}
      </div>
    </div>
  )
}
