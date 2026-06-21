import type { Exercise, Fundamental } from './figure-drawing'

const colorTheory: Exercise[] = [
  // ───────────────────────────────────────────────
  // 1. COLOR HARMONY
  // ───────────────────────────────────────────────
  {
    id: 'ct-001',
    title: 'Triadic Trio Creature',
    goal: 'Practice designing a cohesive creature using a triadic color scheme.',
    how: [
      'Pick three colors evenly spaced on the color wheel.',
      'Design a brand-new creature, assigning one color as dominant and two as accents.',
      'Keep the creature simple — focus on the palette, not the anatomy.',
    ],
    review: 'Did the triad feel balanced, or did one color fight for attention?',
  },
  {
    id: 'ct-002',
    title: 'Split-Complement Street Scene',
    goal: 'Practice a less obvious harmony than straight complements.',
    how: [
      'Choose a base color, then its split-complement pair (the two colors flanking its opposite).',
      'Sketch a quick street scene — buildings, signage, a figure or two.',
      'Use the base color for most of the scene and the split pair as sparing accents.',
    ],
    review: 'Did the split-complement feel more harmonious than a straight complement would?',
  },
  {
    id: 'ct-003',
    title: 'Complementary Combat',
    goal: 'Practice using complementary colors to visually separate rivals.',
    how: [
      'Design two simple rival characters facing off.',
      'Give each character one half of a complementary pair as their dominant color.',
      'Let the colors clash where the characters overlap or touch.',
    ],
    review: 'Did the complementary clash make the rivalry feel more charged?',
  },
  {
    id: 'ct-004',
    title: 'Analogous Sunset Skyline',
    goal: 'Practice a tight, naturally harmonious palette.',
    how: [
      'Choose three colors that sit side by side on the wheel (e.g. red, orange, yellow).',
      'Paint a quick skyline silhouette against a sky built entirely from that range.',
      'Use value, not new hues, to create contrast between buildings and sky.',
    ],
    review: 'Was it hard to resist reaching for a color outside your analogous range?',
  },
  {
    id: 'ct-005',
    title: 'Tetradic Carnival',
    goal: 'Practice managing four colors without the result turning to mud.',
    how: [
      'Pick two complementary pairs (four colors total) for a busy carnival scene.',
      'Assign one color as the clear dominant, demoting the other three to supporting roles.',
      'Sketch tents, lights, and a crowd using only those four colors.',
    ],
    review: 'Which color ended up doing the most work to hold the scene together?',
  },
  {
    id: 'ct-006',
    title: 'Harmony Breaker',
    goal: 'Practice understanding harmony by deliberately breaking it.',
    how: [
      'Paint a small scene using a clean analogous or triadic harmony.',
      'Duplicate it, then add one jarring, unrelated color in a small but visible spot.',
      'Compare the two versions side by side.',
    ],
    review: 'Did the "wrong" color ruin the piece, or did it add useful tension?',
  },
  {
    id: 'ct-007',
    title: 'Color Wheel Spin',
    goal: 'Practice working with a palette you didn\'t choose yourself.',
    how: [
      'Use a random number or spin a mental color wheel to land on three colors.',
      'Treat whatever harmony you land on as your assignment, even if it\'s awkward.',
      'Design a character or object that makes the palette feel intentional.',
    ],
    review: 'Did the "accidental" palette push you somewhere you wouldn\'t have gone on purpose?',
  },
  {
    id: 'ct-008',
    title: 'Warm Harmony / Cool Harmony Diptych',
    goal: 'Practice the same harmony structure in two temperature ranges.',
    how: [
      'Design one simple character or object.',
      'Paint it once using an analogous warm harmony.',
      'Paint it again using an analogous cool harmony, keeping the design identical.',
    ],
    review: 'Did the design read as a different character depending on temperature alone?',
  },
  {
    id: 'ct-009',
    title: 'Harmony in an Invented Flower',
    goal: 'Practice harmony at a small, detailed scale.',
    how: [
      'Invent a fictional flower — any shape you like.',
      'Color the petals, center, and stem using a single analogous harmony.',
      'Push saturation and value to keep the small color range feeling rich.',
    ],
    review: 'How did you create variety without leaving your color range?',
  },
  {
    id: 'ct-010',
    title: 'Triadic Outfit Trio',
    goal: 'Practice using harmony to design coordinated variations.',
    how: [
      'Pick one character design.',
      'Create three outfit variants, each built on a different rotation of the same triadic palette.',
      'Keep the silhouette identical so the palette does all the differentiating.',
    ],
    review: 'Which outfit felt the most "them" — and why?',
  },
  {
    id: 'ct-011',
    title: 'Double Complementary Duel',
    goal: 'Practice giving two characters equal but opposing color weight.',
    how: [
      'Choose two complementary pairs.',
      'Assign one full pair to each of two opposing characters.',
      'Pose them facing each other so their palettes read as a visual conflict.',
    ],
    review: 'Did either character\'s palette dominate the page more than intended?',
  },
  {
    id: 'ct-012',
    title: 'Split-Complement Spaceship',
    goal: 'Practice applying harmony to hard-surface design.',
    how: [
      'Choose a base color and its split-complement pair.',
      'Design a simple spaceship or vehicle using the base color as the hull.',
      'Use the split-complement pair for panel lines, lights, or thrusters.',
    ],
    review: 'Did the harmony make the machine feel more designed and less random?',
  },
  {
    id: 'ct-013',
    title: 'Harmony Hunt',
    goal: 'Practice recognizing harmony already present in the real world.',
    how: [
      'Find a photo (yours or a reference) with a pleasing color relationship.',
      'Identify which harmony type it is using — analogous, triadic, complementary, or split.',
      'Reinterpret the subject as a new character or object using that exact harmony.',
    ],
    review: 'Was the harmony you found different from what you expected?',
  },
  {
    id: 'ct-014',
    title: 'Clashing to Calm',
    goal: 'Practice diagnosing and repairing a discordant palette.',
    how: [
      'Quickly paint a small scene using colors you pick at random, with no plan.',
      'Identify which color is causing the most visual tension.',
      'Revise the piece by shifting that one color until the palette feels resolved.',
    ],
    review: 'Did one small shift fix the whole palette, or did it take several?',
  },
  {
    id: 'ct-015',
    title: 'One Shape, Three Harmonies',
    goal: 'Practice seeing how harmony alone changes perceived meaning.',
    how: [
      'Draw one simple, abstract shape or creature silhouette.',
      'Color it three times: once analogous, once triadic, once complementary.',
      'Keep everything else — line, shape, size — completely identical.',
    ],
    review: 'Which version felt the most different in mood from the others?',
  },

  // ───────────────────────────────────────────────
  // 2. LIMITED PALETTE CHALLENGES
  // ───────────────────────────────────────────────
  {
    id: 'ct-016',
    title: 'Three-Color Hero',
    goal: 'Practice full character design under a strict color budget.',
    how: [
      'Choose exactly three colors before you start designing.',
      'Design a complete hero character — costume, skin, hair, accessories — using only those three.',
      'Rely on value shifts within each color to create variety.',
    ],
    review: 'Did three colors feel limiting, or surprisingly enough?',
  },
  {
    id: 'ct-017',
    title: 'Two-Color Poster',
    goal: 'Practice bold graphic design with minimal color.',
    how: [
      'Pick one color, plus black and white.',
      'Design a movie-style poster for an imaginary film using only that palette.',
      'Use shape and contrast, not color variety, to carry the composition.',
    ],
    review: 'Did the restriction make the poster feel more graphic and confident?',
  },
  {
    id: 'ct-018',
    title: 'Primary Colors Only Creature',
    goal: 'Practice mixing complexity from the simplest possible palette.',
    how: [
      'Choose only red, yellow, and blue (plus black and white for value).',
      'Design a creature using only mixes and tints of those three.',
      'Push some areas toward near-neutral by overlapping all three.',
    ],
    review: 'What unexpected color did you mix that you ended up loving?',
  },
  {
    id: 'ct-019',
    title: 'One Warm, One Cool',
    goal: 'Practice building a full character from a minimal temperature pair.',
    how: [
      'Pick exactly one warm color and one cool color.',
      'Design a character using only those two hues, plus black and white.',
      'Use the warm/cool contrast to separate foreground details from background ones.',
    ],
    review: 'Which of the two colors ended up reading as the "skin tone" by default?',
  },
  {
    id: 'ct-020',
    title: 'Desaturated World, One Accent',
    goal: 'Practice using a single saturated color as a focal device.',
    how: [
      'Paint a simple scene almost entirely in muted, low-saturation grays and browns.',
      'Choose one element — an object, a light, a piece of clothing — to keep fully saturated.',
      'Make sure that one element is also where you want the eye to land.',
    ],
    review: 'Did the single accent color do enough work to carry the whole image?',
  },
  {
    id: 'ct-021',
    title: 'Five-Swatch Environment',
    goal: 'Practice environment design under a fixed, pre-chosen palette.',
    how: [
      'Before sketching anything, lock in exactly five color swatches.',
      'Design a small environment — a room, alley, or landscape — using only those five.',
      'If you\'re tempted to add a sixth color, find a mix from the existing five instead.',
    ],
    review: 'Which of the five swatches turned out to be the most versatile?',
  },
  {
    id: 'ct-022',
    title: 'Black, White, and One',
    goal: 'Practice classic noir-style color restraint.',
    how: [
      'Choose one single accent color.',
      'Design a moody scene or character using mostly black, white, and gray.',
      'Place the accent color only where you want maximum dramatic weight.',
    ],
    review: 'Did the noir restraint make the accent color feel more powerful than usual?',
  },
  {
    id: 'ct-023',
    title: 'Palette Lock Roulette',
    goal: 'Practice designing from a palette you don\'t get to choose.',
    how: [
      'Generate four random colors (dice, random number app, or closed-eyes color picker).',
      'Commit to using exactly those four, no swaps.',
      'Design any character, object, or scene that makes the combination feel intentional.',
    ],
    review: 'Did you discover a color combination you\'d never have picked on your own?',
  },
  {
    id: 'ct-024',
    title: 'Alien Skin Palette',
    goal: 'Practice breaking default skin-tone assumptions with a limited palette.',
    how: [
      'Choose a limited palette that excludes typical skin tones entirely.',
      'Design a humanoid or creature face using that palette for the "skin."',
      'Keep the anatomy readable even as the coloring goes unconventional.',
    ],
    review: 'At what point did the unusual color stop reading as "wrong" and start reading as "alien"?',
  },
  {
    id: 'ct-025',
    title: 'Single-Pigment Illusion',
    goal: 'Practice simulating a full tonal range from one digital "tube" of paint.',
    how: [
      'Choose one single hue.',
      'Paint a small still life using only tints and shades of that one color, plus white and black for mixing.',
      'Push the value range as far as it will go in both directions.',
    ],
    review: 'Did one pigment feel surprisingly capable, or did you hit a wall?',
  },
  {
    id: 'ct-026',
    title: 'Vintage Toy Palette',
    goal: 'Practice applying a nostalgic, era-specific limited palette to new design.',
    how: [
      'Reference the slightly faded, simplified colors of old tin or plastic toys.',
      'Extract a 4-5 color palette from that feeling, even without a specific photo.',
      'Design a new character as if it were manufactured in that era.',
    ],
    review: 'What about the palette made it feel "vintage" rather than just muted?',
  },
  {
    id: 'ct-027',
    title: 'Neon on Black',
    goal: 'Practice high-contrast limited color against a dark field.',
    how: [
      'Choose exactly three neon or highly saturated colors.',
      'Design a scene or character set against a pure black background.',
      'Let the neon colors do all the work of describing form and light.',
    ],
    review: 'Did the black background make the colors feel more electric than they would on white?',
  },
  {
    id: 'ct-028',
    title: 'Earth Tones Only',
    goal: 'Practice building richness from a muted, natural palette.',
    how: [
      'Choose only browns, ochres, and muted greens — no saturated brights.',
      'Design a character or creature that feels grounded and natural.',
      'Use value contrast heavily since hue contrast will be minimal.',
    ],
    review: 'Did the muted palette make the design feel more believable or more boring — and why?',
  },
  {
    id: 'ct-029',
    title: 'Candy Palette Character',
    goal: 'Practice designing with an intentionally sugary, pastel-saturated palette.',
    how: [
      'Choose 3-4 candy-bright pastel colors.',
      'Design a character that leans fully into the sweet, playful palette.',
      'Resist the urge to mute it down — commit to the sugar rush.',
    ],
    review: 'Did the candy palette suggest a personality before you\'d designed any features?',
  },
  {
    id: 'ct-030',
    title: 'Two-Palette Swap',
    goal: 'Practice seeing how the same design reads under two unrelated palettes.',
    how: [
      'Design one simple character or scene in line art only, no color yet.',
      'Color it once with palette A (your choice).',
      'Color it again with an unrelated palette B, keeping every line identical.',
    ],
    review: 'Which palette told a more interesting story about the same exact design?',
  },

  // ───────────────────────────────────────────────
  // 3. CHARACTER DESIGN COLOR
  // ───────────────────────────────────────────────
  {
    id: 'ct-031',
    title: 'Hero vs. Villain, Same Archetype',
    goal: 'Practice using palette alone to flip a character\'s moral read.',
    how: [
      'Design one character archetype (knight, ruler, healer — your choice).',
      'Color one version with a clearly "heroic" palette.',
      'Color a second version with the same silhouette but a "villainous" palette.',
    ],
    review: 'At what point did the palette alone start reading as good or evil?',
  },
  {
    id: 'ct-032',
    title: 'Color-Coded Family',
    goal: 'Practice showing relationships through palette logic, not just shared features.',
    how: [
      'Design three related characters — siblings, or parent and children.',
      'Give each a distinct palette that still shares one unifying color or harmony.',
      'Make sure a stranger could guess they\'re related from color alone.',
    ],
    review: 'What shared color thread did you use to tie the family together?',
  },
  {
    id: 'ct-033',
    title: 'Faction Colors',
    goal: 'Practice using palette as a world-building shorthand.',
    how: [
      'Invent two rival factions in a fictional world.',
      'Assign each faction a distinct, opposing color identity.',
      'Design one character per faction wearing their faction\'s colors.',
    ],
    review: 'Would the two factions be instantly recognizable at a glance, even from a distance?',
  },
  {
    id: 'ct-034',
    title: 'Color as Power',
    goal: 'Practice expressing a fictional ability through palette rather than effects.',
    how: [
      'Invent a character with a magical or special ability.',
      'Choose a palette that visually suggests what that power is, without literal effects.',
      'Design the character so the power feels built-in, not added on top.',
    ],
    review: 'Could someone guess the character\'s power just from their colors?',
  },
  {
    id: 'ct-035',
    title: 'Before and After',
    goal: 'Practice showing transformation through color shift alone.',
    how: [
      'Design one character in a "before" state — ordinary, unremarkable.',
      'Redesign the exact same silhouette in an "after" state — transformed, changed.',
      'Change only the palette, not the shapes, between the two.',
    ],
    review: 'Did the transformation feel believable using color change alone?',
  },
  {
    id: 'ct-036',
    title: 'Royalty Without the Crown',
    goal: 'Practice conveying status through palette rather than props.',
    how: [
      'Design a character meant to read as royal or high-status.',
      'Use no crown, throne, or obvious royal symbols.',
      'Rely entirely on palette choice — richness, saturation, color associations — to sell the status.',
    ],
    review: 'What palette decisions did the most work to sell "royalty"?',
  },
  {
    id: 'ct-037',
    title: 'The Outcast Palette',
    goal: 'Practice using clashing color intentionally to express alienation.',
    how: [
      'Design a small "world" palette — the colors of an environment or group.',
      'Design one character whose colors deliberately clash with that world palette.',
      'Place the character into the environment to see the contrast in context.',
    ],
    review: 'Did the clash read as "doesn\'t belong" or just "looks wrong" — and what\'s the difference?',
  },
  {
    id: 'ct-038',
    title: 'Elemental Speed Round',
    goal: 'Practice fast, intuitive color-to-concept translation.',
    how: [
      'Set a timer for 20 minutes total.',
      'Design four tiny characters — fire, water, earth, and air — using color as the primary identifier.',
      'Spend roughly five minutes per character; don\'t overthink the shapes.',
    ],
    review: 'Which element was hardest to differentiate using color alone?',
  },
  {
    id: 'ct-039',
    title: 'Team Roster Color Key',
    goal: 'Practice designing a readable color system across multiple characters.',
    how: [
      'Design four teammates who need to be instantly distinguishable at a glance.',
      'Give each a clear, distinct dominant color while keeping a unifying team element.',
      'Line them up together and check for any two that read too similarly.',
    ],
    review: 'Could you tell all four apart from a thumbnail-sized silhouette?',
  },
  {
    id: 'ct-040',
    title: 'Disguise Swap',
    goal: 'Practice using palette to encode a hidden identity.',
    how: [
      'Design one character with two identities — a public one and a secret one.',
      'Color the "public" version in an unassuming, forgettable palette.',
      'Color the "secret" version in a palette that reveals their true nature.',
    ],
    review: 'Did the disguise palette feel deliberately bland, or just under-designed?',
  },
  {
    id: 'ct-041',
    title: 'Color Age Progression',
    goal: 'Practice showing age through palette shift on an identical design.',
    how: [
      'Design one character\'s silhouette and features.',
      'Color a "young" version with a fresher, higher-contrast palette.',
      'Color an "old" version with a more faded, lower-contrast palette, same lines.',
    ],
    review: 'Did desaturation alone feel believable as aging, or did it need a value shift too?',
  },
  {
    id: 'ct-042',
    title: 'Mood Ring Character',
    goal: 'Practice showing emotional state through palette change.',
    how: [
      'Design one character with a simple, neutral expression.',
      'Paint three emotional variants — calm, angry, and afraid — shifting only the palette.',
      'Keep the pose and features as close to identical as possible.',
    ],
    review: 'Which emotion was easiest to convey through color, and which was hardest?',
  },
  {
    id: 'ct-043',
    title: 'Silent Color Backstory',
    goal: 'Practice implying narrative history through palette choice alone.',
    how: [
      'Invent a brief backstory for a character — but don\'t write it down anywhere visible.',
      'Design the character\'s palette to imply that history without any text or symbols.',
      'Show the piece to someone and see what story they read from the colors.',
    ],
    review: 'How close did the viewer\'s guess come to the backstory you actually had in mind?',
  },
  {
    id: 'ct-044',
    title: 'Symbiotic Pair',
    goal: 'Practice designing two characters whose palettes visually complete each other.',
    how: [
      'Design two characters meant to feel like they belong together.',
      'Choose palettes that complement or interlock, rather than matching exactly.',
      'Pose them together and check whether they read as a duo at a glance.',
    ],
    review: 'Did you achieve "belonging together" without making them look identical?',
  },
  {
    id: 'ct-045',
    title: 'The Anti-Hero Palette',
    goal: 'Practice the tension of a hero with villain-coded colors.',
    how: [
      'Design a character who is narratively a hero.',
      'Deliberately give them a palette typically associated with villains.',
      'Adjust details until the character feels morally ambiguous rather than simply miscolored.',
    ],
    review: 'Did the villain-coded palette change how trustworthy the character felt?',
  },

  // ───────────────────────────────────────────────
  // 4. ENVIRONMENT & ATMOSPHERE
  // ───────────────────────────────────────────────
  {
    id: 'ct-046',
    title: 'Foggy Marketplace',
    goal: 'Practice atmospheric color loss with distance.',
    how: [
      'Sketch a simple marketplace with stalls receding into the distance.',
      'Keep full saturation and contrast in the foreground.',
      'Gradually desaturate and lighten everything as it recedes into the fog.',
    ],
    review: 'At what distance did color stop reading as meaningful at all?',
  },
  {
    id: 'ct-047',
    title: 'Desert at High Noon',
    goal: 'Practice harsh, bleached, high-key environmental color.',
    how: [
      'Sketch a simple desert landscape with one or two structures.',
      'Push the overall value range bright and the saturation low, as if bleached by sun.',
      'Use sharp, small shadows rather than soft gradients.',
    ],
    review: 'Did the bleached palette successfully read as "blinding heat"?',
  },
  {
    id: 'ct-048',
    title: 'Abandoned Carnival',
    goal: 'Practice decayed, faded versions of once-vibrant color.',
    how: [
      'Imagine the carnival from Tetradic Carnival, years later and abandoned.',
      'Reuse a similar palette but desaturate and dull every color.',
      'Add a single spot of leftover, still-saturated color to suggest former glory.',
    ],
    review: 'Did the contrast between faded and saturated colors tell its own story?',
  },
  {
    id: 'ct-049',
    title: 'Underground Cave Glow',
    goal: 'Practice a single colored light source in total darkness.',
    how: [
      'Sketch a simple cave interior with no external light.',
      'Choose one unusual glow source — crystals, fungus, or magic — and pick its color.',
      'Let that single color be the only light in an otherwise near-black scene.',
    ],
    review: 'Did the glow color feel strong enough to suggest real illumination?',
  },
  {
    id: 'ct-050',
    title: 'Rainy City Window View',
    goal: 'Practice the soft color blur of light through rain-streaked glass.',
    how: [
      'Sketch a simple city view as seen through a wet window.',
      'Blur and soften all background colors, letting them bleed slightly.',
      'Keep one element near the glass in sharper focus and color for contrast.',
    ],
    review: 'Did the blurred color successfully read as "wet glass" rather than just "out of focus"?',
  },
  {
    id: 'ct-051',
    title: 'Floating Sky Island',
    goal: 'Practice atmospheric perspective color at extreme height.',
    how: [
      'Design a small floating island with a structure or tree on it.',
      'Use saturated, clear color on the island itself.',
      'Push the clouds and sky below into hazy, desaturated blues and whites.',
    ],
    review: 'Did the color contrast between island and sky sell the sense of altitude?',
  },
  {
    id: 'ct-052',
    title: 'Volcanic Wasteland',
    goal: 'Practice an aggressive, hostile color environment.',
    how: [
      'Sketch a cracked, volcanic landscape with glowing fissures.',
      'Use dark, ashy neutrals for most of the terrain.',
      'Reserve hot oranges and reds strictly for the glowing cracks and sky.',
    ],
    review: 'Did limiting the hot color to only the cracks make them feel more dangerous?',
  },
  {
    id: 'ct-053',
    title: 'Frozen Tundra Outpost',
    goal: 'Practice cold, low-saturation environmental color with one warm break.',
    how: [
      'Sketch a small outpost structure in a snowy tundra.',
      'Keep the overall palette cold, pale, and low-saturation.',
      'Add one small warm light source — a window or fire — as the only warmth in the scene.',
    ],
    review: 'Did the single warm spot feel inviting against all that cold?',
  },
  {
    id: 'ct-054',
    title: 'Jungle Canopy Light',
    goal: 'Practice dappled, filtered light through dense foliage.',
    how: [
      'Sketch a simple jungle floor scene with overhead canopy.',
      'Use a deep, saturated green base for the shadowed foliage.',
      'Add small, scattered patches of warm yellow-green where direct light breaks through.',
    ],
    review: 'Did the scattered light patches feel random enough to read as natural?',
  },
  {
    id: 'ct-055',
    title: 'Haunted Forest Path',
    goal: 'Practice unsettling color through unnatural hue choices.',
    how: [
      'Sketch a simple forest path scene.',
      'Shift the expected greens toward sickly yellow-green or purple-green.',
      'Keep values dark overall, with one small, oddly-colored light source ahead.',
    ],
    review: 'Did the unnatural green shift feel eerie, or just like a color mistake?',
  },
  {
    id: 'ct-056',
    title: 'Space Station Interior',
    goal: 'Practice clean, artificial, single-source lighting in a built environment.',
    how: [
      'Sketch a simple corridor or control room interior.',
      'Choose one cool, artificial light color (sterile white, blue, or green).',
      'Keep shadows sharp-edged and the palette tightly controlled, with no warm ambient bounce.',
    ],
    review: 'Did the tight, artificial palette feel convincingly "manufactured" rather than natural?',
  },
  {
    id: 'ct-057',
    title: 'Coral Reef Depths',
    goal: 'Practice vivid color surviving in low, filtered underwater light.',
    how: [
      'Sketch a simple reef scene with coral shapes and a fish or two.',
      'Push the overall scene toward blue-green from depth and water filtering.',
      'Let isolated coral or fish keep small, surprising pops of saturated color.',
    ],
    review: 'Did the saturated accents feel like they were fighting the water, or working with it?',
  },
  {
    id: 'ct-058',
    title: 'Industrial Factory Haze',
    goal: 'Practice muddy, polluted atmospheric color.',
    how: [
      'Sketch a simple factory exterior with smokestacks.',
      'Use a muted, brownish-gray haze over the entire scene.',
      'Add one or two small, sickly colored lights (sodium orange, toxic green) as focal points.',
    ],
    review: 'Did the haze make the small light sources feel more isolated and important?',
  },
  {
    id: 'ct-059',
    title: 'Quiet Library Corner',
    goal: 'Practice warm, soft, intimate interior lighting.',
    how: [
      'Sketch a simple reading nook with a lamp and bookshelf.',
      'Use warm, gently saturated colors radiating from the lamp.',
      'Let the edges of the scene fall into soft, cool shadow.',
    ],
    review: 'Did the warm/cool falloff make the space feel cozy rather than just dim?',
  },
  {
    id: 'ct-060',
    title: 'Storm Rolling In',
    goal: 'Practice a dramatic shift in environmental color across one scene.',
    how: [
      'Sketch a simple landscape with a wide sky.',
      'Color one side of the sky bright and clear, the other side dark and stormy.',
      'Blend a transition zone between the two, including a shift in ground color to match.',
    ],
    review: 'Did the transition zone feel gradual enough, or too abrupt?',
  },

  // ───────────────────────────────────────────────
  // 5. MOOD & EMOTION
  // ───────────────────────────────────────────────
  {
    id: 'ct-061',
    title: 'Grief Palette',
    goal: 'Practice expressing heavy sorrow through color alone.',
    how: [
      'Choose a palette with no plan beyond "this feels like grief."',
      'Paint a small, simple scene — a chair, a doorway, a figure — using that palette.',
      'Resist adding obvious symbols like tears; let color carry the weight.',
    ],
    review: 'Which color choice surprised you by feeling more sorrowful than you expected?',
  },
  {
    id: 'ct-062',
    title: 'Joyful Chaos Palette',
    goal: 'Practice barely-controlled, energetic color combinations.',
    how: [
      'Choose 4-5 highly saturated, clashing colors.',
      'Paint a busy, celebratory scene — a party, parade, or festival.',
      'Let the colors feel slightly too much, on purpose.',
    ],
    review: 'Did the chaos read as "joyful," or did it tip into just "messy"? What\'s the difference?',
  },
  {
    id: 'ct-063',
    title: 'Anxiety in Color',
    goal: 'Practice unsettled, vibrating color relationships.',
    how: [
      'Choose two colors of similar value but high saturation contrast (so they vibrate visually).',
      'Paint a simple, otherwise calm scene using that uneasy pairing.',
      'Notice how the vibration affects the feeling of an ordinary subject.',
    ],
    review: 'Did the color vibration create discomfort even though the subject itself was neutral?',
  },
  {
    id: 'ct-064',
    title: 'Nostalgia Swatch',
    goal: 'Practice the faded, warm-toned color of remembered moments.',
    how: [
      'Think of a specific, ordinary memory — no need to depict it literally.',
      'Choose a slightly faded, warm-leaning palette that matches the feeling of remembering it.',
      'Paint any small scene using only that palette.',
    ],
    review: 'What made the palette feel like "memory" rather than just "vintage filter"?',
  },
  {
    id: 'ct-065',
    title: 'Triumph Palette',
    goal: 'Practice bold, confident, victorious color.',
    how: [
      'Choose a palette built around one strong, saturated hero color.',
      'Paint a simple figure in a triumphant pose, lit from below or behind for drama.',
      'Use gold, white, or bright accents to suggest light breaking through.',
    ],
    review: 'Did the lighting direction add to the triumphant feeling, or was color alone enough?',
  },
  {
    id: 'ct-066',
    title: 'Loneliness Study',
    goal: 'Practice using empty color space to express isolation.',
    how: [
      'Sketch one small figure in a large, mostly empty space.',
      'Use a desaturated, cool palette for the vast majority of the canvas.',
      'Keep the figure\'s colors only slightly more saturated than the surroundings — not heroic, just present.',
    ],
    review: 'Did the amount of empty colored space affect the loneliness more than the figure itself?',
  },
  {
    id: 'ct-067',
    title: 'Comfort Palette',
    goal: 'Practice warm, soft, safe-feeling color relationships.',
    how: [
      'Choose a palette of warm, low-contrast, gently muted colors.',
      'Paint a small interior scene — a blanket, a mug, a window seat.',
      'Avoid any sharp value or hue jumps; keep everything soft.',
    ],
    review: 'Did low contrast alone create the feeling of comfort, or did hue choice matter more?',
  },
  {
    id: 'ct-068',
    title: 'Rage Palette',
    goal: 'Practice hot, aggressive, high-contrast color.',
    how: [
      'Choose a palette built on saturated reds and near-black darks.',
      'Paint a simple figure or abstract shape with sharp, jagged edges.',
      'Push the value contrast as high as it will go.',
    ],
    review: 'Did sharp value contrast do more for the "rage" feeling than the red hue did?',
  },
  {
    id: 'ct-069',
    title: 'Wonder & Awe Palette',
    goal: 'Practice vast, glowing, expansive color.',
    how: [
      'Choose a palette with a wide value range and a glowing, luminous focal color.',
      'Paint a tiny figure looking up at something enormous — a sky, a structure, a creature.',
      'Let the glow dominate most of the canvas, dwarfing the figure.',
    ],
    review: 'Did the scale of color (not just the small figure) sell the sense of awe?',
  },
  {
    id: 'ct-070',
    title: 'Tense Standoff Palette',
    goal: 'Practice color that holds the viewer in suspended tension.',
    how: [
      'Choose two opposing colors of nearly equal visual weight.',
      'Paint two simple shapes or figures facing off, each claiming one color.',
      'Balance the composition so neither color visually "wins."',
    ],
    review: 'Did the equal color weight make the standoff feel more unresolved?',
  },
  {
    id: 'ct-071',
    title: 'Serenity Study',
    goal: 'Practice calm through narrow value and hue range.',
    how: [
      'Choose a tight, low-contrast palette within one color family.',
      'Paint a simple, still scene — water, sky, or an empty room.',
      'Avoid any single element that visually jumps out.',
    ],
    review: 'Did the lack of a focal point feel peaceful, or did the eye get bored?',
  },
  {
    id: 'ct-072',
    title: 'Heartbreak to Healing',
    goal: 'Practice an emotional arc across two linked palettes.',
    how: [
      'Paint a small scene using a "heartbreak" palette — cold, drained, heavy.',
      'Paint the same composition again with a "healing" palette — warmer, lighter, more open.',
      'Place them side by side as a before-and-after pair.',
    ],
    review: 'What single color change did the most to shift the mood from one state to the other?',
  },
  {
    id: 'ct-073',
    title: 'Childlike Wonder Palette',
    goal: 'Practice bright, simple, uncomplicated joyful color.',
    how: [
      'Choose 3-4 simple, high-saturation primary-leaning colors.',
      'Paint a small scene from a child\'s point of view — low to the ground, simple shapes.',
      'Keep the color choices direct and unsubtle, the way a child might choose them.',
    ],
    review: 'Did simplifying your color choices make the piece feel more innocent?',
  },
  {
    id: 'ct-074',
    title: 'Dread Palette',
    goal: 'Practice the slow-building unease of muted, sickly color.',
    how: [
      'Choose a palette of muted greens, browns, and grays with one faint wrong note.',
      'Paint an ordinary scene — a hallway, a doorway — using that palette.',
      'Let the "wrong" color stay subtle rather than obvious.',
    ],
    review: 'Did the subtlety of the wrong color make it more unsettling than something more obvious would be?',
  },
  {
    id: 'ct-075',
    title: 'Hope in the Dark',
    goal: 'Practice a single warm color carrying an entire emotional shift.',
    how: [
      'Paint a scene that\'s almost entirely dark and desaturated.',
      'Add exactly one small, warm, saturated point of light or color.',
      'Position it so it feels like the clear focal point of the whole piece.',
    ],
    review: 'Did one small warm point feel like enough to shift the entire mood of a dark scene?',
  },

  // ───────────────────────────────────────────────
  // 6. COLOR PSYCHOLOGY
  // ───────────────────────────────────────────────
  {
    id: 'ct-076',
    title: 'Trustworthy Mascot',
    goal: 'Practice using color psychology to build instant trust.',
    how: [
      'Design a simple mascot character with no backstory yet.',
      'Choose colors commonly associated with trust and reliability.',
      'Test the design by asking: would a stranger trust this character at a glance?',
    ],
    review: 'Which specific color did the most to build that sense of trust?',
  },
  {
    id: 'ct-077',
    title: 'Danger Without Red',
    goal: 'Practice conveying danger using an unconventional color choice.',
    how: [
      'Design a simple hazard or threat — a creature, sign, or object.',
      'Avoid red entirely in your palette.',
      'Use saturation, contrast, and an unexpected hue to still read as dangerous.',
    ],
    review: 'Did avoiding red make the danger feel more unusual, or less effective?',
  },
  {
    id: 'ct-078',
    title: 'Innocent vs. Sinister',
    goal: 'Practice using palette alone to flip a shape\'s perceived intent.',
    how: [
      'Draw one simple, neutral shape — a blob, a mask, a silhouette.',
      'Color one version with a palette that reads as innocent.',
      'Color a second version with the same shape but a palette that reads as sinister.',
    ],
    review: 'Did the shape itself stay neutral, or did it start to look different too?',
  },
  {
    id: 'ct-079',
    title: 'Luxury Palette',
    goal: 'Practice making an ordinary object feel expensive through color.',
    how: [
      'Choose any simple, everyday object.',
      'Paint it using a palette associated with luxury — deep saturation, metallics, restraint.',
      'Limit your color count; luxury palettes are rarely busy.',
    ],
    review: 'Did limiting the palette contribute to the luxurious feeling as much as the colors themselves?',
  },
  {
    id: 'ct-080',
    title: 'Discount Bin Palette',
    goal: 'Practice making the same object feel cheap through color.',
    how: [
      'Paint the same object from Luxury Palette again.',
      'Use a busier, lower-saturation, slightly mismatched palette this time.',
      'Compare the two versions directly.',
    ],
    review: 'What specific color decision flipped the object from "expensive" to "cheap"?',
  },
  {
    id: 'ct-081',
    title: 'Energy Drink Character',
    goal: 'Practice color psychology for high-energy excitement.',
    how: [
      'Design a small mascot or icon meant to feel electric and high-energy.',
      'Choose saturated, high-contrast colors associated with excitement.',
      'Keep the shapes sharp and dynamic to match the color energy.',
    ],
    review: 'Could the energy read even with the shapes removed, color alone?',
  },
  {
    id: 'ct-082',
    title: 'Sleep & Calm Palette',
    goal: 'Practice color psychology for rest and relaxation.',
    how: [
      'Design a small product or icon meant to feel calming and sleep-inducing.',
      'Choose soft, low-saturation, cool-leaning colors.',
      'Avoid any sharp contrast that might pull the eye too hard.',
    ],
    review: 'Did low contrast feel essential to the calm effect, or could saturation alone have done it?',
  },
  {
    id: 'ct-083',
    title: 'Fear Without Darkness',
    goal: 'Practice unsettling color in a bright, well-lit setting.',
    how: [
      'Sketch a simple, ordinary, brightly lit scene.',
      'Keep the values high-key and light throughout.',
      'Use hue choice alone — slightly wrong, slightly too saturated — to make it feel unsettling.',
    ],
    review: 'Was it harder to create unease without the usual crutch of darkness?',
  },
  {
    id: 'ct-084',
    title: 'Break the Color Rule',
    goal: 'Practice subverting an expected color association on purpose.',
    how: [
      'Pick one common color "rule" (e.g. purple means royalty, green means envy).',
      'Design a character or scene that deliberately breaks that rule.',
      'Make sure the rest of the design supports the new reading so it feels intentional, not accidental.',
    ],
    review: 'Did the broken rule feel fresh, or did it just read as a mistake?',
  },
  {
    id: 'ct-085',
    title: 'Cultural Color Swap',
    goal: 'Practice applying a color association from outside your own default assumptions.',
    how: [
      'Research one color association from a culture or tradition different from your own.',
      'Design a small piece — a character, object, or scene — applying that association.',
      'Reflect on how it differs from your usual instinct for that color.',
    ],
    review: 'How did learning a new association change how you saw a color you already knew well?',
  },
  {
    id: 'ct-086',
    title: 'Corporate Power Palette',
    goal: 'Practice color psychology for authority and control.',
    how: [
      'Design a simple character meant to read as a powerful executive or leader.',
      'Choose a restrained, high-contrast palette associated with authority.',
      'Avoid playful or soft colors that might undercut the power read.',
    ],
    review: 'Did restraint in the palette feel more powerful than boldness would have?',
  },
  {
    id: 'ct-087',
    title: 'Playful Villain',
    goal: 'Practice a villain palette that reads as fun rather than scary.',
    how: [
      'Design a simple villain character.',
      'Choose a bright, candy-like, non-threatening palette.',
      'Let the contrast between "villain" concept and "fun" palette create the character\'s personality.',
    ],
    review: 'Did the playful palette make the villain feel more menacing through contrast, or just goofy?',
  },
  {
    id: 'ct-088',
    title: 'Safe Room, Unsafe Room',
    goal: 'Practice using color alone to differentiate emotional safety.',
    how: [
      'Sketch two simple, near-identical rooms with the same furniture layout.',
      'Color one room with a palette that feels safe and welcoming.',
      'Color the other with a palette that feels unsafe, using only color to create the difference.',
    ],
    review: 'Could you tell the two rooms apart with the color removed?',
  },
  {
    id: 'ct-089',
    title: 'Color of Sound',
    goal: 'Practice translating an unrelated sense into color choice.',
    how: [
      'Pick two contrasting sounds in your mind — something loud and something quiet.',
      'Design one small abstract shape or character to represent each sound.',
      'Choose colors based purely on how loud or quiet they feel to you.',
    ],
    review: 'Did saturation end up mapping to volume more than hue did?',
  },
  {
    id: 'ct-090',
    title: 'Color of Taste',
    goal: 'Practice translating taste sensations into abstract color shapes.',
    how: [
      'Choose three tastes — sweet, sour, and bitter.',
      'Design a small abstract color shape for each, with no literal food imagery.',
      'Compare all three side by side.',
    ],
    review: 'Which taste was the easiest to translate into color, and which resisted you?',
  },

  // ───────────────────────────────────────────────
  // 7. LIGHTING & SPECIAL EFFECTS
  // ───────────────────────────────────────────────
  {
    id: 'ct-091',
    title: 'Magic Spell Glow',
    goal: 'Practice color logic for a fictional light source.',
    how: [
      'Invent a magic spell and choose its glow color.',
      'Sketch a figure casting it, with light falling outward from their hands.',
      'Let the glow color tint nearby surfaces and the figure\'s own skin.',
    ],
    review: 'Did the glow color feel consistent with the "type" of magic you imagined?',
  },
  {
    id: 'ct-092',
    title: 'Bioluminescent Creature',
    goal: 'Practice a creature that is its own light source.',
    how: [
      'Design a creature in near-total darkness.',
      'Choose one or two glowing color patterns on its body as the only light source.',
      'Let that glow illuminate the immediate surroundings, fading quickly into black.',
    ],
    review: 'Did the falloff from the glow feel fast enough to suggest a small, real light source?',
  },
  {
    id: 'ct-093',
    title: 'Neon Sign Reflection',
    goal: 'Practice colored light reflecting off a wet or reflective surface.',
    how: [
      'Sketch a simple night street scene with one colorful neon sign.',
      'Paint the sign itself in saturated color.',
      'Add a softened, smeared reflection of that color on a nearby wet surface.',
    ],
    review: 'Did the reflection need to be less saturated than the source to feel believable?',
  },
  {
    id: 'ct-094',
    title: 'Stained Glass Light',
    goal: 'Practice colored light passing through a translucent surface.',
    how: [
      'Sketch a simple interior with one stained glass window.',
      'Paint the window in a few saturated colors.',
      'Let pools of those same colors fall across the floor and nearby objects.',
    ],
    review: 'Did the colored light pools feel like they belonged to the same source as the window?',
  },
  {
    id: 'ct-095',
    title: 'Aurora Borealis Study',
    goal: 'Practice soft, shifting, multi-hue atmospheric light.',
    how: [
      'Sketch a simple dark landscape with a wide sky.',
      'Paint flowing bands of shifting green, blue, and purple light across the sky.',
      'Let a faint version of those colors tint the snow or ground below.',
    ],
    review: 'Did letting the ground pick up the sky\'s color make the effect feel more integrated?',
  },
  {
    id: 'ct-096',
    title: 'Energy Beam Color',
    goal: 'Practice the hot core and cooler glow of an energy effect.',
    how: [
      'Sketch a simple beam or blast shooting across a scene.',
      'Paint the very core of the beam near-white or the brightest color you have.',
      'Surround it with a graduated, cooler-toned glow that fades into the background.',
    ],
    review: 'Did the white-hot core make the surrounding glow feel more powerful by contrast?',
  },
  {
    id: 'ct-097',
    title: 'Portal Light Study',
    goal: 'Practice an otherworldly light source bleeding into a normal scene.',
    how: [
      'Sketch a simple, ordinary room or landscape.',
      'Add a glowing portal to "somewhere else" with its own distinct color identity.',
      'Let the portal\'s color spill onto nearby surfaces, fighting against the room\'s normal lighting.',
    ],
    review: 'Did the two competing light colors make the portal feel like it didn\'t belong there?',
  },
  {
    id: 'ct-098',
    title: 'Holographic Surface',
    goal: 'Practice the shifting, rainbow-edged quality of holographic material.',
    how: [
      'Design a simple object — a card, a panel, a piece of clothing.',
      'Paint its base in a neutral color.',
      'Add thin, shifting streaks of rainbow color along its edges and curves to suggest a holographic finish.',
    ],
    review: 'Did keeping the rainbow streaks thin make them feel more convincing than broad color washes?',
  },
  {
    id: 'ct-099',
    title: 'Lava Glow Study',
    goal: 'Practice the intense, churning color of molten rock.',
    how: [
      'Sketch a simple cracked, rocky terrain with exposed lava.',
      'Paint the lava itself with hot oranges, yellows, and near-white highlights.',
      'Let a faint warm glow bounce onto the rock surfaces nearest the lava.',
    ],
    review: 'Did the bounce light onto the rock help sell the heat, beyond the lava\'s own color?',
  },
  {
    id: 'ct-100',
    title: 'Disco Ball Fragmented Light',
    goal: 'Practice scattered, multicolored point lighting.',
    how: [
      'Sketch a simple dark room with a single disco ball.',
      'Scatter small, sharp-edged dots of varied saturated color across the walls and floor.',
      'Keep the dots irregular in size and spacing to feel like real scattered light.',
    ],
    review: 'Did the irregular spacing of the light dots make the effect feel more dynamic?',
  },
  {
    id: 'ct-101',
    title: 'Thermal Vision Palette',
    goal: 'Practice an entirely invented, non-realistic light-to-color mapping.',
    how: [
      'Sketch a simple scene with a figure and a few objects of varying "temperature."',
      'Assign a heat-based color scale — cool blues for cold objects, hot reds/whites for warm ones.',
      'Recolor the entire scene using only that thermal logic, ignoring normal local color.',
    ],
    review: 'Did committing fully to the thermal logic make the scene feel more convincingly alien?',
  },
  {
    id: 'ct-102',
    title: 'Ghostly Glow Study',
    goal: 'Practice a cool, translucent light source within a normal scene.',
    how: [
      'Sketch a simple dark room with one ghostly figure.',
      'Give the figure a faint, cool, semi-transparent glow.',
      'Let that glow softly tint the nearest shadows without overpowering the room\'s normal color.',
    ],
    review: 'Did keeping the glow subtle make it feel eerier than a bright glow would have?',
  },
  {
    id: 'ct-103',
    title: 'Lightning Flash Study',
    goal: 'Practice an instant, extreme shift in scene-wide color and value.',
    how: [
      'Sketch a simple outdoor scene at night, in its normal dark palette.',
      'Paint a second version of the same scene at the instant of a lightning flash.',
      'Push the flash version almost entirely toward bright, cool, high-contrast color.',
    ],
    review: 'Did the contrast between the two versions feel sudden and bright enough to read as a flash?',
  },
  {
    id: 'ct-104',
    title: 'Crystal Refraction Study',
    goal: 'Practice color splitting and bending through a transparent object.',
    how: [
      'Sketch a simple crystal or gem catching light.',
      'Paint a single white or warm light source hitting it.',
      'Add small, sharp streaks of split rainbow color where the light exits the crystal\'s facets.',
    ],
    review: 'Did keeping the rainbow splits small and sharp make them feel more like real refraction?',
  },
  {
    id: 'ct-105',
    title: 'Screen-Glow Face Study',
    goal: 'Practice the specific cool, flickering light of a screen on skin.',
    how: [
      'Sketch a simple face looking at an off-canvas phone or monitor.',
      'Light the face primarily from below with a cool, slightly blue-green glow.',
      'Keep the rest of the surroundings dark, with only a faint spill of that same glow.',
    ],
    review: 'Did the upward, cool light direction feel distinct from typical overhead lighting?',
  },

  // ───────────────────────────────────────────────
  // 8. OBSERVATION & PALETTE EXTRACTION
  // ───────────────────────────────────────────────
  {
    id: 'ct-106',
    title: 'Grocery Store Palette Hunt',
    goal: 'Practice finding usable palettes in unglamorous, everyday places.',
    how: [
      'Next time you\'re at a grocery store (or recall one from memory), notice a product display.',
      'Pull 4-5 colors directly from what you observed.',
      'Design a small character or scene using only that extracted palette.',
    ],
    review: 'Did the "boring" source location produce a more interesting palette than expected?',
  },
  {
    id: 'ct-107',
    title: 'Outfit Palette Steal',
    goal: 'Practice extracting a palette from real-world clothing.',
    how: [
      'Look at an outfit you\'re wearing today or one you remember clearly.',
      'Extract its 3-4 dominant colors as clean swatches.',
      'Design a small character or object using that exact extracted palette.',
    ],
    review: 'Did the outfit\'s palette feel intentional once you saw it as swatches, even if it wasn\'t designed?',
  },
  {
    id: 'ct-108',
    title: 'Today\'s Sky Palette Log',
    goal: 'Practice direct color observation from life.',
    how: [
      'Look outside right now (or recall the sky from earlier today).',
      'Mix or pick 4-5 swatches that genuinely match what you saw.',
      'Use those exact swatches to paint a small unrelated scene.',
    ],
    review: 'Was the real sky palette more muted or more varied than you remembered it being?',
  },
  {
    id: 'ct-109',
    title: 'Meal Palette Extraction',
    goal: 'Practice finding palettes in food.',
    how: [
      'Look at your next meal, or recall a recent one in detail.',
      'Extract 4-5 colors directly from the food and plate.',
      'Design a small character or pattern using that palette.',
    ],
    review: 'Did the food palette feel appetizing, or surprisingly unappealing once isolated from the food itself?',
  },
  {
    id: 'ct-110',
    title: 'Architecture Palette Walk',
    goal: 'Practice extracting palettes from built environments.',
    how: [
      'Picture a building you know well — your home, workplace, or a local landmark.',
      'Extract its dominant exterior colors as clean swatches.',
      'Design a small environment or object using that palette.',
    ],
    review: 'Did the building\'s palette feel more deliberate or more accidental once extracted?',
  },
  {
    id: 'ct-111',
    title: 'Album Cover Palette Extraction',
    goal: 'Practice extracting and reapplying an existing design palette.',
    how: [
      'Think of an album cover you know well.',
      'Pull its 4-5 dominant colors from memory as best you can.',
      'Design an unrelated character or scene using that exact palette.',
    ],
    review: 'Did the palette carry the original mood even applied to a completely different subject?',
  },
  {
    id: 'ct-112',
    title: 'Houseplant Palette Study',
    goal: 'Practice close, careful color observation of a single natural object.',
    how: [
      'Find a houseplant or any plant nearby (or recall one in detail).',
      'Look closely for unexpected colors beyond just "green" — yellows, reds, blues in the shadows.',
      'Paint a small study capturing the full, surprising range you actually see.',
    ],
    review: 'How many non-green colors did you find once you looked closely?',
  },
  {
    id: 'ct-113',
    title: 'Vintage Photo Palette Extraction',
    goal: 'Practice extracting the specific faded quality of old photography.',
    how: [
      'Recall or reference an old, faded photograph.',
      'Extract its washed-out, shifted palette as clean swatches.',
      'Apply that palette to a brand-new, unrelated design.',
    ],
    review: 'What specific quality made the palette read as "old" rather than just "muted"?',
  },
  {
    id: 'ct-114',
    title: 'Stranger\'s Outfit Palette',
    goal: 'Practice quick, respectful color observation of people around you.',
    how: [
      'Next time you\'re out, notice someone\'s color combination (clothing only, no need to sketch them).',
      'Jot down or mix the 3-4 colors you remember.',
      'Design a small character using that observed combination.',
    ],
    review: 'Did the real-world combination feel bolder or safer than something you\'d invent yourself?',
  },
  {
    id: 'ct-115',
    title: 'Nature Walk Palette Diary',
    goal: 'Practice building a personal palette library from observation.',
    how: [
      'Recall three different natural objects — a rock, a leaf, a patch of sky.',
      'Extract a small palette from each individually.',
      'Keep all three side by side as a reference diary entry.',
    ],
    review: 'Which of the three palettes surprised you the most?',
  },
  {
    id: 'ct-116',
    title: 'Packaging Design Palette Extraction',
    goal: 'Practice analyzing commercial color psychology through extraction.',
    how: [
      'Think of a product package you see often.',
      'Extract its palette and note which colors are dominant vs. accent.',
      'Redesign a different, unrelated product using that same color ratio.',
    ],
    review: 'Did keeping the same color ratio (not just the colors) carry over the brand feeling?',
  },
  {
    id: 'ct-117',
    title: 'Cartoon Screenshot Palette Extraction',
    goal: 'Practice extracting palette logic from animation.',
    how: [
      'Recall a specific scene from a cartoon or animated film you know well.',
      'Extract its dominant palette and rough color ratios.',
      'Apply that palette to an original character or scene of your own.',
    ],
    review: 'Did the extracted palette still feel appealing once separated from the original scene?',
  },
  {
    id: 'ct-118',
    title: 'Time of Day Palette Series',
    goal: 'Practice observing how one place changes palette across a day.',
    how: [
      'Pick one familiar view — a window, a street, a room.',
      'Recall or imagine its palette at three times: morning, midday, and night.',
      'Paint three small swatches or thumbnails, one per time of day.',
    ],
    review: 'Which time of day produced the most dramatically different palette?',
  },
  {
    id: 'ct-119',
    title: 'Weather Palette Extraction',
    goal: 'Practice connecting weather conditions to specific color shifts.',
    how: [
      'Recall a clear day and a stormy day in the same location.',
      'Extract a palette for each.',
      'Compare the two side by side and note exactly what shifted.',
    ],
    review: 'Did saturation or value change more dramatically between the two weather palettes?',
  },
  {
    id: 'ct-120',
    title: 'City vs. Nature Palette Comparison',
    goal: 'Practice contrasting built and natural color environments.',
    how: [
      'Recall one city scene and one nature scene you know well.',
      'Extract a 4-5 color palette from each.',
      'Lay both palettes side by side and write one observation about the difference.',
    ],
    review: 'Was the city palette more saturated or more muted than the nature one — and did that surprise you?',
  },

  // ───────────────────────────────────────────────
  // 9. RECOLOR CHALLENGES
  // ───────────────────────────────────────────────
  {
    id: 'ct-121',
    title: 'Recolor Your Own Old Piece',
    goal: 'Practice revisiting past work with current color skills.',
    how: [
      'Find an older piece of your own art.',
      'Duplicate it and strip or ignore the original colors.',
      'Recolor it using everything you\'ve learned since you first made it.',
    ],
    review: 'What\'s the single biggest color decision you\'d change from the original?',
  },
  {
    id: 'ct-122',
    title: 'Recolor for a Different Season',
    goal: 'Practice shifting an existing piece\'s palette to a new season.',
    how: [
      'Choose any existing piece, yours or a quick new sketch.',
      'Identify what season its current palette implies.',
      'Recolor it entirely for a different season, adjusting temperature and saturation.',
    ],
    review: 'Did the composition still make sense in the new season, or did anything feel wrong?',
  },
  {
    id: 'ct-123',
    title: 'Recolor for a Different Time Period',
    goal: 'Practice shifting palette to imply a different era.',
    how: [
      'Choose a simple character or scene.',
      'Recolor it once to feel like it belongs decades in the past.',
      'Recolor it again to feel futuristic, keeping the design itself unchanged.',
    ],
    review: 'Which era felt easiest to convey through color alone?',
  },
  {
    id: 'ct-124',
    title: 'Recolor as if Underwater',
    goal: 'Practice applying an environmental color filter to an unrelated piece.',
    how: [
      'Choose a simple existing piece not set underwater.',
      'Shift its entire palette toward blue-green, as if filtered through deep water.',
      'Soften edges slightly to support the illusion.',
    ],
    review: 'Did the underwater shift change the implied mood of the piece, beyond just the setting?',
  },
  {
    id: 'ct-125',
    title: 'Recolor to Flip the Mood',
    goal: 'Practice using color alone to invert a piece\'s emotional read.',
    how: [
      'Choose a piece with a clear mood — happy or sad, calm or tense.',
      'Identify the palette choices driving that mood.',
      'Recolor it to convey the opposite mood, changing nothing but color.',
    ],
    review: 'Did the composition support the new mood, or did it feel like it was fighting the colors?',
  },
  {
    id: 'ct-126',
    title: 'Recolor a Villain as a Hero',
    goal: 'Practice using palette to recontextualize a character\'s morality.',
    how: [
      'Choose or design a clearly villainous character.',
      'Keep every design element identical.',
      'Recolor them with a clearly heroic palette and see how the read changes.',
    ],
    review: 'Did the design elements you thought were "evil" turn out to be color-dependent after all?',
  },
  {
    id: 'ct-127',
    title: 'Recolor Using Only 3 Colors from the Original',
    goal: 'Practice simplifying an existing palette without losing the design\'s clarity.',
    how: [
      'Choose a piece with a busy, varied palette.',
      'Select only 3 colors from the original to keep.',
      'Recolor the entire piece using only those 3, adjusting value as needed.',
    ],
    review: 'Did the simplified version read more clearly, or did it lose something important?',
  },
  {
    id: 'ct-128',
    title: 'Recolor for Nighttime',
    goal: 'Practice shifting a daytime scene\'s palette to night.',
    how: [
      'Choose or sketch a simple daytime scene.',
      'Recolor it for night, dropping overall value and shifting light sources.',
      'Decide where artificial light would now take over from the sun.',
    ],
    review: 'Did you need to add any new light sources to make the night version make sense?',
  },
  {
    id: 'ct-129',
    title: 'Recolor for a Theme Park Ride',
    goal: 'Practice an exaggerated, heightened recolor of an ordinary scene.',
    how: [
      'Choose a simple, ordinary scene.',
      'Recolor it as if it were a themed attraction — saturated, dramatic, slightly unreal.',
      'Push saturation and lighting further than you normally would.',
    ],
    review: 'At what point did "heightened" start to feel like "too much"?',
  },
  {
    id: 'ct-130',
    title: 'Recolor an Animal into a Fictional Creature',
    goal: 'Practice using palette to push a realistic subject into fantasy.',
    how: [
      'Choose a real animal as your base reference.',
      'Keep its anatomy completely realistic.',
      'Recolor it with a palette no real version of that animal would have.',
    ],
    review: 'How far could you push the palette before the animal stopped reading as "real, just colorful" and started reading as "magical"?',
  },
  {
    id: 'ct-131',
    title: 'Recolor a Fairy Tale Character for Sci-Fi',
    goal: 'Practice using palette to shift genre without changing design.',
    how: [
      'Choose a classic fairy tale character archetype.',
      'Keep their silhouette and key features the same.',
      'Recolor them with a palette that reads as science fiction rather than fantasy.',
    ],
    review: 'Did the genre shift feel convincing from color alone, or did the silhouette fight it?',
  },
  {
    id: 'ct-132',
    title: 'Remove the Color Cliché',
    goal: 'Practice identifying and replacing an overused color association.',
    how: [
      'Choose a subject with an obvious color cliché (green alien, red devil, etc.).',
      'Identify exactly what the cliché is.',
      'Recolor the subject avoiding that cliché entirely, while keeping it recognizable.',
    ],
    review: 'Did removing the cliché make the design feel more original, or did it lose clarity?',
  },
  {
    id: 'ct-133',
    title: 'Recolor a Logo Shape for a New Mood',
    goal: 'Practice applying brand-style color thinking to abstract shapes.',
    how: [
      'Design or choose one simple, abstract icon-like shape.',
      'Recolor it once for a "playful" brand mood.',
      'Recolor it again for a "serious" brand mood, same shape both times.',
    ],
    review: 'Did the shape itself start to feel different depending on the mood, even though it never changed?',
  },
  {
    id: 'ct-134',
    title: 'Recolor the Same Scene for Two Rival Factions',
    goal: 'Practice showing perspective or ownership through recoloring.',
    how: [
      'Sketch one simple environment — a flag, banner, or building facade works well.',
      'Recolor it once in Faction A\'s colors.',
      'Recolor it again in Faction B\'s colors, same composition both times.',
    ],
    review: 'Did the environment feel like it belonged to a different group purely from the recolor?',
  },
  {
    id: 'ct-135',
    title: 'Recolor for Maximum Contrast vs. Maximum Harmony',
    goal: 'Practice the two extremes of palette relationship on one design.',
    how: [
      'Choose one simple character or object design.',
      'Recolor it once pushing for the most jarring contrast you can manage while staying readable.',
      'Recolor it again pushing for the smoothest, most harmonious palette possible.',
    ],
    review: 'Which version did you personally find more visually interesting, and why?',
  },

  // ───────────────────────────────────────────────
  // 10. VISUAL STORYTELLING & COLOR SCRIPTING
  // ───────────────────────────────────────────────
  {
    id: 'ct-136',
    title: 'Three-Panel Color Script',
    goal: 'Practice telling a story arc through palette shift alone.',
    how: [
      'Invent a simple three-beat story — beginning, middle, end.',
      'Paint three small, abstract color thumbnails, one per beat, with no characters or objects.',
      'Make sure the mood progression is readable from the thumbnails alone.',
    ],
    review: 'Could someone guess the shape of your story just from the three color thumbnails?',
  },
  {
    id: 'ct-137',
    title: 'Color Script for an Argument',
    goal: 'Practice rising tension through color escalation.',
    how: [
      'Imagine a conversation that escalates into an argument.',
      'Paint three small panels: calm start, rising tension, peak conflict.',
      'Escalate saturation and contrast, not just darkness, across the three.',
    ],
    review: 'Did contrast or saturation do more to convey the escalating tension?',
  },
  {
    id: 'ct-138',
    title: 'Color Script for a Reunion',
    goal: 'Practice warmth and relief through palette shift.',
    how: [
      'Imagine two characters reuniting after time apart.',
      'Paint a "before" panel that feels distant or uncertain in palette.',
      'Paint an "after" panel that feels warm and resolved, same composition.',
    ],
    review: 'What single color shift carried the most emotional weight in the transition?',
  },
  {
    id: 'ct-139',
    title: 'Calm Before the Storm',
    goal: 'Practice foreshadowing through subtle color cues.',
    how: [
      'Paint a peaceful scene that nonetheless contains a quiet warning sign.',
      'Keep the overall palette calm and pleasant.',
      'Add one small, subtly "off" color note that hints at danger to come.',
    ],
    review: 'Was the warning sign noticeable enough on a first glance, or only on closer inspection?',
  },
  {
    id: 'ct-140',
    title: 'Escalating Danger, Three Panels',
    goal: 'Practice a clear color progression toward threat.',
    how: [
      'Paint three small panels of the same simple scene at increasing danger levels.',
      'Shift the palette progressively darker, hotter, or more saturated across the three.',
      'Make sure each panel reads as one clear step up from the last.',
    ],
    review: 'Did the steps feel evenly paced, or did one panel jump too far ahead of the others?',
  },
  {
    id: 'ct-141',
    title: 'One Character, One Day',
    goal: 'Practice tracking a single character\'s palette through changing light.',
    how: [
      'Design one simple character.',
      'Paint them three times: morning light, harsh noon light, and night.',
      'Keep the character\'s base design identical; let only the lighting palette shift.',
    ],
    review: 'Did the character feel like they had a different personality depending on the time of day?',
  },
  {
    id: 'ct-142',
    title: 'Color as Plot Twist',
    goal: 'Practice using a color reveal to imply a narrative turn.',
    how: [
      'Design a simple scene with one hidden element (a door, a figure, an object).',
      'Paint the "before" version with that element colored to blend in, unnoticed.',
      'Paint an "after" version where that element\'s color suddenly stands out, revealing it.',
    ],
    review: 'Did the contrast in the reveal panel feel like a satisfying "aha," or too subtle to land?',
  },
  {
    id: 'ct-143',
    title: 'Silent Film Color Script',
    goal: 'Practice telling a complete story using only color blocks.',
    how: [
      'Plan a simple three-or-four-beat story in your head.',
      'Paint a sequence of pure color blocks or gradients — no characters, no objects.',
      'Test whether the emotional arc is readable from color and shape alone.',
    ],
    review: 'Which part of the story was hardest to convey without any literal imagery?',
  },
  {
    id: 'ct-144',
    title: 'Two Endings',
    goal: 'Practice implying divergent outcomes through palette alone.',
    how: [
      'Paint one ambiguous scene that could end well or badly.',
      'Recolor it once to imply a hopeful outcome.',
      'Recolor it again, same composition, to imply a grim outcome.',
    ],
    review: 'Did the composition stay genuinely ambiguous, or did it lean toward one ending before you even added color?',
  },
  {
    id: 'ct-145',
    title: 'Color Script for a Journey',
    goal: 'Practice showing transformation across a physical journey through palette.',
    how: [
      'Invent a simple journey from one location to another.',
      'Paint a small thumbnail of the starting location\'s palette.',
      'Paint a small thumbnail of the destination\'s palette, showing how far the world (and mood) has shifted.',
    ],
    review: 'Did the two palettes feel like they belonged to the same story, or two unrelated ones?',
  },
  {
    id: 'ct-146',
    title: 'Memory vs. Reality',
    goal: 'Practice the color difference between how something is remembered and how it actually was.',
    how: [
      'Sketch one simple scene.',
      'Paint a "memory" version with a soft, idealized, nostalgic palette.',
      'Paint a "reality" version of the same scene with a harsher, more accurate palette.',
    ],
    review: 'What did the memory version leave out or soften that the reality version revealed?',
  },
  {
    id: 'ct-147',
    title: 'Friend Becomes Foe',
    goal: 'Practice a palette shift that tracks a relationship turning hostile.',
    how: [
      'Design one character meant to start as an ally.',
      'Paint an "ally" version with a warm, approachable palette.',
      'Paint a "foe" version of the same design with a colder, more hostile palette.',
    ],
    review: 'Did the shift feel gradual enough to be believable, or did it feel like a different character entirely?',
  },
  {
    id: 'ct-148',
    title: 'World-Building Palette Bible',
    goal: 'Practice planning consistent regional palettes for a fictional world.',
    how: [
      'Invent three distinct locations within one fictional world.',
      'Assign each location its own clear, distinct palette.',
      'Paint a small thumbnail swatch set for each, side by side, as a reference sheet.',
    ],
    review: 'Do the three palettes feel like they belong to the same world despite being different?',
  },
  {
    id: 'ct-149',
    title: 'Opening Shot Palette',
    goal: 'Practice designing a color script for a story\'s very first impression.',
    how: [
      'Imagine an opening shot for a film that doesn\'t exist yet.',
      'Decide what mood that opening needs to establish.',
      'Paint a small color thumbnail capturing that opening shot\'s palette.',
    ],
    review: 'Does the palette alone make you want to know what happens next?',
  },
  {
    id: 'ct-150',
    title: 'Final Frame Palette',
    goal: 'Practice closing a color script with a deliberate contrast to the opening.',
    how: [
      'Using the same imaginary film from Opening Shot Palette, design its final frame.',
      'Choose a palette that intentionally contrasts with or completes your opening palette.',
      'Place the two thumbnails side by side as a full color script bookend.',
    ],
    review: 'Does the journey from opening to closing palette feel like a complete emotional arc?',
  },
]

export const COLOR_THEORY: Fundamental = {
  id: 'color-theory',
  name: 'Color Theory',
  tagline: 'Harmony, palette, mood, and how color tells a story.',
  exercises: colorTheory,
}
