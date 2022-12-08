import React, { useState } from 'react'
import Carousel from '../Home/Slider/Slider'
import Button from '../Home/SubComponents/Button'
import { Buttons, Tabs, Days } from '../../data/components'
import Tab from '../Home/SubComponents/Tab'
import ListCard from '../Home/Collections/ListCard'
import { Collections } from '../../data/cards'
import MobileCard from './MobileCard'

export default function CollectionRankingBase() {
    const [activeTab, setActiveTab] = useState(1);
    const [activeDay, setActiveDay] = useState(1);

    return (
        <div className='px-[3%] md:pl-[5%] md:pr-[3%]  pb-[2%] bg-tree-pattern bg-center bg-no-repeat'>
            <div className='flex w-full pt-16'>
                <div className='hero-text w-full flex flex-col md:w-[30%]'>
                    <div className='main-text flex items-end'>
                        <span className='font-gilroy font-bold text-[31px] text-dark-text dark:text-dark-white-color'>
                            Top Ranked <br />
                            Collections
                        </span>
                    </div>

                    <div className='sub-text mt-2'>
                        <span className='font-gilroy font-medium text-[#807373] dark:text-dark-gray '>
                            Explore and Discover collections and Nfts.
                        </span>
                    </div>
                </div>

                <div className='hidden md:block ml-10 md:w-[70%] slider'>
                    <Carousel />
                </div>
            </div>

            <div className='flex md:hidden w-full items-center justify-between pr-4'>
                <div className='tabs'>
                    <div className='flex items-center p-1 bg-[#F5F1EB] dark:bg-black-shade4-background'>
                        {Days.map((day) => (
                            <Tab key={day.id} tabName={day.mobileOption} active={day.id === activeDay} setActiveTab={setActiveDay} id={day.id} />
                        ))}
                    </div>
                </div>

                <Button key={Buttons[1].id} buttonText={Buttons[1].buttonText} dropDownItems={Buttons[1].dropDownItems} />

            </div>

            <div className='md:hidden tabs mt-5'>
                <div className='flex items-center p-1 bg-[#F5F1EB] dark:bg-black-shade4-background'>
                    {Tabs.map((tab) => (
                        <Tab key={tab.id} tabName={tab.tabName} active={tab.id === activeTab} setActiveTab={setActiveTab} id={tab.id} />
                    ))}
                </div>
            </div>


            <div className='hidden md:flex w-full  items-center mt-12 justify-between'>

                <div className='tabs'>
                    <div className='flex items-center p-1 bg-[#F5F1EB] dark:bg-black-shade4-background'>
                        {Days.map((day) => (
                            <Tab key={day.id} tabName={day.option} active={day.id === activeDay} setActiveTab={setActiveDay} id={day.id} />
                        ))}
                    </div>
                </div>

                <Button key={Buttons[1].id} buttonText={Buttons[1].buttonText} dropDownItems={Buttons[1].dropDownItems} />

                <div className='tabs'>
                    <div className='flex items-center p-1 bg-[#F5F1EB] dark:bg-black-shade4-background'>
                        {Tabs.map((tab) => (
                            <Tab key={tab.id} tabName={tab.tabName} active={tab.id === activeTab} setActiveTab={setActiveTab} id={tab.id} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='hidden md:block'>
                {Collections.map((card, index) => (
                    <ListCard key={card.id} rank={card.id} card_name={card.name} verified={card.verified} card_icon={card.icon} card_category_icon={card.category_icon} floor_price={card.floor_price} item_quantity={card.item_quantity} volume={card.volume} change={card.change} />
                ))}
            </div>

            <div className='md:hidden px-4 mt-8'>
                {Collections.map((card, index) => (
                    <MobileCard key={card.id} rank={card.id} card_name={card.name} item_quantity={card.item_quantity} card_icon={card.icon} card_category_icon={card.category_icon} floor_price={card.floor_price} volume={card.volume} />
                ))}
            </div>
        </div>
    )
}
