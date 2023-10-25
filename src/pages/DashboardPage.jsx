import NavBar from '../components/navBar';
import DashboardCard from '../components/DashboardPage.jsx/DashboardCard';
import VerticalChart from '../components/DashboardPage.jsx/VerticalChart';
import DoughnutChart from '../components/DashboardPage.jsx/DoughnutChart';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { axiosPrivate } from '../api/axios';
import useRefreshToken from '../hooks/useRefreshToken';



const DashboardPage = () => {   
  const navigate = useNavigate();
  const {auth , activity , setActivity , persist} = useAuth();

  const [countFinished , setCountFinished] = useState(0);
  const [countCancel , setCountCancel] = useState(0);
  const [countInprogress , setCountInprogress] = useState(0);
  const [countAll , setCountAll] = useState(0);
  const [countBiking , setCountBiking] = useState(0);
  const [countHiking , setCountHiking] = useState(0);
  const [countRunning , setCountRunning] = useState(0);
  const [countSwimming , setCountSwimming] = useState(0);
  const [countWalking , setCountWalking] = useState(0);

  const [percentFinished , setPercenFinished] = useState(0);
  const [percentCancel , setPercenCancel] = useState(0);
  const [percentInprogress , setInprogress] = useState(0);

  const [firstRender , setFirstRender] = useState(false);
  const location = useLocation();
  const refresh = useRefreshToken();

  const filterData = () =>{
    // console.log(activity.activityList)
    const countBike = activity.activityList.filter((e)=> e.type === "Biking").length;
    const countHike = activity.activityList.filter((e)=> e.type === "Hiking").length;
    const countRun = activity.activityList.filter((e)=> e.type === "Running").length;
    const countSwim = activity.activityList.filter((e)=> e.type === "Swimming").length;
    const countWalk = activity.activityList.filter((e)=> e.type === "Walking").length;

    const countfinish =  activity.activityList.filter((e)=> e.status === "finished").length;
    const countcancel =  activity.activityList.filter((e)=> e.status === "canceled").length;
    const countinprogress =  activity.activityList.filter((e)=> e.status === "inprogress").length;    
    const countall = parseInt(countfinish) + parseInt(countcancel) + parseInt(countinprogress);
   
    setCountBiking(countBike);
    setCountHiking(countHike);
    setCountRunning(countRun);
    setCountSwimming(countSwim);
    setCountWalking(countWalk);
    setCountFinished(countfinish);
    setCountCancel(countcancel);
    setCountInprogress(countinprogress);
    setCountAll(countall);

    calPercent(countall , countfinish , countcancel , countinprogress)

  }

  const calPercent = (countall , countfinish , countcancel , countinprogress) =>{
    const numall = countall
    const pfinish = (100/numall) * parseInt(countfinish);
    const pcancel = (100/numall) * parseInt(countcancel);
    const pinprogress = (100/numall) * parseInt(countinprogress);
    setPercenFinished(pfinish.toFixed(2));
    setPercenCancel(pcancel.toFixed(2));
    setInprogress(pinprogress.toFixed(2));
    
  }

  useEffect(()=>{
    const ACTIVITY_URL = `/api/activity/${auth?.userID}`
        const getActivities = async () => {
            try {
                
                const response = await axiosPrivate.get(ACTIVITY_URL, {
                    headers: {"Authorization" : `Bearer ${auth?.accessToken}`}
                });
                await refresh();
                setActivity({...activity , activityList:response.data.activitiesList})     
                setFirstRender(true)         
                // console.log(response)
                
            } catch (err) {
                console.error(err.response);
                if(!persist) navigate('/login' , {state: {from:location} , replace:true})
                navigate('/' , {state: {from:location} , replace:true})
            }
          }
          getActivities();
          

  },[])

  useEffect(()=>{
    if(activity.activityList){
      filterData();
      // calPercent();
    } 
  },[firstRender])

  
  return (
    <section className='bg-black min-h-screen relative'>
        
        {/* Background white ball */}
        <div className='w-[30rem] h-[30rem] bg-white bg-opacity-40 blur-[100px] rounded-full mx-auto'>
        </div>

        {/* Body */}
        <section className='absolute w-full min-h-screen top-0 left-0 '>
            <NavBar/>   

            <main className='py-[2rem] px-[4rem]'>
                {/* Count */}
                <section className='flex gap-x-[2rem]'>
                    <DashboardCard topic={'Total Activities'} count={countAll} percent={'100%'}/>
                    <DashboardCard topic={'Finished Activities'} count={countFinished} percent={`${percentFinished}%`}/>
                    <DashboardCard topic={'Canceled Activities'} count={countCancel} percent={`${percentCancel}%`}/>
                    <DashboardCard topic={'Activities in Progress'} count={countInprogress} percent={`${percentInprogress}%`}/>
                </section>
                
                {/* Chart */}
                <section className='flex gap-x-[2rem] mt-[2rem]'>  
                    {/* VerticalChart*/}
                    <div className='w-[30rem] h-[20rem] bg-white rounded-lg flex justify-center  px-[1rem] pt-[2rem]'>
                        <VerticalChart countBiking={countBiking} countHiking={countHiking} countRunning={countRunning} countSwimming={countSwimming} countWalking={countWalking}/>
                    </div>   
                     {/* DoughnutChart*/}                 
                    <div className='w-[30rem] h-[20rem] bg-white rounded-lg flex  items-start px-[1rem] pt-[2rem]'>
                        <DoughnutChart countBiking={countBiking} countHiking={countHiking} countRunning={countRunning} countSwimming={countSwimming} countWalking={countWalking}/>
                    </div>
                </section>

                <button className="btn btn-outline text-white hover:text-black hover:bg-white w-[8rem] normal-case mt-[2rem]" onClick={()=> navigate(-1)} >Back</button>
            </main>
        </section>

       
        
    </section>
  )
}

export default DashboardPage