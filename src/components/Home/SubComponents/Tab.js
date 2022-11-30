import React from 'react'

export default function Tab({tabName, active, setActiveTab, id}) {
  return (
    <div className={`font-gilroy py-2 px-4 rounded-md font-semibold cursor-pointer text-sm  ${active?"bg-white text-[#464754]":"text-light-text"}`}
        onClick={()=>setActiveTab(id)}
    >
        <span>
            {tabName}
        </span>
    </div>
  )
}
