import * as React from 'react'

export function Comment ({ fill }) {
  console.log('SvgComponent')
  return (
    <svg
      width='56'
      height='56'
      viewBox='0 0 24 24'
      fill='#fff'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z'
        fill={fill}
      />

    </svg>
  )
}
