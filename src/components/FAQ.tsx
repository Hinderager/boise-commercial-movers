'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'How much does HVAC repair cost?', answer: 'Most repairs run between $150-500 depending on the issue. Diagnostic fees typically start around $89 and get applied to the repair cost if you move forward. We always provide upfront pricing before any work begins.' },
  { question: 'How often should I service my HVAC system?', answer: 'We recommend a tune-up twice a year—once in spring for your AC and once in fall for your furnace. Regular maintenance catches small problems before they become expensive repairs and keeps your system running efficiently.' },
  { question: 'Do you offer 24/7 emergency service?', answer: 'Yes. No heat in the middle of winter or AC failure during a heat wave? We get it—some things can\'t wait. Our emergency technicians are available around the clock, including weekends and holidays.' },
  { question: 'How long does a new AC or furnace installation take?', answer: 'Most standard installations take one day. If we\'re replacing both your furnace and AC or doing ductwork modifications, it might take two days. We\'ll give you a timeline before we start.' },
  { question: 'What brands do you work on?', answer: 'We service all major brands—Carrier, Trane, Lennox, Rheem, Goodman, Bryant, American Standard, and more. Our techs are trained to diagnose and repair any make or model.' },
  { question: 'How do I know if I need a repair or replacement?', answer: 'Generally, if your system is over 15 years old and needs a repair costing more than half a new unit, replacement makes more sense. We\'ll always give you honest advice and both options so you can decide what\'s right for your situation.' },
  { question: 'Do you offer financing?', answer: 'Yes, we offer flexible financing options on new equipment installations. Get a new system now and pay over time with approved credit. Ask us about current promotions.' },
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
