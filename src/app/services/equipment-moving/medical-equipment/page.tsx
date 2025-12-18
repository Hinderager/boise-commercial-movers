import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medical Equipment Moving Boise | Healthcare Facility Relocation',
  description: 'Professional medical equipment moving in Boise. Move exam tables, imaging equipment, and medical devices safely. Licensed and insured. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-commercial-movers.com/services/equipment-moving/medical-equipment',
  },
}

export default function MedicalEquipmentPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Medical Equipment Moving</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Move medical offices and healthcare facilities with specialized equipment handling.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Medical Equipment Requires Careful Handling</h2>
            <p>
              Medical equipment is expensive, sensitive, and critical to patient care. Whether you're
              moving a small medical office or an entire clinic, we understand that equipment needs to
              arrive in working condition and be set up quickly so you can continue treating patients.
            </p>
            <p>
              We've moved dental offices, medical clinics, physical therapy centers, chiropractic offices,
              and veterinary practices. We know how to handle exam tables, imaging equipment, dental chairs,
              and specialized medical devices.
            </p>

            <h2>Medical Equipment We Move</h2>
            <ul>
              <li>Exam tables and treatment chairs</li>
              <li>Dental chairs and dental equipment</li>
              <li>X-ray machines and imaging equipment</li>
              <li>Ultrasound machines</li>
              <li>Medical refrigerators and freezers</li>
              <li>Physical therapy equipment</li>
              <li>Surgical equipment and instruments</li>
              <li>Medical office furniture</li>
              <li>Patient records and filing systems</li>
            </ul>

            <h2>Dental Office Moves</h2>
            <p>
              Dental offices have specialized equipment that's both heavy and delicate. Dental chairs,
              X-ray equipment, sterilization units, compressors—we'll disconnect and move all of it.
              We'll work with your dental equipment technician to coordinate the move. They handle the
              technical disconnection and reconnection, we handle the physical move.
            </p>

            <h2>X-ray and Imaging Equipment</h2>
            <p>
              Imaging equipment is sensitive and often expensive. We'll pack and transport X-ray machines,
              ultrasound equipment, and other imaging devices with extra care. For large imaging equipment,
              we might need specialized rigging to move it safely. We'll assess what you've got and come
              prepared.
            </p>

            <h2>Do You Disconnect Medical Equipment?</h2>
            <p>
              We'll disconnect basic equipment—unplugging devices, removing items from counters, detaching
              furniture. For specialized medical equipment that requires technical knowledge to disconnect
              or that needs to be decontaminated before moving, you'll need your equipment service
              technician to handle that. We'll coordinate with them.
            </p>

            <h2>What About Patient Records?</h2>
            <p>
              Patient records are confidential and important. We'll pack files carefully, label boxes
              clearly, and keep everything organized. If you want to handle records yourself for security
              reasons, that's fine too. We'll move whatever you're comfortable with us handling.
            </p>

            <h2>Can You Move Medical Refrigerators?</h2>
            <p>
              Yes. Medical refrigerators and freezers that store vaccines, medications, or samples need
              special handling. We'll move them carefully and quickly to minimize the time they're
              unplugged. If you have temperature-sensitive materials, you'll need to coordinate with
              your medical supplier about proper storage during the move.
            </p>

            <h2>Physical Therapy and Chiropractic Equipment</h2>
            <p>
              PT tables, chiropractic adjustment tables, exercise equipment, therapy machines—we move
              it all. Some of this equipment is heavy and specialized. We'll handle it carefully and
              get it set up in your new facility.
            </p>

            <h2>Minimizing Clinic Downtime</h2>
            <p>
              Most medical offices close Thursday afternoon, we move Friday and Saturday, and they're
              ready to see patients Monday morning. We work fast because we know every day you're closed
              affects your patients and your revenue. Some clinics do partial moves—relocating non-
              clinical areas first, then the treatment rooms. Whatever schedule works for you.
            </p>

            <h2>Setup at the New Location</h2>
            <p>
              We'll place all equipment and furniture according to your floor plan. Exam rooms, reception
              area, office space—everything goes where you want it. Your equipment technicians will
              handle the technical setup and calibration, but we'll have everything positioned and ready
              for them.
            </p>

            <h2>Ready to Move Your Medical Facility?</h2>
            <p>
              Call us at <a href="tel:2085059352" className="text-dark-blue font-semibold">(208) 505-9352</a> and
              let's talk about your medical office move. We'll schedule a walkthrough, discuss your
              equipment and timeline, and give you a detailed quote for the entire relocation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Medical Moving Quote</h2>
          <p className="text-xl text-gray-300 mb-8">Professional medical equipment relocation with minimal downtime.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
