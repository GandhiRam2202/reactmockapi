import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Components/Home'
import Product from './assets/Components/Product';
import Edit from './assets/Components/Edit';
import Create from './assets/Components/Create';




const App = () => {
  const [id,setId]=useState(0)
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Product setId={setId}/>}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/edit/:id' element={<Edit id={id}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;