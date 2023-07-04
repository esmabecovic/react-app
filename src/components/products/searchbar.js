import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ onText }) => {
  const searchProduct = (e) => {
    const search = e.target.value;
    onText(search);
  };

  return <input onChange={searchProduct} placeholder="Search for product..." />;
};

export default SearchBar;
