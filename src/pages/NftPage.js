import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { NFTs } from '../data/cards';
import BaseLayout from '../components/BaseLayout/BaseLayout'
import NFT from '../components/NFT/NFT';

export default function NftPage() {
    const { id } = useParams();
    const [nft, setNft] = useState(null);


    useEffect(() => {
        const nft = NFTs.find(nft => nft.id === parseInt(id));
        setNft(nft);
    }, [id]);

    useEffect(() => {
        if (nft) {
            document.title = nft.name;
        }
    }, [nft]);

    return (
        <BaseLayout>
            {nft && <NFT nft={nft} />}
        </BaseLayout>
    )
}
