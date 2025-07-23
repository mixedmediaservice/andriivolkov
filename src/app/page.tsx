import Navigation from '@/components/layout/Navigation';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "Andrii Volkov is a contemporary artist who observes the world and transforms ordinary materials into extraordinary art. Discover his paintings and tattoo designs inspired by urban environments.",
  alternates: {
    canonical: "https://andriivolkov.com",
  },
  openGraph: {
    images: [
      {
        url: "https://andriivolkov.com/images/hero/heroimage.jpg",
        width: 1200,
        height: 630,
        alt: "Andrii Volkov - Artist Portfolio Hero Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 scale-110 md:scale-100">
            <OptimizedImage
              src="/images/hero/heroimage.jpg"
              alt="Andrii Volkov Artist - Contemporary art studio workspace"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">
              <div>ANDRII</div>
              <div>VOLKOV</div>
            </h1>
            <div className="space-x-4">
              <Link
                href="/paintings"
                className="inline-block px-8 py-3 bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-colors"
              >
                PAINTING
              </Link>
              <Link
                href="/tattoo"
                className="inline-block px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-neutral-900 transition-colors"
              >
                TATTOO
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
