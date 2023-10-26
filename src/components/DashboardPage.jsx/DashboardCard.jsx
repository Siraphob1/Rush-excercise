/* eslint-disable react/prop-types */

const DashboardCard = ({topic , count , percent}) => {
  return (
    <section className="bg-white rounded-md w-[15rem] text-black font-semibold px-[0.5rem] pt-[0.5rem] pb-[1rem]">
        <h3>{topic}</h3>
        <div className="text-[1.8rem]">{count}</div>
        <div className="text-black text-end">{percent}</div>
    </section>
  )
}

export default DashboardCard