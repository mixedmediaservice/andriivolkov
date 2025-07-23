import Navigation from '@/components/layout/Navigation';

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-900 pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Get In Touch
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <div className="space-y-4 text-neutral-300">
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p>info@andriivolkov.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Social Media</h3>
                    <a 
                      href="https://instagram.com/andriivolkov" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      @andriivolkov on Instagram
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Custom paintings and commissions</li>
                  <li>• Tattoo design consultations</li>
                  <li>• Art exhibitions and shows</li>
                  <li>• Portfolio reviews</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-neutral-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:border-neutral-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="commission">Commission Inquiry</option>
                    <option value="tattoo">Tattoo Consultation</option>
                    <option value="exhibition">Exhibition Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-neutral-900 font-medium py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}