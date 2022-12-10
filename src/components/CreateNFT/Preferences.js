import React, { useState } from 'react'
import ChainOptions from './Subcomponents/ChainOptions'
import TypeOptions from './Subcomponents/TypeOptions'
import { chain_types } from '../../data/cards'

const NFT_types = [
  {
    id: 0,
    name: 'Single Edition',
    icon: '/images/create_nft/single_edition.svg',
    description: 'Choose if you’re willing to create a one of one item.',
  },
  {
    id: 1,
    name: 'Multiple Edition',
    icon: '/images/create_nft/multiple_edition.svg',
    description: 'Create a limited copies of an item to be shared among many users.',
  },
  {
    id: 2,
    name: 'Multiples',
    icon: '/images/create_nft/multiples.svg',
    description: 'Create one of one of an item by just uploading a zip file containing the item and its metadata.',
  },
]

export default function Preferences({ setActive, type, setType, chainType, setChainType }) {
  const [showChainType, setShowChainType] = useState(false)

  const toggleChainType = () => {
    setShowChainType(!showChainType)
  }

  return (
    <div className="mt-9">
      <span className="font-gilroy font-semibold text-[#807373] dark:text-dark-gray">
        Chain Type
        <span className="text-[#E56060]">&nbsp;*</span>
      </span>

      <div className="chain-select">
        <div className="border-b border-dashed py-5 border-light-text border-opacity-30">
          <div className="chain-item flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-10 h-10" src={chain_types[chainType].icon} alt={chain_types[chainType].name} />

              <div className="ml-4 flex flex-col">
                <span className="font-gilroy font-semibold text-dark-text dark:text-dark-white-color">
                  {chain_types[chainType].name}
                </span>
                <span className="font-gilroy font-medium text-light-text dark:text-dark-text-color text-sm">
                  Est. gas fee ~{' '}
                  <span className="text-[#807373] dark:text-dark-gray">${chain_types[chainType].est_gas_fee}</span>
                </span>
              </div>
            </div>

            <div
              className="flex items-center rounded-full w-8 h-8 justify-center cursor-pointer bg-[#FAF8F5]"
              onClick={toggleChainType}
            >
              <img
                className={`${showChainType ? 'rotate-180' : 'rotate-0'} duration-300 ease-in-out`}
                src="/images/home/arrow-down.svg"
                alt="arrow down"
              />
            </div>
          </div>
        </div>
        {showChainType &&
          chain_types.map((item) => (
            <ChainOptions key={item.id} item={item} chainType={chainType} setChainType={setChainType} />
          ))}
      </div>

      <div className="mt-10">
        <span className="font-gilroy font-semibold text-[#807373] dark:text-dark-gray">
          Choose NFT Type
          <span className="text-[#E56060]">&nbsp;*</span>
        </span>

        <div className="mb-10 mt-2">
          {NFT_types.map((item) => (
            <TypeOptions key={item.id} item={item} type={type} setType={setType} />
          ))}
        </div>

        <div className="flex justify-end items-center mb-10">
          <button
            className="bg-primary-green text-white font-gilroy font-bold px-8 py-3 rounded-md"
            onClick={() => setActive('Add Details')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
