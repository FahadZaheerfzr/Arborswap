import React from 'react'

export default function Dropdown({ collections, setCollections }) {
  const setCollectionsFalse = () => {
    setCollections(false)
  }

  const setCollectionsTrue = () => {
    setCollections(true)
  }

  return (
    <div className="dropdown flex flex-col bg-light-gray-shade dark:bg-black-shade4-background text-dark-text dark:text-dark-white-color">
      <div className="flex justify-between px-5 items-center py-5 w-56">
        <span className="font-gilroy font-bold text-sm ">Collections</span>

        <input className="accent-[#464754]" type={'checkbox'} checked={collections} onChange={setCollectionsTrue} />
      </div>

      <div className="flex justify-between px-5 items-center py-5 w-56">
        <span className="font-gilroy font-bold text-sm">NFTs</span>

        <input className="accent-[#464754]" type={'checkbox'} checked={!collections} onChange={setCollectionsFalse} />
      </div>
    </div>
  )
}
