export default async function DetalleParquePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Detalle del Parque #{id}</h1>
    </main>
  );
}