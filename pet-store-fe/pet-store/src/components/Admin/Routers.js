import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Product from './Product';
import Staff from './Staff';
import Sidebar from './Sidebar';
import React from 'react';

function Routers(){

    return (
        <BrowserRouter>
        <Sidebar/>
            <Routes>
                
                <Route path='/' element={<Dashboard />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/staff' element={<Staff />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );

}
export default Routers;