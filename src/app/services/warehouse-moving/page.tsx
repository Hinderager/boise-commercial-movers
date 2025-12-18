import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Warehouse Moving Services Boise | Heavy Equipment Relocation',
  description: 'Professional warehouse relocation services in Boise. Move inventory, shelving, heavy equipment, and more. Experienced commercial movers. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/warehouse-moving',
  },
}

export default function WarehouseMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Warehouse Moving Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Heavy-duty warehouse relocation for inventory, equipment, and industrial facilities.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Warehouse Moves Are a Different Animal</h2>
            <p>
              Warehouses have unique challenges. You've got pallets of inventory, industrial shelving,
              forklifts, heavy machinery, and a lot of square footage to cover. This isn't a job for
              a couple guys with a truck. It takes planning, equipment, and experience.
            </p>
            <p>
              We've done warehouse moves before. We know how to handle heavy loads, organize inventory transfers,
              and get your operation back up and running in the new space.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Warehouse inventory and palletized goods</li>
              <li>Industrial shelving and racking systems</li>
              <li>Forklifts and material handling equipment</li>
              <li>Heavy machinery and production equipment</li>
              <li>Pallet jacks, conveyors, and warehouse tools</li>
              <li>Office areas within the warehouse</li>
            </ul>

            <h2>We Bring the Right Equipment</h2>
            <p>
              Moving warehouse equipment requires more than muscle. We bring pallet jacks, lift straps,
              moving dollies, and everything else needed to move heavy loads safely. If you've got
              forklifts on site, we can coordinate with you to use them. If not, we'll bring what we need.
            </p>

            <h2>Inventory Management During the Move</h2>
            <p>
              Keeping track of inventory during a warehouse move is critical. We can help you organize
              the move by sections, label everything, and make sure it all ends up in the right place
              at the new facility. You tell us the system you want to use, and we'll follow it.
            </p>

            <h2>Shelving and Racking Systems</h2>
            <p>
              We can disassemble, move, and reassemble industrial shelving and racking systems. Whether it's
              pallet racking, wire shelving, or custom storage systems, we'll make sure it's done right
              so it's safe and ready to use when you need it.
            </p>

            <h2>Phased Warehouse Moves</h2>
            <p>
              Can't shut down the whole warehouse at once? No problem. We can do a phased move where
              we relocate one section at a time. You stay operational while we handle the transition.
              It takes longer, but it keeps your business running.
            </p>

            <h2>Will You Move Everything in One Day?</h2>
            <p>
              Depends on the size of the warehouse and how much you're moving. Small warehouses can
              often be done in a day or two. Larger facilities might take longer. We'll give you an
              honest timeline when we assess the job.
            </p>

            <h2>Do You Handle Cross-Town or Long-Distance Warehouse Moves?</h2>
            <p>
              Both. If you're moving across town or across the state, we can handle it. Long-distance
              warehouse moves take more coordination, but we've done them before.
            </p>

            <h2>Ready to Move Your Warehouse?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your warehouse relocation. We'll need to know what you're moving, the timeline,
              and any special equipment or considerations. Then we'll put together a plan and a quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Warehouse Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional warehouse relocation with the right equipment and experience.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
