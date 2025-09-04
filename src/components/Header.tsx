import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              FitGold
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#programs" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Programs
            </a>
            <a href="#courses" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              About coach
            </a>
            <a href="#athlete" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              courses
            </a>
            <a href="#reviews" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-500/20">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#programs" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
                Programs
              </a>
              <a href="#courses" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
                Courses
              </a>
              <a href="#athlete" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
                About Coach
              </a>
              <a href="#reviews" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
                Reviews
              </a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;