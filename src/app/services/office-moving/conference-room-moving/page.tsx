import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conference Room Moving Services Boise | Meeting Space Relocation',
  description: 'Professional conference room and meeting space moving services. Move tables, chairs, AV equipment, and more. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/office-moving/conference-room-moving',
  },
}

export default function ConferenceRoomMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Conference Room Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Specialized moving for conference rooms and meeting spaces.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Conference Rooms Have Special Needs</h2>
            <p>
              Conference rooms often contain some of the most expensive and bulky furniture in an office.
              Large tables that seat 12 people, executive chairs, credenzas, AV equipment, whiteboards—it
              all needs to be moved carefully.
            </p>

            <h2>What We Move</h2>
            <ul>
              <li>Large conference tables (often requiring disassembly)</li>
              <li>Executive and guest chairs</li>
              <li>Credenzas and storage units</li>
              <li>AV equipment (projectors, screens, monitors)</li>
              <li>Whiteboards and presentation boards</li>
              <li>Video conferencing systems</li>
            </ul>

            <h2>Large Conference Tables</h2>
            <p>
              Big conference tables usually won't fit through doorways or elevators in one piece.
              We'll disassemble them, move the pieces, and reassemble them at the new location.
              If your table has power/data grommets or built-in cable management, we'll make sure
              those are handled properly.
            </p>

            <h2>AV Equipment and Technology</h2>
            <p>
              Conference rooms often have mounted projectors, wall-mounted monitors, and video conferencing
              equipment. We can disconnect and move this equipment, but for reconnection and setup,
              you'll want to work with your AV or IT vendor to make sure everything's configured correctly.
            </p>

            <h2>Protecting High-End Furniture</h2>
            <p>
              Conference room furniture is often nicer (and more expensive) than regular office furniture.
              We use furniture blankets, corner protectors, and extra padding to make sure nothing gets
              scratched or damaged during the move.
            </p>

            <h2>Just the Conference Room, or the Whole Office?</h2>
            <p>
              We can do either. If you're only moving the conference room and handling the rest yourself,
              that's fine. If you want us to move the entire office including the conference room, we do that too.
            </p>

            <h2>How Long Does It Take?</h2>
            <p>
              Moving a single conference room usually takes a few hours, depending on the size of the table
              and how much other furniture and equipment is involved. If you've got multiple conference rooms,
              it'll take longer.
            </p>

            <h2>Ready to Move Your Conference Room?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              describe what you've got. Table size, number of chairs, any special equipment. We'll give you
              a quote and make sure we bring the right crew and tools for the job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Conference Room Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional handling of your conference room furniture and equipment.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
