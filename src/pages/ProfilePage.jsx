import NavBar from "../components/navBar";

const ProfilePage = () => {
    return (
<div>
    <NavBar />
    
    <img src ="src\assets\image\Desktop\Desktop_BgProfile.jpgnp" className="w-full h-52" alt="Profile Page" />
    {/* <img src="" className="rounded-full" /> */}
    <div className="w-full  min-h-screen  bg-white">
    <h1 className="m-auto" >Tang</h1>
    <h2 className="">Wannee</h2>
    <table>
    <tr>
        <td> age</td>
    </tr>
    <tr>
        <td>height</td>
    </tr>
    <tr>
        <td>weight</td>
    </tr>
    </table>
        <br />
    <h2>About</h2>
    </div>

</div>
    )
}

export default ProfilePage;