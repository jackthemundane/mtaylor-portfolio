import { Link } from 'react-router-dom';

export default function Games({ title = "Games" }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#09090b] text-[#fafafa] p-6 font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <header className="relative z-10 text-center">
        <h1 className="text-4xl font-black tracking-tighter uppercase font-display">{title}</h1>
        <p className="text-zinc-500 mt-4 max-w-md">Finished and in progress games arcade coming soon.</p>
        
        <Link to="/" className="inline-block mt-12 text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-1">
          ← Return to Base
        </Link>
      </header>
    </div>
  );
}