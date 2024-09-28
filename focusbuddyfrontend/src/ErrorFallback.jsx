// src/ErrorFallback.jsx
import React from 'react';
import { BiSolidError } from "react-icons/bi";
import {Link} from 'react-router-dom'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <div className='px-6 flex flex-col justify-center items-center min-h-screen min-w-screen'>
        <div className='flex'>
          <BiSolidError className='text-[6rem] md:text-[7rem] text-errorred'/>
          <h1 className='text-[4rem] md:text-[5rem] text-greenbg font-medium'>Oops!</h1>

        </div>
          <h2 className='my-3 text-2xl md:text-4xl text-formgray text-center'>Something went wrong</h2>
          <p className='text-xl md:text-2xl text-formgray text-center'>Don't worry, our team is here to help</p>
          <div className='mt-6 flex gap-2'>
            <Link to={'/dashboard'} type='button' className='bg-textcolor py-3 px-10 text-white rounded-md text-md xl:text-lg border-2 border-textcolor hover:text-formgray hover:bg-white hover:border-2 hover:border-greenbg'>Dashboard</Link>
            <Link to={'/contact'} type='button' className='bg-textcolor py-3 px-14 text-white rounded-md text-md xl:text-lg border-2 border-textcolor hover:text-formgray hover:bg-white hover:border-2 hover:border-greenbg'>Help</Link>
          </div>
          <pre>{error.message}</pre>
          {/* <button onClick={resetErrorBoundary}>Try again</button> */}
      </div>
    </div>
  );
};

export default ErrorFallback;
