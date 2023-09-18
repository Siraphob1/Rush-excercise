const NavBar = () => {
    return (
      <nav className='home'>
        <div>
        <a className="sectorBtn" href="/mainpage">Rush</a>
        </div>
        <div className='btnSelect'>
        <a className="sectorBtn" href="/profile">Profile</a>
        <a className="sectorBtn" href="/signup">Sign up</a>
        <a className="sectorBtn" href="/login">Log in</a>
        </div>
      </nav>
    )
  } 
  export default NavBar