import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Warehouse Relocation Boise | Industrial Moving Services',
  description: 'Professional warehouse relocation in Boise. Move inventory, racking, equipment, and operations with minimal downtime. Licensed and insured. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/warehouse-moving/warehouse-relocation',
  },
}

export default function WarehouseRelocationPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Warehouse Relocation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move your entire warehouse operation—inventory, racking, equipment—efficiently and safely.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving a Warehouse Takes Planning</h2>
            <p>
              Warehouse moves are complex. You've got thousands of square feet of inventory, heavy
              racking systems, forklifts, pallet jacks, and daily operations that can't just stop.
              We've moved distribution centers, storage warehouses, manufacturing facilities—places
              where downtime means real money lost.
            </p>
            <p>
              That's why we plan warehouse relocations carefully. We'll work with your team to create
              a phased move schedule that keeps operations running as much as possible. Some companies
              can shut down for a weekend. Others need a gradual transition. We'll figure out what works.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Pallet racking and shelving systems</li>
              <li>Inventory (palletized or boxed)</li>
              <li>Forklifts and material handling equipment</li>
              <li>Office and administrative areas</li>
              <li>Shipping and receiving equipment</li>
              <li>Loading dock equipment</li>
              <li>Security and safety systems</li>
              <li>Warehouse machinery</li>
            </ul>

            <h2>Inventory Management During the Move</h2>
            <p>
              If your inventory is already on pallets, we'll move it that way. We've got the equipment
              to handle palletized loads efficiently. If things need to be boxed or reorganized, we can
              do that too. We'll work with your warehouse manager to make sure inventory tracking stays
              accurate throughout the move.
            </p>

            <h2>Racking and Shelving</h2>
            <p>
              Warehouse racking is heavy and requires careful disassembly. We'll take down your racking
              systems, transport everything, and can help with reinstallation at the new warehouse
              (depending on the type of racking). For complex racking installations, you might need a
              racking specialist, but we'll coordinate with them to get everything done.
            </p>

            <h2>Can You Move Operating Warehouses?</h2>
            <p>
              Yes. We've done phased moves where we relocate sections of the warehouse at a time so
              operations can continue. It takes longer, but if you can't shut down completely, it's
              the way to go. We'll move one section over a weekend, get it operational at the new spot,
              then come back for the next section.
            </p>

            <h2>Heavy Equipment and Machinery</h2>
            <p>
              Forklifts, pallet jacks, conveyor systems, industrial machinery—we'll move it all.
              For really heavy stuff (multi-ton machinery), we might bring in specialized rigging
              equipment. We'll assess what you've got and come prepared with the right tools.
            </p>

            <h2>How Long Does a Warehouse Move Take?</h2>
            <p>
              Depends on the size. A small warehouse (10,000 sq ft) might take 2-3 days. Larger
              operations (50,000+ sq ft) could take a week or more. Phased moves stretch out over
              several weeks. We'll give you a timeline after we see your operation and understand
              your requirements.
            </p>

            <h2>Do You Handle Climate-Controlled Storage?</h2>
            <p>
              If you've got climate-sensitive inventory, we'll coordinate the move to minimize
              exposure time. For refrigerated or frozen goods, you might need a refrigerated truck.
              We can arrange that or work with your existing cold storage provider.
            </p>

            <h2>What About Setup at the New Warehouse?</h2>
            <p>
              We'll help get the new warehouse operational. Install racking, organize inventory,
              set up the office area, place equipment—whatever you need to start operating.
              You tell us the layout, and we'll make it happen.
            </p>

            <h2>Ready to Relocate Your Warehouse?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              we'll schedule a site visit. We'll tour your current warehouse, talk about your operations,
              and create a detailed relocation plan with clear timelines and pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Warehouse Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional industrial relocation with minimal operational disruption.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
