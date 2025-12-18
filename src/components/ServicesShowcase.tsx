import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  { title: 'Office Moving & Relocation', description: 'Moving an office is different from moving a house. You need movers who understand business operations and can minimize downtime. We handle everything from cubicles to conference rooms, making sure your team can get back to work fast.', image: '/generated/office-moving.webp', link: '/services/office-moving', buttonText: 'Learn More' },
  { title: 'Business Relocation', description: 'Retail stores, restaurants, medical offices—each type of business has unique moving needs. We work with you to create a plan that gets you operational in your new space as quickly as possible. After-hours and weekend moves available.', image: '/generated/business-relocation.webp', link: '/services/business-relocation', buttonText: 'Learn More' },
  { title: 'Warehouse & Equipment Moving', description: 'Heavy machinery, inventory, racking systems—warehouse moves require specialized equipment and expertise. Our team has the tools and experience to relocate your operation safely and efficiently, whether you are across town or across the state.', image: '/generated/warehouse-moving.webp', link: '/services/warehouse-moving', buttonText: 'Learn More' },
  { title: 'IT & Specialized Equipment', description: 'Servers, workstations, medical equipment, manufacturing machinery—some items need extra care. We work with your IT team to properly disconnect, transport, and reconnect sensitive equipment. Every move is planned to prevent damage and data loss.', image: '/generated/equipment-moving.webp', link: '/services/equipment-moving', buttonText: 'Learn More' },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>Commercial Moving Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">Professional office and business relocation throughout the Treasure Valley. We get your team up and running in your new space with minimal disruption.</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">{service.title}</h3>
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3] bg-gray-200 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl">
                    Commercial Moving
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.description}</p>
                <Link href={service.link} className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide">{service.buttonText}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
