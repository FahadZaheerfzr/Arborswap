import React from 'react'

export default function PriceFilter() {
    return (
        <div className='price-filters px-5 py-6'>
            <div className='flex'>
                <img src='/images/home/collections/cards/binance.svg' alt='binance' />
                <span className='font-gilroy font-semibold text-sm text-[#807373] dark:text-dark-gray ml-3'>
                    Binance Coin
                </span>
                <img src='/images/home/arrow-down.svg' alt='arrow-down' className='cursor-pointer' />
            </div>

            <div className='flex gap-3 mt-5'>
                <div className='w-1/2'>
                    <input className='bg-[#F5F1EB] dark:bg-black-shade4-background py-3 px-5 w-full font-gilroy text-dark-text dark:text-dark-white-color font-bold focus:outline-none' defaultValue={"438"} type={"text"} />
                </div>
                <div className='w-1/2'>
                    <input className='bg-[#F5F1EB] dark:bg-black-shade4-background py-3 w-full px-5 font-gilroy text-dark-text dark:text-dark-white-color font-bold focus:outline-none' defaultValue={"1000"} type={"text"} />
                </div>
            </div>

            <div className='flex mt-11'>
                <button className='w-full font-gilroy text-white dark:text-black-shade2-background font-bold bg-dark-text dark:bg-dark-white-color flex items-center justify-center rounded-md py-4'>
                    Apply
                </button>
            </div>
        </div>
    )
}
