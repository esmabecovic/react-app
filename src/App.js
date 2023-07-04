import { useEffect, useState } from "react";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import axios from "axios";
// import Header from "./components/header/navbar";
// import GetJewelry from "./components/categories/jewelry";
// import GetProducts from "./components/products/products";
// import GetElectronics from "./components/categories/electronics";
// import GetMen from "./components/categories/men";
// import GetWomen from "./components/categories/women";
// import GetSingleProducts from "./components/singleproduct/singleproduct";
import GetCity from "./components/weather/weather";
// import ReactQuery from "./components/query/query";

//JSX
function App() {
  return (
    <div>
      {/* <ReactQuery /> */}
      {/* <Header />
      <Routes>
        <Route path="/products" element={<GetProducts />} />
        <Route path="/jewelry" element={<GetJewelry />} />
        <Route path="/electronics" element={<GetElectronics />} />
        <Route path="/men" element={<GetMen />} />
        <Route path="/women" element={<GetWomen />} />
        <Route path="/singleproduct" element={<GetSingleProducts/>}/>
      </Routes> */}
      <GetCity/>
    </div>
  );
}

export default App;
