import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import Header from "./Header"
import 'chart.js/auto';
import { Pie, Bar } from "react-chartjs-2";
import axios from 'axios';
import SideBar from './Sidebar'
import Login from'./SignIn'



function Dashboard() {

    const [sideNavExpanded, setSideNavExpanded] = React.useState(false);

    //custom sidebar 
    function handleResize() {
        // iPhone X width, for example
        if (window.innerWidth <= 375) {
            setSideNavExpanded(false);

            // write other logic here such as disabling hamburger button
        }
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);

        handleResize(); // on-component-mount, check already to see if user has a small device

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const contentStyle = {
        marginLeft: sideNavExpanded ? "250px" : "70px", // arbitrary values
        transition: "margin 0.2s ease"
    };

    const initValues = {
        type: 'Accessories',
        sort: 'desc'
    }
    const [select, setSelect] = useState(initValues);

    console.log(initValues.type)
    const [profits, setProfits] = useState([])
    const token = localStorage.getItem('token')
    console.log(token)
    //product
    try {

        useEffect(async function () {
            await axios.get(`http://127.0.0.1:8000/dashboards/get-most-profit?product_type=Accessories&order_by=desc`,
                {
                    headers: {
                        accept: 'application/json',
                        'authorization-token': token

                    }
                }
            )
                .then(res => { setProfits(res.data); console.log(res.data) })
                .catch(err => console.log(JSON.stringify(err, null, 2)))
        }, [])

    } catch (e) {
        console.log(e)
    }

    console.log(profits.ListProduct && profits.ListProduct)
    let chartData;
    //Tong doanh thu

    const labels = [];
    const dataLabel = [];
    const dataProfit = [];
    const dataSold = []

    profits.ListProduct && profits.ListProduct.map((pro, i) => { return (dataProfit.push(pro.Profit), labels.push(pro.ProductName)) })


    console.log(dataProfit, labels)
    labels?.map((label, index) => dataProfit[index] > 0 ? dataLabel.push(label) : null)
    console.log(dataLabel)
    const orginalProfit = dataProfit?.map((d, i) => d > 0 ? d : 0);
    chartData = {
        labels: dataLabel,
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
    // console.log(customLabel);
    //service
    const [ser, setSer] = useState([])
    try {

        useEffect(async function () {
            await axios.get(`http://127.0.0.1:8000/dashboards/get-profit-service`,
                {
                    headers: {
                        accept: 'application/json',
                        'authorization-token': token

                    }
                }
            )
                .then(res => { setSer(res.data); console.log(res.data) })
                .catch(err => console.log(JSON.stringify(err, null, 2)))
        }, [])

    } catch (e) {
        console.log(e)
    }
    console.log(ser)

    let chartData2;


    const labelsSer = [];
    const totalSer = ser.Total;
    const totalProduct = profits.TotalProfit
    const totalProfit = [totalProduct, totalSer]

    console.log(totalProduct)
    // const customLabel = labels?.map((label, index) => `${label}`)

    chartData2 = {
        labels: ['Sản phẩm ', 'Dịch vụ'],
        datasets: [
            {
                label: "Markets Monitored",
                backgroundColor: [
                    "#83ce83",

                    "#00A6B4",

                ],
                hoverOffset: 4,
                data: totalProfit,
            },]

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
            if (i < 10) {
                labels.push(sold[i].ProductName)
                data.push(sold[i].ProductSold);
            }

        }
        console.log(data[0])
        const data1 = data[0]
        console.log(labels, data)
        const customLabel = labels?.map((label, index) => index < 10 ? `Top ${index + 1}-${label} ` : null)
        const customLabelSub = labels?.map((label, index) => index < 10 ? `${label}: ${data[index]}` : null)
        barData = {
            labels: customLabel,
            datasets: [
                {
                    label: 'Bán được',
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
    const ser1Profit = ser.BathingProfit;
    const ser2Profit = ser.BoardingProfit;
    const ser3Profit = ser.GroomingProfit;
    const ser4Profit = ser.WalkingProfit;
    const serProfit = [ser1Profit, ser2Profit, ser3Profit, ser4Profit]
    const barDataSer = {
        labels: ['Dịch vụ tắm thú cưng', 'Dịch vụ trông hộ thú cưng', 'dịch vụ cắt tỉa lông ', 'Dịch vụ dắt thú cưng đi dạo'],
        datasets: [{
            label: 'Doanh thu',
            data: serProfit,
            backgroundColor: "rgba(55, 160, 225, 0.7)",
            hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
            hoverBorderWidth: 2,
            hoverBorderColor: 'lightgrey'
        }]
    }

    return (
        !localStorage.getItem('token') ? <Login/>  : (
        <div>
            <SideBar
                setSideNavExpanded={setSideNavExpanded}
                sideNavExpanded={sideNavExpanded}
            />
            <div style={contentStyle}>
                <div className="content-dashboard container-fluid" style={{ paddingLeft: "0" }}>
                    <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Trang chủ" />
                        <div >
                            <div className="" style={{ marginTop: '10px' }}>
                                <div className="chart d-flex col-md" >

                                    <div className="chart-doughnut text-center col-md" style={{ width: '40%', height: '40%' }} >

                                        {profits.ListProduct && profits.ListProduct.length > 0 ? (<Pie data={chartData}
                                            options={{
                                                plugins: {
                                                    title: {
                                                        display: true,
                                                        text: 'Thống kê tổng doanh thu',
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
                                                    duration: 300,
                                                    transition:20
                                                },

                                                legend: {
                                                    display: true,
                                                    position: 'right'
                                                }
                                            }} />) : null}
                                    </div>
                                    <div className="chart-doughnut text-center col-md" style={{ width: '40%', height: '40%' }} >

                                        {profits.ListProduct && profits.ListProduct.length > 0 ? (<Pie data={chartData2}
                                            options={{
                                                plugins: {
                                                    title: {
                                                        display: true,
                                                        text: 'Thống kê tổng doanh thu của cửa hàng',
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

                                                },  animation: {
                                                    duration: 300,
                                                    transition:20
                                                },

                                                legend: {
                                                    display: true,
                                                    position: 'right'
                                                }
                                            }} />) : null}
                                    </div>
                                   

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
                                                text: 'Top 10 sản phẩm bán chạy nhất',
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
                                                    return console.log(data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel));
                                                }
                                            }
                                        },
                                        scales: {
                                            x: {
                                                stacked: true,
                                                gridLines: { display: false },
                                                display: false,

                                            },
                                            y: {
                                                stacked: true,
                                                ticks: {
                                                    callback: function (value) { return numberWithCommas(value); },
                                                },
                                            },
                                        }, // scales
                                        legend: { display: true }
                                    }
                                    } /> : null}

                                </div>
                                <div className="chart-pie " style={{ width: '50%', height: '50%' }}>

                                    <Bar data={barDataSer} options={{
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: 'Thống kê dịch vụ',
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

                                        }}}/>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>)
    )
}
export default Dashboard;