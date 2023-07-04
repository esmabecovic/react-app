import React, { useEffect, useState } from "react";
// import "./singleproducts.css";
import axios from "axios";
import GetSingleProduct from "../singleproduct/singleproduct";

const GetSingleProducts = () => {
  const [productID, setProductID] = useState();
  const [productTitle, setProductTitle] = useState();
  const [data, setData] = useState([]);
  // let selectedCard = data.map(objekat => {
  //   objekat.find
  // })
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCardId = (event) => {
    let title = event?.target.parentNode.querySelector("h1");
    let id = event?.target.parentNode.querySelector("h1");
    setProductID(id);
    setProductTitle(title);

    document.write(title.innerText);
    document.write(id.innerText);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((product) => (
        <div className="card">
          <img src={product.image} />
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          <h2>{product.price}$</h2>
        </div>
      ))}
    </div>
  );
};

export default GetSingleProducts;
