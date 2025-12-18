import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Movers in Middleton, ID | Office Moving Services',
  description: 'Professional commercial moving services in Middleton. Office relocations, business moves, and commercial equipment handling for Middleton businesses.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/cities-served/middleton',
  },
}

export default function MiddletonPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-dark-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Movers in Middleton, Idaho
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional office moving services for Middleton businesses
            </p>
            <a href="tel:2085059352" className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors">
              Call (208) 505-9352 for Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="w-8 h-8 text-dark-blue flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gunmetal mb-4">Serving All of Middleton</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide commercial moving services throughout Middleton, serving local businesses with professional office relocations. Our experienced crews understand Canyon County's business community and deliver efficient moving services.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold text-gunmetal mb-4">Common Service Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Middleton business district</li>
                  <li>• Professional office spaces</li>
                  <li>• Commercial locations</li>
                  <li>• Local retail areas</li>
                  <li>• Industrial facilities</li>
                  <li>• Business complexes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gunmetal mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Same-day estimates available</li>
                  <li>• Weekend moves offered</li>
                  <li>• After-hours relocations</li>
                  <li>• Experienced local crews</li>
                  <li>• Fully insured and licensed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">Commercial Moving Services in Middleton</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Office Relocations</h3>
                <p className="text-gray-600">Professional office moves for Middleton businesses with efficient service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">IT Equipment Moving</h3>
                <p className="text-gray-600">Safe technology relocation with proper handling and coordination.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Business Relocation</h3>
                <p className="text-gray-600">Complete business moves with minimal operational disruption.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Retail Store Moves</h3>
                <p className="text-gray-600">Retail relocations with professional handling and quick turnaround.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors">
                View All Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">Why Middleton Businesses Choose Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Local Knowledge</h3>
                  <p className="text-gray-600">Familiar with Middleton's business community and Canyon County area.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Flexible Scheduling</h3>
                  <p className="text-gray-600">Weekend and after-hours moves to minimize business downtime.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Experienced Crews</h3>
                  <p className="text-gray-600">Commercial moving specialists with professional training.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Transparent Pricing</h3>
                  <p className="text-gray-600">Clear written quotes with no hidden fees or surprises.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Move Your Middleton Business?</h2>
            <p className="text-xl text-blue-100 mb-8">Get a free quote for your commercial move. We'll provide accurate pricing based on your specific needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
              <div className="flex items-center gap-2 text-blue-100">
                <Clock className="w-5 h-5" />
                <span>Available 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gunmetal mb-6 text-center">We Also Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <Link href="/cities-served/boise" className="text-dark-blue hover:text-light-blue font-semibold">Boise</Link>
              <Link href="/cities-served/meridian" className="text-dark-blue hover:text-light-blue font-semibold">Meridian</Link>
              <Link href="/cities-served/nampa" className="text-dark-blue hover:text-light-blue font-semibold">Nampa</Link>
              <Link href="/cities-served/caldwell" className="text-dark-blue hover:text-light-blue font-semibold">Caldwell</Link>
              <Link href="/cities-served/eagle" className="text-dark-blue hover:text-light-blue font-semibold">Eagle</Link>
              <Link href="/cities-served/garden-city" className="text-dark-blue hover:text-light-blue font-semibold">Garden City</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
