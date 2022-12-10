import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Collections, NFTs, Activities } from '../data/cards'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Collection from '../components/Collection/Collection'
import ExtendedLayout from '../components/ExtendedLayout/ExtendedLayout'
import FilterBar from '../components/Collection/FilterBar'
import CollectionItems from '../components/Collection/CollectionItems'
import CollectionActivity from '../components/Collection/CollectionActivity'
import { SidebarContext } from '../context/SidebarContext/GlobalProvider'

export default function CollectionPage() {
  const { id } = useParams()
  const [collection, setCollection] = useState(null)
  const [item, setItem] = useState(true)
  const [nfts, setNFTs] = useState([])
  const [bigGrid, setBigGrid] = useState(false)
  const [activities, setActivities] = useState([])
  const { showSidebar } = useContext(SidebarContext)
  const [filterDropdown, setFilterDropdown] = useState(false)

  useEffect(() => {
    const collection = Collections.find((collection) => collection.id === parseInt(id))
    setCollection(collection)
  }, [id])

  useEffect(() => {
    let items
    if (collection) {
      items = NFTs.filter((nft) => collection.nfts.includes(nft.id))
      setNFTs(items)

      const activities = Activities.filter((activity) => activity.collection_id === collection.id)
      setActivities(activities)
      document.title = collection.name
    }
  }, [collection])

  return (
    <div className="pb-10">
      <ExtendedLayout>
        <BaseLayout>{collection && <Collection collection={collection} />}</BaseLayout>
        <div className="w-full relative md:mb-12 z-10">
          <div className="md:h-[200px] md:absolute w-full">
            <FilterBar
              filterDropdown={filterDropdown}
              setFilterDropdown={setFilterDropdown}
              item={item}
              setItem={setItem}
              setBigGrid={setBigGrid}
              bigGrid={bigGrid}
            />
          </div>
        </div>

        {item
          ? nfts &&
            (showSidebar || bigGrid ? (
              <BaseLayout noSidebar noTopbar>
                <div className="w-full flex justify-center">
                  <CollectionItems items={NFTs} bigGrid={bigGrid} />
                </div>
              </BaseLayout>
            ) : (
              <div className="w-full flex pl-[110px] px-4">
                <CollectionItems items={NFTs} bigGrid={bigGrid} fullWidth filterDropdown={filterDropdown} />
              </div>
            ))
          : activities && (
              <div className={`mt-5 relative ${filterDropdown ? 'ml-[170px]' : ''} `}>
                {activities.map((activity) => (
                  <CollectionActivity activity={activity} />
                ))}
              </div>
            )}
      </ExtendedLayout>
    </div>
  )
}
