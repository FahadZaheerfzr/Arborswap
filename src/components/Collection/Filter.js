import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider'
import ArrowDownSVG from '../../svgs/arrow_down'
import BagSVG from '../../svgs/bag'
import BidSVG from '../../svgs/bid'
import HeartTickSVG from '../../svgs/heart_tick'
import ListingSVG from '../../svgs/listing'
import SwapSVG from '../../svgs/swap'
import TickSVG from '../../svgs/tick'
import Styles from './Collection.module.css'
import ChainTypeFilter from './Subcomponents/ChainTypeFilter'
import PriceFilter from './Subcomponents/PriceFilter'
import PropertiesFilter from './Subcomponents/PropertiesFilter'
import SaleFilter from './Subcomponents/SaleFilter'

const activity_filters = [
  {
    id: 1,
    name: 'Sales',
    icon: <BagSVG className="fill-dark-text dark:fill-dark-white-color" />,
  },
  {
    id: 2,
    name: 'Transfers',
    icon: <SwapSVG className="stroke-dark-text dark:stroke-dark-white-color" />,
  },
  {
    id: 3,
    name: 'Listings',
    icon: <ListingSVG className="fill-dark-text dark:fill-dark-white-color" />,
  },
  {
    id: 4,
    name: 'Bids',
    icon: <BidSVG className="fill-dark-text dark:fill-dark-white-color" />,
  },
  {
    id: 5,
    name: 'Likes',
    icon: <HeartTickSVG className="fill-dark-text dark:fill-dark-white-color" />,
  },
]

export default function Filter({ mobile, profile, item }) {
  const { theme } = useContext(ThemeContext)
  const [activityFilters, setActivityFilters] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  })

  const [dropdowns, setDropdowns] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  })

  let filters
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
        options: [<SaleFilter filter_name={'Buy Now'} />, <SaleFilter filter_name={'Not For Sale'} />],
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
        options: [<SaleFilter filter_name={'Buy Now'} />, <SaleFilter filter_name={'Not For Sale'} />],
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
    })
  }

  return (
    <div
      className={`bg-white max-h-[calc(100vh-170px)] overflow-scroll dark:bg-black-shade2-background border-[#D7D9DD] dark:border-[#313538] w-full ${
        Styles.filter
      } ${Styles.filterBorder} ${mobile ? 'max-h-[80vh] overflow-scroll' : ''}`}
    >
      {item &&
        filters.map((filter) => (
          <div key={filter.id} className="filter-box">
            {filter.name && (
              <div
                className={`${theme === 'dark' ? null : Styles.filterBorder} flex justify-between pl-5 pr-7 py-6`}
                onClick={() => toggleDropdown(filter.id)}
              >
                <span className="font-gilroy font-bold text-dark-text dark:text-dark-white-color">{filter.name}</span>
                <div className="arrow flex items-center">
                  <span className="font-gilroy text-sm font-bold text-[#807373] dark:text-dark-white-color mr-3">
                    {filter.filterCount > 0 ? filter.filterCount : ''}
                  </span>
                  <ArrowDownSVG
                    className={`${
                      dropdowns[filter.id] ? 'rotate-180' : 'rotate-0'
                    } fill-dark-text dark:fill-dark-white-color`}
                  />
                </div>
              </div>
            )}
            {(dropdowns[filter.id] || filter.visible) &&
              filter.options &&
              filter.options.map((option, index) => (
                <div key={index} className="filter-options">
                  {option}
                </div>
              ))}
          </div>
        ))}

      {!item &&
        activity_filters.map((filter) => (
          <div className="flex items-center justify-between px-5 py-6 border-[0.5px] border-[#D7D9DD]">
            <div className="flex items-center">
              {filter.icon}

              <span className="font-gilroy font-bold text-[#807373] dark:text-dark-white-color ml-3">
                {filter.name}
              </span>
            </div>

            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-[2.5px] flex items-center justify-center cursor-pointer bg-opacity-20 ${
                  activityFilters[filter.id] ? 'bg-[#C89211]' : 'bg-light-text'
                }`}
                onClick={() => setActivityFilters({ ...activityFilters, [filter.id]: !activityFilters[filter.id] })}
              >
                <TickSVG className={`${activityFilters[filter.id] ? 'fill-[#C89211]' : 'fill-light-text'} `} />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
