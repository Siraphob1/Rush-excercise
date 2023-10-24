import NavBar from "../components/navBar";
import imgProfile from '../assets/image/Desktop/Desktop_BgProfile.jpg'
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";
const ProfilePage = () => {

  const {auth} = useAuth();
  const PROFILEAPI_URL = `/api/profile/${auth?.userID}`
  const [editAble , setEditAble] = useState(false);
  const [name, setName] = useState('Piti');
  const [displayname, setDisplayname] = useState('Likitwattanapaisarn')
  const [age , setAge] = useState(22);
  const [height , setHeight] = useState(175);
  const [weight , setWeight] = useState(67);
  const [caption ,setCaption] = useState('สวัสดีชาวโลก ชอบวิ่ง ชอบปีนเขา')

  const checkEmptyInput = () =>{
    if(!name) return false;
    if(!displayname)return false;
    if(!age) return false;
    if(!height) return false;
    if(!weight) return false; 
    if(!caption) return false;

    return true;
  }

  const updateData = async () =>{
   
    const canSendAPI = checkEmptyInput();
    if(!canSendAPI) return;
    setEditAble(!editAble);
    

    const newData = {
      imageURL: "",
      username:name,
      displayName:displayname,
      age:age,
      height:height,
      weight:weight,
      caption:caption
    }

    //send API to Backend
    try {
      const response = await axiosPrivate.put(PROFILEAPI_URL ,newData);
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
    
  }

  useEffect(()=>{
    const getData = async () =>{
      try {
        const response = await axiosPrivate.get(PROFILEAPI_URL,{
          headers: {"Authorization" : `Bearer ${auth?.accessToken}`}
        })
        console.log(response)
        setName(response.data.userProfile.username);
        setDisplayname(response.data.userProfile.displayName);
        setAge(response.data.userProfile.age);
        setHeight(response.data.userProfile.height);
        setWeight(response.data.userProfile.weight);
        setCaption(response.data.userProfile.weight);
      } catch (error) {
        console.log(error.response)
      }
    }

    getData();
  },[PROFILEAPI_URL])


    return (
  <div data-theme="light">
      <NavBar />    

      {/* Background image */}
      <img src ={imgProfile} className="w-full h-52 relative" alt="Profile Page" />

      {/* Profile image */}
      <div className="relative border border-black w-full h-52">
          <img src="src\assets\image\Desktop\Desktop_Hiking.jpg" className="aspect-square w-[20rem] rounded-full absolute left-[50%] translate-x-[-50%] translate-y-[-50%] justify-self-center" />
          <div className="absolute right-[1rem] top-[1rem] hover:cursor-pointer w-[3rem] " onClick={()=>{setEditAble(!editAble)}}><BiEditAlt className="text-[3.1rem]"/></div>
      </div>
      
      {/* Profile Information */}
      <div className="border border-black flex flex-col items-center w-full  min-h-screen  bg-white">
          <div className="flex justify-center">
          <input type="text" className="bg-white border text-black w-auto text-center stat-value inline-block disabled:bg-transparent disabled:border-none" value={name} onChange={(e)=>setName(e.target.value)} disabled={!editAble}/>
              
          </div>
          <div className="text-black text-4xl font-bold flex justify-center m-5">
          <input type="text" className="bg-white border text-black w-auto text-center stat-value inline-block disabled:bg-transparent disabled:border-none" value={displayname} onChange={(e)=>setDisplayname(e.target.value)} disabled={!editAble}/>
              
          </div>

        <form >
          <div className="flex justify-center bg-white stats-vertical lg:stats-horizontal shadow text-black">
            
            {/* Age */}
            <div className="stat flex flex-col items-center">
              {/* Input */}
              <input type="number" className="bg-white border  w-[4rem] text-center stat-value inline-block disabled:bg-transparent disabled:border-none" value={age} onChange={(e)=>setAge(e.target.value)} disabled={!editAble}/>
              {/* Unit */}
              <div className="stat-title">Age</div>
            </div>
            
            {/* Height */}
            <div className="stat flex flex-col items-center">
              {/* Input */}
              <div className="flex gap-x-[0.2rem]">              
                <input type="number" className="bg-white border w-[4rem] text-center stat-value inline-block disabled:bg-transparent disabled:border-none" value={height} onChange={(e)=>setHeight(e.target.value) } disabled={!editAble}/>
                <span className="stat-value inline-block">cm.</span>
              </div>
              {/* Unit */}
              <div className="stat-title">Height</div>                
            </div>
            
            {/* Weight */}
            <div className="stat flex flex-col items-center">
              {/* Input */}
              <div className="flex gap-x-[0.1rem]">              
                <input type="number" className="bg-white border w-[4rem] text-center stat-value inline-block disabled:bg-transparent disabled:border-none" value={weight} onChange={(e)=>setWeight(e.target.value) } disabled={!editAble}/>
                <span className="stat-value inline-block">kg.</span>
              </div>
              {/* Unit */}
              <div className="stat-title">Weight</div>
            </div>  
          </div>
          </form>
          <br />
        
      <div className="container m-8 w-full bg-white h-52 ">
      <h2 className="text-black text-4xl font-bold pl-10 mb-[1rem] ">About</h2>
        <div className="p-10 text-3xl font-bold text-black flex flex-col gap-y-[1rem]  shadow">
          
          <textarea name="" id="" cols="10" rows="3" className="text-3xl font-bold text-black  bg-white border p-[1rem] stat-value inline-block  disabled:bg-transparent disabled:border-none" value={caption} onChange={(e)=>setCaption(e.target.value) } disabled={!editAble} ></textarea>
          <div className={editAble ? "flex justify-end gap-x-[1rem]" : "hidden"}>
            <button className="btn w-[6rem]" onClick={()=>{setEditAble(!editAble)}}>Cancel</button>
            <button className="btn btn-neutral w-[6rem]" onClick={updateData}>Save</button>
          </div>
        </div>
      </div>
      </div>
  </div>
    )
}

export default ProfilePage;
