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
import { Col, Row } from 'react-bootstrap'

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
        <section>
          <Col className='mx-2 d-flex'>
            <Row>
              <h6>Time Range: </h6>
            </Row>
            <Row className='mx-3'>
              <select>
                <option>Daily</option>
                <option>Month-To-Date</option>
                <option>Year-To-Date</option>
              </select>
            </Row>
          </Col>
          <Col>
            <Row>
              <Line options={options} data={data} />
            </Row>
          </Col>
        </section>
    );
}

export default Charts
