import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'After-Hours Office Moving Boise | Weekend & Evening Moves',
  description: 'After-hours office moving services with evening and weekend moves to minimize business disruption in Boise. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/office-moving/after-hours-moving',
  },
}

export default function AfterHoursMovingPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">After-Hours Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Evening and weekend office moves to keep your business running.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Can't Afford to Close During Business Hours?</h2>
            <p>
              Some businesses can't shut down for a move. Call centers, medical offices, customer service
              operations—closing for even a day means lost revenue or unhappy customers.
            </p>
            <p>
              That's why we offer after-hours moving. We'll move your office in the evening, overnight,
              or over the weekend so your business stays open during normal hours.
            </p>

            <h2>When We Move After Hours</h2>
            <ul>
              <li><strong>Evenings:</strong> We start after your staff goes home (6 PM or later)</li>
              <li><strong>Overnight:</strong> Late night through early morning for minimal disruption</li>
              <li><strong>Weekends:</strong> Saturday or Sunday moves so you're ready Monday morning</li>
            </ul>

            <h2>Close Friday, Open Monday</h2>
            <p>
              The most popular option is a weekend move. Your team leaves Friday afternoon, we move
              everything over the weekend, and you open Monday morning at the new location. Staff comes
              in, finds their desk set up, and gets back to work.
            </p>

            <h2>What Gets Moved After Hours?</h2>
            <p>
              Everything. Desks, computers, cubicles, file cabinets, conference rooms—the whole office.
              We work while you're closed so there's zero interruption to your business operations.
            </p>

            <h2>Do After-Hours Moves Cost More?</h2>
            <p>
              They can, yes. Evening and weekend work often costs a bit more because of the odd hours.
              But for businesses that can't afford downtime, the extra cost is worth it to keep operating.
              We'll give you a clear quote so you know exactly what to expect.
            </p>

            <h2>Building Access and Security</h2>
            <p>
              After-hours moves require coordination with building management. We'll need access to both
              the old and new locations, elevator reservations if needed, and sometimes security clearance.
              We've done this many times and can help you coordinate all of it.
            </p>

            <h2>What If Something Needs to Stay Running?</h2>
            <p>
              If you've got servers or equipment that can't go down, we'll work with your IT team to move
              everything else first and handle the critical systems last. Some businesses do a phased move
              where we move departments one at a time so the business stays partially operational.
            </p>

            <h2>How Much Notice Do You Need?</h2>
            <p>
              The more notice, the better. After-hours moves require more planning and coordination,
              especially if we need to reserve building elevators or get security clearance. A few weeks'
              notice is ideal, but we can sometimes accommodate rush moves if needed.
            </p>

            <h2>Ready to Schedule an After-Hours Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your schedule. We'll figure out the best time to move, coordinate building
              access, and make sure you're operational when you need to be.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get an After-Hours Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Keep your business running with evening and weekend office moves.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
