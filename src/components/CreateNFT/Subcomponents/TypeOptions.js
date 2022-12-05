import React from 'react'

export default function TypeOptions({item, type, setType}) {
  return (
    <div className='py-6 pl-4 md:pl-9 pr-2 md:pr-5 mt-5 border-2 flex items-center justify-around border-primary-green rounded-xl'>
        <img src={item.icon} alt={item.name} />

        <div className='w-36 md:w-64 flex flex-col'>
            <span className='font-gilroy font-semibold text-dark-text'>
                {item.name}
            </span>
            <span className='font-gilroy font-medium text-light-text text-sm'>
                {item.description}
                </span>
            </div>

            <div className='flex items-center rounded-full w-6 h-6 justify-center border-[1.5px] border-primary-green cursor-pointer'
                onClick={() => setType(item.id)}>
                {type === item.id && (
                    <div className='w-3 h-3 rounded-full bg-primary-green' />
                )}
            </div>
    </div>

    
  )
}
