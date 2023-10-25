import NavBar from '../components/navBar'
import imgDesktopFirstpage from '../assets/image/Desktop/Desktop_Firstpage.jpg'
import Firstpagelayout from '../components/layouts/Firstpagelayout'
import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import useRefreshToken from '../hooks/useRefreshToken'

function Firstpage() {
  const {persist ,auth} = useAuth();
  const refresh = useRefreshToken();
  const navigate =useNavigate();

  useEffect(()=>{    
    const verifyRfreshToken = async () =>{
      try {
        console.log('before persist')
        await refresh();       
        navigate('/mainpage')
        console.log('after')
      } catch (error) {
        console.log(error.response)
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