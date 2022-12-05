import React from 'react'

export default function ChainOptions({ item, chainType, setChainType }) {
    return (
        <div className="chain-item flex justify-between items-center mt-4 ">
            <div className='flex items-center'>
                <img src={item.icon} alt={item.name} />

                <div className='ml-4 flex flex-col'>
                    <span className='font-gilroy font-semibold text-dark-text'>
                        {item.name}
                    </span>
                    <span className='font-gilroy font-medium text-light-text text-sm'>
                        Est. gas fee ~ <span className='text-[#807373]'>${item.est_gas_fee}</span>
                    </span>
                </div>
            </div>

            <div className='flex items-center rounded-full w-6 h-6 justify-center border-[1.5px] border-[#C89211] cursor-pointer'
                onClick={() => setChainType(item.id)}>
                {chainType === item.id && (
                    <div className='w-3 h-3 rounded-full bg-[#C89211]' />
                )}
            </div>
        </div>
    )
}
