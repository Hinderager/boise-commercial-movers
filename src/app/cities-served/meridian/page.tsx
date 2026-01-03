import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Movers in Meridian, ID | Office Moving Services',
  description: 'Professional commercial moving services in Meridian. Office relocations, business moves, and commercial equipment handling throughout Meridian\'s growing business community.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/cities-served/meridian',
  },
}

export default function MeridianPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Movers in Meridian, Idaho
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional office moving services throughout Meridian's business corridors
            </p>
            <a
              href="tel:2087683987"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 768-3987 for Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="w-8 h-8 text-dark-blue flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gunmetal mb-4">
                  Serving All of Meridian
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide commercial moving services throughout Meridian, from established business parks to new commercial developments along Eagle Road and Meridian Road. As Meridian continues to grow, we help businesses relocate to take advantage of new opportunities.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold text-gunmetal mb-4">Common Service Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Eagle Road business corridor</li>
                  <li>• Meridian Road commercial district</li>
                  <li>• Ten Mile business parks</li>
                  <li>• Downtown Meridian offices</li>
                  <li>• Overland Road businesses</li>
                  <li>• Fairview Avenue commercial areas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gunmetal mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Same-day estimates available</li>
                  <li>• Weekend moves offered</li>
                  <li>• After-hours relocations</li>
                  <li>• Local Treasure Valley crews</li>
                  <li>• Fully insured and licensed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">
              Commercial Moving Services in Meridian
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Office Relocations</h3>
                <p className="text-gray-600">
                  Full office moves for Meridian businesses of all sizes. We handle everything from small startups to established companies expanding to larger spaces.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">IT Equipment Moving</h3>
                <p className="text-gray-600">
                  Safe handling for technology infrastructure. We coordinate with your IT team for proper equipment shutdown, transport, and setup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Warehouse Moving</h3>
                <p className="text-gray-600">
                  Large-scale relocations for warehouses and distribution centers throughout the Meridian area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Retail Store Moves</h3>
                <p className="text-gray-600">
                  Retail relocations including fixtures, inventory, and equipment. We work to minimize your business downtime.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
              >
                View All Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">
              Why Meridian Businesses Choose Us
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Local Knowledge</h3>
                  <p className="text-gray-600">We know Meridian's business parks, building access requirements, and growing commercial districts. That experience prevents delays.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Flexible Scheduling</h3>
                  <p className="text-gray-600">Weekend and after-hours moves available so your business operations continue without disruption.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Experienced Crews</h3>
                  <p className="text-gray-600">Our teams specialize in commercial moves. They understand business equipment, tight deadlines, and professional service standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Transparent Pricing</h3>
                  <p className="text-gray-600">Written quotes with clear terms. No hidden fees or surprise charges on move day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Move Your Meridian Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free quote for your commercial move in Meridian. We'll provide accurate pricing after walking through your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:2087683987"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
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

      {/* Other Cities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gunmetal mb-6 text-center">
              We Also Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <Link href="/cities-served/boise" className="text-dark-blue hover:text-light-blue font-semibold">
                Boise
              </Link>
              <Link href="/cities-served/nampa" className="text-dark-blue hover:text-light-blue font-semibold">
                Nampa
              </Link>
              <Link href="/cities-served/caldwell" className="text-dark-blue hover:text-light-blue font-semibold">
                Caldwell
              </Link>
              <Link href="/cities-served/eagle" className="text-dark-blue hover:text-light-blue font-semibold">
                Eagle
              </Link>
              <Link href="/cities-served/garden-city" className="text-dark-blue hover:text-light-blue font-semibold">
                Garden City
              </Link>
              <Link href="/cities-served/kuna" className="text-dark-blue hover:text-light-blue font-semibold">
            {/* Neighborhood Pages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Meridian Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                <Link
                  href="/cities-served/meridian/ten-mile"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Ten Mile Area</span>
                </Link>
                <Link
                  href="/cities-served/meridian/lochsa-falls"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Lochsa Falls</span>
                </Link>
                <Link
                  href="/cities-served/meridian/paramount"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Paramount</span>
                </Link>
                <Link
                  href="/cities-served/meridian/tuscany"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Tuscany</span>
                </Link>
              </div>
            </div>

                Kuna
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
