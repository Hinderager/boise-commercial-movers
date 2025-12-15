import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services Boise Idaho | AC Repair & Heating | Boise HVAC Pros',
  description: 'Professional HVAC services in Boise, Idaho. AC repair, furnace installation, heating services. Licensed & insured. 24/7 emergency service available. Free estimates. Call (208) 505-9352.',
  keywords: [
    'HVAC Boise',
    'AC repair Boise Idaho',
    'furnace repair Boise',
    'heating services Boise',
    'air conditioning Boise ID',
    'HVAC contractor Boise',
    'furnace installation Boise Idaho',
    'AC installation Boise',
    'emergency HVAC Boise',
    'Boise heating and cooling',
  ],
  openGraph: {
    title: 'HVAC Services Boise Idaho | AC Repair & Heating',
    description: 'Professional heating and air conditioning services in Boise, Idaho. Licensed, insured, and available 24/7 for emergencies.',
    url: 'https://hvac-boise.com/boise',
  },
  alternates: {
    canonical: 'https://hvac-boise.com/boise',
  },
}

const boiseNeighborhoods = [
  'Downtown Boise',
  'North End',
  'East End',
  'Bench',
  'West Boise',
  'Southeast Boise',
  'Southwest Boise',
  'Harris Ranch',
  'Warm Springs',
  'Boise Highlands',
  'Collister',
  'State Street',
]

export default function BoisePage() {
  return (
    <main>
      <StructuredData city="Boise" />

      <HeroSection
        city="Boise"
        headline="HVAC Services in Boise, Idaho"
        subheadline="Heating and cooling you can count on. Local techs, fair prices."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              Boise HVAC Services
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Boise weather keeps you on your toes. Summers hit 100 degrees, winters drop below freezing. Your HVAC system works hard here, and when it breaks down, you need someone who can fix it fast.
              </p>

              <p>
                We've been working on heating and cooling systems across Boise for years. Older homes in the North End with their quirky ductwork. New construction in Southeast Boise. Downtown apartments. We've seen it all.
              </p>

              <p>
                When your AC quits on a hot August afternoon or your furnace dies in January, we understand it's not just an inconvenience—it's urgent. That's why we offer same-day service and 24/7 emergency repairs.
              </p>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                What We Do in Boise
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>AC repair:</strong> We fix all makes and models. Refrigerant leaks, compressor issues, electrical problems—we diagnose and repair it</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Furnace repair:</strong> No heat? We'll get it running. Pilot light issues, ignitor problems, blower motor failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>New installations:</strong> Need a new system? We'll help you choose the right equipment for your home and budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Maintenance:</strong> Tune-ups that prevent breakdowns and keep your system running efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 emergency:</strong> Heat out at 2 AM? AC dead during a heat wave? We're available around the clock</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                Areas We Serve in Boise
              </h3>

              <p>
                We work throughout the city, including:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {boiseNeighborhoods.map((neighborhood) => (
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
                Need HVAC Service in Boise?
              </h3>
              <p className="text-gray-300 mb-6">
                Call us for a free estimate. We'll get your system running right.
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
            <Link href="/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
