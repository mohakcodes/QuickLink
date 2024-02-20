import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='flex p-[16.65px] px-5 border-b items-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <Image src='/logo.svg' width={64} height={60} className='md:hidden p-0'/>
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default TopHeader