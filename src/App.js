import React from "react";
import { CartProvider } from "@context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Payment from "./pages/payment";



function App() {
  return (
 <CartProvider>
    <Router> 
    <Routes> 
       <Route path="/" element={<Home />}></Route>
       <Route path="/payment" element={<Payment />}></Route>
   
    </Routes>
    </Router>
 </CartProvider>
  );
}

export default App;
