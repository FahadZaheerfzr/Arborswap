import React from 'react'

export default function ImagePlaceholder({ image }) {
    if (image) {
        return (
            <img className='w-40 h-40' src={image} alt='placeholder' />
        )
    }
    return (
        <div className='px-6 py-9 md:px-14 md:py-14 flex items-center justify-center border-2 border-opacity-50 border-light-text border-dashed rounded-xl'>
            <img src='/images/create_nft/image-logo.svg' alt='placeholder' />
        </div>
    )
}
