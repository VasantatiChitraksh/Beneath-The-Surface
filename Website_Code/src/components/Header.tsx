import React from 'react';
import { DropletIcon } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ IMPORTANT!

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black shadow-md border-b border-gray-800 font-sans">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <DropletIcon className="h-8 w-8 text-blue-500" />
            <Link to="/" className="text-2xl font-bold text-white">
              Beneath The Surface
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Home
            </Link>
            <Link
              to="/statistics"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Statistics
            </Link>
            <Link
              to="/about"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              About
            </Link>
            <Link
              to="/tests"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Tests
            </Link>
            <Link
              to="/game"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Game
            </Link>
            <Link
              to="/Prototype"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Prototype
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
