"use client"
import React, { useEffect, useState } from 'react'
import Uploadform from './_components/Uploadform'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '@/firebaseConfig'
import { useUser } from '@clerk/nextjs'

// to make collections in Firestore
import {doc, getFirestore, setDoc} from 'firebase/firestore'
import { getRandomString } from '@/app/_utils/GetRandomString'
import { useRouter } from 'next/navigation'

const page = () => {

  const {user} = useUser();
  const [progress, setProgress] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [fileDocId, setFileDocId] = useState();

  const router = useRouter();

  const storage = getStorage(app);
  const db = getFirestore(app);

  const saveInfo = async(file,downloadURL) => {
    const docId = getRandomString().toString();
    await setDoc(doc(db, "uploadedFile", docId),{
      fileName:file.name,
      fileSize:file.size,
      fileType:file.type,
      fileUrl:downloadURL,
      userEmail:user.primaryEmailAddress.emailAddress,
      userName:user.fullName,
      password:'',
      id:docId,
      shortURL:process.env.NEXT_PUBLIC_BASE_URL+getRandomString(),
    })
    setFileDocId(docId);
  }

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
              saveInfo(file,downloadURL);
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

  useEffect(()=>{
    console.log("Trigger");
    progress==100 && setTimeout(()=>{
      setUploadCompleted(true);
    },2000)
  },[progress==100])

  useEffect(()=>{
    (uploadCompleted && fileDocId) && setTimeout(()=>{
      setUploadCompleted(false);
      router.push('/file-preview/'+fileDocId);
    },100)
  },[uploadCompleted==true , fileDocId])

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