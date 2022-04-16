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
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:idType' element={<Product />} />
        <Route path='/product-list/:petType' element={<Product />} />
        <Route path='/product-most-sold/:mostSold' element={<Product />} />
        <Route path='/product-desc/:isDesc' element={<Product />} />
        <Route path='/product-asc/:isAsc' element={<Product />} />
        <Route path='/product_detail/:id' element={<ProductDetail />} />
        <Route path='/service' element={<Service />} />
        <Route path='/bathing_service' element={<BathingService />} />
        <Route path='/grooming_service' element={<GroomingService />} />
        <Route path='/boarding_service' element={<BoardingService />} />
        <Route path='/walking_service' element={<WalkingService />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
