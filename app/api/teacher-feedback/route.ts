export const maxDuration = 30

import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import sharp from 'sharp'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 503 })
  }
  try {
    const formData = await req.formData()
    const imageFile = formData.get('image') as File
    if (!imageFile) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Resize so we never hit Claude's 10MB-per-image limit or Vercel's body size limit
    const resized = await sharp(buffer)
      .resize(1568, 1568, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toBuffer()

    const base64 = resized.toString('base64')

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 400,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: 'image/jpeg', data: base64 },
            },
            {
              type: 'text',
              text: `You are a warm, specific art instructor. Look closely at this piece and give short, instant feedback — 3 to 5 sentences. Name one real strength you actually see in this specific piece, and one concrete thing to work on next. Speak directly to the student. Respond with plain text only, no JSON, no markdown.`,
            },
          ],
        },
      ],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text.trim() : ''
    if (!text) throw new Error('Empty response')

    return NextResponse.json({ feedback: text })
  } catch (error) {
    console.error('Quick feedback error:', error)
    return NextResponse.json({ error: 'Could not generate feedback. Please try again.' }, { status: 500 })
  }
}
