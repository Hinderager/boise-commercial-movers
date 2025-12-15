import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services Eagle Idaho | AC Repair & Heating | Boise HVAC Pros',
  description: 'Professional HVAC services in Eagle, Idaho. AC repair, furnace installation, heating services. Licensed & insured. 24/7 emergency service available. Free estimates. Call (208) 505-9352.',
  keywords: [
    'HVAC Eagle',
    'AC repair Eagle Idaho',
    'furnace repair Eagle',
    'heating services Eagle',
    'air conditioning Eagle ID',
    'HVAC contractor Eagle',
    'furnace installation Eagle Idaho',
    'AC installation Eagle',
    'emergency HVAC Eagle',
    'Eagle heating and cooling',
  ],
  openGraph: {
    title: 'HVAC Services Eagle Idaho | AC Repair & Heating',
    description: 'Professional heating and air conditioning services in Eagle, Idaho. Licensed, insured, and available 24/7 for emergencies.',
    url: 'https://hvac-boise.com/eagle',
  },
  alternates: {
    canonical: 'https://hvac-boise.com/eagle',
  },
}

const eagleNeighborhoods = [
  'Downtown Eagle',
  'North Eagle',
  'South Eagle',
  'Eagle Foothills',
  'Floating Feather',
  'Banbury Meadows',
  'Dry Creek',
  'Hidden Springs',
  'Avimor',
  'Eagle Island',
  'Linder Road',
  'State Street',
]

export default function EaglePage() {
  return (
    <main>
      <StructuredData city="Eagle" />

      <HeroSection
        city="Eagle"
        headline="HVAC Services in Eagle, Idaho"
        subheadline="Quality heating and cooling for Eagle homes."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              Eagle HVAC Services
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Eagle has some beautiful homes. Many of them are larger, with complex HVAC systems that need proper care. Whether you're in the foothills or near downtown, we've got you covered.
              </p>

              <p>
                We understand that when your heating or AC goes out in Eagle, you want it fixed fast and done right. Our technicians are experienced with all types of systems—from standard split systems to high-efficiency heat pumps and zoned systems.
              </p>

              <p>
                Eagle winters can be cold, especially up in the hills. When your furnace stops working, we respond quickly. And in summer, those large Eagle homes can really test an AC system. We keep you comfortable year-round.
              </p>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                Our Eagle Services
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>AC repair:</strong> All makes and models. Central air, ductless mini-splits, heat pumps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Furnace service:</strong> Gas, electric, and propane systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>System installation:</strong> New construction or replacement—properly sized for your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Zoning systems:</strong> Keep different areas of large homes at different temperatures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 emergency:</strong> Available around the clock for urgent repairs</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                Eagle Areas We Serve
              </h3>

              <p>
                We work throughout Eagle and surrounding areas:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {eagleNeighborhoods.map((neighborhood) => (
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
                Need HVAC Service in Eagle?
              </h3>
              <p className="text-gray-300 mb-6">
                Call for a free estimate. Quality service, fair prices.
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
            <Link href="/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
