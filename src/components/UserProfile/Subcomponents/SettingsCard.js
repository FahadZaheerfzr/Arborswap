import React, { useState } from 'react'
import DribbleSVG from '../../../svgs/dribble';
import TwitterSVG from '../../../svgs/twitter';
import HeadingTags from '../../Common/HeadingTags';
import UploadImage from '../../Common/UploadImage';
import UploadImageFlex from '../../Common/UploadImageFlex';

export default function SettingsCard() {
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    return (
        <div className='w-full p-5 md:p-9 bg-white dark:bg-black-shade2-background rounded-[10px] '>
            <HeadingTags name={"Profile Image"} />
            <UploadImageFlex image={profileImage} setImage={setProfileImage} />

            <div className='mt-10'>
                <HeadingTags name={"Cover Image"} />
                <UploadImage image={coverImage} setImage={setCoverImage} />
            </div>

            <div className='mt-10'>
                <HeadingTags name={"Name"} required />
                <div className='mt-5'>
                    <input className='bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Enter NFT Name" />
                </div>
            </div>

            <div className='mt-10'>
                <HeadingTags name={"Bio"} required />
                <div className='mt-5'>
                    <textarea className='bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Write something about yourself" />                </div>
            </div>

            <div className='mt-10'>
                <HeadingTags name={"Link your socials"} required />
                <div className='mt-5 flex items-center'>
                    <DribbleSVG className="fill-dark-text w-5 h-5 absolute z-10 ml-5" />
                    <input className='bg-transparent w-full pl-14 pr-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Enter Website Url." />
                </div>

                <div className='mt-5 flex items-center'>
                    <TwitterSVG className="fill-dark-text w-5 h-5 absolute z-10 ml-5" />
                    <input className='bg-transparent w-full pl-14 pr-8 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Enter twitter Username" />
                </div>
                <div className='-mt-7 mb-9 flex items-center justify-end mr-4'>
                    <span className='absolute font-gilroy text-dark-text dark:text-dark-white-color font-semibold'>Link</span>
                </div>
            </div>

            <div className='mt-12'>
                <button className='bg-primary-green text-white font-gilroy font-bold text-xl py-4 mt-4 rounded-lg w-full'>
                    Save Changes
                </button>
            </div>
        </div>
    )
}
