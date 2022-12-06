import React, { useState } from 'react'
import CollectionComponent from './Subcomponents/CollectionComponent';

const collections = [
    {
        id: 1,
        name: 'Okay Bears',
        verified: true,
        items: 10000,
        image: '/images/home/collections/cards/creator_logo.svg'
    },
    {
        id: 2,
        name: 'Cubex',
        verified: true,
        items: 2414,
        image: '/images/home/collections/cards/creator_logo.svg'
    },
]

export default function AddDetails({ setActive }) {
    const [collection, setCollection] = useState(1);
    const [properties, updateProperties] = useState([1,]);

    const addProperty = () => {
        updateProperties([...properties, properties.length + 1])
    }

    const updateInput = () => {
        //addProperty();
    }

    return (
        <div className='mt-9 mb-9'>
            <span className='font-gilroy font-semibold text-[#807373]'>
                Upload NFT File
                <span className='text-[#E56060]'>&nbsp;*</span>
            </span>


            <div className='mt-4 flex flex-col text-center items-center justify-center border-2 border-dashed border-light-text border-opacity-50 rounded-xl h-56'>
                <span className='font-gilroy font-medium text-[#807373]'>
                    JPG,PNG,GIF,MP3 OR MP4<br />
                    <span className='text-dark-text'>MAX 100MB</span>
                </span>

                <button className='bg-light-gray-shade mt-10 flex gap-2 py-[10px] px-5'>
                    <img src="/images/create_nft/upload.svg" alt="upload" />
                    <span className='font-gilroy font-semibold text-sm text-[#807373]'>
                        Upload File
                    </span>
                </button>
            </div>


            <div className='mt-10'>
                <span className='font-gilroy font-semibold text-[#807373]'>
                    Name
                    <span className='text-[#E56060]'>&nbsp;*</span>
                </span>

                <div className='w-full mt-5'>
                    <input className='w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Enter NFT Name" />
                </div>
            </div>

            <div className='mt-10'>
                <span className='font-gilroy font-semibold text-[#807373]'>
                    Description
                </span>

                <div className='w-full mt-5'>
                    <textarea className='w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Write something about the NFT" ></textarea>
                </div>
            </div>

            <div className='mt-10'>
                <div className='flex items-center justify-between'>
                    <span className='font-gilroy font-semibold text-[#807373]'>
                        Choose Collection
                        <span className='text-[#E56060]'>&nbsp;*</span>
                    </span>

                    <div className='flex items-center'>
                        <div className='flex   text-primary-green w-4 h-4 text-xs rounded-full justify-center bg-primary-green bg-opacity-40'>
                            <span className='relative -top-[1px]'>+</span>
                        </div>
                        <span className='font-gilroy font-semibold text-sm ml-2 text-[#807373]'>
                            Create New
                        </span>
                    </div>
                </div>

                <div className='w-full grid grid-cols-2 mt-5 gap-5'>
                    {collections.map((item) => (
                        <CollectionComponent key={item.id} item={item} collection={collection} setCollection={setCollection} />
                    ))}
                </div>
            </div>

            <div className='mt-10'>
                <span className='font-gilroy font-semibold text-[#807373]'>
                    Royalties
                    <span className='text-[#E56060]'>&nbsp;*</span>
                </span>

                <div className='w-full mt-5'>
                    <input className='w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Enter NFT Name" />
                </div>
            </div>

            <div className='mt-10'>
                <span className='font-gilroy font-semibold text-[#807373]'>
                    Properties
                    <span className='text-[#E56060]'>&nbsp;*</span>
                </span>

                {properties.map((ind) => (
                    <div key={ind} className='w-full mt-5 flex gap-5'>
                        <div className='w-1/2' >
                            <input className='w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="E.g. Size" 
                            />
                        </div>
                        <div className='w-1/2'>
                            <input className='w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="E.g. Large" 
                                onChange={updateInput}
                            />
                        </div>
                    </div>
                ))}

            </div>

            <div className='mt-10'>
                <div className='flex justify-end items-center mb-10'>
                    <button className='bg-white mr-5 flex items-center gap-2 py-[10px] px-5'
                        onClick={() => setActive("Preferences")}>
                        <img src='/images/create_nft/arrow-right.svg' alt='return' />
                        <span className='font-gilroy font-medium text-sm text-dark-text'>
                            Go Back
                        </span>
                    </button>

                    <button className='bg-primary-green disabled:bg-light-text text-white font-gilroy font-bold px-8 py-3 rounded-md' disabled
                        onClick={() => setActive("Preview")}>
                        Next
                    </button>
                </div>
            </div>



        </div>
    )
}
