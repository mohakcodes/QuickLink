"use client"
import React, { useState } from 'react'
import Uploadform from './_components/Uploadform'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '@/firebaseConfig'

const page = () => {

  const [progress, setProgress] = useState();
  const storage = getStorage(app);

  const uploadFile = (file) => {
    const storageRef = ref(storage, 'file/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on('state_changed',
      (snapshot)=>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload = ${progress} % done`);
        setProgress(progress);

        if(progress === 100){
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log('File available at', downloadURL);
            })
            .catch((err)=>{
              console.error('Error getting download URL:', err);
            })
        }
      },
      (err) => {
        console.error('Upload error:', err);
      }
    )
  }

  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-4'>
        <strong className='text-red-500'>Upload</strong> your files & <strong className='text-cyan-400'>Share</strong> to all
      </h2>
      <Uploadform uploadTheFile={(file)=>uploadFile(file)} progress={progress} setProgress={setProgress}/>
    </div>
  )
}

export default page