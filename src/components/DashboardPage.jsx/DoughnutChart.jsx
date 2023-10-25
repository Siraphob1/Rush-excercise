/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DoughnutLabel from './DoughnutLabel';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({countBiking , countHiking , countRunning , countSwimming , countWalking}) => {

  const [pBikging ,setPBiking] = useState(0);
  const [pHikging ,setPHiking] = useState(0);
  const [pRunning,setPRunning] = useState(0);
  const [pSwimming,setPSwimming] = useState(0);
  const [pWalking ,setPWalking] = useState(0);

  useEffect(()=>{
    const total = countBiking + countHiking + countRunning + countSwimming + countWalking;
    setPBiking(100/total*countBiking);
    setPHiking(100/total*countHiking);
    setPRunning(100/total*countRunning);
    setPSwimming(100/total*countSwimming);
    setPWalking(100/total*countWalking);
  },[countBiking , countHiking , countRunning , countSwimming , countWalking])
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
            data: [countBiking,countHiking,countRunning,countSwimming,countWalking],
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
        <div className=' h-[100%]  flex items-center gap-x-[3rem]'>
            <Doughnut options={options} data={data}  />
            <div className=''>                
                <DoughnutLabel bgcolor={`bg-[#000000] rounded-full w-[1rem] h-[1rem]`} type={'Biking'}  percent={pBikging.toFixed(2)}/>              
                <DoughnutLabel bgcolor={`bg-[#BDFF00] rounded-full w-[1rem] h-[1rem]`} type={'Hiking'}  percent={pHikging.toFixed(2)}/>              
                <DoughnutLabel bgcolor={`bg-[#CCCCCC] rounded-full w-[1rem] h-[1rem]`} type={'Running'}  percent={pRunning.toFixed(2)}/>              
                <DoughnutLabel bgcolor={`bg-[#C6FCA5] rounded-full w-[1rem] h-[1rem]`} type={'Swimming'}  percent={pSwimming.toFixed(2)}/>              
                <DoughnutLabel bgcolor={`bg-[#FFEBA3] rounded-full w-[1rem] h-[1rem]`} type={'Walking'}  percent={pWalking.toFixed(2)}/>     
            </div>
        </div>
    </section>
  )
}

export default DoughnutChart