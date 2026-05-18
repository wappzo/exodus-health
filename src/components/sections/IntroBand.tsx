import { STATS } from '@/lib/data'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'

export default function IntroBand() {
  return (
    <div className="bg-cobalt-wash border-b border-silver">
      <div className="max-w-content mx-auto px-[6vw] py-14">
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <SectionTag>Why we started Exodus Health</SectionTag>
            <h2 className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.22] mb-3.5">
              Moving beyond fragmented, impersonal diabetes care.
            </h2>
            <p className="text-[15px] text-text-body leading-[1.75] mb-4">
              We saw that the traditional reactive approach to diabetes left many behind — especially
              newly diagnosed patients. We didn&apos;t create this clinic just to manage a &lsquo;lifestyle
              disease&rsquo;; we aim to go further.
            </p>
            <p className="text-[15px] text-text-body leading-[1.75]">
              With rapid diagnostics and a multidisciplinary team, we provide evidence-based,
              personalised support to help patients reclaim their health and their future.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white rounded-[14px] border border-silver px-5 py-5
                  text-center shadow-sm-blue"
              >
                <div className="font-display font-normal text-navy-900 text-[30px] leading-none mb-1.5">
                  {value}
                </div>
                <div className="text-[12px] font-semibold text-text-soft">{label}</div>
              </div>
            ))}
          </div>

        </Reveal>
      </div>
    </div>
  )
}
