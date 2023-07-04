import React, { useEffect, useState } from "react";
import "./categories.css";
import axios from "axios";
import Header from "../header";

const GetJewelry = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {data.map((product) => (
          <div className="card">
            <img src={product.image} />
            <h1>{product.title}</h1>
            <h2>{product.price}$</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetJewelry;
