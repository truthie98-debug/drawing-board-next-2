// ============================================================
// THE DRAWING BOARD — Weekly Color Lab
// 150 handcrafted color exercises across 5 categories
// ============================================================

export type ColorExercise = {
  id: string
  title: string
  category: string
  goal: string
  how: string[]
  review: string
}

// ────────────────────────────────────────────────────────────
// CATEGORY 1: VALUE & LIGHT (30 exercises)
// ────────────────────────────────────────────────────────────
export const VALUE_LIGHT: ColorExercise[] = [
  {
    id: 'vl-01', title: 'Paint a Face Lit From Below', category: 'Value & Light',
    goal: 'Learn how unusual light direction changes a familiar subject.',
    how: ['Choose a simple face reference or imagine one.', 'Place your light source below the chin.', 'Push the shadows upward into the eye sockets and brow for drama.'],
    review: 'Did the upward light make the face feel eerie or unfamiliar?',
  },
  {
    id: 'vl-02', title: 'Paint Moonlight', category: 'Value & Light',
    goal: 'Practice cool, low-key lighting with a single soft source.',
    how: ['Pick a simple subject — a figure, a tree, a building.', 'Use a narrow, mostly dark value range with cool blue undertones.', 'Add one soft, pale highlight where the moonlight lands directly.'],
    review: 'Did the limited light still make the form readable?',
  },
  {
    id: 'vl-03', title: 'Paint a Silhouette Scene', category: 'Value & Light',
    goal: 'Use pure shape and one bright background to create mood.',
    how: ['Choose a simple scene with one strong shape in front (a person, a tree).', 'Paint the background as a bright sunset or sky gradient.', 'Fill the foreground subject as a flat, solid silhouette.'],
    review: 'Did the silhouette feel more powerful than a detailed version would?',
  },
  {
    id: 'vl-04', title: 'Paint a Chrome Object', category: 'Value & Light',
    goal: 'Practice high-contrast, reflective value relationships.',
    how: ['Choose a simple rounded object (sphere, cup, ball).', 'Skip soft shading — use sharp jumps between very light and very dark.', 'Reflect a hint of the surrounding environment in the surface.'],
    review: 'What made the object read as metallic instead of matte?',
  },
  {
    id: 'vl-05', title: 'Single Candle in a Dark Room', category: 'Value & Light',
    goal: 'Practice how far light travels before fading to black.',
    how: ['Imagine one candle in an otherwise dark room.', 'Paint a small, warm glow around the flame.', 'Let the value fall to near-black just a short distance away.'],
    review: 'Did the light falloff feel believable for a small flame?',
  },
  {
    id: 'vl-06', title: 'Paint a Foggy Morning', category: 'Value & Light',
    goal: 'Practice a soft, narrow value range with almost no contrast.',
    how: ['Choose a simple landscape or street scene.', 'Compress your values into a tight middle range — no pure white or black.', 'Let distant shapes fade almost completely into the fog.'],
    review: 'Did limiting your value range still suggest depth?',
  },
  {
    id: 'vl-07', title: 'Backlit Figure Study', category: 'Value & Light',
    goal: 'Practice a subject lit entirely from behind.',
    how: ['Place a simple figure in front of a bright light source.', 'Keep the figure almost entirely in shadow.', 'Add a thin rim of light tracing the edge of the silhouette.'],
    review: 'Did the rim light help separate the figure from the background?',
  },
  {
    id: 'vl-08', title: 'Paint a Spotlight Moment', category: 'Value & Light',
    goal: 'Practice using one isolated light source to direct attention.',
    how: ['Choose a simple subject on an otherwise dark stage.', 'Paint one circular pool of bright light around the subject.', 'Fade everything outside that circle into near-darkness.'],
    review: 'Did the spotlight make the focal point impossible to miss?',
  },
  {
    id: 'vl-09', title: 'Paint Light Through a Window', category: 'Value & Light',
    goal: 'Practice a directional light shape cast across a surface.',
    how: ['Imagine a simple room with one window.', 'Paint the shape of light falling across the floor or a wall.', 'Add soft shadow shapes for any furniture blocking the light.'],
    review: 'Did the light shape feel like it matched the window\'s angle?',
  },
  {
    id: 'vl-10', title: 'Paint a Streetlamp at Night', category: 'Value & Light',
    goal: 'Practice a small warm light source against a cool dark scene.',
    how: ['Paint a dark blue or purple night sky and street.', 'Add one warm-toned streetlamp with a soft glow.', 'Let the glow fade quickly into the cool darkness around it.'],
    review: 'Did the warm/cool contrast make the lamp feel like the only light?',
  },
  {
    id: 'vl-11', title: 'Two-Value Portrait', category: 'Value & Light',
    goal: 'Push simplification to its limit — only two values allowed.',
    how: ['Choose a simple portrait reference.', 'Decide on one light source.', 'Paint using only one light value and one dark value — no mid-tone.'],
    review: 'Was the face still recognizable with only two values?',
  },
  {
    id: 'vl-12', title: 'Paint a Glowing Object', category: 'Value & Light',
    goal: 'Practice an object that is itself the light source.',
    how: ['Choose a simple object that could glow (a lantern, a gem, a screen).', 'Make the object the brightest value in the scene.', 'Add a soft colored glow bleeding onto nearby surfaces.'],
    review: 'Did the glow feel like it was emitting light, not just reflecting it?',
  },
  {
    id: 'vl-13', title: 'Paint Harsh Noon Sunlight', category: 'Value & Light',
    goal: 'Practice extreme, high-contrast overhead lighting.',
    how: ['Choose a simple outdoor scene.', 'Place the light source directly overhead.', 'Use small, hard-edged shadows directly beneath each object.'],
    review: 'Did the short, hard shadows successfully suggest midday light?',
  },
  {
    id: 'vl-14', title: 'Paint a Glass of Water', category: 'Value & Light',
    goal: 'Practice transparent value logic and light passing through a form.',
    how: ['Choose a simple glass of water reference.', 'Paint the highlights and shadows that occur within the glass itself.', 'Add a refracted shadow shape on the surface beneath it.'],
    review: 'Did the glass feel like it was actually transparent?',
  },
  {
    id: 'vl-15', title: 'Paint a Lighthouse Beam', category: 'Value & Light',
    goal: 'Practice a moving, directional light cutting through darkness.',
    how: ['Paint a dark night scene with a lighthouse.', 'Add one bright cone-shaped beam sweeping across the sky.', 'Let the beam fade gradually rather than ending sharply.'],
    review: 'Did the beam feel like it was cutting through real darkness?',
  },
  {
    id: 'vl-16', title: 'High-Key Bright Room Study', category: 'Value & Light',
    goal: 'Practice a scene with almost no shadow at all.',
    how: ['Choose a simple bright interior (a sunlit kitchen, a white studio).', 'Keep your entire value range light — avoid true darks.', 'Use the smallest hint of shadow just to suggest form.'],
    review: 'Did the bright, low-contrast scene feel calm or sterile?',
  },
  {
    id: 'vl-17', title: 'Paint a Storm Approaching', category: 'Value & Light',
    goal: 'Practice dramatic value shifts across one scene.',
    how: ['Paint a landscape with bright sky on one side.', 'Transition to dark, heavy storm clouds on the other side.', 'Let the ground below echo the same light-to-dark shift.'],
    review: 'Did the value shift alone communicate the coming storm?',
  },
  {
    id: 'vl-18', title: 'Paint Underwater Light Rays', category: 'Value & Light',
    goal: 'Practice light filtering and scattering through a medium.',
    how: ['Imagine a simple underwater scene.', 'Paint soft, diagonal light rays descending from the surface.', 'Let the rays fade into darker blue-green water below.'],
    review: 'Did the light rays help suggest depth and water?',
  },
  {
    id: 'vl-19', title: 'Single Match Strike', category: 'Value & Light',
    goal: 'Practice an extremely small, intense light source.',
    how: ['Imagine a single lit match in darkness.', 'Make the flame tip the brightest point in the entire image.', 'Light only the hand or fingers closest to the flame.'],
    review: 'Did the tiny light source still feel believable and dramatic?',
  },
  {
    id: 'vl-20', title: 'Paint a Solar Eclipse Moment', category: 'Value & Light',
    goal: 'Practice an unusual, dim, otherworldly daytime light.',
    how: ['Imagine a landscape during a near-total eclipse.', 'Use mid-to-dark values even though it\'s technically daytime.', 'Add one bright ring or crescent of light in the sky.'],
    review: 'Did the unusual lighting create a sense of unease or wonder?',
  },
  {
    id: 'vl-21', title: 'Paint a Mirror Reflection', category: 'Value & Light',
    goal: 'Practice value and light logic across a reflective surface.',
    how: ['Choose a simple subject standing in front of a mirror.', 'Paint the reflection slightly dimmer or cooler than the real subject.', 'Keep the reflection\'s proportions accurate but values slightly muted.'],
    review: 'Did the reflection feel believably different from the real subject?',
  },
  {
    id: 'vl-22', title: 'Paint Light Under a Door', category: 'Value & Light',
    goal: 'Practice implying a whole lit room from a tiny sliver of light.',
    how: ['Paint a dark hallway with a closed door.', 'Add a thin bright line of light at the bottom of the door.', 'Let that small light suggest an entire room beyond it.'],
    review: 'Did the small sliver of light feel mysterious or inviting?',
  },
  {
    id: 'vl-23', title: 'Paint a Sunbeam Through Trees', category: 'Value & Light',
    goal: 'Practice dappled, broken light passing through a complex shape.',
    how: ['Paint a simple forest or tree canopy.', 'Add a few bright shafts of light breaking through the gaps.', 'Scatter small spots of bright light on the ground below.'],
    review: 'Did the broken light feel natural and varied, not repetitive?',
  },
  {
    id: 'vl-24', title: 'Paint a Television Glow', category: 'Value & Light',
    goal: 'Practice a cool, flickering, artificial light source.',
    how: ['Imagine a dark room with one glowing screen.', 'Use a cool blue-white light cast only on the nearest surfaces.', 'Keep everything outside the glow\'s reach quite dark.'],
    review: 'Did the cool glow feel distinctly different from warm candlelight?',
  },
  {
    id: 'vl-25', title: 'Paint a Desert at High Noon', category: 'Value & Light',
    goal: 'Practice an extremely bright, washed-out lighting scenario.',
    how: ['Choose a simple desert landscape.', 'Push your lightest values almost to pure white.', 'Use short, sharp shadows to keep the scene from feeling flat.'],
    review: 'Did the brightness feel intense without losing all form?',
  },
  {
    id: 'vl-26', title: 'Paint a Single Spotlight Dancer', category: 'Value & Light',
    goal: 'Combine figure and dramatic lighting in one focused study.',
    how: ['Sketch one simple dancer pose.', 'Light them with one overhead spotlight.', 'Push the background to near-black to isolate the figure.'],
    review: 'Did the lighting make the pose feel more dramatic?',
  },
  {
    id: 'vl-27', title: 'Paint Headlights at Night', category: 'Value & Light',
    goal: 'Practice two intense, close light sources in darkness.',
    how: ['Imagine a dark road scene with an oncoming car.', 'Paint two bright, slightly warm headlight beams.', 'Let the beams illuminate a small patch of road ahead.'],
    review: 'Did the two light sources feel coordinated, like one car?',
  },
  {
    id: 'vl-28', title: 'Paint a Jack-o-Lantern Glow', category: 'Value & Light',
    goal: 'Practice warm internal light glowing through a carved surface.',
    how: ['Sketch a simple carved pumpkin shape.', 'Light the carved features from inside with warm orange-yellow.', 'Keep the uncarved surface of the pumpkin darker and cooler.'],
    review: 'Did the internal glow feel different from external lighting?',
  },
  {
    id: 'vl-29', title: 'Paint a Power Outage Moment', category: 'Value & Light',
    goal: 'Practice darkness as the dominant value with minimal light cues.',
    how: ['Imagine an indoor scene right after the lights go out.', 'Use almost entirely dark values.', 'Add one small light source — a phone screen or window glow.'],
    review: 'Did the near-total darkness still feel readable as a scene?',
  },
  {
    id: 'vl-30', title: 'Paint Bioluminescence', category: 'Value & Light',
    goal: 'Practice an unusual, glowing natural light source.',
    how: ['Imagine a dark ocean or forest scene with glowing organisms.', 'Use small, scattered points of cool glowing light.', 'Keep the rest of the scene dark to make the glow stand out.'],
    review: 'Did the scattered glow feel magical or eerie?',
  },
]
