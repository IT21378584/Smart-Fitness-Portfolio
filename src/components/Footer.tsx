import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#0a0e14] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-blue-400 font-bold text-xl mb-1">Smart Fitness for Athletes</h3>
            <p className="text-gray-400 text-sm mb-4">Research Project</p>
            <p className="text-gray-400 text-sm mb-4">
              Advancing scientific research through innovative methodologies and
              technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Github size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-400 hover:text-blue-400">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#documents" className="text-gray-400 hover:text-blue-400">
                  Documents
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Data Sets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Publications
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">123 main Avenue</li>
              <li className="text-gray-400">Malabe, Sri Lanka</li>
              <li className="text-gray-400">(123) 456-7890</li>
              <li className="text-gray-400">info@smartfitness-research.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Smart Fitness for Athletes Research Project. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}