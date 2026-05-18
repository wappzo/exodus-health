import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import LogoMark from '@/components/ui/LogoMark'

export const metadata: Metadata = {
  title:  'Page Not Found',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ice flex flex-col items-center justify-center px-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-6">
        <LogoMark className="w-7 h-7 fill-cobalt-pale" />
      </div>
      <h1 className="font-display font-normal text-navy-900 text-[3rem] leading-none mb-3">404</h1>
      <p className="text-[18px] font-medium text-navy-900 mb-2">Page not found</p>
      <p className="text-[15px] text-text-body max-w-[380px] mb-8">
        We couldn't find the page you were looking for. It may have moved or no longer exists.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="/"
          className="px-6 py-3 bg-cobalt text-white text-[14px] font-bold rounded-[6px]
            no-underline hover:bg-cobalt-hover transition-colors duration-150"
        >
          Go back home
        </a>
        <a
          href={SITE.phoneHref}
          className="px-6 py-3 bg-mist border border-silver text-navy-900 text-[14px] font-bold
            rounded-[6px] no-underline hover:border-cobalt-light transition-colors duration-150"
        >
          Call {SITE.phone}
        </a>
      </div>
    </div>
  )
}
