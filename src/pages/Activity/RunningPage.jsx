import { Link } from "react-router-dom"
import ActivityRemaining from "../../components/Activitylayout/ActivityRemaining"
import imgRunning  from '../../assets/image/Desktop/Desktop_Running.jpeg'
function RunningPage() {
  return (
    <ActivityRemaining image ={imgRunning}>
        <h1>Running</h1>


    </ActivityRemaining>
  )
}

export default RunningPage