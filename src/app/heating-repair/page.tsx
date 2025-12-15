import { Metadata } from 'next'
import { CheckCircle, Phone, AlertTriangle, Flame } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Heating Repair Boise | Furnace Service | Boise HVAC Pros',
  description: 'Fast heating repair in Boise, Meridian, Nampa & the Treasure Valley. Furnace repair, heat pump service. 24/7 emergency service. Call (208) 505-9352.',
  keywords: ['heating repair Boise', 'furnace repair Boise Idaho', 'heater repair Meridian', 'furnace not working Nampa', 'heating service near me', 'no heat'],
  openGraph: {
    title: 'Heating Repair Boise | Furnace Service',
    description: 'Professional heating repair in Boise and the Treasure Valley. 24/7 emergency service available.',
    url: 'https://hvac-boise.com/heating-repair',
  },
  alternates: { canonical: 'https://hvac-boise.com/heating-repair' },
}

const commonProblems = [
  { title: 'No Heat', description: 'Furnace running but blowing cold air? Or not running at all? Could be ignitor, thermostat, gas valve, or control board issues.' },
  { title: 'Furnace Short Cycling', description: 'Turning on and off frequently is hard on your system and usually indicates a problem with airflow, flame sensor, or thermostat.' },
  { title: 'Strange Noises', description: 'Banging, screeching, or rattling sounds from your furnace shouldn\'t be ignored. Something\'s usually wearing out.' },
  { title: 'Yellow Pilot Light', description: 'A healthy flame should be blue. Yellow or orange can indicate incomplete combustion and potential carbon monoxide issues.' },
  { title: 'High Heating Bills', description: 'If your bills jumped suddenly, your furnace might be running inefficiently due to a dirty filter, failing parts, or other issues.' },
  { title: 'Uneven Heating', description: 'Some rooms cold while others are warm? Could be ductwork problems, blower issues, or a system that\'s struggling to keep up.' },
]

export default function HeatingRepairPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Heating Repair Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, reliable heating repair in Boise, Meridian, Nampa, and the Treasure Valley. 24/7 emergency service when you need it most.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">When Your Heat Goes Out</h2>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>Idaho winters are no joke. When your furnace stops working, it's not just uncomfortable—it can be dangerous. Pipes can freeze. Elderly family members and kids are especially vulnerable. That's why we offer 24/7 emergency heating repair.</p>
              <p>Our techs are trained on all types of heating systems: gas furnaces, electric furnaces, heat pumps, and boilers. We carry common parts on our trucks so most repairs can be done in one visit.</p>
              <p>Before we start any work, we'll tell you what's wrong and how much it'll cost to fix. You decide if you want to proceed. No pressure, no surprises.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Common Heating Problems We Fix</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {commonProblems.map((problem) => (
                <div key={problem.title} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-dark-blue mb-2">{problem.title}</h4>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">What We Service</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Gas furnaces:</strong> The most common heating system in the Treasure Valley. We're experts at diagnosing and repairing gas furnace problems.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Electric furnaces:</strong> Less common but we work on them too. Heating elements, sequencers, blower motors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Heat pumps:</strong> These work as both heaters and air conditioners. We handle all heat pump repairs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>All brands:</strong> Carrier, Trane, Lennox, Rheem, Goodman, Bryant, American Standard, and more.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <Flame className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">No Heat? Call Now.</h3>
              <p className="text-gray-300 mb-6">We offer 24/7 emergency heating repair. Don't spend the night in the cold.</p>
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
            <Link href="/furnace-installation" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Furnace Installation</Link>
            <Link href="/hvac-maintenance" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">HVAC Maintenance</Link>
            <Link href="/emergency-hvac" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Emergency Service</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
