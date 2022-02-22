import './App.css';
import Header from './components/Header/Header';
import Home from './components/Homepage/Home';
import About from './components/About/About';
import Product from './components/Productpage/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Product />
    </div>
  );
}

export default App;
