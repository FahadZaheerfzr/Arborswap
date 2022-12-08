import React from 'react'
import BidSVG from '../../../svgs/bid'
import Styles from '../NFT.module.css'

export default function ListedPrice({ image, listed_price, second_price, highest_bid }) {
    return (
        <div className='bg-white dark:bg-black-shade2-background rounded-[20px] w-full px-9 py-9'>
            <div className='flex justify-between'>
                <span className='font-gilroy font-medium text-sm text-[#807373] dark:text-dark-gray'>
                    Listed Price
                </span>

                <div className={`flex items-center px-2 py-1 ${Styles.cardBox}`}>
                    <img src="/images/nft/note.svg" alt="note" className='mr-2' />
                    <span className='font-gilroy font-medium text-xs text-[#807373] dark:text-dark-gray'>
                        1 of 300
                    </span>
                </div>
            </div>


            <div className='flex items-center mt-5'>
                <div className='h-full mr-2'>
                    <img src={image} alt="category" className='mr-2 object-cover w-full' />
                </div>
                <span className='font-gilroy font-bold text-2xl text-dark-text dark:text-dark-white-color'>
                    {listed_price}
                    <span className='font-medium text-sm text-[#807373] dark:text-dark-gray'>
                        &nbsp;(${second_price})
                    </span>
                </span>
            </div>

            <div className='flex items-center mt-7'>
                <BidSVG className='mr-2 fill-dark-text dark:fill-dark-white-color' />
                <span className='font-gilroy font-medium text-sm text-[#807373] dark:text-dark-text-color'>
                    Highest Bid
                </span>

                <span className='font-gilroy font-semibold text-sm text-[#807373] dark:text-dark-gray ml-2'>
                    {highest_bid} BNB
                </span>
            </div>
            <div className='flex w-full mt-10'>
                <button className='bg-primary-green py-4 w-full rounded-md font-gilroy font-bold text-[#F5F6F7] flex items-center justify-center'>
                    <img src='/images/home/nfts/wallet-money.svg' alt="wallet" />
                    <span className='ml-2'>
                        Buy Now
                    </span>
                </button>
            </div>
            <div className='flex w-full mt-10'>
                <button className='bg-light-text bg-opacity-30 py-4 w-full rounded-md font-gilroy font-bold  flex items-center justify-center'>
                        <BidSVG className='mr-2 fill-dark-text dark:fill-dark-white-color' />                    <span className='ml-2 text-dark-text dark:text-dark-white-color'>
                        Place a Bid
                    </span>
                </button>
            </div>


        </div>
    )
}
