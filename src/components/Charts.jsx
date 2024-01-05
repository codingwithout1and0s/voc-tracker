import { Chart } from 'chart.js';

const Charts = () => {

    const mixedChart = new Chart(ctx, {
        data: {
            datasets: [{
                type: 'bar',
                label: 'Bar Dataset',
                data: [10, 20, 30, 40]
            }, {
                type: 'line',
                label: 'Line Dataset',
                data: [50, 50, 50, 50],
            }],
            labels: ['January', 'February', 'March', 'April']
        },
        options: options
    });

    return (
        <div>
            <h1>Charts</h1>
            <canvas id="mixedChart" style="width:100%;max-width:700px"></canvas>
        </div>
    );
}

export default Charts
