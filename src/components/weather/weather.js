import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import SearchBar from "../products/searchbar";

// const API_KEY = `38841c854f77441f8ff132030230307`
const API_KEY = `dde669c54dbec53c562abad52d716702`;
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const fetchData = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
  );
  const data = response.data;
  return data;
};

console.log(fetchData());

const GetCity = () => {
  const [dataFromSearch, setDataFromSearch] = useState("");
  const { data, isLoading, isError, error } = useQuery("city", fetchData);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  const updateSearch = (e) => {
    setDataFromSearch(e);
  };
  const filterData = data.filter((city) =>
    city.name.toLowerCase().includes(dataFromSearch.toLowerCase())
  );

  return (
    <div className="main">
      <div className="searchbar">
        <SearchBar onText={updateSearch} />
      </div>
      <div className="container">
        {filterData(city => (
          <div className="card" key={city.id}>
            <h1>{city.name}</h1>
            <img src={city.icon} />
            <h2>{city.main.temp}</h2>
            <h2>{city.clouds.all}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetCity;
