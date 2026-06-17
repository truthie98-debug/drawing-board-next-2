import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 503 })
  }

  try {
    const formData = await req.formData()
    const imageFile = formData.get('image') as File
    if (!imageFile) return NextResponse.json({ error: 'No image provided' }, { status: 400 })

    const arrayBuffer = await imageFile.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')
    const mediaType = imageFile.type as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp'

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mediaType, data: base64 },
            },
            {
              type: 'text',
              text: `You are an art school instructor giving structured critique. Analyze this artwork and respond ONLY with a JSON object (no markdown, no explanation outside JSON) in this exact format:
{
  "grade": "B",
  "overall": "One sentence describing the work's main strength and main weakness.",
  "technical": [
    { "label": "Gesture", "score": "Strong|Readable|Work on this", "note": "One specific observation." },
    { "label": "Proportion", "score": "Strong|Readable|Work on this", "note": "One specific observation." },
    { "label": "Anatomy", "score": "Strong|Readable|Work on this", "note": "One specific observation." },
    { "label": "Value", "score": "Strong|Readable|Work on this", "note": "One specific observation." },
    { "label": "Composition", "score": "Strong|Readable|Work on this", "note": "One specific observation." }
  ],
  "creative": [
    { "label": "Originality", "score": "Distinct|Developing|Generic", "note": "One specific observation." },
    { "label": "Storytelling", "score": "Clear|Developing|Absent", "note": "One specific observation." }
  ],
  "nextSteps": [
    "Specific exercise to address the biggest weakness.",
    "Specific assignment to build on the strongest element."
  ],
  "portfolioNote": "One sentence on portfolio readiness."
}`,
            },
          ],
        },
      ],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text : ''
    const clean = text.replace(/```json|```/g, '').trim()
    const result = JSON.parse(clean)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Critique error:', error)
    return NextResponse.json({ error: 'Critique failed' }, { status: 500 })
  }
}
