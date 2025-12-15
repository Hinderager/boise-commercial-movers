import { Metadata } from 'next'
import { CheckCircle, Phone, AlertTriangle, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Emergency HVAC Boise | After Hours Service | Boise HVAC Pros',
  description: '24/7 emergency HVAC service in Boise, Meridian, Nampa & the Treasure Valley. No heat? AC died? We respond fast, day or night. Call (208) 505-9352 now.',
  keywords: ['emergency HVAC Boise', '24 hour AC repair Boise Idaho', 'emergency furnace repair Meridian', 'after hours heating service Nampa', 'emergency HVAC near me', 'no heat emergency'],
  openGraph: {
    title: '24/7 Emergency HVAC Boise | After Hours Service',
    description: '24/7 emergency heating and cooling service in Boise and the Treasure Valley. Fast response when you need it most.',
    url: 'https://hvac-boise.com/emergency-hvac',
  },
  alternates: { canonical: 'https://hvac-boise.com/emergency-hvac' },
}

const emergencies = [
  { title: 'No Heat in Winter', description: 'When it\'s below freezing and your furnace stops, that\'s an emergency. Pipes can freeze. Your family is at risk. We respond fast.' },
  { title: 'AC Out During Heat Wave', description: 'Extreme heat is dangerous, especially for elderly family members, kids, or anyone with health conditions. We\'ll get you cool again.' },
  { title: 'Gas Smell', description: 'If you smell gas near your furnace, turn off the gas, get everyone out, and call us. Don\'t wait until morning.' },
  { title: 'Carbon Monoxide Alarm', description: 'A CO detector going off is always an emergency. Get out first, then call us to inspect your heating system.' },
  { title: 'Water Leaking From System', description: 'Water damage gets worse fast. Whether it\'s a condensate problem or something else, we can help stop the damage.' },
  { title: 'Electrical Burning Smell', description: 'A burning smell from your HVAC system could indicate serious electrical problems. Turn it off and call immediately.' },
]

export default function EmergencyHVACPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-red-700 to-red-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Clock className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">24/7 Emergency HVAC Service</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">HVAC emergencies don't wait for business hours. Neither do we. Fast response for Boise, Meridian, Nampa, and the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            <Phone className="w-5 h-5" />Call Now: (208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">When to Call for Emergency Service</h2>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>Not every HVAC problem is an emergency. Your AC running a little warm on a mild day? That can wait until morning. But some situations can't wait—and we understand that.</p>
              <p>When your heat goes out on a January night with temperatures in the single digits, that's a real emergency. When your elderly parent's AC dies during a heat advisory, that needs immediate attention. That's why we offer true 24/7 emergency service.</p>
              <p>Call us any time, day or night. We'll get a technician to your home as quickly as possible.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">HVAC Emergencies We Handle</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {emergencies.map((emergency) => (
                <div key={emergency.title} className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-dark-blue mb-2">{emergency.title}</h4>
                      <p className="text-gray-600">{emergency.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">What to Do While You Wait</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>No heat:</strong> Use space heaters safely, close off unused rooms, and make sure pipes in exterior walls have some heat source nearby.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>No AC:</strong> Close blinds on sunny windows, use fans, and stay hydrated. Consider going somewhere cool if the heat is severe.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Gas smell:</strong> Don't use any electrical switches or flames. Get everyone out and call from outside.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Water leak:</strong> Turn off your system if you can. Put down towels or containers to catch water and minimize damage.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Emergency Service Pricing</h3>
            <div className="prose prose-lg text-gray-600 [&>p]:mb-6">
              <p>Emergency calls do cost more than regular service—that's industry standard. We're honest about that upfront. But we also believe in fair pricing, even at 2 AM.</p>
              <p>Before we start any work, we'll tell you what's wrong and what it'll cost. You make the decision. No surprises, no pressure.</p>
            </div>

            <div className="mt-12 p-8 bg-red-700 rounded-xl text-center">
              <Clock className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">HVAC Emergency? Call Now.</h3>
              <p className="text-gray-200 mb-6">We're available 24 hours a day, 7 days a week, 365 days a year.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
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
            <Link href="/hvac-maintenance" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">HVAC Maintenance</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
