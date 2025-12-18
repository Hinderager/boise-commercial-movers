import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Business Moves Boise | Full-Service Commercial Relocation',
  description: 'Complete business moving services in Boise. We handle everything from packing to setup at your new location. Minimize downtime. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/business-relocation/complete-business-moves',
  },
}

export default function CompleteBusinessMovesPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Complete Business Moves</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Full-service business relocation from start to finish—we handle everything.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>You Focus on Business, We Handle the Move</h2>
            <p>
              A complete business move means exactly that—we take care of everything. From the first box
              packed to the last piece of furniture in place at your new location, you won't have to worry
              about the logistics.
            </p>
            <p>
              Moving a business is stressful enough without having to coordinate trucks, crews, and schedules.
              That's why we offer full-service moves where you can keep running your business while we handle
              the physical relocation.
            </p>

            <h2>What's Included in a Complete Move</h2>
            <ul>
              <li>Pre-move consultation and planning</li>
              <li>All packing materials provided</li>
              <li>Professional packing of all items</li>
              <li>Furniture disassembly</li>
              <li>Loading and secure transport</li>
              <li>Unloading at new location</li>
              <li>Furniture reassembly</li>
              <li>Equipment setup and placement</li>
              <li>Unpacking services (if requested)</li>
              <li>Debris and packing material removal</li>
            </ul>

            <h2>We Work Around Your Schedule</h2>
            <p>
              Most businesses can't just shut down for a week. We get that. We'll schedule the move
              for nights, weekends, or whenever works best for you. Many of our clients close Friday
              and open Monday at the new spot—that's our specialty.
            </p>

            <h2>What Types of Businesses Do You Move?</h2>
            <p>
              We've done it all. Professional offices, retail stores, restaurants, medical practices,
              salons, warehouses—if it's a business, we can move it. The size doesn't matter either.
              Small startups to large commercial facilities, we scale our crew to match your needs.
            </p>

            <h2>Do You Move Everything?</h2>
            <p>
              Yes. Desks, filing cabinets, computers, kitchen equipment, inventory, shelving, machinery—
              whatever's in your business, we'll move it. If there's something specialized or particularly
              valuable, just let us know ahead of time so we can plan accordingly.
            </p>

            <h2>What About Setup at the New Place?</h2>
            <p>
              We don't just drop boxes at the door. We'll put furniture where you want it, reassemble
              desks and shelving, and get your space set up so you can start working. Some businesses
              want us to unpack everything too—we can do that. Just depends on what you need.
            </p>

            <h2>How Do You Keep Things Organized?</h2>
            <p>
              Labeling. Everything gets labeled with what's inside and where it goes in the new location.
              We'll work with you to create a basic floor plan so we know where things should end up.
              That way, your computers go to the right desks and your supplies end up in the right storage room.
            </p>

            <h2>How Long Does a Complete Business Move Take?</h2>
            <p>
              Depends on the size. A small office might be done in a day. A larger business could take
              2-3 days. We'll give you an accurate timeline after we see what you're moving and where
              it's going.
            </p>

            <h2>Ready to Move Your Business?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              we'll schedule a walkthrough. We'll talk about your timeline, what needs to move, and how
              we can make this as painless as possible. Then you'll get a clear quote for the complete move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Complete Move Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Full-service business relocation with zero hassle.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
