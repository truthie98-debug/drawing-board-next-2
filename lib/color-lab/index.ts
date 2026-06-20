import { VALUE_LIGHT } from './value-light'
import { WARM_VS_COOL } from './warm-cool'
import { LIMITED_PALETTES } from './limited-palettes'
import { MOOD_EMOTION } from './mood-emotion'
import { FILM_ILLUSTRATION } from './film-illustration'

export type { ColorExercise } from './value-light'

export const COLOR_LAB_EXERCISES = [
  ...VALUE_LIGHT,
  ...WARM_VS_COOL,
  ...LIMITED_PALETTES,
  ...MOOD_EMOTION,
  ...FILM_ILLUSTRATION,
]

/**
 * Returns a stable "week key" like "2026-W25" — used both to pick
 * the week's challenge and to record/check completion per week.
 * Weeks reset on Monday.
 */
export function getWeekKey(date: Date = new Date()): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  // ISO week date: Thursday in current week decides the year, Monday is day 1
  const dayNum = (d.getUTCDay() + 6) % 7 // Monday = 0 ... Sunday = 6
  d.setUTCDate(d.getUTCDate() - dayNum + 3) // shift to Thursday of this week
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4))
  const firstDayNum = (firstThursday.getUTCDay() + 6) % 7
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNum + 3)
  const weekNum = 1 + Math.round((d.getTime() - firstThursday.getTime()) / (7 * 86400000))
  return `${d.getUTCFullYear()}-W${String(weekNum).padStart(2, '0')}`
}

/**
 * Pulls one exercise from the 150-exercise database for the current week.
 * Same exercise shows all week, changes automatically the following Monday.
 * Never generates — always pulls from the handcrafted library.
 */
export function getWeeklyColorLabExercise(weekKey: string = getWeekKey()) {
  // Simple deterministic hash of the week key so the same week always
  // produces the same "random" exercise, but it looks random week to week.
  let hash = 0
  for (let i = 0; i < weekKey.length; i++) {
    hash = (hash * 31 + weekKey.charCodeAt(i)) >>> 0
  }
  const index = hash % COLOR_LAB_EXERCISES.length
  return COLOR_LAB_EXERCISES[index]
}
