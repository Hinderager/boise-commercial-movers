import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Relocation Services Boise | Complete IT Infrastructure Moving',
  description: 'Complete IT relocation services in Boise. Move data centers, server rooms, and entire IT infrastructure with minimal downtime. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/specialized/it-relocation',
  },
}

export default function ITRelocationPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">IT Relocation Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Complete IT infrastructure relocation with detailed planning and minimal downtime.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>IT Relocations Need More Than Moving Trucks</h2>
            <p>
              Moving an entire IT infrastructure—servers, networking equipment, workstations, phone
              systems—requires detailed planning, careful coordination, and people who understand how
              critical this equipment is to your business.
            </p>
            <p>
              We've relocated IT infrastructure for companies of all sizes. Small offices with a few
              servers to large companies with entire data centers. We know this stuff can't just be
              thrown in boxes. It needs to be organized, labeled, protected, and moved on a tight schedule.
            </p>

            <h2>What's Included in IT Relocation</h2>
            <ul>
              <li>Pre-move planning and coordination with your IT team</li>
              <li>Detailed labeling and documentation</li>
              <li>Server room and data center moves</li>
              <li>Desktop computer and workstation relocation</li>
              <li>Networking equipment (switches, routers, firewalls)</li>
              <li>Phone systems and communication equipment</li>
              <li>Cable management and documentation</li>
              <li>Anti-static packing materials</li>
              <li>Climate-controlled transport (if needed)</li>
              <li>Coordination with IT staff for shutdown and startup</li>
            </ul>

            <h2>Planning the IT Move</h2>
            <p>
              We'll meet with your IT team to understand your infrastructure. What servers you have,
              how they're connected, what the dependencies are, which systems need to be moved first,
              and which need to be moved last. Then we'll create a detailed move plan with specific
              timelines.
            </p>

            <h2>Labeling Everything</h2>
            <p>
              Every cable matters in IT. We photograph how everything is connected before we touch
              anything. Then we label every cable, every port, every device. That way, when your IT
              team reconnects everything at the new location, they know exactly what goes where.
            </p>
            <p>
              We've learned this saves hours or even days of troubleshooting after a move. It's worth
              the extra time upfront.
            </p>

            <h2>Server and Data Center Moves</h2>
            <p>
              Server moves happen on tight schedules—usually overnight or over weekends. Your IT team
              shuts down the servers properly, we disconnect and label everything, transport it to the
              new location, and get it all set up so your IT team can bring systems back online.
            </p>
            <p>
              For data centers with environmental requirements, we can arrange climate-controlled
              transport if needed. Sensitive equipment stays protected throughout the move.
            </p>

            <h2>Minimizing IT Downtime</h2>
            <p>
              The goal is always to minimize downtime. Many IT moves happen Friday night through Sunday.
              Shut down Friday evening, move overnight, reconnect Saturday and Sunday, test Sunday
              evening, operational Monday morning. That's the typical schedule.
            </p>
            <p>
              For companies that can't shut down completely, we can do phased moves—relocating non-
              critical systems first, then critical infrastructure during a planned maintenance window.
            </p>

            <h2>Desktop Computers and Workstations</h2>
            <p>
              We'll disconnect and pack all desktop computers, monitors, keyboards, and accessories.
              Everything gets labeled with which employee or desk it belongs to. At the new office,
              we'll place computers at the right workstations and help with basic physical setup.
            </p>

            <h2>Phone System Relocation</h2>
            <p>
              VoIP systems, PBX equipment, phone handsets—we'll move it all. Your phone system vendor
              or IT team will handle the technical configuration, but we'll relocate all the physical
              equipment and get it positioned at the new location.
            </p>

            <h2>Post-Move Support</h2>
            <p>
              After the move, we'll work with your IT team to make sure everything is where it needs
              to be. If something needs to be repositioned or reorganized, we'll take care of it.
              We stay until your IT team confirms everything is accessible and ready for reconnection.
            </p>

            <h2>Ready to Relocate Your IT Infrastructure?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's set up a planning meeting with your IT team. We'll tour your current setup, discuss
              your timeline and requirements, and create a detailed IT relocation plan with pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your IT Relocation Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional IT infrastructure moving with detailed planning and coordination.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
