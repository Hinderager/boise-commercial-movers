import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Planning an Office Move: Your 8-Week Timeline | Boise Commercial Movers',
  description: 'Your office move timeline doesn\'t have to be chaotic. Here\'s an 8-week planning schedule that actually works for businesses in Boise — from first planning to settling into your new space.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs/office-move-planning-timeline',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hero.webp"
          alt="Office Move Planning Timeline"
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
            Planning an Office Move: Your 8-Week Timeline
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Turn chaos into a checklist with this practical timeline.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Most office moves go sideways because people underestimate how much prep they actually need. You can't just call movers a week before and expect smooth sailing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Eight weeks sounds like a lot of time. It's not. Between coordinating with landlords, sorting what stays and what goes, prepping IT systems, and keeping your business running — those eight weeks disappear fast.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's a realistic timeline for planning an office move in Boise. Not the perfect-world scenario where everything goes exactly as planned. The real-world version where stuff comes up and you need buffer time built in.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Weeks Out - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">8 Weeks Out: Foundation Work</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Two months before your office move, you're setting up everything that comes later. This is all coordination and paperwork. It's boring but essential.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Book your commercial movers.</strong> Good moving companies in Boise fill up, especially during busy seasons. Eight weeks gives you options. Wait until four weeks and you're taking whoever's available, not who you actually want.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Measure both spaces.</strong> Walk through your current office and your new space with a tape measure. Pay attention to doorways, elevators, and stairwells. That conference table might fit in your current space but won't make the turn in your new building. Find out now, not on moving day.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Create a floor plan for the new office.</strong> Decide what goes where before move day. When movers ask "where does this desk go?" you need an answer that doesn't require a committee meeting. A simple floor plan saves hours during the move.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Notify your landlord and vendors.</strong> Lease requirements, utility shutoffs, mail forwarding — all the administrative stuff that takes weeks longer than you think. Start these conversations early.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Weeks Out - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">6 Weeks Out: The Purge</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's where you actually make the move cheaper and easier. Every piece of furniture you don't move is money saved and space gained.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Walk through your office with brutal honesty. That broken chair you've been meaning to fix for a year? Not worth moving. The filing cabinet full of papers from 2015? Probably time to let it go. Old equipment nobody uses anymore? Leave it behind.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Schedule junk removal for stuff you're ditching. Don't leave this until the last minute. You don't want to be frantically dealing with unwanted furniture the day before your move.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Inventory what's actually moving. Create a list, take photos if needed. This helps movers quote accurately and helps you track everything during the move. It's tedious work, but you'll be glad you did it when you're trying to figure out if anything went missing.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Weeks Out - Gray Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">4 Weeks Out: IT and Infrastructure</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              One month before your office move, you're dealing with the stuff that keeps your business running. Internet, phones, servers, printers — all the technology that everyone takes for granted until it doesn't work.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Order new internet service.</strong> Internet providers in Boise need time to schedule installations. If you wait until two weeks out, you might be running your business on a hotspot for the first week in your new space. Not ideal.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Plan your IT relocation.</strong> If you have servers, network equipment, or complex setups, bring in someone who knows what they're doing. Moving computer equipment isn't the same as moving furniture. One wrong move can cost thousands in damaged hardware or lost data.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Update your business information everywhere.</strong> Your address shows up in more places than you think. Google Business Profile, website, email signatures, letterhead, business cards. Start making that list now so you're not scrambling later.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Order new supplies.</strong> Moving boxes, packing tape, labels, markers. Don't assume your movers provide everything. Ask what's included and buy what's not.
            </p>
          </div>
        </div>
      </section>

      {/* 2 Weeks Out - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">2 Weeks Out: Pack and Communicate</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Two weeks before the move, things get real. This is when the actual packing happens and when your team needs clear direction.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Start packing non-essentials.</strong> Anything you don't need for daily operations gets boxed now. Archive files, extra supplies, decorations, seasonal items. Label everything clearly with what's inside and what room it goes to. Your future self will thank you.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Confirm details with your movers.</strong> Double-check the date, time, and scope of work. Make sure they have accurate information about both locations, including parking restrictions and building access. Surprises on move day are expensive.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Tell your employees exactly what's happening.</strong> When packing starts, when the move happens, when they'll have access to the new office, what they should bring with them on move day. The more clarity you provide, the smoother everything goes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Notify clients and customers.</strong> Send out an email blast about your upcoming move. Include your new address, any service interruptions, and your new contact information. Do this while you still have time to answer questions, not the day before you move.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Week - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Moving Week: Execute the Plan</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is what all that planning was for. If you've followed the timeline, move week should be organized chaos instead of complete disaster.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Pack everything remaining.</strong> The last few days before the move, box up daily-use items. IT equipment, desk supplies, personal items. Everything not bolted down should be ready to go.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Protect what matters.</strong> Wrap monitors, disconnect equipment properly, secure loose items. Your movers handle the heavy lifting, but you know which items are fragile or expensive. Take extra precautions with anything you can't afford to replace.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Designate a point person.</strong> Someone needs to be available on move day to answer questions and make decisions. Movers will have questions. Your team will have questions. Having one person responsible prevents confusion.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Do a final walkthrough.</strong> After everything's loaded, check every room, closet, and storage area. Check bathrooms, break rooms, and outdoor spaces. People always forget stuff. Don't be one of them.
            </p>
          </div>
        </div>
      </section>

      {/* First Week After - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">First Week After: Settle In</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You're in the new space. Boxes are everywhere. Nothing works quite right yet. That's normal. Give it a week before you decide you made a terrible mistake.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Unpack essentials first.</strong> Get the critical stuff working before you worry about decorations. Desks, computers, phones, break room. Basic functionality before comfort.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Test everything.</strong> Internet connection, phone lines, printers, security systems. If something doesn't work, you want to discover it immediately while the problem is fresh, not a month later when you've forgotten the details.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Get organized.</strong> Designated spots for supplies, clear labeling for storage areas, everyone knows where things live. The effort you put into organization now saves hours of "where did we put that?" conversations later.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Expect a week of adjustment. People will complain about parking, desk configurations, the kitchen layout, and everything else. Some complaints are legitimate and need addressing. Others just need time. Give your team space to adapt before making major changes.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How We Help With Office Move Planning</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We move businesses in Boise every week. Small offices, large companies, everything in between. And we've seen what works and what doesn't when it comes to planning.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              When you book with us, we walk through this timeline with you. We help you figure out what you actually need, what can wait, and how to avoid the common mistakes that turn office moves into nightmares.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We also offer after-hours and weekend moves so you're not shutting down during business hours. Your office gets moved, your customers never notice, and Monday morning everyone shows up to the new location ready to work.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">8-week planning assistance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">After-hours and weekend moves</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">IT equipment handling</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Full packing services available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line on Office Move Planning</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Eight weeks gives you enough time to handle an office move without panic. More time is better. Less time means cutting corners and hoping nothing breaks.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The businesses that have smooth moves are the ones that follow a timeline and stick to it. They don't procrastinate the boring parts. They don't assume everything will just work out. They plan, prepare, and execute.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Your office move doesn't have to be a disaster. Start early, stay organized, and work with professionals who've done this before. That combination makes all the difference.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Planning an Office Move in Boise?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll walk you through the timeline and handle the heavy lifting. Get a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352
              </a>
              <span className="text-blue-100 self-center">Commercial Moving Across the Treasure Valley</span>
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
