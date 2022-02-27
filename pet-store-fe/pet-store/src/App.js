import './App.css';
import Header from './components/Header/Header';
import Home from './components/Homepage/Home';
import About from './components/About/About';
import Product from './components/Productpage/Product';
import Service from './components/Service/Service';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <SignUp />
      <Home />
      <About />
      <Product />
      <ProductDetail />
      <Service />
      <ServiceDetail />
      <Cart />
    </div>
  );
}

export default App;
