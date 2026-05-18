import { cn } from '@/lib/utils'

interface LogoMarkProps {
  className?: string
}

export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('fill-current', className)}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.1 0 2 .4 2.71 1.05L6.05 14.71C5.4 14 5 13.1 5 12c0-3.86 3.14-7 7-7zm0 14c-1.1 0-2-.4-2.71-1.05l8.66-8.66C18.6 10 19 10.9 19 12c0 3.86-3.14 7-7 7z" />
    </svg>
  )
}
