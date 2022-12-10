import React, { useState } from 'react'
import UploadImage from '../Common/UploadImage'
import CollectionComponent from './Subcomponents/CollectionComponent'
import HeadingTags from '../Common/HeadingTags'
import BackArrowSVG from '../../svgs/back_arrow'

const collections = [
  {
    id: 1,
    name: 'Okay Bears',
    verified: true,
    items: 10000,
    image: '/images/home/collections/cards/creator_logo.svg',
  },
  {
    id: 2,
    name: 'Cubex',
    verified: true,
    items: 2414,
    image: '/images/home/collections/cards/creator_logo.svg',
  },
]

export default function AddDetails({ setActive, nftType, nft, setNft, setVisible }) {
  const [collection, setCollection] = useState(1)
  const [properties, updateProperties] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [royalties, setRoyalties] = useState('')
  const [copies, setCopies] = useState('')

  const addProperty = () => {
    updateProperties([...properties, properties.length + 1])
  }

  const updateInput = () => {
    //addProperty();
  }

  const updateNft = () => {
    setNft({
      ...nft,
      name: name,
      description: description,
      image: image,
      royalties: royalties,
      copies: copies,
      collection: collection,
    })
  }

  const handleSubmit = () => {
    updateNft()
    setActive('Preview')
  }

  return (
    <div className="mt-9 mb-9">
      <HeadingTags name={'Upload NFT File'} required />

      <UploadImage image={image} setImage={setImage} multiples={nftType === 2} />

      {nftType === 2 ? (
        <div className="mt-10 bg-light-gray-shade dark:bg-dark-background bg-opacity-50 py-24 rounded-xl flex justify-center text-center">
          <span className="font-gilroy font-medium text-[#807373] dark:text-dark-gray">
            Your item name and metadata extracted <br />
            from the .zip file shows here
          </span>
        </div>
      ) : (
        <div className="mt-10">
          <HeadingTags name={'Name'} required />

          <div className="w-full mt-5">
            <input
              className="bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50"
              type={'text'}
              placeholder="Enter NFT Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="mt-10">
        <HeadingTags name={'Description'} />

        <div className="w-full mt-5">
          <textarea
            className="bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50"
            type={'text'}
            placeholder="Write something about the NFT"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <HeadingTags name={'Choose Collection'} required />

          <div className="flex items-center cursor-pointer" onClick={() => setVisible(true)}>
            <div className="flex   text-primary-green w-4 h-4 text-xs rounded-full justify-center bg-primary-green bg-opacity-40">
              <span className="relative -top-[1px]">+</span>
            </div>
            <span className="font-gilroy font-semibold text-sm ml-2 text-[#807373] dark:text-dark-gray">
              Create New
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 mt-5 gap-5">
          {collections.map((item) => (
            <CollectionComponent key={item.id} item={item} collection={collection} setCollection={setCollection} />
          ))}
        </div>
      </div>

      {nftType === 1 ? (
        <div className="mt-10 flex w-full gap-5 items-center">
          <div className="w-full">
            <HeadingTags name={'Royalties'} required />

            <div className="w-full mt-5">
              <input
                className="bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50"
                type={'text'}
                placeholder="E.g. 10%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full ">
            <HeadingTags name={'Number of Copies'} required />

            <div className="mt-5">
              <input
                className="bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50"
                type={'text'}
                placeholder="E.g. 100"
                onChange={(e) => setCopies(e.target.value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <HeadingTags name={'Royalties'} required />

          <div className="w-full mt-5">
            <input
              className="bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50"
              type={'text'}
              placeholder="E.g. 10%"
              onChange={(e) => setRoyalties(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="mt-10">
        <HeadingTags name={'Properties'} required />

        {properties.map((ind) => (
          <div key={ind} className="w-full mt-5 flex gap-5">
            <div className="w-1/2">
              <input
                className="bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50"
                type={'text'}
                placeholder="E.g. Size"
              />
            </div>
            <div className="w-1/2">
              <input
                className="bg-transparent w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text dark:text-dark-white-color focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50"
                type={'text'}
                placeholder="E.g. Large"
                onChange={updateInput}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-end items-center mb-10">
          <button
            className="bg-white dark:bg-transparent mr-5 flex items-center gap-2 py-[10px] px-5"
            onClick={() => setActive('Preferences')}
          >
            <BackArrowSVG className="fill-dark-text dark:fill-dark-white-color" />
            <span className="font-gilroy font-medium text-sm text-dark-text dark:text-dark-white-color">Go Back</span>
          </button>

          <button
            className="bg-primary-green disabled:bg-light-text text-white font-gilroy font-bold px-8 py-3 rounded-md"
            disabled={name === '' || royalties === '' || image === '' ? true : false}
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
