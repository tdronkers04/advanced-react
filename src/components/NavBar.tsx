'use client'

import dynamic from 'next/dynamic'

// Dynamically load ThemeToggle to avoid SSR hydration mismatches
const ThemeToggleDynamic = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
})

export default function NavBar() {
  return (
    <div className='absolute top-4 right-5'>
      <ThemeToggleDynamic />
    </div>
  )
}
