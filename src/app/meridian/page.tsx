import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services Meridian Idaho | AC Repair & Heating | Boise HVAC Pros',
  description: 'Professional HVAC services in Meridian, Idaho. AC repair, furnace installation, heating services. Licensed & insured. 24/7 emergency service available. Free estimates. Call (208) 505-9352.',
  keywords: [
    'HVAC Meridian',
    'AC repair Meridian Idaho',
    'furnace repair Meridian',
    'heating services Meridian',
    'air conditioning Meridian ID',
    'HVAC contractor Meridian',
    'furnace installation Meridian Idaho',
    'AC installation Meridian',
    'emergency HVAC Meridian',
    'Meridian heating and cooling',
  ],
  openGraph: {
    title: 'HVAC Services Meridian Idaho | AC Repair & Heating',
    description: 'Professional heating and air conditioning services in Meridian, Idaho. Licensed, insured, and available 24/7 for emergencies.',
    url: 'https://hvac-boise.com/meridian',
  },
  alternates: {
    canonical: 'https://hvac-boise.com/meridian',
  },
}

const meridianNeighborhoods = [
  'Downtown Meridian',
  'The Village',
  'Paramount',
  'Lochsa Falls',
  'Tuscany',
  'Silverstone',
  'Spurwing',
  'Heritage Grove',
  'Bridgetower',
  'Reflection Ridge',
  'Ten Mile',
  'South Meridian',
]

export default function MeridianPage() {
  return (
    <main>
      <StructuredData city="Meridian" />

      <HeroSection
        city="Meridian"
        headline="HVAC Services in Meridian, Idaho"
        subheadline="Fast, reliable heating and cooling for Meridian homes."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              Meridian HVAC Services
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Meridian has grown fast. New subdivisions going up everywhere. All those homes need HVAC systems that work, and they need technicians who can get there quickly when something goes wrong.
              </p>

              <p>
                We know Meridian well. We've installed systems in new construction and repaired aging units in the older neighborhoods near downtown. When you call, we can usually get to you the same day.
              </p>

              <p>
                Meridian summers are brutal on AC systems. Those 100-degree days in July and August push your air conditioner to its limits. If your system isn't keeping up or your energy bills are climbing, give us a call.
              </p>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                Our Meridian Services
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>AC repair:</strong> Quick diagnosis and repair for all brands. We carry common parts on our trucks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Furnace service:</strong> Gas and electric furnace repair and replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>New system installation:</strong> Proper sizing and professional installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Maintenance plans:</strong> Keep your system running efficiently year-round</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Emergency service:</strong> 24/7 availability for urgent situations</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                Meridian Areas We Serve
              </h3>

              <p>
                We cover all of Meridian, including:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {meridianNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need HVAC Service in Meridian?
              </h3>
              <p className="text-gray-300 mb-6">
                Call for a free estimate. Same-day service available.
              </p>
              <a
                href="tel:2085059352"
                className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <FAQ />

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-blue mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
