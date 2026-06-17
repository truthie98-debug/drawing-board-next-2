export type MonthFocus = {
  month: number
  primary: string
  secondary: string
  note: string
  daily: {
    primary: string
    secondary: string
    combined: string
  }
  weekly: string
}

export type Course = {
  id: number
  title: string
  description: string
  tags: string[]
}

export const MONTH_PLAN: MonthFocus[] = [
  {
    month: 1,
    primary: 'Gesture',
    secondary: 'Proportion',
    note: 'Build movement and believable figure size before adding complexity.',
    daily: {
      primary: 'Draw 15 quick gestures using 45 seconds per pose. Focus only on line of action, weight, and rhythm.',
      secondary: 'Draw 8 simple figures and measure head-count proportions. Mark shoulders, pelvis, knees, and feet clearly.',
      combined: 'Draw 5 dynamic poses, then rebuild each one with proportion guides and construction lines.',
    },
    weekly: 'Create one finished figure drawing showing clear movement and believable proportion. Upload the final plus 3 rough studies.',
  },
  {
    month: 2,
    primary: 'Construction',
    secondary: 'Anatomy Landmarks',
    note: 'Turn expressive figures into solid forms with believable joints and structure.',
    daily: {
      primary: 'Break 6 figures into boxes, cylinders, and simple planes. No details until the structure works.',
      secondary: 'Study 10 anatomy landmarks: clavicle, rib cage, pelvis, elbows, knees, and wrists. Label each.',
      combined: 'Choose 3 poses and build them with construction forms, then mark anatomy landmarks on top.',
    },
    weekly: 'Create a finished character pose where the body feels built, not guessed. Show construction and final version.',
  },
  {
    month: 3,
    primary: 'Perspective',
    secondary: 'Composition',
    note: 'Make images feel staged, intentional, and spatially clear.',
    daily: {
      primary: 'Draw 6 small boxes, rooms, or corners using one clear horizon line and vanishing point.',
      secondary: 'Create 8 thumbnail compositions with one obvious focal point. Use only simple shapes.',
      combined: 'Design a small scene with clear perspective and a strong focal point. Keep it simple and readable.',
    },
    weekly: 'Create a finished scene using accurate perspective and a clear composition. The viewer should know where to look first.',
  },
  {
    month: 4,
    primary: 'Light + Form',
    secondary: 'Value',
    note: 'Make drawings read clearly before color or detail.',
    daily: {
      primary: 'Render 6 simple forms with one light source: sphere, cube, cylinder, cone, head, and hand.',
      secondary: 'Reduce 5 references into three values only: dark, middle, light. No blending.',
      combined: 'Draw one portrait or object study using simple forms and three-value structure.',
    },
    weekly: 'Create a finished image that works in black and white first. Use light direction and value grouping.',
  },
  {
    month: 5,
    primary: 'Color Harmony',
    secondary: 'Mood',
    note: 'Color should carry emotion, not just fill space.',
    daily: {
      primary: 'Paint 6 small color studies using limited palettes — no more than 4 colors per study.',
      secondary: 'Create 5 small thumbnails in different moods (tense, calm, joyful, melancholy, mysterious) using color only.',
      combined: 'Repaint an old study in two opposite moods. Same composition, different color temperature and palette.',
    },
    weekly: 'Create a finished image where the color palette is doing narrative work. Write one sentence explaining the mood intention.',
  },
  {
    month: 6,
    primary: 'Storytelling',
    secondary: 'Character',
    note: 'Make images that ask a question or tell a story without words.',
    daily: {
      primary: 'Sketch 6 silent scenes — no dialogue, no text. The image must tell something.',
      secondary: 'Design 8 character silhouettes. Each one readable and distinct from 50 feet away.',
      combined: 'Put your character in a scene. The composition should reveal something about who they are.',
    },
    weekly: 'Create one finished illustration where a character\'s emotional state is clear without showing their face.',
  },
]

export const COURSES: Course[] = [
  { id: 1, title: 'Figure Drawing I', description: 'Figure as foundation. Movement before detail.', tags: ['Gesture', 'Observation', 'Proportion', 'Construction'] },
  { id: 2, title: 'Figure Drawing II', description: 'Push beyond safe poses.', tags: ['Foreshortening', 'Dynamic Poses', 'Long Studies'] },
  { id: 3, title: 'Human Anatomy', description: 'Build figures that feel inhabited.', tags: ['Skeleton', 'Muscles', 'Landmarks', 'Movement'] },
  { id: 4, title: 'Perspective & Space', description: 'Make images feel spatially real.', tags: ['1-Point', '2-Point', '3-Point', 'Environments'] },
  { id: 5, title: 'Composition & Design', description: 'Stage the image before you draw it.', tags: ['Focal Point', 'Balance', 'Rhythm', 'Storytelling'] },
  { id: 6, title: 'Color Theory', description: 'Color that earns its presence.', tags: ['Harmony', 'Contrast', 'Mood', 'Symbolic Color'] },
  { id: 7, title: 'Light & Form', description: 'Value before color. Form before detail.', tags: ['Light Logic', 'Atmosphere', 'Shadows', 'Volume'] },
  { id: 8, title: 'Visual Storytelling', description: 'Make the image ask a question.', tags: ['Narrative', 'Character', 'World-building'] },
  { id: 9, title: 'Professional Practice', description: 'Prepare for the world outside the studio.', tags: ['Portfolio', 'Statements', 'Open Calls', 'Grants'] },
  { id: 10, title: 'Personal Thesis Studio', description: 'Find your subject and defend it.', tags: ['Series', 'Projects', 'Gallery Prep', 'Body of Work'] },
]

export const THOUGHT_PROMPTS = [
  'What drawing do you wish existed?',
  'What frustrates you most about your current work?',
  'What story do you want your work to tell?',
  'What subject keeps appearing in your drawings?',
  'What would you make if no one would ever see it?',
  'What are you avoiding drawing? Why?',
  'Which artist\'s work makes you want to draw immediately?',
  'What does your work say about you that you haven\'t said out loud?',
]

export const TEACHER_FEEDBACK = [
  'Your gesture work has improved. Keep focusing on proportion and construction — they reinforce each other.',
  'Strong personality in your faces. The next level is making the body structure feel just as intentional.',
  'Your color choices have confidence. Push value clarity so the work reads before the viewer notices the palette.',
  'You are building voice. Use fundamentals to make the weirdness stronger — not to tame it.',
  'Your consistency is the real skill. Keep finishing work while tightening hands, anatomy, and perspective.',
  'The work is improving because you are finishing things. Incomplete studies don\'t teach you as much as you think.',
]

export function getTodayMode(): 'primary' | 'secondary' | 'combined' {
  const day = new Date().getDate()
  if (day % 6 === 0) return 'combined'
  return day % 2 === 0 ? 'secondary' : 'primary'
}

export function getFocusForMonth(month: number): MonthFocus {
  return MONTH_PLAN[(month - 1) % MONTH_PLAN.length]
}
