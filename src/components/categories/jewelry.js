import React, { useState } from "react";
import "./categories.css";
import axios from "axios";
// import Header from "../header/navbar";
import { useQuery } from "react-query";
import SearchBar from "../products/searchbar";
import { Link } from "react-router-dom";

const fetchData = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const data = response.data;
  return data;
};

const GetJewelry = () => {
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
    <div className="main">
      <div className="searchbar">
        <SearchBar onText={updateSearch} />
      </div>
      <div className="container-card">
        {filterData.map((product) => (
          <div className="card" key={product.id}>
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

export default GetJewelry;
