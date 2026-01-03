import { Metadata } from 'next'
import { Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Minimize Business Downtime During Move Boise | Moving Tips',
  description: 'Proven strategies to minimize downtime during your commercial move in Boise. Keep your business running during relocation. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/resources/downtime-tips',
  },
}

export default function DowntimeTipsPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Minimize Business Downtime</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Proven strategies to keep your business running during a commercial move.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-dark-blue" />
                <h3 className="text-xl font-bold text-dark-blue m-0">The Cost of Downtime</h3>
              </div>
              <p className="mb-0">
                Every day your business is closed costs money. Lost revenue, staff sitting idle,
                customers going elsewhere. That's why minimizing downtime is critical during a commercial move.
              </p>
            </div>

            <h2>Move Over Weekends or After Hours</h2>
            <p>
              This is the #1 strategy for reducing downtime. Close Friday afternoon, move Friday night
              and Saturday, test systems Sunday, open Monday morning. Most businesses lose at most one
              full business day this way.
            </p>
            <p>
              Yes, weekend moving costs a bit more (crews working nights and weekends). But compare
              that cost to several days of lost business. It's almost always worth it.
            </p>

            <h2>Plan IT Infrastructure in Advance</h2>
            <p>
              Your internet, phones, and network need to be operational when you move in. Don't wait
              until move week to set this up. Get providers scheduled weeks in advance. Have your IT
              vendor test everything before move day.
            </p>
            <p>
              IT issues are the biggest cause of post-move delays. Prevent them by planning ahead.
            </p>

            <h2>Do a Phased Move</h2>
            <p>
              For larger operations, consider moving in phases. Move non-critical departments or areas
              first while the rest of the business keeps running. Once they're operational at the new
              location, move the next section.
            </p>
            <p>
              This takes longer overall but allows you to stay partially operational throughout the
              move. It's especially useful for businesses that can't afford any complete shutdown.
            </p>

            <h2>Prep the New Location First</h2>
            <p>
              Get as much done at the new location before move day as possible. Install shelving,
              set up workstations, arrange furniture that's already there, organize cable management.
              The more that's ready beforehand, the faster you can get operational.
            </p>

            <h2>Pre-Position Critical Items</h2>
            <p>
              Move non-essential items in advance. Storage boxes, archived files, extra supplies,
              furniture you don't need immediately. Getting these items moved ahead of time means
              less to move on the critical day.
            </p>

            <h2>Have Key Staff Ready for Setup</h2>
            <p>
              Have your IT team, operations manager, or whoever knows the technical systems available
              during and right after the move. Quick response to issues prevents hours of delay.
            </p>

            <h2>Set Up Temporary Operations (If Needed)</h2>
            <p>
              For businesses that absolutely can't close, consider temporary operations. Essential
              staff work from home, a temporary office space, or you maintain a skeleton crew at the
              old location while the move happens.
            </p>

            <h2>Communicate With Customers</h2>
            <p>
              Tell customers you're moving and when you'll be briefly unavailable. Most customers are
              understanding if they know what's happening. Post about it on your website and social
              media. Update your Google Business Profile. Set up voicemail messages explaining the move.
            </p>

            <h2>Test Everything Before Opening</h2>
            <p>
              Don't open for business until critical systems are tested and working. Internet connection,
              phone system, security system, point-of-sale equipment (for retail), critical equipment
              for your operation. An extra hour of testing prevents a day of problems.
            </p>

            <h2>Have a Contingency Plan</h2>
            <p>
              What if something goes wrong and you can't open Monday? Have a backup plan. Can employees
              work from home temporarily? Can you delay opening one more day? Having a plan reduces
              panic if issues arise.
            </p>

            <h2>Start With Essentials</h2>
            <p>
              You don't need to unpack everything before opening. Get the essentials operational first—
              computers, phones, critical equipment. Everything else can be organized over the next
              few days while you're back in business.
            </p>

            <h2>The Right Moving Company Matters</h2>
            <p>
              A professional commercial moving company will work efficiently, stay organized, and
              minimize delays. Cheap movers who show up unprepared or understaffed will extend your
              downtime. Choose experience over the lowest price.
            </p>

            <h2>Real Example: Weekend Office Move</h2>
            <p>
              Here's how a typical fast commercial move works:
            </p>
            <ul>
              <li><strong>Friday 3pm:</strong> Employees leave, office closes</li>
              <li><strong>Friday 5pm:</strong> Moving crew arrives, starts packing and loading</li>
              <li><strong>Friday 10pm:</strong> First load arrives at new location, crew begins unloading</li>
              <li><strong>Saturday 8am:</strong> Second crew joins, unpacking and setup continues</li>
              <li><strong>Saturday 6pm:</strong> Furniture assembled, equipment positioned</li>
              <li><strong>Sunday 9am:</strong> IT vendor arrives, connects and tests systems</li>
              <li><strong>Sunday 4pm:</strong> Final testing, everything operational</li>
              <li><strong>Monday 8am:</strong> Employees arrive, business opens</li>
            </ul>
            <p>
              Total business closure: Less than 48 hours, zero business days lost.
            </p>

            <h2>Let's Minimize Your Downtime</h2>
            <p>
              We specialize in fast, organized commercial moves that get businesses back open quickly.
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              we'll create a move schedule that minimizes your downtime and gets you operational ASAP.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Move Fast, Stay Open</h2>
          <p className="text-xl text-gray-300 mb-8">Get a downtime-minimizing move plan for your business.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
