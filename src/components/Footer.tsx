import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full flex justify=center'>
    <Link href='#' className='pl-3 pr-3'>privacy</Link>
    <Link href='#'className='pl-3 pr-3'>terms</Link>
    <Link href='#'className='pl-3 pr-3'>policy</Link>
    </div>
  )
}

export default Footer