import React from 'react'
import { Link } from 'react-router-dom'

function Firstpagelayout ({image}) {
  return (
  <div className="w-full main-screen" data-theme="light" >
    <div className=" ">
    <div className=" relative">
          <div style={{
            backgroundImage:`url(${image})`,
            backgroundSize:'cover',
            backgroundPosition: 'center'
            
          }} className=' h-[95.5vh]'>
    </div>
    </div>

      <div className="absolute pt-24 ml-10 left-10 top-20 w-auto">

        <h1 className="text-[6rem] font-semibold text-slate-100 drop-shadow-lg [text-shadow:_0px_2.5px_3.5px_rgb(0_0_0_/_30%)]">RUSH</h1>

        <h2 className="text-[5.5rem] font-semibold bg-gradient-to-b from-gray-600 to-black bg-clip-text text-transparent -mt-7">It's all about you</h2>
        <h2 className="text-[5.5rem] font-semibold bg-gradient-to-b from-gray-600 to-black bg-clip-text text-transparent -mt-10">can 
        <span className="text-lime-300 drop-shadow-lg"> achieve</span></h2>

        <Link to={'/login'} className="btn btn-outline normal-case mt-8 ml-1 border-t-neutral-50 text-white">Let's get started</Link>
      </div>
    </div>
  </div>  
    )
  }

export default Firstpagelayout