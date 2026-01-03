import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Moving Services in Boise | Office & Business Relocation',
  description: 'Professional commercial moving services in Boise and the Treasure Valley. Office moving, warehouse relocation, equipment moving, and more. Call (208) 768-3987.',
  alternates: { canonical: 'https://boise-commercial-movers.com/services' },
}

const categories = [
  { name: 'Office Moving', slug: 'office-moving', description: 'Complete office relocation services including cubicles, desks, conference rooms, and after-hours moves.' },
  { name: 'Business Relocation', slug: 'business-relocation', description: 'Full-service business moves for retail stores, restaurants, and commercial facilities.' },
  { name: 'Warehouse Moving', slug: 'warehouse-moving', description: 'Professional warehouse relocation, inventory moving, and heavy equipment transport.' },
  { name: 'Equipment Moving', slug: 'equipment-moving', description: 'Specialized moving for IT equipment, medical equipment, and manufacturing machinery.' },
  { name: 'Specialized Services', slug: 'specialized', description: 'IT relocation, furniture installation, and dedicated project management for complex moves.' },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional office and business relocation services for the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{cat.name}</h2>
                <p className="text-gray-600 mb-4">{cat.description}</p>
                <span className="inline-flex items-center text-dark-blue font-semibold">View Services <ArrowRight className="w-4 h-4 ml-2" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Commercial Moving Services?</h2>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
