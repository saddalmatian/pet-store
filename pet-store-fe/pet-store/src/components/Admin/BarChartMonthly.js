import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';
import React from 'react';


 // Return with commas in between
 var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

var dataPack1 = [2100, 2200, 2600, 3500];
var dataPack2 = [1000, 1200, 1300, 1400];
var dates = ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'];


const data = {
    labels: dates,
    datasets: [
    {
        label: 'Người dùng cũ',
        data: dataPack1,
                    backgroundColor: "rgba(55, 160, 225, 0.7)",
                    hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
                    hoverBorderWidth: 2,
                    hoverBorderColor: 'lightgrey'
    },
    {
        label: 'Người dùng mới',
        data: dataPack2,
                    backgroundColor: "rgba(225, 58, 55, 0.7)",
                    hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
                    hoverBorderWidth: 2,
                    hoverBorderColor: 'lightgrey'
    },
    ]
}
const options= {
    plugins: {
        title: {
            display: true,
            text: 'Thống kê người dùng trong tháng',
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
         animation: {
        duration: 10,
    },

    tooltips: {
                mode: 'label',
      callbacks: {
      label: function(tooltipItem, data) { 
          return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
      }
      }
     },
    scales: {
      x: { 
          stacked: true, 
        gridLines: { display: false },
        },
      y: { 
          stacked: true, 
        ticks: {
                callback: function(value) { return numberWithCommas(value); },
                 }, 
        },
    }, // scales
    legend: {display: true}
} // options
function PieChartMonthly() {

    return (
        <Bar data={data} options={options}      />
    )
}

export default  PieChartMonthly;