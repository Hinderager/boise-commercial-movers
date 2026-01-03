import { Metadata } from 'next'
import { Phone, CheckSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Moving Checklist Boise | Business Relocation Planning',
  description: 'Complete checklist for planning your commercial move in Boise. Stay organized and on schedule. Download our free moving guide. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/resources/moving-checklist',
  },
}

export default function MovingChecklistPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Commercial Moving Checklist</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Stay organized with our comprehensive business relocation checklist.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="flex items-center gap-2">
              <CheckSquare className="w-6 h-6" />
              8-12 Weeks Before Move
            </h2>
            <ul>
              <li>Confirm new location lease dates and move-in readiness</li>
              <li>Get quotes from commercial moving companies</li>
              <li>Create a move budget and get approvals</li>
              <li>Assign a move coordinator or project manager</li>
              <li>Notify landlord of intent to vacate (if renting)</li>
              <li>Start researching IT, phone, and utility providers for new location</li>
              <li>Review new space floor plan and create initial layout</li>
              <li>Identify items that won't be moving (sell, donate, or dispose)</li>
            </ul>

            <h2 className="flex items-center gap-2">
              <CheckSquare className="w-6 h-6" />
              6-8 Weeks Before Move
            </h2>
            <ul>
              <li>Book your commercial moving company</li>
              <li>Schedule IT vendor to disconnect and reconnect equipment</li>
              <li>Arrange new phone system installation</li>
              <li>Set up utilities at new location (internet, electric, water, etc.)</li>
              <li>Finalize floor plan and workstation assignments</li>
              <li>Order new furniture if needed (lead times can be 6-8 weeks)</li>
              <li>Notify employees of move date and timeline</li>
              <li>Update business address with banks, vendors, and government agencies</li>
              <li>Schedule parking or loading zone permits if needed</li>
            </ul>

            <h2 className="flex items-center gap-2">
              <CheckSquare className="w-6 h-6" />
              4-6 Weeks Before Move
            </h2>
            <ul>
              <li>Create detailed move timeline with specific dates and responsibilities</li>
              <li>Distribute packing instructions to employees</li>
              <li>Order packing supplies (or arrange with moving company)</li>
              <li>Schedule cleaners for both old and new locations</li>
              <li>Arrange insurance coverage for the move</li>
              <li>Update website, Google Business Profile, and online directories with new address</li>
              <li>Print new business cards and letterhead with new address</li>
              <li>Notify clients and customers of upcoming move</li>
            </ul>

            <h2 className="flex items-center gap-2">
              <CheckSquare className="w-6 h-6" />
              2-4 Weeks Before Move
            </h2>
            <ul>
              <li>Start packing non-essential items</li>
              <li>Label all boxes with contents and destination location</li>
              <li>Back up all computer systems and data</li>
              <li>Coordinate with IT to prepare servers and network equipment for move</li>
              <li>Confirm move date and schedule with moving company</li>
              <li>Arrange for mail forwarding</li>
              <li>Update signage at new location</li>
              <li>Do final walkthrough of new space to confirm it's ready</li>
              <li>Create new office directory and desk assignments</li>
            </ul>

            <h2 className="flex items-center gap-2">
              <CheckSquare className="w-6 h-6" />
              1 Week Before Move
            </h2>
            <ul>
              <li>Pack all remaining non-essential items</li>
              <li>Confirm all vendor schedules (movers, IT, phone, etc.)</li>
              <li>Remind employees of move schedule and their responsibilities</li>
              <li>Set up out-of-office messages for move days</li>
              <li>Update phone system message about the move</li>
              <li>Defrost and clean refrigerators</li>
              <li>Dispose of plants, food, and any items not moving</li>
              <li>Do final inventory check</li>
            </ul>

            <h2 className="flex items-center gap-2">
              <CheckSquare className="w-6 h-6" />
              Move Day
            </h2>
            <ul>
              <li>Be on-site to supervise and answer questions</li>
              <li>Keep important documents and valuables with you</li>
              <li>Do final walkthrough of old location before leaving</li>
              <li>Check that all utilities are turned off</li>
              <li>Lock up and return keys to landlord</li>
              <li>Direct placement of furniture and equipment at new location</li>
              <li>Coordinate with IT for equipment reconnection</li>
            </ul>

            <h2 className="flex items-center gap-2">
              <CheckSquare className="w-6 h-6" />
              After the Move
            </h2>
            <ul>
              <li>Unpack and set up workstations</li>
              <li>Test all IT systems and network connections</li>
              <li>Test phone system</li>
              <li>Install and test security systems</li>
              <li>Dispose of packing materials</li>
              <li>Update any remaining directories or listings with new address</li>
              <li>Schedule team meeting to address any issues</li>
              <li>Send announcement to clients about successful move</li>
              <li>Take care of any punch list items at new location</li>
            </ul>

            <h2>Need Help Planning Your Move?</h2>
            <p>
              This checklist covers the basics, but every commercial move is different. We can help
              you create a customized timeline based on your specific situation. Call us at{' '}
              <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              we'll walk through the planning process with you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Plan Your Move?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's create a customized moving plan for your business.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
