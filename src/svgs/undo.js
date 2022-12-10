import * as React from 'react'

const UndoSVG = (props) => (
  <svg width={24} height={24} fill="#000000" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.98 8.31H4.13M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6.43 10.81 3.87 8.25l2.56-2.56" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default UndoSVG
