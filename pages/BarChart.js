import React from 'react';
import {Bar} from 'react-chartjs-2';
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
    BarElement,
    } from 'chart.js';
import Link from 'next/link';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    BarController,
    LineElement,
    Title,
    Tooltip,
    Legend
    );
  

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}

const BarChart=() => {
  
    return (
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
        <h2>Bar Chart</h2>
        <Bar
          data={data}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  
};

export default BarChart;