import React from 'react';
import {Line, Pie} from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  } from 'chart.js';
import Link from 'next/link';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  BarController,
  LineElement,
  Title,
  Tooltip,
  Legend
  );

 
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };
  
  const PieChart= () => (
    
    <div>
        <ul style={{listStyleType: 'none', padding:'20px'}}>
      <li style={{padding:'20px', border:'1px solid #333',backgroundColor:'aliceblue', display:'inline-block', margin:'20px'}}>
        <Link href="/BarChart">
          <a>Bar Chart</a>
        </Link>
      </li>
      <li style={{padding:'20px', border:'1px solid #333',backgroundColor:'lightblue', display:'inline-block'}}>
        <Link href="/PieChart">
          <a>Pie Chart</a>
        </Link>
      </li>
      </ul>
      <h2>Pie Chart</h2>
      <Pie
        data={data}
        width={400}
        height={400}
      />
      
    </div>
    
  );

  export default PieChart;