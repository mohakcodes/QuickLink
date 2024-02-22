import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='bg-gray-400 w-full p-1 mt-3 h-7 rounded-full'>
        <div 
            className='bg-blue-700 text-[14px] font-bold rounded-full h-5 text-right px-2'
            style={{width:`${progress}%`}}
        >
            {`${Number(progress).toFixed(0)}%`}
        </div>
    </div>
  )
}

export default ProgressBar