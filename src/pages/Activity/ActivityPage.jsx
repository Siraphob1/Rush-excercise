import ActivityRemaining from "../../components/Activitylayout/ActivityRemaining"

import imgBiking  from '../../assets/image/Desktop/Desktop_Biking.jpg'
import imgHiking  from '../../assets/image/Desktop/Desktop_Hiking.jpg'
import imgRunning  from '../../assets/image/Desktop/Desktop_Running.jpeg'
import imgSwimming  from '../../assets/image/Desktop/Desktop_Swimming.jpg'
import imgWalking  from '../../assets/image/Desktop/Desktop_Walking1.jpg'

import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
function ActivityPage() {
  const [currentpath , setCurrentpath] = useState()
  const location = useLocation();
  const {activityID} = useParams();
  useEffect(()=>{
    console.log(location)
    const splitlocation = location.pathname.split('/')[2]
    console.log(activityID)
    setCurrentpath(splitlocation)
  },[])
  return (
    <div>
      {currentpath === 'Biking'  ? <ActivityRemaining image ={imgBiking} topic={'Biking'} bgPos={'50% 48%'} activityID={activityID}/>
                                 : null
      }
      {currentpath === 'Hiking'  ? <ActivityRemaining image ={imgHiking} topic={'Hiking'} bgPos={'50% 40%'} activityID={activityID}/>
                                 : null
      }      
      {currentpath === 'Running' ? <ActivityRemaining image ={imgRunning} topic={'Running'} bgPos={'50% 15%'} activityID={activityID}/>
                                 : null
      }
      {currentpath === 'Swimming'? <ActivityRemaining image ={imgSwimming} topic={'Swimming'} bgPos={'50% 80%'} activityID={activityID}/>
                                 : null
      }
      {currentpath === 'Walking' ? <ActivityRemaining image ={imgWalking} topic={'Walking'} bgPos={'50% 50%'} activityID={activityID}/>
                                 : null
      }

    </div>
  )
}

export default ActivityPage