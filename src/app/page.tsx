import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-6'>
      <h1 className='pb-3 text-xl'>Advanced React Notes and Examples</h1>
      <ul className='flex flex-col gap-2 px-2'>
        <li>
          <Link href='/chapter/01'>Chapter 01: Intro to Re-Renders</Link>
        </li>
      </ul>
    </div>
  )
}
