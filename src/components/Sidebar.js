import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ activeMenu, handleMenuClick }) {
    return (
        <div className="fixed top-0 left-0 h-full w-1/5 bg-[#363740] border-r border-gray-200">
        <div className="flex px-6 py-4 border-b border-[#363740]">
            <img src="../image/icon.png" alt="Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-lg font-medium text-white">AOne</h2>
        </div>


        <nav className="flex-1 px-6 py-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/about"
                className={`block text-[#a4a6b2] hover:bg-[#505050] px-4 py-2 rounded ${
                  activeMenu === 'about' ? 'bg-[#505050]' : ''
                }`}
                onClick={() => handleMenuClick('about')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className={`block text-[#a4a6b2] hover:bg-[#505050] px-4 py-2 rounded ${
                  activeMenu === 'user' ? 'bg-[#505050]' : ''
                }`}
                onClick={() => handleMenuClick('user')}
              >
                User
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
    );
  }
  
  export default Sidebar;