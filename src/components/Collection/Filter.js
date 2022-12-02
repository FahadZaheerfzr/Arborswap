import React, { useState } from 'react'
import Styles from './Collection.module.css'
import PriceFilter from './Subcomponents/PriceFilter';
import PropertiesFilter from './Subcomponents/PropertiesFilter';
import SaleFilter from './Subcomponents/SaleFilter'

const filters = [
    {
        id: 1,
        name: 'Sale Type',
        options: [<SaleFilter filter_name={"Buy Now"} />, <SaleFilter filter_name={"Not For Sale"} />,],
        filterCount: 2,
    },
    {
        id: 2,
        name: 'Price Range',
        options: [<PriceFilter />],
        filterCount: 0,
    },
    {
        id: 3,
        name: 'Properties',
        options:[<PropertiesFilter />],
        filterCount: 0,
    },
]

export default function Filter() {
    const [dropdowns, setDropdowns] = useState({
        1: false,
        2: false,
        3: false,
    });

    const toggleDropdown = (id) => {
        setDropdowns({
            ...dropdowns,
            [id]: !dropdowns[id],
        });
    };

    return (
        <div className={`bg-white w-full ${Styles.filterBorder} `}>
            {filters.map((filter) => (
                <div key={filter.id} className='filter-box'>
                    <div className={`${Styles.filterBorder} flex justify-between pl-5 pr-7 py-6`}
                        onClick={() => toggleDropdown(filter.id)}>
                        <span className='font-gilroy font-bold text-dark-text'>
                            {filter.name}
                        </span>
                        <div className='arrow flex items-center'>
                            <span className='font-gilroy text-sm font-bold text-[#807373] mr-3'>
                                {filter.filterCount > 0 ? filter.filterCount : ""}
                            </span>
                            <img className={`${dropdowns[filter.id]?"rotate-180":"rotate-0"}`} src='/images/Sidebar/arrow-down.svg' alt='arrow-down' />
                        </div>
                    </div>
                    {dropdowns[filter.id] &&
                        filter.options && filter.options.map((option) => (
                            <div key={option.id} className='filter-options'>
                                {option}
                            </div>
                        ))}
                </div>

            ))}
        </div>
    )
}
