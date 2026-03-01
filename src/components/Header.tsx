'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Rainbow icon */}
              <svg width="50" height="40" viewBox="0 0 50 40" className="animate-pulse-soft">
                <path d="M5 35 Q25 5 45 35" stroke="#90CAF9" strokeWidth="4" fill="none" />
                <path d="M10 35 Q25 10 40 35" stroke="#FFE082" strokeWidth="4" fill="none" />
                <path d="M15 35 Q25 15 35 35" stroke="#F5A5B8" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                Therapy Kids
              </h1>
              <p className="text-sm text-pink-400 -mt-1">Sofi</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              Servicios
            </a>
            <a href="#sobre-mi" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              Sobre Mí
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              Testimonios
            </a>
            <a
              href="#contacto"
              className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Contactar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#sobre-mi"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Mí
              </a>
              <a
                href="#testimonios"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2.5 rounded-full font-semibold text-center mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactar
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
