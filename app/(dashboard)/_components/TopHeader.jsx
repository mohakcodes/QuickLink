import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const TopHeader = () => {
  return (
    <div className='flex p-[16.65px] px-5 border-b items-center justify-between' style={{ background: 'rgb(2,0,36)', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 86%)' }}>
      <a href="/"><Image src='/logo.svg' alt='img' width={64} height={60} className='p-0' /></a>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default TopHeader;
