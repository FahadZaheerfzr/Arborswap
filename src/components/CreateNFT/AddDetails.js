import React, { useState } from 'react'

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

export default function AddDetails() {
    const [collection, setCollection] = useState(1);
    return (
        <div className='mt-9'>
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

                <div className='w-full flex mt-5'>
                    {collections.map((item) => (
                        <div className='w-1/2'>
                            <div className='flex items-center justify-between'>
                                <img className='w-12 h-12' src={item.image} alt="collection" />
                                <div className='flex flex-col ml-4'>
                                    <div className='flex items-center gap-2'>
                                        <span className='font-gilroy font-bold text-dark-text'>
                                            {item.name}
                                        </span>
                                        <img src="/images/home/collections/cards/verified.svg" alt="verified" />
                                    </div>
                                    <span className='font-gilroy font-medium text-sm text-light-text'>
                                        {item.items.toLocaleString()} Items
                                    </span>


                                </div>
                                <div className='border-[1.5px] h-6 w-6 rounded-full border-light-text border-opacity-50'>

                                </div>
                            </div>
                        </div>
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



        </div>
    )
}
