/* eslint-disable react/prop-types */
import { useState } from "react";

export const From = (props) => {
  // useState
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [activity, setActivity] = useState("Activity");
  const [startDate, setStartDate] = useState("");
  const [startHour, setStartHour] = useState("hr");
  const [startMinute, setStartMinute] = useState("min");
  const [endDate, setEndDate] = useState("");
  const [endHour, setEndHour] = useState("hr");
  const [endMinute, setEndMinute] = useState("min");

  const formatDate = (date, hour, minute) => {
    const day = date.split("-")[2];
    const month = date.split("-")[1];
    const year = date.split("-")[0];
    const dateGMT = new Date(year, month, day, hour, minute);
    return dateGMT.toString();
  };

  //Data
  const createCard = (e) => {
    e.preventDefault();
    if (!name) return alert("กรุณาป้อนข้อมูล ชื่อรายการ");
    if (!about) return alert("กรุณาป้อนข้อมูล คำอธิบาย");
    if (!activity) return alert("กรุณาป้อนข้อมูล Activity");
    if (!startDate) return alert("กรุณาป้อนข้อมูล StartDate");
    if (!startHour) return alert("กรุณาป้อนข้อมูล StartHour");
    if (!startMinute) return alert("กรุณาป้อนข้อมูล StartMinute");
    if (!endDate) return alert("กรุณาป้อนข้อมูล EndDate");
    if (!endHour) return alert("กรุณาป้อนข้อมูล EndHour");
    if (!endMinute) return alert("กรุณาป้อนข้อมูล EndMinute");
    else {
      console.log(startDate);
      const newCard = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        about: about,
        activity: activity,
        startDate: formatDate(startDate, startHour, startMinute),
        endDate: formatDate(endDate, endHour, endMinute),
      };
      props.onAddItem(newCard);
      setName("");
      setAbout("");
      setActivity("");
      setStartDate("");
      setStartHour("");
      setStartMinute("");
      setEndDate("");
      setEndHour("");
      setEndMinute("");
    }
  };

  return (
    // FromAddActivity //
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn m-1  text-[#ffffff]  btn-wide btn-lg btn-ghost btn-outline rounded-full "
      >
        + add activity
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
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="input input-bordered block  w-full  "
                />
              </section>

              {/* select เลือกประเภทการออกกำลังกาย */}
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
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
