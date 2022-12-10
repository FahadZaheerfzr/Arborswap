import React from 'react'
import PreviewDetails from './Subcomponents/PreviewDetails'
import PreviewHeader from './Subcomponents/PreviewHeader'
import { chain_types, Collections } from '../../data/cards'
import BackArrowSVG from '../../svgs/back_arrow'

export default function Preview({ nft, nftType, nftChainType, setActive }) {
  return (
    <div className="preview">
      <div className="flex items-start w-full mt-9">
        <img className="w-32 h-32 mr-5" src={nft.image} alt={nft.name} />

        <div className="nft-info flex flex-col px-2">
          <span className="text-xl font-gilroy font-bold text-dark-text dark:text-dark-white-color">{nft.name}</span>
          <span className="mt-2 md:mt-0 font-gilroy font-medium text-[#807373] dark:text-dark-gray">
            {nft.description}
          </span>
        </div>
      </div>

      <PreviewHeader heading="NFT Properties" />

      {nft.properties &&
        nft.properties.map((property, index) => <PreviewDetails name={property.name} value={property.value} />)}

      <PreviewHeader heading="NFT Details" />

      {nftType === 1 && nft.copies && <PreviewDetails name="Number of Copies" value={nft.copies} />}

      <PreviewDetails name="Collection" value={Collections[nft.collection].name} verified={true} />

      <PreviewDetails name="Chain Type" icon={chain_types[nftChainType].icon} value={chain_types[nftChainType].name} />

      <PreviewDetails name="Contract Address" value={'0xc19....2dde'} />

      <PreviewDetails name="Royalties" value={nft.royalties} />

      <div className="mt-10">
        <div className="flex justify-end items-center mb-10">
          <button
            className="bg-white dark:bg-transparent mr-5 flex items-center gap-2 py-[10px] px-5"
            onClick={() => setActive('Add Details')}
          >
            <BackArrowSVG className="fill-dark-text dark:fill-dark-white-color" />
            <span className="font-gilroy font-medium text-sm text-dark-text dark:text-dark-white-color">Go Back</span>
          </button>

          <button className="bg-primary-green disabled:bg-light-text text-white font-gilroy font-bold px-8 py-3 rounded-md">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}
