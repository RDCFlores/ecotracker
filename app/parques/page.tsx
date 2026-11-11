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

const DATOS_PARQUES: Parque[] = [
  {
    id: "yellowstone",
    nombre: "Parque Nacional Yellowstone",
    pais: "Estados Unidos",
    categoria: "Geotérmico",
    imagen: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop",
    descripcion: "Famoso por sus géiseres, fuentes termales y gran diversidad de vida silvestre.",
  },
  {
    id: "patagonia",
    nombre: "Torres del Paine",
    pais: "Chile",
    categoria: "Montaña",
    imagen: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=800&auto=format&fit=crop",
    descripcion: "Icónicas cumbres de granito, glaciares y valles patagónicos.",
  },
  {
    id: "plitvice",
    nombre: "Lagos de Plitvice",
    pais: "Croacia",
    categoria: "Bosque y Agua",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    descripcion: "Lagos turquesa interconectados por cascadas en un bosque frondoso.",
  },
  {
    id: "banff",
    nombre: "Parque Nacional Banff",
    pais: "Canadá",
    categoria: "Montaña",
    imagen: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
    descripcion: "Lagos de color azul turquesa rodeados por las Montañas Rocosas de Canadá.",
  },
  {
    id: "serengeti",
    nombre: "Parque Nacional Serengueti",
    pais: "Tanzania",
    categoria: "Sabana",
    imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    descripcion: "Hogar de la gran migración anual de ñus y cebras.",
  },
  {
    id: "fuji",
    nombre: "Parque Nacional Fuji-Hakone-Izu",
    pais: "Japón",
    categoria: "Volcánico",
    imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    descripcion: "Centrado alrededor del icónico Monte Fuji, con aguas termales y lagos.",
  },
];

export default function ParquesPage() {
  const [parques, setParques] = useState<Parque[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSel, setCategoriaSel] = useState("Todas");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simulación de consumo de datos / latencia de red
    const timer = setTimeout(() => {
      setParques(DATOS_PARQUES);
      setCargando(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const categorias = ["Todas", ...Array.from(new Set(DATOS_PARQUES.map((p) => p.categoria)))];

  const parquesFiltrados = parques.filter((p) => {
    const coincideTexto =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.pais.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = categoriaSel === "Todas" || p.categoria === categoriaSel;
    return coincideTexto && coincideCat;
  });

  if (cargando) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-emerald-800 font-medium">
        Cargando catálogo de parques...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-extrabold text-emerald-950">Catálogo de Parques Nacionales</h1>
        <p className="text-gray-600 mt-1">Explora reservas por ubicación, ecosistema o nombre.</p>
      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar por parque o país..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {/* Filtro por Categorías */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSel(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                categoriaSel === cat
                  ? "bg-emerald-700 text-white"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Resultados */}
      {parquesFiltrados.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500">No se encontraron parques con los filtros aplicados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parquesFiltrados.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <img src={p.imagen} alt={p.nombre} className="h-48 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {p.categoria}
                    </span>
                    <span className="text-xs text-gray-500">{p.pais}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{p.nombre}</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{p.descripcion}</p>
                </div>
                <Link
                  href={`/parques/${p.id}`}
                  className="mt-4 block text-center bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm py-2 rounded-lg transition-colors"
                >
                  Ver Ficha Completa
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}