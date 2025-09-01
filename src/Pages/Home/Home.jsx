import React from 'react'
import { FaStarOfLife } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative ">

      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <div className="mb-6 text-sm text-white/70 flex items-center gap-2   bg-transparent border-1 p-4 rounded-3xl">
          <span className="text-white font-large flex gap-1"> <FaStarOfLife className='pt-1' /> scout</span> is currently in beta →
        </div>
        
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-6">
          AI for teams building<br />
          what's next.
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
          Scout gives you the tools to build custom agents and<br />
          workflows in record time.
        </p>

        <NavLink to="/features"  className="bg-white text-black py-3 px-6 rounded-full text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90">
        
        Get Started →
        </NavLink>
      </div>
    </div>
  )
}
