import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Equipment Moving Boise | Computer & Server Relocation',
  description: 'Professional IT equipment moving in Boise. Move servers, computers, networking gear, and data centers safely. Licensed and insured. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/equipment-moving/it-equipment',
  },
}

export default function ITEquipmentPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">IT Equipment Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move servers, computers, and networking equipment safely with minimal IT downtime.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>IT Equipment Needs Special Care</h2>
            <p>
              Computers, servers, networking equipment—it's expensive, it's delicate, and your business
              depends on it working when you get to the new location. We've moved entire data centers,
              server rooms, and office IT infrastructure. We know how to handle this stuff.
            </p>
            <p>
              The key is organization and labeling. Every cable matters. Every server needs to be tracked.
              Everything needs to be packed carefully so nothing gets damaged in transport. We'll work
              with your IT team to make sure the move goes smoothly.
            </p>

            <h2>IT Equipment We Move</h2>
            <ul>
              <li>Servers and server racks</li>
              <li>Desktop computers and workstations</li>
              <li>Laptops and tablets</li>
              <li>Networking equipment (routers, switches, firewalls)</li>
              <li>Printers and copiers</li>
              <li>Phone systems and VoIP equipment</li>
              <li>Data backup systems</li>
              <li>Monitors and displays</li>
              <li>UPS units and power equipment</li>
            </ul>

            <h2>Server Room Moves</h2>
            <p>
              Moving a server room is complex. We'll disconnect and label everything so it can be
              reconnected properly. Server racks get secured for transport. Individual servers are
              protected with anti-static materials and padding. Networking equipment is packed carefully.
            </p>
            <p>
              We coordinate with your IT staff or IT vendor to make sure the shutdown and startup
              processes are handled correctly. You'll need your IT team to handle the technical side—
              shutting down servers, disconnecting network equipment, reconfiguring at the new location.
              We handle the physical move.
            </p>

            <h2>Labeling and Cable Management</h2>
            <p>
              Every cable gets labeled. We'll photograph how things are connected before we disconnect
              anything. That way, your IT team knows exactly how everything was set up and can reconnect
              it correctly at the new location. We've learned that this saves hours of troubleshooting
              after the move.
            </p>

            <h2>Desktop Computers and Workstations</h2>
            <p>
              We'll disconnect and pack all desktop computers, monitors, keyboards, and accessories.
              Everything gets labeled with which desk or employee it belongs to. At the new office,
              we'll place computers at the right desks and can help with basic setup—plugging things
              in, connecting monitors. Your IT team handles the software side.
            </p>

            <h2>What About Data Centers?</h2>
            <p>
              Data center moves require detailed planning. We've done them, but they need coordination
              with your IT infrastructure team. Timing is critical—downtime needs to be minimized,
              equipment needs to be transported in climate-controlled conditions, and everything needs
              to be set up in a specific sequence at the new data center.
            </p>

            <h2>Do You Move Printers and Copiers?</h2>
            <p>
              Absolutely. Printers, copiers, multifunction devices—we move them all. Large commercial
              copiers are heavy and need careful handling. We'll disconnect, move, and reconnect them
              at the new location. If they need technical setup or calibration, your copier service
              company can handle that.
            </p>

            <h2>Can You Move After Hours?</h2>
            <p>
              Yes. Many IT moves happen overnight or over weekends to minimize business disruption.
              Your IT team shuts everything down Friday evening, we move everything overnight, your
              IT team reconnects and tests Sunday, and you're operational Monday morning. That's the
              typical schedule.
            </p>

            <h2>How Do You Protect Sensitive Equipment?</h2>
            <p>
              IT equipment gets packed in anti-static materials, padded boxes, and protective cases.
              Servers and networking equipment are secured in racks for transport. Everything is loaded
              carefully to prevent jostling or impact damage. We treat it like the expensive, delicate
              equipment it is.
            </p>

            <h2>Ready to Move Your IT Equipment?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about your IT move. We'll coordinate with your IT team, plan the shutdown and
              startup sequence, and give you a detailed quote for moving everything safely.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your IT Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional IT equipment relocation with careful handling and organization.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
