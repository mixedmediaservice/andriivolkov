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
  { src: '/images/paintings/09AW-Andrii-Volkov-Aia-Contemporary.jpg', alt: 'Abstract mixed media painting by Andrii Volkov featuring intricate golden thread patterns weaving through dark earth tones and textured layers' },
  { src: '/images/paintings/WH-90-Andrii-Volkov-Stain-Aia-Contemporary.jpg', alt: 'Minimalist contemporary artwork by Andrii Volkov using aged paper collage with natural stains and urban weathering textures on white canvas' },
  { src: '/images/paintings/Andrii-Volkov-MM-B.jpg', alt: 'Mixed media artwork MM-B by Andrii Volkov showing dark organic charcoal forms against weathered canvas with raw textile edges' },
  { src: '/images/paintings/Andrii-Volkov-38A.jpg', alt: 'Contemporary painting 38A by Andrii Volkov using alternative materials and urban-inspired color palette' },
  { src: '/images/paintings/Andrii-Volkov-HWE-33.jpg', alt: 'Abstract artwork HWE-33 by Andrii Volkov featuring mixed media techniques with found materials and street art influences' },
  { src: '/images/paintings/Andrii-Volkov-PTR11.jpg', alt: 'Original painting PTR11 by Andrii Volkov exploring texture and form through unconventional artistic materials' },
  { src: '/images/paintings/Andrii-Volkov-SCR.jpg', alt: 'Contemporary art piece SCR by Andrii Volkov showcasing experimental techniques with household dyes and natural materials' },
  { src: '/images/paintings/Andrii-Volkov-Sw15.jpg', alt: 'Mixed media painting Sw15 by Andrii Volkov incorporating sand, earth, and fire elements in abstract composition' },
  { src: '/images/paintings/Andrii-Volkov-Y23.jpg', alt: 'Contemporary artwork Y23 by Andrii Volkov demonstrating innovative use of alternative materials and urban documentation techniques' },
  { src: '/images/paintings/Y23-Andrii-Volkov-Detail-2.jpg', alt: 'Detail view of Y23 painting by Andrii Volkov showing close-up texture and layering techniques in mixed media work' },
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