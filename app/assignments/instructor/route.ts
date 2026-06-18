import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  const { primary, secondary, month, dailyExercise } = await req.json()

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      system: `You are a warm, rigorous art instructor at a college-level studio program. 
You speak like a supportive professor who has been teaching for 20 years — encouraging but honest, specific not vague, always connecting exercises to long-term growth.
Never use bullet points. Write in natural paragraphs.
Return ONLY valid JSON, no markdown, no backticks.`,
      messages: [
        {
          role: 'user',
          content: `The student is in Month ${month} of their curriculum. This month's two fundamentals are "${primary}" (primary) and "${secondary}" (secondary).

Today's exercise is: "${dailyExercise}"

Return a JSON object with these exact keys:
{
  "why": "2-3 sentences explaining WHY this exercise matters for long-term growth. Connect it to how professional artists use this skill.",
  "technique": "2-3 sentences on HOW to approach today's exercise. Be specific — what to look for, what to avoid, what success looks like.",
  "common_mistake": "One specific mistake students make with this fundamental and how to fix it.",
  "artist_spotlight": {
    "name": "A real master artist known for this fundamental",
    "why": "One sentence on what makes their work a perfect study for this skill."
  },
  "resource": {
    "title": "A specific book, video series, or exercise resource",
    "why": "One sentence on why it is useful right now."
  },
  "monthly_project": "2 sentences describing the bigger body of work this month is building toward and how today's exercise contributes to it.",
  "encouragement": "One warm, specific sentence of encouragement — not generic, tied to what the student is actually working on."
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
    return NextResponse.json({ error: 'Failed to load instructor content' }, { status: 500 })
  }
}
