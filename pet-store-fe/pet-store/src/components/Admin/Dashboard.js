import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import Header from "./Header"
import ChartQuarterly from './LinesChartQuarterly'
import ChartMonthly from './LinesChartMonthly'
import BarChartMonthly from './BarChartMonthly'
import BarChartQuarterly from './BarChartQuarterly'
import 'chart.js/auto';
import { Pie, Line, Bar } from "react-chartjs-2";
import axios from 'axios';



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

    const initValues = {
        type: 'Accessories',
        sort: 'desc'
    }
    const [select, setSelect] = useState(initValues);

    async function handleChange(e) {
        const { name, value } = e.target;
        setSelect({ ...select, [name]: value })

    }

    console.log(initValues.type)
    const [profits, setProfits] = useState([])
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'
    try {

        useEffect(async function () {
            await axios.get(`http://127.0.0.1:8000/dashboards/get-most-profit?product_type=${select.type}&order_by=${select.sort}`,
                {
                    headers: {
                        accept: 'application/json',
                        'authorization-token': token

                    }
                }
            )
                .then(res => setProfits(res.data))
                .catch(err => console.log(JSON.stringify(err, null, 2)))
        }, [])

    } catch (e) {
        console.log(e)
    }
    console.log(profits)
    let chartData;
    //Tong doanh thu
    if (profits.length > 0) {
        const labels = [];
        const dataTotal = [];
        const dataCost=[];
        const dataSold=[]
        for (var i = 0; i < profits.length; i++) {
            labels.push(profits[i].ProductName)
            dataCost.push(profits[i].ProductCost);
            dataSold.push(profits[i].ProductSold);
            
        }
        console.log(labels, data)
        const customLabel = labels?.map((label, index) => `${label}`)
        const orginalProfit = dataCost?.map((d,i)=> d*dataSold[i]);
        chartData = {
            labels: labels,
            datasets: [
                {
                    label: "Markets Monitored",
                    backgroundColor: [
                        "#83ce83",
                        "#959595",
                        "#f96a5d",
                        "#00A6B4",
                        "#6800B4",
                    ],
                    hoverOffset: 4,
                    data: orginalProfit,
                },]

        }
        console.log(customLabel);
    }
    let chartData2;

    if (profits.length > 0) {
        const labels = [];
        const data = [];
        
        for (var i = 0; i < profits.length; i++) {
            labels.push(profits[i].ProductName)
            data.push(profits[i].Profit);
            
        }
        console.log(labels)
        const customLabel = labels?.map((label, index) => `${label}`)
        
        chartData2 = {
            labels: labels,
            datasets: [
                {
                    label: "Markets Monitored",
                    backgroundColor: [
                        "#83ce83",
                        "#959595",
                        "#f96a5d",
                        "#00A6B4",
                        "#6800B4",
                    ],
                    hoverOffset: 4,
                    data: data,
                },]

        }
     
    }
    //Most sold data chart
    const [sold, setSold] = useState([])
    try {

        useEffect(async function () {
            await axios.get('http://127.0.0.1:8000/dashboards/get-most-sold?order_by=desc',
                {
                    headers: {
                        accept: 'application/json',
                        'authorization-token': token

                    }
                }
            )
                .then(res => setSold(res.data))
                .catch(err => console.log(JSON.stringify(err, null, 2)))
        }, [])

    } catch (e) {
        console.log(e)
    }
    console.log(sold)
    let barData;

    if (sold.length > 0) {
        const labels = [];
        const data = [];
        for (var i = 0; i < sold.length; i++) {
            if(i<10){
            labels.push(sold[i].ProductName)
            data.push(sold[i].ProductSold);
        }
        }
        console.log(labels, data)
        const customLabel = labels?.map((label, index) => index<10?index:null)
        barData = {
            labels: customLabel,
            datasets: [
                {
                    label: "sold",
                    data: data,
                    backgroundColor: "rgba(55, 160, 225, 0.7)",
                    hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
                    hoverBorderWidth: 2,
                    hoverBorderColor: 'lightgrey'
                },
                
            ]

        }
        console.log(customLabel);
    }
    // Return with commas in between
    var numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    return (
        <div className="content-dashboard container-fluid" style={{ paddingLeft: "0" }}>
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Dashboard" /></div>
            <div style={{ marginLeft: '70px' }}>
                <div className="" style={{ marginTop: '10px' }}>

                    <select className="form-control-lg border" name="type" onChange={handleChange} style={{ width: "110px", height: "30px", marginLeft: "10px" }}>
                        <option value="Accessories" >Accessories</option>
                        <option value="Food" >Food</option>
                        <option value="Hygiene" >Hygiene</option>
                    </select>
                    <select className="form-control-lg border" name="sort" onChange={handleChange} style={{ width: "80px", height: "30px", marginLeft: "10px" }}>
                        <option value="desc" >Desc</option>
                        <option value="asc" >Asc</option>

                    </select>
                    <div className="chart d-flex col-md" >

                        <div className="chart-doughnut text-center col-md" style={{ width: '50%', height: '50%' }} >

                            {profits.length > 0 ? (<Pie data={chartData}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'Thống kê tong doanh thu',
                                            color: '#FE9938',
                                            font: {
                                                size: 34
                                            },
                                            padding: {
                                                top: 30,
                                                bottom: 30
                                            },
                                            responsive: true,
                                            animation: {
                                                animateScale: true,
                                            }
                                        }

                                    }, 
                                    animation: {
                                        duration: 10,
                                    },

                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }} />) : null}
                        </div>
                        <div className="chart-doughnut text-center col-md" style={{ width: '40%', height: '40%' }} >

                            {profits.length > 0 ? (<Pie data={chartData2}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'Thống kê lai/lo',
                                            color: '#FE9938',
                                            font: {
                                                size: 34
                                            },
                                            padding: {
                                                top: 30,
                                                bottom: 30
                                            },
                                            responsive: true,
                                            animation: {
                                                animateScale: true,
                                            }
                                        }

                                    }, animation: {
                                        duration: 10,
                                    },

                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }} />) : null}
                        </div>
                        {/* <div className="chart-pie" style={{ width: '50%', height: '50%' }}>

                            <ChartQuarterly />

                        </div> */}

                    </div>
                </div>
                <div className="chart d-flex col-md">
                    <div className="chart-doughnut " style={{ width: '50%', height: '50%' }}>

                        {/* <BarChartMonthly />
                     */}
                        {sold.length > 0 ? <Bar data={barData} options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Thống kê người dùng trong tháng',
                                    color: '#FE9938',
                                    font: {
                                        size: 34
                                    },
                                    padding: {
                                        top: 30,
                                        bottom: 30
                                    },
                                    responsive: true,
                                    animation: {
                                        animateScale: true,
                                    }
                                }

                            },
                            tooltips: {
                                mode: 'label',
                                callbacks: {
                                    label: function (tooltipItem, data) {
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
                                        callback: function (value) { return numberWithCommas(value); },
                                    },
                                },
                            }, // scales
                            legend: { display: true }}
                        } /> : null}

                    </div>
                    <div className="chart-pie " style={{ width: '50%', height: '50%' }}>

                        <BarChartQuarterly />

                    </div>
                </div>

                <div className="chart d-flex col-md">
                    <div className="chart-doughnut " style={{ width: '50%', height: '50%' }}>

                        <Line data={data} options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Thống kê khuyến mãi trong tháng',
                                    color: '#FE9938',
                                    font: {
                                        size: 34
                                    },
                                    padding: {
                                        top: 30,
                                        bottom: 30
                                    },
                                    responsive: true,
                                    animation: {
                                        animateScale: true,
                                    }
                                }

                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }} />

                    </div>
                    <div className="chart-pie " style={{ width: '50%', height: '50%' }}>

                        <Line data={data2} options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Thống kê khuyến mãi trong quý',
                                    color: '#FE9938',
                                    font: {
                                        size: 34
                                    },
                                    padding: {
                                        top: 30,
                                        bottom: 30
                                    },
                                    responsive: true,
                                    animation: {
                                        animateScale: true,
                                    }
                                }

                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }} />

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;