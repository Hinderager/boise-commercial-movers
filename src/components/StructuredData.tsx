const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does HVAC repair cost in Boise?', answer: 'Most HVAC repairs in Boise cost between $150-500 depending on the issue. Diagnostic fees typically start around $89 and get applied to the repair cost. We provide exact quotes before any work begins.' },
  { question: 'How often should I service my HVAC system?', answer: 'We recommend servicing your HVAC system twice a year—once in spring for AC and once in fall for heating. Regular maintenance prevents costly breakdowns and extends equipment life.' },
  { question: 'Do you offer 24/7 emergency HVAC service?', answer: 'Yes! We offer 24/7 emergency heating and AC repair throughout the Treasure Valley. Call (208) 505-9352 for immediate service.' },
  { question: 'How long does a new furnace or AC installation take?', answer: 'Most standard installations take one day. Complex installations involving both furnace and AC or ductwork may take two days.' },
  { question: 'What HVAC brands do you service?', answer: 'We service all major brands including Carrier, Trane, Lennox, Rheem, Goodman, Bryant, American Standard, and more.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": `Boise HVAC Pros - ${city}`,
    "description": `Professional HVAC services in ${city}, Idaho. AC repair, furnace installation, heating services. Licensed and insured. 24/7 emergency service.`,
    "url": "https://hvac-boise.com",
    "telephone": "+1-208-505-9352",
    "email": "info@hvac-boise.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["AC Repair", "AC Installation", "Furnace Repair", "Furnace Installation", "HVAC Maintenance", "Emergency HVAC Service", "Heating Repair", "Air Conditioning Service"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday"], "opens": "00:00", "closes": "23:59", "description": "24/7 Emergency Service" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "87" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HVAC Services",
    "provider": { "@type": "HVACBusiness", "name": "Boise HVAC Pros" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Professional heating and air conditioning services in ${city} and the Treasure Valley. AC repair, furnace installation, HVAC maintenance, and 24/7 emergency service.`
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
