export const CURRICULUMS = [
  {
    id: 1,
    title: "Anatomy + Figure Drawing",
    subtitle: "Build the figure from the head outward",
    description: "Start where you're strongest — portraits — and expand outward to the full figure. Structured reference studies and copy + annotate exercises every day.",
    skills: ["Skull & head structure", "Torso & spine", "Arms & hands", "Legs & feet", "Full figure gesture"],
    totalDays: 30,
    weeks: [
      { week: 1, theme: "Head → Torso" },
      { week: 2, theme: "Arms" },
      { week: 3, theme: "Hands" },
      { week: 4, theme: "Legs + Full Figure" },
    ],
    days: [
      // WEEK 1 — Head → Torso
      { day: 1, week: 1, topic: "Skull Structure", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Skull Gesture + Construction", duration: "30 min",
            instructions: [
              "5 min — warm up: draw 5 quick skull outlines from memory, no reference, just the overall egg shape.",
              "15 min — using reference (Proko or photo), draw 6 skulls: 2 front, 2 side, 2 three-quarter. Focus on the big shapes — cranial mass vs face mass.",
              "10 min — pick your clearest study and redraw it slowly. Pay attention to where the brow ridge, cheekbones, and chin sit as landmarks.",
            ]
          }
        ]
      },
      { day: 2, week: 1, topic: "Neck & Trapezius", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Neck as Cylinder", duration: "30 min",
            instructions: [
              "5 min — draw 8 cylinders tilting in different directions. Get the feel of a form that tilts.",
              "15 min — using reference, draw the neck and head connection from front, side, and back. Think of the neck as a cylinder coming out of the torso at an angle.",
              "10 min — draw 4 heads with necks attached. Focus on the angle the neck tilts and how the head sits on top.",
            ]
          }
        ]
      },
      { day: 3, week: 1, topic: "Rib Cage", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Rib Cage as Egg Form", duration: "30 min",
            instructions: [
              "5 min — draw 10 egg shapes in different tilts and rotations. Fast.",
              "15 min — using reference, draw the rib cage from front, side, and three-quarter. It is an egg — treat it like one. Note how it tilts back at the top.",
              "10 min — draw 4 rib cages with the neck stub above. Focus on where the neck sits on the top of the egg.",
            ]
          }
        ]
      },
      { day: 4, week: 1, topic: "Pelvis", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Pelvis as Bowl", duration: "30 min",
            instructions: [
              "5 min — draw 8 bowl or wedge shapes tilting forward and back. Feel the tilt.",
              "15 min — using reference, draw the pelvis from front, side, and back. Think of it as a bowl — where does it tilt? How wide is it relative to the rib cage?",
              "10 min — draw 4 pelvises. On each one, draw a line showing the direction it is tilting. Anterior tilt tips the front down. Posterior tilt tips the front up.",
            ]
          }
        ]
      },
      { day: 5, week: 1, topic: "Rib Cage + Pelvis Together", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Two Masses, One Torso", duration: "30 min",
            instructions: [
              "5 min — draw 6 pairs of simple shapes representing rib cage and pelvis. Vary the tilt relationship between them.",
              "15 min — using figure reference, draw 5 torsos showing both masses. Focus on the gap between them and how one tilts relative to the other.",
              "10 min — pick your strongest study. Redraw it and draw a line of action through the whole torso. Does the line feel right?",
            ]
          }
        ]
      },
      { day: 6, week: 1, topic: "Spine", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Spine as Line of Action", duration: "30 min",
            instructions: [
              "5 min — draw 10 spine lines from memory. C-curves, S-curves, lateral bends. Just lines.",
              "15 min — using figure reference, draw 8 torso gestures where the spine line is the first thing you put down. Build the rib cage and pelvis around it.",
              "10 min — pick 2 of your strongest. Redraw them and exaggerate the spine curve slightly. Does the pose feel more alive?",
            ]
          }
        ]
      },
      { day: 7, week: 1, topic: "Full Torso Gesture", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Torso Gesture Marathon", duration: "30 min",
            instructions: [
              "20 min — draw 15 torso gesture studies from reference (Line of Action or SenshiStock). 60–90 seconds each. Spine line first, then rib cage, then pelvis. No details.",
              "10 min — pick your 2 strongest. Redraw each one carefully and add the head and neck. Does the whole thing read as one connected form?",
            ]
          }
        ]
      },
      // WEEK 2 — Arms
      { day: 8, week: 2, topic: "Shoulder & Deltoid", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Shoulder Mass Studies", duration: "30 min",
            instructions: [
              "5 min — draw 8 simple sphere or dome shapes. The deltoid wraps the shoulder like a cap — feel that form.",
              "15 min — using reference, draw the shoulder from front, side, and back in 6 studies. Focus on how the deltoid shape changes as the arm raises and lowers.",
              "10 min — draw 4 shoulders with the arm attached in different positions. Where does the deltoid peak? How does it flatten when the arm drops?",
            ]
          }
        ]
      },
      { day: 9, week: 2, topic: "Upper Arm", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Two Opposing Masses", duration: "30 min",
            instructions: [
              "5 min — draw 8 cylinders with two opposing bumps — one front, one back. That is the upper arm.",
              "15 min — using reference, draw the upper arm from front, back, and side at different bend angles. Note how the front mass peaks when the arm is bent and flattens when it is straight.",
              "10 min — draw 4 upper arms at different flex levels. Which mass dominates at each angle?",
            ]
          }
        ]
      },
      { day: 10, week: 2, topic: "Forearm", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Forearm Twist Studies", duration: "30 min",
            instructions: [
              "5 min — hold out your own forearm and rotate it palm up, palm down. Draw what you see — a twisting tapered form.",
              "15 min — using reference, draw the forearm in 6 studies: 3 palm up, 3 palm down. Focus on the tapered wedge shape and how the masses shift with rotation.",
              "10 min — draw 4 forearms. Draw an arrow showing the direction the mass spirals on each one.",
            ]
          }
        ]
      },
      { day: 11, week: 2, topic: "Elbow", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Elbow as Hinge", duration: "30 min",
            instructions: [
              "5 min — draw 8 hinge shapes showing a joint bending at different angles.",
              "15 min — using reference, draw the elbow from front, back, and side in 6 studies at different bend angles. Note the bony point at the back and how it moves as the arm bends.",
              "10 min — draw the full arm from shoulder to wrist in 4 poses focusing on how the elbow connects and anchors the two halves.",
            ]
          }
        ]
      },
      { day: 12, week: 2, topic: "Full Arm", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Full Arm in 5 Positions", duration: "30 min",
            instructions: [
              "5 min — draw the arm as 3 simple cylinders: upper arm, forearm, hand. Do 6 quick versions.",
              "15 min — using reference, draw the full arm in 5 positions: reaching up, reaching forward, hanging down, bent at elbow, crossing the body. Focus on overall rhythm and silhouette.",
              "10 min — pick your 2 strongest. Redraw each one and draw the line of action through the arm. Does it flow?",
            ]
          }
        ]
      },
      { day: 13, week: 2, topic: "Arm in Action", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Action Arm Gesture Studies", duration: "30 min",
            instructions: [
              "20 min — draw 10 arm action gesture studies from reference: reaching, pushing, pulling, throwing, blocking. 90 seconds each. Lead with the line of action through the arm.",
              "10 min — pick your strongest. Redraw it with the shoulder and partial torso attached. Does the arm feel connected to the body?",
            ]
          }
        ]
      },
      { day: 14, week: 2, topic: "Figure Drawing — Arms", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Full Figure Focused on Arms", duration: "30 min",
            instructions: [
              "20 min — draw 12 full figure gesture studies from reference (Line of Action). 90 seconds each. Let the arms drive the pose — choose poses where the arms are doing something expressive.",
              "10 min — pick your strongest figure. Redraw it with careful attention to how the arm connects from shoulder to hand. Does it read as one connected form?",
            ]
          }
        ]
      },
      // WEEK 3 — Hands
      { day: 15, week: 3, topic: "Hand Block", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "The Hand as a Box", duration: "30 min",
            instructions: [
              "5 min — draw 10 box shapes in different tilts and rotations. Fast.",
              "15 min — using reference (your own hand or photo), draw the hand as a simple wedge or box — no fingers yet. Draw from front, back, side, and three-quarter. 8 studies total.",
              "10 min — pick your 3 strongest box hands. Lightly sketch in the finger group and thumb as simple shapes on top. Do not detail. Just the masses.",
            ]
          }
        ]
      },
      { day: 16, week: 3, topic: "Palm Structure", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Palm Mounds", duration: "30 min",
            instructions: [
              "5 min — draw your own palm and press it flat. Sketch the three mounds you feel — the heel, the thumb side, the pinky side.",
              "15 min — using reference, draw the palm from front and back in 6 studies. Focus on the three distinct fleshy mounds that give the hand its 3D structure.",
              "10 min — draw 4 palms and exaggerate the mounds slightly. Does the hand feel more solid and dimensional?",
            ]
          }
        ]
      },
      { day: 17, week: 3, topic: "Thumb", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Thumb as Independent Mass", duration: "30 min",
            instructions: [
              "5 min — draw 10 thumbs from memory. Just the basic shape — two segments and a base mass.",
              "15 min — using reference (your own thumb), draw the thumb in 8 positions: pointing up, pointing left, tucked in, spread out, bent. Focus on the full range of motion.",
              "10 min — draw 4 full hands where the thumb feels clearly separate from the finger group. Does it look like it could oppose the fingers?",
            ]
          }
        ]
      },
      { day: 18, week: 3, topic: "Fingers", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Fingers as Cylinders", duration: "30 min",
            instructions: [
              "5 min — draw 3 cylinders stacked end to end. That is one finger. Do 8 quick versions.",
              "15 min — using reference, draw fingers in 8 studies: straight, curled, spread, stacked. Draw from the side to understand the joint angles. Note how they foreshorten when curling toward you.",
              "10 min — draw one complete hand with clearly defined finger segments. Focus on the overall rhythm across all four fingers.",
            ]
          }
        ]
      },
      { day: 19, week: 3, topic: "Hand Rotation", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "One Hand, Five Views", duration: "30 min",
            instructions: [
              "5 min — draw the same simple box 5 times, rotating it slightly each time. Warm up for rotating a form.",
              "15 min — using your own hand as reference, draw it in 5 positions: palm up, palm down, pinky edge, thumb edge, three-quarter. 2 minutes each.",
              "10 min — pick your 2 weakest views and redo them. What did you learn the second time?",
            ]
          }
        ]
      },
      { day: 20, week: 3, topic: "Hand Gesture", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Expressive Hand Gestures", duration: "30 min",
            instructions: [
              "20 min — draw 12 hand gesture studies from reference: gripping, pointing, resting open, reaching, gesturing in conversation, holding an object. 90 seconds each. Focus on overall shape and expression.",
              "10 min — pick your 2 most expressive. Redraw each one. Draw the line of action through the gesture. Does the hand feel alive?",
            ]
          }
        ]
      },
      { day: 21, week: 3, topic: "Figure Drawing — Hands", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Full Figure Focused on Hands", duration: "30 min",
            instructions: [
              "20 min — draw 10 full figure gesture studies from reference. 90 seconds each. Choose poses where the hands are prominent and doing something. Let the hands tell the story.",
              "10 min — pick your strongest figure. Redraw the hands carefully. Do they reinforce the story of the pose?",
            ]
          }
        ]
      },
      // WEEK 4 — Legs + Full Figure
      { day: 22, week: 4, topic: "Upper Leg", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Upper Leg — Two Masses", duration: "30 min",
            instructions: [
              "5 min — draw 8 cylinders with a front mass and a back mass, like the upper arm exercise. That is the upper leg.",
              "15 min — using reference, draw the upper leg from front, back, and side in 6 studies. Note how the front mass and back mass shift when the leg bends.",
              "10 min — draw 4 upper legs at different bend angles. Which mass dominates from which view?",
            ]
          }
        ]
      },
      { day: 23, week: 4, topic: "Knee", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Knee as Hinge", duration: "30 min",
            instructions: [
              "5 min — draw 8 hinge joints bending at different angles. Same warmup as elbow day.",
              "15 min — using reference, draw the knee from front, side, and back in 6 studies at different bend angles. Note the kneecap — it sits on top of the joint and shifts as the knee bends.",
              "10 min — draw the full leg from hip to ankle in 4 poses. Focus on how the knee connects and anchors the upper and lower halves.",
            ]
          }
        ]
      },
      { day: 24, week: 4, topic: "Lower Leg", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Calf + Shin Contrast", duration: "30 min",
            instructions: [
              "5 min — draw 8 tapered wedge shapes. The lower leg narrows hard toward the ankle.",
              "15 min — using reference, draw the lower leg from front, back, and side in 6 studies. Note the contrast: the shin is a straight hard edge, the calf is a soft curved mass behind it.",
              "10 min — draw 4 lower legs. On each one, mark where the calf mass peaks. It sits higher on the outside than the inside.",
            ]
          }
        ]
      },
      { day: 25, week: 4, topic: "Ankle + Foot", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Foot as Wedge", duration: "30 min",
            instructions: [
              "5 min — draw 8 wedge shapes tapering from heel to toe. Fast.",
              "15 min — using reference, draw the foot from side, front, and three-quarter in 8 studies. Note the ankle — the inner bump sits higher than the outer bump. Note the arch on the inner side.",
              "10 min — draw 4 feet with the lower leg attached. Focus on how the foot connects to the leg at the ankle.",
            ]
          }
        ]
      },
      { day: 26, week: 4, topic: "Full Leg", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Full Leg in 5 Positions", duration: "30 min",
            instructions: [
              "5 min — draw the leg as 3 simple cylinders: upper leg, lower leg, foot. Do 6 quick versions.",
              "15 min — using reference, draw the full leg in 5 positions: straight standing, bent, stepping forward, kicking, crossed. Focus on overall rhythm and silhouette.",
              "10 min — pick your 2 strongest. Redraw each one and draw the line of action through the leg. Does it flow from hip to foot?",
            ]
          }
        ]
      },
      { day: 27, week: 4, topic: "Leg in Action", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Action Leg Gesture Studies", duration: "30 min",
            instructions: [
              "20 min — draw 10 leg action gesture studies from reference: walking, running, kicking, crouching, leaping. 90 seconds each. Lead with the line of action through the leg.",
              "10 min — pick your strongest. Redraw it with the pelvis attached. Does the leg feel connected to the body? Where is the weight?",
            ]
          }
        ]
      },
      { day: 28, week: 4, topic: "Full Figure Gesture", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Full Figure Gesture Marathon", duration: "30 min",
            instructions: [
              "20 min — draw 15 full figure gesture studies from reference (Line of Action). 60–90 seconds each. Focus on the legs carrying the weight of the pose. Spine line first, then rib cage, pelvis, then limbs.",
              "10 min — pick your 2 strongest. Redraw each one. Mark the weight-bearing leg. Does the whole figure feel grounded?",
            ]
          }
        ]
      },
      // FINAL DAYS
      { day: 29, week: 5, topic: "Head + Neck Revisit", weekTheme: "Final Assessment",
        exercises: [
          { id: "ex1", title: "Day 1 Comparison", duration: "30 min",
            instructions: [
              "10 min — without reference, draw 4 skull and neck studies from memory. How much can you recall?",
              "10 min — now draw 4 more using reference. Compare to your Day 1 work. What has changed? What is still hard?",
              "10 min — draw your best head, neck, and shoulders connected as one form. This is your benchmark for how far your understanding of the upper figure has come.",
            ]
          }
        ]
      },
      { day: 30, week: 5, topic: "Full Figure Assessment", weekTheme: "Final Assessment",
        exercises: [
          { id: "ex1", title: "30-Day Benchmark Drawing", duration: "30 min",
            instructions: [
              "10 min — draw 8 full figure gesture studies from reference. 60–75 seconds each. Warm up your hand.",
              "20 min — pick your strongest pose and redraw it as your best figure study. Take your time. Apply everything — spine line, rib cage, pelvis, limbs connecting. This is your Month 1 completion piece.",
            ]
          }
        ]
      },
    ]
  },
  {
    id: 2,
    title: "Perspective & Form",
    subtitle: "Make figures and objects exist in 3D space",
    description: "Stop avoiding perspective. Build a felt sense of form in space so your figures and environments stop feeling flat.",
    skills: ["1, 2 & 3-point perspective", "3D form construction", "Figures in perspective", "Interior environments", "Foreshortening"],
    totalDays: 30,
    weeks: [
      { week: 1, theme: "1-Point Perspective" },
      { week: 2, theme: "2-Point Perspective" },
      { week: 3, theme: "3-Point + Interiors" },
      { week: 4, theme: "Foreshortening + Environments" },
    ],
    days: [
      { day: 1,  week: 1, topic: "Horizon Line + 20 Boxes", weekTheme: "1-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a horizon line across your page.", "Place a single vanishing point on it.", "Draw 20 boxes converging to that point.", "Vary size — some large, some small, some overlapping."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Repeat without a ruler — all freehand.", "Draw 10 more boxes at different positions.", "Label: horizon line, vanishing point, orthogonal lines.", "Note: which boxes were hardest to get right?"] } ] },
      { day: 2,  week: 1, topic: "Boxes Above, Below, On the Horizon", weekTheme: "1-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw boxes sitting above the horizon (you see the bottom).", "Draw boxes sitting on the horizon (no top or bottom visible).", "Draw boxes below the horizon (you see the top).", "10 boxes total, clearly in all three zones."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand repeat — 10 boxes distributed across all three zones.", "Label each zone: above, on, below horizon.", "Note how the visible faces change with position.", "One sentence: what does the horizon line actually represent?"] } ] },
      { day: 3,  week: 1, topic: "Interior Room — 1 Point", weekTheme: "1-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a simple room interior in 1-point perspective.", "Include: back wall, floor, ceiling, two side walls.", "Add a door and a window on the back wall.", "Use a ruler for all orthogonal lines."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw the same room from a slightly different viewpoint.", "Add simple furniture — a table, a chair.", "Label: vanishing point, horizon line, orthogonal lines.", "Note: what felt wrong and why?"] } ] },
      { day: 4,  week: 1, topic: "Cylinders in 1-Point", weekTheme: "1-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw cylinders converging to a 1-point vanishing point.", "Study how the ellipses change as the cylinder moves above and below the horizon.", "Draw 8 cylinders — cans, tubes, columns.", "Use ellipse guides or careful freehand for the ends."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 6 cylinders in 1-point perspective.", "Try a cylindrical tunnel receding into the vanishing point.", "Label: major axis, minor axis, ellipse degree.", "Note: how does the ellipse change as it moves from the horizon?"] } ] },
      { day: 5,  week: 1, topic: "Simple Objects in 1-Point", weekTheme: "1-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw 5 everyday objects in 1-point perspective — books, table, chair, shelf, box.", "Start with the basic box form, then add object details.", "Use reference photo for each object.", "Keep lines clean and converging correctly."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 3 objects from the list above.", "Place them in a simple room space.", "Label the object forms and their perspective lines.", "Note: which object was most difficult to simplify into a box?"] } ] },
      { day: 6,  week: 1, topic: "Stack Objects in a Scene", weekTheme: "1-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a desk scene with 5+ objects in 1-point perspective.", "Objects should overlap and vary in size.", "Pay attention to spatial relationships — what is in front of what?", "Use reference for the scene setup."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw a simpler version of the scene.", "Add one more object not in the original reference.", "Label how overlapping creates depth.", "Note: how does overlap help establish space even without perfect perspective?"] } ] },
      { day: 7,  week: 1, topic: "Draw Day — Simple Room from Imagination", weekTheme: "1-Point Perspective", exercises: [ { id: "ex1", title: "Structured Study", duration: "10–15 min", instructions: ["Design a simple room entirely from imagination in 1-point perspective.", "Include at least 4 objects.", "Set a horizon line and vanishing point first before drawing anything.", "Focus on consistency — do all lines converge correctly?"] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Add a person or figure standing in the room.", "Scale the figure to the room — use the horizon line as a height reference.", "Label: horizon line, VP, figure height relative to horizon.", "Note: what would you do differently next time?"] } ] },
      { day: 8,  week: 2, topic: "Two Vanishing Points — 20 Boxes", weekTheme: "2-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Set two vanishing points on a horizon line — one left, one right.", "Draw 20 boxes converging to both points.", "Vary angles — some boxes face more left, some more right.", "Use a ruler for all receding lines."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 10 boxes in 2-point perspective.", "Try to keep the angles consistent.", "Label: left VP, right VP, horizon line, vertical lines.", "Note: what happens when the VPs are too close together?"] } ] },
      { day: 9,  week: 2, topic: "Buildings + Architecture", weekTheme: "2-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a simple building exterior in 2-point perspective.", "Include a door, windows, and a roofline.", "Study a photo reference of a building corner.", "Use ruler for accuracy."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw the building from a slightly different angle.", "Add a second building partially overlapping.", "Label the faces of each building and their vanishing points.", "Note: how does overlapping create a sense of street space?"] } ] },
      { day: 10, week: 2, topic: "Vehicles — Cars as Box Structures", weekTheme: "2-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a car as a box structure in 2-point perspective.", "Start with the overall bounding box, then carve in the shape.", "Draw from front-corner and rear-corner views.", "Use photo reference of a simple car."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw the car box from a new angle.", "Add simple wheel cylinders in correct perspective.", "Label the bounding box faces.", "Note: how does starting with a box help with complex objects?"] } ] },
      { day: 11, week: 2, topic: "Robots from Boxes", weekTheme: "2-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Design a simple robot made entirely of geometric forms.", "Each body part is a box, cylinder, or sphere.", "Draw the robot in 2-point perspective.", "Reference: draw from imagination or find a robot photo reference."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Draw the robot from a different angle.", "Try a dynamic pose — arm raised, legs bent.", "Label each body part form.", "Note: how does perspective change the robot's personality?"] } ] },
      { day: 12, week: 2, topic: "Rotating Forms — 4 Angles", weekTheme: "2-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Choose one simple object — a book, a phone, a mug.", "Draw it from 4 different angles in 2-point perspective.", "Each view should clearly differ from the others.", "Focus on consistent form across all angles."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw the same object from 2 more angles.", "Arrange all 6 views on one page.", "Label the angles: front-left, front-right, back-left, back-right, etc.", "Note: which angle was most difficult and why?"] } ] },
      { day: 13, week: 2, topic: "Box Figure in 2-Point Perspective", weekTheme: "2-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a simplified box figure (rib cage, pelvis, limbs as boxes) in 2-point perspective.", "Draw from a 3/4 front view.", "Apply the horizon line — is the figure above or below eye level?", "Draw 4 box figures at different scales."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 2 box figures in different poses.", "Place them in a simple 2-point environment.", "Scale figures to the environment using the horizon line.", "Note: how does the horizon line establish the viewer's eye level?"] } ] },
      { day: 14, week: 2, topic: "Figure in 2-Point Environment", weekTheme: "2-Point Perspective", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a full environment scene in 2-point perspective.", "Place a standing figure in the scene.", "Use the horizon line to correctly scale the figure.", "Reference: find a street scene photo with people."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw a simpler version of the scene.", "Add a second figure at a different distance.", "Label how figure size changes with distance from the viewer.", "Note: what makes the figure feel correctly placed in the space?"] } ] },
      { day: 15, week: 3, topic: "3-Point Perspective — Boxes", weekTheme: "3-Point + Interiors", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Set 3 vanishing points — two on the horizon, one above (bird's eye) or below (worm's eye).", "Draw 10 boxes in 3-point perspective.", "Vary box sizes and positions.", "Use ruler for accuracy."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 6 boxes in 3-point — mix of worm's eye and bird's eye.", "Label all 3 vanishing points.", "Note how the third VP makes the object feel dramatic.", "One sentence: when would you use 3-point perspective in illustration?"] } ] },
      { day: 16, week: 3, topic: "Looking Up + Looking Down", weekTheme: "3-Point + Interiors", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a tall building from a worm's eye view — looking straight up.", "Draw a street from a bird's eye view — looking straight down.", "Use 3-point perspective for both.", "Reference: find photos taken from these extreme angles."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw one of the scenes from a slightly different extreme angle.", "Add a human figure for scale.", "Label: 3 VPs, horizon line, picture plane.", "Note: how does extreme perspective affect the feeling of a scene?"] } ] },
      { day: 17, week: 3, topic: "Interior — Worm's Eye View", weekTheme: "3-Point + Interiors", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw an interior room from a low camera angle (worm's eye).", "The ceiling should dominate the composition.", "Add furniture, doors, windows in correct perspective.", "Use reference or construct from imagination."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw a simpler version of the interior.", "Add one figure — how does the extreme angle make them feel?", "Label: vanishing points, horizon line, up VP.", "Note: what kind of story does a worm's eye interior suggest?"] } ] },
      { day: 18, week: 3, topic: "Interior — Bird's Eye View", weekTheme: "3-Point + Interiors", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw an interior room from above — looking down into the space.", "The floor should dominate the composition.", "Show furniture, rugs, objects from above.", "Use reference or construct from imagination."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw a simpler version from above.", "Add one or two figures seen from above.", "Label vanishing points and down VP.", "Note: what kind of story does a bird's eye view suggest?"] } ] },
      { day: 19, week: 3, topic: "Figures in Interior", weekTheme: "3-Point + Interiors", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a room interior with 2 figures placed correctly in the space.", "Scale figures using the horizon line.", "Draw figures at different distances — one near, one far.", "Reference: find an interior photo with people."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw the interior with figures.", "Add a third figure at a different distance.", "Label: how figure scale changes with distance.", "Note: what makes a figure feel embedded in a space vs. pasted on top?"] } ] },
      { day: 20, week: 3, topic: "Movie Screenshot Analysis", weekTheme: "3-Point + Interiors", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Find a movie screenshot or illustration with a strong perspective setup.", "Trace or carefully copy the composition.", "Identify and draw all vanishing points.", "Note the camera angle and eye level."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw a simplified version of the same composition.", "Change one element — the camera angle or eye level.", "Label the perspective setup of your version.", "Note: how does changing eye level change the scene's meaning?"] } ] },
      { day: 21, week: 3, topic: "Draw Day — Original Interior Scene", weekTheme: "3-Point + Interiors", exercises: [ { id: "ex1", title: "Structured Study", duration: "10–15 min", instructions: ["Design an original interior scene from imagination.", "Choose a deliberate camera angle — worm's eye, bird's eye, or eye level.", "Include at least one figure.", "Set your vanishing points before drawing anything else."] }, { id: "ex2", title: "Freehand Refinement", duration: "10–15 min", instructions: ["Refine the scene — add detail, clear up any perspective errors.", "Label: camera angle, VPs, horizon line.", "Note 3 perspective rules you applied in this drawing.", "One sentence: what story does this scene tell?"] } ] },
      { day: 22, week: 4, topic: "Foreshortening Basics", weekTheme: "Foreshortening + Environments", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a cylinder pointing directly at the viewer.", "Study how it compresses as it recedes.", "Draw 8 cylinders at different angles of foreshortening.", "Use reference — a pen or pencil pointed at you."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 6 foreshortened cylinders.", "Label: front face ellipse, back face ellipse, degree of compression.", "Note: what happens to the length of the cylinder as the angle increases?", "One sentence: how does foreshortening create a sense of depth?"] } ] },
      { day: 23, week: 4, topic: "Foreshortened Arm", weekTheme: "Foreshortening + Environments", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Study an arm reaching directly toward the viewer.", "Break it into cylindrical segments — upper arm, forearm, hand.", "Draw 4 foreshortened arm studies from reference.", "Note how each segment overlaps and compresses."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 2 foreshortened arms — one reaching toward viewer, one pushing away.", "Label the overlapping forms.", "Note the size difference between the near and far forms.", "One sentence: what makes a foreshortened arm feel convincing?"] } ] },
      { day: 24, week: 4, topic: "Foreshortened Leg", weekTheme: "Foreshortening + Environments", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Study a leg kicking directly toward the viewer.", "Break it into segments — upper leg, lower leg, foot.", "Draw 4 foreshortened leg studies from reference.", "Note how the foot dominates the near end."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw 2 foreshortened legs — one toward viewer, one away.", "Label the overlapping forms.", "Compare the size relationship of near vs. far segments.", "Note: how does foreshortening change the figure's energy?"] } ] },
      { day: 25, week: 4, topic: "Full Figure Foreshortening", weekTheme: "Foreshortening + Environments", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a full figure in a foreshortened pose — lying down, diving, falling.", "Study how the entire body compresses into the picture plane.", "Draw 3 full figure foreshortened poses from reference.", "Focus on overlapping forms rather than anatomical detail."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw one foreshortened figure.", "Label the major overlapping form relationships.", "Note where compression is most extreme.", "One sentence: which figure pose is most dramatically affected by foreshortening?"] } ] },
      { day: 26, week: 4, topic: "Environment Construction", weekTheme: "Foreshortening + Environments", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw an exterior environment — a street, park, or alley.", "Use 2-point perspective.", "Include depth cues: overlapping forms, size variation, atmospheric haze.", "Reference: a street scene photo."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw a simplified version of the environment.", "Add 2 figures at different depths.", "Label how each depth cue contributes to the sense of space.", "Note: which depth cue is most powerful in this scene?"] } ] },
      { day: 27, week: 4, topic: "Figure + Environment Integration", weekTheme: "Foreshortening + Environments", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Find a reference of a figure in a real environment.", "Draw the full scene — figure correctly scaled and placed in space.", "The figure should feel embedded in the environment, not floating.", "Use the horizon line to establish correct figure scale."] }, { id: "ex2", title: "Freehand Application", duration: "10–15 min", instructions: ["Freehand draw the figure and environment from a slightly different angle.", "Change the camera angle slightly.", "Label: horizon line, VPs, figure scale relationship to environment.", "Note: what makes the figure feel 'in' the space vs. 'on' the space?"] } ] },
      { day: 28, week: 4, topic: "Draw Day — Dynamic Figure in Environment", weekTheme: "Foreshortening + Environments", exercises: [ { id: "ex1", title: "Structured Study", duration: "10–15 min", instructions: ["Design a scene with a dynamic figure in an environment from imagination.", "The figure should be doing something active — running, jumping, reaching.", "Apply foreshortening if the pose calls for it.", "Set your perspective before drawing the figure."] }, { id: "ex2", title: "Freehand Refinement", duration: "10–15 min", instructions: ["Refine the scene — adjust any perspective errors.", "Label: VPs, horizon line, figure scale.", "Note 3 perspective concepts you applied.", "One sentence: what is the story in this scene?"] } ] },
      { day: 29, week: 5, topic: "Extreme Viewpoint Figure", weekTheme: "Final Assessment", exercises: [ { id: "ex1", title: "Structured Reference Study", duration: "10–15 min", instructions: ["Draw a figure from a worm's eye or bird's eye viewpoint.", "Use 3-point perspective for the figure's body.", "Reference: find a photo taken from an extreme angle.", "Focus on the foreshortening of the torso and limbs."] }, { id: "ex2", title: "Copy + Annotate", duration: "10–15 min", instructions: ["Redraw the figure from the same extreme angle.", "Label the perspective forces acting on each body section.", "Note how extreme viewpoints create drama and scale.", "One sentence: when would you use this viewpoint in your illustration work?"] } ] },
      { day: 30, week: 5, topic: "Final Assessment", weekTheme: "Final Assessment", exercises: [ { id: "ex1", title: "5 Box Figures in Perspective", duration: "10–15 min", instructions: ["Draw 5 box figures in 2-point perspective.", "Vary the poses and camera angles.", "Apply foreshortening to at least 2 of the figures.", "These should represent your best understanding of figures in space."] }, { id: "ex2", title: "Figure in Environment — Final Piece", duration: "15 min", instructions: ["Draw one complete figure-in-environment scene.", "Apply: correct perspective, figure scaling, depth cues.", "Include at least one foreshortened element.", "This is your Month 2 completion piece — take your time."] } ] },
    ]
  },
  {
    id: 3,
    title: "Composition & Storytelling",
    subtitle: "Place figures in scenes that communicate something",
    description: "Move from isolated figures to figures in scenes. Make every image communicate something intentional without words.",
    skills: ["Thumbnail studies", "Focal point control", "Visual flow", "Value structure", "Narrative illustration"],
    totalDays: 30,
    weeks: [
      { week: 1, theme: "Thumbnail + Focal Point" },
      { week: 2, theme: "Visual Flow + Movie Study" },
      { week: 3, theme: "Narrative Illustration" },
      { week: 4, theme: "Character + Environment" },
    ],
    days: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, week: Math.ceil((i + 1) / 7), topic: `Day ${i + 1} Study`, weekTheme: "Composition",
      exercises: [
        { id: "ex1", title: "Composition Study", duration: "10–15 min", instructions: ["Study the day's compositional concept.", "Create thumbnail sketches — small and fast.", "Focus on where the eye goes and why.", "Reference: movie screenshots or master illustrations."] },
        { id: "ex2", title: "Apply to Original Work", duration: "10–15 min", instructions: ["Create a small original composition using today's concept.", "Annotate: focal point, eye path, value structure.", "No rendering required — line and shape only.", "Note: what would you do differently?"] }
      ]
    }))
  },
  {
    id: 4,
    title: "Color Theory",
    subtitle: "Add color language to work that holds structurally",
    description: "Move from comfortable to intentional with color. Build toward color scripting — planning the emotional arc of a piece through color.",
    skills: ["Limited palettes", "Color harmony", "Mood & atmosphere", "Light & shadow in color", "Color scripting"],
    totalDays: 30,
    weeks: [
      { week: 1, theme: "Limited Palette" },
      { week: 2, theme: "Color Harmony" },
      { week: 3, theme: "Mood + Atmosphere" },
      { week: 4, theme: "Color Scripting" },
    ],
    days: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, week: Math.ceil((i + 1) / 7), topic: `Day ${i + 1} Study`, weekTheme: "Color Theory",
      exercises: [
        { id: "ex1", title: "Color Study", duration: "10–15 min", instructions: ["Follow the day's color exercise.", "Work digitally — fast, undoable, swatchable.", "Build a swatch reference sheet as you go.", "Focus on WHY this palette feels the way it feels."] },
        { id: "ex2", title: "Apply + Annotate", duration: "10–15 min", instructions: ["Apply today's concept to a small original composition.", "Annotate your palette: name colors, describe mood.", "One sentence: what would change if you shifted the temperature?", "Save your swatch for your personal color library."] }
      ]
    }))
  },
  {
    id: 5,
    title: "Character Design",
    subtitle: "Translate anatomy and form into original characters",
    description: "You have a strong character voice — now build range. Design characters you've never drawn before with deliberate shape language and personality.",
    skills: ["Shape language", "Silhouette", "Costume & detail", "Expressions", "Turnarounds"],
    totalDays: 30,
    weeks: [
      { week: 1, theme: "Shape Language" },
      { week: 2, theme: "Silhouette" },
      { week: 3, theme: "Costume + Expression" },
      { week: 4, theme: "Turnarounds + Range" },
    ],
    days: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, week: Math.ceil((i + 1) / 7), topic: `Day ${i + 1} Study`, weekTheme: "Character Design",
      exercises: [
        { id: "ex1", title: "Character Design Study", duration: "10–15 min", instructions: ["Study or apply the day's design concept.", "Focus on silhouette first — if it doesn't read as a shape, it doesn't work.", "Reference: character design breakdowns from animation and illustration.", "Work from reference when studying, toward invention when applying."] },
        { id: "ex2", title: "Design Exploration", duration: "10–15 min", instructions: ["Create 3–5 quick character variations using today's concept.", "Each should feel like a different person.", "Annotate: shape, personality, story.", "Pick your strongest and note why it works."] }
      ]
    }))
  },
  {
    id: 6,
    title: "Shape Design",
    subtitle: "Develop your graphic illustration voice",
    description: "Shape design is already central to your work. This month makes it fully conscious and expandable — building toward a December portfolio that looks unmistakably like you.",
    skills: ["Simplification", "Graphic form", "Stylization", "Exaggeration & appeal", "Signature shape vocabulary"],
    totalDays: 30,
    weeks: [
      { week: 1, theme: "Simplification" },
      { week: 2, theme: "Redesign + Stylization" },
      { week: 3, theme: "Exaggeration + Appeal" },
      { week: 4, theme: "Signature Voice" },
    ],
    days: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, week: Math.ceil((i + 1) / 7), topic: `Day ${i + 1} Study`, weekTheme: "Shape Design",
      exercises: [
        { id: "ex1", title: "Shape Design Study", duration: "10–15 min", instructions: ["Study the subject through the lens of shape.", "Simplify ruthlessly — remove everything that isn't essential.", "Ask: what is the essential shape of this thing?", "Reference: graphic design, animation backgrounds, flat illustration masters."] },
        { id: "ex2", title: "Stylization Application", duration: "10–15 min", instructions: ["Apply the simplified shape to an original subject.", "Push the exaggeration further than feels comfortable.", "Compare to reference — where did you hold back?", "Annotate: what shapes are working? What still reads too literally?"] }
      ]
    }))
  },
]

export function getCurriculumById(id) {
  return CURRICULUMS.find(c => c.id === id)
}

export function getDayData(curriculumId, dayNumber) {
  const curriculum = getCurriculumById(curriculumId)
  if (!curriculum) return null
  return curriculum.days.find(d => d.day === dayNumber) || null
}
