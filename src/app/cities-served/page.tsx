import { Metadata } from 'next'
import { Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Moving Service Areas | Boise, Meridian, Nampa & Caldwell',
  description: 'Professional commercial moving services throughout the Treasure Valley. We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/cities-served',
  },
}

export default function CitiesServedPage() {
  const cities = [
    {
      name: "Boise",
      slug: "boise",
      description: "Full-service commercial moving throughout Boise, from downtown offices to industrial facilities."
    },
    {
      name: "Meridian",
      slug: "meridian",
      description: "Professional business relocation services for Meridian's growing commercial community."
    },
    {
      name: "Nampa",
      slug: "nampa",
      description: "Complete commercial moving for Nampa businesses, warehouses, and offices."
    },
    {
      name: "Caldwell",
      slug: "caldwell",
      description: "Experienced commercial movers serving Caldwell businesses and industrial facilities."
    },
    {
      name: "Eagle",
      slug: "eagle",
      description: "Professional office and business moving services in Eagle."
    },
    {
      name: "Garden City",
      slug: "garden-city",
      description: "Commercial moving services for Garden City businesses and facilities."
    },
    {
      name: "Kuna",
      slug: "kuna",
      description: "Reliable commercial moving for Kuna's business community."
    },
    {
      name: "Star",
      slug: "star",
      description: "Professional business relocation services in Star."
    },
    {
      name: "Middleton",
      slug: "middleton",
      description: "Commercial moving services for Middleton businesses."
    }
  ]

  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional commercial moving throughout the Treasure Valley.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Serving the Entire Treasure Valley</h2>
            <p>
              We're based in the Boise area and serve businesses throughout the Treasure Valley.
              Whether you're in downtown Boise or an industrial park in Nampa, we know the area
              and we know how to navigate commercial moves in each city.
            </p>
            <p>
              Every city has its quirks—different loading dock regulations, building access requirements,
              parking restrictions. We've worked in all these areas and know what to expect. That
              local knowledge makes moves go smoother.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities-served/${city.slug}`}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-dark-blue" />
                  <h3 className="text-2xl font-bold text-dark-blue group-hover:text-[#FFC845] transition-colors">
                    {city.name}
                  </h3>
                </div>
                <p className="text-gray-700">{city.description}</p>
                <div className="mt-4 text-dark-blue font-semibold group-hover:text-[#FFC845] transition-colors">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Beyond the Major Cities</h2>
            <p>
              While we've listed our primary service areas above, we regularly work in surrounding
              communities too. If you're in the Treasure Valley and need commercial moving services,
              give us a call. We can almost certainly help.
            </p>

            <h2>What's Included in Our Service Area</h2>
            <ul>
              <li>Office moving in all Treasure Valley cities</li>
              <li>Warehouse and industrial facility relocation</li>
              <li>Retail and restaurant moves</li>
              <li>Equipment moving and installation</li>
              <li>IT infrastructure relocation</li>
              <li>All commercial moving services</li>
            </ul>

            <h2>Why Local Expertise Matters</h2>
            <p>
              When you hire local commercial movers, you get people who know the area. We know which
              buildings require freight elevator reservations weeks in advance. We know which
              industrial parks have loading dock restrictions. We know the traffic patterns and the
              best times to move through downtown.
            </p>
            <p>
              This local knowledge prevents delays and problems. National moving companies sending
              crews from other states don't have that advantage.
            </p>

            <h2>Moving Outside the Treasure Valley?</h2>
            <p>
              Most of our work is within the Treasure Valley, but we can handle moves to other parts
              of Idaho. If you're relocating to another state, we can discuss options. Call us at{' '}
              <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about your specific situation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-dark-blue mb-6">Ready to Move Your Business?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Wherever you're located in the Treasure Valley, we're ready to help with your commercial move.
          </p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-dark-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-blue/90 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987 - Get Your Free Quote
          </a>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Local Commercial Movers You Can Trust</h2>
          <p className="text-xl text-gray-300 mb-8">Professional moving services throughout the Treasure Valley.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
