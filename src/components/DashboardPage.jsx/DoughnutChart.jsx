import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DoughnutLabel from './DoughnutLabel';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

    const bgcolor = {
        biking: '#000000',
        hiking:'#BDFF00',
        running: '#CCCCCC' ,
        swimming: '#C6FCA5',
        walking: '#FFEBA3'
    }

    const options = {
        responsive: true,         
        plugins: {
          legend: {             //button toggle show graph
            display:false,
            position:'right'
          },          
        },
        
    };

    const data = {
        labels: ['Biking' ,'Hiking' ,'Running' ,'Swimming' ,'Walking'],
        datasets: [
          {
            label: 'count',
            data: [10,1,2,3,5],
            backgroundColor: [bgcolor.biking, bgcolor.hiking , bgcolor.running , bgcolor.swimming , bgcolor.walking],
            borderColor: [
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 3,
          },
        ],
      };
  return (
    <section className='h-[70%] '>
        <h1 className='text-black font-semibold mb-[1rem]'>Doughnut Chart of Activities</h1>
        <div className=' h-[100%] border flex items-center gap-x-[3rem]'>
            <Doughnut options={options} data={data}  />
            <div className=''>                
                <DoughnutLabel bgcolor={`bg-[#000000] rounded-full w-[1rem] h-[1rem]`} type={'Biking'}  percent={7}/>              
                <DoughnutLabel bgcolor={`bg-[#BDFF00] rounded-full w-[1rem] h-[1rem]`} type={'Hiking'}  percent={7}/>              
                <DoughnutLabel bgcolor={`bg-[#CCCCCC] rounded-full w-[1rem] h-[1rem]`} type={'Running'}  percent={7}/>              
                <DoughnutLabel bgcolor={`bg-[#C6FCA5] rounded-full w-[1rem] h-[1rem]`} type={'Swimming'}  percent={7}/>              
                <DoughnutLabel bgcolor={`bg-[#FFEBA3] rounded-full w-[1rem] h-[1rem]`} type={'Walking'}  percent={7}/>     
            </div>
        </div>
    </section>
  )
}

export default DoughnutChart