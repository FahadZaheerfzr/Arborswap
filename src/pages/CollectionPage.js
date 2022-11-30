import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Collections } from '../data/cards';
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Collection from '../components/Collection/Collection';

export default function CollectionPage() {
    const { id } = useParams();
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        const collection = Collections.find((collection) => collection.id === parseInt(id));
        setCollection(collection);


    }, [id]);

    return (
        <BaseLayout>
            {collection && 
                <Collection collection={collection}/>
            }
        </BaseLayout>
    )
}
