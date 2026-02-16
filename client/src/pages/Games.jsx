import React, { useState } from 'react';
import { GAMES_DATA } from '../data/games';
import { ArrowLeft, X, Scroll, Activity, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Games = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedQuest, setSelectedQuest] = useState(null);

  // Filter Logic
  const filteredGames = activeFilter === 'all' 
    ? GAMES_DATA 
    : GAMES_DATA.filter(g => g.status === activeFilter);

  // Status Colors Helper
  const getStatusColor = (status) => {
    switch(status) {
      case 'released': return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'in_progress': return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
      case 'planning': return 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10';
      default: return 'text-slate-500 border-slate-700 bg-slate-800/50';
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 pb-20">
      
      {/* --- HUD HEADER --- */}
      <header className="bg-[#0f172a] border-b border-slate-800 p-6 sticky top-0 z-20 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-all">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-widest text-white italic">
                Mike Taylor
              </h1>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-500">
                <Terminal size={12} />
                <span>GAMES & 3D "QUEST LOG"</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto p-6">
        
        {/* Controls / Filter */}
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mr-2">Filter Quests:</span>
          {['all', 'todo', 'planning', 'in_progress'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider border transition-all
                ${activeFilter === filter 
                  ? 'bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                  : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400'
                }`}
            >
              {filter.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Quest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <div 
              key={game.id}
              className="group relative bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-slate-800 flex justify-between items-start bg-slate-900/50">
                <h3 className="text-lg font-black text-white uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                  {game.title}
                </h3>
                <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${getStatusColor(game.status)}`}>
                  {game.status.replace('_', ' ')}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="text-sm text-slate-400 leading-relaxed min-h-[3rem]">
                  {game.desc}
                </div>
                
                <div className="mt-auto">
                   <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="block text-slate-500 text-[10px] font-mono mb-1">SCOPE</span>
                      <span className="text-cyan-200 text-xs font-mono">{game.scope}</span>
                   </div>
                </div>

                <div className="text-xs border-l-2 border-cyan-500/30 pl-3 py-1">
                   <span className="block text-[10px] font-bold text-cyan-500 uppercase mb-0.5">Primary Focus</span>
                   <span className="text-slate-300 italic">{game.focus}</span>
                </div>

                <button 
                  onClick={() => setSelectedQuest(game)}
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 border border-slate-700 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-xs font-bold uppercase tracking-widest"
                >
                  <Scroll size={14} /> View User Stories
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* --- MODAL (User Stories) --- */}
      {selectedQuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedQuest(null)}
          />
          
          <div className="relative w-full max-w-2xl bg-[#0f172a] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(8,145,178,0.2)] overflow-hidden flex flex-col max-h-[80vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-black text-white uppercase italic tracking-wider">
                  {selectedQuest.title}
                </h2>
                <p className="text-xs font-mono text-cyan-500">QUEST LOG DETAILS</p>
              </div>
              <button 
                onClick={() => setSelectedQuest(null)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="space-y-6">
                
                {/* Scope Section */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Activity size={16} className="text-cyan-500"/> Quest Parameters
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
                    <p><span className="text-slate-600 block text-xs mb-1">SCOPE</span> {selectedQuest.scope}</p>
                    <p><span className="text-slate-600 block text-xs mb-1">LEARNING GOAL</span> {selectedQuest.focus}</p>
                  </div>
                </div>

                {/* THE NEW STRUCTURED LIST */}
                <div>
                  <h3 className="text-sm font-bold text-fuchsia-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Scroll size={16} /> User Stories & Acceptance Criteria
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Safely map over the phases */}
                    {selectedQuest.storyPhases?.map((phase, i) => (
                      <div key={i}>
                        {/* Phase Header */}
                        <h4 className="text-cyan-200 font-bold border-b border-slate-800/50 pb-2 mb-3 text-sm uppercase tracking-wide">
                          {phase.title}
                        </h4>
                        {/* Stories List */}
                        <ul className="space-y-2">
                          {phase.stories.map((story, j) => (
                            <li key={j} className="flex items-start gap-3 text-slate-300 text-sm pl-2">
                              <span className="text-cyan-500 mt-1.5 text-[10px]">•</span>
                              <span className="leading-relaxed">{story}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    {/* Fallback if no phases exist */}
                    {(!selectedQuest.storyPhases || selectedQuest.storyPhases.length === 0) && (
                      <p className="text-slate-500 italic text-sm">No user stories available yet.</p>
                    )}
                  </div>
                </div>

              </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-900/50 text-center">
              <button 
                onClick={() => setSelectedQuest(null)}
                className="text-xs font-mono text-slate-500 hover:text-white transition-colors"
              >
                [CLOSE TERMINAL]
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Games;