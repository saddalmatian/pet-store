import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import About from './components/About/About';
import Product from './components/Productpage/Product';
import Service from './components/Service/Service';
import ProductDetail from './components/ProductDetail/ProductDetail';
import BathingService from './components/ServiceDetail/BathingService';
import GroomingService from './components/ServiceDetail/GroomingService';
import BoardingService from './components/ServiceDetail/BoardingService';
import WalkingService from './components/ServiceDetail/WalkingService';
import Combo1 from './components/ServiceDetail/Combo1';
import Combo2 from './components/ServiceDetail/Combo2';
import Combo3 from './components/ServiceDetail/Combo3';
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import Login from './components/Admin/SignIn';
import Dashboard from "./components/Admin/Dashboard"
import ProductAd from "./components/Admin/Product"
import PromoAd from "./components/Admin/Promo"
import StaffAd from "./components/Admin/Staff"
import BillAd from "./components/Admin/Bill"
import SerAd from "./components/Admin/Service"
import BillDetail from './components/Info/BillDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:idType' element={<Product />} />
        <Route path='/product/search_text=:searchText' element={<Product />} />
        <Route path='/product-list/:petType' element={<Product />} />
        <Route path='/product/most_sold=:mostSold' element={<Product />} />
        <Route path='/product/order_by=:isDesc' element={<Product />} />
        <Route path='/product/order_by=:isAsc' element={<Product />} />
        <Route path='/product_detail/:id' element={<ProductDetail />} />
        <Route path='/service' element={<Service />} />
        <Route path='/bathing_service' element={<BathingService />} />
        <Route path='/grooming_service' element={<GroomingService />} />
        <Route path='/boarding_service' element={<BoardingService />} />
        <Route path='/walking_service' element={<WalkingService />} />
        <Route path='/combo1' element={<Combo1 />} />
        <Route path='/combo2' element={<Combo2 />} />
        <Route path='/combo3' element={<Combo3 />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/info' element={<Info />} />
        <Route path='/bill_detail/:idBill' element={<BillDetail />} />
        {/* <Route path='/error' element={alert('Thanh toán không thành công!')} /> */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/product' element={<ProductAd />} />
        <Route path='/admin/promo' element={<PromoAd />} />
        <Route path='/admin/staff' element={<StaffAd />} />
        <Route path='/admin/bill' element={<BillAd />} />
        <Route path='/admin/service' element={<SerAd />} />
      </Routes>
      {/* <Admin/> */}
      <Footer />

    </div>
  );
}

export default App;
