import Navigation from '@/components/layout/Navigation';
import ImageGallery from '@/components/gallery/ImageGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Paintings",
  description: "Original paintings by Andrii Volkov using alternative materials like household dyes, sand, earth, soot and fire. Available works can be seen at Aia Contemporary gallery.",
  keywords: ["paintings", "mixed media", "alternative materials", "contemporary art", "Aia Contemporary", "canvas art"],
  alternates: {
    canonical: "https://andriivolkov.com/paintings",
  },
  openGraph: {
    images: [
      {
        url: "https://andriivolkov.com/images/paintings/Andrii-Volkov-Y23.jpg",
        width: 1200,
        height: 630,
        alt: "Andrii Volkov Original Painting - Y23",
      },
    ],
  },
};

const paintingImages = [
  { src: '/images/paintings/Andrii Volkov - MM-B.jpg', alt: 'MM-B - Mixed Media Artwork' },
  { src: '/images/paintings/Andrii-Volkov-38A.jpg', alt: '38A - Original Painting' },
  { src: '/images/paintings/Andrii-Volkov-HWE-33.jpg', alt: 'HWE-33 - Contemporary Art' },
  { src: '/images/paintings/Andrii-Volkov-PTR11.jpg', alt: 'PTR11 - Abstract Work' },
  { src: '/images/paintings/Andrii-Volkov-SCR.jpg', alt: 'SCR - Fine Art Piece' },
  { src: '/images/paintings/Andrii-Volkov-Sw15.jpg', alt: 'Sw15 - Modern Painting' },
  { src: '/images/paintings/Andrii-Volkov-Y23.jpg', alt: 'Y23 - Artistic Expression' },
  { src: '/images/paintings/Y23+-+Andrii+Volkov+-+Detail+2.jpg', alt: 'Y23 Detail - Close-up View' },
];

export default function Paintings() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 text-center">
            Paintings
          </h1>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Available works can be seen at{' '}
            <a 
              href="https://www.aiacontemporary.com/store/andrii-volkov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-neutral-600 underline font-medium"
            >
              Aia Contemporary
            </a>
          </p>
          
          <ImageGallery images={paintingImages} columns={3} />
        </div>
      </main>
    </>
  );
}