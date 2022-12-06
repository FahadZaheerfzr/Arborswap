import React from 'react'

export default function ProfileBase({ profile }) {
    
    return (
        <div className='w-full flex  justify-center -mt-7 mb-10 relative z-20'>
            <div className='w-10/12 flex justify-between'>
                <div className='creator-info w-1/6 flex flex-col items-center '>
                    <img src={profile.dp} alt={profile.name} className="w-32 h-32" />
                </div>

                <div className='flex w-5/6 px-[2%]'>
                    <div className='flex flex-col justify-center w-1/3'>
                        <div className='collection-name mt-2 md:mt-0  flex items-center'>
                            <span className='font-gilroy font-bold text-[#464754] text-xl'>
                                {profile.name}
                            </span>
                            {profile.verified &&
                                <img className='ml-4' src='/images/home/collections/cards/verified.svg' alt="verified" />
                            }
                        </div>

                        <div className='socials mt-3 flex items-center'>
                            <img className='w-4 h-4' src='/images/home/collections/cards/binance.svg' alt="binance" />
                            <span className='font-gilroy font-medium text-sm text-dark-text ml-2 mr-5'>
                                {profile.contact_address}
                            </span>
                            <img className='w-4 h-4 mr-5' src='/images/Sidebar/socials/twitter.svg' alt="twitter" />
                            <img className='w-4 h-4 mr-5' src='/images/Sidebar/socials/dribbble.svg' alt="dribbble" />
                        </div>

                        <div className='mt-3 flex items-center'>
                            <button className='bg-white text-[#807373] font-gilroy font-semibold text-sm px-4 py-3 rounded-md flex items-center'>
                                <img className='w-4 h-4 mr-2' src='/images/user_profile/edit.svg' alt="edit" />
                                Edit Profile
                            </button>

                            <div className='ml-[10px] flex items-center justify-center bg-white w-11 h-11 rounded-md'>
                                <img src='/images/create_nft/upload.svg' alt="upload" className='' />
                            </div>

                            <div className='ml-[10px] flex items-center justify-center bg-white w-11 h-11 rounded-md'>
                                <div className='w-1 h-1 bg-dark-text rounded-full ' />
                                <div className='w-1 h-1 bg-dark-text rounded-full ml-[2px]' />
                                <div className='w-1 h-1 bg-dark-text rounded-full ml-[2px]' />
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col justify-center w-2/3 pr-8 ml-6'>
                        <span className='font-gilroy font-medium text-light-text'>
                            {profile.description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
