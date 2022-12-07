import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import ArrowDownSVG from '../../svgs/arrow_down';
import Styles from './Collection.module.css'
import ChainTypeFilter from './Subcomponents/ChainTypeFilter';
import PriceFilter from './Subcomponents/PriceFilter';
import PropertiesFilter from './Subcomponents/PropertiesFilter';
import SaleFilter from './Subcomponents/SaleFilter'




export default function Filter({ mobile, profile }) {
    const {theme} = useContext(ThemeContext);
    const [dropdowns, setDropdowns] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });
    let filters;
    if (profile) {
        filters = [
            {
                id: 1,
                options: [<ChainTypeFilter />],
                filterCount: 0,
                visible: true,
            },
            {
                id: 2,
                name: 'Sale Type',
                options: [<SaleFilter filter_name={"Buy Now"} />, <SaleFilter filter_name={"Not For Sale"} />,],
                filterCount: 2,
            },
            {
                id: 3,
                name: 'Price Range',
                options: [<PriceFilter />],
                filterCount: 0,
            },
            {
                id: 4,
                name: 'Properties',
                options: [<PropertiesFilter />],
                filterCount: 0,
            },
        ]
    } else {
        filters = [
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
                options: [<PropertiesFilter />],
                filterCount: 0,
            },
        ]
    }

    const toggleDropdown = (id) => {
        setDropdowns({
            ...dropdowns,
            [id]: !dropdowns[id],
        });
    };

    return (
        <div className={`bg-white dark:bg-black-shade2-background border-[#D7D9DD] dark:border-[#313538] w-full ${Styles.filterBorder} ${mobile ? "max-h-[80vh] overflow-scroll" : ""}`}>
            {filters.map((filter) => (
                <div key={filter.id} className='filter-box'>
                    {filter.name &&
                        <div className={`${theme==="dark"?null:Styles.filterBorder} flex justify-between pl-5 pr-7 py-6`}
                            onClick={() => toggleDropdown(filter.id)}>
                            <span className='font-gilroy font-bold text-dark-text dark:text-dark-white-color'>
                                {filter.name}
                            </span>
                            <div className='arrow flex items-center'>
                                <span className='font-gilroy text-sm font-bold text-[#807373] dark:text-dark-white-color mr-3'>
                                    {filter.filterCount > 0 ? filter.filterCount : ""}
                                </span>
                                <ArrowDownSVG className={`${dropdowns[filter.id] ? "rotate-180" : "rotate-0"} fill-dark-text dark:fill-dark-white-color`} />
                            </div>
                        </div>
                    }
                    {(dropdowns[filter.id] || filter.visible) &&
                        filter.options && filter.options.map((option, index) => (
                            <div key={index} className='filter-options'>
                                {option}
                            </div>
                        ))}
                </div>

            ))}
        </div>
    )
}
