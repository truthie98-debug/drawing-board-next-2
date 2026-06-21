import Anthropic from '@anthropic-ai/sdk'
import sharp from 'sharp'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

type Submission = {
  id: string
  type: string
  image_url: string | null
  notes: string | null
  created_at: string
}

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

export async function getOrGenerateTeacherReview(
  supabase: any,
  userId: string,
  profile: any,
  submissions: Submission[]
): Promise<string> {
  if (submissions.length === 0) {
    return "Upload your first piece and I'll have feedback waiting for you here."
  }

  // Already reviewed this exact set of uploads — use the cached version
  if (profile.teacher_review_count === submissions.length && profile.teacher_review_text) {
    return profile.teacher_review_text
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return "Upload more work and I'll review your progress as a whole."
  }

  // Most recent 6 pieces keep the review focused and fast
  const recent = submissions.slice(0, 6)

  // Fetch and resize all images in parallel
  const imageResults = await Promise.all(
    recent.map(sub => (sub.image_url ? imageToBase64(sub.image_url) : Promise.resolve(null)))
  )
  const imageBlocks = imageResults
    .filter((img): img is { data: string; mediaType: string } => img !== null)
    .map(img => ({
      type: 'image' as const,
      source: { type: 'base64' as const, media_type: img.mediaType as 'image/jpeg', data: img.data },
    }))

  const context = recent
    .map(s => `- ${s.type.replace('_', ' ')} on ${new Date(s.created_at).toLocaleDateString()}${s.notes ? `: "${s.notes}"` : ''}`)
    .join('\n')

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 400,
      messages: [
        {
          role: 'user',
          content: [
            ...imageBlocks,
            {
              type: 'text',
              text: `You are an art school instructor. Here is a student's recent body of work, most recent first:\n${context}\n\nWrite a short, warm, specific 3-5 sentence review of this work AS A WHOLE — point out real patterns across the pieces (recurring strengths, recurring habits to fix), not a piece-by-piece breakdown. Speak directly to the student. Respond with plain text only, no JSON, no markdown.`,
            },
          ],
        },
      ],
    })
    const text = message.content[0].type === 'text' ? message.content[0].text.trim() : ''
    if (!text) throw new Error('Empty response')

    await supabase
      .from('profiles')
      .update({ teacher_review_text: text, teacher_review_count: submissions.length })
      .eq('id', userId)

    return text
  } catch (err) {
    console.error('Teacher review error:', err)
    return profile.teacher_review_text || "I'm reviewing your latest work — check back shortly."
  }
}
