/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NavBar from "../navBar";

function ActivityRemaining({image}) {

  const [displayDays , setDisplayDays] = useState(0);
  const [displayHrs , setDisplayHrs] = useState(0);
  const [displayMin , setDisplayMin] = useState(0);
  const [displaySec , setDisplaySec] = useState(0);

  // Start countdown when first render
  useEffect(()=>{
    setInterval(() => {      
      
      // new Date(year , month , day , hour , minute)
      //js count month from  0 - 11
      //  0 : January
      // 11 : December
      const countdownDate = new Date(2023,9,6,16,45).getTime();
      const currenttime = new Date().getTime();
      const distance = countdownDate - currenttime;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));  
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const secs = Math.floor(distance % (1000 * 60) / (1000));
      
      setDisplayDays(days);
      setDisplayHrs(hours);
      setDisplayMin(mins);
      setDisplaySec(secs)
    }, 1000);

   
    
  },[])


  return (
    <main className=" w-full min-h-screen" data-theme="light">

      {/* Navbar */}
      <NavBar />
      
      {/* Body */}
      <section  className="w-full min-h-[91.5vh] flex flex-col items-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize:'cover',
                  backgroundPosition:'50% 15%',
                  backgroundRepeat:'no-repeat'
                }}
      >            
          {/* Title */}
          <h1 className="text-[8rem] text-white text-center  [text-shadow:_0px_2.5px_3.5px_rgb(0_0_0_/_60%)]">Running</h1>
        
          {/* ใส่นาฬิกา remainning ตรงนี้ */}
          <div className="bg-black bg-opacity-20 px-[5rem]  pb-[2rem] rounded-xl mt-[8rem] mb-[3rem]">
                
                <table className="text-center text-[#BDFF00] font-semibold">
                  {/* Count time */}
                  <thead>
                    <tr className="text-[5rem]">
                      <td className="w-[7rem]">{displayDays < 10 ? `0${displayDays}`  : displayDays}</td> 
                      <td>:</td>
                      <td className="w-[7rem]">{displayHrs < 10 ? `0${displayHrs}`  : displayHrs}</td>
                      <td>:</td>
                      <td className="w-[7rem]">{displayMin < 10 ? `0${displayMin}`  : displayMin}</td>
                      <td>:</td>
                      <td className="w-[7rem]">{displaySec < 10 ? `0${displaySec}`  : displaySec}</td>
                    </tr>
                  </thead>

                  {/* Unit time */}
                  <tbody>
                    <tr className="text-[2rem]">
                      <td>{displayDays > 1 ? `days`  :`day`}</td>
                      <td></td>
                      <td>{displayHrs > 1 ? `hrs`  :`hr`}</td>
                      <td></td>
                      <td>{displayMin > 1 ? `mins`  :`min`}</td>
                      <td></td>
                      <td>{displaySec > 1 ? `secs`  :`sec`}</td>
                    </tr>
                  </tbody>
                </table>
          </div>          

          {/* Detail Button */}
          <button className="btn btn-outline w-[9rem] text-white text-[1.1rem] normal-case tracking-[0.09em] hover:bg-white hover:text-black">Detail</button>
            {/* <from>
              <label>ชื่อรายการ</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <label>คำอธิบาย</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <label>ประเภทกิจกรรม</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <label>เวลาที่เหลือ</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <button className="btn btn-accent">Back</button>
            </from> */}
           
      </section>
     
    </main>
  )
}

export default ActivityRemaining