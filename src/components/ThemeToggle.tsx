'use client'

import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'

function subscribe() {
  return () => {}
}

// Theme is only known once the client's stored preference has been read, so
// this reports `false` during SSR/hydration and `true` right after, without
// the cascading re-render that a useState+useEffect "mounted" flag causes.
function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}

const OPTIONS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
] as const

const ICONS = { light: SunIcon, dark: MoonIcon, system: ComputerDesktopIcon }

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) {
    return <div className='h-8 w-[132px] rounded-full border border-black/10 dark:border-white/10' />
  }

  return (
    <div
      role='radiogroup'
      aria-label='Color theme'
      className='inline-flex items-center gap-0.5 rounded-full border border-black/10 p-0.5 dark:border-white/10'
    >
      {OPTIONS.map(({ value, label }) => {
        const Icon = ICONS[value]
        const selected = theme === value
        return (
          <button
            key={value}
            type='button'
            role='radio'
            aria-checked={selected}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`flex size-7 items-center justify-center rounded-full transition-colors ${
              selected
                ? 'bg-black/10 text-foreground dark:bg-white/15'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            <Icon className='size-4' />
          </button>
        )
      })}
    </div>
  )
}
