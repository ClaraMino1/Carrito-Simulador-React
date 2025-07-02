import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import { useEffect, useState } from "react";
import { ItemDetailsPage } from './pages/ItemDetailsPage/ItemDetails';


function App() {
  const [products, setProducts] = useState([]);
  
      async function getProducts() {
          const response = await fetch(
              'https://fakestoreapi.com/products'
          );
          const data = await response.json();
          setProducts(data);
      }
  
      useEffect(() => {
          getProducts();
      }, []);
  return (
    
    <BrowserRouter basename="/Carrito-Simulador-React">
      
      <Routes>
        {/* se les pasa como parametro la api */}
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/ItemDetails/:id" element={<ItemDetailsPage products={products} />} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
