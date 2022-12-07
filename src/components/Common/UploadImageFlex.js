import React, { useRef } from 'react'
import ImagePlaceholder from '../CreateNFT/Subcomponents/ImagePlaceholder'

export default function UploadImageFlex({ image, setImage }) {
    const fileInput = useRef();

    const triggerFile = () => {
        fileInput.current.click();
    }

    const handleFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <div className='flex items-center gap-5 mt-5'>
            <ImagePlaceholder image={image} />
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
    )
}
