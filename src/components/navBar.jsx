import { Link, useNavigate } from "react-router-dom"
import icon4 from '../assets/image/Icon/Rush logo white.png'
import useAuth from "../hooks/useAuth"
import useLogout from "../hooks/useLogout"


const NavBar = () => {
  const {auth} = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () =>{

    //send API logout
    await logout();
    //redirect to first page
    navigate('/');
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
            auth?.accessToken ? <button onClick={signOut}>Log out</button>
                              : <Link to={'/login'}>Log in</Link>
          }
        </div>
      </nav>
    )
  } 
  export default NavBar