import type { Exercise, Fundamental } from './figure-drawing'

const colorTheory: Exercise[] = [
  // ───────────────────────────────────────────────
  // 1. COLOR HARMONY
  // ───────────────────────────────────────────────
  {
    id: 'ct-001',
    title: 'Triadic Trio Creature',
    goal: 'Practice designing a cohesive creature using a triadic color scheme.',
    how: [
      'Pick three colors evenly spaced on the color wheel.',
      'Design a brand-new creature, assigning one color as dominant and two as accents.',
      'Keep the creature simple — focus on the palette, not the anatomy.',
    ],
    review: 'Did the triad feel balanced, or did one color fight for attention?',
  },
  {
    id: 'ct-002',
    title: 'Split-Complement Street Scene',
    goal: 'Practice a less obvious harmony than straight complements.',
    how: [
      'Choose a base color, then its split-complement pair (the two colors flanking its opposite).',
      'Sketch a quick street scene — buildings, signage, a figure or two.',
      'Use the base color for most of the scene and the split pair as sparing accents.',
    ],
    review: 'Did the split-complement feel more harmonious than a straight complement would?',
  },
  {
    id: 'ct-003',
    title: 'Complementary Combat',
    goal: 'Practice using complementary colors to visually separate rivals.',
    how: [
      'Design two simple rival characters facing off.',
      'Give each character one half of a complementary
