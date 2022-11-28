import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Styles from './BaseLayout.module.css'
import Topbar from '../Topbar/Topbar'

export default function BaseLayout() {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className='w-full h-screen'>
            <div className={`${Styles.topBar} bg-white`}>
                <Topbar />
            </div>

            <div className='flex min-h-[85%]'>
                <div className={`w-[20%] flex bg-white ${Styles.sideBar} ease-in-out duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-[65%]"}`}>
                    <Sidebar fullSidebar={showSidebar} />

                    <div className='absolute z-30 ml-[90%] mt-6'>
                        <div className='h-12 w-12 bg-white rounded-full flex justify-center items-center'
                            onClick={() => setShowSidebar(!showSidebar)}>

                            <img src='./images/Sidebar/arrow-left.svg' alt="arrow-left" />
                        </div>
                    </div>
                </div>

                <div className='w-[80%]'>


                </div>
            </div>
        </div>
    )
}
