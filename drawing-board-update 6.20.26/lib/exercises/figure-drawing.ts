// ============================================================
// THE DRAWING BOARD — Exercise Database
// 5 core fundamentals, handcrafted exercises, Goal/How/Review format
// ============================================================

export type Exercise = {
  id: string
  title: string
  goal: string
  how: string[]
  review: string
}

export type Fundamental = {
  id: string
  name: string
  tagline: string
  exercises: Exercise[]
}

// ────────────────────────────────────────────────────────────
// 1. FIGURE DRAWING (includes Measurement & Proportion)
// ────────────────────────────────────────────────────────────
const figureDrawing: Exercise[] = [
  {
    id: 'fig-01',
    title: '10 One-Minute Gestures',
    goal: 'Capture movement and energy before your brain has time to overthink it.',
    how: [
      'Find 10 pose references (photos, video paused, or a person).',
      'Give yourself exactly 60 seconds per pose.',
      'Draw only the line of action and major weight shift — no detail.',
    ],
    review: 'Which gesture felt the most alive? Why?',
  },
  {
    id: 'fig-02',
    title: '3 Athletes in Action',
    goal: 'Practice drawing the body at its most dynamic and extended.',
    how: [
      'Find 3 references of athletes mid-motion (running, jumping, throwing).',
      'Sketch each one focusing on the stretch and compression of the body.',
      'Spend no more than 8 minutes per pose.',
    ],
    review: 'Where was the body most stretched? Most compressed?',
  },
  {
    id: 'fig-03',
    title: '4 Dancer Poses',
    goal: 'Train your eye for grace, balance, and flowing lines.',
    how: [
      'Find 4 dance references — ballet, contemporary, or freeform.',
      'Focus on the curve of the spine and the line of balance.',
      'Keep each pose under 6 minutes.',
    ],
    review: 'Did the pose feel balanced or off-balance? How did you show that?',
  },
  {
    id: 'fig-04',
    title: 'One Pose, 3 Angles',
    goal: 'Understand how a single pose reads differently from different viewpoints.',
    how: [
      'Pick one reference pose.',
      'Draw it from the front, then imagine and draw it from the side.',
      'Draw it once more from a 3/4 angle.',
    ],
    review: 'Which angle was hardest to imagine? Why?',
  },
  {
    id: 'fig-05',
    title: '5 Figure Silhouettes',
    goal: 'Test whether a pose reads clearly with zero internal detail.',
    how: [
      'Find 5 varied pose references.',
      'Fill each figure in as a solid black silhouette — no lines inside.',
      'Step back and check if each pose is still readable.',
    ],
    review: 'Which silhouette was the clearest? What made it work?',
  },
  {
    id: 'fig-06',
    title: '8 Quick Standing Poses',
    goal: 'Build comfort with the most common pose in figure drawing — just standing.',
    how: [
      'Find or imagine 8 standing poses with some weight shift.',
      'Give each one 90 seconds.',
      'Focus on where the weight sits — one leg or both?',
    ],
    review: 'Did your standing poses feel stiff or natural? Why?',
  },
  {
    id: 'fig-07',
    title: 'Line of Action Warm-Up',
    goal: 'Train the single most important line in any gesture drawing.',
    how: [
      'Find 6 dynamic pose references.',
      'For each, draw ONLY one curving line representing the spine\'s flow.',
      'Then lightly sketch the body around that line.',
    ],
    review: 'Did the line of action make the pose feel more dynamic?',
  },
  {
    id: 'fig-08',
    title: '5 Seated Poses',
    goal: 'Practice the compressed, folded shapes of a seated figure.',
    how: [
      'Find 5 references of people sitting in different ways.',
      'Spend 3 minutes per pose.',
      'Pay attention to how the torso compresses at the hips.',
    ],
    review: 'What changes in the body when someone sits versus stands?',
  },
  {
    id: 'fig-09',
    title: 'Weight & Balance Study',
    goal: 'Understand how the body balances itself over its feet.',
    how: [
      'Find 4 standing pose references.',
      'Draw a vertical line down from the pit of the neck on each.',
      'Check where that line lands relative to the feet.',
    ],
    review: 'Did the balance line fall where you expected?',
  },
  {
    id: 'fig-10',
    title: '6 Action Silhouettes',
    goal: 'Push gesture drawing into bold, exaggerated territory.',
    how: [
      'Find 6 high-energy action references (fighting, leaping, falling).',
      'Draw each as a solid filled shape, no outline detail.',
      'Exaggerate the motion slightly beyond what you see.',
    ],
    review: 'Which silhouette captured the most energy?',
  },
  {
    id: 'fig-11',
    title: 'Two Figures Interacting',
    goal: 'Practice showing relationship and weight between two bodies.',
    how: [
      'Find a reference of two people interacting (carrying, leaning, embracing).',
      'Block in both figures together, considering how they share weight.',
      'Spend about 15 minutes total.',
    ],
    review: 'How did you show the connection between the two figures?',
  },
  {
    id: 'fig-12',
    title: '5-Minute Pose Marathon',
    goal: 'Build stamina and speed in observational figure drawing.',
    how: [
      'Set a timer for 5 minutes per pose.',
      'Complete 4 poses back to back, no breaks.',
      'Focus on getting the big shapes right before details.',
    ],
    review: 'Did your speed or accuracy change by the 4th pose?',
  },
  {
    id: 'fig-13',
    title: 'Foreshortened Limb Study',
    goal: 'Tackle the part of figure drawing most artists avoid.',
    how: [
      'Find a reference where an arm or leg points toward the camera.',
      'Draw it focusing on the overlapping shapes, not the outline.',
      'Use simple ellipses to find the form first.',
    ],
    review: 'What trick helped the foreshortening read correctly?',
  },
  {
    id: 'fig-14',
    title: '3 Children\'s Poses',
    goal: 'Understand how proportion and energy differ in younger figures.',
    how: [
      'Find 3 references of children at play.',
      'Note how the head is proportionally larger than in adults.',
      'Draw each pose in under 5 minutes.',
    ],
    review: 'What made the proportions feel distinctly childlike?',
  },
  {
    id: 'fig-15',
    title: 'Crowd Gesture Sketch',
    goal: 'Practice quickly capturing multiple figures in a scene.',
    how: [
      'Find a reference photo with several people in it.',
      'Sketch 4-5 of them as quick gestures, 1 minute each.',
      'Don\'t worry about overlap or detail — just shapes and poses.',
    ],
    review: 'Which figure in the crowd was easiest to read quickly?',
  },
  {
    id: 'fig-16',
    title: 'Reaching Pose Study',
    goal: 'Practice the stretch and extension of a reaching figure.',
    how: [
      'Find a reference of someone reaching up or out.',
      'Draw the line of action first — the full stretch of the body.',
      'Build the figure around that extended line.',
    ],
    review: 'Did the reach feel convincing? What would make it stronger?',
  },
  {
    id: 'fig-17',
    title: 'Twisting Torso Study',
    goal: 'Understand how the ribcage and hips rotate against each other.',
    how: [
      'Find a reference with a twisting pose (golf swing, looking back).',
      'Draw the ribcage as one block and the hips as another.',
      'Show the rotation between the two blocks clearly.',
    ],
    review: 'Could you see the twist clearly in your simplified blocks?',
  },
  {
    id: 'fig-18',
    title: 'Falling Pose Study',
    goal: 'Capture instability and motion in a dynamic falling figure.',
    how: [
      'Find a reference of someone falling, tripping, or off-balance.',
      'Focus on where the limbs fly outward to compensate.',
      'Draw 2-3 quick versions, 3 minutes each.',
    ],
    review: 'How did you show the figure was off-balance, not standing?',
  },
  {
    id: 'fig-19',
    title: 'Profile Gesture Set',
    goal: 'Practice reading poses purely from the side view.',
    how: [
      'Find 5 side-profile pose references.',
      'Draw each one in 90 seconds.',
      'Pay attention to the curve of the spine from this angle.',
    ],
    review: 'Was the side view easier or harder to read than the front?',
  },
  {
    id: 'fig-20',
    title: 'Back View Study',
    goal: 'Build comfort drawing the often-neglected back of the figure.',
    how: [
      'Find 3 references of figures seen from behind.',
      'Note the shoulder blades and spine as key landmarks.',
      'Spend 5 minutes per pose.',
    ],
    review: 'What landmarks helped you read the back view?',
  },
  {
    id: 'fig-21',
    title: 'Heavy Object Carry Pose',
    goal: 'Practice showing weight and effort through posture.',
    how: [
      'Find a reference of someone carrying something heavy.',
      'Notice how the spine counterbalances the load.',
      'Draw it emphasizing the strain in the pose.',
    ],
    review: 'Did the pose successfully communicate effort?',
  },
  {
    id: 'fig-22',
    title: 'Sleeping Figure Study',
    goal: 'Practice drawing the relaxed, settled forms of a resting body.',
    how: [
      'Find a reference of someone lying down or sleeping.',
      'Focus on soft, settled shapes rather than tension.',
      'Spend about 8 minutes total.',
    ],
    review: 'How did relaxed shapes differ from your action poses?',
  },
  {
    id: 'fig-23',
    title: 'Pose Library Sprint',
    goal: 'Build a personal reference library while practicing speed.',
    how: [
      'Find 6 varied poses you find interesting.',
      'Draw each as a 2-minute thumbnail.',
      'Save the page as a personal pose reference sheet.',
    ],
    review: 'Which pose would you want to develop into a finished piece?',
  },
  {
    id: 'fig-24',
    title: 'Hands-on-Hips Pose Set',
    goal: 'Practice a common, confident pose and its weight distribution.',
    how: [
      'Find 3 references of a hands-on-hips stance.',
      'Note how the elbows and shoulders frame the pose.',
      'Draw each in 4 minutes.',
    ],
    review: 'What made the pose read as confident rather than stiff?',
  },
  {
    id: 'fig-25',
    title: 'Negative Space Figure',
    goal: 'Train your eye to see the shapes around the body, not just the body.',
    how: [
      'Find one pose reference with visible gaps (arm away from torso, legs apart).',
      'Draw only the negative space shapes around the figure first.',
      'Then add the figure itself using those shapes as a guide.',
    ],
    review: 'Did focusing on negative space change your accuracy?',
  },
  {
    id: 'fig-26',
    title: 'Group of 3 Gesture Study',
    goal: 'Practice composing multiple figures with believable interaction.',
    how: [
      'Find a reference with 3 people in a scene together.',
      'Block in all three as simple gesture shapes.',
      'Consider how their poses relate to one another.',
    ],
    review: 'Did the three figures feel like they belonged in the same scene?',
  },
  {
    id: 'fig-27',
    title: 'Exaggerated Gesture Push',
    goal: 'Practice pushing a pose beyond literal reality for more impact.',
    how: [
      'Find one gesture reference.',
      'Draw it once accurately, in 2 minutes.',
      'Draw it again, exaggerating the curve and stretch by 20%.',
    ],
    review: 'Did the exaggerated version feel more alive? Less believable?',
  },
  {
    id: 'fig-28',
    title: 'Stride and Walk Cycle',
    goal: 'Understand the mechanics of a basic walking pose.',
    how: [
      'Find 4 references showing different points in a walk cycle.',
      'Draw each one, noting the opposite swing of arms and legs.',
      'Spend 4 minutes per pose.',
    ],
    review: 'Did you notice the cross-body rhythm of arms and legs?',
  },
  {
    id: 'fig-29',
    title: 'Pose from Memory',
    goal: 'Test how much gesture knowledge you\'ve internalized.',
    how: [
      'Look at one pose reference for 30 seconds.',
      'Put the reference away.',
      'Draw the pose entirely from memory.',
    ],
    review: 'What details did you forget? What did you remember clearly?',
  },
  {
    id: 'fig-30',
    title: 'Comparing Body Parts',
    goal: 'Train measurement by comparing one body part directly to another.',
    how: [
      'Find one full-figure reference.',
      'Compare the length of the forearm to the foot — are they similar?',
      'Compare the head height to the hand length — note any surprises.',
    ],
    review: 'Which comparison surprised you most?',
  },
  {
    id: 'fig-31',
    title: 'Landmark Placement Drill',
    goal: 'Practice locating key anatomical landmarks quickly and accurately.',
    how: [
      'Find one standing figure reference.',
      'Mark these points: shoulder, elbow, hip, knee, ankle.',
      'Check that the marks connect into believable proportions.',
    ],
    review: 'Did your landmarks line up the way you expected?',
  },
  {
    id: 'fig-32',
    title: 'Negative Space Measurement',
    goal: 'Use the gaps in a pose to check your proportions are accurate.',
    how: [
      'Find one pose with a visible gap (hand on hip, legs crossed).',
      'Measure the shape of that gap before drawing the figure.',
      'Build the figure around the negative space shape.',
    ],
    review: 'Did the negative space help your proportions feel more correct?',
  },
  {
    id: 'fig-33',
    title: 'Character Consistency Check',
    goal: 'Practice keeping the same character\'s proportions consistent across poses.',
    how: [
      'Pick one character (yours or a reference).',
      'Draw them in 3 different poses.',
      'Check that head size, limb length, and build stay consistent.',
    ],
    review: 'Did your character stay consistent, or did proportions drift?',
  },
  {
    id: 'fig-34',
    title: 'Quick Measurement Sketch',
    goal: 'Practice the habit of measuring before committing to lines.',
    how: [
      'Find one figure reference.',
      'Use your pencil at arm\'s length to measure head-to-shoulder vs shoulder-to-hip.',
      'Draw the figure using those measurements as a guide.',
    ],
    review: 'Did measuring first change your usual approach?',
  },
]

export const FIGURE_DRAWING: Fundamental = {
  id: 'figure-drawing',
  name: 'Figure Drawing',
  tagline: 'Movement, gesture, and the human form in motion.',
  exercises: figureDrawing,
}
