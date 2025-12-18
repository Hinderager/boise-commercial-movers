import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Office Moving Services in Boise | Top Shelf Commercial Moving',
  description: 'Complete office relocation services including cubicles, desks, conference rooms, and after-hours moves. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-commercial-movers.com/services/office-moving' },
}

const services = [
  { name: 'Full Office Relocation', slug: 'full-office-relocation', description: 'Complete turnkey office moving services with minimal disruption.' },
  { name: 'Cubicle & Desk Moving', slug: 'cubicle-desk-moving', description: 'Professional disassembly, transport, and reassembly of workstations.' },
  { name: 'Conference Room Moving', slug: 'conference-room-moving', description: 'Specialized moving for conference rooms and meeting spaces.' },
  { name: 'After-Hours Moving', slug: 'after-hours-moving', description: 'Evening and weekend moves to minimize business disruption.' },
  { name: 'Office Furniture Assembly', slug: 'furniture-assembly', description: 'Professional assembly of office furniture and systems.' },
]

export default function OfficeMovingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Office Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete office relocation services in Boise and the Treasure Valley.</p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                href={`/services/office-moving/${service.slug}`}
                className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-dark-blue font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <a 
            href="tel:2085059352" 
            className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
