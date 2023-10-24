/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const VerticalChart = ({countBiking , countHiking , countRunning , countSwimming , countWalking}) => {
    const options = {
        responsive: true,         
        plugins: {
          legend: {             //button toggle show graph
            display:false,
          },          
        },
        
    };

    
    const data = {
        labels:  ['Biking' ,'Hiking' ,'Running' ,'Swimming' ,'Walking'],
        datasets: [
          {
            label: 'count',
            data: [countBiking,countHiking,countRunning,countSwimming,countWalking],
            backgroundColor: ['rgba(0, 0, 0)','rgba(189, 255, 0)' ,'rgba(204, 204, 204)' , 'rgba(189, 252, 165)' , 'rgba(255, 235, 165)']
          },        
        ],
      };
      

  return (
    <section className='w-full '>
        <h1 className='text-black font-semibold mb-[1rem]'>Number of Activities</h1>
        <Bar options={options} data={data}/>
    </section>
  )
}

export default VerticalChart
