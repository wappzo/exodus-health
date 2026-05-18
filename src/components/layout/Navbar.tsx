'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import LogoMark from '@/components/ui/LogoMark'

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close drawer on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 bg-ice border-b transition-all duration-200',
        scrolled
          ? 'border-silver shadow-[0_2px_16px_rgba(10,22,40,.10)]'
          : 'border-silver/60',
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-content mx-auto px-[6vw] h-[72px] flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0" aria-label={`${SITE.name} — Home`}>
          <div className="w-10 h-10 rounded-[10px] bg-navy-900 flex items-center justify-center flex-shrink-0">
            <LogoMark className="w-[22px] h-[22px] fill-cobalt-pale" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[18px] font-bold text-navy-900 tracking-[-0.2px]">{SITE.name}</span>
            <span className="text-[10px] font-semibold text-cobalt uppercase tracking-[0.08em] mt-0.5">{SITE.tagline}</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-0.5" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block px-4 py-2 text-[14px] font-medium text-text-body rounded-[6px]
                  hover:bg-cobalt-wash hover:text-navy-900 transition-colors duration-150 no-underline
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right CTAs */}
        <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 px-4 py-2.5 text-[13.5px] font-bold text-navy-900
              bg-mist border border-silver rounded-[6px] no-underline
              hover:border-cobalt-light hover:bg-cobalt-wash transition-colors duration-150"
            aria-label={`Call us: ${SITE.phone}`}
          >
            <Phone className="w-3.5 h-3.5 fill-cobalt text-cobalt flex-shrink-0" aria-hidden="true" />
            {SITE.phone}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2.5 text-[14px] font-bold text-white
              bg-cobalt rounded-[6px] no-underline
              hover:bg-cobalt-hover transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2"
          >
            Book a consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-[6px] text-navy-900 hover:bg-cobalt-wash transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-silver bg-ice px-[6vw] py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[15px] font-medium text-text-body rounded-[6px]
                hover:bg-cobalt-wash hover:text-navy-900 transition-colors no-underline"
            >
              {label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-silver flex flex-col gap-2">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 py-3 text-[15px] font-bold
                text-navy-900 bg-mist border border-silver rounded-[6px] no-underline"
            >
              <Phone className="w-4 h-4 fill-cobalt text-cobalt" aria-hidden="true" />
              {SITE.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center py-3 text-[15px] font-bold
                text-white bg-cobalt rounded-[6px] no-underline"
            >
              Book a consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
