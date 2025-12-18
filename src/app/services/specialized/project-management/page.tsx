import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Move Project Management Boise | Commercial Relocation Coordination',
  description: 'Professional move project management in Boise. Coordinate your entire commercial relocation from planning to completion. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/specialized/project-management',
  },
}

export default function ProjectManagementPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Move Project Management</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Let us coordinate your entire commercial move from start to finish.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Someone Needs to Coordinate Everything</h2>
            <p>
              Large commercial moves involve a lot of moving parts—literally. Vendors to coordinate,
              timelines to manage, employees to communicate with, equipment to track. It's basically
              a full-time job on top of your regular responsibilities.
            </p>
            <p>
              That's where move project management comes in. We'll take over the coordination of your
              entire relocation. You stay focused on running your business, and we handle the logistics
              of getting you moved.
            </p>

            <h2>What Move Project Management Includes</h2>
            <ul>
              <li>Pre-move planning and timeline creation</li>
              <li>Vendor coordination (movers, IT, telecom, furniture installers)</li>
              <li>Employee communication and instructions</li>
              <li>Floor plan review and space planning assistance</li>
              <li>Move schedule creation and management</li>
              <li>On-site supervision during the move</li>
              <li>Problem-solving and real-time adjustments</li>
              <li>Post-move follow-up and issue resolution</li>
              <li>Regular status updates to management</li>
            </ul>

            <h2>We Create the Timeline</h2>
            <p>
              A good move starts with a detailed timeline. When does furniture need to be ordered?
              When does IT need to start disconnecting equipment? When does the old lease end and the
              new lease begin? We'll create a comprehensive timeline that coordinates all these details.
            </p>

            <h2>Vendor Coordination</h2>
            <p>
              Most commercial moves involve multiple vendors—moving company, IT contractor, phone system
              installer, furniture delivery, maybe a contractor doing build-out work at the new location.
              We'll coordinate all of them so they show up at the right time and don't trip over each other.
            </p>

            <h2>Employee Communication</h2>
            <p>
              Your employees need to know what's happening and what they need to do. We'll create
              communication materials—timelines, packing instructions, what to expect on move day,
              where to report at the new location. Clear communication prevents confusion and keeps
              the move running smoothly.
            </p>

            <h2>Floor Planning and Space Allocation</h2>
            <p>
              We'll work with you to review floor plans for the new location. Make sure departments
              are positioned correctly, workstations are allocated properly, and there's enough space
              for everything. We can suggest improvements based on our experience with office layouts.
            </p>

            <h2>On-Site Supervision</h2>
            <p>
              On move day, we're on-site managing everything. Directing the moving crew, coordinating
              with vendors, solving problems as they come up, making sure the schedule stays on track.
              You've got one point of contact who's handling all the details.
            </p>

            <h2>Problem Solving in Real Time</h2>
            <p>
              Things never go exactly according to plan. Furniture gets delayed. Something doesn't fit
              through a doorway. The IT setup takes longer than expected. We handle these issues in
              real time so you don't have to. We've managed enough moves to know how to adjust on the fly.
            </p>

            <h2>Who Needs Move Project Management?</h2>
            <p>
              Companies moving more than 10,000 square feet, businesses with complex operations,
              multi-floor offices, companies with tight timelines—these are the moves that benefit
              most from professional project management. If your move feels overwhelming, you probably
              need project management help.
            </p>

            <h2>Do You Handle the Physical Move Too?</h2>
            <p>
              Yes. We're not just consultants—we're the actual moving company. So we're coordinating
              the entire project AND doing the physical relocation. That means better coordination,
              faster communication, and one company responsible for the entire move.
            </p>

            <h2>Ready to Simplify Your Move?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your relocation. We'll discuss the scope, create a preliminary timeline,
              and give you a quote for full project management services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Project Management Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional coordination for stress-free commercial relocation.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
