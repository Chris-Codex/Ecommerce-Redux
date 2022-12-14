import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import Main from './components/Main/Main';
import SingleProduct from './components/FilteredProducts/SingleProduct';
import { useSelector } from 'react-redux';





function App() {
  const cart = useSelector((state) => state.cart.cart)
  const totalAmout = useSelector((state) => state.cart.totalAmount)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  console.log("cart", cart)
  console.log("amout", totalAmout)
  console.log("price", totalPrice)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="filtered-products/:type" element={<FilteredProducts />} />
          <Route path='filtered-products/:type/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
