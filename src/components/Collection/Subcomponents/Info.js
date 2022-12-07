import React from 'react'

export default function Info({text, val}) {
  return (
    <div className='bg-white dark:bg-black-shade2-background w-1/3 flex justify-between ml-2 rounded-[6px] px-5 py-3'>
        <span className='font-gilroy font-medium text-light-text dark:text-dark-text-color text-sm'>
            {text}
        </span>

        <span className='font-gilroy font-semibold text-dark-text dark:text-dark-white-color text-sm'>
            {val}
        </span>
    </div>
  )
}
