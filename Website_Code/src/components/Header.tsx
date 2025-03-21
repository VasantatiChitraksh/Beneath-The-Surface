import React from 'react';
import { DropletIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b-2">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DropletIcon className="h-8 w-8 text-blue-600" />
            <a href="/" className="text-2xl font-bold text-blue-900">
              Beneath The Surface
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/statistics" className="text-gray-600 hover:text-blue-600">Statistics</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/tests" className="text-gray-600 hover:text-blue-600">Tests</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
