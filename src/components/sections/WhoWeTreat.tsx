import { CONDITIONS, COMPLIANCE_ITEMS } from '@/lib/data'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'

const COMPLIANCE_BADGES = ['CQC', 'GMC', 'ICO', 'GDPR', 'NICE NG28 & NG17'] as const
const DELAYS = [1, 2, 3, 4] as const

export default function WhoWeTreat() {
  return (
    <section
      className="bg-white py-20 px-[6vw]"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── LEFT: Conditions ─────────────────────────────── */}
        <div>
          <Reveal>
            <SectionTag>Who we treat</SectionTag>
            <h2
              id="about-heading"
              className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.15] mb-3"
            >
              Conditions we specialise in.
            </h2>
            <p className="text-[15px] text-text-body leading-[1.75]">
              We provide specialist consultations for adults with all types of diabetes, and support
              people navigating a new diagnosis for the first time.
            </p>
          </Reveal>

          <div className="flex flex-col mt-1">
            {CONDITIONS.map((cond, i) => (
              <Reveal
                key={cond.title}
                delay={DELAYS[i]}
                className="flex items-start gap-3.5 py-[18px] border-b border-silver last:border-b-0"
              >
                <div
                  className="w-10 h-10 rounded-[10px] bg-cobalt-wash
                    flex items-center justify-center text-xl flex-shrink-0"
                  aria-hidden="true"
                >
                  {cond.emoji}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-navy-900 mb-1">{cond.title}</div>
                  <div className="text-[13px] text-text-mid leading-[1.6]">{cond.description}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* NHS note */}
          <div
            className="flex items-start gap-2.5 p-3.5 mt-5 bg-cobalt-wash rounded-r-lg
              text-[13px] text-text-body leading-[1.65]"
            style={{
              border: '1px solid #E8F1FD',
              borderLeft: '3px solid #1E6FD9',
            }}
          >
            <svg className="w-3.5 h-3.5 fill-cobalt flex-shrink-0 mt-0.5" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            <span>
              We complement, not replace, your NHS team. With your consent we write to your GP after
              every consultation. If concerned, you can also{' '}
              <a
                href="https://www.nhs.uk/conditions/type-2-diabetes/getting-diagnosed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 font-semibold hover:underline"
              >
                request an NHS blood test through your GP
              </a>
              . Symptom information sourced from{' '}
              <a
                href="https://www.diabetes.org.uk/about-diabetes/type-2-diabetes/symptoms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 font-semibold hover:underline"
              >
                Diabetes UK
              </a>
              .
            </span>
          </div>
        </div>

        {/* ── RIGHT: Compliance panel ───────────────────────── */}
        <Reveal delay={2} className="bg-navy-900 rounded-3xl p-8">
          <h3 className="font-display font-normal text-white text-[20px] mb-1.5">
            Our regulatory standards
          </h3>
          <p className="text-[13px] text-cobalt-sky leading-[1.65] mb-5">
            Exodus Health operates to the standards required of all UK private healthcare providers.
            Your safety is our first priority.
          </p>

          <div className="flex flex-col gap-2.5 mb-5">
            {COMPLIANCE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-3.5 rounded-[10px]
                  transition-colors duration-150"
                style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.09)' }}
              >
                <div
                  className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: 'rgba(30,111,217,.20)' }}
                  aria-hidden="true"
                >
                  {item.emoji}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-cobalt-pale mb-0.5">{item.title}</div>
                  <div className="text-[12px] leading-[1.55]" style={{ color: 'rgba(194,217,249,.60)' }}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {COMPLIANCE_BADGES.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px]
                  text-[12px] font-bold text-cobalt-pale"
                style={{ background: 'rgba(30,111,217,.15)', border: '1px solid rgba(30,111,217,.25)' }}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-cobalt-light flex-shrink-0" aria-hidden="true" />
                {badge}
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
