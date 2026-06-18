export const maxDuration = 30

import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  const { primary, secondary, month, dailyExercise } = await req.json()

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 800,
      system: `You are a warm college-level art instructor. Return ONLY valid JSON, no markdown, no backticks.`,
      messages: [
        {
          role: 'user',
          content: `Month ${month}. Fundamentals: "${primary}" and "${secondary}". Today's exercise: "${dailyExercise}".

Return this JSON:
{
  "objective": "The skill being trained today in one sentence",
  "why": "2 sentences on why this exercise exists and what it builds long-term",
  "instructions": ["Step 1", "Step 2", "Step 3", "Step 4"],
  "mistakes": ["Mistake to avoid", "Another mistake to avoid"],
  "success": "What a successful study looks like today",
  "reflection": "One honest question for after the study",
  "encouragement": "One warm specific sentence of encouragement"
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
