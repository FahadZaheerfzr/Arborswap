import React, { useRef } from 'react'

export default function UploadImage({image, setImage}) {
    const fileInput = useRef();

    const triggerFile = () => {
        fileInput.current.click();
    }

    const handleFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const removeFile = () => {
        setImage(null);
    }

    if (image) {
        return (
            <div className='mt-4 flex flex-col text-center items-center justify-center border-2 border-dashed border-light-text border-opacity-50 rounded-xl py-4'>
                <div className=' flex justify-end w-full px-5'>
                    <div className='w-11 h-11 z-10 cursor-pointer flex items-center justify-center rounded-md bg-light-gray-shade'
                        onClick={removeFile}>
                        <img src="/images/create_nft/close-circle.svg" alt="remove uploaded file" />
                    </div>
                </div>
                <div className='flex -mt-11 justify-center w-full px-5'>
                    <img src={image} alt={'uploaded'} />
                </div>
            </div>
        )
    }

    return (
        <div className='mt-4 flex flex-col text-center items-center justify-center border-2 border-dashed border-light-text border-opacity-50 rounded-xl h-56'>
            <span className='font-gilroy font-medium text-[#807373]'>
                JPG,PNG,GIF,MP3 OR MP4<br />
                <span className='text-dark-text'>MAX 100MB</span>
            </span>

            <button className='bg-light-gray-shade mt-10 flex gap-2 py-[10px] px-5'
                onClick={triggerFile}>
                <img src="/images/create_nft/upload.svg" alt="upload" />
                <span className='font-gilroy font-semibold text-sm text-[#807373]'>
                    Upload File
                </span>
                <input type={'file'} className='hidden' accept='image/png, image/jpeg, image/gif, video/mp4, audio/mp3'
                    onChange={handleFile} ref={fileInput} />
            </button>

        </div>
    )
}
