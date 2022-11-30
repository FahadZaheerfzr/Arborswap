import React from 'react'

export default function Topbar({setSideBarMobile, sideBarMobile}) {
    return (
        <div className='h-[110px] flex items-center justify-between pl-[4%] pr-[5%] '>
            <div className='flex items-center'>
            <div className='flex md:hidden flex-col h-10 w-10 bg-[#F5F6F7] hamburger justify-center items-center'
                onClick={()=>setSideBarMobile(!sideBarMobile)}>

                <div className={`${sideBarMobile?"hidden":"block"} h-0 w-5 border mb-1 border-[#464754]`} />
                <div className={`${sideBarMobile?"hidden":"block"} h-0 w-5 border mb-1 border-[#464754]`} />
                <div className={`${sideBarMobile?"hidden":"block"} h-0 w-5 border border-[#464754]`} />
                <span className={`${sideBarMobile?"block":"hidden"}`}>&#x2715;</span>
            </div>
            <div className='logo-div ml-5'>
                <img className='w-[120px] sm:w-[150px]' src='/images/logo.svg' alt="header-logo" />
            </div>
            </div>

            <div className='hidden sm:flex search md:w-[40%] lg:w-[40%] items-center '>
                <img className='absolute ml-6' src='/images/Topbar/search.svg' alt="search" />
                <input className='w-full rounded-[10px] py-4 pl-16 font-gilroy font-medium bg-[#FAF8F5] placeholder:text-[#707070] focus:outline-none'
                    type="text" placeholder='Search by Collection, NFT or User' />
            </div>

            <div className='flex user-div '>
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-[#F5F6F7] rounded-md flex items-center justify-center'>
                    <img className='md:hidden' src='/images/Topbar/search.svg' alt="search" />
                    <img className='hidden md:block' src='/images/Topbar/notification.svg' alt="notification" />
                </div>

                <div className='flex md:hidden w-10 h-10 justify-center border-2 rounded-md border-primary-green border-opacity-50 items-center ml-4'>
                    <img src='/images/Topbar/mobile/empty-wallet.svg' alt="empty-wallet" />
                </div>

                <div className='hidden md:flex border-2 rounded-md border-primary-green border-opacity-50 items-center justify-between ml-8'>


                    <img className=' ml-5' src='/images/Topbar/metamask.svg' alt="metamask" />

                    <span className=' font-gilroy font-medium ml-2'>
                        0xdd....ahs4
                    </span>

                    <div className=' ml-3 mr-6'>
                        <div className='w-1 h-1 rounded-full bg-primary-green mr-[2px]' />
                        <div className='w-1 h-1 rounded-full bg-primary-green mr-[2px]' />
                        <div className='w-1 h-1 rounded-full bg-primary-green' />
                    </div>
                </div>
            </div>
        </div>
    )
}
