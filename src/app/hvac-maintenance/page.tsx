import { Metadata } from 'next'
import { CheckCircle, Phone, Wrench, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Maintenance Boise | AC & Furnace Tune-Up | Boise HVAC Pros',
  description: 'Professional HVAC maintenance in Boise, Meridian, Nampa & the Treasure Valley. AC tune-ups, furnace maintenance. Prevent breakdowns. Call (208) 505-9352.',
  keywords: ['HVAC maintenance Boise', 'AC tune-up Boise Idaho', 'furnace maintenance Meridian', 'heating tune-up Nampa', 'HVAC service near me', 'preventive maintenance'],
  openGraph: {
    title: 'HVAC Maintenance Boise | AC & Furnace Tune-Up',
    description: 'Professional HVAC maintenance in Boise and the Treasure Valley. Keep your system running efficiently.',
    url: 'https://hvac-boise.com/hvac-maintenance',
  },
  alternates: { canonical: 'https://hvac-boise.com/hvac-maintenance' },
}

const acMaintenance = [
  'Clean condenser coils',
  'Check refrigerant levels',
  'Inspect electrical connections',
  'Test capacitors and contactors',
  'Clean or replace filter',
  'Check thermostat calibration',
  'Inspect ductwork connections',
  'Verify proper airflow',
]

const furnaceMaintenance = [
  'Clean burners and heat exchanger',
  'Check gas pressure and connections',
  'Inspect heat exchanger for cracks',
  'Test safety controls',
  'Clean or replace filter',
  'Check thermostat operation',
  'Inspect flue and venting',
  'Lubricate moving parts',
]

export default function HVACMaintenancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">HVAC Maintenance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Keep your heating and cooling systems running efficiently with regular maintenance. Serving Boise, Meridian, Nampa, and the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Maintenance Matters</h2>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>Your HVAC system works hard. In Boise, we ask it to cool through 100-degree summers and heat through freezing winters. That's a lot of wear and tear.</p>
              <p>Regular maintenance catches small problems before they become expensive repairs. A dirty filter restricts airflow and makes your system work harder. A failing capacitor can take out your compressor. A cracked heat exchanger can leak carbon monoxide. These things don't announce themselves—you find them during maintenance.</p>
              <p>Plus, well-maintained equipment runs more efficiently. That means lower energy bills and a system that lasts longer. Most furnaces and AC units should last 15-20 years with proper care. Skip the maintenance, and you might be replacing equipment at 10.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">What's Included in a Tune-Up</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-dark-blue mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#FFC845]" />
                  AC Maintenance (Spring)
                </h4>
                <ul className="space-y-2">
                  {acMaintenance.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-dark-blue mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#FFC845]" />
                  Furnace Maintenance (Fall)
                </h4>
                <ul className="space-y-2">
                  {furnaceMaintenance.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">How Often Should You Schedule Maintenance?</h3>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>Most manufacturers recommend annual maintenance for both heating and cooling equipment. The best time for AC maintenance is spring, before you need it. For furnaces, fall is ideal—get it checked before the cold weather hits.</p>
              <p>If you have a heat pump, it handles both heating and cooling, so you might want maintenance twice a year—once before summer and once before winter.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">What You Can Do Between Visits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Change your filter:</strong> Every 1-3 months depending on the filter type and household conditions (pets, allergies, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Keep vents clear:</strong> Don't block supply or return vents with furniture or drapes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Clear outdoor unit:</strong> Keep at least 2 feet of clearance around your AC condenser</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Listen for changes:</strong> New noises or smells often indicate developing problems</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <Wrench className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Maintenance</h3>
              <p className="text-gray-300 mb-6">Don't wait for a breakdown. Regular maintenance keeps your system running right.</p>
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
            <Link href="/furnace-installation" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Furnace Installation</Link>
            <Link href="/emergency-hvac" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Emergency Service</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
