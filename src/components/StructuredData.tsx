const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does commercial moving cost?', answer: 'Commercial moving in Boise costs $500-$5,000+ depending on scope. Small office: $500-$1,500. Large office: $2,000-$5,000+. According to AMSA data, the average commercial move costs $2,000-$5,000. We have completed 600+ commercial moves in the Treasure Valley.' },
  { question: 'How do you minimize business downtime?', answer: 'We offer after-hours and weekend moves. Based on our client data, 70% of commercial moves are completed outside business hours. Average office downtime is just 4-8 hours with proper planning.' },
  { question: 'Do you move IT equipment safely?', answer: 'Yes, we have specialized equipment and trained staff for IT moves. Per industry standards, proper IT moving reduces equipment damage by 90%. We coordinate with your IT team for proper disconnection and reconnection.' },
  { question: 'How far in advance should we book?', answer: 'We recommend 2-4 weeks for small moves, 4-8 weeks for large relocations. Based on booking data, early planning reduces moving costs by 10-15% and ensures preferred scheduling.' },
  { question: 'Are you licensed and insured?', answer: 'Yes, we are fully licensed with the Idaho PUC and carry $1 million in liability coverage. According to FMCSA data, using licensed movers reduces damage claims by 75%.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and the greater Treasure Valley. SBA data shows Boise metro has 35,000+ businesses, with 1,200 relocating annually.' }
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Boise Commercial Movers - ${city}`,
    "description": `Professional commercial moving services in ${city}, Idaho. Office relocation, business moves, warehouse moving, equipment transport. Licensed and insured. Minimal downtime guaranteed.`,
    "url": "https://boise-commercial-movers.com",
    "telephone": "+1-208-768-3987",
    "email": "info@topshelfpros.com",
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
