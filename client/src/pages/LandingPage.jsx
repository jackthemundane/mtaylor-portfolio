import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#09090b] text-[#fafafa] p-6 overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Header Section */}
      <header className="relative z-10 text-center mb-12">
        <h1 className="text-6xl font-black tracking-tighter sm:text-7xl font-display">
          M. TAYLOR
        </h1>
        <h2 className="text-sm font-light tracking-[0.4em] text-zinc-500 mt-4 uppercase">
          Technical Product Owner
        </h2>
        
        {/* Summary Paragraph */}
        <p className="max-w-2xl mt-8 text-zinc-400 leading-relaxed text-lg">
          I architect products from the <span className="text-zinc-100 font-medium">discovery phase</span> to the <span className="text-zinc-100 font-medium">production server</span>. Currently bridging the gap between strategic roadmaps and MERN-stack engineering.
        </p>

        {/* Contact Links (Moved Up) */}
        <div className="flex gap-8 justify-center mt-8 text-xs font-bold tracking-widest uppercase">
          <a href="/resume.pdf" className="hover:text-blue-400 transition-colors border-b border-zinc-800 pb-1">Resume</a>
          <a href="https://github.com/jackthemundane" className="hover:text-blue-400 transition-colors border-b border-zinc-800 pb-1">GitHub</a>
          <a href="https://www.linkedin.com/in/michaeltaylorca/" className="hover:text-blue-400 transition-colors border-b border-zinc-800 pb-1">LinkedIn</a>
        </div>
      </header>

      {/* 2. Section Cards */}
      <main className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
  {[
    { title: "Technical", icon: "💻", path: "/tech" },
    { title: "Games & 3D", icon: "🎮", path: "/games" },
    { title: "Product", icon: "📋", path: "/product" },
    { title: "Creative", icon: "📖", path: "/creative" },
  ].map((item) => (
    <Link 
      key={item.title} 
      to={item.path}
      className="group relative bg-zinc-900/40 border border-zinc-800/50 p-12 rounded-2xl flex flex-col items-center gap-6 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all cursor-pointer text-center"
    >
      <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
      <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 group-hover:text-zinc-200">
        {item.title}
      </h3>
    </Link>
  ))}
</main>

      {/* 3. System Status Footer */}
      <footer className="relative z-10 mt-20 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] text-zinc-600 uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          SYS_STATUS: BLACKBOX_ONLINE
        </div>
        <p className="text-[9px] font-mono text-zinc-800 tracking-widest uppercase">
          © 2025 // BUILT ON MERN
        </p>
      </footer>
    </div>
  );
}