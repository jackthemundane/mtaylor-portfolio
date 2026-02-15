import React from 'react';
import { Link } from 'react-router-dom';

const ThreeD = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#09090b] text-[#fafafa] font-sans">
      
      {/* Background Glow (Optional, keeps it consistent with Landing) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          3D Experiments
        </h1>
        <p className="text-zinc-500 max-w-md mx-auto mb-12">
          WebGL, Three.js, and r3f creations. <br />
          <span className="text-purple-500/50">Rendering soon...</span>
        </p>

        <Link 
          to="/" 
          className="inline-block text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-1 hover:border-white"
        >
          ← Return to Base
        </Link>
      </div>
    </div>
  );
};

export default ThreeD;