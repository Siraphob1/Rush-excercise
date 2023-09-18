import React from 'react'
import Loginlayout from '../components/layouts/Loginlayout'
import imgDesktopLogin from '../assets/image/Desktop_Login.jpg'
import LoginInterfaceComponent from '../components/LoginPage/LoginInterfaceComponent'

function LoginPage() {
  return (
    <Loginlayout image={imgDesktopLogin}>
        <LoginInterfaceComponent/>

    </Loginlayout>
  )
}

export default LoginPage