import React from 'react'
import imgSignup from '../../assets/image/Desktop/Desktop_Signup.jpg'
import Navbar from '../../components/navBar'
import SuccessRegister from '../../components/layouts/SuccussRegister'

function Verify() {
  return (
    <div className='  '
          style={{backgroundImage:`url(${imgSignup})`,
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat'                  
        }}
    >
      <Navbar />
      <SuccessRegister />
      
    </div>
  )
}

export default Verify