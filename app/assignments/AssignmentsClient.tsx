'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

type TrackCompletion = {
  id: string
  image_url: string | null
  completed_at: string
} | null

type WeeklyExercise = {
  id: string
  track: string
  title: string
  goal: string
  how: string[]
  review: string
}

const LIMITED_PALETTE_EXERCISES: WeeklyExercise[] = [
  { id: 'lp-1', track: 'Limited Palette', title: 'Two-Color Portrait', goal: 'Train your eye to see form and value using only two colors.', how: ['Choose one warm and one cool color — nothing else.', 'Paint a simple portrait using only these two colors plus white.', 'Focus on value relationships, not color accuracy.', 'Push the contrast as far as it can go.'], review: 'Did the two colors create enough contrast to read as a face?' },
  { id: 'lp-2', track: 'Limited Palette', title: 'Monochromatic Value Study', goal: 'Understand the full value range of a single hue.', how: ['Pick one color. Mix it with black and white only.', 'Create a value scale from darkest to lightest — at least 7 steps.', 'Use that scale to paint a simple still life or figure.', 'No other colors allowed.'], review: 'How many distinct values did you actually use?' },
  { id: 'lp-3', track: 'Limited Palette', title: 'Black, White, One Color', goal: 'See how far one chromatic color can carry a composition.', how: ['Choose one saturated color — red, blue, or yellow.', 'Use only that color, black, and white.', 'Paint a scene or character with clear light and shadow.', 'Use the color for midtones — black for shadow, white for light.'], review: 'Where did the single color feel most powerful in the piece?' },
  { id: 'lp-4', track: 'Limited Palette', title: 'Three-Color Landscape', goal: 'Build a full landscape from a minimal palette.', how: ['Choose 3 colors — one for sky, one for midground, one for foreground.', 'Mix them together for transitions — do not add new colors.', 'Keep the composition simple — horizon line, two layers of depth.', 'Focus on how the colors relate, not on detail.'], review: 'Did the three colors feel unified or disconnected?' },
  { id: 'lp-5', track: 'Limited Palette', title: 'Warm Palette Only', goal: 'Explore the full range of a warm-only palette.', how: ['Limit yourself to reds, oranges, yellows, and their mixes.', 'No blues, greens, or purples allowed.', 'Paint a figure or portrait using only warm tones.', 'Use dark warm shadows instead of cool shadows.'], review: 'How did the all-warm palette change the mood of the piece?' },
  { id: 'lp-6', track: 'Limited Palette', title: 'Cool Palette Only', goal: 'Explore the full range of a cool-only palette.', how: ['Limit yourself to blues, blue-greens, and blue-violets.', 'No reds, oranges, or yellows allowed.', 'Paint a figure, portrait, or environment.', 'Use light cool tones for highlights and dark cool tones for shadow.'], review: 'What mood did the all-cool palette create?' },
  { id: 'lp-7', track: 'Limited Palette', title: 'Single Hue Plus Neutrals', goal: 'Use one hue supported by neutrals to create a cohesive image.', how: ['Choose one color. Mix it with grays and browns — no other hues.', 'Let the single color act as the accent throughout the piece.', 'Paint a portrait, figure, or simple scene.', 'Limit where the color appears — make it count.'], review: 'Where did the single accent color draw the most attention?' },
  { id: 'lp-8', track: 'Limited Palette', title: 'Earth Tones Only', goal: 'Work within a natural, muted palette.', how: ['Use only earth tones — raw sienna, burnt umber, yellow ochre, ivory black.', 'No bright or saturated colors.', 'Paint a portrait or figure study.', 'Focus on subtle value shifts within a narrow color range.'], review: 'How did the muted palette affect the feeling of the piece?' },
  { id: 'lp-9', track: 'Limited Palette', title: 'Complementary Pair Only', goal: 'Push two opposite colors as far as they can go.', how: ['Choose one complementary pair — red/green, blue/orange, or yellow/violet.', 'Use only these two colors plus black and white.', 'Paint a bold, graphic composition — figure or portrait.', 'Use one color for light, the other for shadow.'], review: 'Did the complementary tension feel energizing or overwhelming?' },
  { id: 'lp-10', track: 'Limited Palette', title: 'Zorn Palette', goal: 'Work with the classic four-color portrait palette.', how: ['Use only: yellow ochre, vermillion red, ivory black, and titanium white.', 'Mix these four to create all the skin tones you need.', 'Paint a portrait or figure from reference.', 'Note how black mixed with yellow creates greens, and red with black creates darks.'], review: 'What skin tones surprised you when mixing this palette?' },
  { id: 'lp-11', track: 'Limited Palette', title: 'Grayscale + One Color', goal: 'Use value as the foundation and color as the accent.', how: ['Paint the entire piece in grayscale first.', 'Add one color on top as a transparent glaze or selective accent.', 'The color should enhance the value structure, not replace it.', 'Focus on where the color adds the most impact.'], review: 'Did adding color improve or weaken the grayscale foundation?' },
  { id: 'lp-12', track: 'Limited Palette', title: 'Split Primary Palette', goal: 'Build a full color gamut from six carefully chosen pigments.', how: ['Use a warm and cool version of each primary: warm red, cool red, warm blue, cool blue, warm yellow, cool yellow.', 'Mix all other colors from these six only.', 'Paint a colorful scene — nature, still life, or character.', 'Notice which mixes produce vivid colors and which go muddy.'], review: 'Which color combination produced the most unexpected result?' },
]

