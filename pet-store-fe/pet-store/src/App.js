import './App.css';
import Header from './components/Header/Header';
import Home from './components/Homepage/Home';
import About from './components/About/About';
import Product from './components/Productpage/Product';
import Service from './components/Service/Service';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Product />
      <ProductDetail />
      <Service />
    </div>
  );
}

export default App;
