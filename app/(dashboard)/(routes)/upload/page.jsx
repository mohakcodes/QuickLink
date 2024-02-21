"use client"
import React from 'react'
import Uploadform from './_components/Uploadform'
import {getStorage} from 'firebase/storage'
import { app } from '@/firebaseConfig'

const page = () => {

  const storage = getStorage(app);

  const uploadFile = (file) => {

  }
  
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-4'>
        <strong className='text-red-500'>Upload</strong> your files & <strong className='text-cyan-400'>Share</strong> to all
      </h2>
      <Uploadform uploadTheFile={(file)=>uploadFile(file)}/>
    </div>
  )
}

export default page