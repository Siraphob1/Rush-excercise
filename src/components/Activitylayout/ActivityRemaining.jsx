/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NavBar from "../navBar";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate } from "../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

function ActivityRemaining({image , topic , bgPos , activityID}) {

  const [displayDays , setDisplayDays] = useState(0);
  const [displayHrs , setDisplayHrs] = useState(0);
  const [displayMin , setDisplayMin] = useState(0);
  const [displaySec , setDisplaySec] = useState(0);

  const [activityName , setActivityName] = useState('');
  const [activityDescriptio , setActivityDescriptio] = useState('');
  const [activityType , setActivityType] = useState('');
  const [activityduration , setaAtivityduration] = useState('');

  const [clickDetail , setClickDetail] = useState(false);
  const [isTimeout , SetIsTimeout] = useState(false);

  const [editing , setEditing] = useState(false);
  const [prevActivityName , setPrevActivityName] = useState(false);
  const [prevActivityDescription , setPrevActivityDescription] = useState(false);
  

  const {auth ,activity} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const API_URL = `/api/activity/${auth?.userID}?activityID=${activityID}`;



  let myCountdown;
  // Convert time to  GMT
  const convertTime = (time) =>{
    const resultSplit = time.split(' ');
    let  convertDay = parseInt(resultSplit[2]);
    let  convertMonth= null;
    switch (resultSplit[1]) {
        case 'Jan': convertMonth = 0;       
        break;
        case 'Feb': convertMonth = 1;    
        break;
        case 'Mar': convertMonth = 2;      
        break;
        case 'Apr': convertMonth = 3;        
        break;
        case 'May': convertMonth = 4;        
        break;
        case 'Jun': convertMonth = 5;        
        break;
        case 'Jul': convertMonth = 6;      
        break;
        case 'Aug': convertMonth = 7;        
        break;
        case 'Sep': convertMonth = 8;        
        break;
        case 'Oct': convertMonth = 9;        
        break;
        case 'Nov': convertMonth = 10;        
        break;
        case 'Dec': convertMonth = 11;        
        break;

        default:
            break;
    }
  let  convertYear = parseInt(resultSplit[3])
  let  convertHour = parseInt(resultSplit[4].split(':')[0])
  let  convertMin = parseInt(resultSplit[4].split(':')[1])
    
    const timeGMT = new Date(convertYear , convertMonth , convertDay ,convertHour , convertMin);    
    return timeGMT;
  }

  // Countdown 
  const startCountdown = (startTime , endTime) =>{
    
      myCountdown = setInterval(() => {              
        const currentTime = new Date().getTime();
        
        
        //check overtime activity
        if(currentTime >= endTime){          
          SetIsTimeout(true);
          clearInterval(myCountdown);
          return
        }

        //check in range activity
        if(currentTime >= startTime  && currentTime < endTime){
          // if(currentTime >= virStart && currentTime < virEnd){
          // let deltatime =  virEnd - currentTime;
          let deltatime =  endTime - currentTime;
          const days = Math.floor(deltatime / (1000 * 60 * 60 * 24));  
          const hours = Math.floor(deltatime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
          const mins = Math.floor(deltatime % (1000 * 60 * 60) / (1000 * 60));
          const secs = Math.floor(deltatime % (1000 * 60) / (1000));  
             
          
          
          if(deltatime < 0){
              SetIsTimeout(true);
              clearInterval(myCountdown);              
          }
          else if(deltatime > 0){
              setDisplayDays(days);
              setDisplayHrs(hours);
              setDisplayMin(mins);
              setDisplaySec(secs);
  
              // Format for Time remainning in Detail Component
              const activityday = days > 1 ? `${days}days` : `${days}day`;
              const activityhour = hours > 1 ? `${hours}hours` : `${hours}hour`;
              const activitymin = mins > 1 ? `${mins}mins` : `${mins}min`;
              const activitysec = secs > 1 ? `${secs}secs` : `${secs}sec`;
              const activityduration = `${activityday} ${activityhour} ${activitymin} ${activitysec}`
              setaAtivityduration(activityduration)
          }
        }
        
        
      }, 1000);
    
    
  }

  const deleteActivity = async () =>{
      try {
        const response = await axiosPrivate.delete(API_URL, {
          headers: {"Authorization" : `Bearer ${auth?.accessToken}`}
      });
      // console.log(response.data);
      if(response.status === 200 ){
        navigate('/mainpage');
      }
    } catch (error) {
      console.error(error.response);
      navigate('/login' , {state: {from:location} , replace:true})
    }
  }

  const updateActivity = async () =>{
      if(!activityName) return alert("please enter NameActivity");
      if(!activityDescriptio) return alert("please enter Description");

      //check not update
      if(activityName === prevActivityName && activityDescriptio === prevActivityDescription)  return setEditing(false);

      //fotmat data
      const updateData = {
        name:activityName,
        description:activityDescriptio
      }

      try {
        const response = await axiosPrivate.put(API_URL , updateData ,{
          headers: {"Authorization" : `Bearer ${auth?.accessToken}`}
        })
        
        setEditing(false);
        // console.log(response)
      } catch (error) {
        console.error(error.response);
      }


  }

  const finishActivity = async ()=>{
      // finished
      const updateData = {
        name:activityName,
        description:activityDescriptio,
        status:"finished"
      }
    try {      
        const response = await axiosPrivate.put(API_URL, updateData, {
          headers: {"Authorization" : `Bearer ${auth?.accessToken}`}
    });
      // console.log(response.data);
      if(response.status === 200 ){
        navigate('/mainpage');
      }
    } catch (error) {
      console.error(error.response);
      // navigate('/login' , {state: {from:location} , replace:true})
    }
  }

  // Start countdown when first render 
  useEffect(()=>{     
      const activityList= activity?.activityList
      const currentActivity = activityList.find((e)=> e.activityID === activityID);
      // console.log(currentActivity)

    
      setActivityName(currentActivity.name);
      setPrevActivityName(currentActivity.name);
      setActivityDescriptio(currentActivity.description);
      setPrevActivityDescription(currentActivity.description);
      setActivityType(currentActivity.type);
      console.log(`sart:${currentActivity.startDate}`)

      const startTime = convertTime(currentActivity.startDate).getTime();          
      const endTime = convertTime(currentActivity.endDate).getTime();    
        
      
      startCountdown(startTime , endTime);
          
  },[])




  return (
    <main className=" w-full min-h-screen" data-theme="light">

      {/* Navbar */}
      <NavBar />
      
      {/* Body */}
      <section  className='w-full min-h-[91.5vh] flex flex-col items-center justify-center'
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize:'cover',
                  backgroundPosition:`${bgPos}`,
                  backgroundRepeat:'no-repeat'
                }}
      >             

          {/* Countdown Component */}
          <section className={clickDetail ? 'hidden' : 'flex flex-col items-center' }>
              {/* Title */}
              <h1 className="text-[8rem] text-white text-center  font-mono [text-shadow:_0px_2.5px_3.5px_rgb(0_0_0_/_60%)]">{topic}</h1>
            
              {/* ใส่นาฬิกา remainning ตรงนี้ */}
              <div className="px-[5rem]  pb-[2rem] rounded-xl mt-[8rem] mb-[3rem]">
                    
                    <table className="text-center text-[#BDFF00] font-semibold">
                      {/* Count time */}
                      <thead className="">
                        <tr className="text-[5rem] font-normal">
                          
                          {/* Count Day */}
                          <td className="pt-[2.9rem]" >
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-[1rem]">
                              <span className="countdown font-mono text-[5rem]">
                                <span style={{"--value":displayDays}}></span>
                              </span>
                              {displayDays > 1 ? `days`  :`day`}
                            </div>
                          </td>
                          <td className="px-[0.5rem]">:</td>
                          
                          {/* Count Hour */}
                          <td className="pt-[2.9rem]" >
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-[1rem]">
                              <span className="countdown font-mono text-[5rem]">
                                <span style={{"--value":displayHrs}}></span>
                              </span>
                              {displayHrs > 1 ? `hrs`  :`hr`}
                            </div>
                          </td>
                          <td className="px-[0.5rem]">:</td>
                          
                          {/* Count Min */}
                          <td className="pt-[2.9rem]" >
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-[1rem]">
                              <span className="countdown font-mono text-[5rem]">
                                <span style={{"--value":displayMin}}></span>
                              </span>
                              {displayMin > 1 ? `mins`  :`min`}
                            </div>
                          </td>
                          <td className="px-[0.5rem]">:</td>
                        
                        {/* Count Sec */}
                          <td className="pt-[2.9rem]" >
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-[1rem]">
                              <span className="countdown font-mono text-[5rem]">
                                <span style={{"--value":displaySec}}></span>
                              </span>
                              {displaySec > 1 ? `secs`  :`sec`}
                            </div>
                          </td>
                        </tr>
                      </thead>                  
                    </table>
              </div>   

              {/* Detail Button */}
              <div className="flex gap-x-[1rem]">
                <button className="btn btn-outline w-[9rem] text-white text-[1.1rem] normal-case tracking-[0.09em] hover:bg-white hover:text-black" onClick={()=> setClickDetail(true)}>Detail</button>
                {!isTimeout ? null
                            : <button className="btn btn-outline w-[10rem] text-white text-[1.1rem] normal-case tracking-[0.09em] hover:bg-white hover:text-black" onClick={finishActivity}  >Finished</button>
                }
              </div>
          </section>

          {/* Detail Component */}
          <section className={clickDetail ? 'flex flex-col  justify-center items-center bg-black bg-opacity-50 border border-black w-full min-h-[91.5vh] ' : 'hidden'}>
            
            <section className="bg-black bg-opacity-40 w-[60%] flex flex-col items-center py-[1rem] rounded-3xl">
                <h2 className="text-center text-[1.5rem] text-white mb-[1rem] border">Details</h2>                
                {/* for */}
                <form className='relative text-white px-[2rem] py-[1rem] flex flex-col gap-y-[1rem] '>
                  {/* Edit */}
                  <div className="absolute right-[2rem] top-[-3.5rem] text-white hover:cursor-pointer" onClick={()=>{setEditing(!editing)}}><FaRegEdit className="text-[2rem]"/></div>

                  {/* NameActivity  */}
                  <section  className="flex justify-between items-center  w-[40rem]">
                    <label>NameActivity</label>
                    <input type="text" disabled={!editing} value={activityName} onChange={(e)=>{setActivityName(e.target.value)}} className="input input-bordered input-sm w-full max-w-[30rem] h-[3rem] text-black disabled:bg-opacity-90"/>
                  </section>

                  {/* Description */}
                  <section  className="flex justify-between items-center  w-[40rem]">
                    <label>Description</label>
                    <input type="text" disabled={!editing} value={activityDescriptio} onChange={(e)=>{setActivityDescriptio(e.target.value)}}  className="input input-bordered input-sm w-full max-w-[30rem] h-[3rem] text-black disabled:bg-opacity-90"/>
                  </section>

                  {/* Activity type */}
                  <section  className="flex justify-between items-center  w-[40rem]">
                    <label>Activity type</label>
                    <input type="text" disabled={true} value={activityType} className="input input-bordered input-sm w-full max-w-[30rem] h-[3rem] text-black disabled:bg-opacity-90"/>
                  </section>
                  
                  {/* Time remainning  */}
                  <section  className="flex justify-between items-center  w-[40rem]">
                    <label>Time remainning</label>
                    <input type="text" disabled={true} value={activityduration}  className="input input-bordered input-sm w-full max-w-[30rem] h-[3rem] text-black disabled:bg-opacity-90"/>
                  </section>
                  
                  {/* Button */}
                  <section className="flex justify-between">
                    <button type="button" className="btn bg-black bg-opacity-10 text-white hover:bg-black hover:bg-opacity-100 w-[8rem] normal-case" onClick={deleteActivity} >Delete</button>
                    <div>
                      <button type="button" className="btn  w-[8rem] normal-case mr-[1rem]" onClick={()=>setClickDetail(false)} >Back</button>
                      <button type="button" className="btn  w-[8rem] normal-case mr-[1rem]" onClick={updateActivity} >Update</button>
                    </div>
                  </section>
                </form>

            </section>
           
          </section>
      </section>

      
     
    </main>
  )
}

export default ActivityRemaining