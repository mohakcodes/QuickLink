import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const FileInfo = ({file}) => {
  const [fileType,setFileType] = useState();
  useEffect(()=>{
    if(file){
        setFileType(file?.fileType.split('/')[0]);
    }
    console.log(file?.fileType);
    console.log(fileType);
  },[file])
  return file && (
    <div className='text-center border flex justify-center m-4 flex-col items-center p-2 rounded-sm border-blue-200'>
        <Image
            alt='img'
            src={fileType=='image' ?  file?.fileUrl : '/file.png'}
            width={200}
            height={200}
            className='h-[200px] rounded-md object-contain'
        />
        <div>
            <h2>{file?.fileName}</h2>
            <h2>{file?.fileType} - {(file?.fileSize/1024/1024).toFixed(2)} MB</h2>
        </div>
    </div>
  )
}

export default FileInfo