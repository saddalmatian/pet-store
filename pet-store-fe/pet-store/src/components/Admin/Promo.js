import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
import ModalAddPromo from './ModalAddPromo'
import ModalUpdate from './ModalUpdatePromo'
import SideBar from './Sidebar'
function Promo() {

    const [sideNavExpanded, setSideNavExpanded] = React.useState(false);

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
    const [promos, setPromo] = useState([])
    // var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'

    //add promo
    const [modalShowAddPromo, setModalShowAddPromo] = useState({ show: false });

    useEffect(async () => {
        await axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/promotionals/get-all-promotional',
            headers: {
                accept: 'application/json',
                'authorization-token': localStorage.getItem('token')
            }

        }).then(response => setPromo(response.data))
    }, []);
    promos.forEach((i, a) => console.log(i.Promotional))
    //delete promo
    const removeData = (promo_id) => {
        axios.delete(`http://127.0.0.1:8000/promotionals/delete-promotional?promotional_id=${promo_id}`,
            {
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'authorization-token': localStorage.getItem('token'),
                }
            }
        ).then(res => {
            const del = promos.filter(promo => promo_id !== promo.Promotional.promotional_id);
            setPromo(del);
            renderPromo();
        })
    }

    const renderPromo = () => {
        return promos && promos.map((promo, index) => {
            return (
                <tr key={index} >
                    {console.log(promos)}
                    <td>{promo.Promotional.promotional_name}</td>
                    <td>{promo.Promotional.promotional_sale}</td>
                    {/* <td>{promo.ListProducts.map((product) => product)}</td> */}
                    <td>{promo.Promotional.promotional_description}</td>
                    <td>{promo.Promotional.promotional_start_date}</td>
                    <td>{promo.Promotional.promotional_end_date}</td>
                    <td className="text-center">
                        <button className="btn btn-lg" onClick={() => {
                            setModalUpdate({ show: true, promoID: promo.Promotional.promotional_id });
                        }}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-lg" onClick={() => removeData(promo.Promotional.promotional_id)}>
                            <i className="fa fa-delete-left" ></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    //update promo
    const [modalUpdate, setModalUpdate] = useState([{ show: false, promoID: '' }])
    const [detail, setDetail] = useState();
    async function fetchData(promoID) {
        await axios.get(`http://127.0.0.1:8000/promotionals/get-promotional?promotional_id=${promoID}`,
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': localStorage.getItem('token'),

                }
            }
        )
            .then(res => {
                setDetail(res.data);
            })
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }

    return (
        <div>
            <SideBar
                setSideNavExpanded={setSideNavExpanded}
                sideNavExpanded={sideNavExpanded}
            />
            <div style={contentStyle}>
        <div className="content-promo container-fluid" style={{ paddingLeft: "0" , height: "100%"}}>
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Khuyến mãi" />
                <div >
                    <div className="title text-center" style={{ paddingTop: "10px" }}>Khuyến mãi</div>
                    <ModalUpdate promo={detail} show={modalUpdate.show} onHide={() => setModalUpdate({ show: false, productID: '' })} />
                    <div className="d-flex btn col-md gap-4 p-3 round-3 justify-content-end">
                        <button className="btn btn-primary btn-lg p-3  round-3 " onClick={() => setModalShowAddPromo({ show: true, promoID: '' })} >Thêm</button>
                        <ModalAddPromo show={modalShowAddPromo.show} onHide={() => setModalShowAddPromo(false)} />
                    </div>
                    <div className="row d-flex justify-content-start">
                        <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                            <thead>
                                <tr className="text-center" >
                                    <th>Tên khuyến mãi</th>
                                    <th>Số lượng</th>
                                    <th>Loại sản phẩm</th>
                                    <th>Mô tả</th>
                                    <th>Thời gian bắt đầu</th>
                                    <th>Thời gian kết thúc</th>
                                    <th>Cập nhật</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promos && promos.map((promo, index) => {
                                    return (
                                        <tr key={index} >
                                            {console.log(promo.ListProducts.map((product) => product.product_name))}
                                            <td>{promo.Promotional.promotional_name}</td>
                                            <td>{promo.Promotional.promotional_sale}</td>
                                            <td><select>
                                                {promo.ListProducts.map((product) =>
                                                    <option key={product.id}>
                                                        {product.product_name}
                                                    </option>)}
                                            </select>
                                            </td>
                                            <td>{promo.Promotional.promotional_description}</td>
                                            <td>{promo.Promotional.promotional_start_date}</td>
                                            <td>{promo.Promotional.promotional_end_date}</td>
                                            <td className="text-center">
                                                <button className="btn btn-lg" onClick={() => {
                                                    setModalUpdate({ show: true, promoID: promo.Promotional.promotional_id });
                                                    fetchData(promo.Promotional.promotional_id)
                                                }}>
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button className="btn btn-lg" onClick={() => removeData(promo.Promotional.promotional_id)}>
                                                    <i className="fa fa-delete-left" ></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div></div>
    )
}
export default Promo;