const COLOR_HARMONY_EXERCISES: WeeklyExercise[] = [
  { id: 'ch-1', track: 'Color Harmony', title: 'Complementary Color Still Life', goal: 'Use opposing colors to create maximum visual tension.', how: ['Set up or find a reference with a clear complementary color scheme.', 'Identify the dominant color and its complement.', 'Paint the still life emphasizing these two colors in every part of the image.', 'Push the saturation further than the reference.'], review: 'Where did the complementary tension feel most alive?' },
  { id: 'ch-2', track: 'Color Harmony', title: 'Analogous Color Figure', goal: 'Create a harmonious, unified figure using neighboring hues.', how: ['Choose 3 adjacent colors on the color wheel — such as blue, blue-green, and green.', 'Paint a figure or portrait using only these analogous colors.', 'Vary value and saturation — not hue — to create depth.', 'Notice how unified the image feels compared to complementary color work.'], review: 'Did the analogous palette feel calming or limiting?' },
  { id: 'ch-3', track: 'Color Harmony', title: 'Triadic Palette Character', goal: 'Balance three evenly spaced colors in a character design.', how: ['Choose a triadic set — red, yellow, blue or orange, green, violet.', 'Design or paint a character using all three colors.', 'Give one color dominance, one a supporting role, one an accent.', 'Keep the balance intentional — do not use them equally.'], review: 'Which color dominated and did that feel like the right choice?' },
  { id: 'ch-4', track: 'Color Harmony', title: 'Warm Light, Cool Shadow', goal: 'Train the fundamental color temperature rule of light and shadow.', how: ['Find or create a reference with strong directional light.', 'Paint all light areas with warm tones.', 'Paint all shadow areas with cool tones.', 'Make the temperature shift as clear as possible — do not be subtle.'], review: 'Where did the temperature shift feel most convincing?' },
  { id: 'ch-5', track: 'Color Harmony', title: 'Cool Light, Warm Shadow', goal: 'Reverse the conventional temperature rule to create a different mood.', how: ['Use a cool light source — moonlight, overcast sky, fluorescent.', 'Paint all lights cool, all shadows warm.', 'Notice how this reversal changes the emotional quality of the image.', 'Keep the value structure correct even as the temperature flips.'], review: 'How did the reversed temperature change the mood?' },
  { id: 'ch-6', track: 'Color Harmony', title: 'Split Complementary Scene', goal: 'Use a split complementary scheme for controlled tension.', how: ['Choose a color. Find its complement. Then shift one step left and right from the complement.', 'For example: blue + red-orange + yellow-orange.', 'Paint a simple scene — environment or figure — using this set.', 'Give one color clear dominance.'], review: 'Did the split complementary feel more balanced than a straight complementary pair?' },
  { id: 'ch-7', track: 'Color Harmony', title: 'Mood Swap — Same Composition', goal: 'Prove that color alone controls mood.', how: ['Take a simple composition you have already painted or drawn.', 'Paint it three times using three different color schemes — warm, cool, and complementary.', 'Keep the value structure identical across all three.', 'Compare how different each feels.'], review: 'Which color version changed the meaning of the image most dramatically?' },
  { id: 'ch-8', track: 'Color Harmony', title: 'Saturation Gradient Study', goal: 'Understand how saturation levels affect visual hierarchy.', how: ['Paint a simple scene or portrait twice.', 'Version 1: highly saturated throughout.', 'Version 2: desaturated everywhere except one focal point.', 'Compare how attention moves through each version.'], review: 'Where did your eye go first in each version?' },
  { id: 'ch-9', track: 'Color Harmony', title: 'Time of Day Color Study', goal: 'Practice how light color temperature shifts across the day.', how: ['Choose one simple scene — a room, a face, a street.', 'Paint it four times: dawn, noon, dusk, and night.', 'Focus entirely on how the color temperature and saturation change.', 'Keep the value structure as similar as possible across all four.'], review: 'Which time of day produced the most interesting color relationships?' },
  { id: 'ch-10', track: 'Color Harmony', title: 'Tetradic Palette Study', goal: 'Work with four colors evenly spaced on the color wheel.', how: ['Choose a tetradic set — two complementary pairs at right angles.', 'For example: red, orange, blue, green.', 'Paint a character or scene using all four.', 'Assign each color a clear role — dominant, supporting, accent, neutral.'], review: 'Was the tetradic palette harder or easier to control than triadic?' },
  { id: 'ch-11', track: 'Color Harmony', title: 'Color Script — Three Panels', goal: 'Plan a color arc across a short narrative.', how: ['Sketch three simple panels telling a short story — beginning, middle, end.', 'Assign each panel a distinct color scheme that supports the emotional arc.', 'Paint all three small — postcard size is enough.', 'The color should tell the story even without the drawing.'], review: 'Did the color arc match the emotional arc of your story?' },
  { id: 'ch-12', track: 'Color Harmony', title: 'Environment Color Design', goal: 'Use color harmony to make an environment feel intentional.', how: ['Design a simple environment — interior or exterior.', 'Choose a dominant color and build a full harmony scheme around it.', 'Every element in the environment should fit the scheme.', 'Use value and saturation to create depth and focal points.'], review: 'Does the environment feel like it belongs to one cohesive world?' },
]

