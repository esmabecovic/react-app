import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data;
};

const ReactQuery = () => {
  const { data, isLoading, isError, error } = useQuery("product", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <ul>
          <li key={product.id}>{product.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default ReactQuery;
