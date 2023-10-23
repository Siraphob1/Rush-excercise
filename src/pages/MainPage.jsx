import DesktopMain from "../assets/image/Desktop_Main.jpg";
import NavBar from "../components/navBar";
import { Nav } from "../components/MainPage/Nav";

// import { From } from "../components/MainPage/From";
import { Card } from "../components/MainPage/Card";
import { From } from "../components/MainPage/From";
import { useState } from "react";

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

  const [items, setItems] = useState(initdata);
  const onAddNewCard = (newItem) => {
    setItems((prevItems) => {
      return [newItem, ...prevItems];
    });
  };

  return (
    <main className="w-full  main-screen" data-theme="light">
      {/* SetBg */}
      <NavBar />
      <div className="relative">
        <img src={DesktopMain} alt="DesktopMain" />
        <div className="absolute top-0  w-full h-full ">
          {/* navBarMainPage */}
          <Nav />

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
                <From onAddItem={onAddNewCard} />
              </div>
              <div className=" grid grid-cols-4 gap-4 mx-10">
                {items.map((element) => {
                  return <Card {...element} key={element.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
