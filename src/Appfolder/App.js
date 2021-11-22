import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import "./Body/index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Footer/Footer";
import Clothing from "./Clothing";
import Accessories from './Accessories'
import Cart from './Cart'

const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Body/>}>
        </Route>
        <Route exact path="/Clothing" element={<Clothing/>}>
        </Route>
        <Route exact path="/Accessories" element={<Accessories/>}>
        </Route>
        <Route exact path="/Cart" element={<Cart/>}>
        </Route>
      </Routes>
       <Footer />
    </BrowserRouter>
  
  );
};

export default App;
