import React from 'react'
import Styles from '../Collections/Card.module.css'

export default function CardMobile({ card_name, card_image, verified, card_category_icon, listed_price, owner }) {
  return (
    <div className={`${Styles.card} flex w-full`}>
      <div className="w-1/2">
        <img className="rounded-2xl" src={card_image} alt={card_name} />
      </div>

      <div className="w-1/2 flex flex-col py-4 px-4">
        <div className="name">
          <span className="font-gilroy font-semibold text-sm">{card_name}</span>
        </div>

        <div className="flex mt-1">
          {verified && <img src="/images/home/collections/cards/verified.svg" alt="verified" />}
          <span className="ml-1 font-gilroy text-light-text text-xs font-semibold">{owner}</span>
        </div>

        <div className="price mt-3">
          <span className="font-medium font-gilroy text-xs text-light-text">Listed Price</span>
        </div>

        <div className="flex mt-1">
          <img src={card_category_icon} alt={card_name} />
          <span className="ml-2 font-gilroy font-bold text-sm text-dark-text">{listed_price}</span>
        </div>

        <div className="flex mt-5">
          <button className="bg-primary-green rounded-md px-2 py-2 font-gilroy font-bold text-sm text-[#F5F6F7] flex items-center justify-center">
            <img src="/images/home/nfts/wallet-money.svg" alt="wallet" />
            <span className="ml-2">Buy Now</span>
          </button>

          <div className="w-9 h-9 ml-3 flex justify-center items-center rounded-md bg-[#FAF8F5]">
            <div className="w-1 h-1 rounded-full bg-[#807373]" />
            <div className="w-1 h-1 rounded-full bg-[#807373]" />
            <div className="w-1 h-1 rounded-full bg-[#807373]" />
          </div>
        </div>
      </div>
    </div>
  )
}
