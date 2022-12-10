import React, { useState } from 'react'
import ChainOptions from '../../CreateNFT/Subcomponents/ChainOptions'
import { profile_chain_types as chain_types } from '../../../data/cards'
import ArrowDownSVG from '../../../svgs/arrow_down'

export default function ChainTypeFilter() {
  const [showChainType, setShowChainType] = useState(false)
  const [chainType, setChainType] = useState(1)

  const toggleChainType = () => {
    setShowChainType(!showChainType)
  }
  return (
    <div className="chain-select">
      <div className="border-b py-5 border-light-text border-opacity-30">
        <div className="chain-item flex justify-between items-center">
          <div className="flex items-center px-2">
            <img className="w-7 h-7" src={chain_types[chainType].icon} alt={chain_types[chainType].name} />

            <div className="ml-2 flex flex-col">
              <span className="font-gilroy font-semibold text-[#807373] dark:text-dark-gray">
                {chain_types[chainType].name}
              </span>
            </div>
          </div>

          <div
            className="flex items-center rounded-full w-8 h-8 justify-center cursor-pointer"
            onClick={toggleChainType}
          >
            <ArrowDownSVG
              className={`${
                showChainType ? 'rotate-180' : 'rotate-0'
              } duration-300 ease-in-out fill-dark-text dark:fill-dark-white-color`}
            />
          </div>
        </div>
      </div>
      {showChainType && (
        <div className="py-5">
          <div className="chain-type ml-2">
            <span className="font-gilroy font-semibold text-[#807373] dark:text-dark-gray text-sm">Chain Type</span>
          </div>

          {chain_types.map((item) => (
            <ChainOptions key={item.id} item={item} chainType={chainType} setChainType={setChainType} userFilter />
          ))}
        </div>
      )}
    </div>
  )
}
