import { cn } from '@/lib/utils'

interface SectionTagProps {
  children: React.ReactNode
  light?: boolean
  className?: string
}

export default function SectionTag({ children, light, className }: SectionTagProps) {
  return (
    <div className={cn('sec-tag', light && 'sec-tag--light', className)}>
      {children}
    </div>
  )
}
