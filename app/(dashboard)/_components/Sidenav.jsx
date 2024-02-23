"use client"
import React, { useState } from 'react'
import {File, Shield, Upload} from 'lucide-react'
import Image from 'next/image'

const sidenav = () => {

  const menuList = [
    {
        id:1,
        name:'Upload',
        icon:Upload,
        path:'upload',
    },
    {
        id:2,
        name:'Files',
        icon:File,
        path:'files',
    },
    {
        id:3,
        name:'Upgrade',
        icon:Shield,
        path:'upgrade',
    },
  ]

  const [activeIdx,setActiveIdx] = useState(0);

  return (
    <div className='shadow-sm'>
        <div className='p-2 border-b'>
            <Image src='/logo.svg' alt='img' width={64} height={64}/>
        </div>
        <div className='flex flex-col float-left w-full'>
        {
            menuList.map((item,idx)=>(
                <button
                    className={`flex gap-2 p-4 px-6 ${activeIdx===idx ? 'bg-blue-800' : 'text-white'}`}
                    onClick={()=>setActiveIdx(idx)}
                    key={idx}
                >
                    <item.icon/>
                    <h2>{item.name}</h2>
                </button>
            ))
        }
        </div>
    </div>
  )
}

export default sidenav