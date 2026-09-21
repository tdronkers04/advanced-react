'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'

// Dynamically load ThemeToggle to avoid SSR hydration mismatches
const ThemeToggleDynamic = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
})

export default function NavBar() {
  return (
    <div className='absolute top-4 right-5'>
      <div className='flex items-center gap-3'>
        <Link href='/'>
          <HomeIcon className='size-4' />
        </Link>
        <ThemeToggleDynamic />
      </div>
    </div>
  )
}
