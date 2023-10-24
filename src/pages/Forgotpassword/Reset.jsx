import React from 'react'
import Newpass from '../../components/layouts/Newpass'
import imgForgotpassword from '../../assets/image/Desktop/Desktop_Forgotpassword.jpg'
import Navbar from '../../components/navBar'

function Reset() {
  return (
    <div className='  '
          style={{backgroundImage:`url(${imgForgotpassword})`,
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat'                  
        }}
    >
      <Navbar />
      <Newpass />
      {/* <img src={imgForgotpassword} alt="" /> */}
    </div>
  )
}

export default Reset