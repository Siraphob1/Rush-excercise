/* eslint-disable react/prop-types */

const DoughnutLabel = ({bgcolor, type , percent}) => {
   
  return (
    <div className="flex justify-between  w-[10rem]">
        {/* Left */}
        <section className="flex items-center gap-x-[0.2rem]">
            <div className={`${bgcolor}`}></div>
            <p className="text-black">{type}</p>  
        </section>  

        {/* Right */}
        <section className="text-black">{percent}%</section>
    </div>
  )
}

export default DoughnutLabel