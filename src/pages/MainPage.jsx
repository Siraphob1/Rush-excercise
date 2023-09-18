import React from "react";
import DesktopMain from "../assets/image/Desktop_Main.jpg";
export const MainPage = () => {
  return (
    <main className="w-full main-screen" data-theme="light">
      <section className="relative">
        <img src={DesktopMain} alt="DesktopMain" />

        <div className="absolute top-0  w-full h-full flex justify-between ">
          <section className="">

            <p class="font-bold text-6xl text-[#BDFF00] mt-20 ml-20">
              Hello, Tang
            </p>

            <button className="mt-20 ml-20 btn btn-active btn-ghost font-bold text-xl text-[#ffffff] btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
              + add activity
            </button>
          </section>

          <section className="mt-20 mr-20">
            <img src="" alt="Profile" />
            <p className="font-bold text-6xl text-[#ffffff]"> img soon !!!</p>
          </section>
        </div>
      </section>
    </main>
  );
};
