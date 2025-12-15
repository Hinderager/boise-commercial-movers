import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FAQ } from '@/components/FAQ'
import { StructuredData } from '@/components/StructuredData'
import { CheckCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services Nampa Idaho | AC Repair & Heating | Boise HVAC Pros',
  description: 'Professional HVAC services in Nampa, Idaho. AC repair, furnace installation, heating services. Licensed & insured. 24/7 emergency service available. Free estimates. Call (208) 505-9352.',
  keywords: [
    'HVAC Nampa',
    'AC repair Nampa Idaho',
    'furnace repair Nampa',
    'heating services Nampa',
    'air conditioning Nampa ID',
    'HVAC contractor Nampa',
    'furnace installation Nampa Idaho',
    'AC installation Nampa',
    'emergency HVAC Nampa',
    'Nampa heating and cooling',
  ],
  openGraph: {
    title: 'HVAC Services Nampa Idaho | AC Repair & Heating',
    description: 'Professional heating and air conditioning services in Nampa, Idaho. Licensed, insured, and available 24/7 for emergencies.',
    url: 'https://hvac-boise.com/nampa',
  },
  alternates: {
    canonical: 'https://hvac-boise.com/nampa',
  },
}

const nampaNeighborhoods = [
  'Downtown Nampa',
  'North Nampa',
  'South Nampa',
  'East Nampa',
  'West Nampa',
  'Southridge',
  'Birch Lane',
  'Ridgecrest',
  'Greenhurst',
  'Centennial',
  'Karcher',
  'Garrity',
]

export default function NampaPage() {
  return (
    <main>
      <StructuredData city="Nampa" />

      <HeroSection
        city="Nampa"
        headline="HVAC Services in Nampa, Idaho"
        subheadline="Reliable heating and cooling for Nampa families."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              Nampa HVAC Services
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 [&>p]:mb-6">
              <p>
                Nampa homeowners know the drill. Hot summers, cold winters, and HVAC systems that work overtime. When your heating or cooling goes out, you need someone who can get there fast and fix it right.
              </p>

              <p>
                We've worked on systems all over Nampa—from the older homes near downtown to the newer builds out by the Karcher interchange. Different homes, different systems, but the same commitment to getting your comfort back.
              </p>

              <p>
                Whether your AC stopped blowing cold air or your furnace won't kick on, we can help. Most repairs can be done the same day, and we always give you the price before we start.
              </p>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                What We Offer in Nampa
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>AC repair and service:</strong> All brands, all problems. We'll get your cool air back</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Furnace repair:</strong> Gas, electric, heat pumps—we work on them all</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>System replacement:</strong> When repair doesn't make sense, we'll help you find the right new system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Preventive maintenance:</strong> Tune-ups that prevent expensive breakdowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 emergency repairs:</strong> Because furnaces don't always break during business hours</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-dark-blue mt-8 mb-4">
                Nampa Areas We Cover
              </h3>

              <p>
                We serve all Nampa neighborhoods:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {nampaNeighborhoods.map((neighborhood) => (
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
                Need HVAC Service in Nampa?
              </h3>
              <p className="text-gray-300 mb-6">
                Call us today. Free estimates, fair prices.
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
            <Link href="/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
