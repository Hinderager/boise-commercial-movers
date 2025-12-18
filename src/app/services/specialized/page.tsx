import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Specialized Commercial Moving Services Boise | Project Management & IT Relocation',
  description: 'Specialized commercial moving services including IT relocation, furniture installation, and dedicated project management for complex moves. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/specialized',
  },
}

export default function SpecializedPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Specialized Commercial Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">IT relocation, furniture installation, and project management for complex commercial moves.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Beyond Standard Moving Services</h2>
            <p>
              Some commercial moves need more than just trucks and muscle. They need planning, coordination,
              technical expertise, and specialized services. That's where our specialized services come in.
            </p>
            <p>
              Whether you need IT relocation, furniture assembly, or a dedicated project manager for a
              complex multi-phase move, we've got the experience and resources to handle it.
            </p>

            <h2>IT Relocation Services</h2>
            <p>
              Moving IT infrastructure is stressful. Servers go down, cables get mixed up, and suddenly
              your entire office is offline. We've done enough IT moves to know how to minimize that risk.
            </p>

            <h3>What We Do for IT Moves:</h3>
            <ul>
              <li>Disconnect and label all servers, switches, and network equipment</li>
              <li>Carefully pack and transport sensitive electronics</li>
              <li>Coordinate with your IT team or vendor for reconnection</li>
              <li>Move workstations, monitors, and peripherals</li>
              <li>Handle cable management and rack systems</li>
            </ul>
            <p>
              We're not IT techs, but we know how to work with them. We handle the physical move while
              they handle the technical setup. It's a team effort, and we've done it many times.
            </p>

            <h2>Furniture Installation and Assembly</h2>
            <p>
              Ordered new office furniture for the new location? We can assemble it for you. Cubicles,
              desks, conference tables, filing systems—we've built it all.
            </p>
            <p>
              This is especially helpful if you're combining a move with new furniture. We can install
              the new stuff at the new location while moving your existing furniture, so everything's
              ready to go when you open for business.
            </p>

            <h2>Dedicated Project Management</h2>
            <p>
              Big, complex commercial moves benefit from having someone in charge. Our project managers
              coordinate every phase of the move—planning, scheduling, communication, execution, and follow-up.
            </p>

            <h3>What a Project Manager Does:</h3>
            <ul>
              <li>Creates a detailed moving plan and timeline</li>
              <li>Coordinates with your team, landlords, vendors, and contractors</li>
              <li>Manages multiple crews for phased or multi-location moves</li>
              <li>Handles last-minute changes and problems</li>
              <li>Makes sure nothing falls through the cracks</li>
            </ul>
            <p>
              You get one point of contact who knows the entire plan and can answer questions, make decisions,
              and keep everything on track. It's worth it for moves that have a lot of moving parts.
            </p>

            <h2>Multi-Location Moves</h2>
            <p>
              Moving multiple offices or facilities at the same time? We can coordinate that. Whether it's
              several locations moving to one consolidated facility, or one office splitting into multiple
              locations, we'll manage the logistics.
            </p>

            <h2>Phased Moves</h2>
            <p>
              Can't move everything at once? We can do a phased move where we relocate different departments
              or sections on different days or weeks. This keeps your business operational while we handle
              the transition piece by piece.
            </p>

            <h2>Decommissioning and Disposal</h2>
            <p>
              Not taking everything to the new location? We can help with decommissioning old equipment,
              disposing of furniture you don't need, recycling electronics, and clearing out the old space
              so it's ready to hand back to the landlord.
            </p>

            <h2>What Makes These Services "Specialized"?</h2>
            <p>
              They require more than standard moving skills. They need planning, technical knowledge,
              coordination, and often multiple teams working together. We've done this kind of work before,
              and we know what it takes to pull it off smoothly.
            </p>

            <h2>Ready to Plan Your Complex Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your project. We'll ask about the scope, timeline, and any special requirements.
              Then we'll put together a plan and assign the right resources to make it happen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Specialized Services Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Complex commercial moves made manageable with the right expertise.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
