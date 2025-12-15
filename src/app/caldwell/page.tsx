import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services Caldwell Idaho | AC Repair & Heating | Boise HVAC Pros',
  description: 'Professional HVAC services in Caldwell, Idaho. AC repair, furnace installation, heating services. Licensed & insured. 24/7 emergency service available. Free estimates. Call (208) 505-9352.',
  keywords: [
    'HVAC Caldwell',
    'AC repair Caldwell Idaho',
    'furnace repair Caldwell',
    'heating services Caldwell',
    'air conditioning Caldwell ID',
    'HVAC contractor Caldwell',
    'furnace installation Caldwell Idaho',
    'AC installation Caldwell',
    'emergency HVAC Caldwell',
    'Caldwell heating and cooling',
  ],
  openGraph: {
    title: 'HVAC Services Caldwell Idaho | AC Repair & Heating',
    description: 'Professional heating and air conditioning services in Caldwell, Idaho. Licensed, insured, and available 24/7 for emergencies.',
    url: 'https://hvac-boise.com/caldwell',
  },
  alternates: {
    canonical: 'https://hvac-boise.com/caldwell',
  },
}

const caldwellNeighborhoods = [
  'Downtown Caldwell',
  'West Caldwell',
  'East Caldwell',
  'North Caldwell',
  'South Caldwell',
  'Ustick Road',
  'Cleveland Boulevard',
  'Middleton Road',
  'Farmway Road',
  'Lake Lowell',
  'Karcher Road',
  'Indiana Avenue',
]

export default function CaldwellPage() {
  return (
    <main>
      <StructuredData city="Caldwell" />

      <HeroSection
        city="Caldwell"
        headline="HVAC Services in Caldwell, Idaho"
        subheadline="Dependable heating and cooling for Caldwell homes."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              Caldwell HVAC Services
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Caldwell has a mix of homes—older places in town with character and newer builds on the outskirts. We've worked on all of them. Different systems, different challenges, but always the same goal: getting you comfortable again.
              </p>

              <p>
                Some of those older Caldwell homes have original furnaces that have been running for decades. When they finally give out, we can help you decide whether to repair or replace. We'll give you honest advice, not a sales pitch.
              </p>

              <p>
                And when Caldwell summers hit their peak, your AC needs to perform. If it's struggling to keep up, making strange noises, or running constantly, let us take a look before it fails completely.
              </p>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                What We Do in Caldwell
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>AC repair:</strong> Get your cool air back. We fix all makes and models</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Furnace repair:</strong> No heat? We'll diagnose the problem and get it running</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>New installations:</strong> When it's time to replace, we'll help you choose wisely</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Maintenance:</strong> Prevent breakdowns with regular tune-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 emergency:</strong> Heat out in January? We're available around the clock</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                Caldwell Areas We Cover
              </h3>

              <p>
                We serve all of Caldwell and Canyon County:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {caldwellNeighborhoods.map((neighborhood) => (
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
                Need HVAC Service in Caldwell?
              </h3>
              <p className="text-gray-300 mb-6">
                Give us a call. Free estimates, honest prices.
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
            <Link href="/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
