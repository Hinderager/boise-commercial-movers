import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Minimize Downtime When Moving Your Business | Boise Commercial Movers',
  description: 'Business downtime during an office move costs money. Here\'s how to keep your operations running while relocating your Boise business — weekend moves, phased relocations, and smart planning.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs/minimize-business-downtime-during-move',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hero.webp"
          alt="Minimize Business Downtime During Office Move"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How to Minimize Downtime When Moving Your Business
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Keep revenue flowing while you relocate.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Every hour your business is closed for a move is money you're not making. For some companies, even a few hours of downtime represents thousands in lost revenue. For others, it's the missed opportunities and frustrated customers that hurt.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The traditional approach to office moves — shut down Friday, move everything, hope you're operational Monday — works for some businesses. But it's not the only way, and it's definitely not the best way if downtime actually costs you money.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's how businesses in Boise minimize downtime during office moves. These strategies come from companies that couldn't afford to close their doors, even for a day.
            </p>
          </div>
        </div>
      </section>

      {/* Weekend Moves - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Weekend Moves: The Obvious Solution</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you operate Monday through Friday, move on Saturday and Sunday. Your customers never notice, your team shows up Monday at the new location, and business continues without interruption.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This is the most straightforward approach to minimizing business downtime. It costs more because weekend labor rates are higher, but compared to lost revenue from being closed during business hours, it's usually worth it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The key is getting your IT infrastructure up and running by Monday morning. If your team arrives and nothing works — no internet, no phones, no access to systems — you've just converted a weekend move into Monday downtime anyway.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Plan IT setup for Saturday afternoon or Sunday. Test everything before you leave. Monday morning should be about settling in, not troubleshooting basic connectivity issues.
            </p>
          </div>
        </div>
      </section>

      {/* After Hours - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">After-Hours Moves for Round-the-Clock Operations</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some businesses don't have weekends. Call centers, medical facilities, restaurants, 24/7 operations — you can't just shut down for two days.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              After-hours moves happen during your slowest period. For most businesses, that's overnight. You close at 6pm, movers arrive at 7pm, everything's moved by 6am, and you open for business at your new location at 8am.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This approach works if your slow period is actually slow enough that you can be closed. A restaurant that closes at 10pm and reopens at 11am has a tight window but it's doable for small to medium spaces.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The challenge with after-hours moves is coordination. Everything has to run perfectly because there's no buffer time. If movers show up late, if something doesn't fit through a doorway, if any part of the plan fails — you're opening late or not at all the next day.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              After-hours moves require detailed planning and experienced movers who've done this before. It's not the time to hire the cheapest option or hope for the best.
            </p>
          </div>
        </div>
      </section>

      {/* Phased Relocation - Gray Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Phased Relocations: Move in Stages</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you absolutely cannot close, even for a few hours, phase the move. Different departments relocate on different days while others keep the business running.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This works best for larger businesses with distinct departments. Sales moves first, then accounting, then operations. Each group gets settled before the next one moves. Your business operates at reduced capacity but never fully shuts down.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The downside is complexity. You're essentially doing multiple moves instead of one. IT infrastructure becomes tricky because some people are in the old office while others are in the new one. Everyone needs to stay connected and functional.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Phased relocations also mean higher costs. You're paying for multiple move days, potentially maintaining two locations simultaneously, and dealing with split operations. But if downtime literally means zero revenue, the extra expense makes sense.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              This approach requires serious project management. Someone needs to coordinate who moves when, ensure communication stays functional, and troubleshoot problems without disrupting operations. It's complicated, but it keeps money coming in.
            </p>
          </div>
        </div>
      </section>

      {/* IT Planning - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">IT Planning Makes or Breaks Downtime</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your business probably runs on computers, internet, and phones. If those don't work immediately after the move, none of your downtime minimizing strategies matter. You're still offline.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Get internet installed before move day.</strong> This should be done at least a week early. Test it, make sure it works, confirm speeds match what you ordered. You want to move computers into a space that already has working connectivity.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Have your IT person oversee equipment relocation.</strong> Servers, networking hardware, phone systems — these aren't boxes of office supplies. They need proper shutdown procedures, careful handling, and specific setup sequences. Your movers can carry the equipment, but someone who understands the systems should direct the process.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Test everything before you declare victory.</strong> Internet works? Great. Can people actually access your business systems? Can they print? Can customers reach your phone number? Test the full workflow, not just whether cables are plugged in.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Have a backup plan.</strong> Mobile hotspots, temporary cloud access, alternative communication methods. If something goes wrong, how do you keep operating while you fix it? Figure that out before move day, not during the crisis.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Communication - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Employee Communication Prevents Confusion</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your employees need to know exactly what's happening and when. Confused staff create downtime just as effectively as broken internet.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Tell them the move timeline weeks in advance. When packing starts, what they need to pack themselves, when the actual move happens, where they should show up, what time everything needs to be ready.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If you're doing a phased move, everyone needs to understand which department moves when and how to stay connected during the split. If you're moving over a weekend, make clear whether staff needs to help or should just show up Monday at the new location.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Designate specific people to answer questions. During the move itself, have someone available who can make decisions and solve problems. Movers will have questions. Staff will have questions. No one should be standing around waiting for answers.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The businesses with smoothest moves are the ones where everyone knows their role and follows the plan. The disasters happen when people are confused, making it up as they go, or waiting for someone to tell them what to do.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How We Minimize Downtime for Boise Businesses</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We've moved businesses that literally couldn't close. Not even for an hour. Every move required careful planning, precise execution, and backups for the backups.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Weekend and after-hours moves are standard for us. We work when your customers don't notice. Whether that's Saturday, Sunday, overnight, or early morning — we schedule around your business needs, not our convenience.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We also coordinate with your IT team to ensure systems are up and running when you need them. Our movers understand that servers and networking equipment aren't furniture — they require different handling and setup.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Weekend moves available</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">After-hours relocations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Phased move coordination</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">IT equipment specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line on Business Downtime</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Downtime during an office move isn't inevitable. It's the result of poor planning, rushed execution, or working with movers who don't understand business operations.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The right strategy depends on your business. A standard office that operates Monday through Friday can move over a weekend. A 24/7 operation needs phased relocation. A business with tight margins might need after-hours moves to avoid losing revenue.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whatever approach you choose, the keys are the same: plan early, communicate clearly, prioritize IT infrastructure, and work with professionals who've done this successfully before. Get those pieces right and your customers never know you moved.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need to Move Without Closing Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll plan a move that keeps revenue flowing. Free consultation for Boise businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2087683987"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 768-3987
              </a>
              <span className="text-blue-100 self-center">Weekend & After-Hours Moves Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
