import React, { useEffect, useState } from 'react'
import { ActivitiesNFT, NFT_info } from '../../data/cards';
import Details from './SubComponents/Details';

export default function NftActivity({ nft }) {
    const [activities, setActivities] = useState();
    const [activeTab, setActiveTab] = useState("activity");
    const [info, setInfo] = useState();

    useEffect(() => {
        const activities = ActivitiesNFT.filter((activity) => activity.nft_id === nft.id);
        setActivities(activities);

        const info = NFT_info.filter((info) => info.nft_id === nft.id);
        setInfo(info);
    }, [nft.id]);

    return (
        <div className='w-full flex flex-col justify-center bg-white rounded-[20px] mt-2 md:mt-10'>
            <div className='h-12 mt-2 flex w-full justify-around'>
                <div className={` h-full w-14 md:w-[84px] flex items-center justify-center ml-4 ${activeTab === "info" ? "border-b-2 border-primary-green border-opacity-50" : null}`}
                    onClick={() => setActiveTab("info")}>
                    <span className={`font-gilroy cursor-pointer font-bold ${activeTab === "info" ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                        Info
                    </span>
                </div>

                <div className={` h-full w-14 md:w-[84px] flex items-center justify-center ml-4 ${activeTab === "bids" ? "border-b-2 border-primary-green border-opacity-50" : null}`}
                    onClick={() => setActiveTab("bids")}>
                    <span className={`font-gilroy cursor-pointer font-bold ${activeTab === "bids" ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                        Bids
                    </span>
                </div>

                <div className={` h-full w-14 md:w-[84px] flex items-center justify-center ml-4 ${activeTab === "activity" ? "border-b-2 border-primary-green border-opacity-50" : null}`}
                    onClick={() => setActiveTab("activity")}>
                    <span className={`font-gilroy cursor-pointer font-bold ${activeTab === "activity" ? "text-primary-green" : "text-light-text hover:text-primary-green"}`}>
                        Activity
                    </span>
                </div>

            </div>

            <div className='mt-4 mb-4'>
                {activities && (activeTab === "activity" || activeTab === "bids") && activities.map((activity, index) => (
                    <div key={index} className='flex items-center border-b border-dashed border-opacity-30 border-[#767779] justify-between px-4 py-5'>
                        <div className='flex items-center'>
                            <img src={activity.by_icon} alt={activity.by} />

                            <div className='ml-4'>
                                <div className='flex items-center'>
                                    <span className='font-gilroy text-sm font-bold  text-dark-text'>
                                        {activity.by}
                                    </span>
                                    <span className='font-gilroy font-medium text-sm text-light-text ml-2'>
                                        {activity.action}
                                    </span>
                                </div>

                                <div className='flex items-center'>
                                    <span className='font-gilroy font-medium text-xs text-light-text'>
                                        {activity.time}
                                    </span>
                                    <img src='/images/collection/activity/arrow-right.svg' alt='arrow-right' className='ml-2' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-gilroy font-bold text-sm text-dark-text'>
                                {activity.ethereum} ETH
                            </span>

                            <span className='font-gilroy font-medium text-xs text-light-text mt-[7px]'>
                                ${activity.dollar.toLocaleString()}
                            </span>
                        </div>
                    </div>
                ))}
                {info && activeTab === "info" && (
                    <div className='flex flex-col px-5 py-5'>
                        <span className='font-gilroy font-bold text-[#807373]'>
                            Properties
                        </span>

                        <div className='grid grid-cols-3 gap-5 mt-5'>
                            {info.map((info) => (
                                info.info.map((my_info, index) => (
                                    <div key={index} className='flex flex-col bg-[#FAF8F5] rounded-md p-[14px]'>
                                        <span className='text-sm font-medium font-gilroy text-light-text'>
                                            {my_info.name}
                                        </span>

                                        <span className='mt-[6px] font-gilroy text-sm font-semibold text-[#807373]'>
                                            {my_info.type}
                                        </span>

                                        <span className='mt-[6px] text-sm font-medium font-gilroy text-[#C89211]'>
                                            {my_info.rarity}
                                        </span>
                                    </div>
                                ))
                            ))}
                        </div>

                        <span className='mt-10 font-gilroy font-bold text-[#807373]'>
                            Details
                        </span>


                        <Details detail={"Contract Address"} value={nft.contract_address} />
                        <Details detail={"Token ID"} value={nft.token_id} />
                        <Details detail={"Token Standard"} value={nft.token_standard} />
                        <Details detail={"Chain Type"} value={nft.chain_type} img={nft.chain_image} />
                        <Details detail={"Creator Royalties"} value={nft.creator_royalty} />
                    </div>

                )}

            </div>
        </div>
    )
}
