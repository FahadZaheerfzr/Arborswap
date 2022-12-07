import React, { useRef, useState } from 'react'
import HeadingTags from '../Common/HeadingTags'
import ImagePlaceholder from './Subcomponents/ImagePlaceholder';

export default function CreateCollections({ setVisibility }) {
    const [collection, setCollection] = useState({});
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const fileInput = useRef();

    const triggerFile = () => {
        fileInput.current.click();
    }

    const handleFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleSubmit = () => {
        setVisibility(false);
        setCollection({
            name: name,
            description: description,
            image: image,
        });
    }

    return (
        <div className='w-full md:w-1/2 '>
            <div className='bg-white'>
                <div className="flex items-center rounded-t-[10px] border border-opacity-50 border-[#D7D9DD] justify-between py-6 px-5 bg-white">
                    <span className='text-xl font-gilroy font-bold text-dark-text'>
                        Create a Collection
                    </span>

                    <div className="flex items-center cursor-pointer"
                        onClick={() => setVisibility(false)}>
                        <span className='text-sm font-gilroy font-semibold text-dark-text mr-2'>
                            Close
                        </span>
                        <div className='flex justify-center items-center bg-[#E56060] text-[#E56060] bg-opacity-10 rounded-full w-[15px] h-[15px]'>
                            &#10005;
                        </div>
                    </div>
                </div>

                <div className='mt-4 py-6 px-5'>
                    <HeadingTags name='Upload Profile Image' required />

                    <div className='flex items-center gap-5 mt-5'>
                        <ImagePlaceholder image={image}/>
                        <div className='w-full flex flex-col items-center text-center'>
                            <span className='font-gilroy font-medium text-[#807373]'>
                                JPG,PNG or GIF. <br /> 300 x 300 Size<br /> Recommended<br />
                                <span className='text-dark-text'>MAX 5MB</span>
                            </span>

                            <button className='bg-light-gray-shade mt-2 flex gap-2 py-[10px] px-5'
                                onClick={triggerFile}>
                                <img src="/images/create_nft/upload.svg" alt="upload" />
                                <span className='font-gilroy font-semibold text-sm text-[#807373]'>
                                    Upload File
                                </span>
                                <input type={'file'} className='hidden' accept='image/png, image/jpeg, image/gif, video/mp4, audio/mp3'
                                    onChange={handleFile} ref={fileInput} />
                            </button>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <HeadingTags name='Name' required />

                        <input className='w-full mt-5 px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='mt-10'>
                        <HeadingTags name='Description' />

                        <textarea className='w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-light-text font-semibold text-dark-text focus:outline-none border-[1.5px] rounded-lg border-light-text border-opacity-50' type={"text"} placeholder="Write something about the NFT"
                            onChange={(e) => setDescription(e.target.value)}>

                        </textarea>
                    </div>
                </div>
            </div>

            <button className='bg-primary-green text-white font-gilroy font-bold text-xl py-4 mt-4 rounded-lg w-full'
                onClick={handleSubmit}
            >
                Create Collection
            </button>
        </div>
    )
}
