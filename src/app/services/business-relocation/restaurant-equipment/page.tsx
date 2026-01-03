import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Restaurant Equipment Moving Boise | Commercial Kitchen Relocation',
  description: 'Professional restaurant and commercial kitchen equipment moving in Boise. We handle ovens, fryers, coolers, and all kitchen gear. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/business-relocation/restaurant-equipment',
  },
}

export default function RestaurantEquipmentPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Restaurant Equipment Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move your entire restaurant—kitchen, dining room, bar—fast and professionally.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>We Know Restaurant Moves Are Different</h2>
            <p>
              Restaurants can't afford to be closed for long. You've got reservations, staff schedules,
              and bills to pay. Every day you're shut down hurts. That's why we treat restaurant moves
              differently—we work fast, we work organized, and we know how to handle commercial kitchen equipment.
            </p>
            <p>
              We've moved full-service restaurants, cafes, bars, food trucks, catering kitchens, and
              everything in between. Big commercial kitchens with walk-in coolers and small cafe setups—
              we've done it all.
            </p>

            <h2>Kitchen Equipment We Move</h2>
            <ul>
              <li>Commercial ovens and ranges</li>
              <li>Fryers and griddles</li>
              <li>Walk-in coolers and freezers</li>
              <li>Reach-in refrigerators</li>
              <li>Prep tables and workstations</li>
              <li>Dishwashers and sinks</li>
              <li>Hood vents and exhaust systems</li>
              <li>Shelving and storage racks</li>
              <li>Small appliances and cookware</li>
            </ul>

            <h2>Dining Room and Bar</h2>
            <p>
              It's not just the kitchen. We'll move your dining room tables and chairs, booth seating,
              bar counters, glassware, dishes, silverware, bar equipment, sound systems—everything.
              We'll pack your wine and liquor inventory carefully and get it all to the new location safely.
            </p>

            <h2>Do You Disconnect and Reconnect Equipment?</h2>
            <p>
              We'll disconnect equipment for the move—unplugging, disconnecting gas lines (if it's safe
              to do so), removing shelving. At the new location, we'll position everything and plug it
              back in. For gas lines and complex installations, you'll need a licensed plumber or technician,
              but we'll work with them to coordinate the setup.
            </p>

            <h2>How Fast Can You Do It?</h2>
            <p>
              Most restaurant moves take 2-3 days. We'll start Friday after you close, work through the
              weekend, and have you ready to open by Monday or Tuesday. Some larger restaurants might
              need an extra day, but we push hard to minimize your closure time.
            </p>

            <h2>Can You Move Walk-In Coolers?</h2>
            <p>
              Yes, but it depends on the type. If it's a modular walk-in cooler, we can disassemble it,
              move the panels and refrigeration unit, and help with reassembly at the new spot (you'll
              need an HVAC tech to reconnect the refrigeration system). If it's a built-in cooler, we can
              move the contents but not the structure itself.
            </p>

            <h2>What About Setup at the New Kitchen?</h2>
            <p>
              We'll place equipment where you want it, install shelving, set up prep areas, and get the
              kitchen organized so your staff can start working. We can also unpack dishes, stock shelves,
              and arrange the dining room if you need that level of setup.
            </p>

            <h2>Do You Move Food Inventory?</h2>
            <p>
              We can move dry goods, canned items, and packaged foods. Anything frozen or refrigerated
              needs special handling—you might need a refrigerated truck for that. Talk to us about your
              inventory and we'll figure out the best approach.
            </p>

            <h2>What If We're Just Upgrading Equipment?</h2>
            <p>
              If you're not moving the entire restaurant but just swapping out equipment—removing old
              ovens, installing new ones—we can help with that too. We'll haul out the old stuff and
              bring in the new. Just let us know what you're working with.
            </p>

            <h2>Ready to Move Your Restaurant?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              we'll schedule a walkthrough. We'll check out your kitchen, discuss your timeline, and give
              you a clear quote for moving everything. Let's get you back in business as fast as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Restaurant Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Fast, professional restaurant relocation with minimal closure time.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
