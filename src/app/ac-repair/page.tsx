import { Metadata } from 'next'
import { CheckCircle, Phone, AlertTriangle, ThermometerSun } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AC Repair Boise | Air Conditioning Service | Boise HVAC Pros',
  description: 'Fast AC repair in Boise, Meridian, Nampa & the Treasure Valley. All brands serviced. Same-day service available. Licensed & insured. Call (208) 505-9352 for air conditioning repair.',
  keywords: ['AC repair Boise', 'air conditioning repair Boise Idaho', 'AC service Meridian', 'air conditioner repair Nampa', 'AC not cooling', 'AC repair near me'],
  openGraph: {
    title: 'AC Repair Boise | Air Conditioning Service',
    description: 'Professional AC repair in Boise and the Treasure Valley. Same-day service available.',
    url: 'https://hvac-boise.com/ac-repair',
  },
  alternates: { canonical: 'https://hvac-boise.com/ac-repair' },
}

const commonProblems = [
  { title: 'AC Not Cooling', description: 'Blowing warm air or not cooling enough? Could be low refrigerant, a dirty filter, or compressor issues.' },
  { title: 'AC Won\'t Turn On', description: 'Check your thermostat and breaker first. If those are fine, it might be a capacitor, contactor, or electrical problem.' },
  { title: 'Strange Noises', description: 'Grinding, squealing, or banging sounds usually mean something\'s loose or wearing out. Better to catch it early.' },
  { title: 'AC Runs Constantly', description: 'If it never shuts off, the system might be undersized, low on refrigerant, or have airflow problems.' },
  { title: 'High Energy Bills', description: 'Sudden spike in your electric bill? Your AC might be working harder than it should due to a developing problem.' },
  { title: 'Water Leaks', description: 'Water around your indoor unit usually means a clogged drain line or frozen evaporator coil.' },
]

export default function ACRepairPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">AC Repair Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, reliable air conditioning repair in Boise, Meridian, Nampa, and the Treasure Valley. We fix all makes and models.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">When Your AC Stops Working</h2>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>Boise summers don't mess around. When it's 100 degrees outside and your AC quits, you need help fast. We get that—which is why we offer same-day service for most AC repairs.</p>
              <p>Our technicians show up with fully stocked trucks. Common parts like capacitors, contactors, and motors are usually on hand. That means we can fix most problems in a single visit without waiting for parts.</p>
              <p>We work on all brands—Carrier, Trane, Lennox, Rheem, Goodman, Bryant, American Standard, you name it. Doesn't matter if it's 20 years old or brand new. We'll diagnose the problem and give you options.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Common AC Problems We Fix</h3>
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

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">What to Expect</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront pricing:</strong> We tell you the cost before we start. No surprises.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-day service:</strong> Call in the morning, we're usually there that afternoon.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed technicians:</strong> Our techs know what they're doing. Proper training, proper tools.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Warranty on repairs:</strong> We stand behind our work.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <ThermometerSun className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">AC Not Cooling?</h3>
              <p className="text-gray-300 mb-6">Don't suffer through the heat. Give us a call and we'll get your AC running again.</p>
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
            <Link href="/ac-installation" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">AC Installation</Link>
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
