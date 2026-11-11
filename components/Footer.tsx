"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-emerald-950 text-emerald-200 py-6 border-t border-emerald-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>© {year || 2026} EcoTracker - Explorador de Parques Nacionales y Reservas Naturales.</p>
        <p className="mt-1 text-xs text-emerald-400">Proyecto Vibe Coding con Next.js 16 y Tailwind CSS</p>
      </div>
    </footer>
  );
}