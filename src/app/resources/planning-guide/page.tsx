import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Move Planning Guide Boise | Business Relocation Tips',
  description: 'Complete guide to planning your commercial move in Boise. Timelines, budgeting, vendor coordination, and more. Free consultation. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/resources/planning-guide',
  },
}

export default function PlanningGuidePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Commercial Move Planning Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Everything you need to know to plan a successful business relocation.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Start Planning Early</h2>
            <p>
              The biggest mistake businesses make is waiting too long to start planning. Commercial
              moves are complex—there are vendors to coordinate, employees to communicate with, equipment
              to prepare, and a million details to manage. Give yourself at least 8-12 weeks if possible.
            </p>
            <p>
              Can moves happen faster? Sure. We've done emergency moves in a week. But the more time
              you have, the smoother everything goes.
            </p>

            <h2>Create a Budget</h2>
            <p>
              Figure out what you can spend before you start getting quotes. Commercial moves typically
              cost anywhere from a few thousand dollars for small offices to $50,000+ for large facilities.
              Costs include:
            </p>
            <ul>
              <li>Moving company</li>
              <li>Packing materials</li>
              <li>IT vendor for equipment disconnection/reconnection</li>
              <li>Phone system installation</li>
              <li>New furniture or equipment</li>
              <li>Utility setup fees</li>
              <li>Cleaning services</li>
              <li>Unexpected expenses (always happens)</li>
            </ul>

            <h2>Assign a Move Coordinator</h2>
            <p>
              Someone needs to own this project. If your company has a facilities manager, this is
              usually their job. If not, pick someone organized who can coordinate vendors, track
              deadlines, and make decisions when needed.
            </p>
            <p>
              For larger moves, consider hiring a professional move project manager. They'll coordinate
              everything and you can stay focused on running your business.
            </p>

            <h2>Visit the New Location</h2>
            <p>
              Before you commit to anything, walk through the new space with a critical eye. Measure
              doorways if you've got large equipment. Check loading dock access. Make sure there's
              enough parking. Identify any issues now, not on move day.
            </p>

            <h2>Create a Floor Plan</h2>
            <p>
              Decide where everything goes before the move. Which team sits where? Where does the
              conference room furniture go? Where are the servers located? Having a floor plan prevents
              confusion on move day and helps everyone—movers, IT vendors, employees—know what to expect.
            </p>

            <h2>Get Multiple Quotes</h2>
            <p>
              Talk to at least 2-3 commercial moving companies. Look for detailed quotes that explain
              what's included. Cheap isn't always better—you want a company with proper insurance,
              experienced crews, and good references.
            </p>

            <h2>Plan IT Infrastructure Early</h2>
            <p>
              Your internet, phone system, and network infrastructure need to be operational at the
              new location when you move in. This stuff takes time to set up. Contact providers early
              to schedule installations. Your IT vendor needs to be involved in planning too.
            </p>

            <h2>Communicate With Employees</h2>
            <p>
              Tell your team what's happening and when. Give them clear instructions about what they
              need to do—pack personal items, label boxes, clean out desks. Employees who understand
              the plan make the move go smoother.
            </p>

            <h2>Notify Customers and Vendors</h2>
            <p>
              Update your address everywhere—website, Google Business Profile, vendor accounts, bank
              records, government registrations. Send announcements to customers. Set up mail forwarding.
              This prevents confusion and lost mail.
            </p>

            <h2>Schedule Strategically</h2>
            <p>
              Most commercial moves happen over weekends or during slow business periods. If you're
              seasonal, move during your off-season. If you're a restaurant, maybe move between lunch
              and dinner service or during a day you're normally closed. Think about when downtime
              hurts least.
            </p>

            <h2>Plan for the Unexpected</h2>
            <p>
              Something always goes wrong. Furniture gets delayed. IT setup takes longer than expected.
              The new space isn't quite ready. Build buffer time into your schedule. Have a backup
              plan. Stay flexible.
            </p>

            <h2>Don't Forget the Small Stuff</h2>
            <p>
              It's easy to focus on big items—desks, servers, equipment—and forget the small stuff.
              Desk supplies, break room items, bathroom supplies, plants, decorations, signage. Make
              a comprehensive list so nothing gets left behind.
            </p>

            <h2>Old Location Cleanup</h2>
            <p>
              You'll probably need to leave the old location clean and damage-free (check your lease).
              Factor in time and budget for cleaning, minor repairs, and removal of anything you're
              not taking with you.
            </p>

            <h2>First Day at New Location</h2>
            <p>
              Plan for the first day. Have coffee and basics available. Make sure bathrooms are stocked.
              Have a plan for where people park. Address technology issues quickly. The first day sets
              the tone for how employees feel about the new space.
            </p>

            <h2>Need Help Planning?</h2>
            <p>
              We've planned hundreds of commercial moves. We know what works and what doesn't. Call
              us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              we'll help you create a realistic timeline and plan for your specific move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Expert Planning Help</h2>
          <p className="text-xl text-gray-300 mb-8">Let us help you plan a smooth, organized commercial move.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
