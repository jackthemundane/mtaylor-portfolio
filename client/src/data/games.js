export const GAMES_DATA = [
  // ==========================================
  // PHASE 1: THE ENGINE FOUNDATIONS
  // ==========================================
  {
    id: "pong",
    title: "Intro Arcade",
    inspiration: "Pong",
    status: "in_progress",
    estimate: 1,
    githubUrl: "https://github.com/jackthemundane/godot-pong", 
    desc: "The 'Hello World' of game dev. My intent is to develop a full-fledged version of <span class='text-cyan-400 font-bold'>Pong</span> with a title menu, pause system, and 2-player controller support.",
    scope: "1 arena, 2 paddles, 1 ball, score to 5, and a complete UI flow (Start/Pause/Game Over).",
    focus: "Functioning menus, interface states, and basic collision physics.",
    progress: 15,
    storyPhases: [
      {
        title: "Phase 1: Core Physics & MVP (Focus: Physical Interactions)",
        stories: [
          "As a system I need a board for the game pieces to live on, including walls, floor, and a camera.",
          "As a player I need to be able to move a paddle up and down using a keyboard.",
          "As a system I need a ball that bounces off the walls and the paddles without losing momentum.",
          "As a system I want the ball's reflection angle to change based on where it hits the paddle (e.g., sharper angle at the edges)."
        ]
      },
      {
        title: "Phase 2: The Game Loop (Focus: Rules & State Management)",
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
    title: "Arcade",
    inspiration: "Breakout",
    status: "planning",
    estimate: 2,
    githubUrl: null,
    desc: "Building on the physics of <span class='text-cyan-400 font-bold'>Pong</span>, my intent is to implement destructible environments and dynamic gameplay modifiers.",
    scope: "Multiple levels, multiple lives, multiple brick types, win/lose screens and high scores",
    focus: "Object inheritance (Brick Parent Class), power-up logic loops, and particle systems.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "river_raid",
    title: "Vertical Scroller",
    inspiration: "River Raid / 1942 / Spy Hunter",
    status: "todo",
    estimate: 4,
    githubUrl: null,
    desc: "A tribute to the vertical scrollers that defined the arcade era. My intent is to build a continuous flight experience that balances environmental navigation with high-density combat.",
    scope: "Infinite scrolling terrain, resource management systems, and dynamic enemy wave generation.",
    focus: "Object pooling, procedural generation basics, and camera tracking.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 2: 3D MOVEMENT & STATE MANAGEMENT
  // ==========================================
  {
    id: "donkey_kong",
    title: "Platformer",
    inspiration: "Donkey Kong / Mario Bros",
    status: "todo",
    estimate: 4,
    githubUrl: null,
    desc: "The birth of the platformer. My goal is to engineer a responsive character controller that handles gravity, momentum, and complex collision states.",
    scope: "Vertical level design, hazard spawning systems, and a strict win condition.",
    focus: "Finite State Machines, gravity simulation, and AABB collision detection.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "mega_man",
    title: "Action Platformer",
    inspiration: "Mega Man / Contra",
    status: "todo",
    estimate: 6,
    githubUrl: null,
    desc: "A step into the action-platformer genre. My intent is to integrate ranged combat into a fluid movement system.",
    scope: "Horizontal level progression, combat systems, and basic AI patrol patterns.",
    focus: "Projectile management, advanced hitbox detection, and animation-driven state transitions.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "metroid",
    title: "Metroidvania",
    inspiration: "Metroid / Castlevania",
    status: "todo",
    estimate: 8,
    githubUrl: null,
    desc: "An exploration into non-linear world design. Progress is defined by <span class='text-cyan-400 font-bold'>player capability</span> rather than a linear path.",
    scope: "Interconnected room systems, capability-based gating, and world-state persistence.",
    focus: "Scene management, global state tracking, and minimap data structures.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 3: FIRST PERSON & ADVANCED PHYSICS
  // ==========================================
  {
    id: "portal",
    title: "3D Puzzle",
    inspiration: "Portal / Myst",
    status: "todo",
    estimate: 6,
    githubUrl: null,
    desc: "My first foray into 3D space. My intent is to master the fundamentals of 3D navigation and interaction using <span class='text-cyan-400 font-bold'>Raycasting</span>.",
    scope: "Interactive rooms, basic first-person controller, and click-to-interact system.",
    focus: "3D Coordinate systems, Raycasting, and basic 3D physics collisions.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "quake",
    title: "FPS",
    inspiration: "Quake / Doom",
    status: "todo",
    estimate: 8,
    githubUrl: null,
    desc: "A transition from static puzzles to high-speed 3D combat. My intent is to develop a responsive <span class='text-cyan-400 font-bold'>FPS controller</span>.",
    scope: "3D arena environment, projectile/hitscan weapon systems, and 'chase' AI.",
    focus: "Weapon switching, NavMesh AI navigation, and projectile pooling.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "firewatch",
    title: "Narrative Adventure",
    inspiration: "Firewatch / Gone Home",
    status: "todo",
    estimate: 6,
    githubUrl: null,
    desc: "A shift from combat to narrative systems. My intent is to build a world that reacts to player presence through <span class='text-cyan-400 font-bold'>scripted events</span>.",
    scope: "Environmental inspection, dynamic dialogue triggers, and persistent story-state manager.",
    focus: "Trigger volumes, branching dialogue logic, and persistent world flags.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "half_life",
    title: "Narrative FPS",
    inspiration: "Half-Life / BioShock",
    status: "todo",
    estimate: 8,
    githubUrl: null,
    desc: "The culmination of my 3D foundations. My intent is to integrate movement, combat, and narrative into a polished <span class='text-cyan-400 font-bold'>vertical slice</span>.",
    scope: "Linear mission, environmental storytelling, and scripted in-engine events.",
    focus: "System integration, AI state machines, and cinematic sequencing.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 4: ACTION & OPTIMIZATION
  // ==========================================
  {
    id: "link_to_the_past",
    title: "Top-Down Adventure",
    inspiration: "Link to the Past / Secret of Mana",
    status: "todo",
    estimate: 8,
    githubUrl: null,
    desc: "A transition into complex world systems using top-down 3D navigation and gated progression.",
    scope: "Overworld/dungeon systems, multi-tool combat, and global flags manager.",
    focus: "Camera occlusion, 3D NavMesh pathfinding, and persistent world data.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "vampire_survivors",
    title: "Horde Survivor",
    inspiration: "Vampire Survivors / Risk of Rain",
    status: "todo",
    estimate: 4,
    githubUrl: null,
    desc: "The ultimate optimization challenge. My goal is to manage <span class='text-cyan-400 font-bold'>thousands of active entities</span> while maintaining performance.",
    scope: "Infinite enemy spawning, automated weapons, and meta-progression loop.",
    focus: "GPU Instancing, spatial partitioning, and optimized VFX.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "double_dragon",
    title: "Brawler",
    inspiration: "Double Dragon / Street Fighter / Final Fight",
    status: "todo",
    estimate: 8,
    githubUrl: null,
    desc: "An evolution of the character controller featuring <span class='text-cyan-400 font-bold'>multi-stage combos</span> and directional inputs.",
    scope: "Combative state machine, input buffering, and active hitbox system.",
    focus: "Input sequence buffers, hit-registration, and impact juice.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 5: JRPG
  // ==========================================
  {
    id: "dragon_warrior",
    title: "JRPG",
    inspiration: "Dragon Warrior",
    status: "todo",
    estimate: 10,
    githubUrl: null,
    desc: "An entry into turn-based systems, focusing on <span class='text-cyan-400 font-bold'>complex menu-driven combat</span>.",
    scope: "1 town, 1 dungeon, 6 monsters, simple quest loop, turn-based battles.",
    focus: "RPG systems, balancing, data-driven content.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "final_fantasy",
    title: "Party-Based JRPG",
    inspiration: "Final Fantasy",
    status: "todo",
    estimate: 15,
    githubUrl: null,
    desc: "Scaling the RPG framework to handle <span class='text-cyan-400 font-bold'>dynamic party management</span> and synergy.",
    scope: "Party of 3-4 heroes, multiple job classes, and status effect systems.",
    focus: "Turn-order logic, status effect stacks, and advanced UI.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 6: COMPLEX LOGIC & STRATEGY
  // ==========================================
  {
    id: "ff_tactics",
    title: "Tactical RPG",
    inspiration: "Final Fantasy Tactics / Ogre Battle",
    status: "todo",
    estimate: 15,
    githubUrl: null,
    desc: "A transition into tactical, grid-based combat focusing on <span class='text-cyan-400 font-bold'>spatial positioning</span>.",
    scope: "1 isometric map, 4 classes, grid-based movement/A*, and height modifiers.",
    focus: "Pathfinding (A*), grid mapping, and tactical AI.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "xcom",
    title: "Strategy",
    inspiration: "XCOM / Mario + Rabbids",
    status: "todo",
    estimate: 15,
    githubUrl: null,
    desc: "A focus on tactical cover-based combat and <span class='text-cyan-400 font-bold'>dynamic line-of-sight</span>.",
    scope: "Grid combat with 2 cover levels, destructible tiles, and fog of war.",
    focus: "Raycasting LOS, cover-detection logic, and probability math.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 7: SPORTS
  // ==========================================
  {
    id: "golf",
    title: "Sports (Golf)",
    inspiration: "Golf / Tiger Woods PGA Tour",
    status: "todo",
    estimate: 10,
    githubUrl: null,
    desc: "A deep dive into 3D physics and <span class='text-cyan-400 font-bold'>momentum-based interaction</span>.",
    scope: "1 hole, 3 club types, variable terrain, and wind systems.",
    focus: "Projectile motion with drag, surface friction, and terrain normals.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "racing",
    title: "Racing",
    inspiration: "Driver / Mario Kart",
    status: "todo",
    estimate: 10,
    githubUrl: null,
    desc: "A study in high-speed vehicle physics and <span class='text-cyan-400 font-bold'>drifting mechanics</span>.",
    scope: "1 track, 3 vehicle types, and basic AI racers.",
    focus: "Suspension physics, drift state-logic, and AI waypoint navigation.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },

  // ==========================================
  // PHASE 8: THE TRIPLE-A SYSTEMS
  // ==========================================
  {
    id: "action_rpg",
    title: "Action RPG",
    inspiration: "Fable / Legend of Zelda",
    status: "todo",
    estimate: 12,
    githubUrl: null,
    desc: "Mastering the fundamentals of 3D interaction with a <span class='text-cyan-400 font-bold'>lock-on combat system</span>.",
    scope: "1 small zone, 3 enemy types, Z-targeting, and sword/shield loop.",
    focus: "Camera orbit logic, animation hitboxes, and Z-axis awareness.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "action_stealth",
    title: "Action Stealth",
    inspiration: "Horizon / Ghost of Tsushima",
    status: "todo",
    estimate: 15,
    githubUrl: null,
    desc: "Expanding the ARPG framework with <span class='text-cyan-400 font-bold'>environmental traversal</span> and sensory AI.",
    scope: "Climbing nodes, vision cones, brush stealth, and animated takedowns.",
    focus: "Inverse Kinematics (IK), sensory logic, and systemic interaction.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  },
  {
    id: "crpg_systems",
    title: "CRPG",
    inspiration: "Baldur's Gate 3 / Divinity: Original Sin",
    status: "todo",
    estimate: 20,
    githubUrl: null,
    desc: "The ultimate integration: <span class='text-cyan-400 font-bold'>emergent systemic gameplay</span> and branching world-states.",
    scope: "Multi-character party, surface reactions, and dialogue systems.",
    focus: "Systemic chemistry, persistent global flags, and complex 5E math.",
    progress: 0,
    storyPhases: [{ title: "Backlog", stories: ["User stories pending definition."] }]
  }
];