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
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <Header/>
      <SignUp />
      <SignIn />
      <Home />
      <About />
      <Product />
      <ProductDetail />
      <Service />
      <ServiceDetail />
    </div>
  );
}

export default App;
