import Header from"./Header"
import Sidebar from"./Sidebar"
import Dashboard from "./Dashboard"
import Product from "./Product"
function Admin(){
    return(
        <div className="container-fluid admin" style={{backgroundColor:"var(--bg-color)"}}>
            <div className="row">

                <div className="col-md"><Sidebar /><Header/>
                <div className="col-md" style={{marginLeft:"80px"}}>
                            <Dashboard/> <Product/>
                        </div>
            
                </div>
            </div>
            
        </div>
    )
}
export default Admin;