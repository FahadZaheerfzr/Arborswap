import React, { useEffect, useState } from 'react'
import AddDetails from './AddDetails'
import CreateCollections from './CreateCollections'
import Preferences from './Preferences'
import Preview from './Preview'

const panel_items = [
  {
    id: 1,
    name: 'Preferences',
  },
  {
    id: 2,
    name: 'Add Details',
  },
  {
    id: 3,
    name: 'Preview',
  },
]

export default function Base() {
  const [active, setActive] = useState('Preferences')
  const [nftType, setNftType] = useState(0)
  const [nftChainType, setNftChainType] = useState(0)
  const [nftObject, setNftObject] = useState({})
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [visible])

  return (
    <div className="">
      {visible && (
        <div className="fixed top-[5%] w-full md:w-3/4 flex bg-transparent backdrop-blur-md justify-center z-20 h-full">
          <CreateCollections setVisibility={setVisible} />
        </div>
      )}
      <div className="flex bg-light-gray-shade dark:bg-dark-background flex-col md:flex-row w-full">
        <div className="panel flex py-4 md:py-0 justify-around md:block md:pl-9 md:pr-[5%] rounded-l-[10px] bg-light-gray-shade dark:bg-black-shade3-background">
          {panel_items.map((item) => (
            <div key={item.id} className={`panel-item md:mt-9 flex items-center`}>
              {item.name === active && <div className={`w-2 h-2 rounded-full bg-primary-green mr-[10px]`} />}
              <span
                className={`text-sm font-gilroy font-semibold ${
                  active === item.name
                    ? 'text-dark-text dark:text-dark-white-color'
                    : 'text-light-text dark:text-dark-text-color'
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="panel-content bg-white dark:bg-black-shade2-background rounded-r-[10px] px-4 md:px-9 md:w-2/3">
          {active === 'Preferences' && (
            <Preferences
              setActive={setActive}
              type={nftType}
              setType={setNftType}
              chainType={nftChainType}
              setChainType={setNftChainType}
            />
          )}
          {active === 'Add Details' && (
            <AddDetails
              setActive={setActive}
              nftType={nftType}
              nft={nftObject}
              setNft={setNftObject}
              setVisible={setVisible}
            />
          )}
          {active === 'Preview' && (
            <Preview nft={nftObject} nftType={nftType} nftChainType={nftChainType} setActive={setActive} />
          )}
        </div>
      </div>
    </div>
  )
}
