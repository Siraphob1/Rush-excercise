const NavBar = () => {
    return (
      <nav className='flex justify-between bg-black p-[20px] ' >
        <div>
        <a className="text-white" href="/mainpage">Rush</a>
        </div>
        <div className='flex gap-x-6'>
        <a className=" text-white" href="/profile">Profile</a>
        <a className="text-white" href="/signup">Sign up</a>
        <a className="text-white" href="/login">Log in</a>
        </div>
      </nav>
    )
  } 
  export default NavBar