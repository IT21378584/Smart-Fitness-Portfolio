import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-[#0d1117] py-4 px-6 md:px-12 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="text-blue-400 font-bold text-xl">Smart Fitness for Athletes</span>
          <span className="text-gray-400 text-sm ml-1">Research Project</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#technologies" className="hover:text-blue-400">
            Technologies
          </a>
          <a href="#documents" className="hover:text-blue-400">
            Documents
          </a>
          <a href="#team" className="hover:text-blue-400">
            Team
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0d1117] border-t border-gray-800 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#technologies" className="hover:text-blue-400">
              Technologies
            </a>
            <a href="#documents" className="hover:text-blue-400">
              Documents
            </a>
            <a href="#team" className="hover:text-blue-400">
              Team
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>}
    </header>;
}