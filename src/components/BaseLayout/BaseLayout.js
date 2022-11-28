import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Styles from './BaseLayout.module.css'
import Topbar from '../Topbar/Topbar'

export default function BaseLayout() {
  return (
    <div className='w-full bg-[#F5F6F7]'>
        <div className={`${Styles.topBar} bg-white`}>
            <Topbar />
        </div>
        <div className={`w-[20%] bg-white h-screen ${Styles.sideBar}`}>
            <Sidebar />
        </div>

        <div className='w-[80%]'>
            
        </div>
    </div>
  )
}
