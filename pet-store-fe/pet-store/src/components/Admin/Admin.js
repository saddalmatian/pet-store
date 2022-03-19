import React from 'react';
import Header from"./Header"
import Dashboard from "./Dashboard"
import Product from "./Product"
import Promo from "./Promo"
import Staff from "./Staff"
import Bill from "./Bill"
import React from 'react';


function Admin(){
    return(
        <div className="container-fluid admin" style={{backgroundColor:"var(--bg-color)"}}>
            <div className="row">

                <div className="col-md" style={{paddingLeft:"0"}}><Header/>
                <div className="col-md" style={{marginLeft:'64px'}} >
                            <Dashboard/> <Product/> <Promo/> <Staff/>  <Bill/>
                        </div>
            
                </div>
            </div>
            
        </div>
    )
}
export default Admin;