const MASTER_COLOR_EXERCISES: WeeklyExercise[] = [
  { id: 'mc-1', track: 'Master Study', title: 'Copy a Klimt Palette', goal: 'Extract and apply the decorative color logic of Gustav Klimt.', how: ['Find a Klimt painting — The Kiss, Portrait of Adele, or similar.', 'Identify his key colors and create a swatch sheet.', 'Paint a portrait or figure using only his extracted palette.', 'Focus on gold tones, deep darks, and flat decorative color areas.'], review: 'What made Klimt\'s palette feel opulent rather than overwhelming?' },
  { id: 'mc-2', track: 'Master Study', title: 'Film Still Color Extraction', goal: 'Extract a cinematic color palette and apply it to your own work.', how: ['Choose a film still with a strong color grade — Blade Runner, Moonlight, or similar.', 'Extract the 5 dominant colors into a swatch.', 'Paint an original scene using only these extracted colors.', 'Match the mood of the film, not just the colors.'], review: 'Did your scene capture the mood of the original film?' },
  { id: 'mc-3', track: 'Master Study', title: 'Moebius Color Logic', goal: 'Study how Jean Giraud used flat, graphic color with maximum impact.', how: ['Find a Moebius illustration with strong color.', 'Identify how he uses flat color areas without gradients.', 'Create a character or environment in his graphic color style.', 'Focus on clean edges, bold hues, and deliberate color placement.'], review: 'How did working without gradients change your color decisions?' },
  { id: 'mc-4', track: 'Master Study', title: 'Mucha Poster Study', goal: 'Understand Alphonse Mucha\'s soft, harmonious color language.', how: ['Find an Alphonse Mucha poster.', 'Identify his palette — soft pastels, warm skin tones, muted backgrounds.', 'Paint a portrait or figure using only his color approach.', 'Focus on soft transitions and the relationship between figure and decorative background.'], review: 'What made Mucha\'s palette feel warm and inviting?' },
  { id: 'mc-5', track: 'Master Study', title: 'Sachin Teng Illustration Breakdown', goal: 'Analyze the color structure of a contemporary illustrator.', how: ['Find a Sachin Teng illustration with strong color.', 'Create a swatch sheet of every color used.', 'Identify which colors dominate, support, and accent.', 'Paint an original figure in her color style.'], review: 'What surprised you about how few or how many colors she actually used?' },
  { id: 'mc-6', track: 'Master Study', title: 'Hokusai Color Study', goal: 'Work within the restrained, powerful palette of Japanese woodblock prints.', how: ['Find a Hokusai print — The Great Wave or similar.', 'Identify his limited palette — Prussian blue, red, black, cream, and yellow.', 'Paint a landscape or scene using only his color scheme.', 'Focus on how negative space and flat color create depth.'], review: 'How did the flat, limited palette force you to be more deliberate?' },
  { id: 'mc-7', track: 'Master Study', title: 'Rembrandt Light Study', goal: 'Understand how Rembrandt used color temperature to sculpt form.', how: ['Find a Rembrandt portrait with his characteristic warm light.', 'Identify how warm light plays against cool, dark shadows.', 'Paint a portrait using his color approach — warm highlights, deep cool shadows.', 'Keep your palette limited — ochre, brown, black, white, and one red.'], review: 'How did the extreme light-dark contrast affect the emotional weight?' },
  { id: 'mc-8', track: 'Master Study', title: 'Mary Blair Color Script', goal: 'Study how Mary Blair used bold, unexpected color for emotional storytelling.', how: ['Find a Mary Blair concept painting or illustration.', 'Identify her most unexpected color choices — the ones that should not work but do.', 'Paint a scene inspired by her color logic.', 'Push one color choice further than feels comfortable.'], review: 'Which unexpected color choice worked better than you expected?' },
  { id: 'mc-9', track: 'Master Study', title: 'Eyvind Earle Background Study', goal: 'Understand how a graphic color approach creates atmospheric depth.', how: ['Find an Eyvind Earle background painting from Sleeping Beauty.', 'Identify how he uses flat color planes to create depth.', 'Paint an environment in his style — graphic, flat, but atmospheric.', 'Focus on the silhouette quality of each color plane.'], review: 'How did flat color planes create more or less depth than rendered gradients?' },
  { id: 'mc-10', track: 'Master Study', title: 'Egon Schiele Color Extraction', goal: 'Study how Schiele used minimal, raw color to express psychological intensity.', how: ['Find an Egon Schiele figure drawing with color.', 'Note how he uses orange, ochre, and raw skin tones against stark backgrounds.', 'Paint a figure using his raw, minimal color approach.', 'Do not refine or polish — keep the color feeling raw and direct.'], review: 'How did the raw color approach change the emotional quality of the figure?' },
  { id: 'mc-11', track: 'Master Study', title: 'Studio Ghibli Color Palette', goal: 'Understand how Ghibli creates warmth and nostalgia through color.', how: ['Find a Ghibli background painting from Spirited Away or My Neighbor Totoro.', 'Extract the palette — warm neutrals, soft greens, golden yellows.', 'Paint an environment or character scene using their palette approach.', 'Focus on how the colors feel safe, warm, and lived-in.'], review: 'What specific color choices made the scene feel nostalgic?' },
  { id: 'mc-12', track: 'Master Study', title: 'Personal Master Study', goal: 'Study the color palette of an artist you personally admire.', how: ['Choose any artist whose color work inspires you.', 'Find one piece with strong color that you want to understand.', 'Extract the full palette into a swatch sheet.', 'Paint an original piece using only that extracted palette.'], review: 'What did studying this artist\'s palette teach you about your own color instincts?' },
]

