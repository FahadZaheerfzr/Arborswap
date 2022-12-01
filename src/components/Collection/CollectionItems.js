import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext/GlobalProvider';
import Card from '../Home/Collections/Card'
import CardMobile from '../Home/NFTs/CardMobile'

export default function CollectionItems({ items, bigGrid }) {
    const { showSidebar } = useContext(SidebarContext);
    return (
        <div className='w-full flex  items-center px-4 md:pl-[100px] md:pr-0
         '>

            <div className='w-full flex justify-center mt-7'>
            {bigGrid? 
                <div className={`hidden md:grid grid-cols-3 px-4 gap-5 `} >
                    {items.map((nft) => (
                        <Card key={nft.id} card_name={nft.name} card_image={nft.image} verified={false} card_icon={"/images/home/collections/cards/verified.svg"} card_category_icon={nft.category_icon} floor_price={nft.listed_price} item_quantity={nft.owner} nft={true} small={true} />
                    ))}
                </div>:
                <div className={`hidden md:grid ${showSidebar? "grid-cols-4 pl-[190px] px-4 gap-5":"grid-cols-5 px-4 gap-5"} `} >
                    {items.map((nft) => (
                        <Card key={nft.id} card_name={nft.name} card_image={nft.image} verified={false} card_icon={"/images/home/collections/cards/verified.svg"} card_category_icon={nft.category_icon} floor_price={nft.listed_price} item_quantity={nft.owner} nft={true} small={true} />
                    ))}
                </div>
            }

                <div className='md:hidden w-full mt-4'>
                    {items.map((nft) => (
                        <div key={nft.id} className='mt-4'>
                            <CardMobile card_name={nft.name} card_image={nft.image} verified={true} listed_price={nft.listed_price} card_category_icon={nft.category_icon} owner={nft.owner} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
