import GlobalApi from '../../../../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import { Copy, CopyIcon } from 'lucide-react'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const FileShareForm = ({file,onPassSave}) => {

  const [isPassEnable, setIsPassEnable] = useState(false);
  const [pass,setPass] = useState('');
  const [email,setEmail] = useState();
  const {user} = useUser();

  const [copied,setCopied] = useState(false);
  const [passSaved,setPassSaved] = useState(false);
  const [sentMail,setSentMail] = useState(false);

  const handlePassClick = () => {
    setPassSaved(true);
    setTimeout(()=>{
        setPassSaved(false);
    },2000)
    onPassSave(pass);
  }

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(()=>{
        setCopied(false);
    },2000)
  }

  const sendEmail = async() => {
    const data = {
        emailToSend:email,
        userName:user?.fullName,
        fileName:file.fileName,
        fileSize:file.fileSize,
        fileType:file.fileType,
        shortURL:`${process.env.NEXT_PUBLIC_BASE_URL}save/${file.id}`,
        fileId:file.id,
    }
    GlobalApi.SendEmail(data).then(resp=>{
        console.log(resp);
    })
    setSentMail(true);
    setTimeout(()=>{
        setSentMail(false);
    },2000)
  }

  return file && (
    <div className='flex flex-col gap-2'>
        <div>
            <label className='text-[14px] text-gray-400'>Short URL</label>
            <div className='flex gap-5 p-2 border rounded-md justify-between'>
                <input
                    type='text'
                    value={`${process.env.NEXT_PUBLIC_BASE_URL}save/${file.id}`}
                    disabled
                    className='disabled:text-gray-400 bg-transparent outline-none w-full'
                />
                <CopyToClipboard text={`${process.env.NEXT_PUBLIC_BASE_URL}save/${file.id}`} onCopy={handleCopyClick}>
                    <Copy className='text-gray-400 hover:text-gray-600 cursor-pointer' />
                </CopyToClipboard>
            </div>
            {copied && <span className="text-green-500">Copied to clipboard!</span>}
            <div className='gap-3 flex mt-5'>
                <input type="checkbox" onChange={(e)=>setIsPassEnable(!isPassEnable)}/>
                <label>Enable Password ?</label>
            </div>
            {
                isPassEnable ?
                <div className='flex flex-col sm:flex-row gap-3 items-center'>
                    <div className='border rounded-md w-[80%] p-2'>
                        <input 
                            type="password"
                            className='disabled:text-gray-400 bg-transparent outline-none w-[90%]'
                            onChange={(e)=>setPass(e.target.value)}
                        />
                    </div>
                    <button 
                        className='p-2 bg-primary text-white rounded-md disabled:bg-gray-500 hover:bg-blue-600'
                        disabled={pass?.length <= 3}
                        onClick={()=>handlePassClick()}
                    >
                        Save
                    </button>
                    {passSaved && <span className="text-green-500">Password Set!</span>}
                </div> : null
            }
            <div className='border rounded-md p-3 mt-5'>
                <label className='text-[14px] text-gray-400'>Send File to E-Mail</label>
                <div className='border rounded-md p-2'>
                    <input 
                        type="email" 
                        placeholder='abc@gmail.com' 
                        className='bg-transparent outline-none w-full'
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <button
                    className='p-2 disabled:bg-gray-300 bg-primary text-white hover:bg-blue-600 w-full mt-2 rounded-md'
                    onClick={()=>sendEmail()}
                >
                    Send E-Mail
                </button>
                {sentMail && <span className="text-green-500">Sent to Mail!</span>}
            </div>
        </div>
    </div>
  )
}

export default FileShareForm