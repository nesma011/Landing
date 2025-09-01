import React from 'react';
import { Link } from 'react-router-dom';

export default function ScoutNavbar() {
  return (
    <nav className="w-full bg-transparent px-6  py-4  relative">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-8 ms-28">
         <Link to="/" className="flex items-center space-x-2 ">
         <img src="/Icon.png" alt="Icon" />
        </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link  to= "/features" className="text-gray-300 hover:text-white transition-colors duration-200">
              Features
            </Link>
            <Link  to= "/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
              Pricing
            </Link>
            <Link  to= "/docs" className="text-gray-300 hover:text-white transition-colors duration-200">
              Docs
            </Link>
            <Link  to= "/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
              Blog
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 me-28">
          <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 border border-gray-600 rounded-full hover:border-gray-500">
            Login
          </button>
          <button className="px-4 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}