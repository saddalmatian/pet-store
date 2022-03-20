import React from 'react';
import Header from"./Header"
import Dashboard from "./Dashboard"
import Product from "./Product"
import Promo from "./Promo"
import Staff from "./Staff"
import Bill from "./Bill"
import { Routes, Route} from 'react-router-dom';



function Admin(){
    return(
        <div className="container-fluid admin" style={{backgroundColor:"var(--bg-color)"}}>
            <div className="row">

                <div className="col-md" style={{paddingLeft:"0"}}><Header/>
                <div className="col-md" style={{marginLeft:'64px'}} >
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/promo' element={<Promo />} />
                    <Route path='/staff' element={<Staff />} />
                    <Route path='/bill' element={<Bill />} />
                    
                </Routes>
                        </div>
            
                </div>
            </div>
            
        </div>
    )
}
export default Admin;