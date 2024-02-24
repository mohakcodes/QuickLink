"use client"
import React, {useEffect, useState} from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { app } from '../../../firebaseConfig'
import FileItem from './_components/FileItem'
import Link from 'next/link'
import Image from 'next/image'

const page = ({params}) => {

  const [file,setFile] = useState();
  const db = getFirestore(app);
  
  useEffect(()=>{
    if(params?.fileId){
        getFileInfo();
    }
  },[])  

  const getFileInfo = async() => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFile(docSnap.data());
      console.log("Document data:", file);
    } else {
      console.log("No such document!");
    }
  }

  return (
    <div className='bg-gray-900 h-screen w-full flex justify-center items-center flex-col gap-8 p-4'>
        <Link href=''>
            <Image src='/logo.svg' width={60} height={60}/>
        </Link>
        {file ? <FileItem file={file}/> : <Image src='/giphy.gif' width={250} height={250}/>}
    </div>
  )
}

export default page