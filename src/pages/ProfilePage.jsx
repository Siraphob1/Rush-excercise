import NavBar from "../components/navBar";
import imgProfile from '../assets/image/Desktop/Desktop_BgProfile.jpg'
const ProfilePage = () => {
    return (
<div>
    <NavBar />
    
    <img src ={imgProfile} className="w-full h-52" alt="Profile Page" />
    {/* <img src="" className="rounded-full" /> */}
    <div className="w-full  min-h-screen  bg-white">
    <h1 className="m-auto" >Tang</h1>
    <h2 className="">Wannee</h2>
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