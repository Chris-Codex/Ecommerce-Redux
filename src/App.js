import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import Main from './components/Main/Main';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="filtered-products/:type" element={<FilteredProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
