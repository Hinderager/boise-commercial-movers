import { Metadata } from 'next'
import { CheckCircle, Phone, Snowflake } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AC Installation Boise | New Air Conditioner | Boise HVAC Pros',
  description: 'Professional AC installation in Boise, Meridian, Nampa & the Treasure Valley. Carrier, Trane, Lennox & more. Free estimates. Financing available. Call (208) 505-9352.',
  keywords: ['AC installation Boise', 'new air conditioner Boise Idaho', 'AC replacement Meridian', 'central air installation Nampa', 'HVAC installation near me'],
  openGraph: {
    title: 'AC Installation Boise | New Air Conditioner',
    description: 'Professional AC installation in Boise and the Treasure Valley. Quality equipment, expert installation.',
    url: 'https://hvac-boise.com/ac-installation',
  },
  alternates: { canonical: 'https://hvac-boise.com/ac-installation' },
}

const benefits = [
  { title: 'Lower Energy Bills', description: 'New AC units are significantly more efficient than older models. Many homeowners see 20-40% savings on cooling costs.' },
  { title: 'Better Comfort', description: 'Modern systems cool more evenly and remove humidity better. No more hot spots or sticky summer days inside.' },
  { title: 'Quieter Operation', description: 'Older AC units can be loud. New equipment runs much quieter—you might not even know it\'s on.' },
  { title: 'Fewer Repairs', description: 'New equipment means fewer breakdowns and service calls. Plus you get a warranty for peace of mind.' },
]

export default function ACInstallationPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">AC Installation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Quality air conditioning installation for Boise, Meridian, Nampa, and the Treasure Valley. Right-sized equipment, expert installation.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Time for a New AC?</h2>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>If your AC is over 15 years old, constantly needs repairs, or just can't keep up with Boise summers anymore, it might be time for a new system. We can help you figure out if replacement makes sense.</p>
              <p>We're not here to push you into a new system you don't need. Sometimes repair is the right call. But when replacement is the better option, we'll help you choose the right equipment for your home and budget.</p>
              <p>We install Carrier, Trane, Lennox, Rheem, Goodman, and other quality brands. Each has different price points and features—we'll help you understand the differences so you can make an informed decision.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Benefits of a New AC System</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-dark-blue mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Our Installation Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Load calculation:</strong> We calculate exactly what size system your home needs. Not a guess—actual math based on your home's square footage, insulation, windows, and more.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Equipment options:</strong> We present options at different price points so you can choose what works for your budget.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Professional installation:</strong> Proper installation matters. We follow manufacturer specifications and local codes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Testing and walkthrough:</strong> We make sure everything works and show you how to use your new system.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Financing Available</h3>
            <p className="text-gray-600 mb-6">A new AC system is a significant investment. We offer financing options to help make it more affordable. Get a new system now and pay over time with approved credit.</p>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <Snowflake className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready for a New AC?</h3>
              <p className="text-gray-300 mb-6">Get a free estimate. We'll evaluate your current system and discuss your options.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ac-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">AC Repair</Link>
            <Link href="/heating-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Heating Repair</Link>
            <Link href="/furnace-installation" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Furnace Installation</Link>
            <Link href="/hvac-maintenance" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">HVAC Maintenance</Link>
            <Link href="/emergency-hvac" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Emergency Service</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
