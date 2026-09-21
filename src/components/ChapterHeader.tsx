import React from 'react'

interface Props {
  chapterNumber: number
  subHeader: string
}

export const ChapterHeader: React.FC<Props> = ({
  chapterNumber,
  subHeader,
}) => {
  return (
    <div>
      <h1 className='pb-1 text-xl'>Chapter {chapterNumber.toString()}</h1>
      <h2 className='pb-2 text-lg'>{subHeader}</h2>
    </div>
  )
}
