import React, { useState } from 'react'
import Preferences from './Preferences';

const panel_items = [
    {
        id: 1,
        name: 'Preferences',
    },
    {
        id: 2,
        name: 'Add Details',
    },
    {
        id: 3,
        name: 'Preview',
    },
]

export default function Base() {
    const [active, setActive] = useState("Preferences");
    return (
        <div className='flex w-full'>
            <div className="panel pl-9 pr-[5%] rounded-l-[10px] bg-[#FAF8F5]">
                {panel_items.map((item) => (
                    <div key={item.id} className={`panel-item mt-9 flex cursor-pointer items-center`} onClick={() => setActive(item.name)}>
                        {item.name === active &&
                            <div className={`w-2 h-2 rounded-full bg-primary-green mr-[10px]`} />
                        }
                        <span className={`text-sm font-gilroy font-semibold ${active === item.name ? "text-dark-text" : "text-light-text"}`}>
                            {item.name}
                        </span>
                    </div>))}
            </div>

            <div className="panel-content bg-white rounded-r-[10px] px-9 w-2/3">
                {active === "Preferences" && <Preferences />}
            </div>
        </div>
    )
}
