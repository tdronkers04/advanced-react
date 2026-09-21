import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col p-6'>
      <div className='pb-3'>
        <h1 className='text-xl'>Advanced React by Nadia Makarevich</h1>
        <h2 className='text-lg'>Notes and Examples</h2>
      </div>
      <ul className='flex flex-col gap-2 overflow-auto px-2'>
        <li>
          <Link href='/chapter/01'>Chapter 01: Intro to Re-Renders</Link>
        </li>
      </ul>
      <div className='mt-auto italic underline'>
        <Link href='https://www.advanced-react.com/' target='_blank'>
          Buy Advanced React by Nadia Makarevich
        </Link>
      </div>
    </div>
  )
}
