import { HOW_IT_WORKS_STEPS } from '@/lib/data'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const DELAYS = [1, 2, 3, 4] as const

export default function HowItWorks() {
  return (
    <section
      className="bg-mist border-t border-silver border-b py-20 px-[6vw]"
      aria-labelledby="how-heading"
    >
      <div className="max-w-content mx-auto">

        <Reveal>
          <SectionTag>How it works</SectionTag>
          <h2
            id="how-heading"
            className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.15] mb-3"
          >
            From your first call to<br />
            <em className="italic text-cobalt">your personal care plan.</em>
          </h2>
          <p className="text-[15.5px] text-text-body leading-[1.75] max-w-[600px] mb-14">
            No online booking, no GP referral needed. Simply call or email us — our team will match
            you with the right specialist and arrange a convenient time.
          </p>
        </Reveal>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative list-none"
          aria-label="Consultation steps"
        >
          {/* Connector line — desktop only */}
          <li
            className="hidden lg:block absolute top-[26px] h-px bg-silver pointer-events-none"
            style={{ left: 'calc(12.5% + 13px)', right: 'calc(12.5% + 13px)' }}
            aria-hidden="true"
          />

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <li key={step.number}>
              <Reveal delay={DELAYS[i]} className="group">
                <div
                  className={cn(
                    'w-[52px] h-[52px] rounded-full bg-white border-2 border-silver',
                    'flex items-center justify-center font-sans text-[18px] font-bold text-navy-900',
                    'mb-4 relative z-10 shadow-sm-blue',
                    'group-hover:bg-cobalt group-hover:border-cobalt group-hover:text-white',
                    'transition-all duration-200',
                  )}
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </div>
                <h3 className="text-[15px] font-bold text-navy-900 mb-1.5">{step.title}</h3>
                <p className="text-[13.5px] text-text-mid leading-[1.65]">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
