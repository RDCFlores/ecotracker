import Link from "next/link";

export default function NotFoundParque() {
  return (
    <div className="max-w-xl mx-auto text-center py-20 px-4">
      <h2 className="text-4xl font-extrabold text-emerald-950 mb-2">Parque no encontrado</h2>
      <p className="text-gray-600 mb-6">
        Lo sentimos, la reserva natural que estás buscando no existe en nuestro catálogo.
      </p>
      <Link
        href="/parques"
        className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors"
      >
        Volver al catálogo de parques
      </Link>
    </div>
  );
}