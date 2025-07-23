import Navigation from '@/components/layout/Navigation';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-900 pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About Andrii
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/images/Andrii-Volkov-Amsterdam-2019.jpeg"
                  alt="Andrii Volkov - Artist Photo (Amsterdam, 2019)"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 text-neutral-300">
              <p className="text-lg leading-relaxed">
                Welcome to my artistic world. I am Andrii Volkov, a passionate artist 
                specializing in both traditional paintings and contemporary tattoo art.
              </p>
              
              <p className="leading-relaxed">
                My journey in art began with a deep appreciation for form, color, and 
                storytelling. Through paintings, I explore themes of emotion and nature, 
                while my tattoo work allows me to create permanent art that becomes part 
                of someone&apos;s personal story.
              </p>
              
              <p className="leading-relaxed">
                Each piece I create is a unique expression, whether it&apos;s a canvas painting 
                that captures a moment in time or a custom tattoo design that reflects 
                the individual&apos;s personality and vision.
              </p>
              
              <div className="pt-6">
                <h2 className="text-2xl font-bold text-white mb-4">Artistic Focus</h2>
                <ul className="space-y-2">
                  <li>• Original paintings and mixed media</li>
                  <li>• Custom tattoo designs</li>
                  <li>• Portrait and figurative work</li>
                  <li>• Abstract and contemporary styles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}