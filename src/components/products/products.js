import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import GetSingleProduct from "../singleproduct/singleproduct";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import { useQuery } from "react-query";

const fetchData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data;
};
const GetProducts = () => {
  const [dataFromSearch, setDataFromSearch] = useState("");
  const { data, isLoading, isError, error } = useQuery("product", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  const updateSearch = (e) => {
    setDataFromSearch(e);
  };

  const filterData = data.filter((product) =>
    product.title.toLowerCase().includes(dataFromSearch.toLowerCase())
  );

  return (
    <div className="container">
      <div className="searchbar">
        <SearchBar onText={updateSearch} />
      </div>
      <div className="card-container">
        {filterData.map((product) => (
          <div className="card">
            <img src={product.image} />
            <h1>{product.title}</h1>
            <h2>{product.price}$</h2>
            <Link to={"/singleproduct"}>
              <button className="more-btn">See more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProducts;
