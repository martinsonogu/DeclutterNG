import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/navbar';
import Shop from './components/Pages/Shop/shop';
import Cart from './components/Pages/Cart/cart';
import ShopContextProvider from './context/shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/"  exact element= {<Shop/>}/>
            <Route path="/cart" element= {<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
