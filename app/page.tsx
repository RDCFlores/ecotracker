import Link from "next/link";

// Datos de ejemplo simulados para la página de inicio (EcoTracker)
const PARQUES_DESTACADOS = [
  {
    id: "yellowstone",
    nombre: "Parque Nacional Yellowstone",
    pais: "Estados Unidos",
    imagen: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop",
    descripcion: "Famoso por su actividad geotérmica y su abundante fauna silvestre, incluyendo osos y bisontes.",
  },
  {
    id: "patagonia",
    nombre: "Parque Nacional Torres del Paine",
    pais: "Chile",
    imagen: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=800&auto=format&fit=crop",
    descripcion: "Impresionantes montañas, glaciares azules y lagos cristalinos en el extremo sur de América.",
  },
  {
    id: "plitvice",
    nombre: "Parque Nacional de los Lagos de Plitvice",
    pais: "Croacia",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    descripcion: "Una red de dieciséis lagos en terrazas unidos por cascadas espectaculares.",
  },
];

export default function Home() {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center rounded-b-3xl shadow-lg">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="bg-emerald-800 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Explora el planeta
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Descubre las Reservas Naturales del Mundo
          </h1>
          <p className="text-lg text-emerald-100">
            Encuentra información sobre parques nacionales, planifica tus próximas aventuras y conéctate con la naturaleza de forma responsable.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/parques"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Explorar Parques
            </Link>
            <Link
              href="/favoritos"
              className="bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-semibold px-6 py-3 rounded-lg border border-emerald-700 transition-all"
            >
              Mis Favoritos
            </Link>
          </div>
        </div>
      </section>

      {/* Parques Destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">Parques Destacados</h2>
            <p className="text-gray-600 text-sm mt-1">Los destinos naturales más impresionantes seleccionados para ti.</p>
          </div>
          <Link href="/parques" className="text-emerald-700 hover:text-emerald-900 font-medium text-sm">
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARQUES_DESTACADOS.map((parque) => (
            <div
              key={parque.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-emerald-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={parque.imagen}
                  alt={parque.nombre}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full">
                  {parque.pais}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{parque.nombre}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{parque.descripcion}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">EcoDestino</span>
                  <Link
                    href={`/parques/${parque.id}`}
                    className="text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}