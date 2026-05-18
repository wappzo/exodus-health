'use client'

import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

type Delay = 1 | 2 | 3 | 4 | 5

const DELAY_CLASSES: Record<Delay, string> = {
  1: 'delay-d1',
  2: 'delay-d2',
  3: 'delay-d3',
  4: 'delay-d4',
  5: 'delay-d5',
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: Delay
}

export default function Reveal({ children, className, delay }: RevealProps) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className={cn('reveal', delay && DELAY_CLASSES[delay], className)}
    >
      {children}
    </div>
  )
}
