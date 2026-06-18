export const maxDuration = 30
import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  const { primary, secondary, month, dailyExercise, weekly } = await req.json()

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4000,
      system: `You are a warm, experienced college-level art instructor. You speak like a supportive professor who has taught for 20 years — encouraging but honest, specific not vague, always connecting exercises to long-term artistic growth. Return ONLY valid JSON, no markdown, no backticks, no extra text.`,
      messages: [
        {
          role: 'user',
          content: `Month ${month}. Primary fundamental: "${primary}". Secondary fundamental: "${secondary}".
Today's exercise: "${dailyExercise}"
Weekly assignment: "${weekly}"

Return this exact JSON structure:
{
  "artist": {
    "name": "A real living or historical master artist whose work exemplifies ${primary} and ${secondary}",
    "discipline": "Their medium and style in 5 words",
    "known_for": "One sentence on what they are famous for",
    "why_selected": "One sentence connecting their work to this month's fundamentals",
    "youtube_search": "A specific search query to find a YouTube video about this artist or their technique",
    "lessons": [
      "One specific visual lesson students should observe in their work",
      "Another specific lesson",
      "A third specific lesson"
    ],
    "study_challenge": "A one-week challenge inspired by this artist that connects to ${primary} and ${secondary}"
  },
  "fundamentals": {
    "primary": {
      "why": "2 sentences on why ${primary} is essential to artistic growth",
      "objective": "What the student will achieve this month with ${primary}",
      "success": "What success looks like by end of month",
      "mistake": "The most common mistake students make with ${primary}"
    },
    "secondary": {
      "why": "2 sentences on why ${secondary} is essential to artistic growth",
      "objective": "What the student will achieve this month with ${secondary}",
      "success": "What success looks like by end of month",
      "mistake": "The most common mistake students make with ${secondary}"
    }
  },
  "daily": {
    "objective": "The skill being trained today in one sentence",
    "why": "2 sentences explaining why this specific exercise exists and what it builds",
    "instructions": [
      "Step 1 — specific action",
      "Step 2 — specific action",
      "Step 3 — specific action",
      "Step 4 — specific action"
    ],
    "mistakes": [
      "Mistake to avoid",
      "Another mistake to avoid"
    ],
    "success": "What a successful study looks like today",
    "reflection": "One honest question for the student to answer after completing the study",
    "resource": {
      "title": "A specific YouTube video, book, or article",
      "why": "One sentence on why this resource fits today's exercise"
    },
    "encouragement": "One warm specific sentence of encouragement tied to what they are working on"
  },
  "weekly": {
    "brief": "Professional project description in 2 sentences",
    "goals": ["Learning goal 1", "Learning goal 2", "Learning goal 3"],
    "deliverables": ["What must be submitted 1", "What must be submitted 2"],
    "process": ["Research phase", "Thumbnail phase", "Sketch phase", "Final artwork phase"],
    "rubric": [
      { "category": "Fundamentals", "description": "How well ${primary} and ${secondary} are demonstrated" },
      { "category": "Composition", "description": "How the image is staged and organized" },
      { "category": "Craftsmanship", "description": "Quality of execution and finish" },
      { "category": "Creativity", "description": "Personal voice and original thinking" },
      { "category": "Completion", "description": "All deliverables submitted" }
    ],
    "teacher_notes": "2 sentences of warm, specific guidance on how to approach this week's assignment",
    "resource": {
      "title": "A specific resource for this week's assignment",
      "why": "One sentence on why it helps"
    }
  },
  "capstone": {
    "brief": "The monthly capstone project brief in 2 sentences combining ${primary} and ${secondary}",
    "requirements": ["Requirement 1", "Requirement 2", "Requirement 3"],
    "deliverables": ["Deliverable 1", "Deliverable 2"],
    "success": "What a strong capstone looks like",
    "portfolio_value": "One sentence on how this project strengthens a portfolio"
  }
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
