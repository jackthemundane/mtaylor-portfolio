import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Configuration for your menu items
  const menuItems = [
    { title: 'Technical', path: '/technical', color: 'border-blue-500 shadow-[inset_0_0_10px_rgba(59,130,246,0.3)]' },
    { title: 'Games', path: '/games', color: 'border-red-500 shadow-[inset_0_0_10px_rgba(239,68,68,0.3)]' },
    // I noticed you don't have a 3D.jsx page yet, so this might 404 until we create it!
    { title: '3D', path: '/3d', color: 'border-purple-500 shadow-[inset_0_0_10px_rgba(168,85,247,0.3)]' },
    { title: 'Product', path: '/product', color: 'border-green-500 shadow-[inset_0_0_10px_rgba(34,197,94,0.3)]' },
    { title: 'Creative', path: '/creative', color: 'border-yellow-500 shadow-[inset_0_0_10px_rgba(234,179,8,0.3)]' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col justify-center items-center overflow-hidden">
      
      {/* Navigation Grid */}
      <nav className="flex flex-col md:flex-row gap-20 md:gap-16 perspective-1000 items-center justify-center w-full z-10 pt-8 md:pt-0">
        {menuItems.map((item) => (
          <Link 
            key={item.title} 
            to={item.path} 
            className="nav-item group flex flex-col items-center text-decoration-none transition-all duration-500"
          >
            {/* The 3D Cube */}
            <div className="shape-box mb-6">
              <div className={`cube-face face-front border ${item.color}`}></div>
              <div className={`cube-face face-back border ${item.color}`}></div>
              <div className={`cube-face face-right border ${item.color}`}></div>
              <div className={`cube-face face-left border ${item.color}`}></div>
              <div className={`cube-face face-top border ${item.color}`}></div>
              <div className={`cube-face face-bottom border ${item.color}`}></div>
            </div>

            {/* Label */}
            <span className="text-[9px] tracking-[0.5em] uppercase text-zinc-600 transition-all duration-300 group-hover:text-white group-hover:tracking-[0.7em]">
              {item.title}
            </span>
          </Link>
        ))}
      </nav>

      {/* Footer Brand */}
      <div className="fixed bottom-12 opacity-20 pointer-events-none tracking-widest text-sm font-light">
        MTAYLOR.DESIGN
      </div>
    </div>
  );
};

export default LandingPage;