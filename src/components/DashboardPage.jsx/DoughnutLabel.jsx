/* eslint-disable react/prop-types */

const DoughnutLabel = ({bgcolor, type , percent}) => {
   
  return (
    <div className="flex justify-between border w-[10rem]">
        {/* Left */}
        <section className="flex items-center gap-x-[0.2rem]">
            <div className={`${bgcolor}`}></div>
            <p>{type}</p>  
        </section>  

        {/* Right */}
        <section>{percent}%</section>
    </div>
  )
}

export default DoughnutLabel