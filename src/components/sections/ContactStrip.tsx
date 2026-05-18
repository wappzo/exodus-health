import { CONTACT_ITEMS } from '@/lib/data'
import type { ContactItem } from '@/types'

function ContactCell({ item }: { item: ContactItem }) {
  const inner = (
    <>
      <div
        className="w-10 h-10 rounded-[9px] flex items-center justify-center text-[17px] flex-shrink-0"
        style={{ background: 'rgba(30,111,217,.20)' }}
        aria-hidden="true"
      >
        {item.emoji}
      </div>
      <div>
        <div className="text-[10px] font-bold text-cobalt-sky uppercase tracking-[0.07em] mb-1">
          {item.label}
        </div>
        <div className="text-[14px] font-bold text-white leading-tight">{item.value}</div>
        <div className="text-[11px] text-cobalt-sky mt-0.5">{item.sub}</div>
      </div>
    </>
  )

  const base = 'flex items-center gap-3.5 px-6 py-5 border-r border-white/[0.07] last:border-r-0'

  if (item.href) {
    return (
      <a
        href={item.href}
        className={`${base} no-underline transition-colors duration-150 hover:bg-cobalt/[0.15]`}
        aria-label={`${item.label}: ${item.value}`}
      >
        {inner}
      </a>
    )
  }

  return <div className={base}>{inner}</div>
}

export default function ContactStrip() {
  return (
    <div
      id="contact"
      className="bg-navy-800 border-t-[3px] border-cobalt
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      role="region"
      aria-label="Contact information"
    >
      {CONTACT_ITEMS.map((item) => (
        <ContactCell key={item.label} item={item} />
      ))}
    </div>
  )
}
