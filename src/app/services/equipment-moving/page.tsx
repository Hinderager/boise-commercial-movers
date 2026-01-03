import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Equipment Moving Services Boise | IT, Medical, Industrial Equipment',
  description: 'Specialized equipment moving services for IT equipment, medical devices, manufacturing machinery, and more in Boise. Expert commercial movers. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/equipment-moving',
  },
}

export default function EquipmentMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Equipment Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Specialized moving for IT equipment, medical devices, and industrial machinery.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Equipment Is Specialized Work</h2>
            <p>
              Some things you can't just throw in a box. Medical equipment, IT servers, manufacturing machines—these
              are expensive, sensitive, and often mission-critical for your business. They need to be disconnected
              properly, moved carefully, and reconnected correctly.
            </p>
            <p>
              That's our specialty. We've moved all kinds of equipment for businesses across the Treasure Valley,
              and we know how to do it without causing downtime or damage.
            </p>

            <h2>Types of Equipment We Move</h2>

            <h3>IT Equipment</h3>
            <p>
              Servers, network racks, workstations, UPS systems, cabling—we know this stuff is fragile and expensive.
              We'll disconnect it, label everything, move it securely, and help you get it set up at the new location.
              We work with your IT team to make sure nothing gets lost in the shuffle.
            </p>

            <h3>Medical Equipment</h3>
            <p>
              Imaging machines, dental chairs, surgical equipment, patient monitors—medical equipment is expensive
              and needs to be handled carefully. We've moved medical offices and know the precautions required.
            </p>

            <h3>Manufacturing Equipment</h3>
            <p>
              CNC machines, industrial presses, assembly line equipment, large tools—if you manufacture things,
              you've got equipment that's heavy and valuable. We bring the right crew and tools to move it safely.
            </p>

            <h3>Lab Equipment</h3>
            <p>
              Laboratory equipment requires special care. We can move microscopes, centrifuges, testing equipment,
              and other delicate instruments used in research and testing facilities.
            </p>

            <h3>Commercial Kitchen Equipment</h3>
            <p>
              Walk-in coolers, commercial ovens, dishwashers, prep tables—restaurant and commercial kitchen
              equipment is bulky and often requires special disconnection and reconnection. We've done it many times.
            </p>

            <h2>We Work With Your Technicians</h2>
            <p>
              For specialized equipment, we're not trying to be electricians or IT pros. We'll work with your
              technicians or service providers to make sure everything is disconnected and reconnected correctly.
              Our job is to move it safely. Their job is to make sure it works when we're done.
            </p>

            <h2>Crating and Custom Packing</h2>
            <p>
              Some equipment needs custom crating to protect it during transport. If your equipment came in a crate
              originally, we can build a new one if needed. Otherwise, we'll use heavy-duty packing materials and
              secure it properly for the move.
            </p>

            <h2>Will You Move Just One Piece of Equipment?</h2>
            <p>
              Yes. If you just need one machine moved, we can do that. You don't have to be relocating your entire
              facility. Call us, describe what needs to be moved, and we'll give you a quote.
            </p>

            <h2>What About Insurance?</h2>
            <p>
              We're fully insured. If you're moving particularly valuable or sensitive equipment, let us know
              ahead of time. We can discuss additional insurance coverage if needed.
            </p>

            <h2>Ready to Move Your Equipment?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about what you need moved. We'll ask about the equipment, the locations, and any special
              requirements. Then we'll put together a plan and a quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get an Equipment Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Specialized equipment moving with the care and expertise you need.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
