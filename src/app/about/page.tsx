import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import AccessBar from '@/components/layout/AccessBar'
import Navbar    from '@/components/layout/Navbar'
import Footer    from '@/components/layout/Footer'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title:       'About Us',
  description: `Learn why Exodus Health was founded, our mission to transform private diabetes care in the UK, and the multidisciplinary team behind every consultation.`,
  alternates:  { canonical: '/about' },
}

const REGISTRATIONS = [
  {
    label: 'GMC — General Medical Council',
    href:  'https://www.gmc-uk.org',
    desc:  'All our doctors hold a current GMC licence to practise, verified on an ongoing basis.',
    emoji: '⚕️',
  },
  {
    label: 'NMC — Nursing & Midwifery Council',
    href:  'https://www.nmc.org.uk',
    desc:  'Our nursing staff are registered with the NMC and adhere to the NMC Code of Conduct.',
    emoji: '🩺',
  },
  {
    label: 'BDA — British Dietetic Association',
    href:  'https://www.bda.uk.com',
    desc:  'Dietary management is led by BDA-registered dietitians using evidence-based nutritional practice.',
    emoji: '🥗',
  },
]

export default function AboutPage() {
  return (
    <>
      <AccessBar />
      <Navbar />

      <main id="main">

        {/* Page hero */}
        <section
          className="relative bg-navy-900 overflow-hidden"
          aria-label="About Exodus Health"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 800px 600px at 80% 50%, rgba(30,111,217,.18) 0%, transparent 65%)',
            }}
          />
          <div className="relative z-10 max-w-content mx-auto px-[6vw] py-[80px]">
            <div className="max-w-[680px]">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full
                  text-[11.5px] font-bold text-cobalt-pale uppercase tracking-[0.07em]"
                style={{ background: 'rgba(30,111,217,.20)', border: '1px solid rgba(194,217,249,.25)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light flex-shrink-0" aria-hidden="true" />
                About Exodus Health
              </div>
              <h1 className="font-display font-normal text-white text-clamp-hero leading-[1.06] mb-4">
                Reimagining diabetes care<br />
                <em className="italic text-cobalt-light">for the real world.</em>
              </h1>
              <p className="text-[17px] font-light text-text-on-dark leading-[1.72] max-w-[560px]">
                Exodus Health is a private health startup aiming to improve the health of the next
                generation, alongside supporting current patients with type 2 diabetes.
              </p>
            </div>
          </div>
        </section>

        {/* Why we started */}
        <section className="bg-white py-20 px-[6vw]" aria-labelledby="why-heading">
          <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <SectionTag>Why we started</SectionTag>
              <h2
                id="why-heading"
                className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.22] mb-5"
              >
                We saw too many patients<br />falling through the gaps.
              </h2>
              <p className="text-[15.5px] text-text-body leading-[1.75] mb-4">
                At Exodus Health, we saw that the traditional reactive approach to diabetes left
                many behind — especially newly diagnosed patients. We didn&apos;t create this clinic
                just to manage a &lsquo;lifestyle disease&rsquo;; we aim to move beyond fragmented,
                impersonal care.
              </p>
              <p className="text-[15.5px] text-text-body leading-[1.75] mb-8">
                With rapid diagnostics and a multidisciplinary team, we provide evidence-based,
                personalised support to help patients reclaim their health and their future.
              </p>
              <Button href={SITE.phoneHref} variant="cobalt" size="lg" icon={<Phone className="w-4 h-4 fill-current" />}>
                Call {SITE.phone}
              </Button>
            </Reveal>

            {/* Key principles */}
            <Reveal delay={2}>
              <div className="flex flex-col gap-4">
                {[
                  { emoji: '🎯', title: 'Individualised approach', body: 'Every patient is different. We account for personal preferences, comorbidities, and the realities of daily life — not just clinical targets.' },
                  { emoji: '🔬', title: 'Evidence-based practice', body: 'All our care follows NICE guidelines NG28 and NG17. Mandatory CPD keeps our clinicians at the forefront of diabetes science.' },
                  { emoji: '🤝', title: 'Multidisciplinary team', body: 'Doctors, dietitians, and nurses working together — a holistic assessment for every patient, not a siloed single-specialty visit.' },
                  { emoji: '🔄', title: 'Ongoing reassessment', body: 'We reassess at every review and are prepared to discontinue medications that are no longer effective. Care should always move forward.' },
                ].map(({ emoji, title, body }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl border border-silver bg-cobalt-wash"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{emoji}</span>
                    <div>
                      <h3 className="text-[15px] font-bold text-navy-900 mb-1">{title}</h3>
                      <p className="text-[13.5px] text-text-body leading-[1.65]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* About Us */}
        <section className="bg-cobalt-wash border-y border-silver py-20 px-[6vw]" aria-labelledby="about-heading">
          <div className="max-w-content mx-auto">
            <Reveal>
              <SectionTag>About Us</SectionTag>
              <h2
                id="about-heading"
                className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.22] mb-5 max-w-[600px]"
              >
                A dedicated private service for type 2 diabetes in the community.
              </h2>
              <p className="text-[15.5px] text-text-body leading-[1.75] max-w-[720px] mb-3">
                Exodus Health is a private health startup aiming to improve the health of the next
                generation, alongside supporting current patients with type 2 diabetes. We integrate
                alongside existing NHS services as an alternative private service — providing
                dedicated, expert type 2 diabetes management in the community.
              </p>
              <p className="text-[15.5px] text-text-body leading-[1.75] max-w-[720px]">
                Our model is built on the understanding that type 2 diabetes is a complex, long-term
                condition that requires multidisciplinary input — a team of specialists undertaking a
                holistic assessment and adopting an individualised approach that accounts for each
                patient&apos;s preferences, comorbidities, and long-term wellbeing.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Registrations */}
        <section className="bg-white py-20 px-[6vw]" aria-labelledby="reg-heading">
          <div className="max-w-content mx-auto">
            <Reveal>
              <SectionTag>Registrations & Governance</SectionTag>
              <h2
                id="reg-heading"
                className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.22] mb-4"
              >
                Regulated, registered,<br />
                <em className="italic text-cobalt">and accountable.</em>
              </h2>
              <p className="text-[15.5px] text-text-body leading-[1.75] max-w-[580px] mb-12">
                Every member of the Exodus Health team is registered with the appropriate UK
                regulatory body. You can verify our registrations directly using the links below.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {REGISTRATIONS.map((r) => (
                <Reveal key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-7 rounded-3xl border border-silver bg-white
                      shadow-sm-blue no-underline
                      hover:-translate-y-1 hover:shadow-hover-blue hover:border-cobalt-light
                      transition-all duration-[220ms]"
                  >
                    <span className="text-[36px] mb-4 leading-none" aria-hidden="true">{r.emoji}</span>
                    <h3 className="text-[15px] font-bold text-navy-900 mb-2 group-hover:text-cobalt transition-colors">
                      {r.label}
                    </h3>
                    <p className="text-[13.5px] text-text-mid leading-[1.65] flex-1">{r.desc}</p>
                    <span className="mt-4 text-[12px] font-bold text-cobalt">{r.href.replace('https://', '')} ↗</span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* CQC chip */}
            <Reveal>
              <div
                className="mt-8 flex items-start gap-4 p-5 rounded-2xl max-w-[640px]"
                style={{ background: 'rgba(30,111,217,.06)', border: '1px solid rgba(30,111,217,.14)' }}
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🏥</span>
                <div>
                  <p className="text-[14px] font-bold text-navy-900 mb-1">
                    CQC Registered — Care Quality Commission
                  </p>
                  <p className="text-[13px] text-text-body leading-[1.65]">
                    Exodus Health is registered with the Care Quality Commission, the independent
                    regulator of health and social care in England. CQC Registration No.{' '}
                    <strong>{SITE.regulatory.cqcNumber}</strong>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
