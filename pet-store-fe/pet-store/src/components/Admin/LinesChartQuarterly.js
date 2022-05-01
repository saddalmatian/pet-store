import React from 'react';
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["T1", "T2", "T3", "T4"],
  datasets: [
    {
      label: "Phụ kiện",
      data: [33, 53, 51, 42],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Dịch vụ",
      data: [33, 25, 85, 80],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Thống kê doanh thu theo qúi',
            color:'#FE9938',
            font: {
                size:34
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
                           }
        }

    },
    legend:{
        display: true,
        position: 'right'
    }
}

function LinesChartQuarterly() {

    return (
        <div>
           <Line data={data} options={options} />
        </div>
    )
}

export default  LinesChartQuarterly;