import React from 'react'

export default function HeadingTags({name, required}) {
    return (
        <span className='font-gilroy font-semibold text-[#807373]'>
            {name}
            {required &&(
            <span className='text-[#E56060]'>&nbsp;*</span>
            )}
        </span>
    )
}
