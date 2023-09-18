import NavBar from "../navBar"

/* eslint-disable react/prop-types */

const Loginlayout = ({children,image}) => {
  return (
    <main className=" w-full min-h-screen" data-theme="light">
        <NavBar/>
        <div >
            <section className=" relative">
                <img src={image} alt="image" />
                <div className=" absolute top-0 left-0 w-full h-full flex">

                    {/* Left */}
                    <section className=" bg-black bg-opacity-40 w-[50%] h-full flex justify-center items-center">
                        {children}
                    </section>

                    {/* Right */}
                    <section className="  w-[50%] h-full flex flex-col items-center justify-center text-white">
                        <h1 className="  text-[4rem] font-bold">RUSH</h1>
                        <p className=" text-[1.8rem] text-center opacity-80 w-[480px]">Exercise not only changes your body, it changes your mind.</p>
                    </section>
                </div>
            </section>
        </div>
       
    </main>
  )
}

export default Loginlayout