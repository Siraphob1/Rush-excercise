import imgDesktopForgotpassword from '../assets/image/Desktop/Desktop_Forgotpassword.jpg'
import FormComponent from '../components/ForgotpwdPage/FormComponent'
import Loginlayout from '../components/layouts/Loginlayout'

const ForgotpasswordPage = () => {
  return (
    <Loginlayout image={imgDesktopForgotpassword}>
        <FormComponent/>
    </Loginlayout>
  )
}

export default ForgotpasswordPage