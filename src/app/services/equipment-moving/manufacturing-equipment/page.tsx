import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manufacturing Equipment Moving Boise | Industrial Machinery Relocation',
  description: 'Professional manufacturing equipment and machinery moving in Boise. CNC machines, assembly equipment, and industrial tools. Licensed and insured. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/equipment-moving/manufacturing-equipment',
  },
}

export default function ManufacturingEquipmentPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Manufacturing Equipment Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move manufacturing machinery and production equipment safely and efficiently.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Manufacturing Equipment Is Specialized Work</h2>
            <p>
              Manufacturing equipment is heavy, expensive, and often precisely calibrated. Moving it
              requires the right equipment, careful planning, and experience with industrial machinery.
              We've relocated entire manufacturing facilities, moved individual machines between plants,
              and helped companies reorganize production floors.
            </p>
            <p>
              Whether you're moving CNC machines, assembly equipment, or an entire production line,
              we'll handle the physical relocation so you can focus on getting production back up and
              running at the new location.
            </p>

            <h2>Manufacturing Equipment We Move</h2>
            <ul>
              <li>CNC machines and lathes</li>
              <li>Milling machines</li>
              <li>Assembly line equipment</li>
              <li>Industrial presses</li>
              <li>Welding equipment</li>
              <li>Injection molding machines</li>
              <li>Packaging equipment</li>
              <li>Industrial saws and cutting equipment</li>
              <li>Quality control and testing equipment</li>
              <li>Material handling systems</li>
            </ul>

            <h2>Heavy Machinery Rigging</h2>
            <p>
              Large manufacturing equipment often weighs several tons and can't be moved with regular
              dollies. We use hydraulic jacks, gantries, skates, and rigging equipment to lift and
              move heavy machinery. For extremely heavy equipment, we can coordinate with a crane
              service if needed.
            </p>

            <h2>Do You Disassemble Equipment?</h2>
            <p>
              We can handle basic disassembly—removing guards, detaching components, separating sections
              that are designed to come apart. For complex machinery that requires technical knowledge
              to disassemble, you'll need a technician who knows that specific equipment. We'll work
              with them to coordinate the disassembly, move, and reassembly.
            </p>

            <h2>CNC Machines and Precision Equipment</h2>
            <p>
              CNC machines, lathes, and other precision equipment need careful handling. We'll move
              them on specialized machinery skates to prevent damage. At the new facility, we'll
              position and level the equipment. Your equipment technician will handle final calibration
              and testing to make sure everything is operating within spec.
            </p>

            <h2>Production Line Moves</h2>
            <p>
              Moving an entire production line requires detailed planning. We'll work with your
              production manager to understand the equipment sequence, dependencies, and how everything
              connects. We can do phased moves where we relocate sections at a time, or full moves
              where we shut down and move everything at once.
            </p>

            <h2>What About Electrical and Utility Connections?</h2>
            <p>
              We'll disconnect basic power connections (unplugging equipment). For hard-wired connections,
              three-phase power, compressed air lines, coolant systems, or other utility connections,
              you'll need licensed electricians and technicians. We'll coordinate with them to make
              sure disconnection and reconnection happens smoothly.
            </p>

            <h2>Floor Anchor and Mounting</h2>
            <p>
              Many manufacturing machines need to be bolted to the floor. We can unbolt equipment at
              the old location and help with basic mounting at the new facility if anchor points exist.
              For drilling new anchor points or complex mounting, you'll need that done separately,
              but we'll position equipment exactly where it needs to be.
            </p>

            <h2>Minimizing Production Downtime</h2>
            <p>
              We understand that downtime costs money. We'll work nights, weekends, or whenever you
              need us to minimize the impact on production. Some companies shut down for a week to
              relocate. Others move one section at a time over several weekends. We'll work with your
              schedule.
            </p>

            <h2>What If Equipment Won't Fit Through Doors?</h2>
            <p>
              We'll measure everything beforehand—the equipment, the doorways, the routes. If equipment
              won't fit through standard doors, we'll find alternatives. Loading dock doors, overhead
              doors, removing door frames temporarily, or in some cases, using a crane to lift equipment
              through an exterior opening. We'll figure out a solution.
            </p>

            <h2>Ready to Move Your Manufacturing Equipment?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your equipment move. We'll schedule a site visit, assess the machinery,
              measure routes, and give you a detailed plan and quote for the relocation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Manufacturing Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional industrial equipment relocation with specialized rigging.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
