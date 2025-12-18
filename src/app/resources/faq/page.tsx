import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Moving FAQ Boise | Common Questions Answered',
  description: 'Answers to common questions about commercial moving in Boise. Pricing, timelines, what to expect, and more. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/resources/faq',
  },
}

export default function FAQPage() {
  const faqs = [
    {
      question: "How much does a commercial move cost?",
      answer: "It depends on what you're moving, how far, and how much time it takes. A small office might be $2,000-5,000. A large facility could be $20,000+. We'll give you a detailed quote after seeing your space and understanding the scope."
    },
    {
      question: "How far in advance should I book?",
      answer: "2-4 weeks is ideal, especially if you need to move during a specific timeframe. We can sometimes accommodate last-minute moves if we have availability. Call us as soon as you know you're moving."
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes. We can provide boxes, tape, packing paper, bubble wrap—whatever you need. Or you can pack yourself if you prefer. Either way works."
    },
    {
      question: "Will you pack everything for us?",
      answer: "If you want us to, yes. Full-service moves include packing. Or we can do partial packing—just certain items or areas. It's up to you."
    },
    {
      question: "Can you move us over a weekend?",
      answer: "Absolutely. Most commercial moves happen over weekends or after hours. That's when we do most of our work. We'll schedule around your business needs."
    },
    {
      question: "Are you insured?",
      answer: "Yes. We carry comprehensive insurance including general liability, workers comp, cargo insurance, and commercial auto coverage. We can provide certificates of insurance for your records."
    },
    {
      question: "What if something gets damaged?",
      answer: "Our insurance covers damage that occurs during the move. File a claim with us and we'll work with our insurance company to handle it. That's why proper insurance matters."
    },
    {
      question: "How long does a commercial move take?",
      answer: "Small offices: 1-2 days. Medium offices: 2-4 days. Large facilities or warehouses: Could be a week or more. We'll give you a realistic timeline based on your specific move."
    },
    {
      question: "Do we need to be there during the move?",
      answer: "Someone should be available to answer questions and make decisions, but you don't need to supervise every minute. Many clients check in periodically while we work."
    },
    {
      question: "Can you move servers and IT equipment?",
      answer: "Yes. We'll disconnect, label, pack, and move all IT equipment. Your IT team should handle the technical shutdown and reconnection, but we handle the physical moving."
    },
    {
      question: "What about heavy equipment or machinery?",
      answer: "We move heavy equipment regularly. We've got the rigging equipment and experience to handle industrial machinery, forklifts, manufacturing equipment, etc."
    },
    {
      question: "Do you disassemble and reassemble furniture?",
      answer: "Yes. Desks, cubicles, shelving—we'll take it apart for the move and put it back together at the new location."
    },
    {
      question: "Can you help set up the new office?",
      answer: "Definitely. We'll place furniture according to your floor plan, assemble everything, and get the space set up so you can start working right away."
    },
    {
      question: "What if we need storage during the transition?",
      answer: "We can arrange temporary storage if there's a gap between moving out and moving in. Your stuff stays secure until the new location is ready."
    },
    {
      question: "Do you move businesses outside of Boise?",
      answer: "Yes. We cover the entire Treasure Valley—Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas. For moves beyond that, call us and we'll see if we can accommodate."
    },
    {
      question: "How do you price commercial moves?",
      answer: "We typically quote based on the scope of work—how much you're moving, the time required, crew size needed, and any special requirements. We'll give you a detailed written quote before the move."
    },
    {
      question: "Can we get a quote over the phone?",
      answer: "We can give you a rough ballpark estimate, but accurate quotes require seeing your space. We'll schedule a walkthrough—it only takes 15-20 minutes and then you'll have a solid quote."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept checks, credit cards, and bank transfers. Payment terms are outlined in your quote and contract."
    }
  ]

  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Common questions about commercial moving in Boise.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                <h2 className="text-2xl font-bold text-dark-blue mb-3">{faq.question}</h2>
                <p className="text-lg text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-dark-blue mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-6">
              These are the questions we hear most often, but every commercial move is different.
              If you've got specific questions about your situation, just call us. We'll give you
              straight answers.
            </p>
            <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-dark-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-dark-blue/90 transition-colors">
              <Phone className="w-5 h-5" />(208) 505-9352 - Ask Your Question
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Get your free commercial moving quote today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
