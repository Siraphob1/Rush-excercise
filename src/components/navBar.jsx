const NavBar = () => {
    return (
      <nav className='home'>
        <div>
        <a className="sectorBtn" href="Home">Rush</a>
        </div>
        <div className='btnSelect'>
        <a className="sectorBtn" href="HomeUser">Profile</a>
        <a className="sectorBtn" href="SignupPage">Sign up</a>
        <a className="sectorBtn" href="HomeAdmin">Log in</a>
        </div>
      </nav>
    )
  } 
  export default NavBar