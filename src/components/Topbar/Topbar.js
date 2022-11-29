import React from 'react'

export default function Topbar() {
    return (
        <div className='h-[110px] flex items-center justify-between ml-[4%] mr-[5%] '>
            <div className='logo-div '>
                <img src='./images/logo.svg' alt="header-logo" />
            </div>

            <div className='search w-[40%] flex items-center '>
                <img className='absolute ml-6' src='./images/Topbar/search.svg' alt="search" />
                <input className='w-full rounded-[10px] py-4 pl-16 font-gilroy font-medium bg-[#FAF8F5] placeholder:text-[#707070] focus:outline-none'
                    type="text" placeholder='Search by Collection, NFT or User' />
            </div>

            <div className='user-div flex'>
                <div className='w-12 h-12 bg-[#F5F6F7] rounded-md flex items-center justify-center'>
                    <img src='./images/Topbar/notification.svg' alt="notification" />
                </div>

                <div className='border-2 rounded-md border-primary-green border-opacity-50 flex items-center justify-between ml-8'>
                    <img className='ml-5' src='./images/Topbar/metamask.svg' alt="metamask" />

                    <span className='font-gilroy font-medium ml-2'>
                    0xdd....ahs4
                    </span>

                    <div className='flex ml-3 mr-6'>
                        <div className='w-1 h-1 rounded-full bg-primary-green mr-[2px]' />
                        <div className='w-1 h-1 rounded-full bg-primary-green mr-[2px]' />
                        <div className='w-1 h-1 rounded-full bg-primary-green' />
                    </div>
                </div>
            </div>
        </div>
    )
}
