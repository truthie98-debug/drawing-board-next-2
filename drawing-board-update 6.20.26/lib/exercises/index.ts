import { FIGURE_DRAWING } from './figure-drawing'
import { ANATOMY } from './anatomy'
import { PERSPECTIVE_FORM } from './perspective-form'
import { LIGHT_COLOR } from './light-color'
import { COMPOSITION_STORYTELLING } from './composition-storytelling'

export type { Exercise, Fundamental } from './figure-drawing'

// The 5 core fundamentals, in rotation order
export const FUNDAMENTALS = [
  FIGURE_DRAWING,
  ANATOMY,
  PERSPECTIVE_FORM,
  LIGHT_COLOR,
  COMPOSITION_STORYTELLING,
]

/**
 * Returns which fundamental is "today's" focus by rotating
 * through all 5 in sequence, one per day.
 */
export function getTodayFundamentalIndex(): number {
  const epoch = new Date(2025, 0, 1) // fixed reference point so rotation is stable
  const today = new Date()
  const daysSince = Math.floor((today.getTime() - epoch.getTime()) / 86400000)
  return ((daysSince % FUNDAMENTALS.length) + FUNDAMENTALS.length) % FUNDAMENTALS.length
}

export function getTodayFundamental() {
  return FUNDAMENTALS[getTodayFundamentalIndex()]
}

/**
 * Selects exactly one exercise from a fundamental's exercise list.
 * Pulls only from the handcrafted database — never generates custom content.
 * Uses the date as a seed so the same exercise shows all day, then changes tomorrow.
 */
export function getDailyExercise(fundamentalId: string, seedOffset = 0) {
  const fundamental = FUNDAMENTALS.find(f => f.id === fundamentalId)
  if (!fundamental) return null

  const today = new Date()
  const daySeed = today.getFullYear() * 1000 + dayOfYear(today) + seedOffset
  const index = daySeed % fundamental.exercises.length
  return fundamental.exercises[index]
}

/** Picks a genuinely random exercise from a fundamental (for "Generate another"). */
export function getRandomExercise(fundamentalId: string, excludeId?: string) {
  const fundamental = FUNDAMENTALS.find(f => f.id === fundamentalId)
  if (!fundamental) return null

  const pool = excludeId
    ? fundamental.exercises.filter(e => e.id !== excludeId)
    : fundamental.exercises

  return pool[Math.floor(Math.random() * pool.length)]
}

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  return Math.floor(diff / 86400000)
}
