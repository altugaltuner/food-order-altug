import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import "./PieChart.scss";

const data = {
    labels: ['Dine In', 'To Go', 'Delivery'],
    datasets: [
        {
            label: '# of Votes',
            data: [200, 122, 264],
            backgroundColor: [
                "#EE7AA2",
                '#F8B474',
                '#6EABDE'
            ],
            borderColor: [
                "#EE7AA2",
                '#F8B474',
                '#6EABDE'
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 10,
                usePointStyle: true,
                padding: 20,
                // Burada daha fazla stil özelliği ekleyebilirsiniz.
            },
            align: 'start'
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    let label = context.label;
                    let value = context.formattedValue;
                    return label + ': ' + value + ' customers';
                }
            }
        },
    },
};


const PieChart = () => {
    return (
        <div className="chart-container">
            <div className='top-donut'>
                <h2 className='top-donut-h2'>Most Type Of Order</h2>
                <select name="" id="" className='most-type-of-order-button'>
                    <option value="Today">Today</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </div>

            <Doughnut data={data} options={options} />
        </div>
    );
};

export default PieChart;
