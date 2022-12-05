import { useState } from 'react'
import { Link } from "react-router-dom"

const nav_items = [
    {
        id: 1,
        name: 'Dashboard',
        icon: '/images/Sidebar/dashboard.svg',
        activeIcon: '/images/Sidebar/dashboard-green.svg',
        active: false,
        extendable: false,
        subItems: [],
        link: "/"
    },
    {
        id: 2,
        name: 'Marketplace',
        icon: '/images/Sidebar/marketplace.svg',
        // activeIcon:'/images/Sidebar/marketplace-active.svg',
        active: true,
        extendable: true,
        subItems: [
            {
                id: 1,
                name: "Discover",
                link: "/"
            },
            {
                id: 2,
                name: "Rankings",
                link: "/rankings"
            },
            {
                id: 3,
                name: "Create",
                link: "/create_nft"
            }
        ]
    },
    {
        id: 3,
        name: 'User Profile',
        icon: '/images/Sidebar/user-profile.svg',
        //activeIcon:'/images/Sidebar/marketplace-active.svg',
        active: false,
        extendable: true,
        subItems: ["My Profile", "Rankings", "Create"]
    },
    {
        id: 4,
        name: 'More Products',
        icon: '/images/Sidebar/menu.svg',
        // activeIcon:'/images/Sidebar/marketplace-active.svg',
        active: false,
        extendable: true,
        subItems: ["Search", "Rankings", "Create"]
    },

]


export default function Sidebar({ fullSidebar, tempfixed, handleTempFixed }) {
    const [active, setActive] = useState("Discover")
    const [activeItem, setActiveItem] = useState("Marketplace");



    const handleActiveItem = (nav_item, nav_item_extendable) => {
        if (nav_item_extendable) {
            if (nav_item === activeItem) {
                setActiveItem("null")
            } else {
                setActiveItem(nav_item);
            }
        }

    }

    if (!fullSidebar) {
        return (
            <div className='w-full flex justify-end'>
                <div className='w-[35%] flex flex-col items-center mb-[5%] justify-between'>
                    <div className='nav-items'>
                        {nav_items.map((nav_item, index) => (
                            <Link key={nav_item.id} to={nav_item.link}>
                                <div className='mt-8'>
                                    <img className='h-6 w-6' src={nav_item.icon} alt={nav_item.name} />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className=' flex justify-center'>
                        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" checked={tempfixed ? false : true} id="default-toggle" className="sr-only peer"
                                onChange={handleTempFixed}
                            />
                            <div className="w-14 h-7 bg-[#F5F1EB] peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all border-[#F5F1EB] peer-checked:bg-[#C89211]" />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='w-full  flex flex-col justify-between mb-5'>
            <div className='nav-items'>
                {
                    activeItem === "null" &&
                    <div className='bg-white pt-[20%]'>
                    </div>
                }
                {nav_items.map(nav_item => (
                        <div key={nav_item.id} className='mt-8 w-full cursor-pointer' >
                        <Link  to={nav_item.link}>
                            <div className='flex justify-between items-center' onClick={(nav_item_name) => handleActiveItem(nav_item.name, nav_item.extendable)}>
                                <div className='flex ml-[20%]'>
                                    {nav_item.active && nav_item.activeIcon ?
                                        <img src={nav_item.activeIcon} alt="nav-item-icon" />
                                        : <img src={nav_item.icon} alt="nav-item-icon" />}
                                    <span className={`font-gilroy font-semibold ml-5 ${nav_item.active ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                                        {nav_item.name}
                                    </span>
                                </div>
                                {nav_item.extendable &&
                                    <div className='mr-8'>
                                        <img src='/images/Sidebar/arrow-down.svg' alt="arrow-down" />
                                    </div>
                                }
                            </div>
                            </Link>

                            {activeItem === nav_item.name &&
                                <div className='bg-[#FAF8F5] flex flex-col pl-[35%] mt-3 pb-5'>
                                    {nav_item.subItems.map((subItem, index) => (
                                        <Link key={index} to={subItem.link} className="mt-5" onClick={() => setActive(subItem.name)}>
                                            <span className={`font-semibold font-gilroy ${active === subItem.name ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                                                {subItem.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            }
                        </div>
                ))}
                {
                    activeItem === "null" &&
                    <div className='bg-white pt-[20%]'>
                    </div>
                }
            </div>
            <div className='md:hidden h-20'>

            </div>

            <div className=' flex flex-col items-end mr-7'>
                <div className='flex'>
                    <img className='mr-3' src='/images/Sidebar/sun.svg' alt="sun" />
                    <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" checked={tempfixed ? false : true} id="default-toggle" className="sr-only peer"
                            onChange={handleTempFixed}
                        />
                        <div className="w-10 h-6 md:w-14 md:h-7 bg-[#F5F1EB] peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:md:top-[2px] after:left-[0] after:md:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:md:h-6 after:w-5 after:md:w-6 after:transition-all border-[#F5F1EB] peer-checked:bg-[#C89211]" />
                    </label>

                    <div className='bg-[#C89211] rounded-[14px] flex items-center px-2 ml-5'>
                        <img src='/images/Sidebar/logo.svg' alt="logo" />

                        <span className='font-gilroy ml-[10px] text-sm font-bold text-white'>
                            $0.25
                        </span>
                    </div>
                </div>


                <div className='socials flex mt-9'>
                    <div className='twitter flex items-center justify-center bg-[#F5F1EB] w-[34px] h-[34px] rounded-md '>
                        <img src='/images/Sidebar/socials/twitter.svg' alt="twitter" />
                    </div>

                    <div className='telegram flex items-center justify-center bg-[#F5F1EB] w-[34px] h-[34px] rounded-md ml-3'>
                        <img src='/images/Sidebar/socials/telegram.svg' alt="telegram" />
                    </div>

                    <div className='dribble flex items-center justify-center bg-[#F5F1EB] w-[34px] h-[34px] rounded-md ml-3'>
                        <img src='/images/Sidebar/socials/dribbble.svg' alt="dribble" />
                    </div>

                    <div className='instagram flex items-center justify-center bg-[#F5F1EB] w-[34px] h-[34px] rounded-md ml-3'>
                        <img src='/images/Sidebar/socials/instagram.svg' alt="instagram" />
                    </div>
                </div>

                <div className='copyrights'>
                    <span className=' text-[10px] text-light-text font-gilroy font-medium'>
                        @2022 Arborswap. All right Reserved.
                    </span>
                </div>
            </div>
        </div>
    )
}
