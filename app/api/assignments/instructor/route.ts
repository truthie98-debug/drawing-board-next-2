export const maxDuration = 30

import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  const { primary, secondary, month, dailyExercise, weekly } = await req.json()

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      system: `You are a warm college-level art instructor. Return ONLY valid JSON, no markdown, no backticks.`,
      messages: [
        {
          role: 'user',
          content: `Month ${month}. Fundamentals: "${primary}" and "${secondary}". Exercise: "${dailyExercise}". Weekly: "${weekly}".

Return this JSON:
{
  "artist": { "name": "Real master artist", "discipline": "Medium in 5 words", "known_for": "One sentence", "why_selected": "One sentence", "youtube_search": "Search query", "lessons": ["Lesson 1", "Lesson 2", "Lesson 3"], "study_challenge": "One week challenge" },
  "fundamentals": {
    "primary": { "why": "2 sentences", "objective": "One sentence", "success": "One sentence", "mistake": "One sentence" },
    "secondary": { "why": "2 sentences", "objective": "One sentence", "success": "One sentence", "mistake": "One sentence" }
  },
  "daily": { "objective": "One sentence", "why": "2 sentences", "instructions": ["Step 1", "Step 2", "Step 3", "Step 4"], "mistakes": ["Mistake 1", "Mistake 2"], "success": "One sentence", "reflection": "One question", "resource": { "title": "Resource name", "why": "One sentence" }, "encouragement": "One sentence" },
  "weekly": { "brief": "2 sentences", "goals": ["Goal 1", "Goal 2", "Goal 3"], "deliverables": ["Item 1", "Item 2"], "process": ["Phase 1", "Phase 2", "Phase 3", "Phase 4"], "rubric": [{ "category": "Fundamentals", "description": "One sentence" }, { "category": "Composition", "description": "One sentence" }, { "category": "Craftsmanship", "description": "One sentence" }, { "category": "Creativity", "description": "One sentence" }, { "category": "Completion", "description": "One sentence" }], "teacher_notes": "2 sentences", "resource": { "title": "Resource name", "why": "One sentence" } },
  "capstone": { "brief": "2 sentences", "requirements": ["Req 1", "Req 2", "Req 3"], "deliverables": ["Item 1", "Item 2"], "success": "One sentence", "portfolio_value": "One sentence" }
}`,
        },
      ],
    })

    const text = response.content.find(b => b.type === 'text')
    if (!text || text.type !== 'text') throw new Error('No response')
    const clean = text.text.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)
    return NextResponse.json(parsed)
  } catch (err) {
    console.error('Instructor API error:', err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
