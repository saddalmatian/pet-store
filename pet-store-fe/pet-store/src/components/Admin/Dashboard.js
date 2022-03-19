import React from 'react';
import './Dashboard.css'
import ChartQuarterly from './LinesChartQuarterly'
import ChartMonthly from './LinesChartMonthly'
import BarChartMonthly from './BarChartMonthly'
import BarChartQuarterly from './BarChartQuarterly'
import 'chart.js/auto';
import { Line } from "react-chartjs-2";


const data = {
    labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    datasets: [
      {
        label: "Khuyến mãi được tung ra",
        data: [33, 53, 85, 41],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Khuyến mãi được sử dụng",
        data: [33, 25, 35, 51],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  const data2 = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"],
    datasets: [
      {
        label: "Phụ kiện",
        data: [33, 53, 85, 41],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Dịch vụ",
        data: [33, 25, 35, 51],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
function Dashboard() {
    return(
    <div className="content-dashboard container-fluid">
        <div className="chart d-flex col-md">
            <div className="chart-doughnut " style={{width: '50%', height: '50%'}}>
                
                <ChartMonthly/>
                
            </div>
            <div className="chart-pie " style={{width: '50%', height: '50%'}}>
                
                <ChartQuarterly/>
                
            </div>
        </div>
            <div className="chart d-flex col-md">
                <div className="chart-doughnut " style={{width: '50%', height: '50%'}}>
                
                <BarChartMonthly/>
                
            </div> 
            <div className="chart-pie " style={{width: '50%', height: '50%'}}>
                
                <BarChartQuarterly/>
                
            </div>
                </div>
            
                <div className="chart d-flex col-md">
                <div className="chart-doughnut " style={{width: '50%', height: '50%'}}>
                
                <Line data={data} options={ {
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: 'Thống kê khuyến mãi trong tháng',
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
                                    }}/>
                
            </div> 
            <div className="chart-pie " style={{width: '50%', height: '50%'}}>
                
            <Line data={data2} options={ {
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: 'Thống kê khuyến mãi trong quý',
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
                                    }}/>
                
            </div>
                </div>
            
            
        </div>
    )
}
export default Dashboard;