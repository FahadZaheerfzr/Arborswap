import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext/GlobalProvider';
import Card from '../Home/Collections/Card'
import CardMobile from '../Home/NFTs/CardMobile'

export default function CollectionItems({ items, bigGrid, }) {
    return (
        <div className='md:w-10/12 flex  items-center md:pr-0'>

            <div className='w-full  mt-7'>
            {bigGrid? 
                <div className={`hidden md:grid grid-cols-3 gap-5 `} >
                    {items.map((nft) => (
                        <Card key={nft.id} card_name={nft.name} card_image={nft.image} verified={false} card_icon={"/images/home/collections/cards/verified.svg"} card_category_icon={nft.category_icon} floor_price={nft.listed_price} item_quantity={nft.owner} nft={true} small={true} />
                    ))}
                </div>:
                <div className={`hidden md:grid grid-cols-4 gap-5 `} >
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
