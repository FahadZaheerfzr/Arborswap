import React from 'react'

export default function HeadingTags({ name, required }) {
  return (
    <span className="font-gilroy font-semibold text-[#807373] dark:text-dark-gray">
      {name}
      {required && <span className="text-[#E56060]">&nbsp;*</span>}
    </span>
  )
}
