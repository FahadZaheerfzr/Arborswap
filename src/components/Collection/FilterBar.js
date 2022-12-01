import React, { useContext, useState } from 'react'
import { SidebarContext } from '../../context/SidebarContext/GlobalProvider';

export default function FilterBar({ item, setItem, setBigGrid, bigGrid }) {
    const { showSidebar } = useContext(SidebarContext);
    const [filtercount, setFilterCount] = useState(0);

    return (
        <>
            <div className='w-full flex h-12  items-center md:pl-[100px] bg-white justify-between '>
                <div className={`flex h-12 items-center md:ml-5 ease-in-out duration-300 ${showSidebar ? "md:translate-x-[170px]" : "md:translate-x-[0px]"}`}>
                    <div className='hidden md:flex w-12 h-full   border-b-2 border-[#C89211] border-opacity-50 items-center justify-center'>
                        <img src='/images/collection/filter-search.svg' alt='filter' />
                    </div>

                    <div className='hidden md:block arrow'>
                        <img src='/images/home/arrow-down.svg' alt='arrow-down' />
                    </div>

                    <div className={` h-full w-14 md:w-[84px] md:ml-5 flex items-center justify-center ${item ? "border-b-2 border-primary-green border-opacity-50" : null}`}
                        onClick={() => setItem(true)}>
                        <span className={`font-gilroy cursor-pointer font-bold ${item ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                            Items
                        </span>
                    </div>

                    <div className={` h-full w-14 md:w-[84px] flex items-center justify-center ml-4 ${!item ? "border-b-2 border-primary-green border-opacity-50" : null}`}
                        onClick={() => setItem(false)}>
                        <span className={`font-gilroy cursor-pointer font-bold ${!item ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                            Activity
                        </span>
                    </div>
                </div>
                <div className='flex h-12 items-center pr-[5%]'>
                    <div className='h-full flex items-center'>
                        <span className='font-gilroy font-semibold text-sm md:text-base text-[#807373]'>
                            Price : Low to High
                        </span>

                        <img className='ml-4' src='/images/home/arrow-down.svg' alt='arrow-down' />
                    </div>

                    <div className='hidden md:flex h-full ml-14 items-center'>
                        <img className='mr-3' src='/images/collection/undo.svg' alt='undo' />

                        <span className='font-gilroy font-semibold text-[#807373]'>
                            Reset All
                        </span>
                    </div>

                    <div className='hidden md:flex menu cursor-pointer h-full items-center ml-10 mr-6'
                        onClick={() => { setBigGrid(true) }}>
                        {bigGrid ?
                            <img src="/images/home/nfts/menu.svg" alt='menu-active' /> :
                            <img src='/images/sidebar/dashboard.svg' alt='grid-icon-deactive' />
                        }
                    </div>

                    <div className='hidden md:flex menu cursor-pointer h-full items-center'
                        onClick={() => { setBigGrid(false) }}>
                        {bigGrid ?
                            <img src='/images/home/nfts/menu-small.svg' alt='small-grid-icon-deactive' /> :
                            <img src='/images/collection/menu.svg' alt='small-grid-icon' />
                        }
                    </div>
                </div>
            </div>
            <div className='flex md:hidden justify-between px-6 mt-5 '>
                <div className="flex items-center bg-white px-5 py-3">
                    <img src='/images/collection/filter-search.svg' alt='filter' />

                    <span className='font-gilroy font-bold text-[#807373] text-sm ml-3'>
                        Filters: <span className='text-dark-text'>{filtercount}</span>
                    </span>

                    <img className='ml-3' src='/images/home/arrow-down.svg' alt='arrow-down' />
                </div>

                <div className='flex items-center bg-white px-5 py-3'>
                    <img src='/images/collection/undo.svg' alt='undo' />

                    <span className='font-gilroy font-semibold text-[#807373] text-sm ml-3'>
                        Reset All
                    </span>
                </div>

            </div>
        </>
    )
}
