import React from 'react'
import { Link } from 'react-router-dom'
import DribbleSVG from '../../svgs/dribble'
import TwitterSVG from '../../svgs/twitter'
import UploadSVG from '../../svgs/upload'
export default function ProfileBase({ profile }) {
  return (
    <div className="w-full flex flex-col md:flex-row  justify-center -mt-7 pb-10 relative z-20">
      <div className="px-6 md:px-0 md:w-10/12 flex justify-between">
        <div className="creator-info w-1/3 md:w-1/6 flex flex-col items-center ">
          <img src={profile.dp} alt={profile.name} className="w-32 h-32" />
        </div>

        <div className="flex flex-col md:flex-row w-5/6 px-[2%]">
          <div className="flex flex-col ml-3 md:ml-0 justify-center md:w-1/3">
            <div className="collection-name  mt-4 md:mt-0  flex items-center">
              <span className="font-gilroy font-bold text-dark-text dark:text-dark-white-color text-xl">
                {profile.name}
              </span>
              {profile.verified && (
                <img className="ml-4" src="/images/home/collections/cards/verified.svg" alt="verified" />
              )}
            </div>

            <div className="socials mt-3 flex items-center">
              <img className="w-4 h-4 hidden md:block" src="/images/home/collections/cards/binance.svg" alt="binance" />
              <span className="hidden md:block font-gilroy font-medium text-sm text-dark-text dark:text-dark-white-color ml-2 mr-5">
                {profile.contact_address}
              </span>
              <TwitterSVG className="w-4 h-4 mr-5" />
              <DribbleSVG className="w-4 h-4 mr-5" />
            </div>

            <div className="flex mt-3 md:hidden items-center">
              <img className="w-4 h-4" src="/images/home/collections/cards/binance.svg" alt="binance" />
              <span className="font-gilroy font-medium text-sm text-dark-text dark:text-dark-white-color ml-2 mr-5">
                {profile.contact_address}
              </span>
            </div>

            <div className="hidden md:flex mt-3 items-center">
              <Link to={'/settings'}>
                <button className="bg-white dark:bg-black-shade2-background text-[#807373] dark:text-dark-gray font-gilroy font-semibold text-sm px-4 py-3 rounded-md flex items-center">
                  <img className="w-4 h-4 mr-2" src="/images/user_profile/edit.svg" alt="edit" />
                  Edit Profile
                </button>
              </Link>

              <div className="ml-[10px] flex items-center justify-center bg-white dark:bg-black-shade2-background w-11 h-11 rounded-md">
                <UploadSVG className="fill-dark-text dark:fill-dark-white-color" />
              </div>

              <div className="ml-[10px] flex items-center justify-center bg-white dark:bg-black-shade2-background w-11 h-11 rounded-md">
                <div className="w-1 h-1 bg-dark-text dark:bg-dark-white-color rounded-full " />
                <div className="w-1 h-1 bg-dark-text dark:bg-dark-white-color rounded-full ml-[2px]" />
                <div className="w-1 h-1 bg-dark-text dark:bg-dark-white-color rounded-full ml-[2px]" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col justify-center md:w-2/3 pr-8 ml-6">
            <span className="font-gilroy font-medium text-light-text dark:text-dark-text-color">
              {profile.description}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex md:hidden justify-center items-center">
        <button className="bg-white dark:bg-black-shade2-background text-[#807373] dark:text-dark-gray font-gilroy font-semibold text-sm px-4 py-3 rounded-md flex items-center">
          <img className="w-4 h-4 mr-2" src="/images/user_profile/edit.svg" alt="edit" />
          Edit Profile
        </button>

        <div className="ml-[10px] flex items-center justify-center bg-white dark:bg-black-shade2-background w-11 h-11 rounded-md">
          <UploadSVG className="fill-dark-text dark:fill-dark-white-color" />
        </div>

        <div className="ml-[10px] flex items-center justify-center bg-white dark:bg-black-shade2-background w-11 h-11 rounded-md">
          <div className="w-1 h-1 bg-dark-text dark:bg-dark-white-color rounded-full " />
          <div className="w-1 h-1 bg-dark-text dark:bg-dark-white-color rounded-full ml-[2px]" />
          <div className="w-1 h-1 bg-dark-text dark:bg-dark-white-color rounded-full ml-[2px]" />
        </div>
      </div>
      <div className="flex md:hidden text-center mt-5 flex-col justify-center md:w-2/3 pr-8 ml-6">
        <span className="font-gilroy font-medium text-light-text dark:text-dark-text-color">{profile.description}</span>
      </div>
    </div>
  )
}
