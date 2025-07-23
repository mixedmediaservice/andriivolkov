import Navigation from '@/components/layout/Navigation';
import Script from 'next/script';
import Head from 'next/head';
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
      <Head>
        <link rel="prefetch" href="https://static.elfsight.com/platform/platform.js" />
        <link rel="preconnect" href="https://core.service.elfsight.com" />
      </Head>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
            Contact
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
              
              {/* Loading skeleton */}
              <div id="form-loading" className="animate-pulse space-y-4">
                <div className="h-4 bg-neutral-200 rounded w-1/4"></div>
                <div className="h-10 bg-neutral-200 rounded"></div>
                <div className="h-4 bg-neutral-200 rounded w-1/3"></div>
                <div className="h-10 bg-neutral-200 rounded"></div>
                <div className="h-4 bg-neutral-200 rounded w-1/4"></div>
                <div className="h-24 bg-neutral-200 rounded"></div>
                <div className="h-10 bg-neutral-200 rounded w-1/3"></div>
              </div>
              
              {/* Elfsight Contact Form Widget */}
              <div className="elfsight-app-4ac0ea71-ae6f-4cb3-8e9a-a5bacd731dee" data-elfsight-app-lazy style={{display: 'none'}}></div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Load Elfsight script only on contact page */}
      <Script 
        src="https://static.elfsight.com/platform/platform.js" 
        data-use-service-core 
        strategy="lazyOnload"
        onLoad={() => {
          // Hide loading skeleton and show form when script loads
          const loading = document.getElementById('form-loading');
          const form = document.querySelector('.elfsight-app-4ac0ea71-ae6f-4cb3-8e9a-a5bacd731dee') as HTMLElement;
          if (loading) loading.style.display = 'none';
          if (form) form.style.display = 'block';
        }}
      />
    </>
  );
}