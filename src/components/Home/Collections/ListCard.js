import React from 'react'
import { Link } from 'react-router-dom'

export default function ListCard({
  rank,
  card_name,
  card_id,
  change,
  verified,
  card_icon,
  card_category_icon,
  floor_price,
  item_quantity,
  volume,
}) {
  return (
    <div className="flex w-full mt-3 justify-between bg-white dark:bg-black-shade2-background rounded-[10px] px-10 py-5">
      <div className="flex items-center w-1/4">
        {rank === 1 ? (
          <img src="/images/collection_ranking/first.svg" alt="first-icon" className="mr-2 w-10 h-10" />
        ) : rank === 2 ? (
          <img src="/images/collection_ranking/second.svg" alt="second-icon" className="mr-2 w-10 h-10" />
        ) : rank === 3 ? (
          <img src="/images/collection_ranking/third.svg" alt="third-icon" className="mr-2 w-10 h-10" />
        ) : (
          rank && (
            <div className="w-10 h-10 flex text-center justify-center items-center mr-2">
              <span className="font-gilroy font-bold text-[#464754] dark:text-dark-white-color ">{rank}</span>
            </div>
          )
        )}
        <img className="max-h-10 max-w-10" src={card_icon} alt={card_name} />
        <span className="ml-5 font-gilroy font-bold text-dark-text dark:text-dark-white-color ">{card_name}</span>
        {verified && <img src="/images/home/collections/cards/verified.svg" alt="verified-icon" className="ml-2" />}
      </div>

      <div className="flex items-center w-3/4 justify-around">
        <div className="key-value">
          <div className="key flex">
            <span className="font-gilroy font-medium text-[#807373] dark:text-dark-gray text-xs">Floor Price</span>
            <img src="/images/home/collections/question.svg" alt="info-icon" className="ml-2" />
          </div>
          <div className="value flex items-center mt-1">
            <img src={card_category_icon} alt="category-icon" className="mr-2" />
            <span className="font-gilroy font-bold text-dark-text dark:text-dark-white-color text-sm">
              {floor_price}
            </span>
          </div>
        </div>

        <div className="key-value">
          <div className="key flex">
            <span className="font-gilroy font-medium text-[#807373] dark:text-dark-gray text-xs">Volume</span>
            <img src="/images/home/collections/question.svg" alt="info-icon" className="ml-2" />
          </div>
          <div className="value flex items-center mt-1">
            <img src={card_category_icon} alt="category-icon" className="mr-2" />
            <span className="font-gilroy font-bold text-dark-text dark:text-dark-white-color text-sm">{volume}</span>
          </div>
        </div>

        <div className="key-value">
          <div className="key flex">
            <span className="font-gilroy font-medium text-[#807373] dark:text-dark-gray text-xs">Changes 24h</span>
            <img src="/images/home/collections/question.svg" alt="info-icon" className="ml-2" />
          </div>
          <div className="value flex items-center mt-1">
            <img src="/images/home/collections/polygon.svg" alt="change-icon" className="mr-2" />
            <span className="font-gilroy font-bold text-dark-text dark:text-[#1B8552] text-sm">{change}</span>
          </div>
        </div>

        <div className="key-value">
          <div className="key flex">
            <span className="font-gilroy font-medium text-[#807373] dark:text-dark-gray text-xs">Items</span>
            <img src="/images/home/collections/question.svg" alt="info-icon" className="ml-2" />
          </div>
          <div className="value flex items-center mt-1">
            <span className="font-gilroy font-bold text-dark-text dark:text-dark-white-color text-sm">
              {item_quantity}
            </span>
          </div>
        </div>

        <Link to={`/collections/${card_id}`}>
          <div className="view-item flex items-center">
            <span className="font-gilroy font-medium text-primary-green text-sm">View</span>

            <img src="/images/Sidebar/arrow-left.svg" alt="arrow-icon" className="ml-2 rotate-180" />
          </div>
        </Link>
      </div>
    </div>
  )
}
