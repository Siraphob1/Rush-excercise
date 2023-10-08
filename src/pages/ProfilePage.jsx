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
    <div>
    <h1 className="m-auto" >Tang</h1> <br/>
    <h2 className="">Wannee</h2>
    </div>
    <table>
        <thead>
            <tr>
                <td> age</td>
                <td>height</td>
                <td>weight</td>
            </tr> 
        </thead>
        <tbody>
            
        </tbody>
    </table>
    <br />
    <h2>About</h2>
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
