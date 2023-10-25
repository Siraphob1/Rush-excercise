import NavBar from '../components/navBar'
import imgDesktopFirstpage from '../assets/image/Desktop/Desktop_Firstpage.jpg'
import Firstpagelayout from '../components/layouts/Firstpagelayout'
import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'
import useRefreshToken from '../hooks/useRefreshToken'

function Firstpage() {
  const {persist ,auth} = useAuth();
  const refresh = useRefreshToken();
  const navigate = useNavigate();
  const location = useLocation();
  const prevpage = location.state?.from?.pathname || "/mainpage"

  useEffect(()=>{    
    const verifyRfreshToken = async () =>{
      try {       
        await refresh();       
        // console.log(prevpage)
        navigate(prevpage , {replace:true});
      } catch (error) {
        // console.log(error.response)
      }
    }
    if(persist){
      verifyRfreshToken();
    }
  },[persist])
  return (
    <>
    <NavBar/>
    <Firstpagelayout image={imgDesktopFirstpage}>
    </Firstpagelayout>
    </>
  )
}

export default Firstpage