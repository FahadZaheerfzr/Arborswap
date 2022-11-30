import React, { useState } from 'react'
import Carousel from './Slider/Slider'
import Button from './SubComponents/Button'
import Tab from './SubComponents/Tab'
import { Cards } from '../../data/cards'
import Card from './SubComponents/Card'
import Dropdown from './SubComponents/Dropdown'
import ListCard from './SubComponents/ListCard'


const Buttons = [
    {
        id: 1,
        buttonText: 'Sort By',
        dropDownItems: []
    },
    {
        id: 2,
        buttonText: 'All Categories',
        dropDownItems: []
    },
    {
        id: 3,
        buttonText: 'Floor Price',
        dropDownItems: []
    },
]


const Tabs = [
    {
        id: 1,
        tabName: 'All'
    },
    {
        id: 2,
        tabName: 'Ethereum'
    },
    {
        id: 3,
        tabName: 'Solana'
    },
    {
        id: 4,
        tabName: 'BSC'
    },
    {
        id: 5,
        tabName: 'Polygon'
    },
]

export default function CollectionLayout() {
    const [activeTab, setActiveTab] = useState(1);
    const [cardFormat, setCardFormat] = useState('grid');
    const [dropDownToggle, setDropDownToggle] = useState(false);
    const [collections, setCollections] = useState(true);

    const toggleDropDown = () => {
        setDropDownToggle(!dropDownToggle);
    }

    return (
        <div className='px-[3%] md:pl-[5%] md:pr-[3%] pt-[5%] pb-[2%] bg-tree-pattern bg-center bg-no-repeat'>
            <div className='flex w-full pt-12'>
                <div className='hero-text w-full flex flex-col md:w-[30%]'>
                    <div className='main-text flex items-end'
                        onClick={toggleDropDown}>
                        <span className='font-gilroy font-bold text-[31px] text-[#464754]'>
                            Discover <br />
                            Collections
                        </span>
                        <img className='mb-2 ml-2' src='./images/collections/arrow-down.svg' alt="arrow-down" />
                    </div>

                    <div className="absolute mt-24">
                        {dropDownToggle &&
                            <Dropdown collections={collections} setCollections={setCollections} />
                        }
                    </div>

                    <div className='sub-text mt-2'>
                        <span className='font-gilroy font-medium text-[#807373]'>
                            Explore and Discover collections and Nfts.
                        </span>
                    </div>
                </div>

                <div className='hidden md:block ml-10 md:w-[70%] slider'>
                    <Carousel />
                </div>
            </div>

            <div className='md:hidden mt-10'>
                <div className='flex justify-between'>
                    {
                        Buttons.map((button) => (
                            button.id !== 1 ?
                                <Button key={button.id} buttonText={button.buttonText} dropDownItems={button.dropDownItems} />
                                : null
                        ))}

                </div>

                <div className='mt-5 flex items-center p-1 bg-[#F5F1EB]'>
                    {Tabs.map((tab) => (
                        <Tab key={tab.id} tabName={tab.tabName} active={tab.id === activeTab} setActiveTab={setActiveTab} id={tab.id} />
                    ))}
                </div>

            </div>

            <div className='hidden md:flex w-full  items-center mt-12 justify-between'>
                <div className='flex'>
                    <div className={`w-11 h-11 rounded-md flex justify-center items-center cursor-pointer ${cardFormat === "list" ? "bg-white" : "bg-[#F5F1EB]"}`}
                        onClick={() => setCardFormat("list")}>
                        <img src='./images/collections/list-icon.svg' alt="list-icon" />
                    </div>
                    <div className={`w-11 h-11 rounded-md flex justify-center items-center cursor-pointer ${cardFormat === "grid" ? "bg-white" : "bg-[#F5F1EB]"}`}
                        onClick={() => setCardFormat("grid")}>
                        <img src='./images/collections/grid-icon.svg' alt="grid-icon" />
                    </div>
                </div>
                {Buttons.map((button) => (
                    <Button key={button.id} buttonText={button.buttonText} />
                ))}


                <div className='tabs'>
                    <div className='flex items-center p-1 bg-[#F5F1EB]'>
                        {Tabs.map((tab) => (
                            <Tab key={tab.id} tabName={tab.tabName} active={tab.id === activeTab} setActiveTab={setActiveTab} id={tab.id} />
                        ))}
                    </div>
                </div>
            </div>

            {cardFormat === "grid" ?
                <div className='w-full grid grid-cols-1 md:grid-cols-3 mt-7 gap-5'>
                    {Cards.map((card) => (
                        <Card key={card.id} card_name={card.name} card_image={card.image} verified={card.verified} card_icon={card.icon} card_category_icon={card.category_icon} floor_price={card.floor_price} item_quantity={card.item_quantity} />
                    ))}
                </div> :


                <div className='w-full mt-4'>
                    {Cards.map((card) => (
                        <ListCard key={card.id} card_name={card.name} verified={card.verified} card_icon={card.icon} card_category_icon={card.category_icon} floor_price={card.floor_price} item_quantity={card.item_quantity} volume={card.volume} change={card.change} />
                    ))}
                </div>
            }

           
        </div>
    )
}
