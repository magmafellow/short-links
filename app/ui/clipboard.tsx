'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { MdContentCopy } from 'react-icons/md'

export default function Clipboard({ content }: { content: string }) {
  const [clicked, setClicked] = useState(false)

  const onClickHandler = () => {
    window.navigator.clipboard.writeText(content)
    setClicked(true)
    setTimeout(() => setClicked(false), 500)
  }

  return (
    <div onClick={onClickHandler}>
      <MdContentCopy
        className={clsx(
          'text-[64px] lg:text-[47px] cursor-pointer transition',
          {
            'text-standard': !clicked,
            'hover:text-bright': !clicked,
            'text-sky-300': clicked,
          }
        )}
      />
    </div>
  )
}