function getWeekExercise(exercises: WeeklyExercise[], weekKey: string): WeeklyExercise {
  const weekNumber = parseInt(weekKey.split('-W')[1] || '1', 10)
  return exercises[(weekNumber - 1) % exercises.length]
}

export function AssignmentsClient({
  userId,
  weekKey,
}: {
  userId: string
  weekKey: string
}) {
  const supabase = createClient()

  const limitedPaletteExercise = getWeekExercise(LIMITED_PALETTE_EXERCISES, weekKey)
  const colorHarmonyExercise = getWeekExercise(COLOR_HARMONY_EXERCISES, weekKey)
  const masterStudyExercise = getWeekExercise(MASTER_COLOR_EXERCISES, weekKey)

  const exercises = [limitedPaletteExercise, colorHarmonyExercise, masterStudyExercise]

  const [completions, setCompletions] = useState<Record<string, { image_url: string | null, completed_at: string } | null>>({})
  const [previews, setPreviews] = useState<Record<string, string>>({})
  const [files, setFiles] = useState<Record<string, File>>({})
  const [saving, setSaving] = useState<Record<string, boolean>>({})

  function handleFile(exerciseId: string, file: File | null) {
    if (!file) return
    setFiles(prev => ({ ...prev, [exerciseId]: file }))
    const reader = new FileReader()
    reader.onload = () => setPreviews(prev => ({ ...prev, [exerciseId]: reader.result as string }))
    reader.readAsDataURL(file)
  }

  async function markComplete(exercise: WeeklyExercise) {
    setSaving(prev => ({ ...prev, [exercise.id]: true }))
    let imageUrl: string | null = null

    const file = files[exercise.id]
    if (file) {
      const ext = file.name.split('.').pop()
      const path = `${userId}/color-lab-${weekKey}-${exercise.id}-${Date.now()}.${ext}`
      const { error: uploadError } = await supabase.storage.from('artwork').upload(path, file)
      if (!uploadError) {
        const { data } = supabase.storage.from('artwork').getPublicUrl(path)
        imageUrl = data.publicUrl
      }
    }

    const { data } = await supabase
      .from('color_lab_completions')
      .upsert({
        user_id: userId,
        exercise_id: exercise.id,
        week_key: weekKey,
        image_url: imageUrl,
        notes: null,
        completed_at: new Date().toISOString(),
      }, { onConflict: 'user_id,week_key' })
      .select()
      .single()

    if (data) {
      setCompletions(prev => ({ ...prev, [exercise.id]: data }))
    }

    setSaving(prev => ({ ...prev, [exercise.id]: false }))
  }

  const trackColors: Record<string, string> = {
    'Limited Palette': 'bg-amber-100 text-amber-800',
    'Color Harmony': 'bg-blue-100 text-blue-800',
    'Master Study': 'bg-purple-100 text-purple-800',
  }

  return (
    <div className="max-w-[800px] mx-auto px-6 py-10 pb-16">
      <p className="eyebrow">Weekly Color Lab</p>
      <h1 className="font-serif text-5xl font-normal tracking-tight leading-none mb-2">
        Color Studies
      </h1>
      <p className="text-muted mb-10">
        Three weekly exercises — one from each track. Work through all three or focus on one. Resets every Monday.
      </p>

      <div className="flex flex-col gap-6">
        {exercises.map((exercise) => {
          const completion = completions[exercise.id]
          const preview = previews[exercise.id]
          const isSaving = saving[exercise.id]

          return (
            <div key={exercise.id} className="card border-secondary/20">
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${trackColors[exercise.track]}`}>
                  {exercise.track}
                </span>
                {completion && (
                  <span className="text-xs text-green-600 font-semibold">
                    Completed this week ✓
                  </span>
                )}
              </div>

              <h2 className="font-serif text-3xl font-normal tracking-tight mb-5">
                {exercise.title}
              </h2>

              <div className="mb-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1.5">
                  Goal
                </p>
                <p className="text-base leading-snug">{exercise.goal}</p>
              </div>

              <div className="mb-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-2">
                  How
                </p>
                <ol className="flex flex-col gap-2">
                  {exercise.how.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-cream border border-line grid place-items-center text-xs font-semibold text-secondary">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-cream border border-line rounded-xl px-4 py-3 mb-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1">
                  Review
                </p>
                <p className="text-sm font-serif italic text-secondary">{exercise.review}</p>
              </div>

              {completion ? (
                <div className="flex gap-4 items-start">
                  {completion.image_url && (
                    <img
                      src={completion.image_url}
                      alt="Submission"
                      className="w-24 h-24 rounded-xl object-cover border border-line"
                    />
                  )}
                  <p className="text-sm font-semibold text-green-700 mt-1">
                    Saved for this week ✓
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <label className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-line rounded-xl py-6 text-center cursor-pointer hover:border-secondary transition-colors bg-cream">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => handleFile(exercise.id, e.target.files?.[0] || null)}
                    />
                    {preview ? (
                      <img src={preview} alt="Preview" className="max-h-36 rounded-xl object-cover" />
                    ) : (
                      <>
                        <span className="text-2xl text-line mb-1">↑</span>
                        <span className="text-xs text-muted">Upload your work (optional)</span>
                      </>
                    )}
                  </label>

                  <button
                    onClick={() => markComplete(exercise)}
                    disabled={isSaving}
                    className="btn btn-primary btn-sm self-start"
                  >
                    {isSaving ? 'Saving…' : 'Mark complete'}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
