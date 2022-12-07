import React, { useState } from 'react'
import ArrowDownSVG from '../../../svgs/arrow_down';

const filters = [
    {
        id: 1,
        name: 'Face',
        options: [],
    },
    {
        id: 2,
        name: 'Background',
        options: [],
    },
    {
        id: 3,
        name: 'Skin',
        options: [
            {
                id: 1,
                name: 'Tiger',
                value: 10.4
            },
            {
                id: 2,
                name: 'Cyborg',
                value: 1.4
            },
            {
                id: 3,
                name: 'Stainless',
                value: 80.4
            },
        ],
    },
    {
        id: 4,
        name: 'Hair',
        options: [
            {
                id: 1,
                name: 'Grey',
                value: 80.4
            },
            {
                id: 2,
                name: 'Red',
                value: 14.4
            },
        ],
    },
    {
        id: 5,
        name: 'Body',
        options: [],
    },
]

export default function PropertiesFilter() {
    const [dropdowns, setDropdowns] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    const toggleDropdown = (id) => {
        setDropdowns({
            ...dropdowns,
            [id]: !dropdowns[id],
        });
    };
    return (
        <div className='price-filters px-3 py-6'>
            <div className='search flex items-center'>
                <img className='absolute ml-3' src='/images/Topbar/search.svg' alt="search" />
                <input className='w-full rounded-md py-3 pl-10 font-gilroy font-medium bg-[#FAF8F5] placeholder:text-[#707070] focus:outline-none'
                    type="text" placeholder='Search by Traits' />
            </div>

            <div className='mt-3'>
                {filters.map((filter) => (
                    <div className='filter  border-b border-dashed border-light-text border-opacity-30'>
                        <div className='filter-name py-4 flex items-center cursor-pointer justify-between'
                            onClick={() => toggleDropdown(filter.id)}>
                            <span className='font-gilroy font-bold text-sm text-dark-text dark:text-dark-white-color'>
                                {filter.name}
                            </span>
                            <ArrowDownSVG className={`dark:fill-dark-white-color ${dropdowns[filter.id] ? "rotate-180" : "rotate-0"}`} alt='arrow-down' />
                        </div>
                        {dropdowns[filter.id] &&
                            filter.options.map((options) => (
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='mr-2 w-3 h-3 accent-dark-text' />
                                        <span className='font-gilroy font-semibold text-sm text-dark-text dark:text-dark-white-color'>
                                            {options.name}
                                        </span>
                                    </div>
                                    <span className='font-gilroy font-medium text-sm text-[#807373] dark:text-dark-gray'>
                                        {options.value}%
                                    </span>
                                </div>
                            ))}
                    </div>
                ))}
            </div>

            <div className='flex mt-11'>
                <button className='w-full font-gilroy text-white font-bold bg-dark-text flex items-center justify-center rounded-md py-3'>
                    Apply
                </button>
            </div>

        </div>
    )
}
