import { DOCTORS } from '@/lib/data'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'

const DELAYS = [1, 2, 3, 4] as const

export default function Doctors() {
  return (
    <section
      className="bg-mist border-t border-silver py-20 px-[6vw]"
      id="doctors"
      aria-labelledby="doctors-heading"
    >
      <div className="max-w-content mx-auto">

        <Reveal>
          <SectionTag>Our clinical team</SectionTag>
          <h2
            id="doctors-heading"
            className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.15] mb-3"
          >
            GMC-registered diabetes specialists{' '}
            <em className="italic text-cobalt">you can trust.</em>
          </h2>
          <p className="text-[15.5px] text-text-body leading-[1.75] max-w-[600px] mb-12">
            Every doctor holds current GMC registration with a licence to practise. All are
            NHS-trained with specialist experience in diabetes and endocrinology.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {DOCTORS.map((doc, i) => (
            <Reveal
              key={doc.id}
              delay={DELAYS[i]}
              className="group bg-white rounded-3xl overflow-hidden border border-silver
                shadow-sm-blue
                hover:-translate-y-1 hover:shadow-hover-blue hover:border-cobalt-light
                transition-all duration-[220ms]"
            >
              {/* Top — light cobalt wash */}
              <div className="bg-cobalt-wash px-[18px] pt-6 pb-5 text-center border-b border-silver">
                <div
                  className="w-[70px] h-[70px] rounded-full bg-white border-[3px] border-cobalt-pale
                    mx-auto mb-3 flex items-center justify-center text-4xl"
                  aria-hidden="true"
                >
                  {doc.emoji}
                </div>
                <div className="text-[14px] font-bold text-navy-900 mb-0.5">{doc.name}</div>
                <div className="text-[11px] font-semibold text-cobalt mb-2">{doc.role}</div>
                <div
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                    bg-white border border-silver text-[10px] font-bold text-navy-900"
                >
                  ✓ GMC Verified
                </div>
              </div>

              {/* Body */}
              <div className="px-[18px] py-[14px]">
                <p className="text-[11.5px] text-text-soft leading-[1.6] mb-2.5">
                  {doc.qualifications}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-[4px] bg-cobalt-wash border border-cobalt-tint
                        text-[10px] font-bold text-navy-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
