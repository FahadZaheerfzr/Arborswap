import React, { useContext, useState } from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import CollectionItems from '../components/Collection/CollectionItems'
import FilterBar from '../components/Collection/FilterBar'
import CoverImage from '../components/Common/CoverImage'
import ExtendedLayout from '../components/ExtendedLayout/ExtendedLayout'
import ProfileBase from '../components/UserProfile'
import { SidebarContext } from '../context/SidebarContext/GlobalProvider'
import { NFTs } from '../data/cards'

const profile = {
    id: 1,
    name: 'Three Dee',
    image: '/images/user_profile/cover.svg',
    dp: '/images/nft/creator.svg',
    verified: true,
    description: "A deflationary collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
    contact_address: "0xc19....2dde",

}

export default function ProfilePage() {
    const { showSidebar } = useContext(SidebarContext);
    const [active, setActive] = useState(1);
    const [bigGrid, setBigGrid] = useState(false);
    return (
        <div className='pb-10'>
            <ExtendedLayout>
                <BaseLayout>
                    <CoverImage full_image={profile.image} name={profile.name} />

                    <ProfileBase profile={profile} />
                </BaseLayout>

            </ExtendedLayout>
            <div className='w-full z-10'>
                <FilterBar item={active} setItem={setActive} setBigGrid={setBigGrid} bigGrid={bigGrid} profile />
            </div>

            {
                showSidebar || bigGrid ?
                    <BaseLayout noSidebar noTopbar>
                        <div className='w-full flex justify-center'>
                            <CollectionItems items={NFTs} bigGrid={bigGrid} />
                        </div>
                    </BaseLayout> 
                    :
                    <div className='w-full flex pl-[110px] px-4'>
                        <CollectionItems items={NFTs} bigGrid={bigGrid} fullWidth />
                    </div>
            }

        </div>
    )
}
