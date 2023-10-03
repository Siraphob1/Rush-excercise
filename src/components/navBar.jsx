import { Link } from "react-router-dom"


const NavBar = () => {
    return (
      <nav className='flex justify-between text-white bg-black p-[20px] ' >
        {/* Left */}
        <div>
          <Link to={'/mainpage'} className="font-semibold">RUSH</Link>
        </div>

        {/* Right */}
        <div className='flex gap-x-6'>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/signup'}>Sign up</Link>
          <Link to={'/login'}>Log in</Link>
        </div>
      </nav>
    )
  } 
  export default NavBar