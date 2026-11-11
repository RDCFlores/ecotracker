"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Parque {
  id: string;
  nombre: string;
  pais: string;
  categoria: string;
  imagen: string;
  descripcion: string;
}

const TODOS_LOS_PARQUES: Record<string, Parque> = {
  yellowstone: {
    id: "yellowstone",
    nombre: "Parque Nacional Yellowstone",
    pais: "Estados Unidos",
    categoria: "Geotérmico",
    imagen: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop",
    descripcion: "Famoso por sus géiseres, fuentes termales y gran diversidad de vida silvestre.",
  },
  patagonia: {
    id: "patagonia",
    nombre: "Torres del Paine",
    pais: "Chile",
    categoria: "Montaña",
    imagen: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=800&auto=format&fit=crop",
    descripcion: "Icónicas cumbres de granito, glaciares y valles patagónicos.",
  },
  plitvice: {
    id: "plitvice",
    nombre: "Lagos de Plitvice",
    pais: "Croacia",
    categoria: "Bosque y Agua",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    descripcion: "Lagos turquesa interconectados por cascadas en un bosque frondoso.",
  },
  banff: {
    id: "banff",
    nombre: "Parque Nacional Banff",
    pais: "Canadá",
    categoria: "Montaña",
    imagen: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
    descripcion: "Lagos de color azul turquesa rodeados por las Montañas Rocosas de Canadá.",
  },
  serengeti: {
    id: "serengeti",
    nombre: "Parque Nacional Serengueti",
    pais: "Tanzania",
    categoria: "Sabana",
    imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    descripcion: "Hogar de la gran migración anual de ñus y cebras.",
  },
  fuji: {
    id: "fuji",
    nombre: "Parque Nacional Fuji-Hakone-Izu",
    pais: "Japón",
    categoria: "Volcánico",
    imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    descripcion: "Centrado alrededor del icónico Monte Fuji, con aguas termales y lagos.",
  },
};

export default function FavoritosPage() {
  const [favoritosIds, setFavoritosIds] = useState<string[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const guardados = localStorage.getItem("ecotracker_favoritos");
    if (guardados) {
      try {
        setFavoritosIds(JSON.parse(guardados));
      } catch {
        setFavoritosIds([]);
      }
    } else {
      const iniciales = ["yellowstone", "patagonia"];
      setFavoritosIds(iniciales);
      localStorage.setItem("ecotracker_favoritos", JSON.stringify(iniciales));
    }
    setCargando(false);
  }, []);

  const eliminarFavorito = (idAEliminar: string) => {
    const nuevosFavoritos = favoritosIds.filter((id) => id !== idAEliminar);
    setFavoritosIds(nuevosFavoritos);
    localStorage.setItem("ecotracker_favoritos", JSON.stringify(nuevosFavoritos));
  };

  if (cargando) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-emerald-800 font-medium">
        Cargando tus reservas favoritas...
      </div>
    );
  }

  const parquesFavoritos = favoritosIds
    .map((id) => TODOS_LOS_PARQUES[id])
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-emerald-950">Mis Parques Guardados</h1>
        <p className="text-gray-600 mt-1">Gestiona tu lista personal de reservas naturales de interés.</p>
      </div>

      {parquesFavoritos.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 space-y-4">
          <div className="text-4xl">🌲</div>
          <h2 className="text-xl font-bold text-gray-800">No tienes parques favoritos aún</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Explora nuestro catálogo general y añade las reservas naturales que quieras visitar a tu lista personal.
          </p>
          <Link
            href="/parques"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Explorar Parques
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parquesFavoritos.map((parque) => (
            <div
              key={parque.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-emerald-100 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48">
                  <img src={parque.imagen} alt={parque.nombre} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full">
                    {parque.pais}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {parque.categoria}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">{parque.nombre}</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{parque.descripcion}</p>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-3">
                <Link
                  href={`/parques/${parque.id}`}
                  className="flex-1 text-center bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm py-2 rounded-lg transition-colors"
                >
                  Ver Ficha
                </Link>
                <button
                  onClick={() => eliminarFavorito(parque.id)}
                  className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-medium text-sm rounded-lg transition-colors"
                >
                  Quitar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}