import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Commercial Moves Actually Cost in Boise | Commercial Moving Pricing',
  description: 'Real commercial moving costs in Boise. No vague estimates or sales pitches — just honest pricing info based on office size, equipment, timing, and what affects your actual quote.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs/commercial-moving-costs-boise',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hero.webp"
          alt="Commercial Moving Costs in Boise"
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
            What Commercial Moves Actually Cost in Boise
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            The straight answer on commercial moving pricing in the Treasure Valley.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You need to move your business. You start calling commercial moving companies in Boise. And every single one gives you some version of "it depends" instead of an actual number.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              That's frustrating, but it's also honest. Commercial moves vary wildly based on dozens of factors. A 10-person office with standard desks costs totally different than a 10-person office with medical equipment and specialized furniture.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              But you still need a ballpark. You need to know if you're looking at $2,000 or $20,000. So here's what commercial moves actually cost in Boise, what affects those costs, and how to get accurate quotes that don't surprise you later.
            </p>
          </div>
        </div>
      </section>

      {/* Office Size - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Office Size Determines Base Cost</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The single biggest factor in commercial moving costs is how much stuff you're moving. More offices, more furniture, more equipment — more money.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Small office (1-5 employees):</strong> Expect $800-2,500 for a basic move. A few desks, chairs, filing cabinets, maybe a small conference table. If everything's standard office furniture with no special equipment, you're looking at the lower end. Add specialty items or complex setups and costs increase.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Medium office (6-20 employees):</strong> Typical range is $2,500-8,000. This covers most small business moves in Boise. Multiple offices, conference rooms, break room furniture, standard IT equipment. If you've got server rooms or specialized equipment, plan for the higher end.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Large office (20-50 employees):</strong> You're looking at $8,000-20,000 or more. Full office buildouts with multiple conference rooms, kitchen areas, reception spaces. These moves often require multiple trucks and crews working simultaneously.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Very large operations (50+ employees):</strong> $20,000+ and up from there. At this scale, you're essentially moving an entire business infrastructure. These projects require detailed planning, phased moves, and often span multiple days.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Price - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Actually Affects Your Commercial Moving Quote</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Two 20-person offices might get quotes that differ by $5,000. Here's why.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Type of furniture.</strong> Standard office desks and chairs are straightforward. Cubicle systems require disassembly and reassembly. Custom built-ins might not even be moveable. Heavy filing systems need special equipment. Modular furniture costs more to move than simple desks because labor time increases significantly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Specialized equipment.</strong> If you're moving servers, medical equipment, manufacturing machinery, or anything requiring technical knowledge — expect higher costs. These items need careful handling, often special insurance, and sometimes climate-controlled transport.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Building access.</strong> Ground floor with loading dock access costs less than fifth floor with elevator restrictions. Stairs, narrow hallways, parking limitations — anything that makes access harder increases labor time and cost. Some Boise buildings have specific moving hours or require advance approval, which can affect scheduling and pricing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Distance.</strong> Moving across town costs less than moving to Nampa or Caldwell. Not because of fuel — because of time. The farther apart your locations, the more hours the job takes. Most commercial movers in Boise price by time and labor, so distance affects the total.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Timing.</strong> Weekend moves and after-hours relocations cost more because you're paying premium labor rates. But if downtime costs you revenue, the premium is worth it. End-of-month moves tend to cost more because everyone wants to move between leases. Book early and have flexibility on dates for better pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Hourly vs Flat Rate - Gray Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Hourly Rates vs. Flat Quotes</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Commercial movers in Boise typically price one of two ways: hourly rates or flat quotes. Each has advantages depending on your situation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Hourly pricing</strong> usually runs $120-200+ per hour for a two-person crew with a truck. Larger crews cost more. You pay for actual time spent, which means efficient moves cost less. The risk is that if problems come up — tight doorways, unexpected items, access issues — your cost increases. This works best for smaller, straightforward moves where the scope is clear.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Flat rate quotes</strong> give you a fixed price regardless of how long it takes. The moving company assumes the risk of timing problems. You get budget certainty, which matters for businesses that need predictable costs. This is standard for larger commercial moves where the company does a walkthrough and quotes the whole project.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Most reputable commercial movers offer flat quotes for anything beyond small office moves. They walk through your space, inventory what's moving, assess access and complexity, then give you a price. That quote should include labor, trucks, basic insurance, and standard moving equipment.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Watch for quotes that are deliberately vague about what's included. "Starting at $X" quotes often end up costing significantly more once add-ons appear. A legitimate quote specifies exactly what's covered and what costs extra.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Costs - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Additional Costs Beyond Basic Moving</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The base moving quote usually covers loading, transport, and unloading. But commercial moves often involve additional services that cost extra.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Packing services.</strong> If movers are packing your office instead of just moving pre-packed items, add 30-50% to your quote. Packing is labor intensive, requires materials, and takes time. But it ensures everything's protected and professionally packed.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Furniture assembly/disassembly.</strong> Sometimes included, sometimes extra. Cubicle systems, conference tables, modular furniture — anything requiring tools and technical knowledge might cost additional. Ask what's covered in your base quote.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>IT equipment handling.</strong> Basic computer equipment is usually covered. Servers, networking hardware, specialized systems might require additional insurance and handling fees. If you have significant IT infrastructure, discuss this specifically during the quote process.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Storage.</strong> If your new space isn't ready when you need to vacate your current office, temporary storage costs extra. Some moving companies offer storage, others require you to arrange it separately.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Specialty items.</strong> Pianos, safes, heavy machinery, art, antiques — these require special equipment and handling. They're usually quoted separately from standard office equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Accurate Quotes - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">How to Get Accurate Quotes</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The accuracy of your quote depends on the information you provide. Vague descriptions lead to vague quotes, which lead to surprise costs later.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Let movers walk through your space.</strong> Photos and descriptions help, but in-person walkthroughs are better. Movers see exactly what they're dealing with — furniture types, access challenges, specialty items. This eliminates surprises on move day.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Be honest about everything that's moving.</strong> If you're planning to pack things yourself but haven't done it yet, say so. If you have items in storage that need to be moved too, mention that. Hidden items discovered on move day either don't get moved or cost extra. Neither option is good.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Ask what's included and what costs extra.</strong> Basic insurance or full coverage? Are packing materials provided? Is furniture disassembly included? Are there fuel surcharges or other fees? A good moving company answers these questions clearly before you book.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Get at least three quotes.</strong> Prices vary significantly between companies. But don't just pick the cheapest — consider insurance, experience with commercial moves, reviews, and communication quality. The lowest quote often comes from companies cutting corners somewhere.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Read the quote details.</strong> Understand exactly what you're paying for and what happens if things change. Can you add items? What if you need to reschedule? Are there cancellation fees? These details matter when problems come up.
            </p>
          </div>
        </div>
      </section>

      {/* How We Price - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How We Handle Commercial Moving Quotes in Boise</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We walk through your office, inventory what's moving, assess access and complexity, then give you a detailed quote. That price is locked before we start work. No surprises, no hidden fees, no "we found extra items" charges.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Our quotes include labor, trucks, basic insurance, and standard equipment. We specify what costs extra so you can budget accurately. If you want packing services or specialty handling, we quote that separately and clearly.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We also help you plan timing to reduce costs. If weekend moves fit your budget, great. If weekday moves work better and save money, we discuss that option. Our goal is getting your business relocated efficiently, not maximizing our bill.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Free on-site estimates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Detailed written quotes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No hidden fees</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Price locked before work begins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line on Commercial Moving Costs</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Commercial moving costs in Boise depend on office size, furniture type, equipment complexity, building access, and timing. Small offices start around $800. Large operations can run $20,000 or more.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Accurate quotes require in-person walkthroughs. Phone estimates are guesses at best. Get multiple quotes, compare what's included, and read the details before signing anything.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The cheapest quote isn't always the best value. Look for transparent pricing, experienced crews, proper insurance, and companies that communicate clearly. Those factors matter more than saving a few hundred dollars.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Quote for Your Boise Office Move?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll walk through your space and give you a detailed, accurate quote. No vague estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2087683987"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 768-3987
              </a>
              <span className="text-blue-100 self-center">Free On-Site Estimates in the Treasure Valley</span>
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
