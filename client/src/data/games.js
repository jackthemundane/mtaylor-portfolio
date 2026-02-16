export const GAMES_DATA = [
  // ==========================================
  // PHASE 1: THE ENGINE FOUNDATIONS
  // ==========================================
  {
    id: "pong",
    title: "Pong",
    status: "in_progress", // Currently Active
    desc: "Classic paddle-and-ball with simple collision and speed-up.",
    scope: "1 arena, 2 paddles, 1 ball, score to 11, basic UI.",
    focus: "Game loop, input, collision responses, basic UI/state.",
    progress: 15,
    storyPhases: [
      {
        title: "Phase 1: Core Physics & MVP",
        stories: [
          "As a system I need a board for the game pieces to live on, including walls, floor, and a camera.",
          "As a player I need to be able to move a paddle up and down using a keyboard.",
          "As a system I need a ball that bounces off the walls and the paddles without losing momentum.",
          "As a system I want the ball's reflection angle to change based on where it hits the paddle."
        ]
      },
      {
        title: "Phase 2: The Game Loop",
        stories: [
          "As a system I want to be able to register a goal when the ball passes through a goal post or leaves the screen.",
          "As a system I need to track the score for both players/sides.",
          "As a player I need to see the score for both sides displayed on the UI.",
          "As a player I want the game to end and declare a winner once a specific score is reached.",
          "As a player I want a start-delay (3-2-1 GO!) before the ball launches so I can get ready."
        ]
      },
      {
        title: "Phase 3: UI & Flow",
        stories: [
          "As a player I need to see a main menu where I can select my game mode and view controls.",
          "As a player I want to be able to pause the game at any time.",
          "As a player I want to be able to Restart or Quit the game from the Pause or Win screens."
        ]
      },
      {
        title: "Phase 4: Polish",
        stories: [
          "As a player I want to see visual feedback (screen shake or particles) when a goal is scored.",
          "As a player I want to hear sound effects for hits/goals.",
          "As a player I want to be able to change the board background from a pre-selected set of themes.",
          "As a player I want to perform a 'dash' or 'smash' action to lunge the paddle forward and hit the ball harder.",
          "As a player I want to control my paddle using a gamepad/controller."
        ]
      },
      {
        title: "Phase 5: Adding Computer Opponent",
        stories: [
          "As a player I want to choose between '1 Player' (vs Computer) and '2 Player' (Local PvP) modes from the main menu.",
          "As a player I want to play against a computer opponent that tracks the ball and attempts to block it."
        ]
      },
      {
        title: "Phase 6: Extra",
        stories: [
          "As a player I want to hear looping background music.",
          "As a player I want to be able to toggle the music and sound effects on/off from the pause menu.",
          "As a system I want to save the player's settings (Volume, Background choice) so they persist between sessions."
        ]
      }
    ]
  },
  {
    id: "breakout",
    title: "Breakout",
    status: "planning",
    desc: "Paddle keeps ball in play while clearing brick grid.",
    scope: "1 level, 3 lives, 3 brick types, win/lose screens.",
    focus: "Level data, destructible objects, powerups optional, level progression.",
    progress: 0,
    storyPhases: [
      {
        title: "Planning Phase",
        stories: [
          "Define 3 brick types with health values",
          "Implement power-up drop logic",
          "Design Win/Lose state machines",
          "Create level data structure (JSON)"
        ]
      }
    ]
  },
  {
    id: "river_raid",
    title: "River Raid",
    status: "todo",
    desc: "Top-down scrolling shooter with navigation constraints + resource meter.",
    scope: "Endless (or 2–3 min run), scrolling river, fuel, 3 enemy types.",
    focus: "Scrolling world, spawn systems, hitboxes, difficulty ramp.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 2: 3D MOVEMENT & STATE MANAGEMENT
  // ==========================================
  {
    id: "donkey_kong",
    title: "Donkey Kong",
    status: "todo",
    desc: "Platform climb with timed hazards and simple movement states.",
    scope: "1 level, ladders, barrels, 1 hazard pattern, 1 win condition.",
    focus: "Platformer physics, state machine (run/jump/climb), hazard timing.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "mega_man",
    title: "Mega Man",
    status: "todo",
    desc: "Tight side-scroller with jump + projectile combat and health.",
    scope: "1 stage, 3 enemy types, 1 mini-boss (optional), basic shooting.",
    focus: "Responsive controls, enemy AI patterns, combat feel, tuning.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "metroid",
    title: "Metroid",
    status: "todo",
    desc: "Exploration loop with gated progression and backtracking.",
    scope: "Small map (10–15 rooms), 2 upgrades (double-jump + key/door), minimap.",
    focus: "World structure, save/doors/rooms, gating design, navigation UX.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 3: FIRST PERSON & ADVANCED PHYSICS
  // ==========================================
  {
    id: "firewatch",
    title: "Firewatch",
    status: "todo",
    desc: "First-person exploration with narrative triggers and environmental storytelling.",
    scope: "1 small environment, walk + look + interact, 10–15 dialogue beats.",
    focus: "Trigger systems, dialogue tools, pacing, 'story through space'.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "portal",
    title: "Portal",
    status: "todo",
    desc: "First-person puzzles built from consistent physics rules.",
    scope: "5–8 puzzle rooms, 2 portal surfaces rulesets, cubes/buttons/doors.",
    focus: "Rule design, puzzle teaching curve, player onboarding, playtesting.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "quake",
    title: "Quake",
    status: "todo",
    desc: "Fast FPS feel test: movement + shooting + pickups.",
    scope: "1 arena, basic movement (strafe/jump), 2 weapons, 3 enemy types.",
    focus: "FPS controller feel, hitscan/projectiles, enemy navigation, feedback.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "half_life",
    title: "Half-Life",
    status: "todo",
    desc: "FPS with story delivered through in-world events (not cutscenes).",
    scope: "20–30 min 'vertical slice': scripted moments, 1 companion beat, 1 set-piece.",
    focus: "Scripting/events, sequencing, level pacing, narrative integration.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 4: ACTION & OPTIMIZATION
  // ==========================================
  {
    id: "link_to_the_past",
    title: "Link to the Past",
    status: "todo",
    desc: "Top-down action-adventure with combat, puzzles, and progression.",
    scope: "Overworld slice + 1 dungeon (6–10 rooms), 1 key item, 1 boss.",
    focus: "Room design, lock-and-key structure, readable combat, UX clarity.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "vampire_survivors",
    title: "Vampire Survivors",
    status: "todo",
    desc: "Auto-attacking survival with escalating hordes and build synergies.",
    scope: "10-minute run, 8 weapons/upgrades, 20–30 enemies on screen.",
    focus: "Performance, economy curves, RNG + choice design, readability.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "double_dragon",
    title: "Double Dragon",
    status: "todo",
    desc: "Side-scrolling beat ’em up with crowd control and spacing.",
    scope: "1–2 stages, 6 enemy types, combo + grab + throw, co-op optional.",
    focus: "Melee combat feel, animation timing, enemy waves, co-op design.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 5: JRPG
  // ==========================================
  {
    id: "dragon_warrior",
    title: "Dragon Warrior",
    status: "todo",
    desc: "Early JRPG loop: talk → travel → fight → level → gear → boss.",
    scope: "1 town, 1 dungeon, 6 monsters, simple quest loop, turn-based battles.",
    focus: "RPG systems, balancing, data-driven content, progression pacing.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "final_fantasy",
    title: "Final Fantasy",
    status: "todo",
    desc: "Party-based turn JRPG with abilities, items, and narrative beats.",
    scope: "1–2 hour slice: party of 3, 6–8 battles, 1 dungeon, 1 boss.",
    focus: "Battle UI/flow, party roles, encounter design, economy.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 6: COMPLEX LOGIC & STRATEGY
  // ==========================================
  {
    id: "ff_tactics",
    title: "Final Fantasy Tactics",
    status: "todo",
    desc: "Grid tactics with positioning, turn order, and build choices.",
    scope: "3–5 tactical battles, 6 units, 4 job types, small gear list.",
    focus: "Turn system, AI decision-making, map design, balance complexity.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "xcom",
    title: "XCOM",
    status: "todo",
    desc: "Tactical missions plus base progression that changes future fights.",
    scope: "3 missions + light meta layer, permadeath optional.",
    focus: "Strategy + tactics loop, uncertainty, risk/reward, meta pacing.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 7: PHYSICS POLISH & SIMULATION
  // ==========================================
  {
    id: "golf",
    title: "Golf",
    status: "todo",
    desc: "Physics-ish golf with consistent shot outcome rules and course reading.",
    scope: "3 holes, simple swing meter, wind + lie modifiers, scoring + replay.",
    focus: "Input-to-outcome tuning, physics approximation, UX for aiming.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 8: THE TRIPLE-A SYSTEMS
  // ==========================================
  {
    id: "skyrim",
    title: "Skyrim",
    status: "todo",
    desc: "Open-world 'do what you want' slice with exploration-driven discovery.",
    scope: "1 small open zone, 5 quests, 2 factions, light inventory/crafting.",
    focus: "Quest systems, world interactions, systemic design, content density.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "horizon",
    title: "Horizon",
    status: "todo",
    desc: "Third-person hunting loop: scout → craft → set traps → precision combat.",
    scope: "1 biome, 2 machine types, trap/weakpoint combat, stealth grass.",
    focus: "Readable enemy weakpoints, combat telegraphs, encounter arenas.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "baldurs_gate",
    title: "Baldur's Gate",
    status: "todo",
    desc: "Party RPG focused on story, choices, and character builds.",
    scope: "Party of 4, 1 hub town, 1 dungeon, dialogue choices with consequences.",
    focus: "Dialogue systems, branching states, party management, quest logic.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  }
];