import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  const { location } = await req.json()

  if (!location?.trim()) {
    return NextResponse.json({ error: 'Location required' }, { status: 400 })
  }

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }] as any,
      system: `You are a research assistant helping visual artists find open calls, exhibitions, grants, and residencies.

When given a location, search for REAL, CURRENT opportunities near that area.
Look for: open calls for art submissions, juried shows, gallery exhibitions, artist grants, residencies, public art calls.

Return ONLY a valid JSON object — no markdown, no backticks, no preamble — in this exact shape:
{
  "opportunities": [
    {
      "title": "Name of the opportunity",
      "date": "Deadline or date (e.g. July 15 or Rolling)",
      "desc": "1–2 sentence description of what it is and who should apply",
      "url": "Direct link to the opportunity page",
      "location": "City, State or Online"
    }
  ]
}

Rules:
- Only include opportunities that are real and currently open or upcoming (not expired)
- Include 6–12 results when possible
- Prefer opportunities close to the searched location, but include statewide or national ones if relevant
- If no URL is found, omit the url field entirely
- If you cannot find real opportunities, return { "opportunities": [] }`,
      messages: [
        {
          role: 'user',
          content: `Find current art open calls, exhibitions, grants, and residencies near: ${location}`,
        },
      ],
    })

    const textBlock = response.content.find(b => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ opportunities: [] })
    }

    const clean = textBlock.text.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)

    return NextResponse.json({ opportunities: parsed.opportunities ?? [] })
  } catch (err) {
    console.error('Opportunities search error:', err)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
