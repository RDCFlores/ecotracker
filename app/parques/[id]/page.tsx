import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BotonFavorito from "@/components/BotonFavorito";

interface ParqueDetalle {
  id: string;
  nombre: string;
  pais: string;
  categoria: string;
  imagen: string;
  descripcion: string;
  superficie: string;
  fundacion: string;
  faunaDestacada: string[];
}

const DETALLES_PARQUES: Record<string, ParqueDetalle> = {
  yellowstone: {
    id: "yellowstone",
    nombre: "Parque Nacional Yellowstone",
    pais: "Estados Unidos",
    categoria: "Geotérmico",
    imagen: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop",
    descripcion:
      "Establecido en 1872, Yellowstone es el primer parque nacional del mundo. Cuenta con cañones profundos, ríos cristalinos y una enorme concentración de fenómenos geotérmicos como el famoso géiser Old Faithful.",
    superficie: "8,983 km²",
    fundacion: "1872",
    faunaDestacada: ["Bisonte americano", "Oso pardo", "Lobo gris", "Alce"],
  },
  patagonia: {
    id: "patagonia",
    nombre: "Torres del Paine",
    pais: "Chile",
    categoria: "Montaña",
    imagen: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1200&auto=format&fit=crop",
    descripcion:
      "Ubicado en la Patagonia chilena, es célebre por sus imponentes montañas, glaciares y campos de hielo. Es un destino mundial para el senderismo y la fotografía de naturaleza.",
    superficie: "1,814 km²",
    fundacion: "1959",
    faunaDestacada: ["Guanaco", "Puma", "Cóndor andino", "Zorro culpeo"],
  },
  plitvice: {
    id: "plitvice",
    nombre: "Lagos de Plitvice",
    pais: "Croacia",
    categoria: "Bosque y Agua",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    descripcion:
      "Declarado Patrimonio de la Humanidad por la UNESCO, este parque alberga 16 lagos interconectados por cascadas naturales entre densos bosques habitados por fauna diversa.",
    superficie: "296 km²",
    fundacion: "1949",
    faunaDestacada: ["Oso pardo europeo", "Lince", "Ciervo común", "Águila real"],
  },
  banff: {
    id: "banff",
    nombre: "Parque Nacional Banff",
    pais: "Canadá",
    categoria: "Montaña",
    imagen: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop",
    descripcion: "Lagos de color azul turquesa rodeados por las Montañas Rocosas de Canadá.",
    superficie: "6,641 km²",
    fundacion: "1885",
    faunaDestacada: ["Oso grizzly", "Alce", "Cabra montés"],
  },
  serengeti: {
    id: "serengeti",
    nombre: "Parque Nacional Serengueti",
    pais: "Tanzania",
    categoria: "Sabana",
    imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    descripcion: "Hogar de la gran migración anual de ñus y cebras.",
    superficie: "14,763 km²",
    fundacion: "1951",
    faunaDestacada: ["León", "Ñu", "Cebra", "Elefante africano"],
  },
  fuji: {
    id: "fuji",
    nombre: "Parque Nacional Fuji-Hakone-Izu",
    pais: "Japón",
    categoria: "Volcánico",
    imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    descripcion: "Centrado alrededor del icónico Monte Fuji, con aguas termales y lagos.",
    superficie: "1,227 km²",
    fundacion: "1936",
    faunaDestacada: ["Macaco japonés", "Ciervo sika", "Serbal"],
  },
};

async function DetalleContenido({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parque = DETALLES_PARQUES[id];

  if (!parque) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Botón Volver */}
      <Link
        href="/parques"
        className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
      >
        ← Volver al catálogo
      </Link>

      {/* Hero / Imagen Principal */}
      <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
        <img src={parque.imagen} alt={parque.nombre} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
          <div>
            <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {parque.categoria}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">{parque.nombre}</h1>
            <p className="text-emerald-200 text-sm mt-1">📍 {parque.pais}</p>
          </div>
        </div>
      </div>

      {/* Grid de Información Técnica */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Sobre esta reserva</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{parque.descripcion}</p>

          <h3 className="text-md font-bold text-gray-900 pt-2">Fauna emblemática</h3>
          <div className="flex flex-wrap gap-2">
            {parque.faunaDestacada.map((animal) => (
              <span
                key={animal}
                className="bg-emerald-50 text-emerald-800 text-xs font-medium px-3 py-1 rounded-lg border border-emerald-100"
              >
                🐾 {animal}
              </span>
            ))}
          </div>
        </div>

        {/* Ficha rápida */}
        <div className="bg-emerald-900 text-white p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-emerald-100 mb-4 border-b border-emerald-800 pb-2">
              Ficha Técnica
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-emerald-400 block text-xs">Superficie Total</span>
                <span className="font-semibold">{parque.superficie}</span>
              </div>
              <div>
                <span className="text-emerald-400 block text-xs">Año de Fundación</span>
                <span className="font-semibold">{parque.fundacion}</span>
              </div>
              <div>
                <span className="text-emerald-400 block text-xs">Categoría Ecosistémica</span>
                <span className="font-semibold">{parque.categoria}</span>
              </div>
            </div>
          </div>

          {/* Botón dinámico interactivo con localStorage */}
          <BotonFavorito parqueId={parque.id} />
        </div>
      </div>
    </div>
  );
}

export default function DetalleParquePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <Suspense fallback={<div className="text-center py-20 text-emerald-800 font-medium">Cargando reserva natural...</div>}>
        <DetalleContenido params={params} />
      </Suspense>
    </div>
  );
}