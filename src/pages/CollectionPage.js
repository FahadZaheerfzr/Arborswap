import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Collections, NFTs, Activities } from '../data/cards';
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Collection from '../components/Collection/Collection';
import ExtendedLayout from '../components/ExtendedLayout/ExtendedLayout';
import FilterBar from '../components/Collection/FilterBar';
import CollectionItems from '../components/Collection/CollectionItems';
import CollectionActivity from '../components/Collection/CollectionActivity';

export default function CollectionPage() {
    const { id } = useParams();
    const [collection, setCollection] = useState(null);
    const [item, setItem] = useState(true);
    const [nfts, setNFTs] = useState([]);
    const [bigGrid, setBigGrid] = useState(false);
    const [activities, setActivities] = useState([]);


    useEffect(() => {
        const collection = Collections.find((collection) => collection.id === parseInt(id));
        setCollection(collection);
    }, [id]);

    useEffect(() => {
        let items;
        if (collection) {
            items = NFTs.filter((nft) => collection.nfts.includes(nft.id));
            setNFTs(items);

            const activities = Activities.filter((activity) => activity.collection_id === collection.id);
            setActivities(activities);
            document.title = collection.name;
        }
    }, [collection]);

    return (
        <div className='pb-10'>
            <ExtendedLayout>
                <BaseLayout>
                    {collection &&
                        <Collection collection={collection} />
                    }
                </BaseLayout>

                <div className='w-full relative z-10'>
                    <FilterBar item={item} setItem={setItem} setBigGrid={setBigGrid} bigGrid={bigGrid} />
                </div>

                {item ?
                    nfts &&
                    <BaseLayout noSidebar noTopbar>
                        <div className='w-full flex justify-center'>
                            <CollectionItems items={NFTs} bigGrid={bigGrid} />
                        </div>
                    </BaseLayout>
                    : activities &&
                    <div className='mt-5 relative '>
                        {activities.map((activity) => (
                            <CollectionActivity activity={activity} />
                        ))}
                    </div>
                }
            </ExtendedLayout>
        </div>
    )
}
