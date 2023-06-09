import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as InfoIcon } from '../image/info.svg';
import { ReactComponent as UsersIcon } from '../image/users.svg';

function Sidebar({ activeMenu, handleMenuClick }) {
    return (
        <div className="fixed top-0 left-0 h-full w-1/5 bg-[#363740] border-r border-gray-200">
        <div className="flex px-6 py-4 border-b border-[#363740]">
        <img src={require('../image/icon.png')} alt="Logo" className=" mt-[15px] h-[90px] w-[66px] mr-2" />
            <h2 className="text-[24px] mt-[46px] ml-[12px] font-medium text-white">AOne</h2>
        </div>


        <nav className="flex-1 px-6 py-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
            <NavLink
              to="/about"
              className={`flex items-center text-[#a4a6b2] hover:bg-[#505050] px-4 py-2 rounded ${
                activeMenu === 'about' ? 'bg-[#505050]' : ''
              }`}
              onClick={() => handleMenuClick('about')}
            >
              <InfoIcon className="w-5 h-5 mr-2" />
              <span>About</span>
            </NavLink>

            </li>
            <li>
            <NavLink
              to="/user"
              className={`flex items-center text-[#a4a6b2] hover:bg-[#505050] px-4 py-2 rounded ${
                activeMenu === 'user' ? 'bg-[#505050]' : ''
              }`}
              onClick={() => handleMenuClick('user')}
            >
              <UsersIcon className="w-5 h-5 mr-2" />
              <span>User</span>
            </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
    );
  }
  
  export default Sidebar;