'use client'

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

const OPTIONS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
] as const

const ICONS = { light: SunIcon, dark: MoonIcon, system: ComputerDesktopIcon }

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

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
                ? 'text-foreground bg-black/10 dark:bg-white/15'
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
