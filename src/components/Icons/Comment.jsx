import * as React from 'react'

export function Comment (props) {
  console.log('SvgComponent')
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='56'
      height='56'
      viewBox='0 0  40 40'
      fill='#fff'
    >
      <path d='m20 31.441-11.5 5.75V2.5h23v34.691z' />
      <path
        fill-rule='evenodd' clip-rule='evenodd'
        d='M31 3v33.382l-10.553-5.276-.447-.224-.447.224L9 36.382V3h22m1-1H8v36l12-6 12 6V2z'
      />
    </svg>
  )
}
