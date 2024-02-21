import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMessage = ({msg}) => {
  return (
    <div className='p-4 bg-red-600 mt-5 text-white rounded-md flex items-center gap-2'>
        <AlertCircle/>
        {msg}
    </div>
  )
}

export default AlertMessage