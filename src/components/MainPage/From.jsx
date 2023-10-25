/* eslint-disable react/prop-types */
import { useState } from "react";
import { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const From = (props) => {
  const {API_URL , location , toggleUpdate , setToggleUpdate } = props;

  const {auth} = useAuth();
  const navigate = useNavigate();

  // useState
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Activity");
  const [startDate, setStartDate] = useState("");
  const [startHour, setStartHour] = useState("hr");
  const [startMinute, setStartMinute] = useState("min");
  const [endDate, setEndDate] = useState("");
  const [endHour, setEndHour] = useState("hr");
  const [endMinute, setEndMinute] = useState("min");

  
  // format day to  unit GMT
  const formatDate = (date, hour, minute) => {
    const day = date.split("-")[2];
    const month = date.split("-")[1];
    const year = date.split("-")[0];

    //convert type to number
    const numday = parseInt(day);
    const nummonth = parseInt(month)-1;
    const numyear = parseInt(year);

    //generate day unit GMT
    const dateGMT = new Date(numyear, nummonth, numday, hour, minute);
    return dateGMT.toString();
  };

  const clearInput = () =>{
      setName("");
      setDescription("");
      setType("Activity");
      setStartDate("");
      setStartHour("hr");
      setStartMinute("min");
      setEndDate("");
      setEndHour("hr");
      setEndMinute("min");
  }

  //check startDate   < endDate
  //check currentDate < endDate
  //check current min < end min atleast 5 minutes
  const dateCheck = () =>{
    //split start date  
    const startday = startDate.split("-")[2];
    const startmonth = startDate.split("-")[1];
    const startyear = startDate.split("-")[0];

    //convert start date to num
    const startDaynum = parseInt(startday);
    const startMonthnum = parseInt(startmonth);
    const startYearnum = parseInt(startyear);
    const startHrnum = parseInt(startHour);
    const startMinnum = parseInt(startMinute);
    const start = new Date(startYearnum , startMonthnum-1 , startDaynum,startHrnum ,startMinnum ).getTime();
    console.log(`start:${start}`)
    

    //split end date 
    const endday = endDate.split("-")[2];
    const endmonth = endDate.split("-")[1];
    const endyear = endDate.split("-")[0];  

    //convert end date to num
    const endDaynum = parseInt(endday);
    const endMonthnum = parseInt(endmonth);
    const endYearnum = parseInt(endyear);
    const endHrnum = parseInt(endHour);
    const endMinnum = parseInt(endMinute); 
    
    const end = new Date(endYearnum , endMonthnum-1 , endDaynum,endHrnum ,endMinnum ).getTime();
    console.log(`end:${end}`)
    
    const current = new Date().getTime();

   // Start date VS End date
   if(start > end){
    alert ('start time activity  must < end time activity ');  
    return false;
   }

   // Current date VS End date
   if(current > end){
    alert ('current time activity  must < end time activity');  
    return false;
   }  


    //date is OK  can createCard
   return true;   
  }

  //Data
  const createCard = async (e) => {
    e.preventDefault();
    if (!name) return alert("please enter  name");
    if (!description) return alert("please enter  description");
    if (type === "Activity" || !type) return alert("please enter  Activity");
    if (!startDate) return alert("please enter  StartDate");
    if (startHour === "hr") return alert("please enter  StartHour");
    if (startMinute === "min") return alert("please enter  StartMinute");
    if (!endDate) return alert("please enter  EndDate");
    if (endHour === "hr") return alert("please enter  EndHour");
    if (endMinute === "min") return alert("please enter  EndMinute");
    
    const canCreated = dateCheck();
    if(!canCreated) return
     
      const newCard = {       
        name: name,
        description: description,
        type: type,
        startDate: formatDate(startDate, startHour, startMinute),
        endDate: formatDate(endDate, endHour, endMinute),
        createDate: new Date().toString()
      };

      try {
          const response = await axiosPrivate.post(API_URL,newCard, {
            headers: {"Authorization" : `Bearer ${auth?.accessToken}`}
        });
        setToggleUpdate(!toggleUpdate);
        console.log(`toggleUpdate:${toggleUpdate}`)
        // window.location.reload();
      } catch (error) {
        console.error(error.response);
        // navigate('/login' , {state: {from:location} , replace:true})
      }
      props.onAddItem(newCard);     
      clearInput(); 
    
  };

  return (
    // FromAddActivity //
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn m-1  text-[#ffffff]  btn-wide btn-lg btn-ghost btn-outline rounded-full "
      >
        + add Activity
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-auto p-2 shadow bg-white text-primary-content "
      >
        <div className="card-body ">
          <section>
            <form onSubmit={(e) => createCard(e)} className="w-auto">
              {/* placeholder ชื่อ */}
              <section className="mb-3 text-[#000000]">
                <input
                  placeholder="ชื่อรายการ"
                  type="text"
                  // name = "name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered block  w-full  "
                />
              </section>

              {/* placeholder คำอธิบาย */}
              <section className="mb-3 text-[#000000]">
                <input
                  placeholder="คำอธิบาย"
                  type="text"
                  // name = "name"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input input-bordered block  w-full  "
                />
              </section>

              {/* select เลือกประเภทการออกกำลังกาย */}
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="select select-bordered w-full   text-[#000000] mb-3 "
                placeholder="Activity"
              >
                <option disabled defaultValue>
                  Activity
                </option>
                <option>Running</option>
                <option>Biking</option>
                <option>Swimming</option>
                <option>Hiking</option>
                <option>Walking</option>
              </select>
              {/* Start  */}
              <div className="flex items-center  gap-x-[5px] text-[#000000]">
                <label className="w-10 h-full "> Start </label>
                {/* select date */}
                <section className="text-[#000000] ">
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="input input-bordered block  w-full  "
                  />
                </section>
                {/* select Hour */}
                <select
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                  className="select select-bordered  max-w-xs text-[#000000]  w-[70px] pr-0 "
                >
                  <option disabled defaultValue>
                    hr
                  </option>
                  <option>00</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                </select>
                {/* select minute */}
                <select
                  value={startMinute}
                  onChange={(e) => setStartMinute(e.target.value)}
                  className="select select-bordered  max-w-xs text-[#000000] w-[70px] pr-0"
                >
                  <option disabled defaultValue>
                    {" "}
                    min
                  </option>
                  <option>00</option>
                  <option>05</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                  <option>30</option>
                  <option>35</option>
                  <option>40</option>
                  <option>45</option>
                  <option>50</option>
                  <option>55</option>
                </select>
              </div>
              {/* End */}
              <div className="flex items-center  gap-x-[5px] my-3 text-[#000000]">
                <label className="w-10  h-full "> End </label>
                {/* select date */}
                <section className="text-[#000000] ">
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="input input-bordered block  w-full  "
                  />
                </section>
                {/* select Hour */}
                <select
                  value={endHour}
                  onChange={(e) => setEndHour(e.target.value)}
                  className="select select-bordered  max-w-xs text-[#000000] w-[70px] pr-0"
                >
                  <option disabled defaultValue>
                    hr
                  </option>
                  <option>00</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                </select>
                {/* select minute */}
                <select
                  value={endMinute}
                  onChange={(e) => setEndMinute(e.target.value)}
                  className="select select-bordered  max-w-xs text-[#000000] w-[70px] pr-0"
                >
                  <option disabled defaultValue>
                    {" "}
                    min
                  </option>
                  <option>00</option>
                  <option>05</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                  <option>30</option>
                  <option>35</option>
                  <option>40</option>
                  <option>45</option>
                  <option>50</option>
                  <option>55</option>
                </select>
              </div>
              {/* select onSubmit */}
              <section>
                <button type="submin" className="btn btn-outline w-full">
                  Add
                </button>
              </section>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
