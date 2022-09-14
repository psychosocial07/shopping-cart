import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import End from './pages/End';
function App() {

  const [cart,setCart] = useState([]);

  return (
   <Router>
     <Routes>
       <Route path="/" exact element={<ProductListing cart={cart} setCart={setCart}/>}/>
       <Route path="/cart" exact element={<Cart cart={cart} setCart={setCart}/>}/>
       <Route path="/end" exact element={<End/>}/>
       <Route path="*" exact element={<h1>Wrong Page</h1>}/>
     </Routes>
   </Router> 
  );
}

export default App;
