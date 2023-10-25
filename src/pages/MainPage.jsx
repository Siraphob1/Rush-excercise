import DesktopMain from "../assets/image/Desktop/Desktop_Main.jpg";
import NavBar from "../components/navBar";
import { Nav } from "../components/MainPage/Nav";

// import { From } from "../components/MainPage/From";
import { Card } from "../components/MainPage/Card";
import { From } from "../components/MainPage/From";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import  { axiosPrivate } from "../api/axios";
import useRefreshToken from "../hooks/useRefreshToken";

export const MainPage = () => {
  const initdata = [
    // {
    //   id: 1,
    //   name: "Champ",
    //   about: "RunFor10Km",
    //   activity: "Running",
    //   startDate: "2022-10-16",
    //   startHour: "07",
    //   startMinute: "10",
    //   endDate: "2050-12-20",
    //   endHour: "20",
    //   endMinute: "60",
    // },
  ];

  const {auth , activity , setActivity } = useAuth();
  const ACTIVITY_URL = `/api/activity/${auth?.userID}`
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState(initdata);
  const [rawactivityList, setRawactivityLies] = useState([]);
  // const [activitiesList , setActivityList] = useState([]);
  const [updateFinished , setUpdateFinished] = useState(false);
  const [toggleUpdate ,setToggleUpdate] = useState(false);

  const [selectBiking ,setSelectBiking] = useState(false);
  const [selectHiking ,setSelectHiking] = useState(false);
  const [selectRunning ,setSelectRunning] = useState(false);
  const [selectSwimming ,setSelectSwimming] = useState(false);
  const [selectWalking,setSelectWalking] = useState(false);
  const [isrefresh , setIsrefresh] = useState(false);
  const [showData , setShowData] = useState([]);
  
  const refresh = useRefreshToken();
  const onAddNewCard = (newItem) => {
    setItems((prevItems) => {
      return [newItem, ...prevItems];
    });
  };


  useEffect(()=>{
      
      const getActivities = async () => {
        try {
            
            const response = await axiosPrivate.get(ACTIVITY_URL, {
                headers: {"Authorization" : `Bearer ${auth?.accessToken}`}
            });
            // console.log(response.data);
            setActivity({...activity , activityList:response.data.activitiesList})
            setRawactivityLies(response.data.activitiesList)
            setUpdateFinished(true)
            setToggleUpdate(!toggleUpdate);                
        } catch (err) {
            console.error(err.response);
            navigate('/login' , {state: {from:location} , replace:true})
        }
      }

      if(updateFinished) return
      getActivities(); 
      
      
      
  },[activity , toggleUpdate])

  
  useEffect(()=>{
    // console.log(activitiesList)
    const filterActivity =  rawactivityList.filter((e)=> e.status === "inprogress");
    const filterBiking = selectBiking ? filterActivity.filter((e)=> e.type === "Biking") : filterActivity;
    const filterHiking = selectHiking ? filterBiking.filter((e)=> e.type === "Hiking") :filterBiking
    const filterRunning = selectRunning ? filterHiking.filter((e)=> e.type === "Running") :filterHiking
    const filterSwimming = selectSwimming ? filterRunning.filter((e)=> e.type === "Swimming") :filterRunning
    const filterWalking = selectWalking ? filterSwimming.filter((e)=> e.type === "Walking") :filterSwimming
    setShowData(filterWalking);

  },[selectBiking ,selectHiking , selectRunning , selectSwimming , selectWalking , rawactivityList , toggleUpdate , ])


  return (
    <main className="w-full  main-screen" data-theme="light">
      {/* SetBg */}
      <NavBar />
      <div className="relative">
        <img src={DesktopMain} alt="DesktopMain" />
        <div className="absolute top-0  w-full h-full ">
          {/* navBarMainPage */}
          <Nav setSelectBiking={setSelectBiking} setSelectHiking={setSelectHiking} setSelectRunning={setSelectRunning} setSelectSwimming={setSelectSwimming} setSelectWalking={setSelectWalking} />

          {/* Title */}
          <div className=" py-10 rounded-2xl mx-auto my-5 w-[97%] h-[97%] bg-black text-white  bg-stone-950/75 ">
            <div className="flex justify-center gap-2 mt-2 ">
              <h1 className=" tracking-wide text-5xl font-medium my-5">
                {" "}
                You Activities
              </h1>
            </div>

            {/* กรอกข้อมูลและแสดงผล */}
            <div>
              <div className="flex justify-center my-5">
                <From onAddItem={onAddNewCard} API_URL ={ACTIVITY_URL} location={location} toggleUpdate={toggleUpdate} setToggleUpdate={setToggleUpdate}/>
              </div>
              <div className=" grid grid-cols-4 gap-4 mx-10">
                { showData?.length > 0 &&     showData?.map((element) => {
                    return <Card {...element} key={element.activityID} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
