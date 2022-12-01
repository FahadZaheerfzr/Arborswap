import React from 'react'

export default function InfoMobile({ text, val }) {
    return (
        <div className='w-1/2 flex flex-col items-center justify-center bg-white rounded-md py-3'>
            <div className="key">
                <span className='font-gilroy font-medium text-light-text text-sm'>
                    {text}
                </span>
            </div>

            <div className="value mt-[6px]">
                <span className='font-gilroy font-semibold text-dark-text text-sm'>
                    {val}
                </span>
            </div>
        </div>
    )
}
