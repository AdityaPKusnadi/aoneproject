import React from 'react';

function Header() {
  return (
    <header className="ml-auto w-4/5 flex items-center justify-between px-6 py-4 bg-[#f7f8fc] border-b border-gray-200">
      <h1 className="text-xl font-medium">My App</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Sign In
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
