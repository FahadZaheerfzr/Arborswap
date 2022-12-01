import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Collections } from '../data/cards';
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Collection from '../components/Collection/Collection';
import ExtendedLayout from '../components/ExtendedLayout/ExtendedLayout';
import { SidebarContext } from '../context/SidebarContext/GlobalProvider';

export default function CollectionPage() {
    const { id } = useParams();
    const [collection, setCollection] = useState(null);
    const [item, setItem] = useState(true);
    const {showSidebar} = useContext(SidebarContext);

    useEffect(() => {
        const collection = Collections.find((collection) => collection.id === parseInt(id));
        setCollection(collection);
    }, [id]);

    return (
        <ExtendedLayout>
            <BaseLayout>
                {collection &&
                    <Collection collection={collection} />
                }
            </BaseLayout>

            <div className='w-full flex h-12  items-center pl-[100px] bg-white justify-between '>
                <div className={`flex h-12 items-center ml-5 ease-in-out duration-300 ${showSidebar ? "translate-x-[170px]": "translate-x-[0px]" }`}>
                    <div className='flex w-12 h-full   border-b-2 border-[#C89211] border-opacity-50 items-center justify-center'>
                        <img src='/images/collection/filter-search.svg' alt='filter' />
                    </div>

                    <div className='arrow'>
                        <img src='/images/home/arrow-down.svg' alt='arrow-down' />
                    </div>

                    <div className={` h-full w-[84px] ml-5 flex items-center justify-center ${item ?"border-b-2 border-primary-green border-opacity-50":null}`}
                        onClick={() => setItem(true)}>
                        <span className={`font-gilroy cursor-pointer font-bold ${item ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                            Items
                        </span>
                    </div>

                    <div className={` h-full w-[84px] flex items-center justify-center ml-4 ${!item ?"border-b-2 border-primary-green border-opacity-50":null}`}
                        onClick={() => setItem(false)}>
                        <span className={`font-gilroy cursor-pointer font-bold ${!item ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                            Activity
                        </span>
                    </div>
                </div>
                <div className='flex h-12 items-center pr-[5%]'>
                    <div className='h-full flex items-center'>
                        <span className='font-gilroy font-semibold text-[#807373]'>
                            Price : Low to High
                        </span>

                        <img className='ml-4' src='/images/home/arrow-down.svg' alt='arrow-down' />
                    </div>

                    <div className='h-full ml-14 flex items-center'>
                        <img className='mr-3' src='/images/collection/undo.svg' alt='undo' />

                        <span className='font-gilroy font-semibold text-[#807373]'>
                            Reset All
                        </span>
                    </div>

                    <div className='menu h-full flex items-center ml-10 mr-6'>
                        <img src='/images/sidebar/dashboard.svg' alt='grid-icon' />
                    </div>

                    <div className='menu h-full flex items-center'>
                        <img src='/images/collection/menu.svg' alt='small-grid-icon' />
                    </div>
                </div>
            </div>
        </ExtendedLayout>
    )
}
