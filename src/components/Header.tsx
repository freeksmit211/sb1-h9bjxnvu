import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="data:image/png;base64,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" 
              alt="Real Fitness Logo" 
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold">RealFitness</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-green-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-green-500 transition-colors">About</a>
            <a href="#services" className="hover:text-green-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-green-500 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}