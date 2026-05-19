import { MapPin, Phone, Mail } from 'lucide-react'
import { SITE } from '@/lib/constants'

const REGULATORY_PILLS = ['CQC Regulated', 'GMC Registered Doctors', 'NICE NG28 & NG17'] as const

export default function AccessBar() {
  return (
    <div className="bg-navy-950" role="banner">
      <div className="max-w-content mx-auto px-[6vw] py-2.5 flex items-center justify-between flex-wrap gap-2">

        <div className="flex items-center gap-5 flex-wrap">
          <a
            href="/contact"
            className="flex items-center gap-1.5 text-[12.5px] font-medium text-cobalt-pale hover:text-white transition-colors duration-150 no-underline"
          >
            <MapPin className="w-3 h-3 fill-cobalt-sky text-cobalt-sky flex-shrink-0" aria-hidden="true" />
            {SITE.address.full}
          </a>

          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 text-[12.5px] font-medium text-cobalt-pale hover:text-white transition-colors duration-150 no-underline"
            aria-label={`Call landline: ${SITE.phone}`}
          >
            <Phone className="w-3 h-3 fill-cobalt-sky text-cobalt-sky flex-shrink-0" aria-hidden="true" />
            {SITE.phone}
          </a>

          {/* <a
            href={SITE.mobileHref}
            className="hidden sm:flex items-center gap-1.5 text-[12.5px] font-medium text-cobalt-pale hover:text-white transition-colors duration-150 no-underline"
            aria-label={`Call mobile: ${SITE.mobile}`}
          >
            <Phone className="w-3 h-3 fill-cobalt-sky text-cobalt-sky flex-shrink-0" aria-hidden="true" />
            {SITE.mobile}
          </a> */}

          <a
            href={SITE.emailHref}
            className="hidden md:flex items-center gap-1.5 text-[12.5px] font-medium text-cobalt-pale hover:text-white transition-colors duration-150 no-underline"
          >
            <Mail className="w-3 h-3 fill-cobalt-sky text-cobalt-sky flex-shrink-0" aria-hidden="true" />
            {SITE.email}
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          {REGULATORY_PILLS.map((pill) => (
            <span key={pill} className="flex items-center gap-1.5 text-[11px] font-semibold text-cobalt-sky tracking-[0.03em]">
              <span className="w-[5px] h-[5px] rounded-full bg-cobalt flex-shrink-0" aria-hidden="true" />
              {pill}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
