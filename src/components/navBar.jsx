import { Link, useNavigate } from "react-router-dom"
import icon4 from '../assets/image/Icon/Rush logo white.png'
import useAuth from "../hooks/useAuth"
import axiosPublic from "../api/axios"

const LOGOUT_URL = '/logout'

const NavBar = () => {
  const {auth , setAuth} = useAuth();
  const navigate = useNavigate();

  const submitLogout = async () =>{

    //send API logout
    try {
      const response = await axiosPublic.get(LOGOUT_URL);  
      //clear data
      setAuth({...auth, accessToken:""})

      //redirect to login page
      navigate('/login');
    } catch (error) {
      console.log(error.response)
    }
  }


    return (
      <nav className='flex justify-between items-center text-white bg-black px-[20px] pr-[30px] py-[15px]' >
        {/* Left */}
        {/* if login this button will navigate to mainpage */}
        {/* if not login this button will navigate to firstpage */}
        <Link to={auth?.accessToken ? '/mainpage' :'/'} className="  h-[40px] ">
          <img src={icon4} alt={icon4} className="h-full" />
        </Link>
        

        {/* Right */}
        <div className='flex gap-x-6'>
          <Link to={'/profilepage'}>Profile</Link>
          <Link to={'/signup'}>Sign up</Link>
          {
            auth?.accessToken ? <button onClick={submitLogout}>Log out</button>
                              : <Link to={'/login'}>Log in</Link>
          }
        </div>
      </nav>
    )
  } 
  export default NavBar