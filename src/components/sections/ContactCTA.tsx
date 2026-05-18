import { SITE } from '@/lib/constants'
import Reveal from '@/components/ui/Reveal'

const CTA_CARDS = [
  {
    emoji: '📞',
    title: 'Call us',
    value: SITE.phone,
    sub:   `${SITE.hours.weekdays} · ${SITE.hours.saturday}`,
    href:  SITE.phoneHref,
    smallValue: false,
  },
  {
    emoji: '✉️',
    title: 'Email us',
    value: SITE.email,
    sub:   'Response within 4 working hours',
    href:  SITE.emailHref,
    smallValue: true,
  },
  {
    emoji: '📍',
    title: 'Visit our clinic',
    value: SITE.address.full,
    sub:   `Nearest tube: ${SITE.address.tube}`,
    href:  undefined,
    smallValue: true,
  },
  {
    emoji: '🗓️',
    title: 'Opening hours',
    value: SITE.hours.weekdays,
    sub:   `${SITE.hours.saturday} · Sunday closed`,
    href:  undefined,
    smallValue: false,
  },
] as const

export default function ContactCTA() {
  return (
    <section
      className="bg-navy-900 py-20 px-[6vw] relative overflow-hidden"
      id="cta"
      aria-labelledby="cta-heading"
    >
      {/* Decorative background circles */}
      <div
        className="absolute right-[-60px] bottom-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(30,111,217,.12)' }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: '45%', top: '-40px',
          width: 180, height: 180,
          borderRadius: '50%',
          background: 'rgba(30,111,217,.07)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Copy */}
        <Reveal>
          <div className="flex items-center gap-2 text-[11.5px] font-bold text-cobalt-sky uppercase tracking-[0.09em] mb-3">
            <span className="w-[18px] h-0.5 bg-cobalt-sky rounded-full" aria-hidden="true" />
            Book your first consultation
          </div>
          <h2
            id="cta-heading"
            className="font-display font-normal text-white text-clamp-h2 leading-[1.2] mb-3.5"
          >
            See a specialist today.<br />
            No referral. No long wait.<br />
            <em className="italic text-cobalt-light">No compromise.</em>
          </h2>
          <p className="text-[15px] text-cobalt-sky leading-[1.72] max-w-[380px]">
            Expert, affordable diabetes care from GMC-registered specialists. Appointments within
            2–5 days, written care plans as standard — for patients across the UK. From £45 a
            consultation.
          </p>
        </Reveal>

        {/* Cards grid */}
        <Reveal delay={2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CTA_CARDS.map((card) => {
              const content = (
                <>
                  <span className="text-[28px] mb-2 block" aria-hidden="true">{card.emoji}</span>
                  <span className="text-[13px] font-bold text-cobalt-pale block mb-1">{card.title}</span>
                  <span
                    className="font-semibold text-cobalt-light block mb-0.5"
                    style={{ fontSize: card.smallValue ? '11px' : '12px' }}
                  >
                    {card.value}
                  </span>
                  <span className="text-[11px] text-cobalt-sky">{card.sub}</span>
                </>
              )

              const base = 'block text-center px-4 py-5 rounded-[14px] transition-all duration-150'
              const cardStyle = { background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)' }

              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  className={`${base} no-underline hover:bg-cobalt/[0.18] hover:border-cobalt-light/40`}
                  style={cardStyle}
                  aria-label={`${card.title}: ${card.value}`}
                >
                  {content}
                </a>
              ) : (
                <div key={card.title} className={base} style={cardStyle}>
                  {content}
                </div>
              )
            })}
          </div>
          <p
            className="text-center text-[11.5px] mt-4"
            style={{ color: 'rgba(125,180,245,.45)' }}
          >
            CQC regulated · GMC doctors · NICE guidelines · No referral required
          </p>
        </Reveal>

      </div>
    </section>
  )
}
