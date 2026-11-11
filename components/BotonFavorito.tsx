"use client";

import { useState, useEffect } from "react";

export default function BotonFavorito({ parqueId }: { parqueId: string }) {
  const [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("ecotracker_favoritos") || "[]");
    setEsFavorito(guardados.includes(parqueId));
  }, [parqueId]);

  const toggleFavorito = () => {
    const guardados = JSON.parse(localStorage.getItem("ecotracker_favoritos") || "[]");
    let nuevosFavoritos;

    if (esFavorito) {
      nuevosFavoritos = guardados.filter((id: string) => id !== parqueId);
    } else {
      nuevosFavoritos = [...guardados, parqueId];
    }

    localStorage.setItem("ecotracker_favoritos", JSON.stringify(nuevosFavoritos));
    setEsFavorito(!esFavorito);
  };

  return (
    <button
      onClick={toggleFavorito}
      className={`w-full font-medium py-2.5 rounded-lg text-sm transition-colors mt-6 ${
        esFavorito
          ? "bg-amber-600 hover:bg-amber-700 text-white"
          : "bg-emerald-500 hover:bg-emerald-600 text-white"
      }`}
    >
      {esFavorito ? "⭐ Quitar de Favoritos" : "⭐ Agregar a Favoritos"}
    </button>
  );
}