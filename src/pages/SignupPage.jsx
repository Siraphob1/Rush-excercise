import imgDesktopSignup from '../assets/image/Desktop_Signup.jpg'
import Loginlayout from '../components/layouts/Loginlayout'
import imgDesktopLogin from '../assets/image/Desktop_Login.jpg'
import UserInterfaceComponent from '../components/SignupPage/UserInterfaceComponent'

const SignupPage = () => {
  return (
        <Loginlayout image={imgDesktopSignup}>
            <UserInterfaceComponent/>
        </Loginlayout>
  
  )
}

export default SignupPage