import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Installation Services Boise | Office Furniture Assembly',
  description: 'Professional office furniture installation and assembly in Boise. Desks, cubicles, shelving, and conference tables. Fast and professional. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/specialized/furniture-installation',
  },
}

export default function FurnitureInstallationPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Furniture Installation Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional office furniture assembly and installation—desks, cubicles, and more.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Get Your Office Set Up Fast</h2>
            <p>
              New office furniture arrives in boxes. Lots of boxes. Someone needs to put it all together
              and get it set up so your team can start working. That's where we come in. We assemble
              and install office furniture—desks, cubicles, shelving, conference tables, whatever you've got.
            </p>
            <p>
              We do this all the time. We know how office furniture goes together, we've got the tools,
              and we can knock out a whole office worth of furniture in a day or two.
            </p>

            <h2>Furniture We Assemble and Install</h2>
            <ul>
              <li>Office desks and workstations</li>
              <li>Cubicle systems and panels</li>
              <li>Conference tables and meeting room furniture</li>
              <li>Shelving and storage units</li>
              <li>File cabinets and storage systems</li>
              <li>Reception desks and lobby furniture</li>
              <li>Break room tables and chairs</li>
              <li>Office chairs (assembly if needed)</li>
              <li>Modular furniture systems</li>
            </ul>

            <h2>Cubicle Installation</h2>
            <p>
              Cubicles are a pain to put together if you don't do it regularly. Panels, supports, desktop
              surfaces, overhead bins—there are a lot of pieces. We've installed hundreds of cubicle
              systems. We'll get them assembled, positioned according to your floor plan, and ready for
              your employees to move in.
            </p>

            <h2>Desk Assembly and Setup</h2>
            <p>
              Modern office desks often come in pieces—desktop, legs, drawers, cable management systems.
              We'll assemble everything, position desks where you want them, and make sure they're level
              and stable. If there are cable grommets or wire management features, we'll set those up too.
            </p>

            <h2>Conference Room Setup</h2>
            <p>
              Large conference tables are heavy and usually require assembly. We'll put the table together,
              position it in the room, assemble chairs, and get everything ready for meetings. If you've
              got credenzas, AV furniture, or other conference room equipment, we'll set that up too.
            </p>

            <h2>Do You Follow Floor Plans?</h2>
            <p>
              Absolutely. Give us a floor plan showing where furniture should go, and we'll follow it.
              If you've got numbered desks or specific cubicle assignments, we'll make sure everything
              ends up in the right spot. Organization is key to getting a new office operational quickly.
            </p>

            <h2>Can You Reconfigure Existing Furniture?</h2>
            <p>
              Yes. If you're reorganizing your office or changing the layout, we can disassemble,
              move, and reassemble existing furniture. Reconfiguring cubicle layouts, moving desks
              to new positions, creating new workstation arrangements—we handle all of it.
            </p>

            <h2>What About Retail and Restaurant Fixtures?</h2>
            <p>
              We install commercial fixtures too. Retail shelving, display units, restaurant booths,
              bar counters—if it needs to be assembled and installed, we can do it. We've set up
              entire stores and restaurant dining rooms.
            </p>

            <h2>How Fast Can You Get Furniture Installed?</h2>
            <p>
              Depends on the amount. A small office (10-15 workstations) might take a day. Larger
              offices could take several days. We'll bring enough crew to work efficiently. Most offices
              want furniture installed before employees show up—we'll work nights or weekends if needed
              to hit your deadline.
            </p>

            <h2>What If We're Not Sure About the Layout?</h2>
            <p>
              We can help with basic space planning—suggesting furniture arrangements, ensuring there's
              enough space for walkways, making sure cubicles or desks fit properly. We're not professional
              space planners, but we've set up enough offices to have a good sense of what works.
            </p>

            <h2>Ready for Furniture Installation?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              let's talk about your furniture. Tell us what you've got—brand, quantity, type—and we'll
              give you a quote for assembly and installation. If you've got a floor plan, send it over
              and we'll review it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Installation Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional furniture assembly and installation—fast and done right.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
