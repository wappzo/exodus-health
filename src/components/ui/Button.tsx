import { cn } from '@/lib/utils'

type Variant = 'cobalt' | 'navy' | 'ghost' | 'outline'
type Size    = 'sm' | 'md' | 'lg'

const VARIANTS: Record<Variant, string> = {
  cobalt:  'bg-cobalt text-white hover:bg-cobalt-hover active:scale-[.98] focus-visible:ring-cobalt',
  navy:    'bg-navy-900 text-white hover:bg-navy-800 active:scale-[.98] focus-visible:ring-navy-700',
  ghost:   'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/60',
  outline: 'bg-mist text-navy-900 border border-silver hover:border-cobalt-light hover:bg-cobalt-wash focus-visible:ring-cobalt',
}

const SIZES: Record<Size, string> = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-[15px] px-7 py-[13px] gap-2',
}

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
  icon?: React.ReactNode
}

export default function Button({
  variant = 'cobalt',
  size    = 'md',
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center font-bold rounded-[6px] no-underline',
        'transition-all duration-150 cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0" aria-hidden="true">{icon}</span>}
      {children}
    </a>
  )
}
