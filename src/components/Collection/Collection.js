import React from 'react'
import Styles from './Collection.module.css'
import Info from './Subcomponents/Info'
import InfoMobile from './Subcomponents/InfoMobile'

export default function Collection({ collection }) {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-col md:flex-row justify-center'>
                <div className='w-full md:w-10/12 h-32 md:h-72 '>
                    <div className={`${Styles.cover} relative w-full h-full z-10`}>

                    </div>
                    <div className='w-full h-full -mt-32 md:-mt-72  flex justify-center'>
                        <img className='w-full rounded-b-[20px] ' src={collection.full_image} alt={collection.name} />
                    </div>
                </div>
            </div>

            <div className='w-full flex  justify-center md:-mt-7 relative z-20'>
                <div className='w-10/12 flex justify-between'>
                    <div className='creator-info w-2/6 md:w-1/6 flex flex-col items-center '>
                        <img src={collection.creator_logo} alt={collection.creator_name} />


                        <div className='hidden md:block creator-info mt-9'>
                            <span className='font-gilroy font-medium text-sm text-[#8F8888]'>
                                Created By
                            </span>
                        </div>

                        <div className='hidden md:flex mt-2'>
                            <img src={collection.creator_icon} alt={collection.creator_logo} />

                            <span className='font-gilroy font-medium text-sm text-[#464754] ml-2'>
                                {collection.creator_name}
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-col w-4/6 md:w-5/6 md:px-[2%]'>
                        <div className='flex flex-col ml-4 md:ml-2 justify-center md:flex-row md:justify-between md:items-center'>
                            <div className='collection-name mt-2 md:mt-0  flex items-center'>
                                <span className='font-gilroy font-bold text-[#464754] text-xl'>
                                    {collection.name}
                                </span>
                                {collection.verified &&
                                    <img className='ml-4' src='/images/home/collections/cards/verified.svg' alt="verified" />
                                }
                            </div>

                            <div className='socials flex items-center'>
                                <img className='w-4 h-4 mr-5' src='/images/Sidebar/socials/twitter.svg' alt="twitter" />
                                <img className='w-4 h-4 mr-5' src='/images/Sidebar/socials/dribbble.svg' alt="dribbble" />

                                <div className='w-8 h-8 bg-[#FAF8F5] rounded flex items-center justify-center'>
                                    <div className='dot w-1 h-1 mr-1 bg-dark-text rounded-full' />
                                    <div className='dot w-1 h-1 mr-1 bg-dark-text rounded-full' />
                                    <div className='dot w-1 h-1 bg-dark-text rounded-full' />
                                </div>
                            </div>

                            <div className='flex md:hidden mt-4'>
                                <img src={collection.creator_icon} alt={collection.creator_logo} />

                                <span className='font-gilroy font-medium text-sm text-[#464754] ml-2'>
                                    {collection.creator_name}
                                </span>
                            </div>
                        </div>



                        <div className='hidden md:flex collection-info  w-full mt-8'>
                            <Info text={"Floor Price"} val={collection.floor_price + " ETH"} />
                            <Info text={"Total Vol."} val={collection.volume + " ETH"} />
                            <Info text={"M.Cap"} val={collection.cap} />
                        </div>

                        <div className='hidden md:flex collection-info w-full mt-2'>
                            <Info text={"Items"} val={collection.item_quantity} />
                            <Info text={"Owners"} val={collection.owners} />
                            <Info text={"Listed Items"} val={collection.listed_items} />
                        </div>

                        <div className='hidden md:block description mt-5 mb-5 ml-2 mr-10'>
                            <span className='font-gilroy font-medium text-light-text'>
                                {collection.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='flex md:hidden collection-info  w-full justify-center mt-8 px-6 gap-3'>
                    <InfoMobile text={"Floor Price"} val={collection.floor_price + " ETH"} />
                    <InfoMobile text={"Total Vol."} val={collection.volume + " ETH"} />
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='flex md:hidden collection-info  w-full justify-center mt-8 px-6 gap-3'>
                    <InfoMobile text={"M.Cap"} val={collection.cap} />
                    <InfoMobile text={"Items"} val={collection.item_quantity} />
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='flex md:hidden collection-info  w-full justify-center mt-8 px-6 gap-3'>
                    <InfoMobile text={"Owners"} val={collection.owners} />
                    <InfoMobile text={"Listed Items"} val={collection.listed_items} />
                </div>
            </div>

            <div className='description w-full px-10 text-center flex mt-5 mb-10 justify-center md:hidden'>
                <span className='font-gilroy font-medium text-light-text'>
                    {collection.description}
                </span>
            </div>
        </div>
    )
}
