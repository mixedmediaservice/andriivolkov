import Navigation from '@/components/layout/Navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Andrii Volkov for art commissions, exhibitions, or general inquiries. Connect via email or Instagram.",
  keywords: ["contact artist", "art commission", "art exhibition", "artist inquiry", "art consultation"],
  alternates: {
    canonical: "https://andriivolkov.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
            Get In Touch
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h2>
                <div className="space-y-4 text-neutral-700">
                  <div>
                    <h3 className="font-semibold text-neutral-900">Email</h3>
                    <p>info@andriivolkov.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Social Media</h3>
                    <a 
                      href="https://www.instagram.com/volkov.scvt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-neutral-900 transition-colors"
                    >
                      @volkov.scvt on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send a Message</h2>
              
              {/* Elfsight Contact Form Widget */}
              <div className="elfsight-app-4ac0ea71-ae6f-4cb3-8e9a-a5bacd731dee" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}