import React from 'react'

export default function CollectionComponent({ item, collection, setCollection }) {
    return (
        <div className={`w-full rounded-[10px] px-5 py-6 ${collection === item.id ? " border-2 border-[#C89211] border-opacity-50 " : "bg-light-gray-shade dark:bg-dark-background"}`}>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col md:flex-row items-center'>
                    <img className='w-12 h-12' src={item.image} alt="collection" />
                    <div className='flex flex-col ml-4'>
                        <div className='flex items-center gap-2'>
                            <span className={`font-gilroy font-bold text-dark-text ${collection === item.id ? "dark:text-dark-white-color" : "dark:text-dark-gray"}`}>
                                {item.name}
                            </span>
                            <img src="/images/home/collections/cards/verified.svg" alt="verified" />
                        </div>
                        <span className='font-gilroy font-medium text-sm text-light-text dark:text-dark-text-color'>
                            {item.items.toLocaleString()} Items
                        </span>


                    </div>
                </div>
                <div className='border-[1.5px] mt-4 md:mt-0 h-6 w-6 rounded-full flex justify-center items-center border-light-text border-opacity-50'
                    onClick={() => setCollection(item.id)}>
                    {collection === item.id && <div className='h-3 w-3 rounded-full bg-[#C89211]'></div>}
                </div>
            </div>
        </div>
    )
}
