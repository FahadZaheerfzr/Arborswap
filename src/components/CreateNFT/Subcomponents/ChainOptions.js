import React from 'react'

export default function ChainOptions({ item, chainType, setChainType, userFilter }) {
  return (
    <div className={`chain-item flex justify-between items-center mt-4 ${userFilter ? 'p-2' : ''}`}>
      <div className="flex items-center">
        <img className={`${userFilter ? 'w-7 h-7' : ''}`} src={item.icon} alt={item.name} />

        <div className={`${userFilter ? 'ml-2' : 'ml-4'} flex flex-col`}>
          <span className="font-gilroy font-semibold text-dark-text dark:text-dark-gray">{item.name}</span>
          {!userFilter && (
            <span className="font-gilroy font-medium text-light-text dark:text-dark-text-color text-sm">
              Est. gas fee ~ <span className="text-[#807373] dark:text-dark-gray">${item.est_gas_fee}</span>
            </span>
          )}
        </div>
      </div>

      <div
        className={`flex items-center rounded-full ${
          userFilter ? 'w-5 h-5' : 'w-6 h-6'
        } justify-center border-[1.5px] border-[#C89211] cursor-pointer`}
        onClick={() => setChainType(item.id)}
      >
        {chainType === item.id && <div className={`${userFilter ? 'w-2 h-2' : 'w-3 h-3'} rounded-full bg-[#C89211]`} />}
      </div>
    </div>
  )
}
