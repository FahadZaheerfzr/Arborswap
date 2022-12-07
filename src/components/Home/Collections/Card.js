import React from 'react'
import Styles from './Card.module.css'
export default function Card({ card_name, card_image, verified, card_icon, card_category_icon, floor_price, item_quantity, nft, small }) {
    return (
        <div className={`${Styles.card} bg-white dark:bg-black-shade2-background`}>
            <div className='card-image w-full'>
                <img className='w-full' src={card_image} alt={card_name} />
            </div>

            <div className='card-info px-5 py-5'>
                <div className='flex justify-between items-center'>
                    <div className='card-name flex items-center'>
                        <span className='font-gilroy font-bold text-dark-text dark:text-dark-white-color md:text-sm lg:text-xl'>
                            {card_name}
                        </span>
                        {verified &&
                            <img className='ml-2' src='/images/home/collections/cards/verified.svg' alt="verified" />
                        }
                    </div>
                    {!small &&
                    <div className={`floor-info font-gilroy font-medium ${nft? "text-xs text-light-text dark:text-[#6C717A]" :"text-sm text-[#807373] dark:text-dark-gray"} `}>
                        {nft?"Listed Price": "Floor Price"}
                    </div>
                    }
                </div>

                <div className='lg:flex justify-between mt-2'>
                    <div className='card-items flex items-center'>
                        <img className='w-7 h-7 mr-3' src={card_icon} alt={card_name} />
                        <span className={`floor-info font-gilroy  ${nft?  "text-xs text-light-text dark:text-[#6C717A] font-bold ml-1" :"text-sm text-[#807373] dark:text-dark-gray font-medium"} `}>
                            {item_quantity} 
                        </span>
                    </div>

                    <div className='floor-price flex items-center md:mt-2 lg:mt-0'>
                        <img src={card_category_icon} alt={card_name} />
                        <span className='ml-2 font-gilroy font-bold text-dark-text dark:text-dark-white-color'>
                            {floor_price}
                        </span>
                    </div>

                </div>

            </div>



        </div>
    )
}
