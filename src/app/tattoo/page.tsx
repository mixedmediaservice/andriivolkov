import Navigation from '@/components/layout/Navigation';
import ImageGallery from '@/components/gallery/ImageGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tattoo",
  description: "Tattoo designs by Andrii Volkov that create permanent impressions of impermanent marks captured from urban environments. Modern equipment meets street art documentation.",
  keywords: ["tattoo art", "tattoo design", "street art", "urban environment", "permanent art", "body art"],
  alternates: {
    canonical: "https://andriivolkov.com/tattoo",
  },
  openGraph: {
    images: [
      {
        url: "https://andriivolkov.com/images/tattoos/Andrii-Volkov---Tattoo-1.jpg",
        width: 1200,
        height: 630,
        alt: "Andrii Volkov Tattoo Design",
      },
    ],
  },
};

const tattooImages = [
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-01.jpg', alt: 'Linear geometric tattoo design by Andrii Volkov featuring textured fill patterns and flowing line work on shoulder and back, inspired by urban architecture' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-02.jpg', alt: 'Bold black geometric tattoo by Andrii Volkov with angular tribal-inspired forms and dotwork patterns on leg, showcasing street art documentation style' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-03.jpg', alt: 'Minimalist architectural tattoo by Andrii Volkov featuring bold black geometric lines forming abstract structural shapes across the back' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-1.jpg', alt: 'Contemporary tattoo design by Andrii Volkov capturing impermanent urban marks translated into permanent body art' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-2.jpg', alt: 'Street art-inspired tattoo by Andrii Volkov documenting found textures and cracks from Amsterdam urban environment' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-3.jpg', alt: 'Modern tattoo artwork by Andrii Volkov transforming ordinary street markings into extraordinary permanent artistic expression' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-4.jpg', alt: 'Urban documentation tattoo by Andrii Volkov translating sidewalk cracks and building scratches into contemporary body art' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-5.jpg', alt: 'Alternative tattoo design by Andrii Volkov inspired by weathered surfaces and impermanent marks found in city exploration' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-6.jpg', alt: 'Contemporary body art by Andrii Volkov capturing the essence of urban decay and transformation through permanent ink' },
  { src: '/images/tattoos/Andrii-Volkov---Tattoo-7.jpg', alt: 'Street-inspired tattoo by Andrii Volkov documenting the extraordinary beauty found in ordinary urban environments' },
];

export default function Tattoo() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
            Tattoo
          </h1>
          
          <ImageGallery images={tattooImages} columns={3} />
        </div>
      </main>
    </>
  );
}