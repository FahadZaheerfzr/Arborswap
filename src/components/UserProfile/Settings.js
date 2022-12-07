import React from 'react'
import SettingsCard from './Subcomponents/SettingsCard'

export default function SettingsBase() {
    

    return (
        <div className='flex justify-center pt-5'>
            <div className='w-full px-4 md:w-1/2'>
                <div className="my-10">
                    <span className="font-gilroy text-3xl font-bold text-dark-text">Account Settings</span>
                </div>

                <SettingsCard />
            </div>
        </div>
    )
}
