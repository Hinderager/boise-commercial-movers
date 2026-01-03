import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Movers in Nampa, ID | Office Moving Services',
  description: 'Professional commercial moving services in Nampa. Office relocations, business moves, and commercial equipment handling throughout Nampa\'s business community.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/cities-served/nampa',
  },
}

export default function NampaPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-dark-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Movers in Nampa, Idaho
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional office moving services throughout Nampa's business districts
            </p>
            <a href="tel:2087683987" className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors">
              Call (208) 768-3987 for Free Quote
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
                <h2 className="text-3xl font-bold text-gunmetal mb-4">Serving All of Nampa</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide commercial moving services throughout Nampa, from downtown offices to industrial parks along Garrity Boulevard. Whether you're relocating within Nampa or moving from another Treasure Valley city, we handle your business move efficiently.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold text-gunmetal mb-4">Common Service Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Downtown Nampa business district</li>
                  <li>• Garrity Boulevard industrial area</li>
                  <li>• Midway Road commercial corridor</li>
                  <li>• Caldwell Boulevard businesses</li>
                  <li>• Karcher Road offices</li>
                  <li>• Nampa business parks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gunmetal mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Same-day estimates available</li>
                  <li>• Weekend moves offered</li>
                  <li>• After-hours relocations</li>
                  <li>• Experienced commercial crews</li>
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
            <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">Commercial Moving Services in Nampa</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Office Relocations</h3>
                <p className="text-gray-600">Complete office moves for Nampa businesses. From small offices to large commercial spaces, we handle every detail.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">IT Equipment Moving</h3>
                <p className="text-gray-600">Proper handling for technology infrastructure with coordination with your IT team for safe relocation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Warehouse Moving</h3>
                <p className="text-gray-600">Large-scale relocations for warehouses, distribution centers, and industrial facilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Retail Store Moves</h3>
                <p className="text-gray-600">Retail relocations including fixtures and inventory with minimal business interruption.</p>
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
            <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">Why Nampa Businesses Choose Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Local Knowledge</h3>
                  <p className="text-gray-600">We know Nampa's business areas, building access, and commercial districts throughout Canyon County.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Flexible Scheduling</h3>
                  <p className="text-gray-600">Weekend and after-hours moves available to minimize business downtime.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Experienced Crews</h3>
                  <p className="text-gray-600">Commercial moving specialists who understand business equipment and professional standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Transparent Pricing</h3>
                  <p className="text-gray-600">Clear written quotes with no hidden fees or surprise charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Move Your Nampa Business?</h2>
            <p className="text-xl text-blue-100 mb-8">Get a free quote for your commercial move in Nampa. We'll provide accurate pricing after walking through your space.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
                (208) 768-3987
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
              <Link href="/cities-served/caldwell" className="text-dark-blue hover:text-light-blue font-semibold">Caldwell</Link>
              <Link href="/cities-served/eagle" className="text-dark-blue hover:text-light-blue font-semibold">Eagle</Link>
              <Link href="/cities-served/garden-city" className="text-dark-blue hover:text-light-blue font-semibold">Garden City</Link>
              <Link href="/cities-served/kuna" className="text-dark-blue hover:text-light-blue font-semibold">Kuna</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
