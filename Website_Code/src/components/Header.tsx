import React from 'react';
import { DropletIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black shadow-md border-b border-gray-800 font-sans">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <DropletIcon className="h-8 w-8 text-blue-500" />
            <a href="/" className="text-2xl font-bold text-white">
              Beneath The Surface
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Home
            </a>
            <a
              href="/statistics"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Statistics
            </a>
            <a
              href="/about"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              About
            </a>
            <a
              href="/tests"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Tests
            </a>
            <a
              href="/game"
              className="text-blue-400 hover:text-white hover:underline hover:underline-offset-4 transition-all"
            >
              Game
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
