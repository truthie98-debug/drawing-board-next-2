import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import sharp from 'sharp'

export const maxDuration = 60

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

async function imageToBase64(url: string): Promise<{ data: string; mediaType: string } | null> {
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const arrayBuffer = await res.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    // Resize so we never hit Claude's 10MB-per-image limit
    const resized = await sharp(buffer)
      .resize(1568, 1568, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toBuffer()
    return { data: resized.toString('base64'), mediaType: 'image/jpeg' }
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

    const imageResults = await Promise.all(
      recent.map((sub: any) => (sub.image_url ? imageToBase64(sub.image_url) : Promise.resolve(null)))
    )
    const imageBlocks = imageResults
      .filter((img): img is { data: string; mediaType: string } => img !== null)
      .map(img => ({
        type: 'image' as const,
        source: { type: 'base64' as const, media_type: img.mediaType as 'image/jpeg', data: img.data },
      }))

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
