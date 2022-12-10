import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Styles from './BaseLayout.module.css'
import Topbar from '../Topbar/Topbar'

import { SidebarContext } from '../../context/SidebarContext/GlobalProvider'
import { useActiveItem } from '../../hooks/setActiveItem'
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider'

export default function BaseLayout({ children, noTopbar, noSidebar }) {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext)
  const { theme, setTheme } = useContext(ThemeContext)
  const [sideBarMobile, setSideBarMobile] = useState(false)
  const [tempfixed, setTempFixed] = useState(true)
  const [activeItem] = useActiveItem()

  const handleTempFixed = () => {
    setTheme(!tempfixed ? 'light' : 'dark')
    setTempFixed(!tempfixed)
  }

  useEffect(() => {
    if (theme === 'dark') {
      setTempFixed(false)
    }
  }, [theme])

  return (
    <div className="w-full pb-5">
      {noTopbar ? null : (
        <div className={`${Styles.topBar} w-full bg-white dark:bg-black-shade2-background`}>
          <Topbar setSideBarMobile={setSideBarMobile} sideBarMobile={sideBarMobile} activeLink={activeItem} />
        </div>
      )}

      <div className={`flex w-full ${noTopbar ? '' : 'md:mt-24'}`}>
        {noSidebar ? null : (
          <div
            className={`${
              sideBarMobile ? 'block' : 'hidden'
            } md:hidden w-[240px] bg-white absolute dark:bg-black-shade2-background z-20`}
          >
            <Sidebar
              fullSidebar={true}
              tempfixed={tempfixed}
              handleTempFixed={handleTempFixed}
              activeLink={activeItem}
            />
          </div>
        )}
        {noSidebar ? null : (
          <div
            className={`hidden md:flex w-[270px] bg-white dark:bg-black-shade2-background ${
              Styles.sideBar
            } ease-in-out duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-[170px]'}`}
          >
            <Sidebar
              fullSidebar={showSidebar}
              tempfixed={tempfixed}
              handleTempFixed={handleTempFixed}
              activeLink={activeItem}
            />

            <div className="absolute z-30 ml-[90%] mt-6">
              <div
                className="h-12 w-12 bg-white dark:bg-black-shade2-background rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <img src="/images/Sidebar/arrow-left.svg" alt="arrow-left" />
              </div>
            </div>
          </div>
        )}

        <div
          className={`w-full md:w-[calc(100%-270px)] md:ml-[270px] ease-in-out duration-300 ${
            showSidebar ? ' translate-x-0' : '-translate-x-[100px]'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
