import React from 'react'

export default function PreviewHeader({ heading }) {
  return (
    <div className="flex justify-around items-center mt-10">
      <div className="border border-dashed border-light-text dark:border-dark-text-color border-opacity-30 w-full" />
      <div className="w-full flex justify-center items-center">
        <span className="font-gilroy text-sm font-medium text-light-text dark:text-dark-text-color">{heading}</span>
      </div>

      <div className="border border-dashed border-light-text dark:border-dark-text-color border-opacity-30 w-full" />
    </div>
  )
}
