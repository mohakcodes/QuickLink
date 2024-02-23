"use client"
import { app } from '@/firebaseConfig'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { ArrowLeftSquare } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import FileInfo from './_components/FileInfo'
import FileShareForm from './_components/FileShareForm'

const page = ({params}) => {

  const [file,setFile] = useState();
  const db = getFirestore(app);

  const getFileInfo = async() => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  useEffect(()=>{
    console.log(params?.fileId);
    if(params?.fileId){
      getFileInfo();
    }
  },[])

  const onPasswordSave = async(pass) => {
    const docRef = doc(db,"uploadedFile",params?.fileId);
    await updateDoc(docRef,{
      password:pass
    })
  }
  
  return (
    <div className='py-10 px-10'>
        <Link href='/upload' className='flex gap-3'>
          <ArrowLeftSquare/> Go to Upload
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
          <FileInfo file={file}/>
          <FileShareForm file={file} onPassSave={(pass)=>onPasswordSave(pass)}/>
        </div>
    </div>
  )
}

export default page