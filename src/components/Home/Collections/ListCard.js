import React from 'react'

export default function ListCard({ card_name, change, verified, card_icon, card_category_icon, floor_price, item_quantity, volume }) {
  return (
    <div className='flex w-full mt-3 justify-between bg-white rounded-[10px] px-10 py-5'>
      <div className='flex items-center w-1/4'>
        <img src={card_icon} alt={card_name} />
        <span className='ml-5 font-gilroy font-bold text-[#464754]'>
          {card_name}
        </span>
        {verified && <img src='./images/home/collections/cards/verified.svg' alt="verified-icon" className='ml-2' />}
      </div>

      <div className='flex items-center w-3/4 justify-around'>
        <div className='key-value'>
          <div className='key flex'>
            <span className='font-gilroy font-medium text-[#807373] text-xs'>
              Floor Price
            </span>
            <img src='./images/home/collections/question.svg' alt="info-icon" className='ml-2' />
          </div>
          <div className='value flex items-center mt-1'>
            <img src={card_category_icon} alt="category-icon" className='mr-2' />
            <span className='font-gilroy font-bold text-dark-text text-sm'>
              {floor_price}
            </span>
          </div>
        </div>


        <div className='key-value'>
          <div className='key flex'>
            <span className='font-gilroy font-medium text-[#807373] text-xs'>
              Volume
            </span>
            <img src='./images/home/collections/question.svg' alt="info-icon" className='ml-2' />
          </div>
          <div className='value flex items-center mt-1'>
            <img src={card_category_icon} alt="category-icon" className='mr-2' />
            <span className='font-gilroy font-bold text-dark-text text-sm'>
              {volume}
            </span>
          </div>
        </div>

        <div className='key-value'>
          <div className='key flex'>
            <span className='font-gilroy font-medium text-[#807373] text-xs'>
              Changes 24h
            </span>
            <img src='./images/home/collections/question.svg' alt="info-icon" className='ml-2' />
          </div>
          <div className='value flex items-center mt-1'>
            <img src="./images/home/collections/polygon.svg" alt="change-icon" className='mr-2' />
            <span className='font-gilroy font-bold text-dark-text text-sm'>
              {change}
            </span>
          </div>
        </div>

        <div className='key-value'>
          <div className='key flex'>
            <span className='font-gilroy font-medium text-[#807373] text-xs'>
              Items
            </span>
            <img src='./images/home/collections/question.svg' alt="info-icon" className='ml-2' />
          </div>
          <div className='value flex items-center mt-1'>
            <span className='font-gilroy font-bold text-dark-text text-sm'>
              {item_quantity}
            </span>
          </div>
        </div>

        <div className='view-item flex items-center'>
          <span className='font-gilroy font-medium text-primary-green text-sm'>
          View
          </span>

          <img src='./images/Sidebar/arrow-left.svg' alt="arrow-icon" className='ml-2 rotate-180' />
        </div>
      </div>
    </div>
  )
}
