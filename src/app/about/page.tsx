import Navigation from '@/components/layout/Navigation';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Andrii Volkov, a contemporary artist who acts as a journalist of simple beauty, transforming ordinary materials into extraordinary art through paintings and tattoos.",
  keywords: ["artist biography", "contemporary artist", "art philosophy", "street art", "urban exploration", "alternative materials"],
  alternates: {
    canonical: "https://andriivolkov.com/about",
  },
  openGraph: {
    images: [
      {
        url: "https://andriivolkov.com/images/Andrii-Volkov-Amsterdam-2019.jpeg",
        width: 1200,
        height: 630,
        alt: "Andrii Volkov - Artist Photo Amsterdam 2019",
      },
    ],
  },
};

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
            About
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="/images/Andrii-Volkov-Amsterdam-2019.jpeg"
                  alt="Andrii Volkov - Contemporary artist portrait in Amsterdam studio, 2019"
                  width={600}
                  height={450}
                  className="w-full h-full"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="space-y-6 text-neutral-700">
              <p className="text-lg leading-relaxed">
                Andrii Volkov is like a journalist of the simple beauty around us - he observes the world, deciphers it and gives a fluent account of what he has witnessed. Something as common as an aged sheet can be stretched onto a canvas and created into a piece of art, that evokes a range of emotions, based on the viewer&apos;s own experiences and associations with what we are looking at.
              </p>
              
              <p className="leading-relaxed">
                Volkov&apos;s use of alternative materials like household dyes, sand, earth, soot and fire when painting, offers refuge and comfort to the onlooker, as these are tools that are relatable.
              </p>
              
              <p className="leading-relaxed">
                The playful use of the ordinary with the contemporary is also present in Andrii Volkov&apos;s tattoos - modern equipment is used to create a permanent impression of the impermanent marks that have been captured from the natural world of the urban environment. The artist moves leisurely along the streets of cities such as Amsterdam or Bucharest, surveying walls of buildings for any interesting scratches or the sidewalks for peculiar cracks. He&apos;ll find something, stop, immerse in it completely, document it, and deliver a translation of it to his viewer.
              </p>
              
              <p className="leading-relaxed">
                This ability to find the &apos;ordinary&apos; and have it be seen as extraordinary is truly inspiring.
              </p>
              
              <p className="text-right text-neutral-500 mt-8">
                - Lee Stewart
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}