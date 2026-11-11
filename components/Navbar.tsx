"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-emerald-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-wide">
            <span className="text-2xl">🌲</span> EcoTracker
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-emerald-300 transition-colors">
              Inicio
            </Link>
            <Link href="/parques" className="hover:text-emerald-300 transition-colors">
              Parques
            </Link>
            <Link href="/favoritos" className="hover:text-emerald-300 transition-colors">
              Mis Favoritos
            </Link>
          </nav>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-emerald-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-emerald-800 px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-emerald-300"
          >
            Inicio
          </Link>
          <Link
            href="/parques"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-emerald-300"
          >
            Parques
          </Link>
          <Link
            href="/favoritos"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-emerald-300"
          >
            Mis Favoritos
          </Link>
        </div>
      )}
    </header>
  );
}