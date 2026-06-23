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
      { day: 1,  week: 1, topic: "Skull Structure", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Fill a page with skull studies — front, side, and three-quarter views.", "Focus on the cranial mass vs. the facial mass.", "Note the brow ridge, cheekbones, and jaw as landmarks.", "Use Proko or Alphonso Dunn as reference."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Choose your strongest skull study from Exercise 1.", "Redraw it slowly and deliberately.", "Label: cranial mass, facial mass, brow ridge, cheekbone, jaw, eye socket.", "Write one thing you noticed about the skull's structure."] }
        ]
      },
      { day: 2,  week: 1, topic: "Neck & Trapezius", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study how the neck connects the head to the body.", "Draw the neck as a cylinder tilting from the skull.", "Note the sternocleidomastoid muscle and trapezius mass.", "Draw from front, side, and back views."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your clearest neck study.", "Label: sternocleidomastoid, trapezius, cervical spine, pit of neck.", "Note how the head tilts and rotates on the neck.", "One sentence: how does the neck change the feel of a pose?"] }
        ]
      },
      { day: 3,  week: 1, topic: "Rib Cage", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw the rib cage as an egg form.", "Study it from front, side, and three-quarter views.", "Note where it sits relative to the neck and pelvis.", "Focus on the overall shape before any detail."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the rib cage egg form from two angles.", "Label: sternum, costal arch, clavicle notch, spine attachment.", "Note how the rib cage tilts in different poses.", "One observation about its relationship to the shoulder."] }
        ]
      },
      { day: 4,  week: 1, topic: "Pelvis", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw the pelvis as a bowl or wedge form.", "Study it from front, side, and back views.", "Note the iliac crest, pubic arch, and sacrum.", "Observe how it tilts differently in male vs. female figures."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the pelvis from front and side.", "Label: iliac crest, ASIS, pubic symphysis, sacrum, greater trochanter.", "Note the tilt — anterior vs. posterior pelvic tilt.", "One sentence: how does pelvis tilt affect posture?"] }
        ]
      },
      { day: 5,  week: 1, topic: "Rib Cage + Pelvis Together", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw both the rib cage and pelvis together on the same figure.", "Study their spatial relationship and the gap between them.", "Draw 5 poses showing different torso tilts.", "Focus on how one mass shifts relative to the other."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your strongest torso study.", "Label both forms and the space between them.", "Draw an arrow showing the line of action through the torso.", "Note: what changes when the torso bends or twists?"] }
        ]
      },
      { day: 6,  week: 1, topic: "Spine", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the natural curves of the spine — cervical, thoracic, lumbar.", "Draw the spine as a line of action through the torso.", "Study C-curves, S-curves, and lateral bends.", "Draw 8 spine lines in different poses."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw 3 spine studies with the rib cage and pelvis attached.", "Label: cervical curve, thoracic curve, lumbar curve.", "Note where compression and stretching occur when the spine bends.", "One sentence: how does the spine affect rhythm and gesture?"] }
        ]
      },
      { day: 7,  week: 1, topic: "Full Torso Gesture Day", weekTheme: "Head → Torso",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw 10 quick torso gesture studies from reference.", "Each one should take 60–90 seconds.", "Focus on the line of action, rib cage tilt, and pelvis tilt.", "Use a figure drawing reference site (Line of Action, SenshiStock)."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Pick your two strongest gestures.", "Redraw each one with labeled landmarks.", "Add the skull and neck to complete the upper torso.", "Note which poses felt most natural to draw."] }
        ]
      },
      // WEEK 2 — Arms
      { day: 8,  week: 2, topic: "Shoulder & Deltoid", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the deltoid as a three-part muscle wrapping the shoulder.", "Draw the shoulder from front, side, and back.", "Note how the deltoid connects to the clavicle, acromion, and humerus.", "Draw 6 shoulder studies in different arm positions."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the shoulder with the upper arm attached.", "Label: deltoid (anterior, lateral, posterior heads), acromion, clavicle.", "Note how the deltoid shape changes as the arm raises.", "One sentence: what makes the shoulder feel powerful in a drawing?"] }
        ]
      },
      { day: 9,  week: 2, topic: "Bicep & Tricep", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the upper arm as two opposing masses — bicep and tricep.", "Draw the upper arm from front, back, and side.", "Note how they alternate dominance as the arm bends.", "Draw 6 upper arm studies at different flex levels."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the upper arm at two different bend angles.", "Label: bicep, tricep, brachialis, inner and outer epicondyles.", "Note where the peak of each muscle sits.", "One sentence: how do these masses create the arm's silhouette?"] }
        ]
      },
      { day: 10, week: 2, topic: "Forearm", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the forearm in pronation and supination.", "Note how the muscles twist around the radius and ulna.", "Draw the forearm from front, back, and side — pronated and supinated.", "Focus on the tapered wedge shape of the forearm."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the forearm in both pronated and supinated positions.", "Label: radius, ulna, brachioradialis, wrist flexors, wrist extensors.", "Draw an arrow showing how the muscles spiral.", "Note: what changes visually between pronation and supination?"] }
        ]
      },
      { day: 11, week: 2, topic: "Elbow", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the elbow as a hinge joint with visible bony landmarks.", "Draw the elbow from front, back, side, and three-quarter.", "Note the olecranon, medial and lateral epicondyles.", "Draw 6 elbow studies at different bend angles."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the elbow connecting upper arm and forearm.", "Label: olecranon, medial epicondyle, lateral epicondyle.", "Note the triangle formed by the three bony points.", "One sentence: how does the elbow anchor the arm's structure?"] }
        ]
      },
      { day: 12, week: 2, topic: "Full Arm", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw the full arm from shoulder to wrist in 5 different positions.", "Include: reaching up, reaching forward, hanging down, bent, crossing body.", "Focus on the overall rhythm and silhouette of each position.", "No detail — just clean structural forms."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your two strongest full arm studies.", "Label all major landmarks from shoulder to wrist.", "Draw the line of action through each arm.", "Note: which position was hardest to get right and why?"] }
        ]
      },
      { day: 13, week: 2, topic: "Arm in Action", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw 8 arm action poses from reference — reaching, pushing, pulling, throwing.", "Focus on how tension and compression affect the muscle forms.", "Note how the shoulder and torso connect to the arm's action.", "Keep each study loose and gestural."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your strongest action arm with the shoulder and torso attached.", "Label key muscles that are stretched or compressed in the pose.", "Draw force arrows showing the direction of action.", "One sentence: what makes an arm pose feel dynamic vs. static?"] }
        ]
      },
      { day: 14, week: 2, topic: "Figure Drawing Day — Arms", weekTheme: "Arms",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw 10 full figure gesture studies focused on expressive arm positions.", "Each gesture 60–90 seconds.", "Let the arms drive the mood and story of each pose.", "Use Line of Action or SenshiStock for reference."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Pick your strongest figure gesture.", "Redraw it with careful attention to the arm anatomy.", "Label the arm landmarks visible in the pose.", "Note how the arm connects to the figure's overall story."] }
        ]
      },
      // WEEK 3 — Hands
      { day: 15, week: 3, topic: "Hand Block", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw the hand as a simple wedge or box — no fingers yet.", "Study this block form from multiple angles: front, back, side, three-quarter.", "Note how the palm narrows from knuckles to wrist.", "Draw 10 hand block studies."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the hand block from 3 angles.", "Label: knuckle line, wrist, heel of hand, finger side, thumb side.", "Note the slight arch of the knuckle line.", "One sentence: why does simplifying the hand first help?"] }
        ]
      },
      { day: 16, week: 3, topic: "Palm Structure", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the palm as three distinct mounds — heel, thenar (thumb), hypothenar (pinky).", "Draw the palm from front and back.", "Note how the mounds create the hand's 3D structure.", "Draw 6 palm studies with clear mound forms."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the palm with clearly defined mounds.", "Label: thenar eminence, hypothenar eminence, heel of hand, carpal tunnel area.", "Note how the mounds shift when the hand opens vs. closes.", "One sentence: how do the mounds give the hand its character?"] }
        ]
      },
      { day: 17, week: 3, topic: "Thumb", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the thumb as its own independent mass.", "Draw the thumb's two joints and the large thenar muscle.", "Note how the thumb opposes the fingers — its unique range of motion.", "Draw 8 thumb studies in different positions."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the thumb attached to the hand block.", "Label: CMC joint, MCP joint, IP joint, thenar eminence, thumbnail.", "Note the direction of the thumb when the hand is relaxed.", "One sentence: what makes the thumb the most expressive part of the hand?"] }
        ]
      },
      { day: 18, week: 3, topic: "Fingers", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study each finger as three cylindrical segments.", "Draw fingers from the side to understand the joint angles.", "Note how fingers stack and foreshorten when curling.", "Draw 8 finger studies — straight, curled, and spread."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw one hand with clearly defined finger segments.", "Label: proximal, middle, distal phalanges on at least two fingers.", "Note the knuckle rhythm across the hand.", "One sentence: what makes finger foreshortening so difficult?"] }
        ]
      },
      { day: 19, week: 3, topic: "Hand Rotation", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw the same hand in 5 positions — palm up, palm down, edge (pinky side), edge (thumb side), three-quarter.", "Focus on how the form changes with rotation.", "Note which view is most and least comfortable to draw.", "Keep studies quick — 2 minutes each."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your two strongest rotation studies.", "Label the visible anatomy landmarks in each.", "Note how the wrist bones change appearance with rotation.", "One sentence: which rotation feels most natural in figure drawing and why?"] }
        ]
      },
      { day: 20, week: 3, topic: "Hand Gesture", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw 10 hand gesture studies — gripping, pointing, resting, reaching, gesturing.", "Focus on the overall shape and expression of each gesture.", "Keep them loose and fast — 60 seconds each.", "Reference: your own hand or photo reference."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your two most expressive hand gestures carefully.", "Label the key anatomy that makes each gesture readable.", "Note the line of action through the gesture.", "One sentence: what makes a hand gesture feel alive?"] }
        ]
      },
      { day: 21, week: 3, topic: "Figure Drawing Day — Hands", weekTheme: "Hands",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw 8 full figure gesture studies where the hands are prominent.", "Let the hands tell the story of each pose.", "Keep gestures loose — 90 seconds each.", "Focus on the relationship between hand and body language."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your strongest figure gesture with careful hand anatomy.", "Label visible hand landmarks in the pose.", "Note how the hand reinforces the figure's overall gesture.", "One sentence: how do hands change the emotional read of a pose?"] }
        ]
      },
      // WEEK 4 — Legs + Full Figure
      { day: 22, week: 4, topic: "Upper Leg", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the upper leg as two opposing masses — quad and hamstring.", "Draw from front, back, and side views.", "Note how the masses shift when the leg bends.", "Draw 6 upper leg studies at different angles."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the upper leg from two views.", "Label: rectus femoris, vastus lateralis, vastus medialis, hamstrings, IT band.", "Note where the quad and hamstring mass peaks are.", "One sentence: how does the upper leg shape change with the knee bent?"] }
        ]
      },
      { day: 23, week: 4, topic: "Knee", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the knee as a hinge joint with visible bony structure.", "Draw the knee from front, side, and back.", "Note the patella, medial and lateral condyles.", "Draw 6 knee studies at different bend angles."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the knee connecting upper and lower leg.", "Label: patella, medial condyle, lateral condyle, popliteal fossa (back of knee).", "Note how the patella shifts as the knee bends.", "One sentence: how is the knee similar to the elbow structurally?"] }
        ]
      },
      { day: 24, week: 4, topic: "Lower Leg", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Study the lower leg — calf and shin as contrasting forms.", "Draw from front, back, and side views.", "Note the tapered wedge shape and the shin as a straight edge.", "Draw 6 lower leg studies."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the lower leg from two views.", "Label: gastrocnemius, soleus, tibialis anterior, fibula head, shin.", "Note how the calf muscle peaks higher on the outer side.", "One sentence: what gives the lower leg its distinctive silhouette?"] }
        ]
      },
      { day: 25, week: 4, topic: "Ankle + Foot", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw the foot as a wedge form — heel to ball, then toes.", "Study the ankle as two uneven bumps — inner malleolus higher than outer.", "Draw from side, front, and three-quarter views.", "Draw 8 foot studies."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw the foot and ankle from two views.", "Label: medial malleolus, lateral malleolus, heel, arch, ball of foot, toes.", "Note the arch — how high it is, how it affects the silhouette.", "One sentence: what makes feet so difficult to draw convincingly?"] }
        ]
      },
      { day: 26, week: 4, topic: "Full Leg", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw the full leg from hip to foot in 5 positions.", "Include: straight standing, bent, stepping forward, kicking, crossed.", "Focus on the overall rhythm and silhouette.", "No muscle detail — just clean structural forms."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your two strongest full leg studies.", "Label all major landmarks from hip to foot.", "Draw the line of action through each leg.", "Note: which position was hardest and why?"] }
        ]
      },
      { day: 27, week: 4, topic: "Leg in Action", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw 8 leg action poses — walking, running, kicking, crouching, leaping.", "Focus on how weight and tension affect the leg forms.", "Note how the pelvis connects to the leg's action.", "Keep studies loose and gestural."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your strongest action leg with pelvis attached.", "Label key muscles stretched or compressed in the pose.", "Draw force arrows showing weight and direction.", "One sentence: what makes a leg pose feel grounded vs. floating?"] }
        ]
      },
      { day: 28, week: 4, topic: "Full Figure Gesture Day", weekTheme: "Legs + Full Figure",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Draw 12 full figure gesture studies — 60 seconds each.", "Focus equally on the legs and the upper body.", "Let the legs carry the weight and story of each pose.", "Use Line of Action for reference."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your two strongest full figure gestures.", "Label landmarks from head to foot on one figure.", "Note the weight distribution — which leg is the weight-bearing leg?", "One sentence: how do the legs anchor the whole figure?"] }
        ]
      },
      // FINAL DAYS
      { day: 29, week: 5, topic: "Head + Neck Revisit", weekTheme: "Final Assessment",
        exercises: [
          { id: "ex1", title: "Structured Reference Study", duration: "10–15 min",
            instructions: ["Redraw skull and neck studies from Day 1 and Day 2.", "Compare to your original studies — what has changed?", "Draw 6 head + neck studies with the shoulders attached.", "Focus on the full connection from skull to rib cage."] },
          { id: "ex2", title: "Copy + Annotate", duration: "10–15 min",
            instructions: ["Redraw your strongest head + neck + shoulder study.", "Label everything from skull to clavicle.", "Note 3 specific things you can now see that you couldn't see on Day 1.", "One sentence: how has your understanding of the head changed?"] }
        ]
      },
      { day: 30, week: 5, topic: "Full Figure Assessment", weekTheme: "Final Assessment",
        exercises: [
          { id: "ex1", title: "Final Gesture Marathon", duration: "15 min",
            instructions: ["Draw 20 full figure gesture studies — 30 seconds each.", "Cover a wide range of poses — standing, sitting, moving, resting.", "Focus on rhythm, weight, and line of action.", "This is your benchmark — draw your best."] },
          { id: "ex2", title: "Final Figure Drawing", duration: "15 min",
            instructions: ["Choose your strongest pose from Exercise 1.", "Redraw it as a complete, careful figure study.", "Include all landmarks learned over 30 days.", "Label 10 anatomical landmarks. This is your Month 1 completion piece."] }
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
