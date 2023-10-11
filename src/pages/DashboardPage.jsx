import NavBar from '../components/navBar';
import DashboardCard from '../components/DashboardPage.jsx/DashboardCard';
import VerticalChart from '../components/DashboardPage.jsx/VerticalChart';
import DoughnutChart from '../components/DashboardPage.jsx/DoughnutChart';
import { useNavigate } from 'react-router-dom';



const DashboardPage = () => {   
  const navigate = useNavigate();

  
  return (
    <section className='bg-black min-h-screen relative'>
        
        {/* Background white ball */}
        <div className='w-[20rem] h-[20rem] bg-white bg-opacity-40 blur-[100px] rounded-full mx-auto'>
        </div>

        <section className='absolute w-full min-h-screen top-0 left-0 '>
            <NavBar/>   

            <main className='py-[2rem] px-[4rem]'>
                {/* Count */}
                <section className='flex gap-x-[2rem]'>
                    <DashboardCard topic={'Total Activities'} count={14} percent={'100%'}/>
                    <DashboardCard topic={'Finished Activities'} count={10} percent={'71%'}/>
                    <DashboardCard topic={'Canceled Activities'} count={1} percent={'7.1%'}/>
                    <DashboardCard topic={'Activities in Progress'} count={3} percent={'21%'}/>
                </section>
                
                {/* Chart */}
                <section className='flex gap-x-[2rem] mt-[2rem]'>  
                    {/* VerticalChart*/}
                    <div className='w-[30rem] h-[20rem] bg-white rounded-lg flex justify-center  px-[1rem] pt-[2rem]'>
                        <VerticalChart/>
                    </div>   
                     {/* DoughnutChart*/}                 
                    <div className='w-[30rem] h-[20rem] bg-white rounded-lg flex  items-start px-[1rem] pt-[2rem]'>
                        <DoughnutChart/>
                    </div>
                </section>

                <button className="btn btn-outline text-white hover:text-black hover:bg-white w-[8rem] normal-case mt-[2rem]" onClick={()=> navigate(-1)} >Back</button>
            </main>
        </section>

       
        
    </section>
  )
}

export default DashboardPage