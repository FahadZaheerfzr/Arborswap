import React, { useContext, useState } from 'react'
import { SidebarContext } from '../../context/SidebarContext/GlobalProvider';
import Filter from './Filter';

const filter_items = [
    {
        id: 1,
        name: 'Items',
        bool_val: true,
    },
    {
        id: 2,
        name: 'Activity',
        bool_val: false,
    },
]

const profile_items = [
    {
        id: 1,
        name: 'Owned',
        mobile_name: 'Owned',
    },
    {
        id: 2,
        name: 'On Sale',
        mobile_name: 'Onsale',
    },
    {
        id: 3,
        name: 'Created',
        mobile_name: 'Created',
    },
    {
        id: 4,
        name: 'Like',
        mobile_name: 'Like',
    },
    {
        id: 5,
        name: 'Activity',
        mobile_name: 'Activity',
    }
]

export default function FilterBar({ item, setItem, setBigGrid, bigGrid, profile }) {
    const { showSidebar } = useContext(SidebarContext);
    const [filterDropdown, setFilterDropdown] = useState(false);
    const [filtercount, setFilterCount] = useState(5);
    const [filterMobile, setFilterMobile] = useState(false);

    const toggleFilterDropDown = () => {
        setFilterDropdown(!filterDropdown);
    }
    return (
        <div className=''>
            {filterMobile &&
                <div className='fixed bg-transparent backdrop-blur-md  top-[0%] z-[100] w-full h-screen'>
                    <div className='flex flex-col h-screen justify-center px-6 '>
                        <div className="flex items-center rounded-t-[10px] border border-opacity-50 border-[#D7D9DD] justify-between py-6 px-5 w-full bg-white">
                            <span className='text-xl font-gilroy font-bold text-dark-text'>
                                Filter
                            </span>

                            <div className="flex items-center cursor-pointer"
                                onClick={() => setFilterMobile(false)}>
                                <span className='text-sm font-gilroy font-semibold text-dark-text mr-2'>
                                    Close
                                </span>
                                <div className='flex justify-center items-center bg-[#E56060] text-[#E56060] bg-opacity-10 rounded-full w-[15px] h-[15px]'>
                                    &#10005;
                                </div>
                            </div>
                        </div>
                        <Filter mobile={true} profile />
                    </div>
                </div>
            }
            <div className={`w-full flex h-12 border-[0.5px] border-[#D7D9DD]  items-center md:pl-[100px] bg-white justify-between `}>
                <div className={`flex h-12 items-center md:ml-5 ease-in-out duration-300 ${showSidebar ? "md:translate-x-[170px]" : "md:translate-x-[0px]"}`}>
                    <div className='flex h-full'>
                        <div className='hidden md:flex min-w-[48px] px-3 mr-4 h-full   border-b-2 border-[#C89211] border-opacity-50 items-center justify-center'>
                            <img src='/images/collection/filter-search.svg' alt='filter' className='cursor-pointer' onClick={toggleFilterDropDown} />
                            {!showSidebar &&
                                <span className='font-gilroy font-bold text-[#807373] ml-3'>
                                    Filter:<span className='text-dark-text'>{filtercount}</span>
                                </span>}
                        </div>

                        <div className={`hidden md:flex items-center h-full arrow border-r-[0.5px] border-[#D7D9DD] ${!showSidebar ? "ml-11" : null}`}>
                            <img src='/images/home/arrow-down.svg' alt='arrow-down' className={`cursor-pointer ease-linear duration-150 ${filterDropdown ? "rotate-180" : "rotate-0"}`} onClick={toggleFilterDropDown} />
                        </div>
                        {filterDropdown &&
                            <div className={`absolute mt-12 md:-ml-5 w-56`}>
                                <Filter profile={profile} />
                            </div>}
                    </div>

                    {profile ?
                        <div className='flex w-44 ml-2 md:w-full h-full overflow-x-scroll gap-5 md:gap-0'> 
                            {profile_items.map((filter) => (
                                <div key={filter.id} className={` h-full w-14 md:w-[84px] md:ml-5 flex items-center justify-center ${item === filter.id ? "border-b-2 border-primary-green border-opacity-50" : null}`}
                                    onClick={() => setItem(filter.id)}>
                                    <span className={`font-gilroy cursor-pointer font-bold ${item === filter.id ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                                        {filter.name.replace(/\s+/g, '')}
                                    </span>
                                </div>
                            ))}
                        </div>
                        : filter_items.map((filter) => (
                            <div key={filter.id} className={` h-full w-14 md:w-[84px] md:ml-5 flex items-center justify-center ${item === filter.bool_val ? "border-b-2 border-primary-green border-opacity-50" : null}`}
                                onClick={() => setItem(filter.bool_val)}>
                                <span className={`font-gilroy cursor-pointer font-bold ${item === filter.bool_val ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                                    {filter.name}
                                </span>
                            </div>
                        ))}



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
                            <img src='/images/Sidebar/dashboard.svg' alt='grid-icon-deactive' />
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
                <div className="flex items-center bg-white px-5 py-3"
                    onClick={() => setFilterMobile(true)}>
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
        </div>
    )
}
