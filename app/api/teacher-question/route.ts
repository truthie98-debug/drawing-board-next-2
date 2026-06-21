import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

async function imageToBase64(url: string): Promise<{ data: string; mediaType: string } | null> {
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const contentType = res.headers.get('content-type') || 'image/jpeg'
    const arrayBuffer = await res.arrayBuffer()
    const data = Buffer.from(arrayBuffer).toString('base64')
    return { data, mediaType: contentType }
  } catch {
    return null
  }
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 503 })
  }
  try {
    const { question, submissions } = await req.json()
    if (!question || !question.trim()) {
      return NextResponse.json({ error: 'No question provided' }, { status: 400 })
    }

    const recent = (submissions || []).slice(0, 6)
    const imageBlocks: any[] = []
    for (const sub of recent) {
      if (!sub.image_url) continue
      const img = await imageToBase64(sub.image_url)
      if (img) {
        imageBlocks.push({
          type: 'image',
          source: { type: 'base64', media_type: img.mediaType, data: img.data },
        })
      }
    }

    const context = recent
      .map((s: any) => `- ${s.type?.replace('_', ' ') || 'piece'} on ${new Date(s.created_at).toLocaleDateString()}${s.notes ? `: "${s.notes}"` : ''}`)
      .join('\n')

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: [
            ...imageBlocks,
            {
              type: 'text',
              text: `You are an art school instructor. Here is the student's recent uploaded work, most recent first:\n${context}\n\nThe student is asking: "${question}"\n\nAnswer directly and specifically, referencing the actual work shown above. Keep it conversational, 2-5 sentences. Plain text only, no markdown.`,
            },
          ],
        },
      ],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text.trim() : ''
    return NextResponse.json({ answer: text || "I couldn't find anything to go on — try uploading some work first." })
  } catch (error) {
    console.error('Teacher question error:', error)
    return NextResponse.json({ error: 'Something went wrong generating a response.' }, { status: 500 })
  }
}
