import { Phone, Shield, User, Clock, Lock, PlayCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

const TRUST_CHIPS = [
  { Icon: Shield, label: 'CQC Regulated' },
  { Icon: User,   label: 'GMC-registered Doctors' },
  { Icon: Clock,  label: 'Mon – Sat Appointments' },
  { Icon: Lock,   label: 'GDPR & ICO Compliant' },
] as const

export default function Hero() {
  return (
    <section
      className="relative flex items-center bg-navy-900 overflow-hidden"
      aria-label="Welcome to Exodus Health"
    >
      {/* Background atmosphere — left-weighted now that video sits on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(ellipse 70% 80% at 20% 50%, rgba(30,111,217,.14) 0%, transparent 60%)',
            'radial-gradient(ellipse 50% 60% at 70% 80%, rgba(30,111,217,.10) 0%, transparent 55%)',
            'radial-gradient(ellipse 30% 40% at 5% 10%,  rgba(74,143,232,.08) 0%, transparent 50%)',
          ].join(', '),
        }}
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 hero-grid-overlay pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto w-full px-[6vw] py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: copy ─────────────────────────────────────── */}
          <div className="flex-1 min-w-0 animate-fadeup">

            {/* Eyebrow pill */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-7 rounded-full
                text-[11.5px] font-bold text-cobalt-pale uppercase tracking-[0.07em]"
              style={{ background: 'rgba(30,111,217,.22)', border: '1px solid rgba(194,217,249,.28)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-cobalt-light flex-shrink-0 animate-blink"
                aria-hidden="true"
              />
              Doctor-led&nbsp;&nbsp;·&nbsp;&nbsp;UK&nbsp;&nbsp;·&nbsp;&nbsp;Evidence-based
            </div>

            {/* H1 — no forced mid-phrase break; let column width wrap it naturally */}
            <h1 className="font-display font-normal text-white text-clamp-hero leading-[1.06] mb-5">
              Real diabetes care for{' '}
              <em className="italic text-cobalt-light">real-world challenges.</em>
            </h1>

            {/* Lead paragraph */}
            <p className="text-[16.5px] font-light text-text-on-dark leading-[1.78] max-w-[500px] mb-4">
              Type 2 diabetes requires a multidisciplinary, holistic approach — accounting for
              personal preferences, comorbidities, and the long-term impact of every decision.
              At Exodus Health, we provide expert-led, evidence-based, personalised care that
              evolves with you.
            </p>

            {/* Regulatory note */}
            <div
              className="flex items-start gap-2.5 p-3.5 mb-9 max-w-[500px] text-[12.5px] leading-relaxed rounded-r-lg"
              style={{
                color: 'rgba(194,217,249,.70)',
                background: 'rgba(255,255,255,.055)',
                borderLeft: '3px solid rgba(74,143,232,.7)',
              }}
              role="note"
            >
              <svg className="w-3.5 h-3.5 fill-cobalt-light flex-shrink-0 mt-0.5" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
              All consultations with GMC-registered diabetes specialists. CQC regulated.
              Bookings by phone — no online booking required.
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                href={SITE.phoneHref}
                variant="cobalt"
                size="lg"
                icon={<Phone className="w-4 h-4 fill-current" />}
              >
                Call {SITE.phone}
              </Button>
              <Button href="/#services" variant="ghost" size="lg">
                See our services
              </Button>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2" role="list">
              {TRUST_CHIPS.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                    text-[12px] font-semibold"
                  style={{
                    color: 'rgba(255,255,255,.82)',
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.13)',
                  }}
                  role="listitem"
                >
                  <Icon className="w-3 h-3 fill-cobalt-light text-cobalt-light flex-shrink-0" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: video ───────────────────────────────────── */}
          <div className="flex-shrink-0 w-full lg:w-[500px] animate-fadeup">

            {/* Label above video */}
            <div className="flex items-center gap-2 mb-3">
              <PlayCircle className="w-4 h-4 text-cobalt-light flex-shrink-0" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-cobalt-pale uppercase tracking-[0.07em]">
                Watch — Diabetes Type 1 vs Type 2 explained
              </span>
            </div>

            {/* Video with glow */}
            <div className="relative">
              {/* Cobalt glow bloom behind the player */}
              <div
                className="absolute -inset-6 rounded-[32px] pointer-events-none"
                aria-hidden="true"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(30,111,217,.28) 0%, transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />
              {/* 16 : 9 aspect-ratio wrapper */}
              <div
                className="relative w-full rounded-3xl overflow-hidden"
                style={{
                  paddingBottom: '56.25%',
                  border: '1px solid rgba(194,217,249,.20)',
                  boxShadow: [
                    '0 24px 64px rgba(0,0,0,.55)',
                    '0 0 0 1px rgba(30,111,217,.18)',
                    'inset 0 1px 0 rgba(255,255,255,.07)',
                  ].join(', '),
                }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ORpIYsxhRag"
                  title="Diabetes Type 1 vs Type 2 Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Caption below video */}
            <p
              className="mt-3 text-[11.5px] text-center leading-relaxed"
              style={{ color: 'rgba(194,217,249,.45)' }}
            >
              Educational content — sourced from Simple Nursing
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}
