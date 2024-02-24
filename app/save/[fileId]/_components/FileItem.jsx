import React, { useState } from 'react'
import {Download} from 'lucide-react'
import Image from 'next/image'

const FileItem = ({file}) => {

  const [pass,setPass] = useState('');
  return file && (
    <div className='flex justify-center content-center'>
        <div className='p-5 rounded-md bg-gray-400 flex flex-col items-center justify-center content-center'>
            <h2 className='text-[20px] text-black'>
                <strong className='text-blue-950 text-[22px]'>{file.userName}</strong>
                &nbsp;shared a file with you 
            </h2>
            <Image src='/dnld.svg' width={100} height={100}/>
            <strong className='text-red-700'>File Name</strong><h2 className='text-black text-[15px]'>{file.fileName}</h2>
            <strong className='text-red-700'>File Type</strong><h2 className='text-black text-[15px]'>{file.fileType}</h2>
            <strong className='text-red-700'>File Size</strong><h2 className='text-black text-[15px]'>{(file.fileSize/1024/1024).toFixed(2)} MB</h2>

            {
                file.password.length > 3 ?
                <input 
                    type="password"
                    className='p-2 border rounded-md text-[14px] mt-5 text-black outline-blue-800'
                    placeholder='Enter Password To Access'
                    onChange={(e)=>setPass(e.target.value)}
                /> : null
            }
            <button 
                href=''
                className='flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center 
                         hover:bg-blue-600 text-[14px] mt-5 text-center justify-center disabled:bg-gray-600'
                disabled={file.password !== pass}
                onClick={()=>window.open(file?.fileUrl)}
            >
                <Download className='h-5 w-5'>Download</Download>
            </button>
        </div>
    </div>
  )
}

export default FileItem