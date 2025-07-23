import Navigation from '@/components/layout/Navigation';
import ImageGallery from '@/components/gallery/ImageGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tattoo Art",
  description: "Tattoo designs by Andrii Volkov that create permanent impressions of impermanent marks captured from urban environments. Modern equipment meets street art documentation.",
  keywords: ["tattoo art", "tattoo design", "street art", "urban environment", "permanent art", "body art"],
  alternates: {
    canonical: "https://andriivolkov.com/tattoo",
  },
  openGraph: {
    images: [
      {
        url: "https://andriivolkov.com/images/tattoos/Andrii Volkov - Tattoo 1.jpg",
        width: 1200,
        height: 630,
        alt: "Andrii Volkov Tattoo Design",
      },
    ],
  },
};

const tattooImages = [
  { src: '/images/tattoos/Andrii Volkov - Tattoo 1.jpg', alt: 'Custom Tattoo Design 1' },
  { src: '/images/tattoos/Andrii Volkov - Tattoo 2.jpg', alt: 'Custom Tattoo Design 2' },
  { src: '/images/tattoos/Andrii Volkov - Tattoo 3.jpg', alt: 'Custom Tattoo Design 3' },
  { src: '/images/tattoos/Andrii Volkov - Tattoo 4.jpg', alt: 'Custom Tattoo Design 4' },
  { src: '/images/tattoos/Andrii Volkov - Tattoo 5.jpg', alt: 'Custom Tattoo Design 5' },
  { src: '/images/tattoos/Andrii Volkov - Tattoo 6.jpg', alt: 'Custom Tattoo Design 6' },
  { src: '/images/tattoos/Andrii Volkov - Tattoo 7.jpg', alt: 'Custom Tattoo Design 7' },
];

export default function Tattoo() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
            Tattoo Art
          </h1>
          
          <ImageGallery images={tattooImages} columns={3} />
        </div>
      </main>
    </>
  );
}