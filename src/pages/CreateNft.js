import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout';
import Base from '../components/CreateNFT/index';
import { useDocumentTitle } from '../hooks/setDocumentTitle'

export default function CreateNft() {
    useDocumentTitle("Create NFT");
    return (
        <BaseLayout>
            <div className='px-[10%] mt-14'>
                <Base />
            </div>
        </BaseLayout>
    )
}
