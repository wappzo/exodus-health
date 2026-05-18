import { TESTIMONIALS } from '@/lib/data'
import SectionTag from '@/components/ui/SectionTag'
import Reveal from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const DELAYS = [1, 2, 3] as const

export default function Testimonials() {
  return (
    <section
      className="bg-white py-20 px-[6vw]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-content mx-auto">

        <Reveal>
          <SectionTag>Patient stories</SectionTag>
          <h2
            id="testimonials-heading"
            className="font-display font-normal text-navy-900 text-clamp-h2 leading-[1.15] mb-12"
          >
            Trusted by patients across{' '}
            <em className="italic text-cobalt">the UK.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((tc, i) => (
            <Reveal
              key={tc.id}
              delay={DELAYS[i]}
              className={cn(
                'rounded-3xl p-7 border flex flex-col shadow-sm-blue',
                'hover:-translate-y-1 hover:shadow-hover-blue transition-all duration-[220ms]',
                tc.featured ? 'bg-navy-900 border-navy-900' : 'bg-mist border-silver',
              )}
            >
              {/* Stars */}
              <div className="text-gold text-[14px] tracking-[2px] mb-3" aria-label={`${tc.stars} out of 5 stars`}>
                {'★'.repeat(tc.stars)}
              </div>

              {/* Tag */}
              <div
                className={cn(
                  'inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-[6px]',
                  'text-[11px] font-bold mb-3.5',
                  tc.featured
                    ? 'text-cobalt-pale'
                    : 'text-navy-700 bg-cobalt-wash border border-cobalt-tint',
                )}
                style={tc.featured
                  ? { background: 'rgba(30,111,217,.20)', border: '1px solid rgba(30,111,217,.25)' }
                  : {}
                }
              >
                {tc.tag}
              </div>

              {/* Quote */}
              <blockquote
                className={cn(
                  'text-[14.5px] italic leading-[1.68] flex-1 mb-[18px]',
                  tc.featured ? 'text-white' : 'text-text-navy',
                )}
              >
                {tc.quote}
              </blockquote>

              {/* Attribution */}
              <footer
                className={cn(
                  'flex items-center gap-2.5 pt-4 border-t',
                  tc.featured ? 'border-white/10' : 'border-silver',
                )}
              >
                <div
                  className={cn(
                    'w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0 border',
                    tc.featured ? 'border-white/14' : 'bg-cobalt-wash border-silver',
                  )}
                  style={tc.featured ? { background: 'rgba(255,255,255,.10)' } : {}}
                  aria-hidden="true"
                >
                  {tc.emoji}
                </div>
                <div>
                  <cite className={cn(
                    'not-italic text-[13px] font-bold block',
                    tc.featured ? 'text-white' : 'text-navy-900',
                  )}>
                    {tc.name}
                  </cite>
                  <div className={cn('text-[11.5px]', tc.featured ? 'text-cobalt-sky' : 'text-text-soft')}>
                    {tc.role}
                  </div>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
