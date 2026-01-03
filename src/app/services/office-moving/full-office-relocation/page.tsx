import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Full Office Relocation Services Boise | Complete Office Moves',
  description: 'Complete turnkey office relocation services in Boise with minimal business disruption. Professional planning and execution. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/office-moving/full-office-relocation',
  },
}

export default function FullOfficeRelocationPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Full Office Relocation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Complete turnkey office moving with minimal disruption to your business.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>We Handle the Entire Move</h2>
            <p>
              A full office relocation means we take care of everything. You focus on running your business,
              and we handle the logistics of getting you moved to the new location.
            </p>

            <h2>What's Included</h2>
            <ul>
              <li>Pre-move planning and walkthrough</li>
              <li>Packing supplies and materials</li>
              <li>Packing all office contents</li>
              <li>Disassembly of furniture and cubicles</li>
              <li>Loading and transportation</li>
              <li>Unloading at the new location</li>
              <li>Furniture and cubicle reassembly</li>
              <li>Unpacking and setup (if requested)</li>
              <li>Debris and packing material removal</li>
            </ul>

            <h2>Minimizing Downtime</h2>
            <p>
              We know every day your office is closed costs you money. That's why we plan full office
              relocations to happen over weekends or after hours whenever possible. Most office moves
              can be completed in 1-3 days depending on the size.
            </p>

            <h2>You're Open Monday Morning</h2>
            <p>
              Our goal is simple: you close Friday afternoon at the old office and open Monday morning
              at the new one. Everything unpacked, furniture in place, ready to work. That's what a
              full-service relocation looks like.
            </p>

            <h2>What Size Offices Do You Move?</h2>
            <p>
              We've moved everything from small 5-person offices to entire floors of corporate buildings.
              The process scales based on the size—bigger offices just need more crew and more time.
            </p>

            <h2>Do I Need to Pack Anything?</h2>
            <p>
              Nope. Unless you want to handle personal items or confidential documents yourself, we'll
              pack everything. Desks, file cabinets, supply closets, break rooms—all of it.
            </p>

            <h2>What About IT Equipment?</h2>
            <p>
              We'll disconnect, label, and move all your computers, servers, printers, and network equipment.
              If you have an IT person or vendor, we'll coordinate with them to make sure everything gets
              reconnected properly at the new office.
            </p>

            <h2>Ready to Relocate Your Office?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about your office move. We'll schedule a walkthrough, discuss your timeline, and
              give you a detailed quote for the full relocation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Office Relocation Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Complete turnkey office moving from start to finish.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
