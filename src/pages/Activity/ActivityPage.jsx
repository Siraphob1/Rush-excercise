import ActivityRemaining from "../../components/Activitylayout/ActivityRemaining"

import imgBiking  from '../../assets/image/Desktop/Desktop_Biking.jpg'
import imgHiking  from '../../assets/image/Desktop/Desktop_Hiking.jpg'
import imgRunning  from '../../assets/image/Desktop/Desktop_Running.jpeg'
import imgSwimming  from '../../assets/image/Desktop/Desktop_Swimming.jpg'
import imgWalking  from '../../assets/image/Desktop/Desktop_Walking1.jpg'

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
function ActivityPage() {
  const [currentpath , setCurrentpath] = useState()
  const location = useLocation();
  useEffect(()=>{
    console.log(location)
    const splitlocation = location.pathname.split('/')[2]
    setCurrentpath(splitlocation)
  },[])
  return (
    <div>
      {currentpath === 'biking'  ? <ActivityRemaining image ={imgBiking} topic={'Biking'} bgPos={'50% 48%'}/>
                                 : null
      }
      {currentpath === 'hiking'  ? <ActivityRemaining image ={imgHiking} topic={'Hiking'} bgPos={'50% 40%'}/>
                                 : null
      }      
      {currentpath === 'running' ? <ActivityRemaining image ={imgRunning} topic={'Running'} bgPos={'50% 15%'}/>
                                 : null
      }
      {currentpath === 'swimming'? <ActivityRemaining image ={imgSwimming} topic={'Swimming'} bgPos={'50% 80%'}/>
                                 : null
      }
      {currentpath === 'walking' ? <ActivityRemaining image ={imgWalking} topic={'Walking'} bgPos={'50% 50%'}/>
                                 : null
      }

    </div>
  )
}

export default ActivityPage