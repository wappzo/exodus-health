import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/constants'
import AccessBar from '@/components/layout/AccessBar'
import Navbar    from '@/components/layout/Navbar'
import Footer    from '@/components/layout/Footer'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title:       'Contact Us',
  description: `Get in touch with Exodus Health. Call ${SITE.phone}, email us, or visit our clinic at ${SITE.address.full}. Appointments available Mon–Sat.`,
  alternates:  { canonical: '/contact' },
}

const CONTACT_CARDS = [
  {
    Icon:  Phone,
    emoji: '📞',
    title: 'Call us',
    value: SITE.phone,
    sub:   `${SITE.hours.weekdays} · ${SITE.hours.saturday}`,
    href:  SITE.phoneHref,
    cta:   'Call now',
  },
  {
    Icon:  Mail,
    emoji: '✉️',
    title: 'Email us',
    value: SITE.email,
    sub:   'Response within 1 business day',
    href:  SITE.emailHref,
    cta:   'Send email',
  },
  {
    Icon:  MapPin,
    emoji: '📍',
    title: 'Visit our clinic',
    value: SITE.address.street,
    sub:   `${SITE.address.city} ${SITE.address.postcode} · Nearest tube: ${SITE.address.tube}`,
    href:  undefined,
    cta:   undefined,
  },
  {
    Icon:  Clock,
    emoji: '🗓️',
    title: 'Opening hours',
    value: SITE.hours.weekdays,
    sub:   '', //`${SITE.hours.saturday} · Sunday closed`,
    href:  undefined,
    cta:   undefined,
  },
] as const

const FAQS = [
  {
    q: 'Do I need a referral?',
    a: 'No. You can book directly with us by phone or email — no GP referral is required.',
  },
  {
    q: 'How quickly can I be seen?',
    a: 'Appointments are typically available within 2–5 working days, including Saturdays.',
  },
  {
    q: 'Can I be seen by phone?',
    a: 'Yes. We offer telephone consultations as well as in-clinic appointments at our Harley Street practice.',
  },
  {
    q: 'Will you write to my GP?',
    a: 'Yes. With your consent, we send a full clinical summary to your GP within 24 hours of your appointment.',
  },
  {
    q: 'What should I bring to my appointment?',
    a: 'Any recent blood test results, a list of your current medications, and your blood glucose diary or CGM data if available.',
  },
  {
    q: 'How much does a consultation cost?',
    a: 'Consultations start from £45. Call us for a full breakdown of fees — we will be upfront about all costs before you book.',
  },
]

export default function ContactPage() {
  return (
    <>
      <AccessBar />
      <Navbar />

      <main id="main">

        {/* Page hero */}
        <section
          className="relative bg-navy-900 overflow-hidden"
          aria-label="Contact Exodus Health"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 800px 600px at 80% 50%, rgba(30,111,217,.18) 0%, transparent 65%)',
            }}
          />
          <div className="relative z-10 max-w-content mx-auto px-[6vw] py-[80px]">
            <div className="max-w-[620px]">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full
                  text-[11.5px] font-bold text-cobalt-pale uppercase tracking-[0.07em]"
                style={{ background: 'rgba(30,111,217,.20)', border: '1px solid rgba(194,217,249,.25)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light flex-shrink-0" aria-hidden="true" />
                Get in touch
              </div>
              <h1 className="font-display font-normal text-white text-clamp-hero leading-[1.06] mb-4">
                We&apos;re here to help.<br />
                <em className="italic text-cobalt-light">No referral needed.</em>
              </h1>
              <p className="text-[17px] font-light text-text-on-dark leading-[1.72]">
                Call or email us to discuss your needs and book an appointment. Our team will match
                you with the right specialist, usually within 2–5 working days.
              </p>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="bg-cobalt-wash border-b border-silver py-16 px-[6vw]" aria-label="Contact details">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CONTACT_CARDS.map((card) => {
                const inner = (
                  <>
                    <span className="text-[32px] mb-3 block" aria-hidden="true">{card.emoji}</span>
                    <p className="text-[11px] font-bold text-cobalt uppercase tracking-[0.08em] mb-2">
                      {card.title}
                    </p>
                    <p className="text-[15px] font-bold text-navy-900 mb-1">{card.value}</p>
                    <p className="text-[12.5px] text-text-soft leading-[1.6]">{card.sub}</p>
                    {card.cta && (
                      <span className="inline-block mt-4 text-[13px] font-bold text-cobalt">
                        {card.cta} →
                      </span>
                    )}
                  </>
                )

                const base = 'flex flex-col p-7 rounded-3xl border border-silver bg-white shadow-sm-blue'

                return card.href ? (
                  <Reveal key={card.title}>
                    <a
                      href={card.href}
                      className={`${base} no-underline hover:-translate-y-1 hover:shadow-hover-blue hover:border-cobalt-light transition-all duration-[220ms]`}
                      aria-label={`${card.title}: ${card.value}`}
                    >
                      {inner}
                    </a>
                  </Reveal>
                ) : (
                  <Reveal key={card.title}>
                    <div className={base}>{inner}</div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* How to book */}
        <section className="bg-white py-20 px-[6vw]" aria-labelledby="book-heading">
          <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — steps */}
            <Reveal>
              <SectionTag>How to book</SectionTag>
              <h2
                id="book-heading"
                className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.22] mb-8"
              >
                Four simple steps<br />
                <em className="italic text-cobalt">to better care.</em>
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { n: '1', title: 'Call or email us', body: 'Get in touch by phone or email. Our team will understand your needs and recommend the right consultation type.' },
                  { n: '2', title: 'We arrange your appointment', body: 'We match you with the most suitable specialist. Appointments typically available within 2–5 working days, including Saturdays.' },
                  { n: '3', title: 'Attend your consultation', body: 'Visit our Harley Street clinic or speak with your doctor by phone — a thorough, unhurried clinical assessment.' },
                  { n: '4', title: 'Receive your care plan', body: 'Within 24 hours you receive a written clinical summary and personalised care plan. A GP letter is included with your consent.' },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                        text-[13px] font-bold text-white bg-cobalt"
                    >
                      {n}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-navy-900 mb-1">{title}</h3>
                      <p className="text-[13.5px] text-text-body leading-[1.65]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right — FAQs */}
            <Reveal delay={2}>
              <SectionTag>FAQs</SectionTag>
              <h2 className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.22] mb-8">
                Common questions.
              </h2>
              <div className="flex flex-col gap-5">
                {FAQS.map(({ q, a }) => (
                  <div
                    key={q}
                    className="p-5 rounded-2xl border border-silver bg-cobalt-wash"
                  >
                    <h3 className="text-[14px] font-bold text-navy-900 mb-2">{q}</h3>
                    <p className="text-[13.5px] text-text-body leading-[1.65]">{a}</p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </section>

        {/* Emergency notice */}
        <div className="bg-navy-900 py-6 px-[6vw]">
          <p
            className="max-w-content mx-auto text-center text-[12.5px] leading-[1.75]"
            style={{ color: 'rgba(194,217,249,.55)' }}
          >
            This service does not replace emergency care. In a medical emergency, call{' '}
            <strong className="text-white">999</strong>. For urgent non-emergency advice, call{' '}
            <strong className="text-white">NHS 111</strong>.
          </p>
        </div>

      </main>

      <Footer />
    </>
  )
}
