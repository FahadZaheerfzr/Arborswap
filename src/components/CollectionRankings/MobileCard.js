import React from 'react'

export default function MobileCard({ rank, card_name, card_icon, item_quantity, floor_price, card_category_icon, volume }) {
    return (
        <div className='bg-white w-full rounded-2xl pb-5 mb-3'>
            <div className='flex items-start justify-between mx-5 py-5 border-b border-light-text border-opacity-30 border-dashed'>
                <div className='flex items-center'>
                    {
                        rank === 1 ?
                            <img src='/images/collection_ranking/first.svg' alt="first-icon" className='mr-2 w-10 h-10' />
                            : rank === 2 ?
                                <img src='/images/collection_ranking/second.svg' alt="second-icon" className='mr-2 w-10 h-10' />
                                : rank === 3 ?
                                    <img src='/images/collection_ranking/third.svg' alt="third-icon" className='mr-2 w-10 h-10' />
                                    :
                                    <div className='w-10 h-10 flex text-center justify-center items-center mr-2'>
                                        <span className='font-gilroy font-bold text-[#464754] '>{rank}</span>
                                    </div>
                    }
                    <div className='flex items-center'>
                        <img className='w-12 h-12' src={card_icon} alt="collection" />
                        <div className='flex flex-col ml-4'>
                            <div className='flex items-center gap-1'>
                                <span className='font-gilroy font-bold text-dark-text'>
                                    {card_name}
                                </span>
                                <img src="/images/home/collections/cards/verified.svg" alt="verified" />
                            </div>
                            <span className='font-gilroy font-medium text-sm text-light-text'>
                                {item_quantity.toLocaleString()}
                            </span>


                        </div>
                    </div>

                    <div className='view-item flex items-center ml-2'>
                        <span className='font-gilroy font-medium text-primary-green text-sm'>
                            View
                        </span>

                        <img src='/images/Sidebar/arrow-left.svg' alt="arrow-icon" className=' rotate-180' />
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between mx-5 mt-5'>
                <span className='font-gilroy font-medium text-[#807373] text-sm'>
                    Floor Price
                </span>

                <div className='value flex items-center'>
                    <img src={card_category_icon} alt="category-icon" className='mr-2' />
                    <span className='font-gilroy font-bold text-dark-text text-sm'>
                        {floor_price}
                    </span>
                </div>
            </div>
            <div className='flex items-center justify-between mx-5 mt-5'>
                <span className='font-gilroy font-medium text-[#807373] text-sm'>
                    Volume
                </span>

                <div className='value flex items-center'>
                    <img src={card_category_icon} alt="category-icon" className='mr-2' />
                    <span className='font-gilroy font-bold text-dark-text text-sm'>
                        {volume}
                    </span>
                </div>
            </div>
        </div>
    )
}
