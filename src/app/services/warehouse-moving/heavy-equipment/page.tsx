import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Heavy Equipment Moving Boise | Industrial Machinery Relocation',
  description: 'Professional heavy equipment and machinery moving in Boise. Forklifts, industrial machines, and oversized equipment. Licensed and insured. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/warehouse-moving/heavy-equipment',
  },
}

export default function HeavyEquipmentPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Heavy Equipment Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move industrial machinery, forklifts, and heavy equipment safely and efficiently.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Heavy Equipment Takes Expertise</h2>
            <p>
              Heavy equipment isn't something you can just toss in the back of a truck. It's expensive,
              it's heavy, and it needs to arrive at the new location in working condition. We've moved
              forklifts, industrial machines, manufacturing equipment—stuff that weighs thousands of pounds.
            </p>
            <p>
              We bring the right equipment and the right crew. Dollies, hydraulic lifts, straps, ramps—
              whatever it takes to move your equipment safely. And we're insured, so if something goes
              wrong (which it rarely does), you're covered.
            </p>

            <h2>Equipment We Move</h2>
            <ul>
              <li>Forklifts and pallet jacks</li>
              <li>Industrial machinery and equipment</li>
              <li>Manufacturing equipment</li>
              <li>CNC machines and lathes</li>
              <li>Compressors and generators</li>
              <li>Conveyor systems</li>
              <li>Printing presses</li>
              <li>Construction equipment</li>
              <li>Any heavy commercial equipment</li>
            </ul>

            <h2>Forklifts and Material Handling Equipment</h2>
            <p>
              Forklifts are tricky. They're heavy (5,000-15,000 lbs typically) and awkward to move.
              We've got equipment to load and transport forklifts safely. We'll secure them properly
              for transport and unload them at your new warehouse. Same goes for pallet jacks, order
              pickers, and other material handling equipment.
            </p>

            <h2>Industrial Machinery</h2>
            <p>
              Manufacturing equipment, assembly line machines, industrial tools—we've moved it all.
              Some machines can be wheeled onto our trucks. Others need to be lifted with hydraulic
              equipment or rigging. We'll assess what you've got and come prepared.
            </p>

            <h2>Do You Disassemble Equipment?</h2>
            <p>
              If equipment needs to be partially disassembled to move through doorways or load onto
              trucks, we can handle basic disassembly. For complex machinery that requires specialized
              knowledge, you might need a technician who knows that specific equipment. We'll coordinate
              with them to get the job done.
            </p>

            <h2>What About Reinstallation?</h2>
            <p>
              We'll position equipment at the new location and can help with basic setup—leveling
              machines, securing them to the floor (if anchor points exist), reconnecting power (plugging
              in). For technical installations that require calibration or specialized setup, you'll
              need a qualified technician for that equipment.
            </p>

            <h2>Can You Move Multi-Ton Equipment?</h2>
            <p>
              Yes, but it requires special rigging and equipment. We've moved equipment weighing several
              tons. For really heavy stuff, we bring in hydraulic gantries, skates, and reinforced dollies.
              Sometimes we need to coordinate with a crane service if the equipment needs to be lifted
              externally. We'll figure out the logistics.
            </p>

            <h2>What If Equipment Won't Fit Through Doors?</h2>
            <p>
              We'll measure everything beforehand. If equipment is too big for doorways, we'll find
              another route—loading docks, oversized doors, windows, even removing a wall panel if
              that's an option. If there's absolutely no way to get it out, you might need a crane to
              lift it externally. We'll assess the situation and tell you what's needed.
            </p>

            <h2>How Do You Protect Equipment During Transport?</h2>
            <p>
              Equipment gets wrapped, padded, and secured for transport. We use moving blankets, straps,
              and blocking to prevent shifting during transit. Delicate components get extra protection.
              Everything is loaded carefully to prevent damage.
            </p>

            <h2>Ready to Move Heavy Equipment?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about what you're moving. We'll schedule a site visit, assess the equipment,
              measure doorways and routes, and give you a detailed quote for the move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Heavy Equipment Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Safe, professional heavy equipment relocation with the right tools.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
