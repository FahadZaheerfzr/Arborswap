import React, { useState } from 'react'

export default function Button({ buttonText, dropDownItems, filter, setFilter }) {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const toggleDropDown = () => {
    setDropDownToggle(!dropDownToggle);
  };
  return (
    <div className='flex flex-col'>
      <button className='flex justify-center items-center bg-white px-5 py-2 font-gilroy font-semibold text-sm'
        onClick={toggleDropDown}>
        <span>
          {buttonText}
        </span>
        <img className='ml-2' src='./images/home/arrow-down.svg' alt="arrow-down" />
      </button>

      {dropDownToggle && (
        <div className='absolute  mt-12 rounded-xl w-48 bg-white'>

          {dropDownItems.map((item, index) => (
            <div key={index} className='flex justify-between cursor-pointer px-4 py-3'
              onClick={() => setFilter(item)}>
              <span className='font-gilroy font-bold text-sm text-dark-text'>
                {item}
              </span>
              {filter === item && (
                <input className='accent-[#464754]' type="checkbox" defaultChecked />
              )}
            </div>
          ))}

        </div>)}
    </div>
  )
}
