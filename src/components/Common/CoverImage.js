import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider'
import Styles from './Common.module.css'

export default function CoverImage({full_image, name}) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className='w-full flex flex-col md:flex-row justify-center'>
            <div className='w-full md:w-10/12 h-32 md:h-72 '>
                <div className={`${theme === 'light' ? Styles.cover:Styles.coverDark} relative w-full h-full z-10`}>

                </div>
                <div className='w-full h-full -mt-32 md:-mt-72  flex justify-center'>
                    <img className='w-full rounded-b-[20px] ' src={full_image} alt={name} />
                </div>
            </div>
        </div>
    )
}
