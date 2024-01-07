import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const Charts = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'VOC CSAT (Year-To-Date)',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
      const scores = [5.00, 1.00, 3.00, 5.00, 4.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00 ] 

      const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'AVG CSAT',
            data: scores,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <div className='mt-5'>
          <div className='mx-5 d-flex border border-1'>
            <p className='d-flex align-items-center my-1'>Time Range: </p>
            <select className='mx-2 px-3'>
              <option>Daily</option>
              <option>MTD</option>
              <option>YTD</option>
            </select>
          </div>


            <Line options={options} data={data} />;
        </div>
    );
}

export default Charts
