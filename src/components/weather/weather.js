import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import SearchBar from "../products/searchbar";

const API_KEY = `dde669c54dbec53c562abad52d716702`;
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const fetchData = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = response.data;
  return data;
};

console.log(fetchData("London"));

const GetCity = () => {
  const [dataFromSearch, setDataFromSearch] = useState("");
  const { data, isLoading, isError, error } = useQuery("city", fetchData);
  fetchData(dataFromSearch )

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const updateSearch = (e) => {
    setDataFromSearch(e);
  };

  const filterData =
    data && data.name.toLowerCase().includes(dataFromSearch.toLowerCase());

  return (
    <div className="main">
      <div className="searchbar">
        <SearchBar onText={updateSearch} />
      </div>
      <div className="container">
        {filterData && (
          <div className="card" key={data.id}>
            <h1>{data.name}</h1>
            {/* Replace 'city.icon' with the correct property from the API response */}
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
            <h2>{data.main.temp}</h2>
            <h2>{data.clouds.all}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetCity;
