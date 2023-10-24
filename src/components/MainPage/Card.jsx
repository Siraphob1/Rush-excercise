/* eslint-disable react/prop-types */
import imgWalking from '../../assets/image/Desktop/walking.jpg'
import imgBiking from '../../assets/image/Desktop/Desktop_Biking.jpg'
import imgHiking from '../../assets/image/Desktop/Desktop_Hiking.jpg'
import imgSwimming from '../../assets/image/Desktop/Desktop_Swimming.jpg'
import imgRunning from '../../assets/image/Desktop/Desktop_Running.jpeg'
import { useEffect, useState } from 'react'
export const Card = (props) => {
  const {about,activity,} = props

  const [imgBG , setImgBG] = useState('');
  const [pos, setPos] = useState('');
  const [size, setSize] = useState('');
  const [classtopic , setClassTopic] = useState('');

  useEffect(()=>{
    const typeActivty = activity;

    switch (typeActivty) {
      case "Biking" :   setImgBG(imgBiking);  
                        setPos("70% 48%");   
                        setSize('200%');
                        setClassTopic('text-white');
      break;
      case "Hiking" :   setImgBG(imgHiking);
                        setPos("50% 35%");
                        setSize('120%');
                        setClassTopic('text-white');
      break;
      case "Running":   setImgBG(imgRunning);
                        setPos("95% 15%");
                        setSize('180%');
                        setClassTopic('text-white');
      break;
      case "Swimming":  setImgBG(imgSwimming);
                        setPos("0% 80%");
                        setSize('160%');
                        setClassTopic('text-white');
      break;
      case "Walking":   setImgBG(imgWalking);
                        setPos("20% 32%");
                        setSize('170%');
                        setClassTopic('text-black');
      break;
    
      default:
        break;
    }

    console.log(imgBG)
  },[])

  return (
    <div>
      <div className="card w-[20rem] h-[10rem] bg-base-100 shadow-xl rounded-3xl"
           style={{
                  backgroundImage:`url(${imgBG})`,
                   backgroundSize:size,
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: pos
          }}
      >
        
        <div className={`card-body  flex flex-col items-end ${classtopic}  rounded-3xl hover:bg-black hover:bg-opacity-40 hover:cursor-pointer`}>
          <h1 className="card-title uppercase font-bold pt-[0.5rem] "> {activity} </h1>
          <p className=""> {about}</p>

        </div>
      </div>
    </div>
  );
};
