import { Tooltip as HeroTooltip } from '@heroui/react'
import type { ReactNode } from 'react'

interface TooltipProps {
  content: ReactNode
  children: ReactNode
}

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <HeroTooltip delay={0} closeDelay={0} shouldSkipAnimation={true}>
      <HeroTooltip.Trigger>{children}</HeroTooltip.Trigger>
      <HeroTooltip.Content
        showArrow={true}
        className='border-border/80 bg-surface text-foreground rounded-lg border px-2.5 py-1 text-xs shadow-sm'
      >
        {content}
      </HeroTooltip.Content>
    </HeroTooltip>
  )
}
