import React, { useState } from 'react';
import AlertMessage from './AlertMessage';
import PreviewFile from './PreviewFile';
import ProgressBar from './ProgressBar';
import ToastMessage from './ToastMessage';

const UploadForm = ({uploadTheFile,progress,setProgress}) => {

  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const onFileSelect = (file) => {
    if(file && file.size > 2000000){
      setErrorMsg("File exceeds 2 MB");
      setFile();
      return;
    }
    setErrorMsg("");
    setFile(file);
  }

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full" onClick={()=>setProgress()}>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-700 border-dashed rounded-xl cursor-pointer bg-gray-300"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 sm:text-lg text-md px-4 text-center">
            <svg
              className="w-8 h-8 mb-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-md text-gray-900 ">
              <span className="font-semibold">Click to Upload</span> or{' '}
              <strong>drag</strong> and <strong>drop</strong>
            </p>
            <p className="text-sm text-gray-900 ">
              SVG, PNG, JPG or GIF (MAX SIZE 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {errorMsg ? <AlertMessage msg={errorMsg}/> : null}
      {file ? <PreviewFile file={file} removeFile={()=>setFile()}/> : null}
    
      {
        progress >= 0 && file ? (
          <>
            {
              progress === 100 ? <ToastMessage setFile={setFile}/> : <ProgressBar progress={progress}/>
            }
          </>
        ) : (
          <button
            disabled={!file}
            onClick={()=>uploadTheFile(file)}
            className="disabled:bg-gray-500 disabled:hover:bg-gray-600 p-2 bg-primary hover:bg-blue-700 text-white w-1/3 rounded-lg mt-5"
          >
            Upload
          </button>
        )
      }
    </div>
  );
};

export default UploadForm;
