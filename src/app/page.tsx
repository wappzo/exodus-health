import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'

// Layout
import AccessBar from '@/components/layout/AccessBar'
import Navbar    from '@/components/layout/Navbar'
import Footer    from '@/components/layout/Footer'

// Sections
import Hero         from '@/components/sections/Hero'
import ContactStrip from '@/components/sections/ContactStrip'
import IntroBand    from '@/components/sections/IntroBand'
import Services     from '@/components/sections/Services'
import HowItWorks   from '@/components/sections/HowItWorks'
import WhoWeTreat   from '@/components/sections/WhoWeTreat'
import Doctors      from '@/components/sections/Doctors'
import Testimonials from '@/components/sections/Testimonials'
import ContactCTA   from '@/components/sections/ContactCTA'

/* ── Page-level SEO override ──────────────────────────────────
   Merges with the root layout metadata. The title template
   in layout.tsx means this becomes:
   "Specialist Diabetes Consultations, UK | Exodus Health"
   ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:       'Specialist Diabetes Consultations, UK',
  description: `${SITE.name} provides affordable private diabetes consultations in London with GMC-registered specialists. Expert care for type 1, type 2, gestational diabetes & pre-diabetes. CQC regulated. No referral needed. Call ${SITE.phone}.`,
  alternates:  { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <AccessBar />
      <Navbar />

      <main id="main">
        <Hero />
        <ContactStrip />
        <IntroBand />
        <Services />
        <HowItWorks />
        <WhoWeTreat />
        <Doctors />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
    </>
  )
}
