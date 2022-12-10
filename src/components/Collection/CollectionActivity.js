import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext/GlobalProvider'
import LinkArrowSVG from '../../svgs/link_arrow'

export default function CollectionActivity({ activity }) {
  const { showSidebar } = useContext(SidebarContext)
  return (
    <div
      className={`w-full relative flex justify-center ease-in-out duration-300 ${
        showSidebar ? 'md:translate-x-[100px]' : 'md:translate-x-[0px]'
      }`}
    >
      <div className="w-full px-4 md:px-0 md:w-4/6 border-b border-dashed border-[#767779] border-opacity-30 py-5">
        <div className="w-full flex">
          <div className="logo w-[20%]">
            <img className="absolute" src="/images/collection/activity/lock.svg" alt="lock" />
            <img src={activity.image} alt={activity.name} />
          </div>

          <div className="w-[80%] flex flex-col md:flex-row justify-between md:items-center">
            <div className="basic-info">
              <div className="name">
                <span className="font-gilroy font-semibold text-dark-text dark:text-dark-white-color">
                  {activity.name}
                </span>
              </div>

              <div className="details mt-3 flex items-center">
                <span className="font-gilroy font-medium text-sm text-[#807373] dark:text-dark-gray">
                  {activity.action} for{' '}
                  <span className="text-dark-text dark:text-dark-white-color">{activity.price} ETH</span> -{' '}
                  {activity.time}
                </span>
                <LinkArrowSVG className="ml-3 fill-none stroke-dark-text dark:stroke-dark-white-color" />
              </div>
            </div>

            <div className="transfer-details mt-3 md:mt-0">
              <div className="flex items-center">
                <span className="font-gilroy font-semibold text-sm text-[#807373] dark:text-dark-gray">By</span>

                <img className="ml-3" src={activity.by_icon} alt={activity.by} />

                <span className="font-gilroy font-medium text-sm text-dark-text dark:text-dark-white-color ml-3">
                  {activity.by}
                </span>
              </div>

              <div className="flex items-center mt-3">
                <span className="font-gilroy font-semibold text-sm text-[#807373] dark:text-dark-gray">To</span>

                <img className="ml-3" src={activity.to_icon} alt={activity.to} />

                <span className="font-gilroy font-medium text-sm text-dark-text dark:text-dark-white-color ml-3">
                  {activity.to}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
