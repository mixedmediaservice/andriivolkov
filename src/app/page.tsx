import Navigation from '@/components/layout/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-900">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-900"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              ANDRII VOLKOV
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-8">
              Artist • Paintings • Tattoos
            </p>
            <div className="space-x-4">
              <Link
                href="/paintings"
                className="inline-block px-8 py-3 bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
              >
                VIEW PAINTINGS
              </Link>
              <Link
                href="/tattoo"
                className="inline-block px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-neutral-900 transition-colors"
              >
                VIEW TATTOOS
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/paintings" className="group cursor-pointer">
              <div className="relative h-96 bg-neutral-800 overflow-hidden">
                <Image
                  src="/images/paintings/Andrii-Volkov-Y23.jpg"
                  alt="Featured Painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold">Paintings</h3>
                  <p className="text-neutral-200">Explore the gallery</p>
                </div>
              </div>
            </Link>
            <Link href="/tattoo" className="group cursor-pointer">
              <div className="relative h-96 bg-neutral-800 overflow-hidden">
                <Image
                  src="/images/tattoos/Andrii Volkov - Tattoo 1.jpg"
                  alt="Featured Tattoo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold">Tattoo Art</h3>
                  <p className="text-neutral-200">View portfolio</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
