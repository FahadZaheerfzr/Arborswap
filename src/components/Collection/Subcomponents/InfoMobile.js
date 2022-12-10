import React from 'react'

export default function InfoMobile({ text, val }) {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center bg-white dark:bg-black-shade2-background rounded-md py-3">
      <div className="key">
        <span className="font-gilroy font-medium text-light-text dark:text-dark-text-color text-sm">{text}</span>
      </div>

      <div className="value mt-[6px]">
        <span className="font-gilroy font-semibold text-dark-text dark:text-dark-white-color text-sm">{val}</span>
      </div>
    </div>
  )
}
