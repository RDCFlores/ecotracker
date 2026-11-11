export default function LoadingParques() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>
      <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-72 bg-gray-200 rounded-2xl animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}