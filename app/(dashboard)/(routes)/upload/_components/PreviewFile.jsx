import { FileIcon, X } from 'lucide-react'
import React from 'react'

const PreviewFile = ({file,removeFile}) => {

  return (
    <div className='flex items-center gap-3 py-3'>
        <FileIcon/>
        <div className='text-left'>
            <h2>{file.name}</h2>
            <h2 className='text-xs text-gray-400'>{file.type} - {(file.size/1024/1024).toFixed(2)} MB</h2>
        </div>
        <X className='bg-red-600 cursor-pointer' onClick={()=>removeFile()}/>
    </div>
  )
}

export default PreviewFile