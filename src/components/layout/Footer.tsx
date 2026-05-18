import { FOOTER_COLUMNS } from '@/lib/data'
import { SITE } from '@/lib/constants'
import LogoMark from '@/components/ui/LogoMark'

const LEGAL_LINKS = ['Privacy', 'Terms', 'Cookies', 'GDPR', 'Complaints', 'Accessibility'] as const
const REG_CHIPS   = ['CQC Regulated', 'GMC Doctors', 'ICO Registered', 'NICE Guidelines'] as const

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t-[3px] border-navy-800" role="contentinfo">
      <div className="max-w-content mx-auto px-[6vw] pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand column */}
          <div>
            <a href="/" className="inline-flex items-center gap-2.5 no-underline mb-4" aria-label={`${SITE.name} — Home`}>
              <div className="w-[30px] h-[30px] rounded-[8px] bg-cobalt flex items-center justify-center flex-shrink-0">
                <LogoMark className="w-[15px] h-[15px] fill-white" />
              </div>
              <span className="text-[18px] font-bold text-[#E8F1FD]">{SITE.name}</span>
            </a>
            <p className="text-[13px] text-text-soft leading-[1.72] max-w-[220px] mb-4">
              Affordable private diabetes consultations by GMC-registered specialists. CQC regulated.
              Serving patients across the United Kingdom.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {REG_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 rounded-[5px] text-[10px] font-semibold text-text-soft"
                  style={{ background: 'rgba(194,217,249,.08)', border: '1px solid rgba(194,217,249,.12)' }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-[11px] font-bold text-cobalt-sky uppercase tracking-[0.07em] mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5 list-none">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-text-soft no-underline hover:text-cobalt-pale transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Registrations row */}
        <div
          className="pt-6 pb-5 flex flex-wrap gap-x-6 gap-y-2"
          style={{ borderTop: '1px solid rgba(194,217,249,.08)' }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: 'rgba(106,136,171,.5)' }}>
            Registered with:
          </span>
          {SITE.registrations.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] no-underline hover:text-cobalt-pale transition-colors duration-150"
              style={{ color: 'rgba(106,136,171,.7)' }}
            >
              {r.label}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-5 flex flex-col sm:flex-row items-start justify-between gap-4"
          style={{ borderTop: '1px solid rgba(194,217,249,.06)' }}
        >
          <p className="text-[11px] leading-[1.75] max-w-[620px]" style={{ color: 'rgba(106,136,171,.6)' }}>
            © 2026 {SITE.name} Ltd. Registered in England &amp; Wales No.{' '}
            {SITE.regulatory.companiesHouseNo}. CQC Registration No.{' '}
            {SITE.regulatory.cqcNumber}. All doctors hold current GMC registration.
            This service does not replace emergency care — call <strong>999</strong> in an emergency.
            For urgent non-emergency advice call <strong>NHS 111</strong>.
            Clinical practice follows NICE guidelines {SITE.regulatory.niceGuidelines}.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-4 flex-shrink-0">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] no-underline hover:text-cobalt-pale transition-colors duration-150"
                style={{ color: 'rgba(106,136,171,.6)' }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
}
