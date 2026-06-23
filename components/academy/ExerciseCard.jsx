'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ExerciseCard({ exercise, dayNumber, curriculumId, userId, initialComplete = false, initialUploadUrl = null }) {
  const [complete, setComplete] = useState(initialComplete)
  const [uploadUrl, setUploadUrl] = useState(initialUploadUrl)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const fileRef = useRef()
  const supabase = createClient()

  async function handleCheck() {
    const newVal = !complete
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
    const isComplete = ex1 && ex2

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

      await supabase.from('academy_uploads').upsert({
        user_id: userId,
        curriculum_id: curriculumId,
        day_number: dayNumber,
        exercise_id: exercise.id,
        file_url: publicUrl,
      }, { onConflict: 'user_id,curriculum_id,day_number,exercise_id' })
    }

    setUploading(false)
  }

  return (
    <div className={`border-2 rounded-lg p-5 transition-all duration-300 ${
      complete ? 'border-yellow-400 bg-yellow-400/10' : 'border-gray-200 bg-white'
    }`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            {exercise.id === 'ex1' ? 'Exercise 1' : 'Exercise 2'}
          </span>
          <h3 className="text-base font-bold text-gray-900 mt-0.5">{exercise.title}</h3>
          <span className="text-xs text-gray-400">{exercise.duration}</span>
        </div>

        <button
          onClick={handleCheck}
          disabled={saving}
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            complete
              ? 'bg-yellow-400 border-yellow-400'
              : 'border-gray-300 hover:border-yellow-400'
          }`}
        >
          {complete && (
            <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>

      <ul className="space-y-1.5 mb-5">
        {exercise.instructions.map((line, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-600">
            <span className="text-yellow-500 mt-0.5 flex-shrink-0">—</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-100 pt-4">
        {uploadUrl ? (
          <div className="space-y-2">
            <img src={uploadUrl} alt="Uploaded work" className="w-full h-32 object-cover rounded-lg" />
            <button
              onClick={() => fileRef.current?.click()}
              className="text-xs text-gray-400 hover:text-gray-600 underline"
            >
              Replace upload
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="w-full py-2.5 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-400 hover:border-yellow-400 hover:text-yellow-500 transition-all duration-200 flex items-center justify-center gap-2"
          >
            {uploading ? (
              <span>Uploading...</span>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload your work
              </>
            )}
          </button>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
      </div>
    </div>
  )
}
