import React from 'react'
import Styles from './Card.module.css'
export default function Card({ card_name, card_image, verified, card_icon, card_category_icon, floor_price, item_quantity }) {
    return (
        <div className={`${Styles.card}`}>
            <div className='card-image w-full'>
                <img className='w-full' src={card_image} alt={card_name} />
            </div>

            <div className='card-info px-5 py-5'>
                <div className='flex justify-between items-center'>
                    <div className='card-name flex items-center'>
                        <span className='font-gilroy font-bold text-[#464754] text-xl'>
                            {card_name}
                        </span>
                        {verified &&
                            <img className='ml-2' src='./images/collections/cards/verified.svg' alt="verified" />
                        }
                    </div>

                    <div className='floor-info font-gilroy font-medium text-sm'>
                        Floor Price
                    </div>
                </div>

                <div className='flex justify-between mt-2'>
                    <div className='card-items flex items-center'>
                        <img src={card_icon} alt={card_name} />
                        <span className='font-gilroy font-medium text-[#807373] text-sm'>
                            {item_quantity} Items
                        </span>
                    </div>

                    <div className='floor-price flex items-center'>
                        <img src={card_category_icon} alt={card_name} />
                        <span className='ml-2 font-gilroy font-bold text-[#464754]'>
                            {floor_price}
                        </span>
                    </div>

                </div>

            </div>



        </div>
    )
}
