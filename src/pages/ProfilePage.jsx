import NavBar from "../components/navBar";
import imgProfile from '../assets/image/Desktop/Desktop_BgProfile.jpg'
const ProfilePage = () => {
    return (
<div>
    <NavBar />
    
    <img src ={imgProfile} className="w-full h-52 relative" alt="Profile Page" />
    <div className="relative border border-black w-full h-52">
    <img src="src\assets\image\Desktop\Desktop_Hiking.jpg" className="aspect-square w-[20rem] rounded-full absolute left-[50%] translate-x-[-50%] translate-y-[-50%] justify-self-center" />
    </div>
    <div className="w-full  min-h-screen  bg-white">
        <div className="flex justify-center">
             <h1 className="m-auto text-black text-4xl font-bold" >Tang</h1>
        </div>
        <div className="text-black text-4xl font-bold flex justify-center">
             <h2 className="">Wannee Mairuukinarai</h2>
        </div>
        <div className="justify-center stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">22</div>
    <div className="stat-value">Age</div>
    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
  </div>
  
  <div className="stat">
    <div className="stat-title">175</div>
    <div className="stat-value">Height</div>
    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
  </div>
  
  <div className="stat">
    <div className="stat-title">67</div>
    <div className="stat-value">Weight</div>
    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
  </div>
  
</div>
        <br />
        <h2 className="text-black text-4xl font-bold flex justify-start">About</h2>
    </div>
</div>
    )
}

export default ProfilePage;

<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
