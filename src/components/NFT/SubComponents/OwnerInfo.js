import React from 'react'

export default function OwnerInfo({ box_for, image, name }) {
    return (
        <div className='flex items-center'>
            <div className="">
                <img src={image} alt={name} />
            </div>

            <div className='ml-3'>
                <span className='font-gilroy font-medium text-sm text-[#807373] dark:text-dark-gray'>
                    {box_for}
                </span>

                <div className='flex items-center'>
                    <span className='font-gilroy font-semibold text-dark-text dark:text-dark-white-color'>
                        {name}
                    </span>
                    <img src="/images/home/collections/cards/verified.svg" alt="verified" className='ml-2' />
                </div>
            </div>
        </div>
    )
}
