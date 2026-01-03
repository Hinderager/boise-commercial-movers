import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retail Store Moving Boise | Professional Store Relocation Services',
  description: 'Professional retail store moving in Boise. We handle fixtures, inventory, and displays with minimal downtime. Get your store open fast. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/business-relocation/retail-store-moving',
  },
}

export default function RetailStoreMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Retail Store Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move your entire store—fixtures, inventory, and all—with minimal closure time.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving a Store Is Complicated</h2>
            <p>
              Retail stores have a lot of moving parts—literally. You've got shelving, display fixtures,
              point-of-sale systems, back office equipment, and probably thousands of individual products.
              And you need it all moved fast because every day you're closed is lost revenue.
            </p>
            <p>
              We've moved clothing boutiques, sporting goods stores, furniture showrooms, hardware stores,
              and everything in between. We know how to pack inventory, disassemble fixtures, and get
              everything set up at the new location so you can open for business ASAP.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Display shelving and fixtures</li>
              <li>Clothing racks and mannequins</li>
              <li>Checkout counters and POS systems</li>
              <li>All retail inventory</li>
              <li>Storage and back office equipment</li>
              <li>Signage (interior and exterior)</li>
              <li>Display cases and merchandising units</li>
              <li>Security systems and cameras</li>
            </ul>

            <h2>How We Handle Inventory</h2>
            <p>
              Inventory is the tricky part. Small items need to be packed carefully. Fragile stuff needs
              extra protection. And everything needs to be organized so you can find what you need when
              you're setting up the new store.
            </p>
            <p>
              We'll pack inventory by section or category—whatever makes sense for your store. We label
              everything clearly so you know exactly what's in each box. If you want to keep things on
              hangers or in their current containers, we can work with that too.
            </p>

            <h2>Fixtures and Displays</h2>
            <p>
              Retail fixtures can be bulky and awkward. Shelving units, gondolas, display racks—we'll
              disassemble what needs to come apart and move everything safely. At the new location, we'll
              reassemble and place fixtures according to your store layout.
            </p>

            <h2>Can You Help Set Up the New Store?</h2>
            <p>
              Absolutely. Many of our retail clients want help with the new store setup. We can install
              shelving, arrange displays, unpack inventory onto shelves, and get the whole store ready
              to open. Just let us know what level of setup you need.
            </p>

            <h2>Minimizing Store Closure Time</h2>
            <p>
              Most stores close Thursday night, we move Friday and Saturday, and they open Sunday or
              Monday at the new spot. Some larger stores might need an extra day, but we'll work as fast
              as possible to minimize your downtime.
            </p>
            <p>
              We can also do phased moves if you want to keep part of your operation running. Move the
              back office first, then the sales floor, or whatever sequence works for your business.
            </p>

            <h2>What About Clothing Stores?</h2>
            <p>
              Clothing stores have their own challenges—tons of inventory, lots of fixtures, and everything
              needs to stay organized. We'll keep clothes on hangers if that's easier, and we'll pack
              folded items carefully in boxes. Shoes, accessories, everything gets labeled and tracked.
            </p>

            <h2>Do You Move Large Furniture Showrooms?</h2>
            <p>
              Yes. Furniture stores are one of our specialties. We'll move display furniture, warehouse
              inventory, customer orders that are waiting for pickup—all of it. We know how to handle
              large furniture items and we've got the trucks and equipment to move lots of it efficiently.
            </p>

            <h2>Ready to Move Your Store?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about your store move. We'll come check out your current location, discuss your
              timeline, and give you a detailed quote for the entire move—fixtures, inventory, setup, everything.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Store Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional retail moving with minimal closure time.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
