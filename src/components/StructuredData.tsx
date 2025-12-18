const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does a commercial move cost in Boise?', answer: 'Commercial moves in Boise typically cost $1,000-$10,000+ depending on size and complexity. We provide free detailed estimates with all costs upfront.' },
  { question: 'How long does a typical office move take?', answer: 'Most small to medium office moves take one day. Larger offices or complex moves may take 2-3 days. We offer after-hours and weekend moves to minimize downtime.' },
  { question: 'Can you move our office over the weekend?', answer: 'Yes! We specialize in after-hours and weekend moves to avoid business disruption. Call (208) 505-9352 to schedule.' },
  { question: 'Do you handle IT equipment and servers?', answer: 'Yes. We work with your IT team to properly disconnect, transport, and reconnect all technology and network equipment safely.' },
  { question: 'What if something gets damaged during the move?', answer: 'We are fully licensed and insured for commercial moves with comprehensive liability coverage. Damage is rare, but we handle it if it occurs.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Boise Commercial Movers - ${city}`,
    "description": `Professional commercial moving services in ${city}, Idaho. Office relocation, business moves, warehouse moving, equipment transport. Licensed and insured. Minimal downtime guaranteed.`,
    "url": "https://boise-commercial-movers.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-commercial-movers.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["Office Moving", "Business Relocation", "Warehouse Moving", "Equipment Moving", "IT Relocation", "Furniture Installation", "Commercial Moving", "After-Hours Moving"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday"], "opens": "08:00", "closes": "17:00", "description": "Weekend and after-hours moves available by appointment" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "87" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Moving Services",
    "provider": { "@type": "MovingCompany", "name": "Boise Commercial Movers" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Professional commercial moving and office relocation services in ${city} and the Treasure Valley. Complete business moves, warehouse relocation, equipment transport, and after-hours moving.`
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
