import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inventory Moving Services Boise | Warehouse Inventory Relocation',
  description: 'Professional inventory moving in Boise. We handle palletized loads, boxed goods, and organized inventory transfers. Fast and accurate. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/warehouse-moving/inventory-moving',
  },
}

export default function InventoryMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Inventory Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move warehouse inventory efficiently with accurate tracking and careful handling.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Inventory Requires Organization</h2>
            <p>
              When you're moving hundreds or thousands of items, organization is everything. Lost
              inventory costs money. Damaged goods cost money. Disorganized inventory at the new
              location means wasted time getting things sorted out.
            </p>
            <p>
              We've moved inventory for distribution centers, retail warehouses, manufacturers,
              and storage facilities. We know how to keep things organized, tracked, and protected
              during transport.
            </p>

            <h2>Types of Inventory We Move</h2>
            <ul>
              <li>Palletized goods and products</li>
              <li>Boxed merchandise and materials</li>
              <li>Raw materials and components</li>
              <li>Finished goods ready for distribution</li>
              <li>Retail inventory and stock</li>
              <li>Small parts and components</li>
              <li>Bulk materials</li>
              <li>Archived documents and records</li>
            </ul>

            <h2>Palletized Inventory</h2>
            <p>
              If your inventory is already on pallets, we'll keep it that way. We've got pallet jacks,
              forklifts, and trucks with liftgates to handle palletized loads. We'll load pallets
              carefully, secure them for transport, and unload them at the new warehouse exactly where
              you want them.
            </p>

            <h2>Boxed and Loose Inventory</h2>
            <p>
              For smaller items or inventory that's not palletized, we'll pack everything into boxes
              or containers. We label everything clearly so you know what's in each box and where it
              needs to go. If you've got a SKU system or inventory tracking, we'll work with that to
              keep records accurate.
            </p>

            <h2>Do You Track Inventory During Moves?</h2>
            <p>
              We'll use your existing tracking system if you have one. Barcode scanning, inventory
              sheets, pallet counts—whatever method you use, we'll document what's being moved.
              We can provide load manifests and delivery confirmations if you need that for your records.
            </p>

            <h2>What About Fragile or High-Value Items?</h2>
            <p>
              Fragile inventory gets extra packing and careful handling. High-value items can be
              tracked separately and transported in secured loads. Just let us know what needs special
              attention and we'll make sure it's protected.
            </p>

            <h2>Can You Reorganize Inventory at the New Location?</h2>
            <p>
              Absolutely. If you're taking the opportunity to reorganize your inventory system—
              changing how products are grouped, updating storage zones, implementing a new layout—
              we can place inventory according to your new system. Give us a layout plan and we'll
              stock the shelves accordingly.
            </p>

            <h2>What If We Need Storage During Transition?</h2>
            <p>
              If there's a gap between moving out of the old warehouse and into the new one, we can
              arrange temporary storage. Your inventory stays safe and secure until the new location
              is ready.
            </p>

            <h2>How Fast Can You Move Inventory?</h2>
            <p>
              Depends on the volume. Smaller inventory moves (a few truckloads) can be done in a day.
              Larger operations might take several days. We'll bring enough crew and equipment to move
              efficiently without sacrificing organization or safety.
            </p>

            <h2>Ready to Move Your Inventory?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your inventory. We'll discuss quantities, how it's currently stored,
              and what you need at the new location. Then we'll give you a detailed quote for the move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Inventory Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Organized, tracked, and carefully handled inventory relocation.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
