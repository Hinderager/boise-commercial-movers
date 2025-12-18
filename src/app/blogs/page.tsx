import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Moving Blog | Office Relocation Tips | Boise Commercial Movers',
  description: 'Expert tips, guides, and insights about commercial moving in Boise and the Treasure Valley. Learn from professional business movers.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/blogs',
  },
}

const blogPosts = [
  {
    slug: 'office-move-planning-timeline',
    title: 'Planning an Office Move: Your 8-Week Timeline',
    excerpt: 'Moving an office isn\'t something you figure out as you go. Here\'s the realistic timeline most businesses need.',
    image: '/generated/office-move-timeline.webp',
  },
  {
    slug: 'minimize-business-downtime-during-move',
    title: 'How to Minimize Downtime When Moving Your Business',
    excerpt: 'Every hour your business is down costs money. Here\'s how to keep disruption to a minimum.',
    image: '/generated/minimize-downtime.webp',
  },
  {
    slug: 'commercial-moving-costs-boise',
    title: 'What Commercial Moves Actually Cost in Boise',
    excerpt: 'No two office moves cost the same. Here\'s what goes into the price and what you should expect to pay.',
    image: '/generated/commercial-moving-costs.webp',
  },
  {
    slug: 'it-equipment-moving-best-practices',
    title: 'Moving IT Equipment Without Losing Your Mind',
    excerpt: 'Servers, workstations, networks—IT moves are high-stakes. Here\'s how to do it right.',
    image: '/generated/it-equipment-moving.webp',
  },
  {
    slug: 'choosing-commercial-movers-boise',
    title: 'How to Choose Commercial Movers in Boise',
    excerpt: 'Not every moving company can handle business relocations. Here\'s what to look for.',
    image: '/generated/choosing-commercial-movers.webp',
  },
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Commercial Moving Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tips, guides, and insights about office and business relocation in the Treasure Valley. Real advice from commercial moving professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48 bg-dark-blue">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-4xl font-bold text-center px-4">COMMERCIAL MOVING</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Move Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your commercial move.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
