import React from 'react'

export default function Button({buttonText}) {
  return (
    <button className='flex justify-center items-center bg-white px-5 py-2 font-gilroy font-semibold text-sm'>
        <span>
            {buttonText}
        </span>
        <img className='ml-2' src='./images/home/arrow-down.svg' alt="arrow-down" />
    </button>
  )
}
