import NavBar from '../components/navBar'
import imgDesktopFirstpage from '../assets/image/Desktop/Desktop_Firstpage.jpg'
import Firstpagelayout from '../components/layouts/Firstpagelayout'

function Firstpage() {
  return (
    <>
    <NavBar/>
    <Firstpagelayout image={imgDesktopFirstpage}>
    </Firstpagelayout>
    </>
  )
}

export default Firstpage