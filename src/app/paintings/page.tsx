import Navigation from '@/components/layout/Navigation';

export default function Paintings() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Paintings
          </h1>
          <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
            Explore a collection of original paintings showcasing various styles and techniques.
          </p>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square bg-neutral-800 overflow-hidden hover:opacity-90 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                    <span className="text-sm">Image {i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}