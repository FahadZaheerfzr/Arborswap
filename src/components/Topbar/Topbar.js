import React from 'react'
import NotificationSVG from '../../svgs/notification'

export default function Topbar({ setSideBarMobile, sideBarMobile }) {
  return (
    <div className="h-[110px] flex items-center justify-between pl-[4%] pr-[5%] ">
      <div className="flex items-center">
        <div
          className="flex md:hidden flex-col h-10 w-10 bg-[#F5F6F7] dark:bg-dark-background hamburger justify-center items-center"
          onClick={() => setSideBarMobile(!sideBarMobile)}
        >
          <div
            className={`${
              sideBarMobile ? 'hidden' : 'block'
            } h-0 w-5 border mb-1 border-dark-text dark:border-dark-white-color`}
          />
          <div
            className={`${
              sideBarMobile ? 'hidden' : 'block'
            } h-0 w-5 border mb-1 border-dark-text dark:border-dark-white-color`}
          />
          <div
            className={`${
              sideBarMobile ? 'hidden' : 'block'
            } h-0 w-5 border border-dark-text dark:border-dark-white-color`}
          />
          <span className={`${sideBarMobile ? 'block' : 'hidden'} dark:text-dark-white-color`}>&#x2715;</span>
        </div>
        <div className="logo-div ml-5">
          <img className="w-[120px] sm:w-[150px]" src="/images/logo.svg" alt="header-logo" />
        </div>
      </div>

      <div className="hidden sm:flex search md:w-[40%] lg:w-[40%] items-center ">
        <img className="absolute ml-6" src="/images/Topbar/search.svg" alt="search" />
        <input
          className="w-full rounded-[10px] py-4 pl-16 font-gilroy font-medium bg-[#FAF8F5] dark:bg-black-shade3-background placeholder:text-[#707070] focus:outline-none dark:text-dark-white-color"
          type="text"
          placeholder="Search by Collection, NFT or User"
        />
      </div>

      <div className="flex user-div ">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#F5F6F7] dark:bg-dark-background rounded-md flex items-center justify-center">
          <img className="md:hidden" src="/images/Topbar/search.svg" alt="search" />
          <NotificationSVG className="hidden md:block fill-slate-700 dark:fill-white" />
        </div>

        <div className="flex md:hidden w-10 h-10 justify-center border-2 rounded-md border-primary-green border-opacity-50 items-center ml-4">
          <img src="/images/Topbar/mobile/empty-wallet.svg" alt="empty-wallet" />
        </div>

        <div className="hidden md:flex border-2 rounded-md border-primary-green border-opacity-50 items-center justify-between ml-8">
          <img className=" ml-5" src="/images/Topbar/metamask.svg" alt="metamask" />

          <span className=" font-gilroy font-medium ml-2 dark:text-dark-white-color">0xdd....ahs4</span>

          <div className="flex ml-3 mr-6">
            <div className="w-1 h-1 rounded-full bg-primary-green mr-[2px]" />
            <div className="w-1 h-1 rounded-full bg-primary-green mr-[2px]" />
            <div className="w-1 h-1 rounded-full bg-primary-green" />
          </div>
        </div>
      </div>
    </div>
  )
}
