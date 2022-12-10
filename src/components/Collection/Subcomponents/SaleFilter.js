import React from 'react'

export default function SaleFilter({ filter_name }) {
  return (
    <div className="bg-light-gray-shade dark:bg-black-shade3-background ease-in-out duration-200 py-5 px-5 flex justify-between">
      <span className="font-gilroy font-bold text-sm text-dark-text dark:text-dark-white-color">{filter_name}</span>

      <input type="checkbox" className="accent-dark-text h-5 w-5 " />
    </div>
  )
}
