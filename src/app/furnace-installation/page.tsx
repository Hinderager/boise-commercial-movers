import { Metadata } from 'next'
import { CheckCircle, Phone, Flame, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Furnace Installation Boise | New Heating System | Boise HVAC Pros',
  description: 'Professional furnace installation in Boise, Meridian, Nampa & the Treasure Valley. Gas, electric, and propane furnaces. Free estimates. Financing available. Call (208) 505-9352.',
  keywords: ['furnace installation Boise', 'new furnace Boise Idaho', 'heating system installation Meridian', 'furnace replacement Nampa', 'gas furnace install near me'],
  openGraph: {
    title: 'Furnace Installation Boise | New Heating System',
    description: 'Professional furnace installation in Boise and the Treasure Valley. Quality equipment, expert installation.',
    url: 'https://hvac-boise.com/furnace-installation',
  },
  alternates: { canonical: 'https://hvac-boise.com/furnace-installation' },
}

const signs = [
  { title: 'Age', description: 'If your furnace is over 15-20 years old, it\'s probably time to start thinking about replacement. Efficiency drops and parts become harder to find.' },
  { title: 'Frequent Repairs', description: 'When you\'re calling us every winter for another fix, those repair costs add up. At some point, replacement makes more financial sense.' },
  { title: 'Rising Bills', description: 'Old furnaces lose efficiency over time. If your heating bills keep climbing, a new high-efficiency system could pay for itself.' },
  { title: 'Uneven Heating', description: 'Some rooms cold while others are warm? Your furnace might be struggling to keep up with your home\'s needs.' },
]

export default function FurnaceInstallationPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Furnace Installation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Quality furnace installation for Boise, Meridian, Nampa, and the Treasure Valley. Right-sized equipment for Idaho winters.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">When Your Furnace Needs Replacing</h2>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>Idaho winters don't mess around. When it's 10 degrees outside, you need a furnace that works—reliably, efficiently, and without drama. If yours is getting old or constantly needing repairs, it might be time for a new one.</p>
              <p>We install gas furnaces, electric furnaces, and propane systems. We carry equipment from Carrier, Trane, Lennox, Rheem, Goodman, and other quality brands. Different price points, different features—we'll help you find what fits your home and budget.</p>
              <p>The key to a good furnace installation isn't just the equipment. It's proper sizing, correct installation, and making sure everything works together with your existing ductwork. We do all of that.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Signs You Might Need a New Furnace</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {signs.map((sign) => (
                <div key={sign.title} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-dark-blue mb-2">{sign.title}</h4>
                  <p className="text-gray-600">{sign.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Our Installation Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Home assessment:</strong> We evaluate your current system, ductwork, and home to determine the right furnace size and type.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Load calculation:</strong> Proper sizing matters. Too small won't keep up; too big wastes energy and creates comfort issues.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Equipment options:</strong> We present choices at different price points so you can make an informed decision.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Professional installation:</strong> Manufacturer specs, local codes, proper venting—we do it right.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Testing and walkthrough:</strong> We make sure everything works and show you how to use your new system.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Financing Available</h3>
            <p className="text-gray-600 mb-6">A new furnace is a significant purchase. We offer financing options to help make it manageable. Get the heating system you need now and pay over time with approved credit.</p>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <Flame className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready for a New Furnace?</h3>
              <p className="text-gray-300 mb-6">Get a free estimate. We'll evaluate your situation and discuss your options—no pressure.</p>
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
            <Link href="/ac-installation" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">AC Installation</Link>
            <Link href="/heating-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Heating Repair</Link>
            <Link href="/hvac-maintenance" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">HVAC Maintenance</Link>
            <Link href="/emergency-hvac" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Emergency Service</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
