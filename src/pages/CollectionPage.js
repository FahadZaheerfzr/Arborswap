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
        console.log(items);
    }, [collection]);

    return (
        <div className='mb-10'>
            <ExtendedLayout>
                <BaseLayout>
                    {collection &&
                        <Collection collection={collection} />
                    }
                </BaseLayout>

                <FilterBar item={item} setItem={setItem} setBigGrid={setBigGrid} bigGrid={bigGrid} />


                {item ?
                    nfts &&
                    <CollectionItems items={nfts} bigGrid={bigGrid} />
                    : activities &&
                    <div className='mt-5'>
                        {activities.map((activity) => (
                            <CollectionActivity activity={activity} />
                        ))}
                    </div>
                }
            </ExtendedLayout>
        </div>
    )
}
