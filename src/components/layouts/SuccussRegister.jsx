import React from 'react'
import { Link } from 'react-router-dom'

function SuccessRegister() {
  return (
<div>
        <div className=' h-screen w-[100%]'>
          <div className=' m-20 h-[80%]'>

            <div className='bg-opacity-70 mx-auto bg-white gap-y-8 flex flex-col px-20 items-center h-[80%] w-[55%] justify-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0.1)] '>

            <p className='font-bold text-4xl '>Successful Signup</p>

            <p className='font-medium bg-gradient-to-r from-lime-700 to-slate-900 bg-clip-text text-transparent text-xl'>Thank you to your Register.</p>
            <p className=' bg-gradient-to-r from-lime-700 to-slate-900 bg-clip-text text-transparent text-xl -mt-6'>Start your day with <span className='font-bold'>RUSH</span></p>

                <Link to={'/login'} className='btn btn-active btn-neutral gap px-20 hover:opacity-70 mt-7'>Back to Login</Link>
            </div>

          </div>
        </div>
    </div>
  )
}

export default SuccessRegister