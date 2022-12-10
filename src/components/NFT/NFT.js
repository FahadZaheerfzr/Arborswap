import React from 'react'
import NftActivity from './NftActivity'
import ListedPrice from './SubComponents/ListedPrice'
import OwnerInfo from './SubComponents/OwnerInfo'

export default function NFT({ nft }) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 justify-center px-4 md:px-[10%] mt-12 mb-10">
      <div className="nft-image w-full md:w-1/2 ">
        <div className="w-full flex justify-end">
          <img src="/images/nft/resize.svg" alt="resize" className="absolute z-10 mt-7 mr-7" />
          <img className="w-full" src={nft.image} alt="nft" />
        </div>

        <div className="hidden md:block tabs">
          <NftActivity nft={nft} />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex justify-between">
          <div className="font-gilroy text-2xl font-bold text-dark-text dark:text-dark-white-color">{nft.name}</div>

          <div className="flex items-center">
            <div className="flex items-center bg-white dark:bg-black-shade2-background mr-2 rounded-md h-8 px-3">
              <img src="/images/nft/heart.svg" alt="heart" />
              <span className="font-gilroy text-sm font-semibold text-[#807373] dark:text-dark-gray ml-2">
                {nft.likes}
              </span>
            </div>
            <div className="w-8 h-8 bg-white dark:bg-black-shade2-background rounded-md flex items-center justify-center">
              <div className="dot w-1 h-1 mr-1 bg-dark-text dark:bg-dark-white-color rounded-full" />
              <div className="dot w-1 h-1 mr-1 bg-dark-text dark:bg-dark-white-color rounded-full" />
              <div className="dot w-1 h-1 bg-dark-text dark:bg-dark-white-color rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img src="/images/home/collections/cards/verified.svg" alt="heart" />
          <span className="font-gilroy ml-2 text-[#807373] dark:text-dark-gray font-semibold">Frontier NFTs</span>
        </div>

        <div className="border-b border-t border-dashed flex py-5 justify-between border-[#767779] border-opacity-30 mt-7">
          <OwnerInfo box_for={'Creator'} name={nft.creator} image={nft.creator_image} />
          <OwnerInfo box_for={'Current Owner'} name={nft.owner} image={nft.owner_image} />
        </div>

        <div className={`border-b mb-7 border-dashed flex flex-col py-5 border-[#767779] border-opacity-30`}>
          <span className="text-xl font-gilroy font-bold text-dark-text dark:text-dark-white-color">Description</span>

          <span className="font-gilroy text-light-text dark:text-dark-text-color font-medium mt-5">
            {nft.description}
          </span>
        </div>

        <div className="">
          <ListedPrice
            image={nft.category_icon}
            listed_price={nft.listed_price}
            second_price={nft.second_price}
            highest_bid={nft.highest_bid}
          />
        </div>
      </div>
      <div className="md:hidden tabs">
        <NftActivity nft={nft} />
      </div>
    </div>
  )
}
