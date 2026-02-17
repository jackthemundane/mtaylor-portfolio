import React, { useState, useEffect } from "react";
import { GAMES_DATA } from "../data/games";
import {
  ArrowLeft,
  X,
  Scroll,
  Terminal,
  Clock,
  BookOpen,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const Games = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedQuest, setSelectedQuest] = useState(null);

  // --- SCROLL LOCK HOOK ---
  // Prevents the background page from scrolling when the modal is open
  useEffect(() => {
    if (selectedQuest) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedQuest]);

  const filteredGames =
    activeFilter === "all"
      ? GAMES_DATA
      : GAMES_DATA.filter((g) => g.status === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "released":
        return "text-green-400 border-green-500/30 bg-green-500/10";
      case "in_progress":
        return "text-cyan-400 border-cyan-500/30 bg-cyan-500/10";
      case "planning":
        return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
      default:
        return "text-slate-500 border-slate-700 bg-slate-800/50";
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 pb-20">
      {/* --- HUD HEADER --- */}
      <header className="bg-[#0f172a] border-b border-slate-800 p-6 sticky top-0 z-20 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-all"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-widest text-white italic">
                Mike Taylor
              </h1>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-500">
                <Terminal size={12} />
                <span>Game development</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto p-6">
        {/* --- CHALLENGE CONTEXT SECTION --- */}
        <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl mb-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400 shrink-0 border border-blue-500/20">
            <BookOpen size={32} />
          </div>
          <div className="relative z-10 space-y-4 w-full">
            <h2 className="text-xl font-bold text-white tracking-wide">
              The "20 Games" Challenge
            </h2>
            <div className="text-slate-400 leading-relaxed text-sm space-y-4">
              <p>
                I undertook my second career at the ripe old age of 30 (my first was cooking and managing restaurants). 
                I’d always loved gaming (table top and video), so I applied to BCIT to learn development, 
                but discovered my skills combined best as a <strong>Product Owner</strong>. 
                I managed to make a living from that for the next 15 years. But now I’m ready to try and tackle making games again. 
              </p>
              <p>
                My strategy for learning game development was to go through some tutorials for Godot, Unreal and Unity; both 2D and 3D so I could
                both learn and get a sense of which engine I’d like to move forward with. I was initially thinking of using Godot for 2D games and Unreal for 3D games 
                but I’ve decided learning <span className="text-cyan-400">pixel art is a trap</span> and <strong>Low Poly 3D</strong> is the way to go. 
                I also decided to stick with one engine and I liked how Godot was open source and light weight.
              </p>
              <p>
                Now that I’m done with tutorials my plan is to follow a version of the 
                <a href="https://20_games_challenge.gitlab.io/" target="_blank" rel="noopener noreferrer" 
                className="text-cyan-400 hover:underline decoration-cyan-500/50 underline-offset-4 ml-1">
                  20 Games Challenge
                </a> 
                where, instead of full games, I will develop vertical slices of games in increasing complexity. 
                I’ve also decided <em>coding in public</em> should light a fire under my ass. We’ll see.
              </p>
              <p>
                My intended progression is below. We’ll see how this goes. If I need to change up the plan or the order of things I will. Wish me luck.
              </p>
            </div>
          </div>
        </div>

        {/* --- FILTER CONTROLS --- */}
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          {["all", "todo", "planning", "in_progress"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider border transition-all
                ${activeFilter === filter
                  ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : "bg-slate-900 text-slate-400 border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400"
                }`}
            >
              {filter.replace("_", " ")}
            </button>
          ))}
        </div>

        {/* --- LIST VIEW CONTAINER --- */}
        <div className="flex flex-col gap-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group relative bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* --- SIDEBAR (Header Info) --- */}
              <div className="p-5 md:w-72 shrink-0 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 block">
                    Quest Category
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-[11px] font-mono text-cyan-500/70 leading-tight mb-3 italic">
                    {game.inspiration}
                  </p>
                  <span
                    className={`inline-block px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border mb-3 ${getStatusColor(game.status)}`}
                  >
                    {game.status.replace("_", " ")}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase">
                    <Clock size={12} className="text-cyan-600" />
                    <span>Est. {game.estimate} {game.estimate === 1 ? "Week" : "Weeks"}</span>
                  </div>
                </div>
              </div>

              {/* --- MAIN CONTENT BODY --- */}
              <div className="p-5 flex-1 flex flex-col gap-4">
                <div
                  className="text-sm text-slate-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: game.desc }}
                />
                
                {/* Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                  <div className="bg-slate-900/50 p-3 rounded border border-slate-800/50">
                    <span className="block text-slate-500 text-[10px] font-mono mb-1 uppercase">Scope</span>
                    <span className="text-cyan-200 text-xs font-mono leading-tight">{game.scope}</span>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded border border-slate-800/50">
                    <span className="block text-slate-500 text-[10px] font-mono mb-1 uppercase">Learning Focus</span>
                    <span className="text-slate-300 text-xs italic leading-tight">{game.focus}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => setSelectedQuest(game)}
                    className="w-full sm:w-auto px-6 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-xs font-bold uppercase tracking-widest"
                  >
                    <Scroll size={14} /> View User Stories
                  </button>
                  {game.githubUrl && (
                    <a
                      href={game.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all text-xs font-bold uppercase tracking-widest text-slate-400"
                    >
                      <Github size={14} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- MODAL (User Stories) --- */}
      {selectedQuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedQuest(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-[#0f172a] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(8,145,178,0.2)] overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-2xl font-black text-white uppercase italic tracking-wider">
                  {selectedQuest.title}
                </h2>
                <p className="text-xs font-mono text-cyan-400/60 mt-1 uppercase tracking-tighter">
                  Inspired by: {selectedQuest.inspiration}
                </p>
              </div>
              <button
                onClick={() => setSelectedQuest(null)}
                className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body (This part scrolls) */}
            <div className="p-8 overflow-y-auto flex-1 custom-scrollbar bg-[#020617]/50">
              <div className="space-y-6">
                
                {/* Internal Summary Stats */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400 font-mono">
                    <div>
                      <span className="text-slate-600 block text-[10px] mb-1 uppercase">Time Est.</span>
                      {selectedQuest.estimate} {selectedQuest.estimate === 1 ? "Week" : "Weeks"}
                    </div>
                    <div>
                      <span className="text-slate-600 block text-[10px] mb-1 uppercase">Scope</span>
                      {selectedQuest.scope}
                    </div>
                    <div>
                      <span className="text-slate-600 block text-[10px] mb-1 uppercase">Goal</span>
                      {selectedQuest.focus}
                    </div>
                  </div>
                </div>

                {/* User Story List */}
                <div>
                  <h3 className="text-sm font-bold text-fuchsia-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Scroll size={16} /> User Stories
                  </h3>

                  <div className="space-y-8">
                    {selectedQuest.storyPhases?.map((phase, i) => (
                      <div key={i} className="group/phase">
                        <h4 className="text-cyan-200 font-bold border-b border-slate-800/50 pb-2 mb-4 text-sm uppercase tracking-wide">
                          {phase.title}
                        </h4>
                        <ul className="space-y-3">
                          {phase.stories.map((story, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-slate-300 text-sm hover:text-white transition-colors"
                            >
                              <span className="text-cyan-500 mt-1.5 text-[10px] shrink-0">▶</span>
                              <span className="leading-relaxed">{story}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Fallback if no stories exist */}
                    {(!selectedQuest.storyPhases || selectedQuest.storyPhases.length === 0) && (
                      <div className="py-20 text-center">
                        <Terminal size={40} className="mx-auto text-slate-800 mb-4" />
                        <p className="text-slate-500 italic text-sm">
                          Terminal output pending: User stories are currently being defined in the backlog...
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 text-center shrink-0">
              <button
                onClick={() => setSelectedQuest(null)}
                className="text-[10px] font-mono text-slate-500 hover:text-cyan-400 transition-colors tracking-widest"
              >
                [ CLOSE ]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;