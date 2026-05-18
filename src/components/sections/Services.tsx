import { Phone, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { SITE } from '@/lib/constants'
import type { Service } from '@/types'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'

function ServiceCard({ service, delay }: { service: Service; delay: 1 | 2 | 3 | 4 }) {
  return (
    <Reveal
      delay={delay}
      className="group bg-white border border-silver rounded-3xl p-7 flex flex-col
        shadow-sm-blue cursor-default
        hover:-translate-y-1.5 hover:shadow-hover-blue hover:border-cobalt-light
        transition-all duration-[220ms]"
    >
      <div className="text-[10.5px] font-bold text-cobalt uppercase tracking-[0.09em] mb-3.5">
        {service.number} — {service.title}
      </div>
      <span className="text-[30px] mb-3.5 leading-none" aria-hidden="true">
        {service.emoji}
      </span>
      <h3 className="text-[17px] font-bold text-navy-900 leading-[1.28] mb-2.5">
        {service.headline}
      </h3>
      <p className="text-[13.5px] text-text-mid leading-[1.68] flex-1">{service.body}</p>
      <a
        href="/contact"
        className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-bold
          text-cobalt no-underline transition-all duration-150 group-hover:gap-3
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
      >
        Book a consultation
        <ArrowRight className="w-3 h-3" aria-hidden="true" />
      </a>
    </Reveal>
  )
}

export default function Services() {
  const delays = [1, 2, 3, 4] as const

  return (
    <section
      className="bg-white py-20 px-[6vw]"
      id="services"
      aria-labelledby="svc-heading"
    >
      <div className="max-w-content mx-auto">

        <Reveal>
          <SectionTag>Our services</SectionTag>
          <h2
            id="svc-heading"
            className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.15] mb-3"
          >
            Specialist diabetes care<br />
            <em className="italic text-cobalt">for every stage of your journey.</em>
          </h2>
          <p className="text-[15.5px] text-text-body leading-[1.75] max-w-[600px] mb-12">
            From first diagnosis through to long-term monitoring, our multidisciplinary team
            provides individualised, evidence-based support — reassessing your needs at every review.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} delay={delays[i % 4]} />
          ))}
        </div>

        {/* CTA strip */}
        <Reveal>
          <div
            className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[1.4fr_1fr] border border-silver shadow-md-blue"
          >
            <div className="bg-navy-900 p-10 flex flex-col justify-center">
              <p className="text-[11px] font-bold text-cobalt-pale uppercase tracking-[0.09em] mb-3">
                Personalised care
              </p>
              <h3 className="font-display font-normal text-white text-clamp-h3 leading-[1.25] mb-3">
                Not sure which service<br />you need?
              </h3>
              <p className="text-[14.5px] text-white/70 leading-[1.72] max-w-[420px]">
                Call us and we&apos;ll match you with the right specialist and service. Every patient
                gets a personalised assessment — we don&apos;t do one-size-fits-all.
              </p>
            </div>
            <div className="bg-cobalt p-10 flex flex-col justify-center gap-5">
              <div className="text-[11px] font-bold text-white/70 uppercase tracking-[0.09em]">
                Book your first consultation
              </div>
              <h4 className="text-[20px] font-bold text-white leading-[1.3]">
                Expert, evidence-based diabetes care — tailored to you.
              </h4>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 w-fit px-6 py-3.5
                  bg-navy-900 text-white text-[14.5px] font-bold rounded-[6px]
                  no-underline hover:bg-navy-800 transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cobalt"
              >
                <Phone className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                Call {SITE.phone}
              </a>
              <div className="text-[11.5px] text-white/60">
                No referral needed · {SITE.hours.weekdays} · {SITE.hours.saturday}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
