import { Link } from "react-router-dom"
import icon4 from '../assets/image/Icon/Rush logo white.png'

const NavBar = () => {
    return (
      <nav className='flex justify-between items-center text-white bg-black px-[20px] pr-[30px] py-[15px]' >
        {/* Left */}
        <Link to={'/mainpage'} className="  h-[40px] "><img src={icon4} alt={icon4} className="h-full" /></Link>
        

        {/* Right */}
        <div className='flex gap-x-6'>
          <Link to={'/profilepage'}>Profile</Link>
          <Link to={'/signup'}>Sign up</Link>
          <Link to={'/login'}>Log in</Link>
        </div>
      </nav>
    )
  } 
  export default NavBar