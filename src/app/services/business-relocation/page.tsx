import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Relocation Services Boise | Top Shelf Commercial Moving',
  description: 'Professional business relocation services for retail stores, restaurants, and commercial facilities in Boise. Minimize downtime with expert movers. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/business-relocation',
  },
}

export default function BusinessRelocationPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Business Relocation Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move your entire business with minimal downtime and maximum efficiency.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Moving Your Business Is Different</h2>
            <p>
              Moving a business isn't like moving a house. You've got inventory, equipment, fixtures,
              customer expectations, and—most importantly—a deadline. Every day you're closed is money you're not making.
            </p>
            <p>
              We get that. We've moved retail stores, restaurants, medical offices, salons, and all kinds
              of businesses. We know how to do it fast, organized, and with minimal disruption to your operation.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Retail stores and boutiques</li>
              <li>Restaurants, cafes, and bars</li>
              <li>Medical and dental offices</li>
              <li>Salons and spas</li>
              <li>Gyms and fitness centers</li>
              <li>Auto shops and service centers</li>
              <li>Any commercial business that needs to relocate</li>
            </ul>

            <h2>How We Minimize Downtime</h2>
            <p>
              The key to a successful business move is planning. We'll work with you to create a schedule
              that minimizes the time you're closed. For some businesses, that means moving over a weekend.
              For others, it's a phased move where we relocate different sections at different times.
            </p>
            <p>
              We can also move after hours—late nights, early mornings, whatever works for your business.
              Our goal is to get you up and running in the new location as fast as possible.
            </p>

            <h2>We Handle the Heavy Stuff</h2>
            <p>
              Commercial moves often involve equipment that's too big or specialized for regular movers.
              Walk-in coolers, industrial ovens, gym equipment, salon chairs, shelving systems—we've
              moved it all. We bring the right tools and the right crew to handle whatever you've got.
            </p>

            <h2>Retail Moves: Fixtures, Inventory, Everything</h2>
            <p>
              Retail moves are tricky because you've got so much inventory and you need everything
              set up exactly right at the new location. We'll move your shelving, display fixtures,
              point-of-sale systems, back office equipment, and all your inventory. We can even help
              with the new store setup if needed.
            </p>

            <h2>Restaurant Moves: Keep the Kitchen Running</h2>
            <p>
              Restaurants can't afford to be closed for long. We understand that. We'll move your kitchen
              equipment, dining room furniture, bar, and everything else as quickly as possible. We know
              how to handle commercial kitchen gear—ovens, fryers, refrigeration units, you name it.
            </p>

            <h2>What About Furniture Assembly and Setup?</h2>
            <p>
              We can help with that too. If you need furniture assembled, fixtures installed, or equipment
              set up in the new location, just ask. We want to make sure you're ready to open for business,
              not stuck unpacking for days.
            </p>

            <h2>Will You Pack Everything?</h2>
            <p>
              If you need us to, yes. Some businesses pack their own stuff. Others want us to handle it all.
              Either way works. We'll bring boxes and packing materials if you need them.
            </p>

            <h2>Ready to Move Your Business?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about your move. We'll ask about your timeline, what you're moving, and what kind of
              setup you need at the new location. Then we'll give you a clear quote and a solid plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Business Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Fast, professional business relocation with minimal downtime.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
