import { Metadata } from 'next'
import { Phone, Clock, Shield, Users, CheckCircle, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Our Commercial Movers Boise | What Makes Us Different',
  description: 'Why Boise businesses choose us for commercial moving. Professional crews, licensed and insured, minimal downtime. See what sets us apart. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/about-us/why-choose-us',
  },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Why Choose Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">What makes us different from other commercial moving companies in Boise.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">We Minimize Downtime</h3>
              <p className="text-gray-700">
                Every day your business is closed costs money. We plan moves to happen fast—usually
                over weekends or after hours—so you're back open ASAP.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Fully Licensed & Insured</h3>
              <p className="text-gray-700">
                Comprehensive coverage including liability, workers comp, and cargo insurance. Your
                business is protected if something goes wrong.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Experienced Crews</h3>
              <p className="text-gray-700">
                Our crews have moved hundreds of businesses. They know how to handle expensive
                equipment, work efficiently, and stay organized.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Right Equipment</h3>
              <p className="text-gray-700">
                We bring the proper trucks, dollies, ramps, and tools for commercial moves. Heavy
                equipment, IT infrastructure—we're prepared.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Organized Process</h3>
              <p className="text-gray-700">
                Labeling systems, inventory tracking, floor plans—we keep moves organized so nothing
                gets lost and everything ends up where it should.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#FFC845] rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Clear Communication</h3>
              <p className="text-gray-700">
                You'll know what's happening, when it's happening, and who to contact if questions
                come up. No surprises, no confusion.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>We're Not the Cheapest (And That's Intentional)</h2>
            <p>
              If you're shopping purely on price, we're probably not the lowest quote you'll get.
              And that's fine. We're not trying to be the cheapest. We're trying to be the best
              value—the company that does the job right, on time, without damage or drama.
            </p>
            <p>
              Cheap movers cut corners somewhere. Maybe they're uninsured. Maybe they use
              inexperienced crews. Maybe they overbook and show up late. Those savings come with risk.
            </p>

            <h2>What You Get With Our Pricing</h2>
            <p>
              Our quotes include experienced crews, proper insurance, the right equipment, and
              professional project management. You're paying for peace of mind. You're paying for
              your business to be back up and running fast. You're paying for things to go smoothly.
            </p>

            <h2>We've Done This Before</h2>
            <p>
              We've moved offices, warehouses, retail stores, restaurants, medical practices,
              manufacturing facilities—all kinds of commercial operations. When you hire us, you're
              getting that experience. We know what works, what doesn't, and how to handle the
              unexpected issues that come up during moves.
            </p>

            <h2>Local Boise Company</h2>
            <p>
              We're based here in the Boise area. We know the buildings, the neighborhoods, the
              logistics of moving in this region. We're not a national chain sending crews from who
              knows where. We're local, and our reputation matters to us.
            </p>

            <h2>We Work Around Your Schedule</h2>
            <p>
              Need to move over a weekend? After hours? During a holiday shutdown? We'll work
              whenever you need us to. Many commercial moves happen when regular business is closed—
              that's our specialty.
            </p>

            <h2>Straightforward Quotes</h2>
            <p>
              We'll give you a clear quote that explains what's included. No hidden fees or surprise
              charges. The quote you get is the price you pay (unless you change the scope of the move).
            </p>

            <h2>Ready to Experience the Difference?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your move. We'll ask good questions, give you honest answers, and provide
              a quote that reflects the professional service we deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready For a Professional Move?</h2>
          <p className="text-xl text-gray-300 mb-8">Get your free quote today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
