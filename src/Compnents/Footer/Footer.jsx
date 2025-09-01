import React from 'react';
import { FaGlobe, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className= " text-white py-16 px-8 relative">
             
           <div className="absolute bottom-90 left-0 w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16 ">
          {/* Scout Logo and Status */}
          <div className="col-span-1 md:col-span-2 ms-44 relative">
         <img src="/Icon.png" alt="Icon" />
            <div className="absolute bottom-25 right-5 w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>
            <div className="absolute top-32 -right-0 w-40 h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5 transform -rotate-45"></div>


            {/* Status Indicator */}
            <div className="flex items-center pt-30">
             
      <div className=' relative flex items-center ps-6 py-1 pe-2  rounded-3xl bg-transparent border border-gray-600'>
                  <div className="absolute bottom-[-30%] left-[5%] w-[40px] h-[40px] bg-green-400 rounded-full blur-[20px]"></div>
               <div className="absolute bottom-[-30%] left-[7%] w-[40px] h-[40px] bg-white rounded-full blur-[50px]"></div>

          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>

             <span className="text-sm text-white uppercase   ">
                
                 ALL SYSTEMS OPERATIONAL
              </span>
      </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1 ms-40">
            <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-6">
              LINKS
            </h3>
            <ul className="space-y-1">
              <li>
                <NavLink to="/features" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Docs
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1 ms-20">
            <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-6">
              SOLUTIONS
            </h3>
            <ul className="space-y-1">
              <li>
                <NavLink to="/slack-bot" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Slack Bot
                </NavLink>
              </li>
              <li>
                <NavLink to="/discord-bot" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Discord Bot
                </NavLink>
              </li>
              <li>
                <NavLink to="/command" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Command
                </NavLink>
              </li>
              <li>
                <NavLink to="/onsite-chat" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Onsite Chat
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1 relative ">
            <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-6">
              LEGAL
            </h3>
            <ul className="space-y-1">
              <li>
                <NavLink to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm pb-2">
                  Terms of Service
                </NavLink>
              </li>
                <div className="absolute bottom-25 right-30  w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>
            <div className="absolute top-30 right-56  w-40 h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5 transform rotate-45"></div>

              <li>
                <NavLink to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-2 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-500 text-sm  md:mb-0 ms-40">
            Copyright © 2024 Scout. All rights reserved.
          </div>
           <div className="absolute bottom-24 left-0 w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>
              <div className="absolute bottom-12 left-0 w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>


          {/* Social Links */}
          <div className="flex items-center space-x-8 me-40">
            <NavLink to="#" className="text-gray-500 hover:text-white transition-colors">
              <FaGlobe className="w-5 h-5" />
            </NavLink>
            <NavLink to="#" className="text-gray-500 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5" />
            </NavLink>
            <NavLink to="#" className="text-gray-500 hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;