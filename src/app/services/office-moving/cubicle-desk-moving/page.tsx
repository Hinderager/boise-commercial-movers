import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cubicle & Desk Moving Services Boise | Workstation Disassembly',
  description: 'Professional cubicle and desk moving services with expert disassembly and reassembly. Office workstation relocation in Boise. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/office-moving/cubicle-desk-moving',
  },
}

export default function CubicleDeskMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Cubicle & Desk Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Expert disassembly, transport, and reassembly of office workstations.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Cubicles Are Tricky to Move</h2>
            <p>
              Cubicles and modular workstations aren't like regular furniture. They're assembled with panels,
              connectors, and brackets that all have to come apart in the right order and go back together
              the same way. Do it wrong and you'll have panels that don't line up and parts that don't fit.
            </p>
            <p>
              We've disassembled and reassembled every type of cubicle system out there. Herman Miller, Steelcase,
              Haworth—we know how they work. We label everything, keep track of all the hardware, and make sure
              it all goes back together correctly at the new office.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Modular cubicle systems</li>
              <li>Open office benching systems</li>
              <li>Individual desks and workstations</li>
              <li>Desk accessories, monitors, and task chairs</li>
              <li>File pedestals and storage units</li>
            </ul>

            <h2>Disassembly and Reassembly</h2>
            <p>
              We disassemble cubicles panel by panel, label everything so we know where it goes, and transport
              it carefully to avoid damage. At the new office, we reassemble it all according to your floor plan.
            </p>
            <p>
              If you're reconfiguring the layout, just tell us how you want it arranged and we'll set it up that way.
            </p>

            <h2>What About Desks That Don't Need Disassembly?</h2>
            <p>
              Standard desks and tables are easy—we just move them. But if you've got large L-shaped desks or
              conference tables that need to be taken apart to fit through doorways, we'll handle that too.
            </p>

            <h2>Will Everything Get Scratched or Damaged?</h2>
            <p>
              Not if we can help it. We use furniture pads, stretch wrap, and corner protectors to keep everything
              safe during the move. Cubicle panels and desk surfaces are particularly prone to scratching, so we
              take extra care with them.
            </p>

            <h2>Do You Move Just Cubicles, or the Whole Office?</h2>
            <p>
              Both. If you just need cubicles moved and you're handling everything else, that's fine. If you want
              us to move the entire office including cubicles, we can do that too.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              Depends on how many workstations you have. Disassembling and reassembling a dozen cubicles might
              take a day or two. A hundred cubicles will take longer. We'll give you a timeline when we see the layout.
            </p>

            <h2>Ready to Move Your Cubicles?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              tell us about your office layout. We'll ask about the type of cubicles you have, how many, and
              where they're going. Then we'll give you a quote and a timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Cubicle Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional cubicle disassembly and reassembly by experienced movers.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
