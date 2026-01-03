import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Office Furniture Assembly Boise | Professional Installation Services',
  description: 'Professional office furniture assembly and installation services in Boise. We assemble desks, cubicles, conference tables, and more. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/office-moving/furniture-assembly',
  },
}

export default function FurnitureAssemblyPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Office Furniture Assembly</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional assembly of office furniture and workstation systems.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>New Furniture? We'll Assemble It</h2>
            <p>
              Ordered new office furniture for your new location? We can assemble it for you. Whether it's
              a few desks or an entire floor of cubicles, we've built it all before.
            </p>

            <h2>What We Assemble</h2>
            <ul>
              <li>Modular cubicle systems (Herman Miller, Steelcase, Haworth, etc.)</li>
              <li>Individual desks and workstations</li>
              <li>Conference tables and meeting room furniture</li>
              <li>Office chairs and seating</li>
              <li>File cabinets and storage units</li>
              <li>Shelving and bookcases</li>
              <li>Reception desks and lobby furniture</li>
            </ul>

            <h2>Combining Assembly with Your Move</h2>
            <p>
              A lot of businesses buy new furniture when they move to a new office. If that's your plan,
              we can handle both—move your existing stuff and assemble the new furniture at the new location.
              You get one crew doing everything, which is faster and more efficient.
            </p>

            <h2>We Know the Systems</h2>
            <p>
              Cubicle systems aren't like IKEA furniture. They're modular office systems with specific
              parts, connectors, and installation sequences. We've assembled Herman Miller Action Office,
              Steelcase Answer, Haworth Compose, and many others. We know how these systems work.
            </p>

            <h2>Can You Work From Floor Plans?</h2>
            <p>
              Yes. If you have a floor plan showing where furniture goes, we'll follow it. If you don't
              have a plan, we can work with you on-site to figure out the layout as we go.
            </p>

            <h2>What If the Furniture Shows Up Before We're Ready?</h2>
            <p>
              That happens sometimes. The furniture gets delivered early, it's sitting in boxes, and you
              need it assembled. We can come in and assemble everything so it's ready when you move in.
            </p>

            <h2>Do You Install Shelving and Storage?</h2>
            <p>
              We can assemble freestanding shelving and storage units. If it requires wall mounting or
              anchoring to the floor, you might need a contractor or handyman. But if it's something that
              just sits on the floor, we can put it together.
            </p>

            <h2>How Long Does Assembly Take?</h2>
            <p>
              Depends on how much furniture you've got. A few desks and chairs? Couple hours. An entire
              office full of cubicles? Could be a day or two. We'll give you a time estimate based on
              what needs to be assembled.
            </p>

            <h2>Can You Disassemble Furniture Too?</h2>
            <p>
              Yep. If you need old furniture taken apart and hauled away, we can do that. Or if you're
              moving existing furniture that needs to be disassembled and reassembled, that's part of
              our moving service.
            </p>

            <h2>Ready to Get Your Furniture Assembled?</h2>
            <p>
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              tell us what you've got. How many pieces, what kind of furniture, and when you need it done.
              We'll give you a quote and schedule a crew.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Furniture Assembly Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional office furniture assembly by experienced crews.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
