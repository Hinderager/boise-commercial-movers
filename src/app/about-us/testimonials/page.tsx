import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Boise Commercial Moving',
  description: 'Read what Boise businesses say about our commercial moving services. Real reviews from offices, warehouses, and businesses we\'ve moved. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/about-us/testimonials',
  },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      business: "Tech Startup, Downtown Boise",
      text: "We needed to move our office over a weekend and they made it happen. Everything was set up Monday morning exactly where it needed to be. Our team walked in and started working like nothing had happened.",
      rating: 5
    },
    {
      name: "Mike T.",
      business: "Distribution Center, Nampa",
      text: "Moving a warehouse is no joke. These guys brought the right equipment, knew how to handle palletized inventory, and got us operational at the new location in three days. Worth every penny.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      business: "Medical Office, Meridian",
      text: "They were careful with all our medical equipment and exam room furniture. Everything arrived in perfect condition. The crew was professional and worked around our schedule.",
      rating: 5
    },
    {
      name: "David K.",
      business: "Restaurant Owner, Boise",
      text: "Moved our entire restaurant including the commercial kitchen. They handled the heavy equipment, coordinated with our equipment techs, and we were open for business in four days. Impressive work.",
      rating: 5
    },
    {
      name: "Rachel P.",
      business: "Law Office, Eagle",
      text: "We had a lot of files and office furniture to move. They labeled everything, kept it all organized, and nothing got lost or damaged. The project manager kept us updated throughout the whole process.",
      rating: 5
    },
    {
      name: "Tom H.",
      business: "Manufacturing Facility, Caldwell",
      text: "They moved some pretty heavy machinery for us. Came prepared with the right rigging equipment and knew what they were doing. Our production manager was impressed with how smoothly it went.",
      rating: 5
    }
  ]

  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What Our Customers Say</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Real reviews from Boise area businesses we've moved.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-dark-blue">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Why Businesses Choose Us</h2>
            <p>
              We've moved hundreds of businesses in the Boise area. Offices, warehouses, retail stores,
              restaurants, medical facilities—all kinds of commercial operations. The reviews above
              represent what we hear most often: we're organized, professional, and we get the job done
              on time.
            </p>

            <h2>What Makes a Good Commercial Moving Company?</h2>
            <p>
              From our customers' perspective, it comes down to a few things. First, showing up when
              we say we will. Second, bringing the right crew and equipment for the job. Third, keeping
              things organized so nothing gets lost. And fourth, working fast so business downtime is
              minimized.
            </p>
            <p>
              That's what we focus on. Not fancy marketing or gimmicks. Just solid, reliable commercial
              moving that gets businesses relocated without drama.
            </p>

            <h2>Can You Provide References?</h2>
            <p>
              Absolutely. If you're planning a similar type of move—same industry, similar size, or
              specific equipment requirements—we can connect you with past customers who've done that
              kind of move. Just ask when you call for a quote.
            </p>

            <h2>See For Yourself</h2>
            <p>
              The best way to judge our work is to talk to us about your move. We'll ask good questions,
              give you a realistic timeline, and provide a clear quote. No pressure, no sales pitch—just
              straight answers about what your move will involve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl text-gray-300 mb-8">Get a quote for your commercial move today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
