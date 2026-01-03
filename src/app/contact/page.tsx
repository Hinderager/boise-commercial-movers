import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Commercial Movers Boise | Get Free Quote',
  description: 'Contact our commercial moving team in Boise for a free quote. Call (208) 768-3987 or fill out our form. Fast response, professional service.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Get your free commercial moving quote today.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                The fastest way to get a quote is to call us. We'll ask a few questions about your
                move and can usually give you a ballpark estimate over the phone. For an exact quote,
                we'll schedule a quick walkthrough of your space.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Phone</h3>
                    <a href="tel:2087683987" className="text-lg text-gray-700 hover:text-dark-blue">(208) 768-3987</a>
                    <p className="text-sm text-gray-600 mt-1">Call for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Email</h3>
                    <a href="mailto:info@topshelfpros.com" className="text-lg text-gray-700 hover:text-dark-blue">info@topshelfpros.com</a>
                    <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Service Area</h3>
                    <p className="text-lg text-gray-700">Boise, Meridian, Nampa, Caldwell</p>
                    <p className="text-sm text-gray-600 mt-1">And surrounding Treasure Valley areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Business Hours</h3>
                    <p className="text-lg text-gray-700">Monday - Friday: 7am - 7pm</p>
                    <p className="text-lg text-gray-700">Saturday: 8am - 5pm</p>
                    <p className="text-sm text-gray-600 mt-1">Moves scheduled 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-blue mb-6">Request a Quote</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="moveType" className="block text-sm font-semibold text-gray-700 mb-2">Type of Move</label>
                    <select
                      id="moveType"
                      name="moveType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                    >
                      <option value="">Select type...</option>
                      <option value="office">Office Moving</option>
                      <option value="business">Business Relocation</option>
                      <option value="warehouse">Warehouse Moving</option>
                      <option value="equipment">Equipment Moving</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="moveDate" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Move Date</label>
                    <input
                      type="date"
                      id="moveDate"
                      name="moveDate"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your move *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What are you moving? How big is the space? Any special requirements?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-dark-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-blue/90 transition-colors"
                  >
                    Request Quote
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    Or call us directly at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-blue mb-6 text-center">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-dark-blue mb-2">We Contact You</h3>
              <p className="text-gray-700">We'll call or email you within a few hours to discuss your move.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-dark-blue mb-2">Site Visit</h3>
              <p className="text-gray-700">We schedule a quick walkthrough to see what you're moving.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-dark-blue mb-2">Get Your Quote</h3>
              <p className="text-gray-700">You receive a detailed written quote with clear pricing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Call now for the fastest response.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
