import { Metadata } from 'next'
import { Phone, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licensed & Insured Commercial Movers Boise | Credentials',
  description: 'Fully licensed and insured commercial moving company in Boise. Protect your business with professional, bonded movers. Call (208) 768-3987.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/about-us/licenses-insurance',
  },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Licensed & Insured</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional commercial movers with full licensing and comprehensive insurance.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Why Licensing and Insurance Matter</h2>
            <p>
              When you're moving your business—expensive equipment, critical files, inventory worth
              thousands of dollars—you need to know the moving company is legitimate and protected.
              That's what proper licensing and insurance provide.
            </p>
            <p>
              We're fully licensed to operate as a commercial moving company in Idaho. We carry
              comprehensive insurance coverage. And we're bonded. If something goes wrong (which
              is rare), you're protected.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-8">
              <h3 className="flex items-center gap-2 text-dark-blue mt-0">
                <Shield className="w-6 h-6" />
                Our Insurance Coverage
              </h3>
              <ul className="mb-0">
                <li>General Liability Insurance</li>
                <li>Commercial Auto Insurance</li>
                <li>Workers Compensation Insurance</li>
                <li>Cargo Insurance</li>
                <li>Professional Liability Coverage</li>
              </ul>
            </div>

            <h2>What Does This Mean For You?</h2>
            <p>
              If one of our crew members gets injured on the job, our workers comp covers it—not your
              business insurance. If we damage something during the move, our insurance handles it.
              If there's an accident involving our truck, our commercial auto policy covers it.
            </p>
            <p>
              This protects you from liability and ensures you're covered if something unexpected happens.
            </p>

            <h2>Licensed Commercial Moving Operations</h2>
            <p>
              We're licensed to operate as a commercial moving company in Idaho. This means we've met
              all the state requirements for safety, insurance, and business operations. We're not a
              guy with a truck doing moves on the side. This is our actual business, and we operate
              professionally.
            </p>

            <h2>Why Some Movers Don't Carry Proper Insurance</h2>
            <p>
              Insurance is expensive. That's why some moving companies—especially small operations—
              skip it or only carry minimal coverage. They can offer lower prices because they're not
              paying for proper insurance. But that risk gets passed to you.
            </p>
            <p>
              If an uninsured or underinsured mover damages your equipment or someone gets injured,
              you could end up paying for it. That cheap quote suddenly becomes very expensive.
            </p>

            <h2>Can You Provide Proof of Insurance?</h2>
            <p>
              Absolutely. We can provide certificates of insurance (COI) for your records. If your
              building management or lease agreement requires proof of insurance from vendors, we'll
              supply that documentation before the move.
            </p>

            <h2>Additional Coverage Options</h2>
            <p>
              For high-value equipment or specialized items, we can arrange additional coverage if
              needed. If you're moving servers worth $100,000 or medical equipment valued at $200,000,
              talk to us about extra coverage options. We'll make sure you're adequately protected.
            </p>

            <h2>Safety Standards</h2>
            <p>
              Proper licensing and insurance go hand-in-hand with safety. We train our crew on safe
              lifting techniques, proper equipment handling, and workplace safety. We use the right
              equipment for the job. We follow safety protocols. All of this reduces the risk of
              accidents and damage.
            </p>

            <h2>Questions About Our Coverage?</h2>
            <p>
              If you have questions about our licensing, insurance, or what's covered during your move,
              just ask. We'll explain exactly what protection you have and what our policies cover.
              Call us at <a href="tel:2087683987" className="text-dark-blue font-semibold">(208) 768-3987</a> and
              we'll walk you through everything.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">What You Get With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-dark-blue mb-2">Fully Licensed</h3>
                <p className="text-gray-700">Licensed commercial moving company operating legally in Idaho.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-dark-blue mb-2">Comprehensive Insurance</h3>
                <p className="text-gray-700">Full coverage including liability, cargo, workers comp, and auto.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-dark-blue mb-2">Bonded Company</h3>
                <p className="text-gray-700">Additional financial protection for your peace of mind.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-dark-blue mb-2">COI Available</h3>
                <p className="text-gray-700">We provide certificates of insurance for your records.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Move With Confidence</h2>
          <p className="text-xl text-gray-300 mb-8">Licensed, insured, and professional commercial moving.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
