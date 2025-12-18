'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'How much does a commercial move cost?', answer: 'Commercial moves vary widely based on size, distance, and complexity. Most office moves run $1,000-$10,000+. We provide free detailed estimates that break down all costs upfront—no surprises on moving day.' },
  { question: 'How long does a typical office move take?', answer: 'Most small to medium office moves (10-20 employees) take one day. Larger offices or complex moves might take 2-3 days. We can also do after-hours or weekend moves to avoid business disruption.' },
  { question: 'Can you move our office over the weekend?', answer: 'Absolutely. We specialize in after-hours and weekend moves to minimize downtime. Your team can leave Friday afternoon and come back Monday morning to a fully set-up office.' },
  { question: 'Do you handle IT equipment and servers?', answer: 'Yes. We work with your IT team to properly disconnect, transport, and reconnect servers, workstations, and network equipment. Our movers are trained in handling sensitive electronics.' },
  { question: 'What if something gets damaged during the move?', answer: 'We\'re fully licensed and insured for commercial moves. Our team takes extreme care with your equipment, and we carry comprehensive liability coverage. Damage is rare, but if it happens, we handle it.' },
  { question: 'Do you provide packing services?', answer: 'Yes. We offer full packing services including labeling systems, specialty crating for sensitive items, and furniture disassembly/reassembly. You can also choose to pack yourself and we\'ll just handle the transport.' },
  { question: 'Can you help with office layout and setup?', answer: 'Definitely. We offer space planning consultation and can set up your new office according to your floor plan. We\'ll work with you to make sure everything goes exactly where you want it.' },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50">
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">{faq.answer}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
