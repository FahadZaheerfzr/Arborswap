import React from 'react'

export default function Details({ detail, value, img }) {
  return (
    <div className="flex justify-between border-b border-dashed border-[#A69F9F] border-opacity-30 py-5">
      <span className="font-medium font-gilroy text-sm text-[#807373] dark:text-dark-gray">{detail}</span>

      <div className="flex items-center">
        {img && <img src={img} alt={value} className="mr-2" />}
        <span className="font-bold font-gilroy text-sm text-dark-text dark:text-dark-white-color">{value}</span>
      </div>
    </div>
  )
}
