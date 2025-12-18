import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckSquare, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Choose Commercial Movers in Boise | Selection Guide',
  description: 'What to look for when hiring commercial movers in Boise. Experience, insurance, references, red flags, and the right questions to ask before booking your office move.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs/choosing-commercial-movers-boise',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hero.webp"
          alt="Choosing Commercial Movers in Boise"
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
            How to Choose Commercial Movers in Boise
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            What to look for when your business move actually matters.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hiring commercial movers isn't like ordering office supplies. You can't just pick the cheapest option from Google and hope for the best. A bad moving company can damage equipment, blow your timeline, and turn a simple office relocation into a business disruption.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              But figuring out which commercial movers in Boise are actually good requires more than reading a few reviews. You need to know what questions to ask, what red flags to watch for, and what really matters versus what's just marketing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's a realistic guide to choosing commercial movers based on what actually predicts whether your move goes smoothly or becomes a disaster.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Matters - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Commercial Moving Experience Actually Matters</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some moving companies handle residential moves and occasionally take commercial jobs. Others specialize in office relocations. That difference matters more than you'd think.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Commercial moves have different challenges than residential ones. You're dealing with office furniture that requires assembly, IT equipment that costs thousands, coordinated timing that affects business operations, and building management restrictions that don't exist in homes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Ask how long they've been doing commercial moves specifically. "We've been in business 20 years" sounds impressive, but if they've only done office moves for two years, you're not getting 20 years of relevant experience.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Ask about similar moves they've completed. If you're moving a 15-person office, you want movers who've handled that size before. If you have specialized equipment, ask about their experience with similar items. Companies that have done your type of move many times are less likely to encounter surprises.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Experience shows up in planning. Experienced commercial movers ask detailed questions during estimates, identify potential problems before move day, and have processes for handling common challenges. Companies without that background learn on your job, which is expensive for you.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance and Licensing - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Insurance and Licensing Aren't Optional</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If movers damage your equipment or someone gets injured during your move, proper insurance is the difference between filing a claim and paying out of pocket.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Verify they have general liability insurance.</strong> This covers property damage during the move. Ask for proof — a current certificate of insurance from their carrier. Don't just take their word for it. Legitimate companies provide this documentation without hesitation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Confirm workers' compensation coverage.</strong> If a mover gets hurt on your property and the company doesn't have workers' comp, you could be liable. This is especially important in Idaho where business liability laws can make you responsible for uninsured workers.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Understand their cargo insurance.</strong> Basic coverage typically pays 60 cents per pound for damaged items. That's $30 for a 50-pound server that cost $3,000. For valuable equipment, get additional coverage or verify your business insurance covers items during moves.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Check licensing for interstate moves.</strong> If you're moving from Boise to another state, movers need USDOT registration. Local moves within Idaho don't require federal licensing, but legitimate companies still have proper state business licenses.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Companies that can't or won't provide insurance documentation are operating without proper coverage. When something goes wrong — and eventually something always does — you discover they can't pay for damages. At that point your options are limited and expensive.
            </p>
          </div>
        </div>
      </section>

      {/* References and Reviews - Gray Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Check References and Read Reviews Carefully</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Online reviews help, but they're not the complete picture. You need to know how to read them and what questions to ask.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Look for reviews from commercial moves specifically.</strong> A company might have great reviews for residential jobs but different results with business relocations. Pay attention to reviews that mention office moves, commercial equipment, and business-related concerns.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Read negative reviews to spot patterns.</strong> Every company gets occasional bad reviews. But if multiple reviews mention the same problems — pricing surprises, damaged equipment, missed deadlines, poor communication — that's a pattern, not bad luck.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Ask for references from similar moves.</strong> If they've moved other businesses in Boise, ask to contact those customers. Legitimate companies have satisfied clients who'll vouch for their work. If they can't provide references, that tells you something.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Check how they respond to complaints.</strong> Companies that respond professionally to negative reviews, take responsibility, and explain how they fixed problems show they care about their reputation. Companies that argue with reviewers or ignore complaints show their true character.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Google, Yelp, and Facebook reviews all matter. But also check the Better Business Bureau for complaints and resolutions. BBB accreditation isn't essential, but how they handle disputes is revealing.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Red Flags That Should Stop You from Hiring</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some warning signs are obvious. Others are subtle. All of them predict problems.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Refusing to provide written estimates.</strong> Professional movers provide detailed written quotes. If they'll only give verbal estimates or push you to commit without written documentation, walk away. You need a paper trail for when "we discussed" becomes "we never said that."
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Requiring large deposits before the move.</strong> Small deposits to secure your date are normal. Demanding half or more upfront is unusual and risky. If they disappear or do poor work, recovering your money becomes difficult.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>No physical address or local presence.</strong> Some "moving companies" are just brokers who sell your job to whoever bids lowest. They collect your deposit and disappear. Legitimate commercial movers in Boise have local offices, local crews, and local trucks.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Prices dramatically lower than competitors.</strong> If everyone quotes $5,000 except one company at $2,000, ask yourself why. They're either planning to add fees later, cutting corners on insurance, paying workers under the table, or simply won't show up. Dramatically low quotes rarely end well.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Vague or evasive answers to basic questions.</strong> Ask about insurance, experience, timing, what's included. If they can't or won't give clear answers, they're either inexperienced or deliberately hiding information. Either way, that's your signal to find someone else.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Pushy sales tactics.</strong> Professional movers provide information and let you decide. Companies that pressure immediate commitments, claim they have limited availability to force quick decisions, or get defensive when you ask questions are showing you how they'll behave when problems arise.
            </p>
          </div>
        </div>
      </section>

      {/* Questions to Ask - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Questions to Ask Before You Hire</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The right questions reveal whether a moving company actually knows what they're doing or just sounds good on the phone.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>"How many commercial moves do you do per month?"</strong> This tells you whether they're experienced with business relocations or this is occasional side work. You want movers who do office moves regularly, not once in a while.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>"What's included in your quote?"</strong> Labor, trucks, basic insurance — what's covered? Are there additional fees for stairs, long carries, packing materials, fuel, or other services? You need the full picture, not surprises later.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>"Do you offer after-hours or weekend moves?"</strong> If minimizing downtime matters, you need movers who work when your business is closed. Some companies only move during business hours, which might not work for your situation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>"How do you handle IT equipment?"</strong> Their answer shows whether they understand technology moves or treat servers like furniture. Experienced commercial movers know proper handling procedures and can explain them.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>"What happens if the move takes longer than expected?"</strong> For hourly pricing, this matters. For flat rates, ask what happens if scope changes. Understanding their policies before problems arise prevents arguments later.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>"Can you provide references from commercial clients?"</strong> If they're experienced and professional, they have satisfied business customers who'll vouch for them. If they can't or won't provide references, that's telling.
            </p>
          </div>
        </div>
      </section>

      {/* How We Operate - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How We Approach Commercial Moves in Boise</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We've been moving businesses in the Treasure Valley for years. We understand that your office move affects your operations, your employees, and your customers. That responsibility isn't something we take lightly.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We provide written quotes after walking through your space. We're fully insured with general liability and workers' comp. We have references from commercial clients who'll tell you about their experience working with us. And we're upfront about what's included, what costs extra, and what to expect during your move.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We offer weekend and after-hours moves because we know downtime costs money. We handle IT equipment properly because we've learned the hard way what happens when you don't. And we communicate clearly throughout the process because confusion creates problems.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Years of commercial moving experience</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Fully insured and licensed</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Written quotes with clear terms</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">References available from business clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line on Choosing Commercial Movers</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Choosing commercial movers in Boise requires more than comparing prices. You need to verify experience, check insurance, read reviews carefully, watch for red flags, and ask detailed questions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The cheapest quote often becomes the most expensive mistake. Look for transparent pricing, clear communication, proper insurance, relevant experience, and companies that other businesses trust.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Your business move is too important to gamble on. Take time to choose movers properly. The hour you spend researching and asking questions saves you days of problems and potentially thousands in damages.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Discuss Your Office Move?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll walk through your space, answer your questions, and provide a detailed written quote. No pressure, just information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352
              </a>
              <span className="text-blue-100 self-center">Serving Businesses Across the Treasure Valley</span>
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
